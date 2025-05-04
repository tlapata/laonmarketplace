import { useEffect, useState } from "react";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";

/**
 * Provides a web3 instance using the provider provided by useWallet
 * with a fallback of an httpProver
 * Recreate web3 instance only if the provider change
 */
const useWeb3 = () => {
  const context = useWeb3React();
  const { library } = context;
  const [web3, setWeb3] = useState(new Web3(Web3.givenProvider));

  useEffect(() => {
    setWeb3(new Web3(Web3.givenProvider));
  }, [library]);

  return web3;
};

export default useWeb3;
