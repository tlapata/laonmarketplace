import { gql, useLazyQuery } from "@apollo/client";
export const CHECK_LOAN_LIMIT = gql`
  query ($chainId: Int!) {
    checkLoanLendLimit(chainId: $chainId) {
      Limit
    }
  }
`;
function useLoanLimit(loanType: string) {
  return useLazyQuery(CHECK_LOAN_LIMIT, {
    fetchPolicy: "network-only",
    errorPolicy: "all",
  });
}
export default useLoanLimit;
