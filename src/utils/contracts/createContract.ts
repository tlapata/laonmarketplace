import Web3 from "web3";
import { AbiItem } from "web3-utils";
import erc20ABI from "config/abi/erc20.json";
import consumerABI from "config/abi/priceConsumer.json";
import diamondAbi from "config/abi/diamond.json";
const createContract = (abi: string, address: string = "") => {
  const ABIS = {
    erc20: erc20ABI,
    priceConsumer: consumerABI,
    diamond:diamondAbi
  };
  const web3 = new Web3(Web3.givenProvider);

  return new web3.eth.Contract(ABIS[abi] as unknown as AbiItem, address);
};

export default createContract;
