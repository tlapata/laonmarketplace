export type Loan = {
  id: number;
  ltvpercentage:number;
  title: string;
  loanAmt?: string; // shows up in loan info, clear confusion
  stablecoin: string;
  earningPotential: string;
  days: number;
  apy: number;
  collateral: [];
  loanStatus?: string;
  ltv: number;
  type: "single-token" | "multi-token" | "single-nft" | "multi-nft" | "network";
  offerType?: "public" | "private";
  expectedApyFee?: string;
  earnedApyFee?: string;
  canDismiss?: boolean;
  autoSell?: boolean;
  liquidationAlert?: string;
  loanLink?: string;
  showDanger?: boolean;
  canAdjust?: boolean;
  onAdjust?: () => void;
  setLoanAdjustData?: any;
  isPrivateLoan?: boolean;
  termLength?: number;
  borrowAmount?: number;
  showPayback?: boolean;
  paybackAmount?: number;
  borrowedCoin?: {
    symbol: string;
  };
  collateralDaily?: [];
  collateralType?: string;
  loanOfferLender?: {
    autoSell: boolean;
    lenderWalletAddress: string;
  };
  totalCollateral?: number;
  apyFee?: number;
};

export type CollateralType =
  | "SINGLE_TOKEN"
  | "MULTI_TOKEN"
  | "SINGLE_NFT"
  | "MULTI_NFT"
  | "NETWORK_TOKEN";

export type NFTInfo = {
  name: string;
  nftId: number;
  last_activity: string;
  price: string;
  image?: string;
  nftAddress?: string;
  type?: string;
  collection: string;
  plateform?: string;
  owner?: string;
};

export type TokenInfo = {
  id: number;
  symbol: string;
  name: string;
  amount: string;
  price: number;
  token_address?: string;
};

export type NetworkInfo = {
  id: number;
  symbol: string;
  name: string;
  amount: number;
  price: number;
};

export type FilterKeys =
  | "apy"
  | "loanAmount"
  | "termLength"
  | "collateral"
  | "ltv"
  | "chainLink"
  | "stableDAI"
  | "stableUSDT"
  | "stableUSDC"
  | "stableBUSD"
  | "tokenType"
  | "collateralType";

export enum CheckBoxEnum {
  NFTS = "NFTS",
  ALTCOINS = "ALTCOINS",
}

export enum CollateralCheckBoxEnum {
 SINGLE_NFT = "SINGLE_NFT",
 MULTI_NFT = "MULTI_NFT",
 SINGLE_TOKEN = "SINGLE_TOKEN",
 MULTI_TOKEN = "MULTI_TOKEN",
 NETWORK_TOKEN = "NETWORK_TOKEN",
}

export enum FilterEnum {
  HIGH_TO_LOW = "HIGH_TO_LOW",
  LOW_TO_HIGH = "LOW_TO_HIGH",
}

export enum StableCoinEnum {
  DAI = "DAI",
  USDC = "USDC",
  USDT = "USDT",
  BUSD = "BUSD",
}
