import { Address } from "../config/constants/types";

export const getAddress = (address: Address, chainId = null): string => {
  const mainNetChainId = 1;
  return address[chainId] ? address[chainId] : address[mainNetChainId];
};


