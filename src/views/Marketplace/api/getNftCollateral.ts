import { useQuery, gql } from "@apollo/client";
import type { NFTInfo } from "../types";

export const getNftCollateral = gql`
  query ($loanId: Int!, $chainId: Int!) {
    viewNftCollateral(loanId: $loanId, chainId: $chainId) {
      id
      name
      nftId
      plateform
      collection
      image
      nftAddress
      type
      price
      owner
      last_activity
      creator
      description
      items
      owners
      markets {
        name
        nft_url
        collection_url
      }
    }
  }
`;

interface NFTCollateralQuery {
  viewNftCollateral: NFTInfo[];
}

function useNftCollateral(loanId: number, chainId: number) {
  return useQuery<NFTCollateralQuery>(getNftCollateral, {
    variables: {
      loanId,
      chainId,
    },
  });
}
export default useNftCollateral;
