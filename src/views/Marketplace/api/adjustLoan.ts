import { gql, useLazyQuery } from "@apollo/client";

export const ADJUST_LOAN_OFFER = gql`
  query ($adjustLoanOffer: AdjustLoanOfferInput!) {
    adjustLoanOfferSendTransction(adjustLoanOffer: $adjustLoanOffer) {
      targetData
      ContractAddress
    }
  }
`;
function useAdjustLoan() {
  return useLazyQuery(ADJUST_LOAN_OFFER, {
    fetchPolicy: "network-only",
  });
}
export default useAdjustLoan;
