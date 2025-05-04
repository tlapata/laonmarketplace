import { gql, useSubscription } from "@apollo/client";

// const LOAN_MARKET_SUBSCRIPTION = gql`
//   subscription {
//     marketLoanTransactionListener {
//       type
//       token {
//         price
//         symbol
//         address
//       }
//     }
//   }
// `;

const LOAN_MARKET_SUBSCRIPTION = gql`
  subscription {
    marketLoanTransactionListener {
      data {
        id
        ltv
        collateralAmount
        priceImpact
      }
    }
  }
`;

interface tokenData {
  price: number;
  symbol: string;
  address: string;
  id:number;
  ltv:any;
  collateralAmount:number;
  priceImpact:number;
}
interface CollateralQuery {
  marketLoanTransactionListener: {
    type: string;
    token: tokenData[];
    data: tokenData[]
  };
}

function useCollateralSubscription() {
  return useSubscription<CollateralQuery>(LOAN_MARKET_SUBSCRIPTION);
}

export default useCollateralSubscription;
