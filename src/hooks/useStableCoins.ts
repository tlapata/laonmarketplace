import { gql, useLazyQuery } from "@apollo/client";

const stableCoins = gql`
  query (
    $chainId: Int!
  ) {
    StableCoins(chainId:$chainId) {
        name
        symbol
        decimal
        tokenAddress
        icon
        chainId
        status
        price
      }
  }
`;
function useStableCoins() {
  return useLazyQuery(stableCoins, {
    fetchPolicy: "network-only",
  });
}
export default useStableCoins;
