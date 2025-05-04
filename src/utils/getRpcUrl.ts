// Array of available nodes to connect to
export const nodes = [
  "https://bsc-dataseed.binance.org/",
  "https://bscrpc.com",
  "https://empty-wispy-tab.bsc.quiknode.pro/74d42e0d3ce16455f7e3f346d4eb0c140fa0578f",
];

const getNodeUrl = (): string => {
  return "https://bsc-dataseed.binance.org" as string;
};

export default getNodeUrl;
