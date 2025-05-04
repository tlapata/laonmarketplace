import { convertExp } from "utils/conversion";
import createContract from "./createContract";
import BigNumber from "bignumber.js";
export interface ITierLevel {
  tierLevelHex: string;
  tierLevelAscii?: string;
  govHoldings: number; // uint256, noramlized to 1e18
  loantoValue: string; // uint8
  govIntel: boolean;
  singleToken: boolean;
  multiToken: boolean;
  singleNFT: boolean;
  multiNFT: boolean;
  reverseLoan: boolean;
  tierId: string;
}
export const approveTokens = async (
  address,
  amount,
  type = "tokens",
  tokenAddress = ""
) => {
  try {
    const contract = await createContract("erc20", address);
    let decimals;
    let value;
    if (type !== "nft") {
      decimals = tokenAddress !== "" && (await getDecimals(tokenAddress));
      const totalAmount = new BigNumber(amount).multipliedBy(
        new BigNumber(10).pow(new BigNumber(decimals))
      );
      value = convertExp(totalAmount);
    }
    return await contract.methods
      .approve(address, type !== "tokens" ? amount : value.toString())
      .encodeABI();
  } catch (e) {
    console.log(e);
  }
};
export const getDecimals = async (address) => {
  try {
    const contract = await createContract("erc20", address);
    return await contract.methods.decimals().call();
  }catch (e) { 
    console.log(e);
  }
 
};

export const getAltcoinMaxAmt = async(contractAddress :string , coinAddr: string) => {
  try {
    const contract =  createContract("diamond",contractAddress )
    if (coinAddr) {
      return await  contract.methods
        .getCollateralWithdrawableToken(coinAddr)
        .call();
    } else {
      return await contract.methods
        .getCollateralsWithdrawableNetwork()
        .call();
    }
  }catch (e) { 
    console.log(e);
  }

};
export const getStablecoinMaxAmt =async (contractAddress :string ,coinAddr: string) => {
  try {
    const contract =  createContract("diamond",contractAddress )
      return await  contract.methods
        .getStableCoinWithdrawable(coinAddr)
        .call();
  }catch (e) { 
    console.log(e);
  }

};

export const getAllPlatformFee =async (contractAddress :string ) => {
  try {
    const contract =  createContract("diamond",contractAddress )
      const data = await  Promise.all([
        contract.methods.getGovPlatformFee().call(),
        contract.methods.getAutosellPercentage().call(),
        contract.methods.getThresholdPercentage().call(),
        contract.methods.getLTVPercentage().call(),
        contract.methods.getLoanActivateLimit().call(),
      ]);
      return {
        platformFee: +data[0] / 100,
        autoSellFee: +data[1] / 100,
        threshold: +data[2] / 100,
        liquidation: +data[3],
        maxLoans: +data[4],
      };
  }catch (e) { 
    console.log(e);
  }

};
export const getTierLevels =async (contractAddress :string , web3) => {
  try {
    const contract =  createContract("diamond",contractAddress )
    const tierKeys: string[] = await contract.methods
    .getGovTierLevelKeys()
    .call();
    const tierPromises = tierKeys.map(async (key): Promise<ITierLevel> => {
      const resp = await contract.methods
        .getSingleTierData(key)
        .call();
      return {
        tierLevelHex: key,
        tierLevelAscii: web3.utils.hexToString(key),
        govHoldings: resp.govHoldings / 10 ** 18,
        loantoValue: resp.loantoValue,
        govIntel: resp.govIntel,
        multiNFT: resp.multiNFT,
        multiToken: resp.multiToken,
        reverseLoan: resp.reverseLoan,
        singleNFT: resp.singleNFT,
        singleToken: resp.singleToken,
        tierId: key,
      };
    });
    return Promise.all(tierPromises);
  }catch (e) { 
    console.log(e);
  }

};

export const calculateGas = async (web3, account, address, rawData) => {
  const gasEstimate = await web3.eth.estimateGas({
    from: account,
    to: address,
    data: rawData,
  });
  return gasEstimate;
};

export const GetTokenName = async (address) => {
  const contract = await createContract("erc20", address);
  const name = await contract.methods.name().call();
  return name;
};
