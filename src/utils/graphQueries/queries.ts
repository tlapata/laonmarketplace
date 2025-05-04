import { gql, useLazyQuery, useQuery } from "@apollo/client";

// Get User NFTS
export const GET_USER_NFTS = gql`
  query ($chainId: String!, $account: String!, $tierType: String!, $isLoanCreate:Boolean) {
    listUserNFTTokens(chain: $chainId, address: $account, tierType: $tierType, isLoanCreate:$isLoanCreate) {
      id
      name
      nftId
      plateform
      collection
      image
      nftAddress
      type
      price
      owner
      last_activity
      creator
      description
      items
      owners
      markets {
        name
        nft_url
        collection_url
      }
    }
  }
`;

export const GET_NFT_TRAITS = gql`
  query GetNftTraits($chainId: Int!, $nftID: String!, $address: String!) {
    viewNftTraits(traitInput: { chainId: $chainId, nftId: $nftID, nftAddress: $address }) {
      symbol
      percentage
      floor_price
      trait_type
      trait_value
    }
  }
`;

//
export const GET_MIN_LOAN_AMT = gql`
  query ($chainId: Int!) {
    getMinLoanAmount(chainId: $chainId)
  }
`;

// Get User Tokens
export const GET_USER_TOKENS = gql`
  query ($chainId: String!, $account: String!, $tierType: String!) {
    listUserTokensValue(
      chain: $chainId
      address: $account
      tierType: $tierType
    ) {
      symbol
      name
      id
      amount
      price
      token_address
      icon
      isSunToken
    }
  }
`;

// Get User Tokens
export const GET_USER_TOKENS_COLLATERAL = gql`
  query ($chainId: String!, $account: String!, $tierType: String!) {
    listUserTokensCollateral(
      chain: $chainId
      address: $account
      tierType: $tierType
    ) {
      symbol
      name
      id
      amount
      price
      token_address
      icon
    }
  }
`;
// Get dashboard tokens

export const GET_USER_DASHBOARD_TOKENS = gql`
  query ($chainId: String!, $account: String!, $tierType: String!) {
    userTokensBalance(chain: $chainId, address: $account, tierType: $tierType) {
      symbol
      name
      id
      icon
      amount
      price
      token_address
    }
  }
`;

export const Signing = gql`
  mutation signing($walletAddress: String!) {
    signing(walletAddress: $walletAddress) {
      email
      telegram
      walletAddress
      callSecret
      isSkiped
      isTermSkiped
    }
  }
`;
export const GET_STABLE_COINS = gql`
  query ($loanType: String!, $chainId: Int!) {
    stableCoinAndTopApy(loanType: $loanType, chainId: $chainId) {
      topApy
      avgApy
      loantoValue
      stableCoin {
        id
        name
        symbol
        tokenAddress
      }
    }
  }
`;

export const GET_LOAN_SUMMARY = gql`
  query (
    $borrowAmount: Float!
    $collateralAmt: Float!
    $apyOffer: Float!
    $termLength: Float!
  ) {
    loanSummary(
      loanSummary: {
        borrowedAmount: $borrowAmount
        collateralAmt: $collateralAmt
        apyOffer: $apyOffer
        termLength: $termLength
      }
    ) {
      ltv
      liquidationValue
      apyFee
      netCashOut
      plateformFee
    }
  }
`;

export const GET_APY = gql`
  query {
    apy {
      tokens {
        land
        borrow
        symbol
      }
      protocolName
    }
  }
`;

export const GET_APY_INFO = gql`
  query ($chainId: Int!) {
    getApyInfo(chainId: $chainId) {
      totalTvl
      activeTvl
      apy
      gov
    }
  }
`;

export const GET_TIER_LEVEL = gql`
  query ($chainId: Int!) {
    getTierLevel(chainId: $chainId) {
      tierLevel
      tierType
    }
  }
`;

export const CREATE_LOAN_OFFER = gql`
  query (
    $borrowAmount: Float!
    $termLength: Int!
    $isPrivateLoan: Boolean!
    $borrowedCoin: Int!
    $apy: Float!
    $collateralType: String!
    $tierType: String!
    $collateral: [CollateralInput!]!
    $chainID: Int!
  ) {
    creatLoanOfferSendTransction(
      loanOffer: {
        borrowAmount: $borrowAmount
        termLength: $termLength
        isPrivateLoan: $isPrivateLoan
        borrowedCoin: $borrowedCoin
        apy: $apy
        collateralType: $collateralType
        tierType: $tierType
        collateral: $collateral
        chain: $chainID
      }
    ) {
      targetData
      ContractAddress
      loanId
    }
  }
`;

export const UPDATE_LOAN_OFFER = gql`
  mutation ($loanId: Int!, $txHash: String!) {
    updateLoanOffer(updateLoanFields: { loanId: $loanId, txHash: $txHash })
  }
`;

export const CREATE_NFT_LOAN_OFFER = gql`
  query (
    $borrowAmount: Float!
    $termLength: Int!
    $isPrivateLoan: Boolean!
    $borrowedCoin: Int!
    $apy: Float!
    $collateralType: String!
    $tierType: String!
    $collateral: [NftCollateralInput!]!
    $chainID: Int!
  ) {
    creatNftLoanOfferSendTransction(
      nftLoanOffer: {
        borrowAmount: $borrowAmount
        termLength: $termLength
        isPrivateLoan: $isPrivateLoan
        borrowedCoin: $borrowedCoin
        apy: $apy
        collateralType: $collateralType
        tierType: $tierType
        collateral: $collateral
        chain: $chainID
      }
    ) {
      targetData
      ContractAddress
      loanId
    }
  }
`;
export const SUBSCRIPTION = gql`
  subscription ($walletAddress: String!) {
    loanTransactionListener(address: $walletAddress) {
      loan {
        id
        loanId
      }
      type
    }
  }
`;

//marketPlace Queries

export const LOANOFFERLISTING = gql`
  query (
    $pageSize: Int!
    $pageNumber: Int!
    $search: String!
    $filter: String!
  ) {
    loanOffersListing(
      pageSize: $pageSize
      pageNo: $pageNumber
      search: $search
      filter: $filter
    ) {
      count
      data {
        id
        loanStatus
        isPrivateLoan
        borrowAmount
        priceImpact
        collateralAmount
        borrowedCoin {
          symbol
        }
        collateralType
        apy
        apyFee
        tierType
      }
    }
  }
`;

export const GET_TOP_LOAN_OFFERS = gql`
  query ($chainId: Int!) {
    topLoanOffers(chainId: $chainId) {
      name
      tokens {
        symbol
        amount
        loanId
        apy
      }
    }
  }
`;

export const ACTIVATE_LOAN_OFFER = gql`
  query ($loanId: Int!, $chain: Int!, $autoSell: Boolean) {
    activateLoanOfferSendTransction(
      activateLoanOffer: { loanId: $loanId, chain: $chain, autoSell: $autoSell }
    ) {
      targetData
      ContractAddress
    }
  }
`;

export const LIST_NETWORK_TOKENS = gql`
  query ($chain: String!, $address: String!) {
    listUserNetworkTokens(chain: $chain, address: $address) {
      id
      price
      symbol
      amount
    }
  }
`;
export const HISTORY_DATA = gql`
  query ($chainId: Int!) {
    userLoanOffer(chainId: $chainId)
  }
`;

export const USER_LOAN_OFFERS = gql`
  query ($chainId: Int!) {
    userLoanOffers(chainId: $chainId) {
      type
      totalApyFee
      data {
        id
        borrowAmount
        termLength
        isPrivateLoan
        loanId
        cs
        ltv
        borrowedCoin {
          tokenAddress
          symbol
        }
        loanOfferLender {
          autoSell
          lenderWalletAddress
        }
        collateralDaily {
          collateralSum
          createdAt
        }
        apy
        apyFee
        paybackAmount
        isActive
        collateral {
          nftId
          address
          amount
          price
        }
        collateralType
        loanStatus
        updatedAt
        activatedAt
        loanOfferTransctions {
          transction
          txHash
        }
      }
      count
    }
  }
`;
export const DASHBOARD_DATA = gql`
  query ($chainId: Int!) {
    userDashboard(chainId: $chainId) {
      maxCashOut {
        tierLevel
        tierType
        cashOut
      }
    }
  }
`;

export const CHECK_ALLOWANCE = gql`
  query ($allowanceInputFields: AllowanceInputs!) {
    collateralAllowance(allowanceInputFields: $allowanceInputFields) {
      amount
      tokenAddress
    }
  }
`;

export interface tokenAllowance {
  amount: number;
  tokenAddress: string;
}
interface allowanceQuery {
  collateralAllowance: tokenAllowance[];
}

export const useAllowanceCall = () => {
  return useLazyQuery<allowanceQuery>(CHECK_ALLOWANCE, {
    fetchPolicy: "network-only",
  });
};

export const CHECK_NFT_ALLOWANCE = gql`
  query ($nftAllowance: NftAllowanceInput!) {
    nftCollateralAllowance(nftAllowance: $nftAllowance) {
      nftId
      isApproved
      nftAddress
    }
  }
`;
export interface nftAllowance {
  nftId: number;
  isApproved: string;
  nftAddress: string;
}
interface NftallowanceQuery {
  nftCollateralAllowance: nftAllowance[];
}

export const useNftAllowanceCall = () => {
  return useLazyQuery<NftallowanceQuery>(CHECK_NFT_ALLOWANCE, {
    fetchPolicy: "network-only",
  });
};

export const ADJUST_LOAN_OFFER = gql`
  query ($adjustLoanOffer: AdjustLoanOfferInput!) {
    adjustLoanOfferSendTransction(adjustLoanOffer: $adjustLoanOffer) {
      targetData
      ContractAddress
    }
  }
`;
export const GRAPH_QUERY = gql`
  query ($queryInput: BitQueryInputs!) {
    bitQueryClient(queryInput: $queryInput) {
      timeInterval {
        minute
      }
      baseCurrency {
        symbol
        address
      }
      quoteCurrency {
        symbol
        address
      }
      quotePrice
      tradeAmount
      trades
      volume
      maximum_price
      minimum_price
      median_price
      open_price
      close_price
    }
  }
`;

export const useTokenGraph = () => {
  return useLazyQuery(GRAPH_QUERY, { fetchPolicy: "network-only" });
};
export const GET_PAIR_ADDRESS = gql`
  query ($queryInput: PairInputs!) {
    getPairsBitQuery(queryInput: $queryInput) {
      baseCurrency {
        address
        symbol
      }
      quoteCurrency {
        address
        symbol
      }
    }
  }
`;
export const PAYBACK_LOAN_OFFER = gql`
  query ($paybackLoanOffer: PaybackLoanOfferInput!) {
    paybackLoanOfferSendTransction(paybackLoanOffer: $paybackLoanOffer) {
      ContractAddress
      targetData
    }
  }
`;

export const CHECK_USER_STABLECOINS = gql`
  query ($chain: String!, $address: String!) {
    listUserStableCoins(chain: $chain, address: $address) {
      id
      price
      amount
      name
      symbol
      token_address
    }
  }
`;

export const CANCEL_LOAN_OFFER = gql`
  query ($cancelLoanOffer: CancelLoanOfferInput!) {
    cancelLoanOfferSendTransction(cancelLoanOffer: $cancelLoanOffer) {
      targetData
      ContractAddress
    }
  }
`;
export const PRIVATE_LOAN_QUERY = gql`
  query ($loanId: Int!, $chainId: Int!) {
    privateLoanOffer(loanId: $loanId, chainId: $chainId) {
      data {
        id
        borrowAmount
        termLength
        isPrivateLoan
        loanId
        cs
        ltv
        priceImpact
        borrowedCoin {
          tokenAddress
          symbol
        }
        loanOfferLender {
          autoSell
          lenderWalletAddress
        }
        collateralDaily {
          collateralSum
          createdAt
        }
        apy
        apyFee
        paybackAmount
        isActive
        collateral {
          nftId
          address
          amount
          price
        }
        collateralType
        user {
          walletAddress
        }
        loanStatus
        updatedAt
        activatedAt
      }
    }
  }
`;

export const UpdateEmail = gql`
  mutation updateUser($email: String, $telegram: String, $isSkiped: Boolean, $isTermSkiped: Boolean) {
    updateUser(email: $email, telegram: $telegram, isSkiped: $isSkiped, isTermSkiped: $isTermSkiped) {
      walletAddress
      callSecret
      email
      telegram
      isSkiped
      isTermSkiped
    }
  }
`;

export const getApyPercent = gql`
  query ($chainId: Int! $loanType: String) {
    apy(chainId: $chainId , loanType: $loanType) {
      nft {
        bestApy
        top25Apy
        top10AvgApy
      }
      token {
        bestApy
        top25Apy
        top10AvgApy
      }
    }
  }
`;
type ApyPercent = {
  apy: {
    nft: {
      bestApy: number;
      top25Apy: number;
      top10AvgApy: number;
    };
    token: {
      bestApy: number;
      top25Apy: number;
      top10AvgApy: number;
    };
  };
};

export const useApyPercent = (chainId: number,loanType?: string) => {
  return useLazyQuery<ApyPercent>(getApyPercent, {
    fetchPolicy: "network-only",
    variables: { chainId: +chainId, loanType: loanType },
  });
};


export const GET_CONTRACTS = gql`
  query ($chainId: Int!) {
    contracts(chainId: $chainId) {
      name
      contract
    }
  }
`;

export type Contracts = {
  contract: string;
  name: string;
};
interface contractAddresses {
  contracts: Contracts[];
}

export const useContractAddresses = (chainId: string) => {
  const { data, loading } = useQuery<contractAddresses>(GET_CONTRACTS, {
    variables: {
      chainId: +chainId,
    },
    skip: !chainId,
  });
  const result: any = data?.contracts?.reduce(
    (obj, cur) => ({ ...obj, [cur.name]: cur.contract }),
    {}
  );

  return {
    result,
    loading,
  };
};

export type tierTypes = {
  isMultiNFT: number;
  isMultiToken: number;
  isSingleNFT: number;
  isSingleToken: number;
  minGovHolding: number;
};
interface tierDetails {
  getTierDetails: tierTypes;
}

export const GET_TIER_DETAILS = gql`
  query ($chainId: Int!, $name: String!) {
    getTierDetails(name: $name, chainId: $chainId) {
      isSingleNFT
      isSingleToken
      isMultiNFT
      isMultiToken
      minGovHolding
    }
  }
`;

export const useTierDetails = (name: string, chainId: number) => {
  const { data, loading } = useQuery<tierDetails>(GET_TIER_DETAILS, {
    variables: {
      name,
      chainId,
    },
    skip: name === "N/A" || !chainId,
  });
  return {
    tierDetail: data?.getTierDetails,
    loading,
  };
};

export const TokenSymbols = gql`
  query ($symbolInputField: SymbolInput) {
    getSybmolDetails(symbolInputField: $symbolInputField) {
      has_seconds
      minmov2
      name
      force_session_rebuild
      currency_code
      exchange
      listed_exchange
      data_status
      has_daily
      has_weekly_and_monthly
      has_empty_bars
      format
      minmov
      pricescale
      exchange_traded
      exchange_listed
      timezone
      pointvalue
      session
      has_intraday
      has_no_volume
      description
      type
      intraday_multipliers
      supported_resolutions
      ticker
    }
  }
`;
