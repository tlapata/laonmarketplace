import styled from "styled-components";
import card_bg from "assets/images/loanbuilder/cards-bg.svg";
import Carousel from "react-grid-carousel";
import { NextArrow, PrevArrow } from "components/SliderArrows";
import { LoanTxMsgs, TokenTypes } from "config/constants/loans";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "hooks/useWeb3";
import { approveTokens } from "utils/contracts/contractCalls";
import { useLoanData, useModal } from "state/hooks";
import { useTransactionReceipt } from "hooks/useTransactionReciept";
import { useEffect, useState } from "react";

import Spinner from "components/Spinner";
import ReactTooltip from "react-tooltip";
import { getMessageFrom, reduceNumber } from "utils/conversion";
import { ReactComponent as TickMark } from "assets/images/marketplace/tick-icon.svg";
import { useContractAddresses } from "utils/graphQueries/queries";
import { __nft_collateral_set, __tokens_collateral_set } from "config/constants/sets";
import { revertReason } from "utils/revertReason";

const ModalCardItem = ({ type, items, setModal, setTab, setLoanEnabled }) => {
  const { setAlert } = useModal();
  // const showToast = (message, type = "error") =>
  //   toast(message, {
  //     className: type !== "error" ? "successToast" : "errorToast",
  //     hideProgressBar: true,
  //   });
  const showToast = (message: string, type = "success") => {
    setAlert(message, true, type);
  };
  const { chainId } = useWeb3React();
  const [approveState, setApproveState] = useState([]);
  const [selectedTokens, setSelectedTokens] = useState([]);
  const [, setCollateralAmountData] = useState([]);
  const { loanState } = useLoanData();
  const { collateralData, stakedCollateralTokens, collateralType } = loanState;
  const { result: contractAddresses } = useContractAddresses(
    chainId?.toString()
  );

  useEffect(() => {
    const tokensPrices = [];
    let collateralAmountData = [];

    if (
      collateralType === TokenTypes.SINGLE_TOKEN ||
      collateralType === TokenTypes.MULTI_TOKEN
    ) {
      for (let i = 0; i < stakedCollateralTokens.length; i++) {
        if (collateralData[i] !== undefined) {
          let obj = {
            collateralId: collateralData[i],
            amount: +stakedCollateralTokens[i],
          };
          collateralAmountData.push(obj);
          tokensPrices.push(stakedCollateralTokens[i]);
        }
      }
      setSelectedTokens(tokensPrices);
    } else {
      for (let i = 0; i < collateralData.length; i++) {
        if (collateralData[i] !== undefined) {
          let obj = {
            collateralId: collateralData[i],
            amount: 1,
          };
          collateralAmountData.push(obj);
        }
      }
    }
    for (let i = 0; i < collateralAmountData.length; i++) {
      items[i].collateralAmount = +collateralAmountData[i].amount;
    }
    setCollateralAmountData(collateralAmountData);
    setApproveState([...items]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const context = useWeb3React();
  const web3 = useWeb3();
  const { getTransactionStatus } = useTransactionReceipt();
  const { account } = context;

  const approveHandler = async (address: string, amount: number, index: number) => {
    approveState[index].loader = true;
    setApproveState([...approveState]);
    const contractAddress = contractAddresses.GovWorldDiamond;
    const type =
      __nft_collateral_set.has(collateralType)
        ? "nft"
        : "tokens";
    const data = await approveTokens(
      contractAddress,
      amount.toString(),
      type,
      address
    );
    const gasEstimate = await web3.eth.estimateGas({
      from: account,
      to: address,
      data: data,
    });
    const params = {
      data: data,
      from: account,
      to: address,
      gas: gasEstimate,
    };
    await web3.eth
      .sendTransaction(params)
      .then(async (res) => {
        approveState[index].isApprove = true;
        approveState[index].loader = false;
        const data = await getTransactionStatus(res.transactionHash);
        if (data) {
          showToast(LoanTxMsgs.APPROVE_SUCCESS, "successToast");
        }
        setApproveState([...approveState]);
        const result = approveState.every((item) => item.isApprove);
        if (result) {
          setModal(false);
          setLoanEnabled(true);
        }
      })
      .catch((err) => {
        const msg = revertReason(err);
        showToast(getMessageFrom(msg?.trim().replaceAll(".", "")), "error");
        approveState[index].loader = false;
        setApproveState([...approveState]);
      });
  };

  return (
    <div >
      {__tokens_collateral_set.has(type) ? (
        <Carousel
          dot={Dots}
          showDots={items?.length > 8 ? true : false}
          containerStyle={{
            display: "flex",
            alignItems: "center",
            paddingTop: "31px",
            paddingBottom: "21px",

          }}
          arrowLeft={items?.length > 8 ? <PrevArrow /> : <></>}
          arrowRight={items?.length > 8 ? <NextArrow /> : <></>}
          cols={items?.length > 1 ? 4 : 1}
          rows={items?.length > 4 ? 2 : 1}
          responsiveLayout={
            [
              {
                breakpoint: 765,
                cols: 2,
                rows: 8,
                gap: 10,

              }
            ]
          }
          gap={10}
          loop
        >
          {items?.map((data, index: number) => (
            <Carousel.Item key={data?.id}>
              <TokenCards>
                <NewCard className="pointer position-relative mx-2 mb-3">
                  <ReactTooltip />

                  <div className="card bg-transparent text-white border-0">
                    <img
                      className="card-img"
                      style={{ minHeight: "290px" }}
                      src={card_bg}
                      alt="Card "
                    />
                    <div className="card-img-overlay active">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          width: "100%",
                          margin: "0 auto",
                        }}
                      >
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <img
                            width="65"
                            style={{ margin: "auto" }}
                            src={`${data?.icon}`}
                            alt=""
                            className="tokenLogo mb-2"
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <Key>Coin:</Key>
                          <Value>{data?.symbol}</Value>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <Key>Name:</Key>
                          <Value>{data?.name}</Value>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <Key>Tokens:</Key>
                          <Value data-tip={data?.collateralAmount || '0'}>
                            {reduceNumber(
                              data?.collateralAmount ? data?.collateralAmount : 0
                            )}
                          </Value>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <Key>USD Value:</Key>
                          <Value
                            data-tip={
                              (data?.price / +data?.amount) *
                              data?.collateralAmount
                            }
                          >
                            {reduceNumber(
                              (data?.price / +data?.amount) *
                              (data?.collateralAmount
                                ? data?.collateralAmount
                                : 0)
                            )}
                          </Value>
                        </div>

                        {approveState[index]?.loader ? (
                          <SpinnerWrapper>
                            <Spinner
                              style={{ margin: "unset", width: "25px" }}
                            />
                          </SpinnerWrapper>
                        ) : (
                          <Approve isApproved={approveState[index]?.isApprove}>
                            <p
                              id="aprvTokens"
                              className="summary"
                              onClick={() => {
                                approveHandler(
                                  data?.token_address,
                                  selectedTokens[index],
                                  index
                                );
                              }}
                            >
                              {approveState[index]?.isApprove
                                ? "Approved"
                                : "Approve"}
                            </p>
                            {approveState[index]?.isApprove ? (
                              <TickMark />
                            ) : (
                              <></>
                            )}
                          </Approve>
                        )}
                      </div>
                    </div>
                  </div>
                </NewCard>
              </TokenCards>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : __nft_collateral_set.has(type) ? (
        <Carousel
          dot={Dots}
          showDots={items.length > 8 ? true : false}
          containerStyle={{
            display: "flex",
            alignItems: "center",
            paddingTop: "31px",
            paddingBottom: "21px",
          }}
          arrowLeft={items.length > 8 ? <PrevArrow /> : <div></div>}
          arrowRight={items.length > 8 ? <NextArrow /> : <div></div>}
          cols={items.length > 1 ? 4 : 1}
          rows={items.length > 4 ? 2 : 1}
          gap={10}
          loop
        >
          {items?.map((data, index: number) => (
            <Carousel.Item key={data?.id}>
              <TokenCards>
                <NewCard className="pointer position-relative mx-2 mb-3">
                  <div className="card bg-transparent text-white border-0">
                    <img className="card-img" src={card_bg} alt="Card " />
                    <div className="card-img-overlay active">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          width: "100%",
                          margin: "0 auto",
                        }}
                      >
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <img
                            style={{
                              margin: "auto",
                              borderRadius: "50%",
                              width: "75px",
                              height: "75px",
                            }}
                            src={data?.image}
                            alt=""
                            className="mb-2"
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <Key>Name:</Key>
                          <Value>{data?.name === "" ? "N/A" : data?.name}</Value>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <Key>Contract:</Key>
                          <Value>{`${data?.nftAddress?.slice(
                            0,
                            6
                          )}...${data?.nftAddress?.slice(
                            data?.nftAddress?.length - 6
                          )}`}</Value>
                        </div>

                        {approveState[index]?.loader ? (
                          <SpinnerWrapper>
                            <Spinner
                              style={{ margin: "unset", width: "25px" }}
                            />
                          </SpinnerWrapper>
                        ) : (
                          <Approve isApproved={approveState[index]?.isApprove}>
                            <p
                              id="aprvNfts"
                              className="summary"
                              onClick={() => {
                                approveHandler(
                                  data?.nftAddress,
                                  data?.nftId,
                                  index
                                );
                              }}
                            >
                              {approveState[index]?.isApprove
                                ? "Approved"
                                : "Approve"}
                            </p>
                            {approveState[index]?.isApprove ? (
                              <TickMark />
                            ) : (
                              <></>
                            )}
                          </Approve>
                        )}
                      </div>
                    </div>
                  </div>
                </NewCard>
              </TokenCards>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : null}
    </div>
  );
};
const Dots = ({ isActive }) => (
  <div style={{ position: "relative", top: "-35px" }}>
    <span
      style={{
        display: "block",
        height: "8px",
        width: "8px",
        background: isActive ? "#ccc" : "#7e7e7e",
        borderRadius: "10px",
      }}
    ></span>
  </div>
);
const SpinnerWrapper = styled.div`
  display: "flex";
  justiy-content: "center";
`;
const NewCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  margin-top: 11px;
  margin-bottom: 11px;

  .card-title {
    justify-content: center;
    font-weight: 800;
    font-size: 15px;
    text-transform: capitalize;
  }
  .card-img-overlay {
    display: flex;
    padding: 15px;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    @media (max-width: 1370px) {
      .tokenLogo {
        width: 49px;
        ${({ theme }) => theme.mediaQueries.md}{ 
          width:30px;
          margin-bottom:0 !important;
        }
      }
    }
  }
  ${({ theme }) => theme.mediaQueries.md}{
    margin:0 !important;
    margin-bottom:0 !important;
    .card-img{
      min-height:199px !important;
    }
    
  }
`;
const Value = styled.span`
  font-weight: 600;
  font-size: 13px;
  color: ${(props) => props.theme.colors.adminDashboadText};
`;
const Key = styled.span`
  font-weight: normal;
  font-size: 12px;
  color: ${(props) => props.theme.colors.adminDashboadText};
`;

const TokenCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20.9px;
  flex-wrap: wrap;
  padding: 0 10px;
  ${({ theme }) => theme.mediaQueries.md}  {
    padding:0;
    gap:0;
  }
`;

const Approve = styled.div<{ active?: Boolean; isApproved?: Boolean }>`
  min-width: 27.22px;
  text-align: center;
  pointer-events: ${(props) => (props.isApproved ? "none" : "")};
  background: ${(props) =>
    props.isApproved
      ? "linear-gradient(90deg, #F1C6FF -16.66%, #BD0AF8 24.05%, #365CFC 99.31%)"
      : ""};
  border-radius: 4px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  svg {
    position: absolute;
    right: 26px;
    bottom: 36px;
  }

  p {
    width: 100%;
    background-clip: content-box;
    padding: 3px;
    font-weight: bold;
    font-size: 14.504px;
    line-height: 140%;
    text-align: center;
    margin-bottom: 0;
    background: rgba(255, 255, 255, 0.25);
    ${(props) =>
    props.active
      ? `background: linear-gradient(90deg, #F1C6FF -16.66%, #BD0AF8 24.05%, #365CFC 99.31%), rgba(255, 255, 255, 0.25);`
      : ``}
    background-color: ${(props) =>
    props.isApproved ? "none !important;" : "rgba(255, 255, 255, 0.25);"};
  }
  p.summary {
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => theme.mediaQueries.md} {
      height:27px;
    margin-bottom:19px;

    }
  }
  &.button {
    background: none !important;
  }
 
`;

export default ModalCardItem;
