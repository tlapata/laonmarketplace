import { StableCoins } from "config/constants/loans";
import { Network } from "config/constants/types";

// Block
export interface BlockState {
  currentBlock: number;
  initialBlock: number;
}

// Wallet
export interface WalletState {
  isWalletConnected: boolean;
  network: Network;
}


export interface SigningRequest {
  walletAddress: string;
  isApproved: null | boolean;
  isSigning: boolean;
}

export interface ApprovedToken {
  address?: string;
  name?: string;
  symbol?: string;
  isStrategicPartner: boolean;
  isReversedLoan: boolean;
  tokenLimitPerReverseLoan: string;
  gToken: string;
}

interface currentTabState {
  tabNumber: number;
  tabType: string;
}
// Loan Builder
export interface LoanBuilderState {
  loanAmountBorrowed: number;
  termLengthDays: string;
  stableCoinAddress: string;
  stableCoins: StableCoins[];
  stableCoinID?: number;
  collateralType?: string;
  walletConnectionLoader?: boolean;
  collateralData?: any;
  nftLoanData?: any;
  loanToValue?: number;
  stakedCollateralAmount: string[];
  stakedCollateralTokens: any;
  stakedCollateralNFTS: any;
  apyOffer: number;
  isSunToken:boolean[];
  isLoader?: boolean;
  isApproved?: boolean;
  currentTab: currentTabState;
  nftType: string;
  queriesList: Record<QueriesKeys, boolean>;
  tier: {
    tierLevel: string;
    tierType: string;
  };
  drawer: boolean;
  message: string;
  type: string;
  alertData: {
    showModal: boolean;
    alertMessage: string;
    type?: string;
    loanId?: number;
  };
  loanState: LoanBuilderState;
}

export interface LoanState {
  loanBuilder: LoanBuilderState;
  tiers: {
    tierLevel: string;
    tierType: string;
  }[];
}

export type QueriesKeys =
  | "loanActivated"
  | "loanCreated"
  | "loanAdjusted"
  | "loanPayback"
  | "loanLiquidated"
  |"loanPublished";

export interface AppState {
  hasPasswordBypassed: boolean;
  alertHeader: string;
  alertBody: string;
  alertType: string;
  loadingApp: boolean;
  shouldResetLB: boolean;
}

// Global state

export interface State {
  wallet: WalletState;
  app: AppState;
  loanBuilder: LoanBuilderState;
}
