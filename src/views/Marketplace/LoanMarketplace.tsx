import { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";
import styled from "styled-components";
import SectionTitle from "views/SectionTitle";
import { Tabs, TabsList, TabsTrigger, TabsContent, } from "components/Elements/Tabs";
import FilterBar from "./components/Filterbar";
import Button from "components/Elements/Button";
import FilterChecks from "./components/FilterChecks";
import SearchInput from "./components/SearchInput";
import ActiveLoanView from "./components/ActiveLoanView";
import LoanOffersView from "./components/LoanOffersView";
import { ControlBtn } from "../MyStats/Components/MyStats.styled";
import { NextIcon } from "components/Svg";

import { RootState, useAppDispatch, useAppSelector } from "state";
import useViewport from "hooks/useViewport";
import {
  ACTIVATE_LOAN_OFFER,
  CHECK_ALLOWANCE,
  CHECK_USER_STABLECOINS,
  GET_USER_NFTS,
  GET_USER_TOKENS_COLLATERAL,
  useContractAddresses,
  useNftAllowanceCall,
} from "utils/graphQueries/queries";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "hooks/useWeb3";
import { LoanTxMsgs } from "config/constants/loans";
import {
  approveTokens,
  getDecimals,
  calculateGas,
} from "utils/contracts/contractCalls";
import { setActivateLoader, setCurrentTab } from "./loansSlice";
import { CHECK_LOAN_LIMIT } from "./api/checkLoanLimit";
import { useDebouncing } from "hooks/useDebounce";
import Overlay from "components/Overlay";
import { getMessageFrom } from "utils/conversion";
import { useSelector } from "react-redux";
import { WalletConnectMsgs } from "config/constants/walletEnums";
import { revertReason } from "utils/revertReason";
import {
  __nft_collateral_set,
  __tokens_collateral_set,
} from "config/constants/sets";
import BigNumber from "bignumber.js";
import { useModal } from "state/hooks";
import { contentDescription, contentSubTitle, contentTitle } from "views/SectionTitle/Content";
import { Popup_Content } from "config/constants/infoData"
interface stableCOins {
  listUserStableCoins: [];
}
export enum LoanListViewType {
  GRID = "grid",
  LIST = "list",
}

const LoanMarketplace: React.FC = () => {
  const { setAlert } = useModal();

  const currentTab = useSelector((state: RootState) => state.loans.currentTab);
  const { width } = useViewport();
  // const showToast = (message: string, type = "success") => {
  //   toast(message, {
  //     className: type === "success" ? "successToast" : "errorToast",
  //     hideProgressBar: true,
  //   });
  // };
  const showToast = (message: string, type = "success") => {
    setAlert(message, true, type);
  };
  const { setClick } = useDebouncing(setAlert);
  const [view, setView] = useState<
    LoanListViewType.GRID | LoanListViewType.LIST
  >(LoanListViewType.LIST);

  const { chainId, account } = useWeb3React();
  const { chainId: chainIdNumber } = useWeb3React();
  const web3 = useWeb3();
  const client = useApolloClient();
  const { result: contractAddresses } = useContractAddresses(
    chainId?.toString()
  );
  const [approveLoading, setApproveLoading] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [loadingAllowance, setAllowanceLoading] = useState(false);
  const { selected, activateLoader } = useAppSelector((state: RootState) => {
    return {
      selected: state.loans.selectedLoans,
      activateLoader: state.loans.activateLoader,
    };
  });
  const [activeLoanData, setActiveLoanData] = useState([]);
  const dispatch = useAppDispatch();
  const [checkNftAllowanceQuery] = useNftAllowanceCall();
  useEffect(() => {
    /*if (width < 768) {
      setView(LoanListViewType.LIST);
    }*/
  }, [width, setView]);
  useEffect(() => {
    if (selected) {
      setSelectedLoan([]);
      setApproveLoading(false);
      const keys = Object.keys(selected);
      const loanData = keys.map((data) => selected[data]);
      const mappedData = loanData.map((data) => {
        return {
          ...data,
          collateral: data.collateral.map((res) => {
            return {
              ...res,
              checkAllowance: false,
              collateralAllowance: false,
              nftBalanceAllowance: false,
              nftCollateralAllowance: false,
            };
          }),
        };
      });
      setActiveLoanData(mappedData);
    }
  }, [selected]);
  useEffect(() => {
    const checkAllowance = async () => {
      const res = await checkStableCoinAllowance()
      const resAmount = new BigNumber(res[0]?.amount).dividedBy(
        new BigNumber(10).pow(new BigNumber(18))
      );
      const borrowAmt = new BigNumber(activeLoanData[0]?.borrowAmount).dividedBy(
        new BigNumber(10).pow(new BigNumber(18))
      );
      if (resAmount.isGreaterThanOrEqualTo(borrowAmt)) {
        const loan = {
          ...activeLoanData[0],
          isApprove: true,
        };
        setSelectedLoan(loan);
      } else {
        const loan = {
          ...activeLoanData[0],
          isApprove: false,
        };
        setSelectedLoan(loan);
      }
    }
    if (activeLoanData.length > 0 && chainId) {
      checkAllowance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeLoanData])
  useEffect(() => {
    if (account || chainId) {
      setApproveLoading(false);
    }
  }, [account, chainId]);

  const checkStableCoinAllowance = async () => {
    setAllowanceLoading(true);
    const { data } = await client.query({
      query: CHECK_ALLOWANCE,
      variables: {
        allowanceInputFields: {
          chain: chainId?.toString(),
          tokenAddress: activeLoanData[0]?.borrowedCoin?.tokenAddress,
          walletAddress: account,
        },
      },
    });
    setAllowanceLoading(false);
    return data.collateralAllowance;
  };

  const [hideApprove, setHideApprove] = useState(false);

  const createLoanOffer = async (loanData) => {
    dispatch(setActivateLoader(true));
    const { data, errors } = await client.query({
      query: CHECK_LOAN_LIMIT,
      variables: {
        loanType: loanData.collateralType,
        chainId: chainIdNumber,
      },
    });
    if (!data) {
      setApproveLoading(false);
      showToast(`${errors[0].message}`, "error");
      return;
    }
    client
      .query({
        query: ACTIVATE_LOAN_OFFER,
        variables: {
          loanId: +loanData["id"],
          chain: chainId,
          autoSell: loanData.autoSell,
        },
      })
      .then((result) => {
        dispatch(setActivateLoader(true));

        if (result.data) {
          activateLoanTransaction(
            result.data["activateLoanOfferSendTransction"].targetData,
            result.data["activateLoanOfferSendTransction"].ContractAddress
          );
        } else {
          setApproveLoading(false);
          dispatch(setActivateLoader(false));
          let loan = {
            ...activeLoanData[0],
            isApprove: false,
          };
          setSelectedLoan(loan);
          showToast(`${result.errors[0].message}`, "error");
        }
      })
      .catch((err) => {
        setApproveLoading(false);
        dispatch(setActivateLoader(false));

      });
  };

  const changeTabs = (e) => {
    dispatch(setCurrentTab(e));
    setHideApprove(!hideApprove);
  };

  const activateLoanTransaction = async (rawData, address: string) => {
    try {
      const gas = await calculateGas(web3, account, address, rawData);
      const params = {
        data: rawData,
        from: account,
        to: address,
        gas: gas,
      };
      await web3.eth.sendTransaction(params);

      setApproveLoading(false);
      showToast(
        LoanTxMsgs.FUND_SUCCESS,
        "success"
      );
      dispatch(setActivateLoader(false));
    } catch (error: any) {
      const msg = revertReason(error);
      showToast(getMessageFrom(msg?.trim()), "error");
    } finally {
      dispatch(setActivateLoader(false));
      setApproveLoading(false);
    }
  };

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

  const approveHandler = async (activeLoanData) => {

    if (!account || account === "") {
      setClick({
        value: true,
        message: WalletConnectMsgs.CONNECT_WALLET,
        type: "alert",
      });

      return;
    }
    if (!activeLoanData.user) {
      setClick({
        value: true,
        message: "Invalid loan; No borrower address.",
        type: "error",
      });
      return;
    }
    if (activeLoanData.user.walletAddress === account) {
      setClick({
        value: true,
        message: "You cannot Activate your own loan",
        type: "error",
      });

      return;
    }
    setApproveLoading(true);
    const borrowerAddress = activeLoanData.user.walletAddress;

    //nft loan logic
    const getUserNfts = async (
      chainId: string,
      walletAddress: string,
      tierType: string
    ) => {
      setApproveLoading(true);
      const { data } = await client.query({
        query: GET_USER_NFTS,
        variables: { chainId, account: walletAddress, tierType },
      });
      const nftData = data?.listUserNFTTokens;
      // eslint-disable-next-line array-callback-return
      const nftCollaterals = activeLoanData.collateral.map((data) => {
        const result = nftData.find(
          (borrowerData) => borrowerData.nftId === data?.nftId
        );
        if (result) {
          return (data = {
            ...data,
            nftBalanceAllowance: true,
          });
        }
      });
      const nftLoanObj = {
        ...activeLoanData,
        collateral: nftCollaterals,
      };
      if (nftLoanObj?.collateral?.every((obj) => obj?.nftBalanceAllowance)) {
        let nftIDs = [];
        let nftAddress = [];
        for (const iterator of nftLoanObj.collateral) {
          nftIDs.push(iterator.nftId);
          nftAddress.push(iterator.address);
        }
        checkNftAllowanceQuery({
          variables: {
            nftAllowance: {
              nftId: nftIDs,
              nftAddress: nftAddress,
              chainId: chainIdNumber,
            },
          },
        })
          .then(async (res) => {
            const nftAllowanceData = res.data.nftCollateralAllowance;
            nftLoanObj.collateral.filter((data, index) => {
              let obj;
              for (let i = 0; i < nftAllowanceData.length; i++) {
                obj = nftAllowanceData.find(
                  (borrowerData) =>
                    borrowerData.nftId === data.nftId &&
                    borrowerData.nftAddress.toLowerCase() ===
                    data.address.toLowerCase()
                );
                if (obj) {
                  break;
                }
              }
              if (obj?.isApproved) {
                data.nftCollateralAllowance = true;
              } else {
                data.nftCollateralAllowance = false;
              }
              return data;
            });
            if (
              nftLoanObj.collateral.every((data) => data.nftCollateralAllowance)
            ) {
              const stableCoinAllowance = await checkStableCoinAllowance();
              if (stableCoinAllowance.length > 0) {
                let allowanceData = [];
                for (const res of stableCoinAllowance) {
                  const decimals = await getDecimals(res.tokenAddress);
                  allowanceData.push({
                    ...res,
                    amount: res.amount / 10 ** decimals,
                  });
                }
                allowanceData.filter(async (data, index) => {
                  if (
                    activeLoanData.borrowedCoin.tokenAddress ===
                    allowanceData[index].tokenAddress
                  ) {
                    const allowanceAmt = new BigNumber(allowanceData[index].amount).dividedBy(
                      new BigNumber(10).pow(new BigNumber(18))
                    );
                    const borrowAmt = new BigNumber(activeLoanData.borrowAmount).dividedBy(
                      new BigNumber(10).pow(new BigNumber(18))
                    );
                    if (
                      borrowAmt.isLessThanOrEqualTo(allowanceAmt)
                    ) {
                      let loan = {
                        ...activeLoanData[0],
                        isApprove: true,
                      };
                      setSelectedLoan(loan);
                      setApproveLoading(false);
                    } else {
                      let loan = {
                        ...activeLoanData[0],
                        isApprove: false,
                      };
                      setSelectedLoan(loan);

                      //loan approval logic
                      const coinsData = await checkStableCoins();
                      if (coinsData?.length === 0) {
                        showToast(LoanTxMsgs.INSUFFICENT_LENDING_AMT, "error");
                        setApproveLoading(false);
                        return;
                      } else {
                        for (const data of coinsData) {
                          if (
                            data["symbol"] ===
                            activeLoanData.borrowedCoin.symbol
                          ) {
                            if (+data["amount"] < activeLoanData.borrowAmount) {
                              showToast(
                                LoanTxMsgs.INSUFFICENT_LENDING_AMT,
                                "error"
                              );
                              setApproveLoading(false);
                              return;
                            }
                          }
                        }
                      }
                      client
                        .query({
                          query: CHECK_LOAN_LIMIT,
                          variables: {
                            loanType: activeLoanData.collateralType,
                            chainId: chainIdNumber,
                          },
                        })
                        .then(async (res) => {
                          if (!res.data) {
                            setApproveLoading(false);
                            showToast(`${res.errors[0].message}`, "error");
                            return;
                          }
                          const contractAddress =
                            contractAddresses.GovWorldDiamond;
                          const data = await approveTokens(
                            contractAddress,
                            activeLoanData.borrowAmount.toString(),
                            "tokens",
                            activeLoanData.borrowedCoin.tokenAddress
                          );

                          const params = {
                            data: data,
                            from: account,
                            to: activeLoanData.borrowedCoin.tokenAddress,
                          };
                          await web3.eth
                            .sendTransaction(params)
                            .then(async (res) => {
                              if (res) {
                                setApproveLoading(false);
                                showToast(LoanTxMsgs.APPROVE_SUCCESS, "success");

                                let loan = {
                                  ...activeLoanData[0],
                                  isApprove: true,
                                };
                                setSelectedLoan(loan);
                              }
                            })
                            .catch((err) => {
                              const msg = revertReason(err);
                              showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
                              setApproveLoading(false);
                              let loan = {
                                ...activeLoanData[0],
                                isApprove: false,
                              };
                              setSelectedLoan(loan);
                            });
                        })
                        .catch((err) => {

                        });
                    }
                  }
                  return data;
                });
              } else {
                setApproveLoading(false);
              }
            } else {
              setApproveLoading(false);
              showToast(
                `Borrower Does not have enough Nft Collateral Allowance`,
                "error"
              );
            }
          })
          .catch((err) => { });
      } else {
        setApproveLoading(false);
        showToast(`Borrower Does not have enough Nft Balance`, "error");
      }
    };

    //token loan login
    const getUserTokens = async (chainId, walletAddress, tierType) => {
      const { data } = await client.query({
        query: GET_USER_TOKENS_COLLATERAL,
        variables: { chainId, account: walletAddress, tierType },
      });
      const tokensData = data?.listUserTokensCollateral;
      if (tokensData && tokensData.length > 0) {
        // eslint-disable-next-line array-callback-return
        const collateral = activeLoanData.collateral.map((data) => {
          const result = tokensData.find(
            (borrowerData) =>
              borrowerData.token_address.toLowerCase() ===
              data.address.toLowerCase()
          );
          if (result && data.amount <= +result?.amount) {
            return (data = {
              ...data,
              collateralAllowed: true,
            });
          }
        });
        const tokenLoan = {
          ...activeLoanData,
          collateral: collateral,
        };
        if (tokenLoan?.collateral?.every((data) => data?.collateralAllowed)) {
          const addresses = [];
          for (let i = 0; i < activeLoanData.collateral.length; i++) {
            addresses.push(activeLoanData.collateral[i]["address"]);
          }
          const checkAllowance = async () => {
            client
              .query({
                query: CHECK_ALLOWANCE,
                variables: {
                  allowanceInputFields: {
                    chain: chainId.split("x")[1],
                    tokenAddress: addresses,
                    walletAddress: activeLoanData.user.walletAddress,
                  },
                },
              })
              .then(async (res) => {
                const mappedData = res.data.collateralAllowance.map((data) => {
                  return {
                    ...data,
                    amount: data?.amount,
                  };
                });
                tokenLoan.collateral.filter((data, index) => {
                  if (data.address === mappedData[index].tokenAddress) {
                    const result = data.amount <= mappedData[index].amount;
                    if (result) {
                      data.collateralAllowance = true;
                    } else {
                      data.collateralAllowance = false;
                    }
                  }
                  return data;
                });

                if (
                  tokenLoan.collateral.every((data) => data.collateralAllowance)
                ) {
                  const stableCoinAllowance = await checkStableCoinAllowance();
                  if (stableCoinAllowance.length > 0) {
                    let allowanceData = [];
                    for (const res of stableCoinAllowance) {
                      const decimals = await getDecimals(res.tokenAddress);
                      allowanceData.push({
                        ...res,
                        amount: res.amount / 10 ** decimals,
                      });
                    }
                    allowanceData.filter(async (data, index) => {
                      if (
                        activeLoanData.borrowedCoin.tokenAddress ===
                        allowanceData[index].tokenAddress
                      ) {
                        if (
                          activeLoanData.borrowAmount <=
                          allowanceData[index].amount
                        ) {
                          let loan = {
                            ...activeLoanData[0],
                            isApprove: true,
                          };
                          setSelectedLoan(loan);
                          setApproveLoading(false);
                        } else {
                          let loan = {
                            ...activeLoanData[0],
                            isApprove: false,
                          };
                          setSelectedLoan(loan);

                          //loan approval logic
                          const coinsData = await checkStableCoins();
                          if (coinsData?.length === 0) {
                            showToast(
                              LoanTxMsgs.INSUFFICENT_LENDING_AMT,
                              "error"
                            );
                            setApproveLoading(false);
                            return;
                          } else {
                            for (const data of coinsData) {
                              if (
                                data["symbol"] ===
                                activeLoanData.borrowedCoin.symbol
                              ) {
                                if (
                                  +data["amount"] < activeLoanData.borrowAmount
                                ) {
                                  showToast(
                                    LoanTxMsgs.INSUFFICENT_LENDING_AMT,
                                    "error"
                                  );
                                  setApproveLoading(false);
                                  return;
                                }
                              }
                            }
                          }
                          client
                            .query({
                              query: CHECK_LOAN_LIMIT,
                              variables: {
                                loanType: activeLoanData.collateralType,
                                chainId: chainIdNumber,
                              },
                            })
                            .then(async (res) => {
                              if (!res.data) {
                                setApproveLoading(false);
                                showToast(`${res.errors[0].message}`, "error");
                                return;
                              }
                              const contractAddress =
                                contractAddresses.GovWorldDiamond;
                              const data = await approveTokens(
                                contractAddress,
                                activeLoanData.borrowAmount.toString(),
                                "tokens",
                                activeLoanData.borrowedCoin.tokenAddress
                              );

                              const params = {
                                data: data,
                                from: account,
                                to: activeLoanData.borrowedCoin.tokenAddress,
                              };
                              await web3.eth
                                .sendTransaction(params)
                                .then(async (res) => {
                                  if (res) {
                                    setApproveLoading(false);
                                    showToast(LoanTxMsgs.APPROVE_SUCCESS, "success");

                                    let loan = {
                                      ...activeLoanData[0],
                                      isApprove: true,
                                    };
                                    setSelectedLoan(loan);
                                  }
                                })
                                .catch((err) => {
                                  setApproveLoading(false);
                                  const msg = revertReason(err);
                                  showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
                                  let loan = {
                                    ...activeLoanData[0],
                                    isApprove: false,
                                  };
                                  setSelectedLoan(loan);
                                });
                            })
                            .catch(() => {

                            });
                        }
                      }
                      return data;
                    });
                  } else {
                    setApproveLoading(false);
                  }
                } else {
                  setApproveLoading(false);
                  showToast(
                    `Borrower doesnot have enough Collateral Allowance`,
                    "error"
                  );
                }
              })
              .catch(() => {
                setApproveLoading(false);
              });
          };
          checkAllowance();
        } else {
          setApproveLoading(false);
          showToast(
            `Borrower Does not have enough Collateral Balance`,
            "error"
          );
        }
      } else {
        setApproveLoading(false);
        showToast(`Borrower Does not have any Collateral`, "error");
      }
    };
    if (__tokens_collateral_set.has(activeLoanData.collateralType)) {
      getUserTokens(`0x${chainId}`, borrowerAddress, activeLoanData.tierType);
    } else if (__nft_collateral_set.has(activeLoanData.collateralType)) {
      getUserNfts(`0x${chainId}`, borrowerAddress, activeLoanData.tierType);
    } else {
      setApproveLoading(true);
      const coinsData = await checkStableCoins();
      if (!coinsData) {
        setApproveLoading(false);
        return;
      }
      if (coinsData?.length === 0) {
        showToast(LoanTxMsgs.INSUFFICENT_LENDING_AMT, "error");
        setApproveLoading(false);
        return;
      } else {
        for (const data of coinsData) {
          if (data["symbol"] === activeLoanData.borrowedCoin.symbol) {
            if (+data["amount"] < activeLoanData.borrowAmount) {
              showToast(LoanTxMsgs.INSUFFICENT_LENDING_AMT, "error");
              setApproveLoading(false);
              return;
            }
          }
        }
      }
      client
        .query({
          query: CHECK_LOAN_LIMIT,
          variables: {
            loanType: activeLoanData.collateralType,
            chainId: chainIdNumber,
          },
        })
        .then(async (res) => {
          if (!res.data) {
            setApproveLoading(false);
            showToast(`${res.errors[0].message}`, "error");
            return;
          }

          const contractAddress = contractAddresses.GovWorldDiamond;
          const data = await approveTokens(
            contractAddress,
            activeLoanData.borrowAmount.toString(),
            "tokens",
            activeLoanData.borrowedCoin.tokenAddress
          );

          const params = {
            data: data,
            from: account,
            to: activeLoanData.borrowedCoin.tokenAddress,
          };
          await web3.eth
            .sendTransaction(params)
            .then(async (res) => {
              if (res) {
                setApproveLoading(false);
                showToast(LoanTxMsgs.APPROVE_SUCCESS, "success");

                let loan = {
                  ...activeLoanData[0],
                  isApprove: true,
                };
                setSelectedLoan(loan);
              }
            })
            .catch((err) => {
              const msg = revertReason(err);
              showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
              setApproveLoading(false);
              let loan = {
                ...activeLoanData[0],
                isApprove: false,
              };
              setSelectedLoan(loan);
            });
        })
        .catch((err) => { });
    }
  };


  return (
    <Container>
      <Overlay />

      <SectionTitle title="Loan Marketplace" headtitle={contentSubTitle[Popup_Content.LOANMARKETPLACE]} dialogtitle={contentTitle[Popup_Content.LOANMARKETPLACE]} content={contentDescription[Popup_Content.LOANMARKETPLACE]} />

      <div className="content-container">
        <Tabs
          style={{ display: "flex", flexDirection: "column", zIndex: 0, width: "auto" }}
          className="filter-tabs"
          defaultValue={currentTab}
          onValueChange={(e) => changeTabs(e)}
        >
          <FilterBar>
            <TabsList className="buttons-group">
              <TabsTrigger value="offers" asChild>
                <Button className="loan-button"><span>Loan Offers</span></Button>
              </TabsTrigger>
              <TabsTrigger value="active" asChild>
                <Button className="loan-button"><span>Active Loans</span></Button>
              </TabsTrigger>
            </TabsList>
            <FilterRightContent >
              <FilterChecks />
              <SearchInput />
            </FilterRightContent>
          </FilterBar>
          <TabsContent
            className="content"
            value="offers"
          >
            {/* Main entry point of data, all loans -> loancard -> collateral detail */}
            <LoanOffersView view={view} />
          </TabsContent>
          <TabsContent
            className="content"
            value="active"
          >
            <ActiveLoanView view={view} />
          </TabsContent>
        </Tabs>
        {currentTab === "offers" && (
          <div className="button">
            {approveLoading ? (
              <ControlBtn style={{ pointerEvents: "none" }}><NextIcon /> Loading...</ControlBtn>
            ) : (
              selectedLoan && selectedLoan["isApprove"] ? (
                <ControlBtn
                  data-state={
                    selectedLoan && selectedLoan["isApprove"] ? "active" : ""
                  }
                  style={{
                    pointerEvents:
                      activeLoanData.length > 0
                        ? "unset"
                        : loadingAllowance
                          ? "none"
                          : "none",
                  }}
                  onClick={() =>
                    selectedLoan &&
                    selectedLoan["isApprove"] &&
                    createLoanOffer(activeLoanData[0])
                  }
                >
                  <NextIcon />
                  Activate
                </ControlBtn>
              ) : (
                <ControlBtn
                  data-state={
                    selectedLoan && selectedLoan["isApprove"] ? "" : "active"
                  }
                  style={{
                    pointerEvents:
                      activeLoanData.length > 0 &&
                        !(selectedLoan && selectedLoan["isApprove"])
                        ? "unset"
                        : loadingAllowance
                          ? "none"
                          : selectedLoan && selectedLoan["isApprove"]
                            ? "none"
                            : "none",
                  }}
                  onClick={() => approveHandler(activeLoanData[0])}
                  className={activeLoanData.length > 0 && !(selectedLoan && selectedLoan["isApprove"]) ? "" : 
                              loadingAllowance ? "disabled" : 
                              selectedLoan && selectedLoan["isApprove"] ? ""
                            : "disabled"
                  }
                >
                  <NextIcon /> Fund Loan Offers
                </ControlBtn>
              )
            )}

            {/*
            {activateLoader ? (
              <ControlBtn style={{ pointerEvents: "none" }}><NextIcon /> Loading...</ControlBtn>
            ) : (
              <ControlBtn
                data-state={
                  selectedLoan && selectedLoan["isApprove"] ? "active" : ""
                }
                style={{
                  pointerEvents:
                    activeLoanData.length > 0
                      ? "unset"
                      : loadingAllowance
                        ? "none"
                        : "none",
                }}
                onClick={() =>
                  selectedLoan &&
                  selectedLoan["isApprove"] &&
                  createLoanOffer(activeLoanData[0])
                }
              >
                <NextIcon />
                Activate
              </ControlBtn>
            )}
            */}
          </div>
        )}
      </div>
    </Container>
  );
};


const Container = styled.div`
  .content-container {
    background-color: ${({ theme }) => theme.colors.blockBG};
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;

    .filter-tabs {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: nowrap;
      position: relative;
    }

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;

      ${({ theme }) => theme.mediaQueries.md} {
        margin-top: 15px;
      }
    }

    .content{
      display: flex;
      flex-direction: column;
      padding: 30px 22px;
      overflow-x: auto;
      scrollbar-color: ${({ theme }) => theme.colors.purple} ${({ theme }) => theme.colors.blockBG};
      scrollbar-width: none;
      width: 100%;  
      
      ${({ theme }) => theme.mediaQueries.md} {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
    }
  }
`;

const FilterRightContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 0 20px;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 20px;
  }

  ${({ theme }) => theme.mediaQueries.tab} {
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: column-reverse;
    align-items: flex-start;
    width: 100%;
    padding: 0;

    .filter {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    .filter-checks{
      width: calc(50% - 7px);
    }
  }
`;

export const HeaderRightContent = styled.div`
  ${({ theme }) => theme.mediaQueries.sm} {
    display:none;
  }
`;


export default LoanMarketplace;