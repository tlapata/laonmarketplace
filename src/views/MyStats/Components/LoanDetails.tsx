import React, { useEffect, useRef, useCallback, useState } from "react";
import { gql, useApolloClient } from "@apollo/client";
import { LoanOffer } from "../../Marketplace/api/getLoanOffers";
import useLoanOfferDetails from "views/Marketplace/api/loanOfferDetails";
import { BackIcon, ExternalIcon, NextIcon, GovSynthetic40Icon } from "components/Svg";
import IconRouteSwitcher from "components/IconRouteSwitcher";
import { HeadingExtra } from "../../Dashboard/Dashboard.styled";
import { HeaderRightContent } from "views/Marketplace/LoanMarketplace";
import { Routes } from "config/constants/routes";
import StatsCard from "./StatsCard";
import { ControlBtn, NftContainer } from "./MyStats.styled";
import { toCommas } from "../../../utils/conversion";
import { AboveOverlay, CardBox, TransactionCard, ChartHeading, DetailCard, ChartHolder, Collateral, CollateralBtn, CollateralList, CollateralListHolder, Container, Content, Title, TitleContainer, } from "./MyStats.styled";
import Timer from "./Timer";
import CollateralCard from "views/LoanBuilder/components/ChooseCollaterals/components/CollateralCard";
import CardHover from "components/CardHover";
import { getNftCollateral } from "../../Marketplace/api/getNftCollateral";

import Overlay from "../../../components/Overlay";
import ActiveLoansDialog from "../Components/ActiveLoansDialog";
import { useHistory } from "react-router-dom";
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
import { RootState, useAppDispatch, useAppSelector } from "../../../state";
import { resetLoans, setCurrentTab } from "../../Marketplace/loansSlice";
import LiquidationChart from "./Chart";
import Chart from "components/Chart";
import styled from "styled-components";
import Spinner from "../../../components/Spinner";
import { useRouteMatch } from "react-router-dom";
import { AbiItem } from "web3-utils";
import { useDebouncing } from "hooks/useDebounce";
import {
  approveTokens,
  getDecimals,
  calculateGas,
} from "utils/contracts/contractCalls";
import { CHECK_LOAN_LIMIT } from "../../Marketplace/api/checkLoanLimit";
import { LoanTxMsgs, TokenTypes } from "config/constants/loans";
import { getMessageFrom } from "utils/conversion";
import useWeb3 from "hooks/useWeb3";
import type { NetworkInfo, NFTInfo } from "../../Marketplace/types";
import { walletAddressFormatter } from "../../../utils/conversion";
import NFTCard from "./NFTCard";
import { configGraphQL as config } from "config/constants/config";
import LoanOffersDialog from "./LoanOffersDialog";
import { useModal } from "state/hooks";
import { LoanStatus } from "config/constants/loans";
import { WalletConnectMsgs } from "config/constants/walletEnums";
import { revertReason } from "utils/revertReason";
import { __nft_collateral_set, __token_collateral_set, __tokens_collateral_set } from "config/constants/sets";
import { NetWorkChainId } from "config/constants/types";
import BigNumber from "bignumber.js";

interface stableCOins {
  listUserStableCoins: [];
}

const LoanDetails: React.FC = () => {
  const web3 = useWeb3();
  const { setAlert } = useModal();
  let history = useHistory();
  const onClickOutsideListener = () => {
    document.removeEventListener("click", onClickOutsideListener);
  };
  const { account, chainId } = useWeb3React();
  const { chainId: chainIdNumber } = useWeb3React();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (account || chainId) {
      dispatch(resetLoans());
    }
  }, [account, chainId, dispatch]);
  const [selectionIndex] = useState(0);
  const [selectedLoans, setSelectedLoans] = useState(null);
  const [, setShowStats] = useState(false);
  const [collateralDropDown, setCollateralDropDown] = useState(false);
  const [nftList, setNFTList] = useState([]);
  const [nftIndex, setNFTIndex] = useState(-1);
  const [tokenItems, setTokenItems] = useState("");
  const [selectedNFTData, setNFTData] = useState<NFTInfo[]>([]);
  const [loanOffers, { data, error, loading }] = useLoanOfferDetails();
  const { result: contractAddresses } = useContractAddresses(
    chainId?.toString()
  );
  const [collaterals, setUserCollateral] = useState(null);
  const client = useApolloClient();
  const [isHover, setHover] = useState(false);
  const [scaleFactor, setScale] = useState(0);
  const [cardWidth, setWidth] = useState("100%");
  const [myData, setData] = useState<LoanOffer[]>();
  const { params } = useRouteMatch();
  const { setClick } = useDebouncing(setAlert);
  const [approveLoading, setApproveLoading] = useState(false);
  const [checkNftAllowanceQuery] = useNftAllowanceCall();
  const [autoSell, setAutoSell] = useState(false);
  const [currentLoan, setCurrentLoan] = useState(null);
  const [allowancLoading, setAllowanceLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>();
  const dropDownListener = useCallback((e: any) => {
    //checking id for modal open
    if (dropdownRef?.current?.contains(e.target)) {
      return;
    }
    setCollateralDropDown(false);
  }, []);

  useEffect(() => {
    document.addEventListener("click", dropDownListener);
    return () => {
      document.removeEventListener("click", dropDownListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      setAlert(error?.message, "error");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const networkCollateral = gql`
    query ($loanId: Int!, $chainId: Int!) {
      viewNetworkTokenCollateral(loanId: $loanId, chainId: $chainId) {
        price
        id
        amount
        symbol
        name
      }
    }
  `;

  // Define the GraphQL query for NFT Traits
  const NFTTraitsQuery = gql`
    query GetNftTraits($chainId: Int!, $nftID: String!, $address: String!) {
      viewNftTraits(traitInput: { chainId: $chainId, nftId: $nftID, nftAddress: $address }) {
        symbol
        percentage
        floor_price
        trait_type
        trait_value
      }
    }
  `;

  // Define the GraphQL query for NFT activity
  const NFTActivityQuery = gql`
    query GetNftActivity($chainId: Int!, $nftId: String!, $address: String!) {
      viewNftActivity(activityInput: { chainId: $chainId, nftId: $nftId, nftAddress: $address }) {
        price
        event
        date
        from
        to
        transaction
        symbol
      }
    }
  `;


  interface NetworkCollateralQuery {
    viewNetworkTokenCollateral: NetworkInfo[];
  }

  const showToast = (message: string, type = "success") => {
    setAlert(message, true, type);
  };

  useEffect(() => {
    const abiContract: AbiItem[] = [
      { inputs: [], stateMutability: "nonpayable", type: "constructor" },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "account", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "burnFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "subtractedValue", type: "uint256" },
        ],
        name: "decreaseAllowance",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "addedValue", type: "uint256" },
        ],
        name: "increaseAllowance",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "account", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    const GetTokenName = async (address: string) => {
      if (window.ethereum) {
        try {
          const contract = new web3.eth.Contract(abiContract, address);
          const name = await contract?.methods?.name().call();
          return name;
        } catch (e) {
          console.log(e)
        }
      } else { return '' }

    };
    let names = [];
    const getNetworkTokens = async () => {
      const { data } = await client.query<NetworkCollateralQuery>({
        query: networkCollateral,
        variables: { loanId: selectedLoans[selectionIndex]["id"], chainId: chainId ? chainId : NetWorkChainId.BSC },
      });

      data?.viewNetworkTokenCollateral.forEach((item) => {
        names.push(item.name);
      });
      if (
        selectedLoans &&
        selectedLoans[selectionIndex]["loanStatus"] === LoanStatus.ACTIVE
      ) {
        names = [];
        names.push("Liquidation Graph");
        setTokenItems("Liquidation Graph");
      }
    };

    /*
    const getNFTs = async () => {
      const { data } = await client.query<NFTCollateralQuery>({
        query: getNftCollateral,
        variables: { loanId: selectedLoans[selectionIndex]["id"], chainId: chainId ? chainId : NetWorkChainId.BSC },
      });
      setNFTList(data?.viewNftCollateral);
      console.log(nftList);

      setNFTData(data?.viewNftCollateral);
      if (names?.length > 0) {
        setNFTIndex(0);
      }
    };
    */

    const getNFTs = async () => {
      try {

        // Query for NFTs
        const { data: nftData } = await client.query<NFTCollateralQuery>({
          query: getNftCollateral,
          variables: { 
            loanId: selectedLoans[selectionIndex]["id"], 
            chainId: chainId ? chainId : NetWorkChainId.BSC 
          },
        });
    
        // Extract NFT list from the response
        const nftList = nftData?.viewNftCollateral || [];
    
        // Fetch traits and activity for each NFT
        const nftsWithTraitsAndActivityPromises = nftList.map(async (nft) => {
          try {

            // Fetch traits for the NFT
            const { data: traitsData } = await client.query({
              query: NFTTraitsQuery,
              variables: { 
                chainId: chainId ? chainId : NetWorkChainId.BSC, 
                nftID: nft.nftId.toString(), 
                address: nft.nftAddress 
              },
            });
    
            // Fetch activity for the NFT
            const { data: activityData } = await client.query({
              query: NFTActivityQuery,
              variables: { 
                chainId: chainId ? chainId : NetWorkChainId.BSC, 
                nftId: nft.nftId.toString(), 
                address: nft.nftAddress 
              },
            });
    
            // Merge traits and activity data into NFT object
            return {
              ...nft,
              traits: traitsData?.viewNftTraits || [],
              activity: activityData?.viewNftActivity || [],
            };

          } catch (error) {
            
            console.error('Error fetching traits or activity:', error);
            
            // In case of error, return the NFT without traits or activity
            return {
              ...nft,
              traits: [],
              activity: [],
            };

          }
        });
    
        // Wait for all queries for traits and activity to finish
        const nftsWithTraitsAndActivity = await Promise.all(nftsWithTraitsAndActivityPromises);
    
        // Update state with NFTs including traits and activity
        setNFTList(nftsWithTraitsAndActivity);
    
        console.log(nftsWithTraitsAndActivity);

      } catch (error) {
        console.error('Error fetching NFTs:', error);
      }
    };



    if (selectedLoans && selectedLoans.length > 0) {
      setUserCollateral(selectedLoans[selectionIndex]?.collateral[0]);
      if (
        selectedLoans[selectionIndex].collateralType ===
        TokenTypes.SINGLE_NFT ||
        selectedLoans[selectionIndex]?.collateralType === TokenTypes.MULTI_NFT
      ) {
        getNFTs();
      } else if (
        selectedLoans[selectionIndex].collateralType ===
        TokenTypes.SINGLE_TOKEN ||
        selectedLoans[selectionIndex]?.collateralType === TokenTypes.MULTI_TOKEN
      ) {
        selectedLoans[selectionIndex]?.collateral.forEach(async (item) => {
          // const name = await GetTokenName(item?.address);
          // names?.push(name);
          names = await Promise.all(selectedLoans[selectionIndex]?.collateral.map(async (item) => {
            return await GetTokenName(item?.address);
          }));
        });
        if (
          selectedLoans &&
          selectedLoans[selectionIndex]["loanStatus"] === LoanStatus.ACTIVE
        ) {
          names = [];
          names.push("Liquidation Graph");
          setTokenItems("Liquidation Graph");
        }
      } else if (
        selectedLoans[selectionIndex].collateralType ===
        TokenTypes.NETWORK_TOKEN
      ) {
        getNetworkTokens();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLoans]);

  useEffect(() => {
    if (currentLoan && account) {
      const checkAlowance = async () => {
        setAllowanceLoading(true)
        const data = await checkStableCoinAllowance();
        if (data) {
          const resAmount = new BigNumber(data[selectionIndex]?.amount).dividedBy(
            new BigNumber(10).pow(new BigNumber(18))
          );
          const borrowAmt = new BigNumber(selectedLoans[selectionIndex]?.borrowAmount).dividedBy(
            new BigNumber(10).pow(new BigNumber(18))
          );
          if (
            (data && selectedLoans) && (resAmount.isGreaterThanOrEqualTo(borrowAmt))
          ) {
            let loan = {
              ...selectedLoans[selectionIndex],
              isApprove: true,
            };
            setSelectedLoans([loan]);
            setAllowanceLoading(false)
          } else {
            if (selectedLoans) {
              setSelectedLoans([selectedLoans[selectionIndex]]);
            } else {
              setSelectedLoans(null);
            }
            setAllowanceLoading(false)
          }
        }
      };

      checkAlowance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, currentLoan, selectionIndex, chainId]);

  const checkStableCoinAllowance = async () => {
    const { data } = await client.query({
      query: CHECK_ALLOWANCE,
      variables: {
        allowanceInputFields: {
          chain: chainId ? chainId.toString() : NetWorkChainId.BSC,
          tokenAddress:
            selectedLoans ? selectedLoans[selectionIndex]?.borrowedCoin?.tokenAddress : '',
          walletAddress: account,
        },
      },
    });
    return data?.collateralAllowance;
  };

  useEffect(() => {

    const timeInterval = async () => {
      setUserCollateral(null)
      setSelectedLoans(null)
      setCurrentLoan(null)

      const { data } = await loanOffers({
        variables: {
          loanId: +params["id"],
          chainId: chainId ? chainId : NetWorkChainId.BSC,
        },
      });

      const loanData = data?.loanOfferDetail;
      console.log(loanData);
      if (params["id"] && loanData) {
        setSelectedLoans([loanData]);
        setCurrentLoan([loanData]);
      } else {
        setSelectedLoans([]);
        setCurrentLoan([]);
      }
      return;

    }
    timeInterval();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client, data, setData, myData, loanOffers, account, chainId, params]);

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

  interface NFTCollateralQuery {
    viewNftCollateral: NFTInfo[];
  }

  const approveHandler = async (activeLoanData) => {
    if (!account || account === "") {
      setClick({
        value: true,
        message: WalletConnectMsgs.CONNECT_WALLET,
        type: "alert",
      });
      return;
    }
    if (activeLoanData?.user?.walletAddress === account) {
      setClick({
        value: true,
        message: "You cannot Activate your own loan",
        type: "error",
      });
      return;
    }
    setApproveLoading(true);
    const borrowerAddress = activeLoanData?.user?.walletAddress;

    //nft loan logic
    const getUserNfts = async (chainId: string, walletAddress: string, tierType: string) => {

      setApproveLoading(true);
      const { data } = await client.query({
        query: GET_USER_NFTS,
        variables: { chainId, account: walletAddress, tierType },
      });
      const nftData = data?.listUserNFTTokens;
      console.log("nftData "+ chainId);
      console.log(nftData);

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
                        ...activeLoanData,
                        isApprove: true,
                      };
                      setSelectedLoans([loan]);
                      setApproveLoading(false);
                    } else {
                      let loan = {
                        ...activeLoanData,
                        isApprove: false,
                      };
                      setSelectedLoans([loan]);

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
                                // showToast(LoanTxMsgs.APPROVE_SUCCESS, "success");
                                let loan = {
                                  ...activeLoanData,
                                  isApprove: true,
                                };
                                setSelectedLoans([loan]);
                              }
                            })
                            .catch((err) => {

                              const msg = revertReason(err);
                              showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
                              setApproveLoading(false);
                              let loan = {
                                ...activeLoanData,
                                isApprove: false,
                              };
                              setSelectedLoans([loan]);
                            });
                        })
                        .catch((err) => { });
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
    const getUserTokens = async (chainId: string, walletAddress: string, tierType: string) => {
      const { data } = await client.query({
        query: GET_USER_TOKENS_COLLATERAL,
        variables: { chainId, account: walletAddress, tierType },
      });
      const tokensData = data.listUserTokensCollateral;
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
          } else {
            return (data = {
              ...data,
              collateralAllowed: false,
            });
          }
        });
        const objectName = {
          ...activeLoanData,
          collateral: collateral,
        };

        if (objectName.collateral.every((data) => data.collateralAllowed)) {
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
                activeLoanData.collateral.filter((data, index) => {
                  if (data.address === mappedData[index].tokenAddress) {
                    const result = data.amount <= mappedData[index].amount;
                    data = {
                      ...data,
                      collateralAllowance: true,
                    };

                    if (result) {
                      data.collateralAllowance = true;
                    } else {
                      data.collateralAllowance = false;
                    }
                  }
                  return data;
                });
                if (
                  objectName?.collateral.every((data) => data.collateralAllowed)
                ) {
                  const stableCoinAllowance = await checkStableCoinAllowance();
                  if (stableCoinAllowance.length > 0) {
                    //

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
                            ...activeLoanData,
                            isApprove: true,
                          };
                          setSelectedLoans([loan]);
                          setApproveLoading(false);
                        } else {
                          let loan = {
                            ...activeLoanData,
                            isApprove: false,
                          };
                          setSelectedLoans([loan]);

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
                                      ...activeLoanData,
                                      isApprove: true,
                                    };
                                    setSelectedLoans([loan]);
                                  }
                                })
                                .catch((err) => {
                                  const msg = revertReason(err);
                                  showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
                                  setApproveLoading(false);
                                  let loan = {
                                    ...activeLoanData,
                                    isApprove: false,
                                  };
                                  setSelectedLoans([loan]);
                                });
                            })
                            .catch((err) => { });
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
              .catch((err) => {
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

    if (__tokens_collateral_set.has(activeLoanData?.collateralType)) {
      getUserTokens(`0x${chainId}`, borrowerAddress, activeLoanData.tierType);
    } else if (__nft_collateral_set.has(activeLoanData?.collateralType)) {
      getUserNfts(`0x${chainId}`, borrowerAddress, activeLoanData?.tierType);
    } else {
      setApproveLoading(true);

      const coinsData = await checkStableCoins();
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

          const contractAddress = contractAddresses?.GovWorldDiamond;
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
                  ...activeLoanData,
                  isApprove: true,
                };
                setSelectedLoans([loan]);
              }
            })
            .catch((err) => {
              const msg = revertReason(err);
              showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
              setApproveLoading(false);
              let loan = {
                ...activeLoanData,
                isApprove: false,
              };
              setSelectedLoans([loan]);
            });
        })
        .catch((err) => { });
    }
  };

  const activateLoanTransaction = async (rawData, address: string) => {
    try {
      const gas = await calculateGas(web3, account, address, rawData);
      const gasPrice = await web3.eth.getGasPrice();

      const params = {
        data: rawData,
        from: account,
        to: address,
        gas: gas,
        gasPrice: gasPrice,
      };
      await web3.eth
        .sendTransaction(params)
        .then(async (res) => {
          setApproveLoading(false);
          showToast(LoanTxMsgs.FUND_SUCCESS, "success")
          setTimeout(() => {
            dispatch(resetLoans());
          }, 5000);
          dispatch(setCurrentTab("active"));
          history.push(Routes.LOANMARKETPLACE);
        })
        .catch((err) => {
          const msg = revertReason(err);
          showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
          setApproveLoading(false);
        });
    } catch (error: any) {
      setApproveLoading(false);
      const msg = revertReason(error);
      showToast(getMessageFrom(msg.trim()), "error");
    }
  };

  const createLoanOffer = async (loanData) => {
    setApproveLoading(true);
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
          autoSell: autoSell,
        },
      })
      .then((result) => {
        if (result.data) {
          activateLoanTransaction(
            result.data["activateLoanOfferSendTransction"].targetData,
            result.data["activateLoanOfferSendTransction"].ContractAddress
          );
        } else {
          setApproveLoading(false);
          let loan = {
            ...selectedLoans[selectionIndex],
            isApprove: false,
          };
          setSelectedLoans([loan]);
          showToast(`${result.errors[0].message}`, "error");
        }
      })
      .catch((err) => {
        setApproveLoading(false);
      });
  };

  const { refetch } = useAppSelector((state: RootState) => {
    return {
      refetch: state.loanBuilder.queriesList,
    };
  });

  useEffect(() => {
    if (selectedLoans && selectedLoans.length > 0) {
      selectedLoans?.forEach((data) => {
        data = {
          ...data,
          totalCollateral: data?.collateral
            .map((data) => data["price"])
            .reduce((partialSum, number) => partialSum + number, 0)
            .toFixed(2),
          autoSell: true,
          expectedApyFee: data.apyFee.toFixed(2),
          loanLink: "https://www.example.com",
        };
      });
    }
  }, [account, chainId, refetch, client, selectedLoans]);

  const NFTRef = useRef(null);
  function handleResize() {
    // Set window width/height to state
    const width = NFTRef?.current?.getBoundingClientRect().width;
    width ? setScale(width / 192) : setScale(0);
    setWidth(width + "px");
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [nftIndex]);

  if (!window.ethereum) {
    return (
      <>
        <Overlay />
        <AboveOverlay>
          <Container className="loan-details-container">
            <TitleContainer className="loandetail-container" style={{ position: "relative", cursor: "pointer" }}>
              <Title className="title loandetail">{selectedLoans && selectedLoans[selectionIndex]?.loanStatus ===
                LoanStatus.ACTIVE ? 'Active Loan' : 'Loan Offer'} Details</Title>
              <HeadingExtra
                onClick={() => {
                  setShowStats(true);
                }}
                onMouseLeave={() => {
                  document.addEventListener("click", onClickOutsideListener);
                }}
              >
                {selectedLoans &&
                  selectedLoans[selectionIndex]?.loanStatus ===
                  LoanStatus.ACTIVE && (
                      <Timer isInModal={false} loan={selectedLoans[selectionIndex]} isLoanDetails={true} />
                  )}
                <IconRouteSwitcher />
              </HeadingExtra>
            </TitleContainer>
            <div className="d-flex justify-content-center w-100">
              <p className="text-center w-100">Please install metamask to continue.</p>
            </div>
          </Container>
        </AboveOverlay>
      </>
    )
  } else {

    var currentStatusClass: string;
    var currentStatus: string;
    var currentStatusNote: string;

    if( selectedLoans && selectedLoans[selectionIndex]?.loanStatus === LoanStatus.ACTIVE ) {
      currentStatusClass = 'active';
      currentStatus = 'Loan Active';
      currentStatusNote = 'This Loan Has Been Activated By A Peer Lender from the Loan Marketplace';
    } else if( selectedLoans && selectedLoans[selectionIndex]?.loanStatus === LoanStatus.CANCELLED ) {
      currentStatusClass = 'cancelled';
      currentStatus = 'Loan Offer Cancelled';
      currentStatusNote = 'This Loan Offer has been Cancelled By the Borrower';
    } else if( selectedLoans && selectedLoans[selectionIndex]?.loanStatus === LoanStatus.LIQUIDATED ) {
      currentStatusClass = 'liquidated';
      currentStatus = 'Loan Liquidated';
      currentStatusNote = 'This Loan has been Liquidated Due to Collateral Value Decrease or Untimely Payback';
    } else if( selectedLoans && selectedLoans[selectionIndex]?.loanStatus === LoanStatus.CLOSED ) {
      currentStatusClass = 'closed';
      currentStatus = 'Loan Paid Back';
      currentStatusNote = 'This Loan Has Been Settled by Being Paid Back On Time or Early';
    } else if( selectedLoans && selectedLoans[selectionIndex]?.loanStatus === LoanStatus.INACTIVE && selectedLoans[selectionIndex]?.isBorrowerUnderTier === true ) {
      currentStatusClass = 'removed';
      currentStatus = 'Loan Offer Removed';
      currentStatusNote = 'LTV Went Beyond Your Tier Level Please Adjust Loan Offer or Increase Your Tier Level';
    } else if( selectedLoans && selectedLoans[selectionIndex]?.loanStatus === LoanStatus.INACTIVE ) {
      currentStatusClass = 'inactive';
      currentStatus = 'Loan Offer Active';
      currentStatusNote = 'This Loan Offer is Available to be Funded by a Peer Lender';
    }
console.log("chainId "+ chainId);
    return (
      <>
        <Overlay />
        <AboveOverlay>
          <TitleContainer className="loandetail-container"
            style={{ position: "relative" }}
          >
            <Title className="title loandetail">
              {selectedLoans && selectedLoans[selectionIndex]?.loanStatus === LoanStatus.ACTIVE ? 'Active Loan' : 
              selectedLoans && (selectedLoans[selectionIndex]?.loanStatus === LoanStatus.CLOSED || selectedLoans[selectionIndex]?.loanStatus === LoanStatus.LIQUIDATED) ? "Loan" : 
              'Loan Offer'} Details
              <span className="title-note">ID: {selectedLoans && selectedLoans[selectionIndex]?.id}</span>
            </Title>
            <HeadingExtra
              onClick={() => {
                setShowStats(true);
              }}
              onMouseLeave={() => {
                document.addEventListener("click", onClickOutsideListener);
              }}
            >
              <div className="back">
                <a className="icon-svg-wrapper active" onClick={() =>
                  history.goBack()
                }>
                  <BackIcon />
                </a>
              </div>
            </HeadingExtra>
            
            {/* Right columns of the icons */}
            <HeaderRightContent>
              <HeadingExtra>
                <IconRouteSwitcher />
              </HeadingExtra>
            </HeaderRightContent>
          </TitleContainer>
          <Container className="loan-details-container" >
            <Content className="content-container" isHeight={false}>
              <InnerContent className="loan-offer-details">

                {/* First Column */}
                <div className="general-details first-col">
                  <CardBox className="loan-card" showScroll={false}>
                    {loading ? (
                      <CenterContainer>
                        <Spinner />
                      </CenterContainer>
                    ) : (
                      selectedLoans?.map((item) => {
                        const totalCollateral = item?.collateral
                          .map((data) => data["price"])
                          .reduce((partialSum, number) => partialSum + number, 0);
                        return (
                          <div key={item?.id}>
                            <DetailCard className="loandetails">
                              <StatsCard
                                loan_id={item?.id}
                                loan_amt={item?.borrowAmount}
                                stable_coin={item?.borrowedCoin?.symbol}
                                days_left={item?.termLength}
                                apy={item?.apy}
                                apyFee={item?.apyFee}
                                type={item?.collateralType}
                                loanType={item?.isPrivateLoan}
                                collateral={totalCollateral}
                                status={item?.loanStatus}
                                ltv={item?.ltv}
                                priceImpact={item?.priceImpact}
                                cardClass={""}
                                setAutoSell={setAutoSell}
                                cardType={"details"}
                                autoSell={item?.loanOfferLender?.autoSell}
                                activatedAt={item?.activatedAt}
                                created={item?.createdAt}
                                closedDate={item?.closedAt}
                              />
                            </DetailCard>
                          </div>
                        );
                      })
                    )}
                  </CardBox>
                </div>

                {/* Second Column */}
                <div className="general-details second-col">
                  <div className="top-data">
                    <div className="inner-details">
                      <h3>Collateral</h3>
                      <div>{selectedLoans && selectedLoans[selectionIndex]?.collateralType.replaceAll("_", " ")}</div>
                    </div>
                    <div className="inner-details">
                      <h3>Collateral USD Value</h3>
                      <div className="collateral-usd">$
                      {selectedLoans?.map((item) => {
                        const totalCollateral = item?.collateral
                          .map((data) => data["price"])
                          .reduce((partialSum, number) => partialSum + number, 0);
                        return ( toCommas(totalCollateral) );
                      })}                      
                      </div>
                    </div>
                  </div>
                  <div className="collaterals">
                    <CollateralListHolder>
                      <CollateralList>
                        {selectedLoans && (selectedLoans[selectionIndex].collateralType === TokenTypes.SINGLE_TOKEN ||
                          selectedLoans[selectionIndex].collateralType === TokenTypes.MULTI_TOKEN ||
                          selectedLoans[selectionIndex].collateralType === TokenTypes.NETWORK_TOKEN)
                        ? (
                          selectedLoans && selectedLoans[selectionIndex]?.collateral.map(
                            (item, index: number) => {
                              return (
                                <React.Fragment key={item.id}>
                                  <Collateral>
                                    <div className="token-details-block">
                                      <div className="logo-name">
                                        <img
                                            height="38"
                                            width="38"
                                            src={item.icon ?? `/assets/tokenIcons/${item?.symbol}.svg`}
                                            alt={item?.name}
                                        />
                                        <h3>{item?.name} <span>{item?.symbol}</span></h3>
                                      </div>
                                      <div className="token-quantity">
                                        <div className="qty">
                                          <h4>Value:</h4>
                                          <div>${toCommas(item?.amount*item?.price)}</div>
                                        </div>
                                        <div className="qty">
                                          <h4>Coins:</h4>
                                          <div>{item?.amount}</div>
                                        </div>
                                        <div className="qty">
                                          <h4>Price:</h4>
                                          <div>${toCommas(item?.price)}</div>
                                        </div>
                                      </div>
                                      <div className="token-quantity addresses">
                                        <div className="qty">
                                            <h4>Contract:</h4>
                                            <div onClick={() => window.open(`https://bscscan.com/address/${item?.address}`)}>
                                                {`${item?.address.slice(0, 7)}...${item?.address.slice(item?.address.length - 3)}`}
                                            </div>
                                        </div>
                                        <div className="qty">
                                            <h4>Partner Type:</h4>
                                        </div>
                                      </div>
                                    </div>
                                  </Collateral>
                                </React.Fragment>
                                );
                              }
                            )
                        ) : (
                          nftList && nftList?.length > 0 && nftList.map(
                            (item, index: number) => {

                              const marketName = item?.markets?.map(market => market.name).join('');
                              const marketURL = item?.markets?.map(market => market.nft_url).join('');

                              return (
                                <React.Fragment key={item.id}>
                                  <Collateral>
                                    <div className="nft-details-block">
                                        <div className="nft-image">
                                          {item?.image ? (
                                            <img src={item?.image} alt={item?.name === "" ? "NFT " + String(index + 1) : item?.name} />
                                          ) : ""}
                                        </div>
                                        <div className="nft-detail-card">
                                          <CardHover
                                            nftID={item?.nftId}
                                            name={item?.name === "" ? "NFT " + String(index + 1) : item?.name}
                                            collection={item?.collection}
                                            lastActivity={item?.last_activity}
                                            price={item?.price}
                                            owner={item?.owner}
                                            plateform={marketName}
                                            marketURL={marketURL}
                                            address={item?.nftAddress}
                                            floor_price={item?.floor_price}
                                            symbol={item?.symbol}
                                            image={item?.image}
                                            creator={item?.creator}
                                            description={item?.description}
                                            items={item?.items}
                                            owners={item?.owners}
                                            traits={item?.traits}
                                            activity={item?.activity}
                                          />
                                        </div>
                                    </div>
                                  </Collateral>
                                </React.Fragment>
                              );
                            }
                          )
                        )}
                        </CollateralList>
                    </CollateralListHolder>
                  </div>
                  <div className="gov-button">
                    {account && account !== "" ? (
                      selectedLoans &&
                        selectedLoans[selectionIndex]?.loanStatus ===
                        LoanStatus.INACTIVE &&
                        account?.toLowerCase() ===
                        selectedLoans[
                          selectionIndex
                        ]?.user?.walletAddress?.toLowerCase() ? (
                        <LoanOffersDialog
                          loanData={selectedLoans[selectionIndex]}
                          trigger={<ControlBtn><NextIcon />Adjust Loan</ControlBtn>}
                        />
                      ) : selectedLoans &&
                        selectedLoans[selectionIndex]?.loanStatus ===
                        LoanStatus.ACTIVE &&
                        account.toLowerCase() ===
                        selectedLoans[
                          selectionIndex
                        ]?.user?.walletAddress?.toLowerCase() ? (
                        <ActiveLoansDialog
                          loanType={"borrower"}
                          loanData={selectedLoans[selectionIndex]}
                          trigger={<ControlBtn><NextIcon />Pay Back</ControlBtn>}
                        />
                      ) : (
                        selectedLoans &&
                        selectedLoans[selectionIndex]?.loanStatus ===
                        LoanStatus.INACTIVE && (
                          <>
                            {approveLoading || allowancLoading ? (
                              <ControlBtn style={{ pointerEvents: "none" }}>
                                <NextIcon />
                                Loading...
                              </ControlBtn>
                            ) : (
                              <ControlBtn
                                onClick={() =>
                                  selectedLoans &&
                                    selectedLoans[selectionIndex]["isApprove"]
                                    ? createLoanOffer(
                                      selectedLoans[selectionIndex]
                                    )
                                    : approveHandler(
                                      selectedLoans[selectionIndex]
                                    )
                                }
                              >
                                <NextIcon />
                                {selectedLoans &&
                                  selectedLoans[selectionIndex]["isApprove"]
                                  ? "Activate"
                                  : "Fund Loan Offer"}
                              </ControlBtn>
                            )}{" "}
                          </>
                        )
                      )
                    ) : null}

                    {/* Chart button 
                    {selectedLoans && selectedLoans?.length > 0 ? (
                      <div ref={dropdownRef} style={{ position: "relative" }}>
                        <CollateralBtn
                          className="collateral-btn"
                          onClick={() => {
                            setCollateralDropDown(!collateralDropDown);
                          }}
                        >
                          View Collateral
                        </CollateralBtn>
                        <CollateralListHolder
                          style={{ height: collateralDropDown ? "auto" : "0px" }}
                        >
                          {collateralDropDown && (
                            <CollateralList
                              style={{ position: "absolute", width: "172px" }}
                            >
                              {selectedLoans && selectedLoans[selectionIndex]?.collateral.map(
                                (item, index: number) => {
                                  return (
                                    <React.Fragment key={item.id}>
                                      <Collateral
                                        onClick={() => {
                                          setUserCollateral(null);
                                          if (
                                            __token_collateral_set?.has(selectedLoans[selectionIndex]
                                              .collateralType)
                                          ) {
                                            setTokenItems("");
                                            setTimeout(() => {
                                              setUserCollateral(item);
                                            }, 100);
                                          } else {
                                            setNFTIndex(index);
                                          }
                                          setCollateralDropDown(false);
                                        }}
                                      >
                                        {item?.name} ({item?.amount})
                                      </Collateral>
                                      {selectedLoans[selectionIndex].collateral
                                        .length -
                                        1 ===
                                        index &&
                                        selectedLoans[selectionIndex]
                                          ?.loanStatus === LoanStatus.ACTIVE &&
                                        (selectedLoans[selectionIndex]
                                          .collateralType ===
                                          TokenTypes.SINGLE_TOKEN ||
                                          selectedLoans[selectionIndex]
                                            .collateralType ===
                                          TokenTypes.MULTI_TOKEN ||
                                          selectedLoans[selectionIndex]
                                            .collateralType ===
                                          TokenTypes.NETWORK_TOKEN) && (
                                          <Collateral
                                            onClick={() => {
                                              setTokenItems("Liquidation Graph");
                                              setCollateralDropDown(false);
                                            }}
                                          >
                                            Liquidation Graph
                                          </Collateral>
                                        )}
                                    </React.Fragment>
                                  );
                                }
                              )}
                            </CollateralList>
                          )}
                        </CollateralListHolder>
                      </div>
                    ) : null}*/}
                  </div>
                </div>

                {/* Third Column of Statuses */}
                {selectedLoans && (
                  <div className="tx-history-wrapper">
                    <h5>
                      Status 
                    </h5>
                    <div className="status-explaned">
                      <span className={currentStatusClass}>{currentStatus}</span>
                      <p>{currentStatusNote}</p>
                    </div>

                    {selectedLoans &&
                      selectedLoans[selectionIndex]?.loanStatus ===
                      LoanStatus.ACTIVE && (
                        <Timer isInModal={false} loan={selectedLoans[selectionIndex]} isLoanDetails={true} />
                    )}

                    <TransactionScroller
                      isScroll={
                        selectedLoans[selectionIndex]?.loanOfferTransctions
                          ?.length < 3
                          ? false
                          : true
                      }
                    >
                      <h5>Transaction Hashes:</h5>
                      {selectedLoans &&
                        selectedLoans[selectionIndex]?.loanOfferTransctions?.map((data) => (
                          <TransactionCard className="transaction" width="100%" key={data?.id}>
                            <div className="tx-card">
                              <div>{data["transction"]}</div>
                              <div>
                                <a
                                  href={`${config.etherScanUrl}/tx/${data["txHash"]}`}
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  {walletAddressFormatter(data["txHash"])}
                                </a>
                              </div>
                            </div>
                          </TransactionCard>
                        )
                      )}
                    </TransactionScroller>
                  </div>
                )}
              </InnerContent>

              {/*<ChartHolder
                className={selectedLoans &&
                  (selectedLoans[selectionIndex]?.collateralType ===
                    TokenTypes.SINGLE_NFT ||
                    selectedLoans[selectionIndex]?.collateralType ===
                    TokenTypes.MULTI_NFT ? "" : "chart")}
                nobg={true}
                type={tokenItems && true}
                style={{ marginTop: 15 }}
              >
                {selectedLoans &&
                  (selectedLoans[selectionIndex]?.collateralType ===
                    TokenTypes.SINGLE_NFT ||
                    selectedLoans[selectionIndex]?.collateralType ===
                    TokenTypes.MULTI_NFT ? (
                    nftIndex !== -1 ? (
                      <>
                        {nftList && nftList?.length > 0 ? (
                          <NftContainer>
                            {!isHover ? (
                              <NFTCard
                                childRef={NFTRef}
                                key={selectionIndex}
                                onMouseEnter={() => setHover(true)}
                                className="svgmy"
                                width={cardWidth}
                                height={"100%"}
                                index={selectionIndex}
                                imageUrl={nftList[nftIndex]}
                              />
                            ) : (
                              <div
                                className="hoverContent"
                                style={{
                                  display: isHover ? "block" : "none",
                                  zoom: scaleFactor,
                                }}
                                onMouseLeave={() => {
                                  setHover(false);
                                }}
                              >
                                <CardHover
                                  nftID={selectedNFTData[
                                    nftIndex
                                  ]?.nftId?.toString()}
                                  owner={selectedNFTData[nftIndex]?.owner}
                                  platform={selectedNFTData[nftIndex]?.plateform}
                                  lastActivity={
                                    selectedNFTData[nftIndex]?.last_activity
                                  }
                                  address={selectedNFTData[nftIndex]?.nftAddress}
                                  price={parseInt(
                                    selectedNFTData[nftIndex]?.price
                                  )}
                                  collection={
                                    selectedNFTData[nftIndex]?.collection
                                  }
                                  name={selectedNFTData[nftIndex]?.name}
                                />
                              </div>
                            )}
                          </NftContainer>
                        ) : (
                          <NoData>No Nfts Found</NoData>
                        )}
                      </>
                    ) : (
                      <CenterContainer>
                        <p>Please Select NFT Collateral to View</p>
                      </CenterContainer>
                    )
                  ) : (
                    <>
                      {selectedLoans && collaterals && (
                        <>
                          {tokenItems !== "Liquidation Graph" ? (
                            <Chart
                              collateral={collaterals}
                              loan={selectedLoans[selectionIndex]}
                            />
                          ) : (
                            <div style={{ height: "463px" }}>
                              <ChartHeading>liquidation risk</ChartHeading>
                              <LiquidationChart
                                chartData={
                                  selectedLoans[selectionIndex]?.collateralDaily
                                }
                                loanData={selectedLoans[selectionIndex]}
                              />
                            </div>
                          )}
                        </>
                      )}
                    </>
                  ))}
                </ChartHolder>*/}
            </Content>
          </Container>
        </AboveOverlay>
      </>
    );
  }
};

const InnerContent = styled.div`
    display: flex;
    flex-direction:row;
    gap: 14px;
    width: 100%;

    .general-details,
    .tx-history-wrapper {
      background: ${({ theme }) => theme.colors.blockBG};
      border-radius: 4px;
      padding: 20px;
      min-width: 235px;

      &.first-col {
        ${({ theme }) => theme.mediaQueries.md}{
          min-width: 100%;
          width: 100%;
        }
      }

      &.second-col {
        width: 100%;
        min-width: calc(100% - 480px);

        ${({ theme }) => theme.mediaQueries.lg}{
          width: calc(100% - 240px);
          min-width: calc(100% - 240px);
        }

        ${({ theme }) => theme.mediaQueries.md}{
          padding: 0;
          background: none;
          width: 100%;
          min-width:100%;
        }
      }

      .top-data {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;

        .inner-details {
          background: rgba(255, 255, 255, 0.03);
          padding: 12px 20px;
          border-radius: 4px;
          min-width: 200px;

          h3 {
            font-size: 0.75rem;
            color: rgba(134, 135, 188, 0.4);
            margin: 0 0 10px;
            padding: 0;
          }

          div {
            font-weight: 600;

            &.collateral-usd {
              color: ${({ theme }) => theme.colors.green};
            }
          }
        }

        ${({ theme }) => theme.mediaQueries.md}{
          display:block;

          .inner-details {
            min-width: 100%;

            &:first-child {
              margin-bottom: 20px;
            }
          }
        }
      }

      .title {
        font-size: ${(props) => props.theme.fonts.xs}rem;
        font-weight: 700;
        color: rgba(134, 135, 188, 0.4);
        text-transform: uppercase;
        letter-spacing: 3.6px;
      }

      .status-explaned {
        font-weight: 600;

        span {
          padding: 10px 0;
          display: block;

          &.active {
            color: ${({ theme }) => theme.colors.statusGreen};
          }
          &.cancelled{
            color: ${({ theme }) => theme.colors.statusPink};
          }
          &.liquidated {
            color: ${({ theme }) => theme.colors.red};
          }
          &.closed {
            color: ${({ theme }) => theme.colors.purple};
          }
          &.inactive {
            color: ${({ theme }) => theme.colors.textAccent};
          }
          &.removed {
            color: ${({ theme }) => theme.colors.gold};
          }
        }

        p{
          font-size: ${(props) => props.theme.fonts.sm}rem;
          opacity: 0.4;
        }
      }

      .collaterals {
        margin-bottom: 20px;
      }

      ${({ theme }) => theme.mediaQueries.md}{
          min-width: 100%;
      }
    }
    
    ${({ theme }) => theme.mediaQueries.lg}{
      flex-wrap: wrap;
    }
`;

const TransactionScroller = styled.div<{ isScroll?: boolean }>`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px dashed rgba(255, 255, 255, 0.06);
`;




const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NoData = styled.h2`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoanDetails;
