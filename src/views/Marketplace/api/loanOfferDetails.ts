import { gql, useLazyQuery } from "@apollo/client";

export interface LoanOffer {
  id: number;
  loanId: string;
  tierType: string;
  loanStatus: string;
  isPrivateLoan: boolean;
  autoSell?: boolean;
  borrowAmount: number;
  borrowedCoin: {
    symbol: string;
    tokenAddress: string;
  };
  loanOfferLender: {
    autoSell: boolean;
    lenderWalletAddress: string;
  };
  collateral: [];
  collateralType: string;
  termLength: number;
  ltv: number;
  apy: number;
  apyFee: number;
  isApprove?: boolean;
  user?: {
    walletAddress: string;
  };
}

interface LoanOffersQuery {
  loanOfferDetail: {
    data: LoanOffer[];
  };
}

export const getLoanOfferDetails = gql`
  query ($loanId: Int!, $chainId: Int!) {
    loanOfferDetail(loanId: $loanId, chainId: $chainId) {
      id
      borrowAmount
      tierType
      termLength
      isPrivateLoan
      loanId
      cs
      ltv
      ltvpercentage
      priceImpact
      createdAt
      closedAt
      borrowedCoin {
        tokenAddress
        symbol
      }
      loanOfferLender {
        autoSell
        lenderWalletAddress
      }
      collateralDaily {
        collateralSum
        createdAt
      }
      apy
      apyFee
      paybackAmount
      isActive
      collateral {
        nftId
        address
        amount
        price
        name
        approvedToken {
          pairedAddress
        }
      }
      loanOfferTransctions {
        transction
        txHash
      }
      collateralType
      loanStatus
      updatedAt
      activatedAt
      user {
        walletAddress
      }
    }
  }
`;

function useLoanOfferDetails() {
  return useLazyQuery<LoanOffersQuery>(getLoanOfferDetails, {
    fetchPolicy: "cache-first",
    errorPolicy: "all",
  });
}

export default useLoanOfferDetails;
