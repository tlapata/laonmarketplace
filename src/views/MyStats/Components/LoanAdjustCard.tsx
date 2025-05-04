import Button from "components/Elements/Button";
import CorneredBox from "components/CorneredBox";
import Input from "components/Elements/Input";
import {
  LoanInfoWrapper,
  LoanInfoHeader,
  LoanInfoBody,
  LoanInfoField,
  LoanInfoFooter,
  FantsyText,
} from "../../Marketplace/components/LoanSummaryCards/LoanCard.styled";
import { Loan } from "views/Marketplace/types";
import { useEffect, useState } from "react";
import Spinner from "components/Spinner";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "hooks/useWeb3";
import { toast } from "react-toastify";
import { useApolloClient } from "@apollo/client";
import {
  ADJUST_LOAN_OFFER,
  GET_MIN_LOAN_AMT,
} from "utils/graphQueries/queries";
import CancelLoanDialog from "./CancelLoanDialog";
import { calculateGas } from "utils/contracts/contractCalls";
import { getMessageFrom } from "utils/conversion";
import { revertReason } from "utils/revertReason";
import { LoanTxMsgs } from "config/constants/loans";
import { useModal } from "state/hooks";

interface Props {
  data?: Loan;
  setAdjust?: (value) => void;
}
type LoanCollateral = {
  price: number,
  nftId: number,
  amount: number
}
const LoanInfoCard: React.FC<Props> = ({ data, setAdjust }) => {
  const [loanDetails, setLoanDetails] = useState(data);
  const [loanType] = useState<boolean>(data.isPrivateLoan);
  const context = useWeb3React();
  const [adjustLoader, setAdjustLoader] = useState(false);
  const [isCancel, setIsCancel] = useState<boolean>(false);
  const { chainId, account } = context;
  const client = useApolloClient();
  const web3 = useWeb3();
  const [minLoanAmt, setMinLoanAmt] = useState(0);
  const { setAlert } = useModal();
  // const showToast = (message: string, type = "success") => {
  //   toast(message, {
  //     className: type === "success" ? "successToast" : "errorToast",
  //     hideProgressBar: true,
  //   });
  // };
  const showToast = (message: string, type = "success") => {
    setAlert(message, true, type);
  };
  const getMinLoanAmount = async (chainId: number) => {
    const { data } = await client.query({
      query: GET_MIN_LOAN_AMT,
      variables: { chainId: chainId },
    });
    setMinLoanAmt(data.getMinLoanAmount);
  };
  useEffect(() => {
    getMinLoanAmount(chainId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId]);
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
  const changeHandler = (e, type) => {
    const value = +e.target.value;
    if (type === "termLength") {
      setLoanDetails({ ...loanDetails, termLength: value });
    } else if (type === "amount") {
      setLoanDetails({
        ...loanDetails,
        borrowAmount: parseInt(value.toString(), 10),
      });
    } else if (type === "apy") {
      setLoanDetails({ ...loanDetails, apy: value });
    }
  };
  const adjustLoanTransaction = async (rawData, address: string) => {
    try {
      const gas = await calculateGas(web3, account, address, rawData);

      const params = {
        data: rawData,
        from: account,
        to: address,
        gas: gas,
      };
      await web3.eth
        .sendTransaction(params)
        .then(async (res) => {
          setAdjustLoader(false);
          showToast(LoanTxMsgs.ADJUST_SUCCESS, "success");
          setAdjust(false);
        })
        .catch((err) => {
          const msg = revertReason(err);
        showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
          setAdjustLoader(false);
        });
    } catch (error: any) {
      setAdjustLoader(false);
      const msg = revertReason(error);
      showToast(getMessageFrom(msg?.trim()));
    }
  };

  return (
    <LoanInfoWrapper style={{ minWidth: 300 }} isInModal={false}>
      {isCancel && (
        <CancelLoanDialog
          loanId={data.id}
          open={isCancel}
          setOpen={setIsCancel}
        />
      )}
      <LoanInfoHeader>
        <FantsyText>{data.collateralType}</FantsyText>
      </LoanInfoHeader>
      <LoanInfoBody>
        <LoanInfoField>
          <span className="label">ID: </span>
          <span className="value">{data.id}</span>
        </LoanInfoField>
        <LoanInfoField>
          <span className="label">Loan Amt: </span>
          <CorneredBox className="value">
            <Input
              style={{ width: 140 }}
              type="number"
              placeholder="0"
              onChange={(e) => changeHandler(e, "amount")}
              value={loanDetails.borrowAmount}
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
              placeholder={data.borrowedCoin.symbol}
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
              value={loanDetails.termLength}
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
              value={loanDetails.apy}
              className="blue-background"
            />
          </CorneredBox>
        </LoanInfoField>
        <LoanInfoField>
          <span className="label">Collateral: </span>
          <span className="value" data-tip={data?.collateral.reduce((sum: number, obj: LoanCollateral) => sum + obj?.price, 0)}>${data?.collateral?.reduce((sum: number, obj: LoanCollateral) => sum + obj?.price, 0).toFixed(3)}</span>
        </LoanInfoField>
        <LoanInfoField>
          <span className="label">LTV: </span>
          <span className="value">{data.ltv.toFixed(2)}%</span>
        </LoanInfoField>
      </LoanInfoBody>
      <LoanInfoFooter>
        {adjustLoader ? (
          <Spinner style={{ margin: "unset", width: "25px" }} />
        ) : (
          <div className="d-flex justify-content-between align-items-center gap-2">
            <Button
              onClick={() => {
                if (loanDetails.borrowAmount < minLoanAmt) {
                  showToast(
                    `Loan amt. cannot be less than ${minLoanAmt}`,
                    "error"
                  );
                  return;
                }
                adjustLoanOffer();
              }}
              size="small"
            >
              Save
            </Button>
            <Button
              onClick={() => setIsCancel(true)}
              size="small"
            >
              Cancel Loan Offer
            </Button>
          </div>
        )}
      </LoanInfoFooter>
    </LoanInfoWrapper>
  );
};

export default LoanInfoCard;
