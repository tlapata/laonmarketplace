import { gql, useSubscription } from "@apollo/client";
import { LoanOffer } from "views/Marketplace/api/getLoanOffers";

const SUBSCRIPTION = gql`
  subscription {
    publishLoanTransaction{
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
  publishLoanTransaction: {
    loan: LoanOffer;
    type: string;
  };
}

function useLoanPublishSubscriptionCall() {
  return useSubscription<SubscriptionQuery>(SUBSCRIPTION);
}

export default useLoanPublishSubscriptionCall;
