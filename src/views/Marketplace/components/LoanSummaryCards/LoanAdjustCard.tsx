import Button from "components/Elements/Button";
import CorneredBox from "components/CorneredBox";
import Input from "components/Elements/Input";
import LoanTypeDropdown from "./LoanTypeDropdown";
import {
  LoanInfoWrapper,
  LoanInfoHeader,
  LoanInfoBody,
  LoanInfoField,
  LoanInfoFooter,
  FantsyText,
} from "./LoanCard.styled";
import { Loan } from "views/Marketplace/types";
import { ChangeEvent, useState } from "react";
import Spinner from "components/Spinner";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "hooks/useWeb3";
import { useApolloClient } from "@apollo/client";
import { ADJUST_LOAN_OFFER } from "utils/graphQueries/queries";
import { LoanTxMsgs } from "config/constants/loans";
import { useModal } from "state/hooks";
import { revertReason } from "utils/revertReason";
import { getMessageFrom } from "utils/conversion";

interface Props {
  data?: Loan;
  setAdjust?: (value) => void;
}
const LoanInfoCard: React.FC<Props> = ({ data, setAdjust }) => {
  const {setAlert}=useModal();
  const [loanDetails, setLoanDetails] = useState(data);
  const [loanType, setLoanType] = useState<boolean>(data.isPrivateLoan);
  const context = useWeb3React();
  const [adjustLoader, setAdjustLoader] = useState(false);
  const { chainId, account } = context;
  const client = useApolloClient();
  const web3 = useWeb3();
  // const showToast = (message, type = "success") => {
  //   toast(message, {
  //     className: type === "success" ? "successToast" : "errorToast",
  //     hideProgressBar: true,
  //   });
  // };
  const showToast = (message: string, type = "success") => {
    setAlert(message,true, type);
  };
  const adjustLoanOffer = () => {
    setAdjustLoader(true);
    client
      .query({
        query: ADJUST_LOAN_OFFER,
        variables: {
          adjustLoanOffer: {
            loanId: loanDetails.id,
            borrowAmount: loanDetails.borrowAmount,
            termLength: loanDetails.termLength,
            isPrivateLoan: loanType,
            apy: loanDetails.apy,
            chain: chainId,
            collateralType: loanDetails.collateralType,
          },
        },
      })
      .then((res) => {
        if (!res.data) {
          showToast(res.errors[0].message, "error");
          setAdjustLoader(false);
          return;
        }
        adjustLoanTransaction(
          res.data["adjustLoanOfferSendTransction"].targetData,
          res.data["adjustLoanOfferSendTransction"].ContractAddress
        );
      })
      .catch((err) => {
        setAdjustLoader(false);
      });
  };
  const changeHandler = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    const value = +e.target.value;
    if (type === "termLength") {
      setLoanDetails({ ...loanDetails, termLength: value });
    } else if (type === "amount") {
      setLoanDetails({ ...loanDetails, borrowAmount: value });
    } else if (type === "apy") {
      setLoanDetails({ ...loanDetails, apy: value });
    }
  };

  const adjustLoanTransaction = async (rawData, address: string) => {
    const params = {
      data: rawData,
      from: account,
      to: address,
    };
    await web3.eth
      .sendTransaction(params)
      .then(async () => {
        setAdjustLoader(false);
        showToast(LoanTxMsgs.ADJUST_SUCCESS, "success");
        setAdjust(false);
      })
      .catch((err) => {
        const msg = revertReason(err);
        showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
        setAdjustLoader(false);
      });
  };

  return (
    <LoanInfoWrapper style={{ minWidth: 300 }} isInModal={false}>
      <LoanInfoHeader>
        <FantsyText>{data?.collateralType}</FantsyText>
      </LoanInfoHeader>
      <LoanInfoBody>
        <LoanInfoField>
          <span className="label">ID: </span>
          <span className="value">{data?.id}</span>
        </LoanInfoField>
        <LoanInfoField>
          <span className="label">Loan Amt: </span>
          <CorneredBox className="value">
            <Input
              style={{ width: 140 }}
              type="number"
              placeholder="0"
              onChange={(e) => changeHandler(e, "amount")}
              value={loanDetails?.borrowAmount}
              className="blue-background"
            />
          </CorneredBox>
        </LoanInfoField>
        <LoanInfoField>
          <span className="label">Stablecoin: </span>
          <CorneredBox className="value">
            <Input
              style={{ width: 140 }}
              type="number"
              readOnly
              placeholder={data?.borrowedCoin?.symbol}
              className="blue-background"
            />
          </CorneredBox>
        </LoanInfoField>
        <LoanInfoField>
          <span className="label">Days: </span>
          <CorneredBox className="value">
            <Input
              style={{ width: 140 }}
              type="number"
              placeholder="0"
              value={loanDetails?.termLength}
              onChange={(e) => changeHandler(e, "termLength")}
              className="blue-background"
            />
          </CorneredBox>
        </LoanInfoField>
        <LoanInfoField>
          <span className="label">APY%: </span>
          <CorneredBox className="value">
            <Input
              style={{ width: 140 }}
              type="number"
              placeholder="0"
              onChange={(e) => changeHandler(e, "apy")}
              value={loanDetails?.apy}
              className="blue-background"
            />
          </CorneredBox>
        </LoanInfoField>
        <LoanInfoField>
          <span className="label">Type </span>
          <LoanTypeDropdown setType={setLoanType} />
        </LoanInfoField>
        <LoanInfoField>
          <span className="label">Collateral: </span>
          <span className="value">{data?.totalCollateral}</span>
        </LoanInfoField>
        <LoanInfoField>
          <span className="label">LTV: </span>
          <span className="value">{data?.ltv.toFixed(2)}%</span>
        </LoanInfoField>
      </LoanInfoBody>
      <LoanInfoFooter>
        {adjustLoader ? (
          <Spinner style={{ margin: "unset", width: "25px" }} />
        ) : (
          <Button
            onClick={adjustLoanOffer}
            size="large"
            style={{ width: "70%" }}
          >
            Save
          </Button>
        )}
      </LoanInfoFooter>
    </LoanInfoWrapper>
  );
};

export default LoanInfoCard;
