// Set of helper functions to facilitate wallet setup

import Networks from "config/constants/networks";
import { nodes } from "./getRpcUrl";

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async (chainID) => {
  const provider = (window as WindowChain).ethereum;
  const networkDetail = await fetchNetworkDetail(+chainID); // network detail from dataUrl.ts file
  if (networkDetail !== undefined) {
    if (provider) {
      const chainId = parseInt(chainID as string, 10);
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${chainId.toString(16)}` }],
        });
        return true;
      } catch (switchError: any) {
        if (switchError?.code === 4902) {
          try {
            await provider.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: `0x${chainId.toString(16)}`,
                  chainName: "BNB Smart Chain Mainnet",
                  nativeCurrency: {
                    name: "BNB",
                    symbol: "BNB",
                    decimals: 18,
                  },
                  rpcUrls: nodes,
                  blockExplorerUrls: ["https://bscscan.com/"],
                },
              ],
            });
            return true;
          } catch (error) {
            console.error(error);
            return false;
          }
        }
      }
    } else {
      console.error(
        "Can't setup the network on metamask because window.ethereum is undefined"
      );
      return false;
    }
  } else {
    console.log("Network undefined");
    return false;
  }
};

export const fetchNetworkDetail = (chainID) => {
  let selectedNetwork;
  // eslint-disable-next-line
  Networks.map((item, index) => {
    if (item.chainId === chainID) {
      selectedNetwork = item;
    }
  });
  return selectedNetwork;
};

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @param tokenImage
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (
  tokenAddress: string,
  tokenSymbol: string,
  tokenDecimals: number,
  tokenImage: string
) => {
  const tokenAdded = await (window as WindowChain).ethereum.request({
    method: "wallet_watchAsset",
    params: {
      type: "ERC20",
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: tokenImage,
      },
    },
  });

  return tokenAdded;
};
