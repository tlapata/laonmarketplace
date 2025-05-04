import { useWeb3React } from "@web3-react/core";
import { Network } from "config/constants/types";

const useNetwork = () => {
  const context = useWeb3React();
  const { library } = context;

  const switchChainNetwork = async (network: Network) => {
    const chainId = parseInt(network.chainId as string, 10);

    try {
      await library.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });
    } catch (error) {
      console.log(error);
      await library.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: network.chainName,
            nativeCurrency: network.nativeCurrency,
            rpcUrls: network.rpcUrls,
            blockExplorerUrls: network.blockExplorerUrls,
          },
        ],
      });
    }
  };

  return { switchChainNetwork };
};

export default useNetwork;
