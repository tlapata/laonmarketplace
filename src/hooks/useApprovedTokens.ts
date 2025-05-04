import { gql, useLazyQuery } from "@apollo/client";

const approvedTokens = gql`
  query (
    $chainId: Int!
  ) {
    ApprovedTokens(
      chainId: $chainId
    ) {
      name
      symbol
      tokenAddress
      price
      tokentype
      icon
      chainId
      isTokenEnabledAsCollateral
    }
  }
`;
function useApprovedTokens() {
  return useLazyQuery(approvedTokens, {
    fetchPolicy: "network-only",
  });
}
export default useApprovedTokens;
