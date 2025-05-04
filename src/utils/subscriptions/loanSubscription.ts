import { gql, useSubscription } from "@apollo/client";
import { LoanOffer } from "views/Marketplace/api/getLoanOffers";

const SUBSCRIPTION = gql`
  subscription ($walletAddress: String!) {
    loanTransactionListener(address: $walletAddress) {
      loan {
        id
        borrowAmount
        termLength
        isPrivateLoan
        loanId
        cs
        ltv
        apy
        apyFee
        paybackAmount
        isActive
        collateralType
        loanStatus
        updatedAt
        activatedAt
      }
      type
    }
  }
`;

interface SubscriptionQuery {
  loanTransactionListener: {
    loan: LoanOffer;
    type: string;
  };
}

function useSubscriptionCall(walletAddress: string) {
  return useSubscription<SubscriptionQuery>(SUBSCRIPTION, {
    variables: {
      walletAddress: walletAddress,
    },
    skip: !walletAddress,
  });
}

export default useSubscriptionCall;
