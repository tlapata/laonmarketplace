import styled from "styled-components";
import CardBG from "assets/images/stats-select-card.svg";
import HoverBG from "assets/images/stats/card-selected.svg";
import { toCommas } from "../../../utils/conversion";
import selectedTick from "assets/images/loanbuilder/selectedTick.svg";
import { Switch, SwitchThumb } from "components/Form/Switch";
import { LoanStatus, TokenTypes } from "config/constants/loans";
import { useState, useEffect } from "react";
import { __token_collateral_set } from "config/constants/sets";

interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  loan_id?: number;
  loan_amt?: number;
  stable_coin?: string;
  days_left?: number;
  apy?: number;
  apyFee?: number;
  type?: string;
  collateral?: number;
  ltv?: number;
  priceImpact?: number;
  autosell?: boolean;
  cardClass?: string;
  loanType?: boolean;
  cardType?: string;
  setAutoSell?: Function;
  status?: string;
  autoSell?: boolean;
  activatedAt?: string;
  created?:string;
  closedDate?: string;
}

type TimeObj = {
  days: number;
  hours: number;
  minutes: number;
};

const StatsCard: React.FC<StatProps> = ({
  loan_id,
  loan_amt,
  stable_coin,
  days_left,
  apy,
  apyFee,
  type,
  collateral,
  ltv,
  priceImpact,
  autosell,
  cardClass,
  loanType,
  cardType,
  setAutoSell,
  status,
  autoSell,
  activatedAt,
  created,
  closedDate,
}) => {
  const initialTime: TimeObj = {
    days: 0,
    hours: 0,
    minutes: 0,
  };
  const termLength = days_left;
  const updatedAt = +activatedAt;

  const expiryDate = (date, days) => {
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
  
  // Offer Date
  var createdDate: string;
  if (created) {
    const unixTimestamp = parseInt(created);
    const date = new Date(unixTimestamp);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    createdDate = formattedDate; 
  }

  // activatedAt
  if (activatedAt) {
    const unixTimestamp = parseInt(activatedAt);
    const date = new Date(unixTimestamp);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    activatedAt = formattedDate; 
  }

  // Closed date
  if (closedDate) {
    const unixTimestamp = parseInt(closedDate);
    const date = new Date(unixTimestamp);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    closedDate = formattedDate; 
  }

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
    <>
      {cardType === "details" ? (
        <>
          <DetailCard>
            <span className="label">Loan Amt</span>
            <span className="value green">{`$${toCommas(loan_amt)}`}</span>
          </DetailCard>
          <DetailCard>
            <span className="label">APY Offer</span>
            <span className="value">{apy}%</span>
          </DetailCard>
          <DetailCard>
            <span className="label">Earnings</span>
            <span className="value">${apyFee.toFixed(2)}</span>
          </DetailCard>
          <DetailCard>
            <span className="label">Term</span>
            <span className="value">
              {status === LoanStatus.INACTIVE ? (days_left/1440).toFixed(2) : (timeLeft.days/1440).toFixed(2)} Days
            </span>
          </DetailCard>
          <DetailCard>
            <span className="label">Stablecoin</span>
            <span className="value">{stable_coin}</span>
          </DetailCard>
          <DetailCard>
            <span className="label">LTV</span>
            <span className="value">{`${ltv.toFixed(1)} %`}</span>
          </DetailCard>
          <DetailCard>
            <span className="label">Price Impact</span>
            <span className="value">{`${priceImpact.toFixed(3)}%`}</span>
          </DetailCard>
          {/*<DetailCard>
            <span className="label">Collateral:</span>
            <span className="value">${toCommas(collateral)}</span>
          </DetailCard>*/}

          {(__token_collateral_set.has(type)) && (
            <>
              {status === LoanStatus.INACTIVE ? (
                <DetailCard>
                  <span className="label">Auto Sell</span>
                  <span className="value">
                    <Switch
                      onCheckedChange={(e) => {
                        setAutoSell(e);
                      }}
                    >
                      <SwitchThumb />
                    </Switch>
                  </span>
                </DetailCard>
              ) : (
                <DetailCard>
                  <span className="label">Auto Sell</span>
                  <span className="value">Disabled
                    {/*<Switch
                      disabled={true}
                      checked={autoSell}
                      onCheckedChange={(e) => {
                        setAutoSell(e);
                      }}
                    >
                      <SwitchThumb />
                    </Switch>*/}
                  </span>
                </DetailCard>
              )}
            </>
          )}

          <hr/>
          <DetailCard>
            <span className="label">Offer Date</span>
            <span className="value">{createdDate}</span>
          </DetailCard>
          <DetailCard>
            <span className="label">Activation</span>
            <span className="value">{activatedAt ? activatedAt : "--"}</span>
          </DetailCard>
          <DetailCard>
            <span className="label">Close Date</span>
            <span className="value">{closedDate ? closedDate : "--"}</span>
          </DetailCard>

          {cardClass === "selected" ? (
            <CheckMark>
              <img src={selectedTick} alt="" />
            </CheckMark>
          ) : null}
        </>
      ) : (
        <Card className={cardClass}>
          <CardTitle className="title">{type.replaceAll("_", " ")}</CardTitle>
          <CardRow>
            <span>ID:</span>
            <span className="value">{loan_id}</span>
          </CardRow>
          <CardRow>
            <span>Loan Amt:</span>
            <span className="value">{`$${toCommas(loan_amt)}`}</span>
          </CardRow>
          <CardRow>
            <span>Stablecoin:</span>
            <span className="value">{stable_coin}</span>
          </CardRow>
          <CardRow>
            <span>Days Left:</span>
            <span className="value">{days_left}</span>
          </CardRow>
          <CardRow>
            <span>APY%</span>
            <span className="value">{apy}</span>
          </CardRow>
          <CardRow>
            <span>Type</span>
            <span className="value">{loanType ? "Private" : "Public"}</span>
          </CardRow>
          <CardRow>
            <span>Collateral:</span>
            <span className="value">{toCommas(collateral)}</span>
          </CardRow>
          <CardRow>
            <span>LTV:</span>
            <span className="value">{`${ltv.toFixed(1)} %`}</span>
          </CardRow>
          {type !== TokenTypes.SINGLE_NFT && type !== TokenTypes.MULTI_NFT ? (
            <CardRow>
              <span>Auto Sell:</span>
              <span className="value">{autosell ? "Yes" : "No"}</span>
            </CardRow>
          ) : null}

          {cardClass === "selected" ? (
            <CheckMark>
              <img src={selectedTick} alt="" />
            </CheckMark>
          ) : null}
        </Card>
      )}
    </>
  );
};


const DetailCard = styled.div`
  font-weight: 600;
  padding: 8px 0;

  .label {
    font-size: 0.875rem;
    color: rgba(134, 135, 188, 0.4);
    display: inline-block;
    width: 85px;
    padding-right: 10px;
  }

  .value {
    white-space: nowrap;
    
    &.green{
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;


const CheckMark = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  display: flex;
  pointer-events: none;
  top: 0px;
  left: 0px;
  padding: 36px;
`;

const Card = styled.div`
  width: 177px;
  z-index: 2;
  margin-bottom: 25px;
  padding-top: 11.2px;
  padding-left: 13.7px;
  padding-right: 13.7px;
  padding-bottom: 16px;
  background: url(${CardBG});
  cursor: pointer;
  height: fit-content;
  :hover {
    background: url(${HoverBG});
    color: white;
    transform: scale(1.04);
    .title {
      -webkit-background-clip: text;
      -webkit-text-fill-color: white;
      background-clip: text;
      text-fill-color: white;
    }
  }
  &.selected {
    background: url(${HoverBG});
    color: white;
    transform: scale(1.04);
    .title {
      -webkit-background-clip: text;
      -webkit-text-fill-color: white;
      background-clip: text;
      text-fill-color: white;
    }
  }
  transition: all 300ms ease-in-out;
  ${({ theme }) => theme.mediaQueries.md} {
    width:100%;
  }
`;

const CardTitle = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textAccent};
  margin-bottom: 17.75px;
`;

const DetailCardTitle = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textAccent};
  margin-bottom: 17.75px;
  @media (max-width: 1300px) {
    font-size: 14px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size:15.57px;
  }
`;

const CardRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  span {
    font-weight: 400;
  }
  .value {
    font-weight: 600;
  }
`;

export default StatsCard;