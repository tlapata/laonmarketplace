import React, { useCallback, useEffect, useRef, useState } from "react";
import { NetWorkChainId, TierLevelEnum, TierTypeEnum, } from "config/constants/types";
import styled from "styled-components";
import Title from "./components/common/Title";
import ChooseCollateralType from "./components/ChooseCollateralType";
import ChooseCollaterals from "./components/ChooseCollaterals";
import { BackIcon, NextIcon } from "components/Svg";
import Calculator from "./components/SummaryCalculator/Calculator";

import rectangle from "assets/images/rectangle-white-upper.svg";
import rectangle1 from "assets/images/rectangle-white-lower.svg";
import rectangle_purple from "assets/images/loanbuilder/rectangle-purple.svg";
import ModalCard from "components/ModalCard";
import ModalCardItem from "components/ModalCardItem";
import { LoanTxMsgs, LoanTypes, TokenTypes } from "config/constants/loans";
import { useAppSelector } from "state";
import { ErrorProps, MaxLoanProps } from "config/constants/errors";
import { useLoanData, useModal, useSetLoanState } from "state/hooks";
import { useWeb3React } from "@web3-react/core";
import ApyArena from "./components/ApyArena";
import PrevBtn from "assets/images/loanbuilder/prev-icon.png";
import NextBtn from "assets/images/loanbuilder/next-icon.png";
import { Validations } from "config/constants/validations";
import { useTierDetails } from "utils/graphQueries/queries";
import { FormValidations, showToastByType } from "./methods";
import { __token_collateral_set } from "config/constants/sets";
import { contentDescription, contentSubTitle, contentTitle } from "views/SectionTitle/Content";
import { Popup_Content } from "config/constants/infoData";

const initialErrorObj: ErrorProps = {
  termLength: true,
  borrowAmount: true,
  customApy: true,
};

export enum TabTitles {
  LOAN_TYPE = "Choose Loan Type",
  STABLE_COINS = "APY Arena",
  REVIEW = "Review Loan Offer"
}

const Main: React.FC = () => {
  const { setAlert } = useModal();

  const showToast = (message, type = "success") => {
    setAlert(message, true, type);
  };
  const { loanState } = useLoanData();
  const {
    collateralType,
    stakedCollateralTokens,
    collateralData,
    tier,
    walletConnectionLoader,
  } = loanState;
  const { setLoanBuilderState } = useSetLoanState();
  const { account, chainId } = useWeb3React();
  const [isClicked, setIsClicked] = useState(false);
  const [reset, setReset] = useState(false);
  const { tierDetail } = useTierDetails(tier?.tierLevel, chainId);

  const [maxTokenAmount, setMaxTokenAmount] = useState({
    valid: true,
    amount: null,
    flag: "",
  });
  const [maxLoanAmount, setMaxLoan] = useState<MaxLoanProps>({
    valid: false,
    amount: null,
  });
  const [activeTab, setActiveTab] = useState(1);
  const [nftModal, setNftModal] = useState(false);
  const [selected, setSelected] = useState(false);
  const [loanEnabled, setLoanEnabled] = useState(false);
  const [errors, setErrors] = useState<ErrorProps>(initialErrorObj);
  const [tabTitle, setTabTitle] = useState("");
  const [type, setType] = useState(loanState.collateralType);


  const toggleClassName = () => {
    setTimeout(() => setReset(false), 1000);
  };

  const shouldResetLB = useAppSelector((state) => state.app.shouldResetLB);

  useEffect(() => {
    if (account) {
      setActiveTab(1);
    }
  }, [account, chainId, shouldResetLB]);


  const showValidation = (type = "errors") => {
    setIsClicked(true);
    const delayDebounceFn = setTimeout(() => {
      setIsClicked(false);
    }, 2000);

    const message = type === "errors"
      ? !maxLoanAmount.valid && maxLoanAmount.amount !== null
        ? maxLoanAmount.amount === 0
          ? LoanTxMsgs.INSUFFICENT_GOV_TOKENS
          : `${LoanTxMsgs.MAX_LOAN_EXCEEDS} ${maxLoanAmount.amount.toFixed()}`
        : FormValidations.REQUIRED_FIELDS
      : showToastByType(type, maxTokenAmount);

    if (message) {
      showToast(message, type === "errors" ? "error" : "alert");
    }

    return () => clearTimeout(delayDebounceFn);
  };

  useEffect(() => {
    const defaultState = {
      nftType: "",
      loanAmountBorrowed: 0,
      termLengthDays: "",
      stableCoinID: 0,
      nftLoanData: [],
      collateralData: [],
      loanToValue: 0,
      stakedCollateralAmount: null || [],
      apyOffer: null,
      stakedCollateralTokens: [],
      stakedCollateralNFTS: [],
      isLoader: false,
      isApproved: false,
    };

    if (activeTab === 1) {
      setLoanBuilderState({
        ...loanState,
        ...defaultState,
      });
      setLoanEnabled(false);
    } else if (activeTab === 2) {
      setLoanBuilderState({
        ...loanState,
        stakedCollateralTokens: [],
        stakedCollateralAmount: [],
        collateralData: [],
        isSunToken: [],
        termLengthDays: "",
        loanAmountBorrowed: 0,
        apyOffer: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);



  //hooks for tab title
  useEffect(() => {
    if (activeTab === 1) {
      setTabTitle(TabTitles.LOAN_TYPE);
    } else if (activeTab === 2) {
      setTabTitle(LoanTypes[type]);
    } else if (activeTab === 3) {
      setTabTitle(TabTitles.STABLE_COINS);
    } else if (activeTab === 4) {
      setTabTitle(TabTitles.REVIEW);
    }
  }, [activeTab, type]);

  const [tokenList, setTokenList] = useState([]);
  const [amountValid, setAmountValid] = useState(true);

  useEffect(() => {

    if (
      __token_collateral_set?.has(collateralType)
    ) {

      let totalAmount = [];
      for (let i = 0; i < collateralData.length; i++) {
        if (collateralData[i] !== undefined) {
          totalAmount.push(+stakedCollateralTokens[i]);
        }
      }
      if (totalAmount.length > 0) {
        const isValid = totalAmount.every((data) => data !== 0 && data);
        setAmountValid(isValid);
      } else {
        if (totalAmount.length === 0) {
          setAmountValid(false);
        } else {
          setAmountValid(true);
        }
      }
    } else {
      setAmountValid(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenList, stakedCollateralTokens]);
  const modalRef = useRef<HTMLDivElement>();

  const onClickOutsideListener = useCallback((e: any) => {
    //checking id for modal open
    if (
      modalRef?.current?.contains(e.target) ||
      e.target.id === "createBtn" ||
      e.target.id === "aprvNfts" ||
      e.target.id === "aprvTokens"
    ) {
      return;
    }
    setNftModal(false);
    if (activeTab === 3) {
      setLoanBuilderState({
        ...loanState,
        isLoader: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    document.addEventListener("click", onClickOutsideListener);
    return () => {
      document.removeEventListener("click", onClickOutsideListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const HandleNext = () => {
    if (walletConnectionLoader) {
      showValidation(Validations.WalletConnectionProgress)
      return
    } else if (!account) {
      showValidation(Validations.Wallet)
      return
    } else if (chainId !== NetWorkChainId.BSC) {
      showValidation(Validations.ChainID)
      return
    }
    else if (activeTab === 0) {
      setActiveTab(activeTab + 1)
    }

    if ((collateralType === '') && activeTab === 1) {
      showValidation(Validations.CollateralType)
      return
    }
    if (tierDetail && !tierDetail.isSingleNFT && collateralType === TokenTypes.SINGLE_NFT) {
      showValidation(Validations.AllowedSingleNft)
      return
    }
    if (tierDetail && !tierDetail.isMultiNFT && collateralType === TokenTypes.MULTI_NFT) {
      showValidation(Validations.AllowedMultiNft)
      return
    }
    if (tierDetail && !tierDetail.isSingleToken && collateralType === TokenTypes.SINGLE_TOKEN) {
      showValidation(Validations.AllowedSingleToken)
      return
    }
    if (tierDetail && !tierDetail.isMultiToken && collateralType === TokenTypes.MULTI_TOKEN) {
      showValidation(Validations.AllowedMultiToken)
      return
    }
    if ((collateralType === TokenTypes.NETWORK_TOKEN) && !(tier.tierType === TierTypeEnum.GOV_TIER) && tier?.tierLevel === TierLevelEnum.NO_TIER) {
      showValidation(Validations.NoTier)
      return
    }
    if (collateralType === TokenTypes.NETWORK_TOKEN && !(tier.tierType === TierTypeEnum.GOV_TIER)) {
      showValidation(Validations.GovTier)
      return
    }
    const collateral = collateralData.filter(data => data !== undefined)
    if ((!collateral || collateral.length === 0) && activeTab === 2) {
      showValidation(Validations.Collateral)
      return
    }
    if (!amountValid && activeTab === 2) {
      console.log("what the hell "+amountValid);
      showValidation(Validations.Amount)
      return
    }

    if (((!errors.borrowAmount && !errors.customApy && !errors.termLength && maxLoanAmount.valid) || (activeTab === 2 && maxTokenAmount.valid)) && selected) {
      setActiveTab(activeTab < 4 ? activeTab + 1 : 4)
      return
    }
    if (activeTab === 3 && ((errors.borrowAmount || errors.customApy || errors.termLength) && !maxLoanAmount.valid)) {
      showValidation()
      return
    }
    if (activeTab === 2 && !maxTokenAmount.valid) {
      showValidation(Validations.TokenValidation)
      return
    }
    setActiveTab(activeTab + 1)

  }


  const HandlePrev = () => {
    setActiveTab(activeTab - 1);
  };

  const [, setCollatoralSelection] = useState(-1);

  return (
    <>
      <Container>
        <div className="builder-title">
          {(activeTab === 1 || activeTab === 2) && <Title title={tabTitle} headtitle={contentSubTitle[Popup_Content.LOANBUILDER]} dialogtitle={contentTitle[Popup_Content.LOANBUILDER]} content={contentDescription[Popup_Content.LOANBUILDER]} />}
          {activeTab === 3 && <Title title={tabTitle} headtitle={contentSubTitle[Popup_Content.COMPETE_FOR_STABLECOIN]} dialogtitle={contentTitle[Popup_Content.COMPETE_FOR_STABLECOIN]} content={contentDescription[Popup_Content.COMPETE_FOR_STABLECOIN]} />}
          {activeTab === 4 && <Title title={tabTitle} headtitle={contentSubTitle[Popup_Content.REVIEW_LOAN_OFFER]} dialogtitle={contentTitle[Popup_Content.REVIEW_LOAN_OFFER]} content={contentDescription[Popup_Content.REVIEW_LOAN_OFFER]} />}

          <div className="builder-arrows">
              {activeTab !== 1 ? (
                <NavBtnLeft onClick={HandlePrev} className={activeTab !== 1 ? "" : "disabled"}>
                  <BackIcon />
                </NavBtnLeft>
              ) : (
                <NavBtnLeft className="disabled">
                  <BackIcon />
                </NavBtnLeft>
              )}
              {activeTab !== 4 ? (
                <NavBtnRight
                  style={{ pointerEvents: isClicked ? "none" : "unset" }}
                  onClick={HandleNext}
                  className={reset ? "shake" : ""}
                >
                  <NextIcon />
                </NavBtnRight>
              ) : (
                <NavBtnRight className="disabled">
                  <NextIcon />
                </NavBtnRight>
              )}
          </div>

          <TabsContainer>
            <Tabs>
              <Tab
                onClick={() => setActiveTab(1)}
                active={activeTab === 1 && true}
              >
                <p>1</p>
              </Tab>
              <Tab
                onClick={() =>
                  activeTab !== 3 && activeTab !== 4
                    ? HandleNext()
                    : setActiveTab(2)
                }
                active={activeTab === 2 && true}
                style={{ pointerEvents: isClicked ? "none" : "unset" }}
              >
                <p>2</p>{" "}
              </Tab>
              <Tab
                onClick={() =>
                  activeTab === 2
                    ? HandleNext()
                    : activeTab === 4
                      ? setActiveTab(3)
                      : null
                }
                active={activeTab === 3 && true}
                style={{ pointerEvents: isClicked ? "none" : "unset" }}
              >
                <p>3</p>
              </Tab>
              <Tab
                onClick={() => activeTab === 3 && HandleNext()}
                active={activeTab === 4 && true}
                style={{ pointerEvents: isClicked ? "none" : "unset" }}
                className="summary"
              >
                {" "}
                <p>Summary</p>
              </Tab>
            </Tabs>
          </TabsContainer>
        </div>
        
        {/* Content */}
        <div className="step-content">
          {activeTab === 1 ? (
            <ChooseCollateralType
              type={setType}
              setSelected={setSelected}
              setReset={setReset}
              toggleClassName={toggleClassName}
              setCurrent={setCollatoralSelection}
            />
          ) : activeTab === 3 ? (
            <ApyArena setErr={setErrors} />
          ) : activeTab === 4 ? (
            <Calculator
              loanEnabled={loanEnabled}
              errorData={errors}
              setTab={setActiveTab}
              setErr={setErrors}
              showModal={setNftModal}
              setMaxLoanObj={setMaxLoan}
              maxLoanAmountObj={maxLoanAmount}
              tokenList={tokenList}
            />
          ) : (
            <ChooseCollaterals
              type={type}
              setMaxTokenAmount={setMaxTokenAmount}
              selected={setSelected}
              setItems={setTokenList}
            />
          )}
        </div>

        {nftModal && (
          <div ref={modalRef}>
            <ModalCard type={type}>
              <ModalCardItem
                setTab={setActiveTab}
                type={type}
                items={tokenList}
                setModal={setNftModal}
                setLoanEnabled={setLoanEnabled}
              />
            </ModalCard>
          </div>
        )}

      </Container>
    </>
  );
};


const Container = styled.div`
  position: relative;

  .builder-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -6px;

    .builder-arrows {
      display: flex;
      gap: 10px;
    }

    ${({ theme }) => theme.mediaQueries.md}{
      display: block;
    }
  }

  @keyframes tilt-n-move-shaking {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(5px, 5px) rotate(5deg);
    }
    50% {
      transform: translate(0, 0) rotate(0eg);
    }
    75% {
      transform: translate(-5px, 5px) rotate(-5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  .shake {
    animation: tilt-n-move-shaking 0.25s infinite;
  }
`;

export const TabsContainer = styled.div`
  z-index: 1;
  padding: 40px 0;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 20px 0;
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: nowrap;
  margin-left: 20px;
  
  ${({ theme }) => theme.mediaQueries.md}{
    margin-left: 0;

    &.altcoins{
     margin: 3px; 
    }
  }
`;

export const Tab = styled.div<{ active?: Boolean }>`
  display: block;
  width: 54px;
  height: 54px;
  line-height: 52px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  ${(props) =>
    props.active
      ? `background: rgba(140, 235, 231, 0.1);`
      : `background: rgba(255, 255, 255, 0.03);`}

  &.summary {
    width: auto;
    padding: 0 24px;
  }
      
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  p {
    margin-bottom: 0;
    font-weight: 500;
    color: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.textAccent
        : ({ theme }) => theme.colors.text };
  }

  &.button {
    background: none !important;
  }
`;

const NavBtn = styled.div`
  display: block;
  width: 54px;
  height: 54px;
  line-height: 52px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  background: rgba(140, 235, 231, 0.1);

  svg {
    display: block;
    width: 22px;
    margin: 16px auto;
    fill: ${({ theme }) => theme.colors.textAccent};
  }

  &.disabled {
    background: rgba(255, 255, 255, 0.03);
    cursor: default;
    
    svg {
      fill: ${({ theme }) => theme.colors.text};
    }

    &:hover {
      background: rgba(255, 255, 255, 0.03);
      cursor: default;
      svg {
        fill: ${({ theme }) => theme.colors.text};
      }
    }
  }

  &:hover {
    background: rgba(140, 235, 231, 0.1);

    svg {
      fill: ${({ theme }) => theme.colors.textAccent};
    }
  }
`;

const NavBtnRight = styled(NavBtn)`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const NavBtnLeft = styled(NavBtn)`
`;

export default Main;
