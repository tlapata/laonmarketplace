import { gql, useLazyQuery } from "@apollo/client";

const govPrice = gql`
  query (
    $chainId: Int!
    $tokenAddress:String
  ) {
    singleToken(tokenAddress: $tokenAddress, chainId:$chainId) {
        price
      }
  }
`;
function useGovTokenPrice() {
  return useLazyQuery(govPrice, {
    fetchPolicy: "network-only",
  });
}
export default useGovTokenPrice;
