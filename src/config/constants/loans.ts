export enum LoanTypes {
  traditionalLoan = "Traditional Loan",
  reverseLoan = "Reverse Loan",
  public = "Public",
  private = "Private",
  SINGLE_NFT = "Single NFT",
  MULTI_NFT = "Multi NFT",
  SINGLE_TOKEN = "Single Token",
  MULTI_TOKEN = "Multi Token",
  NETWORK_TOKEN = "Network Token",
}

export enum TokenTypes {
  SINGLE_TOKEN = "SINGLE_TOKEN",
  MULTI_TOKEN = "MULTI_TOKEN",
  SINGLE_NFT = "SINGLE_NFT",
  MULTI_NFT = "MULTI_NFT",
  NETWORK_TOKEN = "NETWORK_TOKEN",
}

export interface StableCoins {
  id: number;
  name: string;
  symbol: string;
  tokenAddress: string;
}

export interface TokenData {
  amount: number;
  name: string;
  price: number;
  symbol: string;
  id: number;
  icon: string | null;
  active?: boolean;
}


export enum PaybackType {
  partialPayback = "Partial_Payback",
  fullPayback = "Full_Payback",
}

export enum LoanStatus {
  CANCELLED = "CANCELLED",
  CLOSED = "CLOSED",
  LIQUIDATED = "LIQUIDATED",
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE",
}

export enum LoanTxMsgs {
  LOAN_CREATED ="Congratulations! Loan offer has been created",
  LOAN_ACTIVATED= "Loan Activated Successfully!",
  INSUFFICENT_GOV_TOKENS="Insufficient GOV tokens to make Loan Offer.",
  MAX_LOAN_EXCEEDS="Maximum Loan Amount exceeds",
  SINGLE_NFT_LOAN_TIER_ERROR="You are Not Allowed to Create Single Nft Loan. \n Please Update your tier.",
  MULTI_NFT_LOAN_TIER_ERROR="You are Not Allowed to Create Multi Nfts Loan. \n Please Update your tier.",
  SINGLE_TOKEN_LOAN_TIER_ERROR="You are Not Allowed to Create Single Token Loan. \n Please Update your tier.",
  MULTI_TOKEN_LOAN_TIER_ERROR="You are Not Allowed to Create Multi Tokens Loan. \n Please Update your tier.",
  NETWORK_TOKEN_LOAN_TIER_ERROR="You cannot create Network loan because your Tier Level is maintained through NFT.",
  INSUFFICENT_TOKENS="Insufficient tokens amount",
  MAX_TOKEN_AMT_EXCEEDS="Max Token amount exceeds",
  PAYBACKS_EXCEEDS_LOAN="Payback Amount exceeds loan amount",
  INSUFFICENT_AMT="Insufficient Amount!",
  APPROVE_SUCCESS ="Approval Successfull",
  PAYBACK_SUCCESS="Congratulations! Payback is successfull",
  CANCEL_SUCCESS="Loan Cancelled Successfully!",
  ADJUST_SUCCESS="Loan Adjusted Successfully!",
  FUND_SUCCESS="Congratulations you funded the loan offer of your choice!",
  INSUFFICENT_LENDING_AMT="Insufficient Lending Amount!"

}

export enum LoanTxTriggers {
  LOAN_CREATED="loanCreated"
}