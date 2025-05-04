import styled from "styled-components";
import CardBG from "assets/images/stats-select-card.svg";
import {
  RadialCheckbox,
  RadialCheckboxIndicator,
} from "components/Form/RadialCheckbox";
import { setAutoSell, setSelectedLoans } from "../loansSlice";
import { StyledSpan } from "./LoanListView";
import { useWeb3React } from "@web3-react/core";
import { useDispatch } from "react-redux";
import { toCommas } from "utils/conversion";
import { StableCoinsNames } from "config/constants/types";
import { LoanStatus } from "config/constants/loans";
import { Switch, SwitchThumb } from "components/Form/Switch";
import CollateralSummaryDialog from "../../Marketplace/components/CollateralSummaryDialog";
import { CollateralType } from "../types";
import { useState } from "react";


import {
  __nft_collateral_set
} from "config/constants/sets";
import { useHistory } from "react-router-dom";
import { Routes } from "config/constants/routes";
const ResponsiveCardHolder = (props) => {
  const history = useHistory();
  const { item, isActiveLoan } = props;
  const [isPressed, setPressed] = useState(false);
  const dispatch = useDispatch();
  const { account } = useWeb3React();
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
    <>
      <Listcard onClick={() =>
        history.push(`${Routes.DETAILS}/${item.id}`)}>
        <Card>
          <div>Select </div>
          <div onClick={(e) => e.stopPropagation()}>
            {" "}
            <RadialCheckbox
              checked={item?.checked}
              onCheckedChange={() => {
                dispatch(
                  setSelectedLoans({
                    id: item.id,
                    data: item,
                  })
                );
              }}
            >
              <RadialCheckboxIndicator />
            </RadialCheckbox>
          </div>
        </Card>
        <Card>
          <div>Loan ID</div>
          <StyledSpan
            className={
              item?.user?.walletAddress === account
                ? "own-loan"
                : ""
            }
          >
            {item?.id}
          </StyledSpan>
        </Card>
        <Card>
          <div>Loan Amt</div>
          <StyledSpan
            className={
              item?.user?.walletAddress === account
                ? "own-loan"
                :  ""
            }
          >
            <span data-tip={item}>{`$ ${toCommas(item?.borrowAmount)}`}</span>
          </StyledSpan>
        </Card>
        <Card>
          <div>Stablecoin</div>

          {item?.borrowedCoin?.symbol === StableCoinsNames.USDT ? (
            <StyledSpan
              className={
                item?.user?.walletAddress === account
                  ? "own-loan"
                  :  ""
              }
            >
              {item?.borrowedCoin?.symbol}{" "}
            </StyledSpan>
          ) : <StyledSpan
            className={
              item?.user?.walletAddress === account
                ? "own-loan"
                :  ""
            }
          >
            {item?.borrowedCoin.symbol}
          </StyledSpan> ? (
            <StyledSpan
              className={
                item?.user?.walletAddress === account
                  ? "own-loan"
                  : ""
              }
            >
              {item?.borrowedCoin.symbol}
            </StyledSpan>
          ) : null}
        </Card>
        <Card>
          <div>APY %</div>
          <StyledSpan
            className={
              item?.user?.walletAddress === account
                ? "own-loan"
                :  ""
            }
          >
            {item?.apy}
          </StyledSpan>
        </Card>
        <Card
          onClick={() => {
            setPressed(true);
          }}
        >
          <div>Collateral</div>
          <StyledSpan
            className={
              item.user?.walletAddress === account
                ? "own-loan"
                :  ""
            }
          >
            <span data-tip={item || "0"}>
              {toCommas(item?.collateralAmount)}
            </span>
            <CollateralSummaryDialog
              loanId={item?.id}
              collateralType={item?.collateralType as CollateralType}
              parentPressed={isPressed}
              parentSetPressed={setPressed}
            />
          </StyledSpan>
        </Card>
        <Card>
          <div>LTV %</div>
          <StyledSpan
            className={
              item?.user?.walletAddress === account
                ? "own-loan"
                :  ""
            }
          >
            {`${item?.ltv?.toFixed(1)} %`}
          </StyledSpan>
        </Card>
        <Card>
          <div>Term</div>
          <StyledSpan
            className={
              item.user?.walletAddress === account
                ? "own-loan"
                :  ""
            }
          >
            {isActiveLoan
              ? `${calculateTimeLeft(+item?.activatedAt, item?.termLength)}${calculateTimeLeft(+item?.activatedAt, item?.termLength) === 1
                ? " day"
                : " days"
              }`
              : item?.termLength === 1
                ? item?.termLength + " day"
                : item?.termLength + " days"}
          </StyledSpan>
        </Card>
        <Card>
          <div>Earnings</div>
          <StyledSpan
            className={
              item.user?.walletAddress === account
                ? "own-loan"
                :  ""
            }
          >
            <span data-tip={item?.apyFee}>{`$${item?.apyFee.toFixed(3)}`}</span>
          </StyledSpan>
        </Card>
        <Card>
          <div>Price Impact</div>
          <StyledSpan
            className={
              item.user?.walletAddress === account
                ? "own-loan"
                :  ""
            }
          >
            <span data-tip={item?.priceImpact}>{`$${item?.priceImpact.toFixed(
              3
            )}`}</span>
          </StyledSpan>
        </Card>
        <Card onClick={(e) => e.stopPropagation()}>
          <div>AutoSell</div>
          {item?.loanStatus === LoanStatus.ACTIVE ? (
            <Switch
              checked={item?.loanOfferLender?.autoSell}
              disabled={true}
              width={60}
              height={30}
              className={
                item?.user?.walletAddress === account
                  ? "own-loan"
                  : item?.loanOfferLender?.lenderWalletAddress === account
                    ? "user-activated"
                    : ""
              }
            >
              <SwitchThumb size={27} translatex={33} />
            </Switch>
          ) : __nft_collateral_set.has(item?.collateralType) ? (
            <></>
          ) : (
            <Switch
              checked={item?.autoSell}
              onCheckedChange={(e) => {
                const { id } = item;
                dispatch(setAutoSell({ id, autoSell: e }));
              }}
              width={60}
              height={30}
              className={
                item?.user?.walletAddress === account
                  ? "own-loan"
                  : item?.loanOfferLender?.lenderWalletAddress === account
                    ? "user-activated"
                    : ""
              }
            >
              <SwitchThumb size={27} translatex={33} />
            </Switch>
          )}
        </Card>
      </Listcard>
    </>
  );
};
export default ResponsiveCardHolder;

const Listcard = styled.div`
  max-width: 196px;
  width: 48.5%;
  height: 425.92px;
  padding: 15px 12px;

  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 100%;
    padding: 15px 12px;
  }
  .own-loan {
    filter: drop-shadow(0px 0px 5px yellow) invert(100%);
  }
  .invert {
    filter: invert(100%);
  }
  .user-activated {
    filter: drop-shadow(0px 0px 5px yellow) hue-rotate(270deg) contrast(200%)
      invert(100%);
  }
  ${({ theme }) => theme.mediaQueries.fold} {
    width: 100%;
  }
`;
const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  flex-direction: row;
  margin-bottom: 10px;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;

`;
