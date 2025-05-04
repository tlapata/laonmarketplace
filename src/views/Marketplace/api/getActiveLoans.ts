import { gql, useLazyQuery } from "@apollo/client";

const activeLoanOffers = gql`
  query (
    $pageSize: Int!
    $pageNumber: Int!
    $search: String!
    $filter: FilterOption!
    $chainId: Int!
  ) {
    activeLoanOffersListing(
      pageNo: $pageNumber
      pageSize: $pageSize
      search: $search
      filter: $filter
      chainId: $chainId
    ) {
      count
      data {
        id
        loanStatus
        isPrivateLoan
        borrowAmount
        priceImpact
        activatedAt
        collateralAmount
        loanOfferLender {
          autoSell
          lenderWalletAddress
        }
        borrowedCoin {
          symbol
        }
        collateral {
          amount
          price
        }
        collateralDaily {
          collateralSum
          createdAt
        }
        collateralType
        termLength
        apy
        ltv
        apyFee
        user {
          walletAddress
        }
      }
    }
  }
`;
function useActiveLoans() {
  return useLazyQuery(activeLoanOffers, {
    fetchPolicy: "network-only",
  });
}
export default useActiveLoans;
