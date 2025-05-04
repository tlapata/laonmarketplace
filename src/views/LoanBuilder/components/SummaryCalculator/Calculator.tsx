import React, { useEffect, useRef, useState } from "react";
import { FancyInput, CurrencyBtn, CustomDropDown, Card, FormGroup, Form, SpinnerWrapper, StyledSpinner, Tab } from "./Calculator.styled";
import { FancyField } from "../ApyArena/ApyArena.styles";
import CalcIcon from "components/Svg/Icons/CalcIcon";
import { ControlBtn } from "../../../MyStats/Components/MyStats.styled";
import { NextIcon } from "components/Svg";
import { ErrorFields, ErrorProps, MaxLoanProps } from "config/constants/errors";

import { useLoanData, useModal, useSetLoanState } from "state/hooks";
import { useApolloClient } from "@apollo/client";
import {
  afterDecimals,
  convertExp,
  getMessageFrom,
  replaceCommas,
  toCommas,
  tooltipCommas,
} from "utils/conversion";
import {
  CHECK_ALLOWANCE,
  CREATE_LOAN_OFFER,
  CREATE_NFT_LOAN_OFFER,
  GET_LOAN_SUMMARY,
  GET_USER_TOKENS,
  useNftAllowanceCall,
  UPDATE_LOAN_OFFER,
  GET_MIN_LOAN_AMT,
} from "utils/graphQueries/queries";
import { RootState, useAppDispatch } from "state";
import { resetLoanState } from "state/loanBuilder";
import { StableCoins, TokenTypes } from "config/constants/loans";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "hooks/useWeb3";
import { useTransactionReceipt } from "hooks/useTransactionReciept";
import ReactTooltip from "react-tooltip";
import MaxLoanModal from "components/MaxLoanModal";
import BigNumber from "bignumber.js";
import { useSelector } from "react-redux";
import EmailDialogue from "components/EmailDialog";
import { TierTypeEnum } from "config/constants/types";
import { useHistory } from "react-router-dom";
import { Routes } from "config/constants/routes";
import { __nft_collateral_set, __nft_network_collateral_set, __token_collateral_set, __tokens_collateral_set } from "config/constants/sets";
import { revertReason } from "utils/revertReason";
import DropDownIcon from "assets/images/loanbuilder/drop-down.svg";
import useViewport from "hooks/useViewport";
import { CalIconResponsive } from "components/Svg";
import TermsAndConditionDialog from "components/TermsAndConditionDialog";


interface CalculatorProps {
  showModal: any;
  setErr: any;
  errorData: ErrorProps;
  setMaxLoanObj: any;
  loanEnabled: boolean;
  setTab: any;
  tokenList: any;
  maxLoanAmountObj: MaxLoanProps;
}


enum CalculatorValidations {
  LOAN_CREATED = "Congratulations! Your custom loan offer is ready. Stay on this page, and your loan details will appear shortly",
  NO_TIER = "You donot have a tier level to create a loan",
  MIN_LOAN_AMT = "Minimum loan amount must be",
  APY_OFFER_ZERO = "APY Offer cannot be zero",
  NET_CASHOUT_ZERO = "Net Cashout cannot be zero",
  CASHOUT_MAX_LOAN = "Net Cashout cannot be greater than Max Loan Amount",
  INSUFFICENT_BALANCE = "Insufficent loan balance",
  MAX_LOAN_EXCEEDS = "Maximum Loan Amount exceeds",
  REQUIRED_FIELDS = "All Fields are required"
}

const Calculator: React.FC<CalculatorProps> = ({
  showModal,
  errorData,
  setErr,
  setMaxLoanObj,
  loanEnabled,
  setTab,
  tokenList,
  maxLoanAmountObj,
}) => {
  const history = useHistory();
  const { width } = useViewport()
  const [errors, setErrors] = useState<ErrorProps>(errorData);
  const [maxLoanAmount, setMaxLoanAmount] = useState(0);
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [collateralTokensList, setCollateralTokensList] = useState(tokenList)
  const sidebarOpen = useSelector(
    (state: RootState) => state.loanBuilder.drawer
  );
  const [isClicked, setIsClicked] = React.useState(false);
  const { setLoanBuilderState } = useSetLoanState();
  const [, setIsTransactionEnable] = useState(false);
  const { loanState } = useLoanData();
  const {
    apyOffer,
    termLengthDays,
    stakedCollateralTokens,
    nftLoanData,
    collateralType,
    stableCoinID,
    collateralData,
    isSunToken,
    stakedCollateralAmount,
    isApproved,
    isLoader,
    loanToValue,
    loanAmountBorrowed,
    tier,
    stableCoins,
  } = loanState;
  const dispatch = useAppDispatch();
  const { setAlert } = useModal();
  const [totalCollateralAmount, setTotalCollateralAmount] = useState(0);
  const [validationObject, setValidationObject] =
    useState<{ event: React.ChangeEvent<HTMLInputElement>; type: ErrorFields }>(
      null
    );
  const showToast = (message: string, type = "success") => {
    setAlert(message, true, type);

  };
  const { chainId, account } = useWeb3React();


  const [collateralAmountData, setCollateralAmountData] = useState([]);
  const [showMaxLoanModal, setShowMaxLoanModal] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openTermsDialog, setOpenTermsDialog] = useState(false);

  const web3 = useWeb3();
  const { getTransactionStatus } = useTransactionReceipt();
  const [netCashOut, setNetCashOut] = useState(0);
  const [collateralLtv, setCollateralLtv] = useState(0);
  const [plafFormFee, setPlatformFee] = useState(0);
  const [liquidationValue, setLiquidationValue] = useState(0);
  const [approveTokensAddresses, setApproveTokensAddresses] = useState([]);
  const [, setAllowedAllowance] = useState([]);

  const [apyFee, setApyFee] = useState(0);
  const client = useApolloClient();
  const [tokens, setToken] = useState<StableCoins[]>([]);
  const [currencyTitle, setCurrencyTitle] = useState<string>("");
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [minLoanAmt, setMinLoanAmt] = useState(0);

  const handleSelect = (e) => {
    setCurrencyTitle(e.symbol);
    e.symbol !== "USDT" &&
      setLoanBuilderState({
        ...loanState,
        stableCoinID: e.id,
        stableCoinAddress: e.tokenAddress,
      });
    setSelectedSymbol(e.symbol === "Dai Token" ? e.name : e.symbol);

    // or set the appropriate title based on your data
    setShowDropDown(false);
  };

  //fetch user tokens
  const getUserTokens = async (chainId: string, account: string, tierType: string) => {
    const { data } = await client.query({
      query: GET_USER_TOKENS,
      variables: { chainId, account, tierType },
    });
    return data.listUserTokensValue;
  };
  const getMinLoanAmount = async (chainId: number) => {
    const { data } = await client.query({
      query: GET_MIN_LOAN_AMT,
      variables: { chainId },
    });
    setMinLoanAmt(data?.getMinLoanAmount);
  };
  useEffect(() => {
    getMinLoanAmount(chainId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId]);
  useEffect(() => {
    setErr({ ...errors });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);
  useEffect(() => {
    setToken(stableCoins);
    setCurrencyTitle(stableCoins[0]?.symbol);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const loanSummary = () => {
      client
        .query({
          query: GET_LOAN_SUMMARY,
          variables: {
            borrowAmount: +loanAmountBorrowed,
            apyOffer: +apyOffer,
            termLength: +termLengthDays,
            collateralAmt: totalCollateralAmount,
          },
        })
        .then((res) => {
          const result = res.data.loanSummary;
          setNetCashOut(result.netCashOut);
          setApyFee(result.apyFee);
          setCollateralLtv(result.ltv);
          setPlatformFee(result.plateformFee);
          setLiquidationValue(result.liquidationValue);
        })
        .catch((err) => {

        });
    };

    if (apyOffer && termLengthDays && loanAmountBorrowed > 0) {
      if (+apyOffer > 0) {
        loanSummary();
      }
    } else {
      setNetCashOut(0);
      setApyFee(0);
      setCollateralLtv(0);
      setPlatformFee(0);
      setLiquidationValue(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apyOffer, termLengthDays, loanAmountBorrowed, collateralAmountData]);
  useEffect(() => {
    if (isApproved) {
      setAnchorEl(true);
      setTimeout(() => {
        setLoanBuilderState({
          ...loanState,
          isApproved: false,
        });
        setAnchorEl(false);
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isApproved]);

  useEffect(() => {
    const tokensPrices = [];
    let collateralAmountData = [];

    if (
      __token_collateral_set.has(collateralType)
    ) {
      for (let i = 0; i < stakedCollateralTokens.length; i++) {
        if (collateralData[i] !== undefined) {
          let obj = {
            collateralId: collateralData[i],
            amount: stakedCollateralTokens[i],
            isSunToken: isSunToken[i]
          };
          collateralAmountData.push(obj);
          tokensPrices.push(stakedCollateralTokens[i]);
        }
      }
    } else {
      for (let i = 0; i < collateralData.length; i++) {
        if (collateralData[i] && nftLoanData[i]) {
          let obj = {
            nftId: collateralData[i],
            nftAddress: nftLoanData[i]["nftAddress"],
            price:
              nftLoanData[i]["price"] === 0
                ? +stakedCollateralTokens[i]
                : nftLoanData[i]["price"],
          };
          collateralAmountData.push(obj);
        }
      }
    }
    setCollateralAmountData(collateralAmountData);
    const addresses = [];

    for (let i = 0; i < tokenList.length; i++) {
      if (
        collateralType === TokenTypes.SINGLE_TOKEN ||
        collateralType === TokenTypes.MULTI_TOKEN
      ) {
        addresses.push(tokenList[i]["token_address"]);
      }
    }
    setApproveTokensAddresses(addresses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dialogRef = React.useRef(null);

  const createLoanOffer = () => {

    const isTermSkiped = localStorage.getItem("isTermSkiped");
    if (!isTermSkiped || !Boolean(isTermSkiped)) {
      setOpenTermsDialog(true);
    }
    else {
      setLoanBuilderState({
        ...loanState,
        isLoader: true,
      });
      client
        .query({
          query:
            __nft_collateral_set.has(collateralType)
              ? CREATE_NFT_LOAN_OFFER
              : CREATE_LOAN_OFFER,
          variables: {
            borrowAmount: +loanAmountBorrowed,
            termLength: +termLengthDays,
            isPrivateLoan: false,
            borrowedCoin: stableCoinID,
            apy: +apyOffer,
            collateralType: collateralType,
            tierType: loanState.tier.tierType,
            collateral: collateralAmountData,
            chainID: chainId,
          },
        })
        .then((result) => {
          if (result.data) {
            const obj =
              __token_collateral_set.has(collateralType)
                ? result.data.creatLoanOfferSendTransction
                : result.data.creatNftLoanOfferSendTransction;
            setIsClicked(false);
            const list = tokenList.every((item) => item.isApprove);
            if (
              list ||
              __nft_network_collateral_set.has(collateralType)
            ) {
              loanTransaction(obj.targetData, obj.ContractAddress, obj.loanId);
            } else {
              setIsTransactionEnable(true);
              setLoanBuilderState({
                ...loanState,
                isLoader: false,
              });
              showModal(true);
              dialogRef.current.click();
            }
          } else {
            showToast(result.errors[0].message, "error");

            setIsClicked(false);
            setIsTransactionEnable(false);
            setLoanBuilderState({
              ...loanState,
              isLoader: false,
            });
          }
        })
        .catch((err) => {
          debugger
          const msg = revertReason(err);
          showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
          setLoanBuilderState({
            ...loanState,
            isLoader: false,
          });
        });
    }
  };

  const loanTransaction = async (rawData, address: string, loanId: number) => {
    try {
      let params;
      let gasEstimate;
      const gasPrice = await web3.eth.getGasPrice();

      if (collateralType === TokenTypes.NETWORK_TOKEN) {
        let finalAmount = web3.utils.toWei(
          collateralAmountData[0].amount.toString(),
          "ether"
        );
        gasEstimate = await web3.eth.estimateGas({
          from: account,
          to: address,
          data: rawData,
          value: finalAmount,
        });
        params = {
          data: rawData,
          from: account,
          to: address,
          value: finalAmount,
          gasPrice: gasPrice,
          gas: gasEstimate,
        };
      } else {
        gasEstimate = await web3.eth.estimateGas({
          from: account,
          to: address,
          data: rawData,
        });
        params = {
          data: rawData,
          from: account,
          to: address,
          gasPrice: gasPrice,
          gas: gasEstimate,
        };
      }
      await web3.eth
        .sendTransaction(params)
        .then(async (res) => {
          const data = await getTransactionStatus(res.transactionHash);
          if (data) {
            client
              .query({
                query: UPDATE_LOAN_OFFER,
                variables: {
                  loanId: +loanId,
                  txHash: res.transactionHash,
                },
              })
              .then((result) => {
                // call update loan offer api here
                setLoanBuilderState({
                  ...loanState,
                  isLoader: false,
                });
                showToast(CalculatorValidations.LOAN_CREATED, "success");
                dispatch(resetLoanState());
                history.push(Routes.LOANMARKETPLACE);
              });
          }
        })
        .catch((err) => {
          setLoanBuilderState({
            ...loanState,
            isLoader: false,
          });
          const msg = revertReason(err);
          showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
        });
    } catch (error: any) {
      setLoanBuilderState({
        ...loanState,
        isLoader: false,
      });
      const msg = revertReason(error);
      showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<
    null | HTMLElement | true | false
  >(null);
  const [, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [checkNftAllowanceQuery] = useNftAllowanceCall();

  const handleClick = async () => {
    const email = localStorage.getItem("email");
    const isEmailSkipped = localStorage.getItem("isSkiped");
    if (tier?.tierLevel === TierTypeEnum.NO_TIER) {
      showToast(CalculatorValidations.NO_TIER, "alert");
      return;
    }
    if (!isEmailSkipped || isEmailSkipped === "false") {
      if (!email) {

        setOpenEmail(true);
        return;
      }
    }

    if (loanAmountBorrowed < minLoanAmt) {
      showToast(`${CalculatorValidations.MIN_LOAN_AMT} ${minLoanAmt}`, "alert");
      return;
    }
    if (+apyOffer <= 0 || netCashOut <= 0) {
      if (apyOffer <= 0) {
        showToast(CalculatorValidations.APY_OFFER_ZERO, "error");
      } else if (netCashOut <= 0) {
        showToast(CalculatorValidations.NET_CASHOUT_ZERO, "error");
      }
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 5000);
      return;
    }
    if (netCashOut > maxLoanAmount) {
      showToast(CalculatorValidations.CASHOUT_MAX_LOAN, "error");
      return;
    }
    if (!maxLoanAmountObj.valid) {
      if (maxLoanAmount === 0) {
        showToast(CalculatorValidations.INSUFFICENT_BALANCE, "alert");
      } else {
        showToast(`${CalculatorValidations.MAX_LOAN_EXCEEDS} ${maxLoanAmount.toFixed()}`, "alert");
      }
    } else if (errors.borrowAmount || errors.termLength || errors.customApy) {
      showToast(CalculatorValidations.REQUIRED_FIELDS, "alert");
    } else if (collateralType === TokenTypes.NETWORK_TOKEN) {

      createLoanOffer();
    } else if (
      __nft_collateral_set.has(collateralType)
    ) {
      checkAllowance();
    } else if (
      __tokens_collateral_set.has(collateralType)
    ) {
      const tokens = await getUserTokens(
        `0x${chainId}`,
        account,
        tier.tierType
      );
      let newData = []; // Initialize newData as an empty array
      for (let i = 0; i < collateralData.length; i++) {
        const updatedData = tokens?.find((res) => res.id === collateralData[i]);
        if (updatedData) {
          const index = collateralData.findIndex(
            (data) => data === updatedData.id
          );
          newData = [...stakedCollateralAmount];
          newData[index] =
            (updatedData.price / +updatedData.amount) *
            +stakedCollateralTokens[index];
        }
      }
      setLoanBuilderState({
        ...loanState,
        stakedCollateralAmount: [...newData],
      });
      checkAllowance();
    } else if (loanEnabled) {
      createLoanOffer();
    }
  };

  useEffect(() => {
    setCollateralTokensList(tokenList)
  }, [tokenList])
  useEffect(() => {
    if (
      __nft_collateral_set.has(collateralType)
    ) {
      setLoanBuilderState({
        ...loanState,
        isLoader: true,
      });
      let nftIDs = [];
      let nftAddress = [];
      for (const iterator of collateralAmountData) {
        nftIDs.push(iterator.nftId);
        nftAddress.push(iterator.nftAddress);
      }
      checkNftAllowanceQuery({
        variables: {
          nftAllowance: {
            nftId: nftIDs,
            nftAddress: nftAddress,
            chainId,
          },
        },
      })
        .then((res) => {
          setLoanBuilderState({
            ...loanState,
            isLoader: false,
          });
          const result = res.data.nftCollateralAllowance;
          const newArr = tokenList.filter((data, index) => {
            if (data.nftId === result[index].nftId) {
              if (result[index].isApproved) {
                data.isApprove = true;
              } else {
                data.isApprove = false;
              }
            }
            return data;
          });
          setCollateralTokensList(newArr)
        })
        .catch((err) => { });
    } else if (
      __tokens_collateral_set.has(collateralType)
    ) {
      if (approveTokensAddresses.length > 0) {
        setLoanBuilderState({
          ...loanState,
          isLoader: true,
        });
        client
          .query({
            query: CHECK_ALLOWANCE,
            variables: {
              allowanceInputFields: {
                chain: chainId.toString(),
                tokenAddress: approveTokensAddresses,
                walletAddress: account,
              },
            },
          })
          .then((res) => {
            setLoanBuilderState({
              ...loanState,
              isLoader: false,
            });
            const mappedData = res.data.collateralAllowance.map((data) => {
              const totalAmount = new BigNumber(data.amount).dividedBy(
                new BigNumber(10).pow(new BigNumber(18))
              );
              let value = convertExp(totalAmount);
              return {
                ...data,
                amount: value,
              };
            });
            setAllowedAllowance(mappedData);
            const newArr = tokenList.filter((data, index) => {
              if (data?.token_address === mappedData[index]?.tokenAddress) {
                const collaterallAmount = new BigNumber(collateralAmountData[index].amount).dividedBy(
                  new BigNumber(10).pow(new BigNumber(18))
                );
                let collateralValue = convertExp(collaterallAmount);
                const result = new BigNumber(collateralValue).isLessThanOrEqualTo(new BigNumber(mappedData[index].amount));
                if (result) {
                  data.isApprove = true;
                } else {
                  data.isApprove = false;
                }
              }
              return data;
            });
            setCollateralTokensList(newArr)
          })
          .catch((err) => { });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collateralAmountData, tokenList, approveTokensAddresses]);


  const checkAllowance = () => {
    if (tokenList.every((data) => data.isApprove)) {
      createLoanOffer();
    } else {
      showModal(true);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let sanitizedValue: number | string;
      if (validationObject?.type === ErrorFields.borrowAmount) {
        sanitizedValue = validationObject?.event.target.value.replace("$", "");
        sanitizedValue = replaceCommas(sanitizedValue);
      } else if (validationObject?.type === ErrorFields.termLength) {
        sanitizedValue =
          +validationObject?.event.target.value.replace(" Days", "") || 0;
      } else if (validationObject?.type === ErrorFields.apy) {
        sanitizedValue =
          +validationObject?.event.target.value.replace("%", "") || 0;
      }

      const isInValid = validator(
        validationObject?.event,
        sanitizedValue,
        validationObject?.type
      );
      if (isInValid) {
      }
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, validationObject]);

  const validator = (event = null, input: any, key) => {
    if (key === ErrorFields.borrowAmount) {
      const maxAmount = calculateMaxLoanAmount(input);
      if (input <= 0) {
        setErrors({
          ...errors,
          borrowAmount: true,
        });
        setAnchorEl1(null);
        return true;
      } else if (input > 0) {
        if (maxAmount) {
          setAnchorEl1(event && event?.currentTarget);
          setErrors({
            ...errors,
            borrowAmount: true,
          });
          return true;
        } else {
          setAnchorEl1(null);
          setErrors({
            ...errors,
            borrowAmount: false,
          });
          return false;
        }
      }
    } else if (key === ErrorFields.termLength) {
      if (input <= 0) {
        setErrors({
          ...errors,
          termLength: true,
        });
        return true;
      } else {
        setErrors({
          ...errors,
          termLength: false,
        });
        return false;
      }
    } else if (key === ErrorFields.apy) {
      if (input <= 0) {
        setErrors({
          ...errors,
          customApy: true,
        });
        return true;
      } else {
        setErrors({
          ...errors,
          customApy: false,
        });
        return false;
      }
    }
  };

  useEffect(() => {
    let totalAmount = [];
    if (
      __tokens_collateral_set.has(collateralType)
    ) {
      for (let i = 0; i < stakedCollateralAmount.length; i++) {
        if (collateralData[i] !== undefined) {
          totalAmount.push(stakedCollateralAmount[i]);
        }
      }
    } else {
      for (let i = 0; i < stakedCollateralAmount.length; i++) {
        if (collateralData[i] !== undefined) {
          totalAmount.push(stakedCollateralAmount[i]);
        }
      }
    }
    const sumAmount = totalAmount.reduce(
      (partialSum, number) => +partialSum + +number,
      0
    );

    setTotalCollateralAmount(sumAmount);
    const maxAmount = (sumAmount * loanToValue) / 100;
    setMaxLoanAmount(+maxAmount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loanToValue, stakedCollateralAmount]);

  const calculateMaxLoanAmount = (value) => {
    if (+value > maxLoanAmount) {
      setMaxLoanObj({ valid: false, amount: maxLoanAmount });
      return true;
    }
    setMaxLoanObj({ valid: true, amount: maxLoanAmount });
    return false;
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setShowDropDown(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  // terms
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);

  const handleDaysChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setDays(value);
    const totalMinutes = calculateTotalMinutes(value, hours, minutes);
    setValidationObject({ event: e, type: "Days" as any });
    setLoanBuilderState({
      ...loanState,
      termLengthDays: totalMinutes.toString(),
    });
  };
  
  const handleHoursChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setHours(value);
    const totalMinutes = calculateTotalMinutes(days, value, minutes);
    setValidationObject({ event: e, type: "Hours" as any });
    setLoanBuilderState({
      ...loanState,
      termLengthDays: totalMinutes.toString(),
    });
  };
  
  const handleMinutesChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setMinutes(value);
    const totalMinutes = calculateTotalMinutes(days, hours, value);
    setValidationObject({ event: e, type: "Minutes" as any });
    setLoanBuilderState({
      ...loanState,
      termLengthDays: totalMinutes.toString(),
    });
  };
  
  const calculateTotalMinutes = (days, hours, minutes) => {
    return days * 24 * 60 + hours * 60 + minutes;
  };
    
  

  return (
    <>
      <Card>
        <div className="card bg-transparent">
          <ReactTooltip />
          <div className="card-img-overlay active" style={{ padding: 0 }}>
            <Form>
              
                <FormGroup>
                  <div className="label">
                    Collateral
                  </div>
                  <FancyField className="calculator-field">
                    ${toCommas(totalCollateralAmount, 9)}
                  </FancyField>
                </FormGroup>
                <FormGroup>
                  <div className="label">
                    Max Loan
                  </div>
                  <FancyField className="calculator-field">
                    ${toCommas(maxLoanAmount, 9)}
                  </FancyField>
                </FormGroup>
                <FormGroup className="redbg">
                  <div className="label">
                    Liquidation
                  </div>
                  <FancyField className="calculator-field">
                    ${liquidationValue}
                  </FancyField>
                </FormGroup>
                <FormGroup>
                  <div className="label">
                    APY% OFFER
                  </div>
                  <FancyField className="with-pen calculator-field">
                    <FancyInput
                      type="number"
                      value={apyOffer || ""}
                      placeholder="0"
                      onChange={(e) => {
                        const sanitizedValue =
                          +e.target.value.replace("%", "") || 0;
                        setLoanBuilderState({
                          ...loanState,
                          apyOffer: sanitizedValue,
                        });
                        setValidationObject({ event: e, type: ErrorFields.apy });
                      }}
                    ></FancyInput>
                  </FancyField>
                </FormGroup>
                <FormGroup className="greebg">
                  {showMaxLoanModal && (
                    <MaxLoanModal
                      maxLoanAmount={toCommas(maxLoanAmount, 9)}
                      tierLevel={tier?.tierLevel}
                      ltv={loanToValue}
                    />
                  )}
                  <div className="label">Loan AMT $</div>
                  <FancyField className="with-pen calculator-field">
                    <FancyInput
                      type="number"
                      placeholder="0"
                      value={!loanAmountBorrowed
                        ? ""
                        : tooltipCommas(loanAmountBorrowed)}
                      max={maxLoanAmount}
                      onChange={(e) => {
                        setShowMaxLoanModal(true);
                        let sanitizedValue = e.target.value.replace("$", "");
                        sanitizedValue = replaceCommas(sanitizedValue);

                        setLoanBuilderState({
                          ...loanState,
                          loanAmountBorrowed: +sanitizedValue || 0,
                        });
                        setValidationObject({
                          event: e,
                          type: ErrorFields.borrowAmount,
                        });
                        setTimeout(() => {
                          setShowMaxLoanModal(false);
                        }, 5000);
                      }}
                    ></FancyInput>
                  </FancyField>
                </FormGroup>
                <FormGroup>
                  <div className="label">Term</div>
                  <FancyField className="with-pen calculator-field terms">
                    <FancyInput
                      type="number"
                      className="term"
                      value={days === 0 ? "" : days}
                      onChange={handleDaysChange}
                      placeholder="0"
                      min="0"
                    />
                    <span>D</span>
                    <FancyInput
                      type="number"
                      className="term"
                      value={hours === 0 ? "" : hours}
                      onChange={handleHoursChange}
                      placeholder="0"
                      min="0"
                      max="23"
                    />
                    <span>H</span>
                    <FancyInput
                      type="number"
                      className="term"
                      value={minutes === 0 ? "" : minutes}
                      onChange={handleMinutesChange}
                      placeholder="0"
                      min="0"
                      max="59"
                    />
                    <span>M</span>
                  </FancyField>
                </FormGroup>
                <FormGroup className={`${selectedSymbol === "Tether USD" ? "bluebg" : selectedSymbol === "DAI" ? "goldbg" : selectedSymbol === "USD Coin" ? "aquabg" : "bluebg"}`}>
                  <div className="label">Stablecoin</div>
                  <CurrencyBtn
                    ref={ref}
                    onClick={() => setShowDropDown(true)}
                    className="dropdownitems stablecoin"
                  >
                    <span>{currencyTitle}
                    </span>
                  </CurrencyBtn>
                  {showDropDown && (
                    <CustomDropDown className="stablecoins" sidebarOpen={sidebarOpen}>
                      {tokens.length > 0 &&
                        tokens.map((data, index) => (
                          <div
                            key={index}
                            className="dropdownitems"
                            onClick={() => {
                              handleSelect(data);
                            }}
                          >
                            <div className={data.symbol === "Tether USD" ? "green" : data.name === "DAI" ? "yellow" : data.symbol === "USD Coin" ? "blue" : ""}>
                              {data.symbol}
                            </div>
                          </div>
                        ))}
                    </CustomDropDown>
                  )}
                </FormGroup>
              
            </Form>
            <div className="svg-container">
              {
                width > 768 ? <>
                  <CalcIcon
                    text1="LTV"
                    text2={`MAX ${loanToValue.toFixed()}%`}
                    apy1={`${afterDecimals(collateralLtv)}%`}
                    width={"100%"}
                    style={{ position: "relative" }}
                  />
                  <CalcIcon
                    text1={"APy fee"}
                    apy1={"$" + afterDecimals(apyFee)}
                    width={"100%"}
                  />
                  <CalcIcon
                    text1={"Platform Fee"}
                    apy1={"$" + afterDecimals(plafFormFee)}
                    width={"100%"}
                  />
                  <div style={{ position: "relative" }}>
                    <CalcIcon
                      text1="Net Cash Out"
                      apy1={`$${afterDecimals(netCashOut < 0 ? 0 : netCashOut)}`}
                      width={"100%"}
                      text2={``}
                    />
                  </div>
                </> : <>
                  <CalcIcon
                    text1="LTV"
                    text2={` ${loanToValue.toFixed()}%`}
                    apy1={`${afterDecimals(collateralLtv)}%`}
                    width={"100%"}
                    style={{ position: "relative" }}
                  />
                  <CalcIcon
                    text1={"APy fee"}
                    apy1={"$" + afterDecimals(apyFee)}
                    width={"100%"}
                  />
                  <CalcIcon
                    text1={"Platform Fee"}
                    apy1={"$" + afterDecimals(plafFormFee)}
                    width={"100%"}
                  />
                  <CalcIcon
                    text1="Net Cash Out"
                    apy1={`$${afterDecimals(netCashOut < 0 ? 0 : netCashOut)}`}
                    width={"100%"}
                    text2={``}
                  />
                </>
              }
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                gap: 30,
              }}
            ></div>
            <div className="d-flex justify-content-center pb-3">
              {isLoader ? (
                <SpinnerWrapper>
                  {" "}
                  <StyledSpinner />{" "}
                </SpinnerWrapper>
              ) : (
                <div className="d-flex gap-2">
                  {/*
                    collateralType !== TokenTypes.NETWORK_TOKEN &&
                    <Tab
                      isClicked={isClicked}
                      netCashOut={netCashOut}
                      active={!collateralTokensList.every((data) => data.isApprove)}
                      aria-describedby={id}
                      onClick={() => {
                        if (!collateralTokensList.every((data) => data.isApprove)) {
                          handleClick()
                        } else {
                          return;
                        }

                      }}
                      errors={errors}
                    >
                      <ControlBtn id="createBtn">
                        <NextIcon />
                        Approve Loan Offer
                      </ControlBtn>
                    </Tab>
                    */}
                  <Tab
                    isClicked={isClicked}
                    netCashOut={netCashOut}
                    active={tokenList.every((data) => data.isApprove) || collateralType === TokenTypes.NETWORK_TOKEN}
                    aria-describedby={id}
                    onClick={handleClick}
                    errors={errors}
                  >
                    <ControlBtn id="createBtn">
                      <NextIcon />
                      Create Loan Offer
                    </ControlBtn>
                    <TermsAndConditionDialog open={openTermsDialog} setOpen={setOpenTermsDialog} />
                  </Tab>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
      <EmailDialogue open={openEmail} setOpen={setOpenEmail} />
    </>
  );
};

export default Calculator;