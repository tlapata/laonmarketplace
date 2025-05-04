import { TokenTypes } from "./loans";

export const __nft_collateral_set = new Set<string>([TokenTypes.SINGLE_NFT , TokenTypes.MULTI_NFT]);
export const __nft_network_collateral_set = new Set<string>([TokenTypes.SINGLE_NFT , TokenTypes.MULTI_NFT, TokenTypes.NETWORK_TOKEN]);
export const __token_collateral_set = new Set<string>([TokenTypes.SINGLE_TOKEN , TokenTypes.MULTI_TOKEN , TokenTypes.NETWORK_TOKEN]);
export const __tokens_collateral_set = new Set<string>([TokenTypes.SINGLE_TOKEN , TokenTypes.MULTI_TOKEN ]);

