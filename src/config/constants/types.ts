import { AbstractConnector } from "@web3-react/abstract-connector";
import { ReactNode } from "react";

export interface Address {
  97?: string;
  56: string;
  1?: string;
  4?: string;
}

export interface Token {
  symbol: string;
  address?: Address;
  decimals?: number;
  projectLink?: string;
}



export enum NetWorkChainId {
  MAINNET = 1,
  RINKEBY = 4,
  GOERLI = 5,
  BSC = 56,
}

export enum PoolCategory {
  "COMMUNITY" = "Community",
  "CORE" = "Core",
  "BINANCE" = "Binance", // Pools using native BNB behave differently than pools using a token
  "AUTO" = "Auto",
}

export type NetworksType = {
  name: string;
  icon?: any;
  selectIcon?: ReactNode;
  chainId: number;
  rpcUrls: string[];
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExplorerUrl: string;
  wrappedToken?:{
    symbol:string;
  };
  address?: string;
  eventKey: string;
};

export interface PoolConfig {
  sousId: number;
  earningToken: Token;
  stakingToken: Token;
  stakingLimit?: number;
  contractAddress: Address;
  poolCategory: PoolCategory;
  tokenPerBlock: string;
  sortOrder?: number;
  harvest?: boolean;
  isFinished?: boolean;
}



export type PageMeta = {
  title: string;
  description?: string;
  image?: string;
};

export interface WalletInfo {
  connector?: AbstractConnector;
  name: string;
  iconURL: string;
  description: string;
  href: string | null;
  color: string;
  primary?: true;
  mobile?: true;
  mobileOnly?: true;
}

export interface Network {
  name: string;
  chainId?: string | number;
  chainName?: string;
  nativeCurrency?: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls?: string[];
  blockExplorerUrls?: string[];
  address?: string;
  icon1?: string;
}

export enum TierTypeEnum {
  GOV_TIER = "GOV_TIER",
  NFT_TIER = "NFT_TIER",
  NFT_SP_TIER = "NFT_SP_TIER",
  VC_TIER = "VC_TIER",
  NO_TIER = "NO_TIER",
  VC_NFT_TIER = 'VC_NFT_TIER',
  NA="N/A"
}

export enum TierLevelEnum {
  NO_TIER = "No Tier Level",
  BRONZE = "Bronze",
  SILVER = "Silver",
  GOLD = "Gold",
  PLATINUM = "Platinum",
  RHODIUM = "Rhodium",
  NA="N/A"
  
}

export enum StatsTabs {
  BORROWER = "borrower",
  LENDER = "lender",
}
export enum StatsSubTabs {
  ACTIVE_LOANS = "activeloans",
  LOAN_OFFERS = "loanoffers",
  LIQUIDATED_LOANS = "liquidatedloans",
  HISTORY = "history",
}

export enum StableCoinsNames {
  USDT="Tether USD",
  USDC="USD Coin"
}