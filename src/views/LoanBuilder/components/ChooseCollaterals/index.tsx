import React, { useEffect, useState } from "react";
import { gql, useApolloClient } from "@apollo/client";
import { GET_USER_NFTS, GET_USER_TOKENS, LIST_NETWORK_TOKENS, GET_NFT_TRAITS } from "utils/graphQueries/queries";
import styled from "styled-components";
import { CollateralsWrapper, NoData, SpinnerWrapper, StyledSpinner, } from "components/shared/styled";
import CollateralCard from "./components/CollateralCard";
import CardHover from "components/CardHover";
import { NextIcon } from "components/Svg";
import { Switch, SwitchThumb } from "components/Form/Switch";
import NFTDetails from "components/NFTDetails";

import selectedTick from "assets/images/loanbuilder/selectedTick.svg";
import Input from "components/Input";
import rectangle from "assets/images/rectangle-white-upper.svg";
import rectangle_purple from "assets/images/loanbuilder/rectangle-purple.svg";
import rectangle1 from "assets/images/rectangle-white-lower.svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import LoanChecked from "assets/images/marketplace/loancard-checkmark.png";
import { useWeb3React } from "@web3-react/core";
import { LoanTypes, TokenData, TokenTypes } from "config/constants/loans";
import { RootState, useAppSelector } from "state";
import { useLoanData, useModal, useSetLoanState } from "state/hooks";
import { ConvertToExponential, networkTokenFormatter, toCommas } from "utils/conversion";
import ReactTooltip from "react-tooltip";
import TokenSlider from "./TokenSlider";
import useViewport from "hooks/useViewport";
import { __nft_collateral_set } from "config/constants/sets";
import { IconBox } from "components/IconBox/IconBox";

const ChooseCollaterals = ({ type, setItems, selected, setMaxTokenAmount }) => {

  const [OpenPopup, setOpenPopup] = useState(null);
  const handleOpenPopup = (index) => {
    setOpenPopup(index);
  };

  // Define the GraphQL query for NFT activity
  const NFTActivityQuery = gql`
    query ($chainId: Int!, $nftId: String!, $address: String!) {
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
  
  const context = useWeb3React();
  const { width } = useViewport();
  const { account, chainId } = context;
  const client = useApolloClient();
  const [collateralValue, setCollateralValue] = useState([]);
  const [collateralNfts, setCollateralNfts] = useState([]);
  const [selfType] = useState(type);
  const { loanState } = useLoanData();
  const { stakedCollateralTokens, nftLoanData } = loanState;
  const { setLoanBuilderState } = useSetLoanState();
  const [loading, setLoading] = useState(false);
  const [selectedCollaterals, setSelectedCollaterals] = useState([]);
  const [isSunTokens, setIsSunTokens] = useState([]);
  const [nftLoanLoanData] = useState([]);
  const [nftData, setNftData] = useState([]);
  const { setAlert } = useModal();
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [inputValue] = useState([]);
  const tier = loanState.tier;

  const showToast = (message: string) => {
    setAlert(message, true);
  };
  const selectedNFTs = useAppSelector((state: RootState) => {
    return {
      selected: nftLoanData,
    };
  });
  const selectedTokens = {
    selected: stakedCollateralTokens,
  };

  useEffect(() => {
    const getUserNfts = (chainId: string, account: string, tierType: string) => {
      setLoading(true);
      client
        .query({
          query: GET_USER_NFTS,
          variables: { chainId, account, tierType, isLoanCreate: true },
        })
        .then((result) => {
          const data = result.data.listUserNFTTokens.map((data) => {
            return { ...data, active: false };
          });

          setNftData(data);

          const tempData = data;
          if (selectedNFTs && selectedNFTs.selected) {
            selectedNFTs.selected.forEach((selectedNFT) => {
              if (typeof selectedNFT !== "undefined") {
                tempData.forEach((nft, index) => {
                  if (
                    typeof nft !== "undefined" &&
                    nft.nftId === selectedNFT["nftId"]
                  ) {
                    const obj = {
                      price: nft.price,
                      nftId: nft.nftId,
                      nftAddress: nft.nftAddress,
                    };

                    collateralNfts[index] = nft.price;
                    nftLoanLoanData[index] = obj;
                    setCollateralNfts([...collateralNfts]);
                    setLoanBuilderState({
                      ...loanState,
                      stakedCollateralNFTS: [...collateralNfts],
                      nftLoanData: [...nftLoanLoanData],
                    });
                    if (nft.price !== 0) {
                      collateralValue[index] = nft.price;
                      setCollateralValue([...collateralValue]);
                      inputValue[index] = +nft.price;
                      setLoanBuilderState({
                        ...loanState,
                        stakedCollateralAmount: [...inputValue],
                        stakedCollateralTokens: [...collateralValue],
                      });
                    }

                    if (type === TokenTypes.SINGLE_NFT) {
                      const mydata = tempData.find(
                        (data) => data.id === nft.id && data.active
                      );
                      if (mydata && mydata.active) {
                        tempData.filter((data) => (data.active = false));
                        const ind = tempData.findIndex(
                          (data) => data.id === nft.id
                        );
                        tempData[ind].active = false;
                        setItems([]);
                        selected(false);
                        setTotalItems([]);
                      } else {
                        tempData.filter((data) => (data.active = false));
                        const ind = tempData.findIndex(
                          (data) => data.id === nft.id
                        );
                        tempData[ind].active = true;
                        tempData[ind]["isApprove"] = false;
                        tempData[ind]["loader"] = false;
                        setItems([tempData[ind]]);
                        setTotalItems([tempData[ind]]);
                        selected(true);
                      }
                      selectedCollateralsHandler(nft, index);

                      return;
                    }
                    const ind = tempData.findIndex(
                      (data) => data.id === nft.id
                    );
                    tempData[ind].active = !tempData[ind].active;
                    tempData[ind]["isApprove"] = false;
                    tempData[ind]["loader"] = false;
                    // setNftData([...nftData])
                    const selectedItems = tempData.filter(
                      (data) => data.active && data
                    );
                    setItems([...selectedItems]);
                    setTotalItems([...selectedItems]);
                    selected(true);
                    selectedCollateralsHandler(nft, index);
                  }
                });
              }
            });
          }

          // New query to fetch additional information
          const hexNumber = parseInt(chainId.replaceAll("0x", ""));
          
          Promise.all(
            data.map((nft) => {
                const traitsPromise = client.query({
                    query: GET_NFT_TRAITS,
                    variables: { 
                        chainId: hexNumber, 
                        nftID: String(nft.nftId), 
                        address: nft.nftAddress 
                    },
                });
        
                const activityPromise = client.query({
                    query: NFTActivityQuery,
                    variables: { 
                        chainId: hexNumber, 
                        nftId: String(nft.nftId), 
                        address: nft.nftAddress 
                    },
                });
        
                return Promise.all([traitsPromise, activityPromise])
                    .then(([traitsResult, activityResult]) => ({
                        traits: traitsResult.data.viewNftTraits,
                        activity: activityResult.data.viewNftActivity
                    }));
            })
        )
        .then((combinedResults) => {
            const newData = data.map((nft, index) => ({
                ...nft,
                traits: combinedResults[index].traits,
                activity: combinedResults[index].activity,
            }));
        
            setNftData(newData);
            console.log(newData);
        })
        .catch((err) => {
            console.error("Error fetching NFT data:", err);
        });

          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });  
    }

    const getUserTokens = (chainId: string, account: string, tierType: string) => {
      setLoading(true);
      
      client
        .query({
          query: GET_USER_TOKENS,
          variables: { chainId, account, tierType },
        })
        .then((result) => {
          var allTokens = result.data.listUserTokensValue;

          allTokens.forEach((token) => {
            token.active = false;
          });

          if (selectedTokens && selectedTokens.selected) {
            selectedTokens.selected.forEach((selectedToken, index) => {
              if (typeof selectedToken !== "undefined") {
                const token = allTokens[index];
                allTokens[index].active = true;
                collateralValue[index] = selectedToken;
                if (collateralValue[index] < 0) {
                  collateralValue[index] = 0;
                  setCollateralValue([...collateralValue]);
                  return;
                }
                setCollateralValue([...collateralValue]);

                if (+selectedToken > +token.amount) {
                  setMaxTokenAmount({
                    valid: false,
                    amount: null,
                    flag: "insufficient",
                  });
                  return;
                }

                //auto check selection on enter value
                allTokens[index]["isApprove"] = false;
                allTokens[index]["loader"] = false;
                const selectedItems1 = allTokens.filter(
                  (data) => data.active && data
                );
                setItems([...selectedItems1]);
                setTotalItems([...selectedItems1]);
                selected(true);

                setMaxTokenAmount({ valid: true, amount: null, flag: "" });
                inputValue[index] =
                  (token.price / +token.amount) * +selectedToken;
                selectedCollateralsHandler(
                  token,
                  index,
                  inputValue,
                  collateralValue
                );

                if (type === TokenTypes.SINGLE_TOKEN) {
                  allTokens.filter((data) => (data.active = false));
                  const ind = allTokens.findIndex(
                    (data) => data.id === token.id
                  );
                  allTokens[ind].active = true;
                  // setTokens([...tokens])
                  allTokens[ind]["isApprove"] = false;
                  allTokens[ind]["loader"] = false;
                  setItems([allTokens[ind]]);
                  setTotalItems([allTokens[ind]]);
                  selected(true);

                  selectedCollateralsHandler(
                    token,
                    index,
                    inputValue,
                    collateralValue
                  );
                  return;
                }
                const ind = allTokens.findIndex((data) => data.id === token.id);
                allTokens[ind]["isApprove"] = false;
                allTokens[ind]["loader"] = false;
                const selectedItems = allTokens.filter(
                  (data) => data.active && data
                );
                setItems([...selectedItems]);
                setTotalItems([...selectedItems]);
                selected(true);
                selectedCollateralsHandler(
                  token,
                  index,
                  inputValue,
                  collateralValue
                );
              }
            });
          }

          setTokens(allTokens);
          //setCollateralValue(allTokens.map(token => token.amount));

          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    };

    const getNetworkTokens = (chainId: string, account: string) => {
      setLoading(true);
      client
        .query({
          query: LIST_NETWORK_TOKENS,
          variables: { chain: chainId, address: account },
        })
        .then((result) => {
          const allTokens = result.data.listUserNetworkTokens.map(
            (data, index) => {
              return { ...data, active: false };
            }
          );

          // collateral value
          if (selectedTokens && selectedTokens.selected) {
            selectedTokens.selected.forEach((selectedToken, index) => {
              if (typeof selectedToken !== "undefined") {
                const token = allTokens[index];
                allTokens[index].active = true;
                collateralValue[index] = selectedToken;
                if (collateralValue[index] < 0) {
                  collateralValue[index] = 0;
                  setCollateralValue([...collateralValue]);
                  return;
                }
                setCollateralValue([...collateralValue]);
                selectedCollateralsHandler(token, index);

                if (+selectedToken > +token.amount) {
                  setMaxTokenAmount({
                    valid: false,
                    amount: null,
                    flag: "insufficient",
                  });
                  return;
                }

                //auto check selection on enter value
                allTokens[index]["isApprove"] = false;
                allTokens[index]["loader"] = false;
                const selectedItems1 = allTokens.filter(
                  (data) => data.active && data
                );
                setItems([...selectedItems1]);
                setTotalItems([...selectedItems1]);
                selected(true);

                setMaxTokenAmount({ valid: true, amount: null, flag: "" });
                inputValue[index] =
                  (token.price / +token.amount) * +selectedToken;
                setLoanBuilderState({
                  ...loanState,
                  stakedCollateralAmount: [...inputValue],
                  stakedCollateralTokens: [...collateralValue],
                });

                if (type === TokenTypes.SINGLE_TOKEN) {
                  allTokens.filter((data) => (data.active = false));
                  const ind = allTokens.findIndex(
                    (data) => data.id === token.id
                  );
                  allTokens[ind].active = true;
                  allTokens[ind]["isApprove"] = false;
                  allTokens[ind]["loader"] = false;
                  setItems([allTokens[ind]]);
                  setTotalItems([allTokens[ind]]);
                  selected(true);

                  selectedCollateralsHandler(token, index);
                  return;
                }
                const ind = allTokens.findIndex((data) => data.id === token.id);

                allTokens[ind]["isApprove"] = false;
                allTokens[ind]["loader"] = false;
                const selectedItems = allTokens.filter(
                  (data) => data.active && data
                );
                setItems([...selectedItems]);
                setTotalItems([...selectedItems]);
                selected(true);
                selectedCollateralsHandler(token, index);
              }
            });
          }
          setTokens(allTokens);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    };

    if (type === TokenTypes.SINGLE_NFT || type === TokenTypes.MULTI_NFT) {
      account && getUserNfts(`0x${chainId}`, account, tier.tierType);
    } else if (
      type === TokenTypes.SINGLE_TOKEN ||
      type === TokenTypes.MULTI_TOKEN
    ) {
      account && getUserTokens(`0x${chainId}`, account, tier.tierType);
    } else {
      account && getNetworkTokens(`0x${chainId}`, account);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, chainId, tier]);

  const [items, setTotalItems] = useState([]);

  useEffect(() => {
    if (type === TokenTypes.SINGLE_TOKEN || type === TokenTypes.SINGLE_NFT) {
      setSelectedCollaterals([]);
      setIsSunTokens([]);
    }
  }, [items, type, tier.tierType]);

  const selectedCollateralsHandler = (
    token,
    index,
    inputValue = [],
    collateralValue = [],
    collateralNFTS = [],
    nftLoanData = []
  ) => {
    if (token.active) {

      selectedCollaterals[index] =
        type === TokenTypes.SINGLE_NFT || type === TokenTypes.MULTI_NFT
          ? token.nftId
          : token.id;
      setSelectedCollaterals([...selectedCollaterals]);
      isSunTokens[index] =
        type === TokenTypes.SINGLE_NFT || type === TokenTypes.MULTI_NFT
          ? token.isSunToken
          : token.isSunToken;
      setIsSunTokens([...isSunTokens]);

    } else {
      selectedCollaterals[index] = undefined;
      isSunTokens[index] = undefined;
      setSelectedCollaterals([...selectedCollaterals]);
      setIsSunTokens([...isSunTokens]);
    }
    setLoanBuilderState({
      ...loanState,
      collateralData: [...selectedCollaterals],
      isSunToken: [...isSunTokens],
      stakedCollateralAmount: [...inputValue],
      stakedCollateralTokens: [...collateralValue],
      stakedCollateralNFTS: [...collateralNFTS],
      nftLoanData: [...nftLoanData],
    });
  };
  if (items.length !== 0) {
    selected(true);
  } else {
    selected(false);
  }
  const style = {
    borderRadius: "none",
    background: "transparent",
  };

  const selectTokenHandler = (token, index) => {

    if (type === TokenTypes.SINGLE_TOKEN) {
      const data = tokens.find((data) => data.id === token.id && data.active);
      if (data && data.active) {
        tokens.filter((data) => (data.active = false));
        const ind = tokens.findIndex((data) => data.id === token.id);
        tokens[ind].active = false;
        setTokens([...tokens]);
        setItems([]);
        selected(false);
        setTotalItems([]);
      } else {
        tokens.filter((data) => (data.active = false));
        const ind = tokens.findIndex((data) => data.id === token.id);
        tokens[ind].active = true;
        setTokens([...tokens]);
        tokens[ind]["isApprove"] = false;
        tokens[ind]["loader"] = false;
        setItems([tokens[ind]]);
        setTotalItems([tokens[ind]]);
        selected(true);
      }
      selectedCollateralsHandler(token, index, inputValue, collateralValue);
      return;
    }

    const selectedTokens = tokens.filter((data) => data.active && data);
    
    if (selectedTokens.length === 5) {
      showToast("Maximum '5' Token Collaterals are allowed");
      return;
    }

    const ind = tokens.findIndex((data) => data.id === token.id);
    tokens[ind].active = !token.active;
    if (!tokens[ind].active) {
      collateralValue[ind] = "";
    } else {
      collateralValue[ind] = tokens[ind].amount;
    }
    setTokens([...tokens]);
    tokens[ind]["isApprove"] = false;
    tokens[ind]["loader"] = false;
    const selectedItems = tokens.filter((data) => data.active && data);
    setItems([...selectedItems]);
    setTotalItems([...selectedItems]);
    selected(true);
    selectedCollateralsHandler(token, index, inputValue, collateralValue);
  };

  const maxHandler = (type, token, amount, price, index) => {
    //auto check selection on enter value
    // if single token then set all as false
    if (type === TokenTypes.SINGLE_NFT || type === TokenTypes.SINGLE_TOKEN) {
      tokens.forEach((token) => {
        token.active = false;
      });
    }
    const ind = tokens.findIndex((data) => data.id === token.id);
    tokens[ind].active = true;
    setTokens([...tokens]);
    tokens[ind]["isApprove"] = false;
    tokens[ind]["loader"] = false;
    const selectedItems = tokens.filter((data) => data.active && data);
    setItems([...selectedItems]);
    setTotalItems([...selectedItems]);
    selected(true);
    setMaxTokenAmount({ valid: true, amount: null, flag: "" });
    collateralValue[index] = amount;
    setCollateralValue([...collateralValue]);
    inputValue[index] = (price / +amount) * amount;
    selectedCollateralsHandler(token, index, inputValue, collateralValue);
  };

  const handleOnChangeNfts = (e, index, price, amount) => {
    collateralValue[index] = e.target.value;
    if (collateralValue[index] < 0) {
      collateralValue[index] = 0;
      setCollateralValue([...collateralValue]);
      return;
    }
    setCollateralValue([...collateralValue]);

    setMaxTokenAmount({ valid: true, amount: null });
    inputValue[index] = +e.target.value;
    setLoanBuilderState({
      ...loanState,
      stakedCollateralAmount: [...inputValue],
      stakedCollateralTokens: [...collateralValue],
    });
  };

  const handleOnChange = (token, e, index, price, amount) => {
    if (type === TokenTypes.SINGLE_NFT || type === TokenTypes.SINGLE_TOKEN) {
      collateralValue.fill(undefined);
      tokens.forEach((token) => {
        token.active = false;
      });
    }
    const ind = tokens.findIndex((data) => data.id === token.id);
    tokens[ind].active = true;

    collateralValue[index] = e.target.value;
    
    if (collateralValue[index] < 0) {
      collateralValue[index] = 0;
      setCollateralValue([...collateralValue]);
      return;
    }
    setCollateralValue([...collateralValue]);

    if (+e.target.value > +amount) {
      setMaxTokenAmount({ valid: false, amount: null, flag: "insufficient" });
      return;
    }

    //auto check selection on enter value
    setTokens([...tokens]);
    tokens[ind]["isApprove"] = false;
    tokens[ind]["loader"] = false;
    const selectedItems = tokens.filter((data) => data.active && data);
    setItems([...selectedItems]);
    setTotalItems([...selectedItems]);
    selected(true);

    setMaxTokenAmount({ valid: true, amount: null, flag: "" });
    inputValue[index] = (price / +amount) * +e.target.value;
    selectedCollateralsHandler(token, index, inputValue, collateralValue);
  };

  const selectNftsHandler = (nft, index) => {
    const obj = {
      price: nft.price,
      nftId: nft.nftId,
      nftAddress: nft.nftAddress,
    };

    collateralNfts[index] = nft.price;
    nftLoanLoanData[index] = obj;
    setCollateralNfts([...collateralNfts]);
    if (nft.price !== 0) {
      collateralValue[index] = nft.price;
      setCollateralValue([...collateralValue]);
      inputValue[index] = +nft.price;
    }

    if (type === TokenTypes.SINGLE_NFT) {
      const data = nftData.find((data) => data.id === nft.id && data.active);
      if (data && data.active) {
        nftData.filter((data) => (data.active = false));
        const ind = nftData.findIndex((data) => data.id === nft.id);
        nftData[ind].active = false;
        setNftData([...nftData]);
        setItems([]);
        selected(false);
        setTotalItems([]);
      } else {
        nftData.filter((data) => (data.active = false));
        const ind = nftData.findIndex((data) => data.id === nft.id);
        nftData[ind].active = true;
        setNftData([...nftData]);
        nftData[ind]["isApprove"] = false;
        nftData[ind]["loader"] = false;
        setItems([nftData[ind]]);
        setTotalItems([nftData[ind]]);
        selected(true);
      }
      selectedCollateralsHandler(
        nft,
        index,
        inputValue,
        collateralValue,
        collateralNfts,
        nftLoanLoanData
      );
      return;
    }
    const ind = nftData.findIndex((data) => data.id === nft.id);
    nftData[ind].active = !nftData[ind].active;
    nftData[ind]["isApprove"] = false;
    nftData[ind]["loader"] = false;
    setNftData([...nftData]);
    const selectedItems = nftData.filter((data) => data.active && data);
    setItems([...selectedItems]);
    setTotalItems([...selectedItems]);
    selected(true);
    selectedCollateralsHandler(
      nft,
      index,
      inputValue,
      collateralValue,
      collateralNfts,
      nftLoanLoanData
    );
  };

  if (type === LoanTypes.NETWORK_TOKEN) {
    selected(true);
  }
  const onLeaveHandler = () => {
    nftData.filter((data) => (data.hover = false));
    setNftData([...nftData]);
  };
  const selectHover = (id) => {
    nftData.filter((data) => (data.hover = false));
    const ind = nftData.findIndex((data) => data.id === id);
    nftData[ind].hover = !nftData[ind].hover;
    setNftData([...nftData]);
  };

  return (
    <>
      <CollateralsWrapper>
        {type === TokenTypes.SINGLE_TOKEN || type === TokenTypes.MULTI_TOKEN ? (
          loading ? (
            <SpinnerWrapper>
              {" "}
              <StyledSpinner />{" "}
            </SpinnerWrapper>
          ) : !loading && tokens.length === 0 ? (
            <NoData>No Tokens Found</NoData>
          ) : (
              <div className="tokens-wrapper">
                {
                  tokens?.map((token, index) => (
                    <>
                    {/*p: {collateralValue[index]}*/}
                    <CollateralCard
                      token={token}
                      index={index}
                      selectTokenHandler={selectTokenHandler}
                      collateralValue={collateralValue[index]}
                      style={style}
                      handleOnChange={handleOnChange}
                      maxHandler={maxHandler}
                      selfType={selfType}
                    />
                    </>
                  ))
                }
              </div>
          )
        ) : __nft_collateral_set.has(type) ? (
          loading ? (
            <SpinnerWrapper>
              {" "}
              <StyledSpinner />{" "}
            </SpinnerWrapper>
          ) : !loading && nftData.length === 0 ? (
            <NoData>No NFT's Found</NoData>
          ) : (
              <div className="tokens-wrapper nfts">
                {
                  nftData?.length > 0 && nftData?.map((data, index) => {

                    const marketURL = data?.markets?.map(market => market.nft_url).join('');
                
                    return (
                      <>
                        <NftWrapper key={index} className={data?.active && "choosen"}>
                          <div 
                            onClick={() => selectNftsHandler(data, index)}
                            className="nft-image"
                          >
                            <img src={data?.image} alt=""/>
                          </div>
                          <div
                            onMouseLeave={() => onLeaveHandler()}
                            className="nft-detail-card"
                          >
                          <div className="top-info">
                            <div onClick={() => selectNftsHandler(data, index)}>
                              <CardHeading>
                                <h4>Collection <span>#{data?.nftId}</span></h4>
                              </CardHeading>
                              <CardHeading>{data?.name ? data?.name : "N/A"}</CardHeading>
                            </div>
                            <a 
                              className="check-details"
                              onClick={() => handleOpenPopup(index)}
                            >
                              <NextIcon />
                            </a>
                            <NFTDetails 
                              open={OpenPopup === index} 
                              setOpen={setOpenPopup} 
                              image={data?.image}
                              address={data?.nftAddress}
                              name={data?.name ? data?.name : "N/A"}
                              creator={data?.creator}
                              owner={data?.owner}
                              description={data?.description}
                              plateform={data?.plateform}
                              marketURL={marketURL}
                              nftID={data?.nftId}
                              items={data?.items}
                              owners={data?.owners}
                              last_activity={data?.lastActivity}
                              traits={data?.traits}
                              activity={data?.activity}
                            />
                          </div>
                          <CardHeading>
                            <h4>Contract:</h4>
                            <div>
                              <a href={`https://bscscan.com/address/${data?.nftAddress}`} target="_blank">{`${data?.nftAddress.slice(0, 7)}...${data?.nftAddress.slice(data?.nftAddress.length - 3)}`}</a>
                            </div>
                          </CardHeading>
                          <Content>
                            <div className="switch" onClick={() => selectNftsHandler(data, index)}>
                              <Switch checked={data?.active}>
                                <SwitchThumb />
                              </Switch>
                            </div>
                            <div className="floor-price" onClick={() => selectNftsHandler(data, index)}>
                              <div>
                                <CardText>Floor</CardText>
                                <p><strong>{data?.traits?.floor_price}</strong> {data?.traits?.symbol}</p>
                              </div>
                              <div>
                                <CardText>USD</CardText>
                                <p>${+data?.price?.toFixed(2)}</p>
                              </div>
                            </div>
                          </Content>
                            {/*<CardHover
                              nftID={data?.nftId}
                              name={data?.name}
                              onchange={(e) =>
                                handleOnChangeNfts(e, index, data?.price, 1)
                              }
                              collection={data?.collection}
                              lastActivity={data?.last_activity}
                              price={data?.price}
                              owner={data?.owner}
                              platform={data?.plateform}
                              address={data?.nftAddress}
                            />
                            data?.active && <LoanCardChecked />*/}
                          </div>
                        </NftWrapper>
                      </>
                    );
                  })
                }
              </div>
          )
        ) : loading ? (
          <SpinnerWrapper>
            {" "}
            <StyledSpinner />{" "}
          </SpinnerWrapper>
        ) : !loading && tokens.length === 0 ? (
          <NoData>No Network Tokens Found</NoData>
        ) : (
          <CenterContainer>
            {tokens.length > 0 &&
              tokens.map((token, index) => (
                <CardsWrapper>
                  <Card className="pointer position-relative mb-3">
                    <div className="card bg-transparent text-white border-0">
                      <div className="card-img-overlay active">
                        <ReactTooltip />
                        <div
                          onClick={() => selectTokenHandler(token, index)}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <Key>Coin:</Key>
                            <Value>{token.symbol}</Value>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <Key>Name:</Key>
                            <Value>Network Token</Value>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <Key>Tokens:</Key>
                            <Value data-tip={token.amount}>
                              {networkTokenFormatter(token.amount)}
                            </Value>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <Key>USD Value:</Key>
                            <Value data-tip={token.price}>
                              ${networkTokenFormatter(token.price)}
                            </Value>
                          </div>
                        </div>
                        <InputWrapper active={false}>
                          <p className="summary">
                            <StyledInput
                              type="number"
                              inputbg={true}
                              containerClassName="m-auto"
                              style={style}
                              sizeVariant="xs"
                              placeholder="0.00"
                              value={
                                collateralValue[index]
                                  ? collateralValue[index]
                                  : ""
                              }
                              //   value={token.tokenAddress === "" ? '3,459' : null}
                              onChange={(e) =>
                                handleOnChange(
                                  token,
                                  e,
                                  index,
                                  token.price,
                                  token.amount
                                )
                              }
                              rightIcon={
                                <MaxButton
                                  onClick={() =>
                                    maxHandler(
                                      selfType,
                                      token,
                                      token.amount,
                                      token.price,
                                      index
                                    )
                                  }
                                >
                                  MAX
                                </MaxButton>
                              }
                            />
                          </p>
                        </InputWrapper>
                        {token.active ? (
                          <CheckMark>
                            <img src={selectedTick} alt="" />
                          </CheckMark>
                        ) : null}
                      </div>
                    </div>
                  </Card>
                </CardsWrapper>
              ))}
          </CenterContainer>
        )}
      </CollateralsWrapper>
    </>
  );
};


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

const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NftWrapper = styled.div`
  margin: 0;
  transition: all 0.2s ease-in-out;
  padding: 0;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid transparent;
  border-radius: 4px;
  width: calc(33.3333% - 14px);
  display: flex;

  .nft-image {
    width: 194px;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;
    cursor: pointer;

    img {
      object-fit: cover;
      width: 194px;
      height: 100%;
    }
  }

  .nft-detail-card {
    overflow: hidden;
    max-width: calc(100% - 194px);
    padding: 20px;
    width: 100%;

    .top-info {
      display: flex;
      width: 100%;
      justify-content: space-between;
      cursor: pointer;

      .check-details {
        display: block;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.03);
        height: 38px;
        width: 38px;
        line-height: 36px;
        text-align: center;
        cursor: pointer;

        svg {
          fill: ${(props) => props.theme.colors.purple};
        }

        &:hover {
          background-color: rgba(255, 255, 255, 0.06);
          svg {
            fill: ${(props) => props.theme.colors.textAccent};
          }
        }
      }
    }
  }

  &:hover {
    background: linear-gradient(76deg, rgba(140, 235, 231, 0.07) 0%, rgba(140, 235, 231, 0.07) 100%), rgba(140, 235, 231, 0.02);
    border: 1px solid ${(props) => props.theme.colors.textAccent};
  }

  &.choosen {
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.textAccent};
    background: linear-gradient(76deg, rgba(140, 235, 231, 0.07) 0%, rgba(140, 235, 231, 0.07) 100%), rgba(88, 228, 220, 0.02);
  }

  @media (max-width: 1440px) {
    width:calc(50% - 10px);
  }

  ${({ theme }) => theme.mediaQueries.tab}{
    width:100%;
  }
`;

const CardHeading = styled.div`
  font-weight: 600;
  margin: 0 0 8px;

  h4 {
    font-size: 0.75rem;
    color: rgba(134, 135, 188, 0.4);
    margin: 0;
    padding: 0;
    font-weight: 600;
    position: relative;

    span {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.purple};
      margin: 0 0 0 5px;
      position: absolute;
      top: -5px;
    }
  }

  a {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.75rem;

    &:hover {
      text-decoration: none;
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;

  .switch {
    button {
      transform: rotate(270deg);
    }
  }

  .floor-price {
    display: flex;
    font-weight: 600;
    font-size: 0.75rem;
    text-align: center;
    cursor: pointer;

    p {
      margin: 0;
      padding: 10px 20px;
      white-space:nowrap;

      strong {
        font-size: 1rem;
      }
    }

    div {
      &:last-child {
        p{
          padding-top: 13px;
        }
      }
    }
  }
`;

const CardText = styled.div`
  padding: 4px 10px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.03);
  opacity: 0.5;
`;

export const CardsWrapper = styled.div`
    background: rgba(255, 255, 255, 0.03);
    padding: 12px 20px;
    border-radius: 4px;
    width:calc(33.3333% - 14px);
    border: 1px solid transparent;

    &:hover {
      background: linear-gradient(76deg, rgba(140, 235, 231, 0.07) 0%, rgba(140, 235, 231, 0.07) 100%), rgba(140, 235, 231, 0.02);
      border-color:${(props) => props.theme.colors.textAccent};
    }

    &.choosen {
      border-radius: 4px;
      border-color:${(props) => props.theme.colors.textAccent};
      background: linear-gradient(76deg, rgba(140, 235, 231, 0.07) 0%, rgba(140, 235, 231, 0.07) 100%), rgba(88, 228, 220, 0.02);
    }  

    ${({ theme }) => theme.mediaQueries.lg}{
      width:calc(50% - 10px);
    }

    ${({ theme }) => theme.mediaQueries.sm}{
      width:100%;
    }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  
  .logo-name {
    display: flex;
    align-items: center;
    width: 63%;
    cursor: pointer;

    img {
      margin-right: 12px;
      border-radius: 100%;
      background: ${(props) => props.theme.colors.purple};
      height: 38px;
      width: 38px;
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 0;
      padding: 0;

      span {
        color: ${(props) => props.theme.colors.purple};
        font-size: 0.75rem;
        position: relative;
        vertical-align: top;
        margin-left: 5px;
      }
    }
  }

  .switch-choose {
    position: absolute;
    padding: 26px 0 0;
    margin-left: -4px;

    button {
      transform: rotate(270deg);
    }
  }

  .input-builder-wrapper {
    position: absolute;
    top: 5px;
    right: 0;
    width: 37%;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.03);
    display: flex;
    flex-wrap: wrap;
    padding: 10px 15px;

    .qty {
      width: 50%;
      &:nth-child(2) {
        text-align: right;
        padding-right: 0;
      }
    }  
  }

  .qty {
    width: 33.33%;
    padding-right: 10px;

    h4{
      font-size: ${(props) => props.theme.fonts.xs}rem;
      font-weight: 600;
      color: rgba(134, 135, 188, 0.4);
      margin: 0;
      padding: 0;
    }
  }

  .token-quantity {
    display: flex;
    margin-top: 16px;
    font-weight: 600;
    padding: 0 0 0 50px;

    &.addresses {
      font-weight: 400;
      font-size: ${(props) => props.theme.fonts.xs}rem;

      .qty {
        div {
          text-decoration: underline;
          cursor:pointer;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }

  .card-img-overlay {
    display: flex;
    padding: 15px;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div<{ active?: Boolean }>`
  width: 100%;
  margin-top: 10px;

  .token-loan {
    width: 100%;
    border-radius: 0;
    display: flex;
  }
  
  &.button {
    background: none !important;
    cursor:pointer;
  }
`;

export const StyledInput = styled(Input) <{ inputbg }>`
  padding: 0 5px 0 0;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fonts.sm}rem;
  font-weight: 600;
  letter-spacing: -0.28px;

  &::placeholder {
    color: ${(props) => props.theme.colors.text};
    opacity: 0.5;
  }
`;

export const MaxButton = styled.button`
  color: ${(props) => props.theme.colors.textAccent};
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: -0.2px;
  border:none;
  background: transparent;
  padding: 0;
  text-align: right;

  &:hover{
    color: white;
  }
`;




export const Value = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Key = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.theme.colors.adminDashboadText};
`;

export const CheckMark = styled.div`
  position: absolute;
  width: 100px;
  display: flex;
  pointer-events: none;
`;

export default ChooseCollaterals;
