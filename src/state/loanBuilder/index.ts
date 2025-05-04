import { createSlice } from "@reduxjs/toolkit";
import { LoanBuilderState } from "../types";

const initialState = {
  loanState: {
    currentTab: { tabNumber: 0, tabType: "" },
    nftType: "",
    loanAmountBorrowed: null,
    stableCoins: [],
    walletConnectionLoader: false,
    termLengthDays: "",
    collateralType: "",
    stableCoinID: 0,
    collateralData: [],
    loanToValue: 0,
    stableCoinAddress: "",
    stakedCollateralAmount: null || [],
    apyOffer: null,
    stakedCollateralTokens: [],
    stakedCollateralNFTS: [],
    nftLoanData: [],
    isLoader: false,
    isApproved: false,
    queriesList: {
      loanActivated: false,
      loanCreated: false,
      loanAdjusted: false,
      loanPayback: false,
      loanLiquidated:false,
    },
    tier: {
      tierLevel: "NO_TIER",
      tierType: "NO_TIER",
    },
    drawer: true,
    message: null,
    alertData: {
      showModal: false,
      alertMessage: "",
    },
  } as LoanBuilderState,
  currentTab: { tabNumber: 0, tabType: "" },
  nftType: "",
  loanAmountBorrowed: 0,
  termLengthDays: "",
  collateralType: "",
  stableCoinID: 0,
  collateralData: [],
  loanToValue: 0,
  stableCoinAddress: "",
  stakedCollateralAmount: null || [],
  apyOffer: null,
  stakedCollateralTokens: [],
  stakedCollateralNFTS: [],
  nftLoanData: [],
  isLoader: false,
  isApproved: false,
  queriesList: {
    loanActivated: false,
    loanCreated: false,
    loanAdjusted: false,
    loanPayback: false,
    loanLiquidated:false,
  },
  tiers: [],
  drawer: true,
  message: null,
  alertData: {
    showModal: false,
    alertMessage: "",
  },
};

export const loanBuilderSlice = createSlice({
  name: "LoanBuilder",
  initialState,
  reducers: {
    setTiers: (state, action) => {
      state.tiers = action.payload;
    },
    setLoanState: (state, action) => {
      state.loanState = action.payload;
    },
    resetLoanState: (state) => {
      state.loanState.currentTab = { tabNumber: 0, tabType: "" };
      state.loanState.nftType = "";
      state.loanState.loanAmountBorrowed = 0;
      state.loanState.termLengthDays = "";
      state.loanState.stableCoinID = 0;
      state.loanState.nftLoanData = [];
      state.loanState.collateralData = [];
      state.loanState.collateralType = "";
      state.loanState.loanToValue = 0;
      state.loanState.stableCoinAddress = "";
      state.loanState.stakedCollateralAmount = null || [];
      state.loanState.apyOffer = null;
      state.loanState.stakedCollateralTokens = [];
      state.loanState.stakedCollateralNFTS = [];
      state.loanState.isLoader = false;
      state.loanState.isApproved = false;
    },
  },
});

// Actions
export const { setLoanState, resetLoanState, setTiers } =
  loanBuilderSlice.actions;
export default loanBuilderSlice.reducer;
