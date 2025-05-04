import styled from "styled-components";
import { Switch, SwitchThumb } from "components/Form/Switch";

import GreenCircle from "assets/images/marketplace/loancard-green-circle.png";
import InfoBg from "assets/images/marketplace/loancard-info-bg.png";
import FieldLeft from "assets/images/marketplace/loancard-field-left.png";
import FieldRight from "assets/images/marketplace/loancard-field-right.png";
import HeaderBg from "assets/images/marketplace/loancard-header-bg.png";
import LoanChecked from "assets/images/marketplace/loancard-checkmark.png";
import FieldTopBar from "assets/images/marketplace/loancard-green-fileds-bar.svg";
import InfoIcon from "assets/images/loanbuilder/info.svg";
import CollateralSummaryDialog from "./CollateralSummaryDialog";
import { TokenTypes } from "config/constants/loans";
import type { LoanOffer } from "../api/getLoanOffers";
import { useAppDispatch, useAppSelector, RootState } from "state";
import { setSelectedLoans } from "../loansSlice";
import type { CollateralType } from "../types";
import ReactTooltip from "react-tooltip";
import { ConvertToExponential, reduceNumber, toCommas } from "utils/conversion";
import EyeIcon2 from "assets/icons/eye-icon-2.svg";
import { useHistory } from "react-router-dom";
import { Routes } from "config/constants/routes";
import { LoanStatus } from "config/constants/loans";
import { __nft_collateral_set } from "config/constants/sets";
type LoanCardProps = {
  loanData: LoanOffer;
  setAutoSell: any;
  isActiveLoan: boolean;
};

const LoanCard: React.FC<LoanCardProps> = ({
  loanData,
  setAutoSell,
  isActiveLoan,
}) => {
  const dispatch = useAppDispatch();
  const { selected } = useAppSelector((state: RootState) => {
    return {
      selected: state.loans.selectedLoans.hasOwnProperty(loanData?.id),
    };
  });
  const history = useHistory();
  const totalCollateral = loanData?.collateral
    .map((data) => data["price"])
    .reduce((partialSum, number) => partialSum + number, 0);
  const toggle = (e) => {
    setAutoSell(loanData?.id, e);
  };
  const expiryDate = (date: number, days: number) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  const calculateTimeLeft = (updatedAt: number, termLength: number) => {
    const date = expiryDate(updatedAt, termLength);
    let difference = +new Date(date) - +new Date();

    let days = 0;
    if (difference > 0) {
      days = Math.floor(difference / (1000 * 60 * 60 * 24));
    } else {
      days = 0;
    }

    return days;
  };
  return (
    <LoanCardWrapper>
      <div
        style={{ marginTop: 7 }}
        onClick={() =>
          dispatch(setSelectedLoans({ id: loanData?.id, data: loanData }))
        }
      >
        <ReactTooltip />
        {selected && <LoanCardChecked />}
        <LoanCardHeader>
          <LoanAPY>{loanData?.apy}%</LoanAPY>
          <div className="text">
            <span style={{ marginLeft: 9 }}>APY</span>
            <span style={{ marginLeft: 22 }}>
              Loan <strong>ID {loanData?.id}</strong>
            </span>
          </div>
          <img
            onClick={() => history.push(`${Routes.DETAILS}/${loanData?.id}`)}
            className="icon"
            style={{ right: "10px", cursor: "pointer" }}
            src={EyeIcon2}
            alt="more-info"
            width={"auto"}
          />
          {/* <img className="icon" src={TopIcon} alt="card-icon" /> */}
        </LoanCardHeader>
        <LoanCardBody>
          <LoanCardInfo>
            <span>Loan amount:</span>
            <span>
              {toCommas(loanData?.borrowAmount)}{" "}
              {loanData?.borrowedCoin["symbol"]}
            </span>
          </LoanCardInfo>
          <LoanCardInfo>
            <span style={{ whiteSpace: "nowrap" }}>
              {__nft_collateral_set.has(loanData?.collateralType)
                ? "NFT"
                : loanData?.collateralType === TokenTypes.NETWORK_TOKEN
                  ? "Network"
                  : "Token"}
              &nbsp; Collateral:
            </span>
            <span data-tip={totalCollateral} className="with-icon">
              {`$ ${ConvertToExponential(totalCollateral, 1)}`}
              <CollateralSummaryDialog
                loanId={loanData?.id}
                collateralType={loanData?.collateralType as CollateralType}
              />
            </span>
          </LoanCardInfo>
          <LoanCardInfo>
            <span>Earning Potential:</span>
            <span data-tip={loanData?.apyFee}>
              {reduceNumber(loanData?.apyFee)}
            </span>
          </LoanCardInfo>
          <LoanCardFields>
            <div className="left-field">
              <span>LTV: </span> <span>{loanData.ltv.toFixed(2)}%</span>
            </div>
            <div className="right-field">
              <span>Days: </span>
              {isActiveLoan ? (
                <span>
                  {calculateTimeLeft(
                    +loanData?.activatedAt,
                    loanData?.termLength
                  )}
                </span>
              ) : (
                <span>{loanData?.termLength}</span>
              )}
            </div>
          </LoanCardFields>
        </LoanCardBody>
      </div>
      <LoanCardFooter>
        <div className="auto-sell">
          <span>AutoSell </span>
          <img width={12} height={12} src={InfoIcon} alt="" />
        </div>
        {loanData?.loanStatus === LoanStatus.ACTIVE ? (
          <Switch disabled={true} checked={loanData?.loanOfferLender?.autoSell}>
            <SwitchThumb />
          </Switch>
        ) : (
          <Switch
            checked={loanData?.autoSell}
            onCheckedChange={(e) => toggle(e)}
          >
            <SwitchThumb />
          </Switch>
        )}
      </LoanCardFooter>
    </LoanCardWrapper>
  );
};

export default LoanCard;

const LoanCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 280px;
  width: 227px;
  position: relative;
  position: relative;
  margin: 0 0 15px 0;
  & > * {
    box-sizing: border-box;
  }
  ${({ theme }) => theme.mediaQueries.md}{
    width: 100%;
    height: 100%;
  }
`;

const LoanCardHeader = styled.div`
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  line-height: 12.38px;
  padding: 0 10px;
  height: 67px;
  position: relative;
  margin-top: 4px;

  img.icon {
    position: absolute;
    top: 6px;
    right: 10px;
    width: 17px;
    height: 17px;
  }

  div.text {
    padding: 10px 0 8px 0;
    background-image: url(${HeaderBg});
    background-size: 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    position: absolute;
    top: 25px;
    left: 97px;
    width: 120px;
  }
`;

const LoanAPY = styled.div`
  background-image: url(${GreenCircle});
  background-position: center;
  background-size: 100% 100%;
  width: 100px;
  font-size: 17px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoanCardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 8px 0px 15px;
  line-height: 15.4px;
  letter-spacing: -0.09px;
  // make body select/unselect card
  cursor: pointer;
`;

const LoanCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${InfoBg});
  background-size: 100% 100%;
  background-position: center;
  padding: 5px 10px;
  font-size: 14px;
  margin: 6px 0px;
  &:first-child {
    margin-top: 0px;
  }

  span.with-icon {
    display: flex;
    align-items: center;
    gap: 0px 5px;
  }
`;

const LoanCardFields = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url(${FieldTopBar});
  background-repeat: no-repeat;
  background-position: top 1.5px center;

  .left-field {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${FieldLeft});
    background-size: 100% 100%;
    flex: 0 1 46%;
    padding: 5px 7px 5px 10px;
  }

  .right-field {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${FieldRight});
    background-size: 100% 100%;
    flex: 0 1 46%;
    padding: 5px 10px;
  }
`;

const LoanCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 8px 0px 15px;
  margin-top: 5px;
  .auto-sell {
    display: flex;
    font-size: 16px;
    align-items: center;
    padding: 0 5px;
    gap: 5px;
  }
`;

const LoanCardChecked = styled.div`
  width: 104px;
  height: 104px;
  background-image: url(${LoanChecked});
  background-size: 100% 100%;
  background-position: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;
