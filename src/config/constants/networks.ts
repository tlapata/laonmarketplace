import { NetWorkChainId, NetworksType } from "./types";

const Networks: NetworksType[] = [
  {
    name: "Ethereum",
    chainName: "ethereum",
    chainId: NetWorkChainId.MAINNET,
    rpcUrls: ["https://mainnet.infura.io/v3/29f73f58517e4eb69f4cd52086f5a4f5"],
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    wrappedToken:{
      symbol:"WETH"
    },
    blockExplorerUrl: "https://etherscan.io",
    eventKey: "eth",
  },
  {
    name: "bsc",
    chainName: "BSC",
    chainId: NetWorkChainId.BSC,
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    wrappedToken:{
      symbol:"WBNB"
    },
    blockExplorerUrl: "https://bscscan.com/",
    eventKey: "eth",
  },
  {
    name: "Rinkeby Test Nework",
    chainId: NetWorkChainId.RINKEBY,
    chainName: "rinkeby",
    rpcUrls: ["https://rinkeby.infura.io/v3/29f73f58517e4eb69f4cd52086f5a4f5"],
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    blockExplorerUrl: "https://rinkeby.etherscan.io",
    eventKey: "eth",
  },
  {
    name: "Goerli Test Network",
    chainId: NetWorkChainId.GOERLI,
    chainName: "goerli",
    rpcUrls: ["https://goerli.infura.io/v3/29f73f58517e4eb69f4cd52086f5a4f5"],
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    blockExplorerUrl: "https://goerli.etherscan.io",
    eventKey: "eth",
  },
];

export default Networks;
