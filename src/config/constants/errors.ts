export enum ErrorFields {
  borrowAmount = "borrowAmount",
  termLength = "termLength",
  apy = "customApy",
}
export interface ErrorProps {
  termLength: boolean;
  borrowAmount: boolean;
  customApy: boolean;
}

export interface MaxLoanProps {
  valid: boolean;
  amount: number;
}
