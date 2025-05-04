import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";

const useBalance = () => {
  const [balance, setBalance] = useState("");
  const [etherBalance, setEtherBalance] = useState("");
  const context = useWeb3React();
  const { account, chainId } = context;
  const web3 = useWeb3();

  useEffect(() => {
    account && getBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, chainId]);

  const getBalance = () => {
    web3.eth.getBalance(account, async (err: any, balance: any) => {
      if (err) {
        return;
      }
      setBalance(balance);
      setEtherBalance(web3.utils.fromWei(balance, "ether"));
    });
  };

  return { balance, etherBalance };
};

export default useBalance;
