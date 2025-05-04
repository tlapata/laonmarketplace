import { useEffect, useState } from "react";
import styled from "styled-components";


type TimeObj = {
  days: number;
  hours: number;
  minutes: number;
};

const Timer = ({ loan, isInModal, isLoanDetails }) => {
  const initialTime: TimeObj = {
    days: 0,
    hours: 0,
    minutes: 0,
  };
  const termLength = loan.termLength;
  const updatedAt = +loan.activatedAt;

  const expiryDate = (date: number, days: number) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  const calculateTimeLeft = () => {
    const date = expiryDate(updatedAt, termLength);
    let difference = +new Date(date) - +new Date();

    let timeLeft: TimeObj = initialTime;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
      // Add an extra minute
      timeLeft.minutes += 1;

      // Adjust hours and days if necessary
      if (timeLeft.minutes >= 60) {
        timeLeft.minutes -= 60;
        timeLeft.hours += 1;
      }
      if (timeLeft.hours >= 24) {
        timeLeft.hours -= 24;
        timeLeft.days += 1;
      }
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState<TimeObj>(calculateTimeLeft());

  useEffect(() => {
    if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0) {
      return;
    }
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <StyledContainer isLoanDetails={isLoanDetails} isInModal={isInModal}>
      <TimerLabel isLoanDetails={isLoanDetails} isInModal={isInModal}>Term Clock:</TimerLabel>
      <TimerFieldsContainer isLoanDetails={isLoanDetails} isInModal={isInModal}>
          <TimerFieldValue
            variant={
              timeLeft.days === 0 &&
                timeLeft.hours <= 24 &&
                timeLeft.minutes <= 60
                ? "danger"
                : "primary"
            }
          >
            {timeLeft?.days}D
          </TimerFieldValue>
          <TimerFieldValue
            variant={
              timeLeft.days === 0 &&
                timeLeft.hours <= 24 &&
                timeLeft.minutes <= 60
                ? "danger"
                : "primary"
            }
          >
            {timeLeft?.hours}H
          </TimerFieldValue>
          <TimerFieldValue
            variant={
              timeLeft.days === 0 &&
                timeLeft.hours <= 24 &&
                timeLeft.minutes <= 60
                ? "danger"
                : "primary"
            }
          >
            {timeLeft?.minutes}M
          </TimerFieldValue>
      </TimerFieldsContainer>
    </StyledContainer>
  );
};


const StyledContainer = styled.div<{
  isLoanDetails: boolean,
  isInModal: boolean
}>`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px dashed rgba(255, 255, 255, 0.06);
`;

const TimerLabel = styled.div<{ isLoanDetails: boolean, isInModal: boolean }>`
  margin-right: 10px;
  font-size: ${(props) => props.theme.fonts.sm}rem;
  opacity: 0.4;
`;

const TimerFieldsContainer = styled.div<{ isLoanDetails: boolean, isInModal: boolean }>`
  display: flex;
  gap: 5px;
`;

const TimerField = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimerFieldValue = styled.div<{ variant: "primary" | "danger" }>`
  white-space: nowrap;
`;

const TimerFieldLabel = styled.div`
  text-align: center;
`;

export default Timer;