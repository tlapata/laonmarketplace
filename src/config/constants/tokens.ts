const tokens = {
  bnb: {
    symbol: "BNB",
    projectLink: "https://www.binance.com/",
  },
  cake: {
    symbol: "CAKE",
    address: {
      56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
      97: "0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe",
    },
    decimals: 18,
    projectLink: "https://pancakeswap.finance/",
  },
  wrappedToken: {
    symbol: {
      1: "wETH",
      56: "wBNB",
      97: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
      43114: "wAVAX",
    },
    address: {
      1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      56: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
      97: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
      43114: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
    },
    decimals: {
      1: 18,
      56: 18,
      97: 18,
      43114: 18,
    },
    projectLink: {
      1: "https://uniswap.org/",
      56: "https://pancakeswap.finance/",
      97: "",
      43114: "https://info.avax.network/#about",
    },
    explorerTxLink: {
      1: "https://etherscan.io/",
      56: "https://pancakeswap.finance/",
      97: "",
      43114: "https://info.avax.network/#about",
    },
  },
};

export default tokens;
