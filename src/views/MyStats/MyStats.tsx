import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Overlay from "../../components/Overlay";
import { AboveOverlay, Amount, ButtonsContainer, CardBox, CardHolder, ChartHeading, ChartHolder, Collateral, CollateralBtn, CollateralList, CollateralListHolder, Container, MyContent, ControlBox, ControlBtn, NftWrapper, SubHeading, SubHeadingContainer, TabsBtn, Title, TypeRow, ControlHolder, TransactionCard, } from "./Components/MyStats.styled";
import Button from "components/Elements/Button";
import IconButton from "components/Elements/IconButton";
import { DetailsIcon } from "components/Svg";
import FilterBar from "views/Marketplace/components/Filterbar";
import SortArrow from "assets/images/icons/sorting.svg";
import { toCommas } from "../../utils/conversion";
import { Routes } from "config/constants/routes";

import StatsCard from "./Components/StatsCard";
import { gql, useApolloClient } from "@apollo/client";
import { USER_LOAN_OFFERS } from "../../utils/graphQueries/queries";
import { useWeb3React } from "@web3-react/core";
import { RootState, useAppDispatch, useAppSelector } from "../../state";
import { resetLoans } from "../Marketplace/loansSlice";
import LiquidationChart from "./Components/Chart";
import Spinner from "../../components/Spinner";
import ActiveLoansDialog from "./Components/ActiveLoansDialog";
import LoanHistoryDialog from "./Components/LoanHistoryDialog";
import { AbiItem } from "web3-utils";
import Web3 from "web3";
import LoanOffersDialog from "./Components/LoanOffersDialog";
import { getNftCollateral } from "../Marketplace/api/getNftCollateral";
import type { NetworkInfo, NFTInfo } from "../Marketplace/types";
import CardHover from "./Components/CardHover";
import NFTCard from "./Components/NFTCard";
import { TokenTypes } from "../../config/constants/loans";
import { configGraphQL as config } from "config/constants/config";
import { afterDecimals, walletAddressFormatter } from "utils/conversion";
import { StatsTabs, StatsSubTabs } from "config/constants/types";
import { __nft_collateral_set, __tokens_collateral_set } from "config/constants/sets";
import useViewport from "hooks/useViewport";
import { contentDescription, contentSubTitle, contentTitle } from "views/SectionTitle/Content";
import SectionTitle from "views/SectionTitle";
import { Popup_Content } from "config/constants/infoData";


const MyStats: React.FC = () => {

  const history = useHistory();
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');


  const { account, chainId } = useWeb3React();
  const { width } = useViewport()
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (account || chainId) {
      dispatch(resetLoans());
    }
  }, [account, chainId, dispatch]);

  const [selectionID, setSelectionID] = useState(-1);
  const [selectionIndex, setSelectionIndex] = useState(-1);
  const [selectedLoans, setSelectedLoans] = useState(null);
  const [viewAs, setView] = useState(StatsTabs.BORROWER);
  const [subTab, setSubTab] = useState(StatsSubTabs.ACTIVE_LOANS);
  const [collateralDropDown, setCollateralDropDown] = useState(false);
  const [collateralNames, setCollateralNames] = useState([]);
  const [nftList, setNFTList] = useState([]);
  const [nftIndex, setNFTIndex] = useState(-1);
  const [selectedNFTData, setNFTData] = useState<NFTInfo[]>([]);
  const client = useApolloClient();
  const [loading, setLoading] = useState(false);
  const [isHover, setHover] = useState(false);
  const [scaleFactor, setScale] = useState(0);
  const [cardWidth, setWidth] = useState("100%");
  const { refetch } = useAppSelector((state: RootState) => {
    return {
      refetch: state.loanBuilder.queriesList,
    };
  });
  const [userData, setUserData] = useState(null);
  const DashBoardData = () => {
    setLoading(true);
    client
      .query({
        query: USER_LOAN_OFFERS,
        fetchPolicy: "network-only",
        variables: { chainId },
      })
      .then((res) => {
        setLoading(false);
        setUserData(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const [borrowedAmount, setBorrowedAmount] = useState(0);
  const [lendingAmount, setLendingAmount] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);
  const [interestEarnedAsLender, setInterestEarnedAsLender] = useState(0);
  
  const [totalStat, setTotalStat] = useState(null);

  useEffect(() => {
    if (account) {
      const timeInterval = async () => {
        const secret = localStorage.getItem("callSecret");
        if (secret) {
          clearInterval(execInterval);
          DashBoardData();
          return;
        }
      };
      let execInterval = setInterval(timeInterval, 1000);
    } else {
      setUserData(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, chainId]);

  useEffect(() => {
    const loanData = userData?.userLoanOffers;
    const result = loanData?.reduce(
      (obj, cur) => ({ ...obj, [cur.type]: cur }),
      {}
    );
    console.log(result);
    
    const borrowerActiveLoans = result?.activeLoanAsBorrower;
    const lenderActiveLoans = result?.activeLoanAsLender;
    const totalLoanOffers = result?.loanOffer;
    const borrowerlLiquidatedLoans = result?.liquidateLoanAsBorrower;
    const lenderlLiquidatedLoans = result?.liquidateLoanAsLender;
    const borrowerPastLoans = result?.pastLoanOfferAsBorrower;
    const lenderPastLoans = result?.pastLoanAsLender;

    // Initialize arrays to hold converted data
    const resultArray = [];

    // Function to convert data arrays with added 'type' and 'totalApyFee' properties
    function convertDataToArray(data, type, totalApyFee) {
      // Initialize an array to hold the converted data
      const resultArray = [];

      // Iterate over each item in the data array
      data.forEach(item => {
          // Create a new object based on the existing one
          const newItem = { ...item };

          // Add type and totalApyFee properties to the new object
          newItem.type = type;
          newItem.totalApyFee = totalApyFee;

          // Convert activatedAt to UTC format
          if (newItem.activatedAt) {
            const unixTimestamp = parseInt(newItem.activatedAt);
            const date = new Date(unixTimestamp); // Convert Unix timestamp to milliseconds
            const formattedDate = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            newItem.activatedAt = formattedDate; // Update activatedAt property with formatted date
          }

          // Push the new object to the result array
          resultArray.push(newItem);
      });
      return resultArray;
    }

    // Convert data arrays for 'activeLoanAsBorrower'
    if (result?.activeLoanAsBorrower && Array.isArray(result?.activeLoanAsBorrower?.data)) {
      const borrowerData = result.activeLoanAsBorrower.data;
      const borrowerType = 'Borrower';//result.activeLoanAsBorrower.type || ''; // Default to empty string if type is undefined
      const borrowerTotalApyFee = result.activeLoanAsBorrower.totalApyFee || 0; // Default to 0 if totalApyFee is undefined
      resultArray.push(...convertDataToArray(borrowerData, borrowerType, borrowerTotalApyFee));
    }

    // Convert data arrays for 'activeLoanAsLender'
    if (result?.activeLoanAsLender && Array.isArray(result?.activeLoanAsLender?.data)) {
      const lenderData = result.activeLoanAsLender.data;
      const lenderType = 'Lender';//result.activeLoanAsLender.type || ''; // Default to empty string if type is undefined
      const lenderTotalApyFee = result.activeLoanAsLender.totalApyFee || 0; // Default to 0 if totalApyFee is undefined
      resultArray.push(...convertDataToArray(lenderData, lenderType, lenderTotalApyFee));
    }

    // Convert data arrays for 'liquidateLoanAsBorrower'
    if (result?.liquidateLoanAsBorrower && Array.isArray(result?.liquidateLoanAsBorrower?.data)) {
      const borrowerData = result.liquidateLoanAsBorrower.data;
      const borrowerType = 'Borrower';//result.liquidateLoanAsBorrower.type || ''; // Default to empty string if type is undefined
      const borrowerTotalApyFee = result.liquidateLoanAsBorrower.totalApyFee || 0; // Default to 0 if totalApyFee is undefined
      resultArray.push(...convertDataToArray(borrowerData, borrowerType, borrowerTotalApyFee));
    }

    // Convert data arrays for 'lenderlLiquidatedLoans'
    if (result?.liquidateLoanAsLender && Array.isArray(result?.liquidateLoanAsLender?.data)) {
      const lenderData = result.liquidateLoanAsLender.data;
      const lenderType = 'Lender';//result.liquidateLoanAsLender.type || ''; // Default to empty string if type is undefined
      const lenderTotalApyFee = result.liquidateLoanAsLender.totalApyFee || 0; // Default to 0 if totalApyFee is undefined
      resultArray.push(...convertDataToArray(lenderData, lenderType, lenderTotalApyFee));
    }

    // Convert data arrays for loanOffer 'AsBorrower'
    if (result?.loanOffer && Array.isArray(result?.loanOffer?.data)) {
      const borrowerData = result.loanOffer.data;
      const borrowerType = 'Borrower';//result.loanOffer.type || ''; // Default to empty string if type is undefined
      const borrowerTotalApyFee = result.loanOffer.totalApyFee || 0; // Default to 0 if totalApyFee is undefined
      resultArray.push(...convertDataToArray(borrowerData, borrowerType, borrowerTotalApyFee));
    }

    // Convert data arrays for 'pastLoanAsLender'
    if (result?.pastLoanAsLender && Array.isArray(result?.pastLoanAsLender?.data)) {
      const lenderData = result.pastLoanAsLender.data;
      const lenderType = 'Lender';//result.pastLoanAsLender.type || ''; // Default to empty string if type is undefined
      const lenderTotalApyFee = result.pastLoanAsLender.totalApyFee || 0; // Default to 0 if totalApyFee is undefined
      resultArray.push(...convertDataToArray(lenderData, lenderType, lenderTotalApyFee));
    }

    // Convert data arrays for loanOffer 'pastLoanOfferAsBorrower'
    if (result?.pastLoanOfferAsBorrower && Array.isArray(result?.pastLoanOfferAsBorrower?.data)) {
      const borrowerData = result.pastLoanOfferAsBorrower.data;
      const borrowerType = 'Borrower';//result.pastLoanOfferAsBorrower.type || ''; // Default to empty string if type is undefined
      const borrowerTotalApyFee = result.pastLoanOfferAsBorrower.totalApyFee || 0; // Default to 0 if totalApyFee is undefined
      resultArray.push(...convertDataToArray(borrowerData, borrowerType, borrowerTotalApyFee));
    }

    // Now 'resultArray' contains the desired structure with 'type' and 'totalApyFee' properties added to each object
    console.log('Before sorting:', resultArray);

    // Sort the resultArray by the id property
    resultArray.sort((a, b) => b.id - a.id);

    // Log resultArray after sorting
    console.log('After sorting:', resultArray);

  

    setTotalStat(resultArray);

    setBorrowedAmount(0);
    setInterestEarned(0);
    setInterestEarnedAsLender(0);

    if (viewAs === StatsTabs.BORROWER && subTab === StatsSubTabs.ACTIVE_LOANS) {
      setSelectedLoans(borrowerActiveLoans);
    } else if (
      viewAs === StatsTabs.LENDER &&
      subTab === StatsSubTabs.ACTIVE_LOANS
    ) {
      setSelectedLoans(lenderActiveLoans);
    } else if (
      viewAs === StatsTabs.BORROWER &&
      subTab === StatsSubTabs.LOAN_OFFERS
    ) {
      setSelectedLoans(totalLoanOffers);
    } else if (
      viewAs === StatsTabs.BORROWER &&
      subTab === StatsSubTabs.LIQUIDATED_LOANS
    ) {
      setSelectedLoans(borrowerlLiquidatedLoans);
    } else if (
      viewAs === StatsTabs.LENDER &&
      subTab === StatsSubTabs.LIQUIDATED_LOANS
    ) {
      setSelectedLoans(lenderlLiquidatedLoans);
    } else if (viewAs === StatsTabs.LENDER && subTab === StatsSubTabs.HISTORY) {
      setSelectedLoans(lenderPastLoans);
    } else if (
      viewAs === StatsTabs.BORROWER &&
      subTab === StatsSubTabs.HISTORY
    ) {
      setSelectedLoans(borrowerPastLoans);
    }

    let borrowed = 0;
    let lendingAmount = 0;
    let interestEarned = 0;
    let interestPaid = 0;

    interestPaid =( borrowerActiveLoans?.totalApyFee + borrowerPastLoans?.totalApyFee +totalLoanOffers?.totalApyFee+ borrowerlLiquidatedLoans?.totalApyFee);
    interestEarned= lenderActiveLoans?.totalApyFee + lenderPastLoans?.totalApyFee +lenderlLiquidatedLoans?.totalApyFee;
   // borrowerActiveLoans?.data.forEach((data) => {
    //   borrowed = borrowed + data.borrowAmount;
    
    //   interestPaid = interestPaid + data.apyFee;

    //   data = {
    //     ...data,
    //     autoSell: true,
    //     expectedApyFee: data.apyFee.toFixed(2),
    //     loanLink: "https://www.example.com",
    //   };
    // });
    lenderActiveLoans?.data.forEach((data) => {
      lendingAmount = lendingAmount + data.borrowAmount;
    });
    // lenderPastLoans?.data.forEach((data) => {
    //   interestEarned = interestEarned + data.apyFee;
    // });
    if (selectedLoans?.data.length > 0) {
      setSelectionIndex(0);
      setSelectionID(selectedLoans?.data[0].id);
    }
    setBorrowedAmount(borrowed);
    setLendingAmount(lendingAmount);

    setInterestEarned(interestPaid);
    setInterestEarnedAsLender(interestEarned);
  }, [
    account,
    chainId,
    refetch,
    client,
    userData,
    subTab,
    viewAs,
    selectedLoans,
  ]);

  interface NFTCollateralQuery {
    viewNftCollateral: NFTInfo[];
  }

  interface NetworkCollateralQuery {
    viewNetworkTokenCollateral: NetworkInfo[];
  }

  useEffect(() => {
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

    setNFTList([]);
    setNFTIndex(-1);
    let names = [];
    const getNetworkTokens = async () => {
      const { data } = await client.query<NetworkCollateralQuery>({
        query: networkCollateral,
        variables: { loanId: selectionID, chainId },
      });

      data?.viewNetworkTokenCollateral &&
        data?.viewNetworkTokenCollateral.forEach((item) => {
          names.push(item.name);
        });
    };
    const getNFTs = async () => {
      const { data } = await client.query<NFTCollateralQuery>({
        query: getNftCollateral,
        variables: { loanId: selectionID, chainId },
      });

      setNFTData(data.viewNftCollateral);
      data?.viewNftCollateral?.forEach((item, index) => {
        images.push(item.image);
        names.push(item.name === "" ? "NFT " + String(index + 1) : item.name);
      });
      setNFTList(images);
      if (names.length > 0) {
        setNFTIndex(0);
      }
    };
    setCollateralNames([]);
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
    const web3 = new Web3(Web3.givenProvider);
    const GetTokenName = async (address: string) => {
      const contract = new web3.eth.Contract(abiContract, address);
      const name = await contract.methods.name().call();
      return name;
    };
    let images = [];
    if (selectionIndex !== -1) {
      if (
        __nft_collateral_set.has(selectedLoans?.data[selectionIndex]?.collateralType)
      ) {
        getNFTs();
      } else if (
        __tokens_collateral_set.has(selectedLoans?.data[selectionIndex]?.collateralType)
      ) {
        selectedLoans?.data[selectionIndex]?.collateral.forEach(
          async (item) => {
            const name = await GetTokenName(item.address);
            names.push(name);
          }
        );
      } else if (
        selectedLoans?.data[selectionIndex]?.collateralType ===
        TokenTypes.NETWORK_TOKEN
      ) {
        getNetworkTokens();
      }
    }
    setCollateralNames(names);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLoans?.data, selectionIndex, selectionID, client, selectedLoans]);

  const NFTRef = useRef(null);
  function handleResize() {
    const width = NFTRef?.current?.getBoundingClientRect().width;
    width ? setScale(width / 192) : setScale(0);
    setWidth(width + "px");
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [nftIndex]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  return (
    <>
      <Overlay />
      <AboveOverlay>
        <SectionTitle 
          title="My Stats" 
          headtitle={contentSubTitle[Popup_Content.MYSTAT]} 
          dialogtitle={contentTitle[Popup_Content.MYSTAT]} 
          content={contentDescription[Popup_Content.MYSTAT]} 
          backbtn={true}
        />
        <TableContainer>
          <div className="content-container">
            <TypeRow>
              <ButtonsContainer>
                <TabsBtn
                  onClick={() => {
                    setView(StatsTabs.BORROWER);
                    setSelectionID(-1);
                  }}
                  data-state={viewAs === StatsTabs.BORROWER ? "active" : ""}
                  className="loan-button"
                >
                  Summary
                </TabsBtn>
                <TabsBtn
                  onClick={() => {
                    setView(StatsTabs.LENDER);
                    setSelectionID(-1);
                  }}
                  data-state={viewAs === StatsTabs.LENDER ? "active" : ""}
                  className="loan-button"
                >
                  Loan Activity
                </TabsBtn>
              </ButtonsContainer>
            </TypeRow>
            <div className="content">
              {viewAs === StatsTabs.BORROWER ? (
                <>
                  <div>
                    <h5>AS BORROWER</h5>
                    <p><label className="default">Total borrowed:</label> ${borrowedAmount.toFixed(2)}</p>
                    <p><label className="default">Interest paid:</label> ${(afterDecimals(interestEarned)) ||'0.00'}</p>
                    <h5>AS Lender</h5>
                    <p><label className="default">Total loaned:</label> ${lendingAmount.toFixed(2)}</p>
                    <p><label className="default">Interest earned:</label> ${(afterDecimals(interestEarnedAsLender))||'0.00'}</p>
                  </div>
                </>
              ) : (
                <>
                  {loading ? (
                    <CenterContainer>
                      <Spinner />
                    </CenterContainer>
                  ) : (
                    <div>
                      {totalStat !== null && totalStat.length !== 0 ? (
                        <StyledTable>
                          <thead>
                            <tr>
                              <th></th>
                              <th>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                  onClick={() => handleSort('borrowAmount')}
                                >
                                  <div>Loan Amt</div>
                                  <img src={SortArrow} alt="" />
                                </div>
                              </th>
                              <th>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                  onClick={() => handleSort('apy')}
                                >
                                  <div>APY</div>
                                  <img src={SortArrow} alt="" />
                                </div>
                              </th>
                              <th>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <div>Earnings</div>
                                  <img src={SortArrow} alt="" />
                                </div>
                              </th>
                              <th>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <div>Term</div>
                                  <img src={SortArrow} alt="" />
                                </div>
                              </th>
                              <th>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <div>Collateral</div>
                                  <img src={SortArrow} alt="" />
                                </div>
                              </th>
                              <th>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <div>Type</div>
                                  <img src={SortArrow} alt="" />
                                </div>
                              </th>
                              <th>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <div>LTV</div>
                                  <img src={SortArrow} alt="" />
                                </div>
                              </th>
                              <th>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <div>Stablecoin</div>
                                  <img src={SortArrow} alt="" />
                                </div>
                              </th>
                              <th>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <div>Role</div>
                                  <img src={SortArrow} alt="" />
                                </div>
                              </th>
                              <th>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <div>Date</div>
                                  <img src={SortArrow} alt="" />
                                </div>
                              </th>
                              <th>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <div>Status</div>
                                  <img src={SortArrow} alt="" />
                                </div>
                              </th>
                              <th>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <div>ID</div>
                                  <img src={SortArrow} alt="" />
                                </div>
                              </th>
                              <th>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <div>AutoSell</div>
                                  <img src={SortArrow} alt="" />
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                          {totalStat.map(item => (
                              <tr key={item.id}>
                                <td>
                                  <IconButton
                                    onClick={() =>
                                      history.push(`${Routes.DETAILS}/${item.id}`)
                                    }
                                  >
                                    <DetailsIcon />
                                  </IconButton>
                                </td>
                                <td>${toCommas(item.borrowAmount)}</td>
                                <td>{item.apy}%</td>
                                <td>${item.apyFee.toFixed(2)}</td>
                                <td>{item.termLength} Days</td>
                                <td>${toCommas(item.collateral[0].price)}</td>
                                <td>{item.collateralType.replaceAll("_", " ")}</td>
                                <td>{item.ltv.toFixed(1)}%</td>
                                <td>{item.borrowedCoin.symbol}</td>
                                <td>{item.type}</td>
                                <td>{item.activatedAt}</td>
                                <td>{item.loanStatus}</td>
                                <td>{item.id}</td>
                                <td>{item.loanOfferLender?.autoSell ? "Enabled" : "Disabled"}</td>
                              </tr>
                            ))}
                          </tbody>
                        </StyledTable>
                      ) : (
                        <p>No Data Found</p>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>


          {/*<ButtonsContainer>
            <TabsBtn
              onClick={() => {
                setSubTab(StatsSubTabs.ACTIVE_LOANS);
                setSelectionID(-1);
              }}
              data-state={subTab === StatsSubTabs.ACTIVE_LOANS ? "active" : ""}
            >
              Active Loans
            </TabsBtn>
            {viewAs === StatsTabs.BORROWER ? (
              <TabsBtn
                onClick={() => {
                  setSubTab(StatsSubTabs.LOAN_OFFERS);
                  setSelectionID(-1);
                }}
                data-state={subTab === StatsSubTabs.LOAN_OFFERS ? "active" : ""}
              >
                Loan Offers
              </TabsBtn>
            ) : null}
            <TabsBtn
              onClick={() => {
                setSubTab(StatsSubTabs.HISTORY);
                setSelectionID(-1);
              }}
              data-state={subTab === StatsSubTabs.HISTORY ? "active" : ""}
            >
              Settled Loans
            </TabsBtn>
            <TabsBtn
              onClick={() => {
                setSubTab(StatsSubTabs.LIQUIDATED_LOANS);
                setSelectionID(-1);
              }}
              data-state={
                subTab === StatsSubTabs.LIQUIDATED_LOANS ? "active" : ""
              }
            >
              Liquidated Loans
            </TabsBtn>
            </ButtonsContainer>
          <MyContent isHeight={true}>
            <ChartHolder
              nobg={width <= 768 && __nft_collateral_set?.has(selectedLoans?.data[selectionIndex]?.collateralType)}
              image={
                selectionID !== -1 &&
                selectedLoans?.data?.length &&
                __nft_collateral_set.has(selectedLoans?.data[selectionIndex].collateralType)
              }
              className="stats-chart-holder"
            >
              {selectedLoans?.data?.length > 0 ? (
                <>
                  {selectionID === -1 ? (
                    <CenterContainer>
                      <span>No Card Selected</span>
                    </CenterContainer>
                  ) : __nft_collateral_set.has(selectedLoans?.data[selectionIndex].collateralType)
                    ? (
                      nftIndex !== -1 ? (
                        <NftWrapper>
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
                                nftID={selectedNFTData[nftIndex]?.nftId?.toString()}
                                owner={selectedNFTData[nftIndex]?.owner}
                                platform={selectedNFTData[nftIndex]?.plateform}
                                lastActivity={
                                  selectedNFTData[nftIndex]?.last_activity
                                }
                                address={selectedNFTData[nftIndex]?.nftAddress}
                                price={parseInt(selectedNFTData[nftIndex]?.price)}
                                collection={selectedNFTData[nftIndex]?.collection}
                                name={selectedNFTData[nftIndex]?.name}
                              />
                            </div>
                          )}
                        </NftWrapper>
                      ) : (
                        <CenterContainer>
                          <p>Please Select NFT Collateral to View</p>
                        </CenterContainer>
                      )
                    ) : (
                      <>
                        <ChartHeading>liquidation risk</ChartHeading>
                        <LiquidationChart
                          chartData={
                            selectedLoans?.data[selectionIndex]?.collateralDaily
                          }
                          loanData={selectedLoans?.data[selectionIndex]}
                        />
                      </>
                    )}
                </>
              ) : (
                <CenterContainer>
                  <span>No Data Found</span>
                </CenterContainer>
              )}
            </ChartHolder>
            <ControlHolder>
              <ControlBox>
                {(subTab === StatsSubTabs.HISTORY || subTab === StatsSubTabs.LIQUIDATED_LOANS) ? (
                  account || chainId ? (
                    <LoanHistoryDialog
                      trigger={<ControlBtn className="stats-btn">Download History</ControlBtn>}
                    />
                  ) : (
                    <ControlBtn disabled={true} className="stats-btn">Download History</ControlBtn>
                  )
                ) : null}

                {viewAs === StatsTabs.BORROWER ? (
                  subTab === StatsSubTabs.LOAN_OFFERS ? (
                    selectionID !== -1 && selectedLoans?.data?.length > 0 ? (
                      <LoanOffersDialog
                        loanData={selectedLoans?.data[selectionIndex]}
                        trigger={<ControlBtn className="stats-btn">Adjust Loan Offer</ControlBtn>}
                      />
                    ) : (
                      <>
                        <ControlBtn disabled={true} className="stats-btn">Adjust Loan Offer</ControlBtn>
                      </>
                    )
                  ) : subTab === StatsSubTabs.ACTIVE_LOANS ? (
                    selectionID !== -1 && selectedLoans?.data?.length > 0 ? (
                      <ActiveLoansDialog
                        loanType={viewAs}
                        loanData={
                          selectedLoans && selectedLoans?.data?.length
                            ? selectedLoans?.data[selectionIndex]
                            : null
                        }
                        trigger={<ControlBtn className="stats-btn">Pay Back</ControlBtn>}
                      />
                    ) : (
                      <ControlBtn disabled={true} className="stats-btn">Pay Back</ControlBtn>
                    )
                  ) : null
                ) : null}
                {collateralNames?.length > 0 ? (
                  <>
                    <CollateralBtn
                      onClick={() => {
                        setCollateralDropDown(!collateralDropDown);
                      }}
                    >
                      View Collateral
                    </CollateralBtn>
                    <CollateralListHolder
                      style={{ height: collateralDropDown ? "auto" : "0px" }}
                    >
                      <CollateralList>
                        {collateralNames.map((item, index) => {
                          return (
                            <Collateral
                              key={item.id}
                              onClick={() => {
                                setNFTIndex(index);
                              }}
                            >
                              {item}
                            </Collateral>
                          );
                        })}
                      </CollateralList>
                    </CollateralListHolder>
                  </>
                ) : null}
                <div className="tx-history-wrapper">
                  {
                    selectedLoans &&
                    selectedLoans?.data.length > 0 && (
                      <div>
                        <Title
                          style={{ padding: "30px 0 10px 0", fontSize: "14px" }}
                        >
                          Transaction Status
                        </Title>
                        <TransactionScroller
                          isScroll={
                            selectedLoans?.data[selectionIndex]
                              ?.loanOfferTransctions.length < 3
                              ? false
                              : true
                          }
                        >
                          {selectedLoans &&
                            selectedLoans?.data[
                              selectionIndex
                            ]?.loanOfferTransctions.map((data) => (
                              <TransactionCard width="173px">
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  <div style={{ fontSize: "13px" }}>
                                    {data["transction"]}
                                  </div>
                                  <div style={{ marginLeft: 10 }}>
                                    <a
                                      style={{
                                        color: "white",
                                        fontSize: "13px",
                                      }}
                                      href={`${config.etherScanUrl}/tx/${data["txHash"]}`}
                                      rel="noreferrer"
                                      target="_blank"
                                    >
                                      {walletAddressFormatter(data["txHash"])}
                                    </a>
                                  </div>
                                </div>
                              </TransactionCard>
                            ))}
                        </TransactionScroller>
                      </div>
                    )}
                </div>
              </ControlBox>
              <div>
                <CardBox showScroll={true} className="stats-card-box">
                  {loading ? (
                    <CenterContainer>
                      <Spinner />
                    </CenterContainer>
                  ) : (
                    selectedLoans?.data.map((item, index: number) => {
                      const totalCollateral = item.collateral
                        .map((data) => data["price"])
                        .reduce((partialSum, number) => partialSum + number, 0);
                      return (
                        <div className="card-wrapper">
                          <CardHolder
                            onClick={() => {
                              setSelectionID(item.id);
                              setSelectionIndex(index);
                            }}
                          >
                            <StatsCard
                              loan_id={item.id}
                              loan_amt={item.borrowAmount}
                              stable_coin={item.borrowedCoin.symbol}
                              days_left={item.termLength}
                              loanType={item.isPrivateLoan}
                              apy={item.apy}
                              type={item.collateralType}
                              collateral={totalCollateral}
                              ltv={item.ltv}
                              autosell={item.loanOfferLender?.autoSell}
                              cardClass={
                                selectionID === item.id ? "selected" : ""
                              }
                            />
                          </CardHolder>
                        </div>
                      );
                    })
                  )}
                </CardBox>
              </div>
            </ControlHolder>
                </MyContent>*/}
        </TableContainer>
      </AboveOverlay>
    </>
  );
};

const TransactionScroller = styled.div<{ isScroll?: boolean }>`
  min-height: 25vh;
  overflow-x: hidden;
  padding-right: 15px;
  overflow-y: ${(props) => (props.isScroll ? "scroll" : "hidden")};

`;
const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TableContainer = styled.div`
  .content-container {
    background-color: ${({ theme }) => theme.colors.blockBG};
    display: flex;
    flex-direction: column;

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

const StyledTable = styled.table`
  width: 100%;
  min-width: 835px;
  border-collapse: separate;
  border-spacing: 0;

  thead {
    font-size: 0.875rem;
    font-weight:bold;

    tr th div {
      gap: 8px;

      div{
        opacity: 0.6;
      }
    }
  }

  tr {
    gap: 10px;
  }

  th {
    text-align: center;
    white-space: nowrap;
  }

  th:first-child {
    text-align: left;
  }

  tbody {
    font-size: 1rem;
    text-align: center;
    min-height: 25vh;

    tr {
      position: relative;

      &::after{
        content:' ';
        display: block;
        position: absolute;
        height: 1px;
        width: 100%;
        bottom: 0;
        left: 0;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.06);
      }
    }

    td {
      padding: 16px;
      align-content: center;
      position: relative;
      white-space: nowrap;

      &::after{
        content:' ';
        display: block;
        position: absolute;
        height: 2px;
        width: 90%;
        bottom: -1px;
        left: 5%;
      }

      &:nth-child(2n){
        &::after{
          background: linear-gradient(to right, rgba(101, 103, 209, 1), rgba(101, 103, 209, 0));
        }
      }

      &:nth-child(2n+1){
        &::after{
          background: linear-gradient(to right, rgba(140, 235, 231, 1), rgba(140, 235, 231, 0));
        }
      }

      &:nth-child(1) {
        padding: 0 10px;

        button {
          margin: 10px 0 0;
        }

        &::after{
          display:none;
        }
      }
    }
  }
`;

export default MyStats;
