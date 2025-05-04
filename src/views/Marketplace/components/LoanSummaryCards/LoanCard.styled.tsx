import styled from "styled-components";
import dangerAlertBg from "assets/images/danger-alert-bg.png";

const LoanInfoWrapper = styled.div<{ isInModal: boolean }>`
  width: 208px;
  padding: 11px 14px 11px 17px;
  display: flex;
  flex-direction: column;
  margin: 20px auto 20px auto;
  position: relative;
  cursor: pointer;
  ${({ theme }) => theme.mediaQueries.md} {
    ${(props) => props.isInModal && `
      width: 287px;
      margin:28px auto 20px auto;
    `}
  }
`;

const LoanInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .chainlink {
    margin-left: auto;
    margin-right: 10px;
  }
`;
const LoanInfoBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px 0;
  .error {
    font-size: 9px;
    margin-left: auto;
  }
`;

// use span elements with .label and .value classes within LoanInfoField
const LoanInfoField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13.12px;
  line-height: 18.96px;

  .value {
    font-weight: 600;
  }

  .with-icon {
    display: flex;
    align-items: center;
    gap: 0 5px;
  }
`;

const FantsyText = styled.p`
  font-weight: 800;
  margin: 10px 0;
  display: inline-block;
`;

const LoanInfoFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  gap: 15px 0;
  .hidden {
    visibility: hidden;
  }
`;

const DangerAlert = styled.div`
  background-image: url(${dangerAlertBg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 5px 25px 10px 20px;
  position: absolute;
  right: 2px;
  top: -4%;
`;

export {
  LoanInfoWrapper,
  LoanInfoHeader,
  LoanInfoBody,
  LoanInfoField,
  FantsyText,
  LoanInfoFooter,
  DangerAlert,
};
