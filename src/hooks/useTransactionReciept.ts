import useWeb3 from "./useWeb3";

export const useTransactionReceipt = () => {
  const web3 = useWeb3();
  const getTransactionStatus = (hash: string) => {
    return new Promise(async (resolve, reject) => {
      const runInterval = setInterval(async () => {
        const txReceipt = await web3.eth.getTransactionReceipt(hash);
        if (txReceipt?.status === true) {
          //  show success and close modal
          clearInterval(runInterval);
          resolve(true);
        } else if (txReceipt?.status === false) {
          // show error and close modal
          clearInterval(runInterval);
          reject(false);
        }
      }, 500);
    });
  };
  return {
    getTransactionStatus,
  };
};
