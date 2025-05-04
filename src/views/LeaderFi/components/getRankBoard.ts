import { gql, useLazyQuery } from "@apollo/client";

const rankBoardDetails = gql`
  query (
    $pageSize: Int!
    $pageNo: Int!
    $address: String!
    $chainId: Int!
  ) {
    getLeaderFi(
      pageNo: $pageNo
      pageSize: $pageSize
      address: $address
      chainId: $chainId
    ) {
      ranking {
        data {
          holder
          amount
        }
        count
      }
      myGov
      myRank
      myTier
      govPrice
    }
  }
`;
function useRankBoardDetails() {
  return useLazyQuery(rankBoardDetails, {
    fetchPolicy: "network-only",
  });
}
export default useRankBoardDetails;
