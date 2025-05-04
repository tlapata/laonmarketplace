import { useQuery, gql } from "@apollo/client";
import type { TokenInfo } from "../types";

const getLoanOffers = gql`
  query ($loanId: Int!, $chainId: Int!) {
    viewTokenCollateral(loanId: $loanId, chainId: $chainId) {
      symbol
      id
      name
      amount
      price
      token_address
    }
  }
`;

interface TokenCollateralQuery {
  viewTokenCollateral: TokenInfo[];
}

function useTokenCollateral(loanId: number, chainId:number) {
  return useQuery<TokenCollateralQuery>(getLoanOffers, {
    variables: {
      loanId,
      chainId
    },
  });
}

export default useTokenCollateral;
