import { useQuery, gql } from "@apollo/client";
import type { NetworkInfo } from "../types";

const networkCollateral = gql`
  query ($loanId: Int!, $chainId: Int!) {
    viewNetworkTokenCollateral(loanId: $loanId, chainId: $chainId) {
      price
      id
      amount
      symbol
      name
    }
  }
`;

interface NetworkCollateralQuery {
  viewNetworkTokenCollateral: NetworkInfo[];
}

function useNetworkCollateral(loanId: number, chainId: number) {
  return useQuery<NetworkCollateralQuery>(networkCollateral, {
    variables: {
      loanId,
      chainId,
    },
  });
}

export default useNetworkCollateral;
