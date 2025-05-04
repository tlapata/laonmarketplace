import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "components/Elements/Tabs";
import styled from "styled-components";
import Input from "components/Elements/Input";
import Button from "components/Elements/Button";
import CorneredBox from "components/CorneredBox";
import tabsDivider from "assets/images/tabs-divider.svg";
import { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";
import {
  CHECK_ALLOWANCE,
  CHECK_USER_STABLECOINS,
  PAYBACK_LOAN_OFFER,
  useContractAddresses,
} from "utils/graphQueries/queries";
import { useWeb3React } from "@web3-react/core";
import { approveTokens, calculateGas } from "utils/contracts/contractCalls";
import { LoanTxMsgs, PaybackType } from "config/constants/loans";
import useWeb3 from "hooks/useWeb3";
import { useHistory } from "react-router-dom";
import { setCurrentTab } from "../../Marketplace/loansSlice";
import { useAppDispatch } from "../../../state";
import { getMessageFrom } from "utils/conversion";
import { Routes } from "config/constants/routes";
import { revertReason } from "utils/revertReason";
import { __nft_collateral_set } from "config/constants/sets";
import { useModal } from "state/hooks";



interface stableCOins {
  listUserStableCoins: [];
}
const AdjustActiveLoan = ({ loanData, setState }) => {
  const { setAlert } = useModal();
  let history = useHistory();
  const dispatch = useAppDispatch();
  const client = useApolloClient();
  const context = useWeb3React();
  const web3 = useWeb3();
  const [loading, setLoading] = useState(false);
  const [approve, setApprove] = useState(false);
  const [allowanceAmt, setAllowanceAmt] = useState(0);
  const [paybackType, setPaybackType] = useState<PaybackType>(
    PaybackType.fullPayback
  );
  const [partialPaybackAmount, setPartialPaybackAmount] = useState(
    loanData.amount
  );
  const { chainId, account } = context;
  // const showToast = (message: string, type = "successToast") =>
  //   toast(message, {
  //     className: type !== "error" ? "successToast" : "errorToast",
  //     hideProgressBar: true,
  //   });
  const showToast = (message: string, type = "success") => {
    setAlert(message,true, type);
  };
  const { result: contractAddresses } = useContractAddresses(
    chainId?.toString()
  );

  const checkStableCoins = async () => {
    try {
      const res = await client.query<stableCOins>({
        query: CHECK_USER_STABLECOINS,
        variables: {
          chain: `0x${chainId}`,
          address: account,
        },
      });
      return res.data.listUserStableCoins;
    } catch (err) { }
  };


  const checkCollateralAllowance = (account: string, chainId: number, borrowAmount: number, borrowedCoin: string) => {
    client
      .query({
        query: CHECK_ALLOWANCE,
        variables: {
          allowanceInputFields: {
            chain: chainId.toString(),
            tokenAddress: borrowedCoin,
            walletAddress: account,
          },
        },
      })
      .then((res) => {
        if (res.data.collateralAllowance) {
          setAllowanceAmt(res.data.collateralAllowance[0].amount)

          if (res.data.collateralAllowance[0].amount >= (borrowAmount - loanData?.paybackAmount)) {
            setApprove(true);
          } else {
            setApprove(false);
          }
        }
      })
      .catch((err) => { });

  }

  useEffect(() => {
    checkCollateralAllowance(account, chainId, loanData.borrowAmount, loanData.borrowedCoin.tokenAddress)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    account,
    chainId,
    client,
    loanData.borrowAmount,
    loanData.borrowedCoin.tokenAddress,
  ]);

  const approveHandler = async (loanData, amount: number) => {
    setLoading(true);
    const coinsData = await checkStableCoins();
    if (!coinsData) {
      setLoading(false);
      return;
    }
    if (coinsData?.length === 0) {
      showToast(LoanTxMsgs.INSUFFICENT_AMT, "error");
      setLoading(false);
      return;
    } else {
      for (const data of coinsData) {
        if (data["symbol"] === loanData.borrowedCoin.symbol) {
          if (paybackType === PaybackType.fullPayback) {
            if (+data["amount"] < amount - loanData.paybackAmount) {
              showToast(LoanTxMsgs.INSUFFICENT_AMT, "error");
              setLoading(false);
              return;
            }
          } else if (paybackType === PaybackType.partialPayback) {
            if (amount > loanData.borrowAmount - loanData.paybackAmount) {
              showToast(LoanTxMsgs.PAYBACKS_EXCEEDS_LOAN, "error");
              setLoading(false);
              return;
            } else if (+data["amount"] < amount) {
              showToast(LoanTxMsgs.INSUFFICENT_AMT, "error");
              setLoading(false);
              return;
            }
          }
        }
      }
    }
    const contractAddress = contractAddresses?.GovWorldDiamond;
    const data = await approveTokens(
      contractAddress,
      amount.toString(),
      "tokens",
      loanData.borrowedCoin.tokenAddress
    );

    const params = {
      data: data,
      from: account,
      to: loanData.borrowedCoin.tokenAddress,
    };
    await web3.eth
      .sendTransaction(params)
      .then(async (res) => {
        if (res) {
          setLoading(false);
          setApprove(true);
          showToast(LoanTxMsgs.APPROVE_SUCCESS, "successToast");
          checkCollateralAllowance(account, chainId, loanData.borrowAmount, loanData.borrowedCoin.tokenAddress)
        }
      })
      .catch((err) => {
        const msg = revertReason(err);
        showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
        setLoading(false);
        setApprove(false);
      });
  };

  const paybackTransaction = async (rawData, address: string) => {
    try {
      const gas = await calculateGas(web3, account, address, rawData);
      let params = {
        data: rawData,
        from: account,
        to: address,
        gas: gas,
      };

      await web3.eth
        .sendTransaction(params)
        .then(async (res) => {
          showToast(LoanTxMsgs.PAYBACK_SUCCESS, "successToast");
          setLoading(false);
          setState(false);
          dispatch(setCurrentTab("active"));
          history.push(Routes.LOANMARKETPLACE);
        })
        .catch((err) => {
          const msg = revertReason(err);
        showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
          setLoading(false);
        });
    } catch (error: any) {
      setLoading(false);
      const msg = revertReason(error);
      showToast(getMessageFrom(msg?.trim()), "error");
    }
  };

  const paybackHandler = (id: number, amount: number) => {
    setLoading(true);
    client
      .query({
        query: PAYBACK_LOAN_OFFER,
        variables: {
          paybackLoanOffer: {
            chain: chainId.toString(),
            loanId: id,
            paybackAmount: amount,
          },
        },
      })
      .then((res) => {
        paybackTransaction(
          res.data.paybackLoanOfferSendTransction.targetData,
          res.data.paybackLoanOfferSendTransction.ContractAddress
        );
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const [columns, setColumns] = useState(3);
  useEffect(() => {
    setApprove(false);
    setLoading(false);
  }, [columns]);

  return (
    <StyledTabs defaultValue="tab2">
      <StyledTabsList>
        <TabsTrigger
          value="tab2"
          asChild
          onClick={() => {
            setColumns(4);
          }}
        >
          <Button onClick={() => setPaybackType(PaybackType.fullPayback)}>
            Early Payback Full
          </Button>
        </TabsTrigger>

        {__nft_collateral_set.has(loanData?.collateralType) ? null : (
          <TabsTrigger value="tab3" asChild onClick={() => setColumns(3)}>
            <Button onClick={() => setPaybackType(PaybackType.partialPayback)}>
              Early Payback Partial
            </Button>
          </TabsTrigger>
        )}
        <div style={{ gridColumn: "1/ span 3", gridRow: 2 }} className="big-screen-only">
          <img style={{ width: "100%" }} src={tabsDivider} alt="divider" />
        </div>
      </StyledTabsList>
      <StyledTabsContent value="tab2">
        <span className="small-screen-only text-center">* {loanData?.borrowedCoin?.symbol} Payback Amt</span>
        <FieldContainer>
          <span className="big-screen-only">* {loanData?.borrowedCoin?.symbol} Payback Amt</span>
          <Button data-state="active" className="payback-btn" >
            ${loanData?.borrowAmount - loanData?.paybackAmount}
          </Button>
          {loading ? (
            <Button>Loading...</Button>
          ) : (
            <>

              <Button
                className="payback-btn"
                onClick={() =>
                  approve
                    ? paybackHandler(
                      loanData?.id,
                      loanData?.borrowAmount - loanData?.paybackAmount
                    )
                    : approveHandler(loanData, loanData?.borrowAmount - loanData?.paybackAmount)
                }
              >
                {approve ? "Payback" : "Approve"}
              </Button>
            </>
          )}
        </FieldContainer>
      </StyledTabsContent>
      <StyledTabsContent value="tab3">
        <span className="small-screen-only text-center"> {loanData?.borrowedCoin?.symbol} Payback Amt</span>

        <FieldContainer>
          <span className="big-screen-only"> {loanData?.borrowedCoin?.symbol} Payback Amt</span>
          <CorneredBox>
            <Input
              style={{ width: "100%" }}
              type="number"
              placeholder="Enter Amt $"
              value={partialPaybackAmount}
              onChange={(e) => {
                setPartialPaybackAmount(+e.target.value);
              }}
            />
          </CorneredBox>
          {loading ? (
            <Button>Loading...</Button>
          ) : (
            <Button
              disabled={partialPaybackAmount ? false : true}
              data-state={"active"}
              onClick={() =>
                allowanceAmt >= partialPaybackAmount
                  ? paybackHandler(loanData?.id, partialPaybackAmount)
                  : approveHandler(loanData, partialPaybackAmount)
              }
            >
              {allowanceAmt >= partialPaybackAmount ? "Payback" : "Approve"}
            </Button>
          )}
        </FieldContainer>
      </StyledTabsContent>
    </StyledTabs>
  );
};
const StyledTabs = styled(Tabs)`
  flex: 1;
  margin-top: 40px;
  margin-left: 40px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin:0;
  }

`;

const StyledTabsList = styled(TabsList)`
  display: grid;
  grid-auto-columns: minmax(170px, 1fr);
  grid-auto-flow: column;
  column-gap: 20px;
  row-gap: 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    display:flex;
    align-items:center;
    justify-content:center;
  }
`;

const StyledTabsContent = styled(TabsContent)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 25px;
`;

const FieldContainer = styled.div`
  display: grid;
  grid-auto-columns: minmax(180px, 1fr);
  grid-auto-flow: column;
  column-gap: 20px;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;

  .with-icon {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  & > span {
    margin-left: 5px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    display:flex;
    align-items: center;
    justify-content: center;
    // flex-direction:column;
  } 
`;
export default AdjustActiveLoan;
