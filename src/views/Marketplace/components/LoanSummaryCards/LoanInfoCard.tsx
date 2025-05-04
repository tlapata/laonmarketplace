import PurpleX from "assets/icons/purple-x.svg";
import anchorIcon from "assets/icons/anchor-icon.svg";
import alertIcon from "assets/icons/alert-icon.svg";
import Button from "components/Elements/Button";
import infoIcon from "assets/icons/info.svg";
import {
  LoanInfoWrapper,
  LoanInfoHeader,
  LoanInfoBody,
  LoanInfoField,
  LoanInfoFooter,
  FantsyText,
  DangerAlert,
} from "./LoanCard.styled";

import type { CollateralType, Loan } from "../../types";
import { reduceNumber } from "utils/conversion";
import ReactTooltip from "react-tooltip";
import { useEffect, useState } from "react";
import CancelLoanDialog from "views/Marketplace/components/LoanSummaryCards/CancelLoanDialog";
import ChartDialog from "views/Marketplace/components/LoanSummaryCards/ChartDialog";
import { LoanTypes, TokenTypes } from "../../../../config/constants/loans";
import CollateralSummaryDialog from "../CollateralSummaryDialog";
import { useLazyQuery } from "@apollo/client";
import { PRIVATE_LOAN_QUERY } from "utils/graphQueries/queries";
import styled from "styled-components";
import { usePopup } from "state/hooks";
import { copyText } from "utils/conversion";
import { LoanStatus } from "config/constants/loans";
import { useWeb3React } from "@web3-react/core";
import { __token_collateral_set } from "config/constants/sets";

type LoanInfoCardProps = {
  loanData: Loan;
};
const url = `${window.location.host}/loan-market/`;
const LoanInfoCard: React.FC<LoanInfoCardProps> = ({ loanData }) => {
  const { chainId } = useWeb3React();
  const [isCancel, setIsCancel] = useState<boolean>(false);
  const totalCollateral = loanData.collateral
    .map((data) => data["price"])
    .reduce((partialSum, number) => partialSum + number, 0);
  const [privateLoanData, { data, error, loading }] =
    useLazyQuery(PRIVATE_LOAN_QUERY);
  const [link, setLink] = useState("");
  const [isPressed, setPressed] = useState(false);
  const { setPopup } = usePopup();
  const [chartOpen, setChartOpen] = useState(false);

  const showToast = (message: string) => {
    setPopup(message);
  };
  useEffect(() => {
    if (loanData.isPrivateLoan) {
      privateLoanData({
        variables: {
          loanId: loanData.id,
          chainId: chainId,
        },
      }).then((res) => {
        if (res.data.privateLoanOffer.data.length > 0) {
          setLink(`${url}${res.data["privateLoanOffer"]["data"][0].id}`);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loanData.isPrivateLoan, data, error, loading]);
  return (
    <LoanInfoWrapper isInModal={false}>
      {isCancel && (
        <CancelLoanDialog
          loanId={loanData?.id}
          open={isCancel}
          setOpen={setIsCancel}
        />
      )}
      {loanData?.liquidationAlert && (
        <DangerAlert>{loanData?.liquidationAlert}</DangerAlert>
      )}
      <LoanInfoHeader>
        <FantsyText className="heading">{loanData?.collateralType}</FantsyText>
        {loanData?.canDismiss && (
          <span className="cross">
            <img
              style={{ cursor: "pointer" }}
              onClick={() => setIsCancel(true)}
              src={PurpleX}
              alt="remove"
            />
          </span>
        )}
      </LoanInfoHeader>
      <LoanInfoBody>
        <ReactTooltip />
        <LoanInfoField>
          <span className="label">ID: </span>
          <span className="value">{loanData?.id}</span>
        </LoanInfoField>
        <LoanInfoField>
          <FantsyText className="heading">Loan Amt: </FantsyText>
          <span data-tip={loanData?.borrowAmount} className="value">
            ${reduceNumber(loanData?.borrowAmount)}
          </span>
        </LoanInfoField>
        {loanData?.showPayback ? (
          <LoanInfoField>
            <span className="label">Payback Amt: </span>
            <span className="value">${loanData?.paybackAmount}</span>
          </LoanInfoField>
        ) : null}
        <LoanInfoField>
          <span className="label">Stablecoin: </span>
          <span className="value">{loanData?.borrowedCoin?.symbol}</span>
        </LoanInfoField>
        <LoanInfoField>
          <span className="label">Days: </span>
          <span className="value">{loanData?.termLength}</span>
        </LoanInfoField>
        <LoanInfoField>
          <span className="label">APY%: </span>
          <span className="value">{loanData?.apy}%</span>
        </LoanInfoField>
        {loanData?.expectedApyFee && (
          <LoanInfoField>
            <span className="label with-icon">
              Expected APY Fee <img src={infoIcon} alt="info" />
            </span>
            <span className="value">{loanData?.expectedApyFee}</span>
          </LoanInfoField>
        )}
        <LoanInfoField>
          <span className="label">Type </span>
          <span className="value">
            {loanData?.isPrivateLoan ? LoanTypes.private : LoanTypes.public}
          </span>
        </LoanInfoField>
        <LoanInfoField
          style={{ cursor: "pointer" }}
          onClick={() => {
            setPressed(true);
          }}
        >
          <span className="label">Collateral: </span>
          <span
            style={{ display: "flex", alignItems: "center" }}
            data-tip={totalCollateral}
            className="value"
          >
            <div style={{ marginRight: "5px" }}>
              ${reduceNumber(totalCollateral)}
            </div>
            <CollateralSummaryDialog
              loanId={loanData.id}
              collateralType={loanData?.collateralType as CollateralType}
              parentPressed={isPressed}
              parentSetPressed={setPressed}
            />
          </span>
        </LoanInfoField>

        {(
          __token_collateral_set.has(loanData?.collateralType)) &&
          (loanData?.loanStatus === LoanStatus.ACTIVE ||
            loanData?.loanStatus === LoanStatus.LIQUIDATED) &&
          loanData?.collateralDaily && (
            <LoanInfoField
              style={{ cursor: "pointer" }}
              onClick={() => setChartOpen(true)}
            >
              <span className="label">Liquidation Graph: </span>
              <span className="value">
                {(loanData?.loanStatus === LoanStatus.ACTIVE ||
                  loanData?.loanStatus === LoanStatus.LIQUIDATED) &&
                  loanData?.collateralDaily && (
                    <ChartDialog
                      open={chartOpen}
                      setOpen={setChartOpen}
                      loanData={loanData}
                      chartData={loanData.collateralDaily}
                    />
                  )}
              </span>
            </LoanInfoField>
          )}

        <LoanInfoField>
          <span className="label">LTV: </span>
          <span className="value">{loanData?.ltv?.toFixed(2)}%</span>
        </LoanInfoField>
        <LoanInfoField>
          <span className="label">AutoSell: </span>
          <span className="value">
            {loanData?.autoSell
              ? "On"
              : loanData?.loanOfferLender?.autoSell
                ? "On"
                : "Off"}
          </span>
        </LoanInfoField>
      </LoanInfoBody>
      <LoanInfoFooter>
        {loanData?.loanStatus === LoanStatus.ACTIVE ||
          loanData?.loanStatus === LoanStatus.INACTIVE ? (
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              justifyContent:
                loanData?.showDanger && loanData?.isPrivateLoan
                  ? "space-between"
                  : "center",
            }}
          >
            {loanData?.showDanger && <img src={alertIcon} alt="alert" />}

            <IconButton
              className={loanData && loanData?.isPrivateLoan ? "" : "hidden"}
            >
              <img
                src={anchorIcon}
                onClick={() => {
                  copyText(link);
                  showToast("Copied to Clipboard");
                }}
                alt="anchor"
              />
            </IconButton>
          </div>
        ) : null}
        {loanData?.canAdjust && (
          <Button
            onClick={() => {
              loanData?.onAdjust();
              loanData?.setLoanAdjustData(loanData);
            }}
            size="large"
            style={{ alignSelf: "stretch" }}
          >
            Adjust
          </Button>
        )}
      </LoanInfoFooter>
    </LoanInfoWrapper>
  );
};
const IconButton = styled("button")`
  all: unset;
  font-family: inherit;
  color: #ffffff;
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  outline: none;
`;

export default LoanInfoCard;
