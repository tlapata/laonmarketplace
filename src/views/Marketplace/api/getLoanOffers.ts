import { gql, useLazyQuery } from "@apollo/client";

export interface LoanOffer {
  id: number;
  loanId: string;
  loanStatus: string;
  isPrivateLoan: boolean;
  activatedAt: string;
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
  priceImpact: number;
  ltv: number;
  apy: number;
  apyFee: number;
  isApprove?: boolean;
  user?: {
    walletAddress: string;
  };
}

export interface loanCreated {
  loan: LoanOffer;
  type: string;
}

interface LoanOffersQuery {
  loanOffersListing: {
    count: number;
    data: LoanOffer[];
  };
}

const getLoanOffers = gql`
  query (
    $pageSize: Int!
    $pageNumber: Int!
    $search: String!
    $filter: FilterOption!
    $chainId: Int!
  ) {
    loanOffersListing(
      pageSize: $pageSize
      pageNo: $pageNumber
      search: $search
      filter: $filter
      chainId: $chainId
    ) {
      count
      data {
        id
        loanId
        loanStatus
        isPrivateLoan
        borrowAmount
        tierType
        priceImpact
        activatedAt
        collateralAmount
        borrowedCoin {
          symbol
          tokenAddress
        }
        collateral {
          amount
          price
          address
          nftId
        }
        collateralDaily {
          collateralSum
          createdAt
        }
        user {
          walletAddress
        }
        termLength
        collateralType
        ltv
        apy
        apyFee
        user {
          walletAddress
        }
      }
    }
  }
`;

function useLoanOffers() {
  return useLazyQuery<LoanOffersQuery>(getLoanOffers, {
    fetchPolicy: "network-only",
  });
}

export default useLoanOffers;
