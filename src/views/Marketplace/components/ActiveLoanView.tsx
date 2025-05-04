import useActiveLoans from "../api/getActiveLoans";
import { useAppSelector } from "state";
import LoanListView from "./LoanListView";
import LoanGridView from "./LoanGridView";
import {
  PaginationRoot,
  PaginationButton,
  NextArrow,
  PrevArrow,
} from "components/Elements/Pagination";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { useRouteMatch } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { PRIVATE_LOAN_QUERY } from "utils/graphQueries/queries";
import { NetWorkChainId } from "config/constants/types";

type ActiveLoansViewProps = {
  view: "list" | "grid";
};

const ActiveLoansView: React.FC<ActiveLoansViewProps> = ({ view }) => {
  const { searchTerm, filterOptions } = useAppSelector(
    (state) => state.filters
  );
  const context = useWeb3React();
  const { account, chainId } = context;
  const [pageIndex, setPageIndex] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const { params } = useRouteMatch();
  const [
    privateLoanData,
    { data: privateData, error: privateError, loading: privateLoading },
  ] = useLazyQuery(PRIVATE_LOAN_QUERY);

  const [activeLoanOffers, { data, error, loading }] = useActiveLoans();
  useEffect(() => {
   
    const timeInterval = async () => {
     
      clearInterval(execInterval);
      if (params["id"]) {
        privateLoanData({
          variables: {
            loanId: +params["id"],
            chainId: chainId,
          },
        });
      } else {
        activeLoanOffers({
          variables: {
            pageSize: 12,
            pageNumber: pageIndex,
            search: searchTerm,
            filter: filterOptions,
            chainId: chainId ? chainId : NetWorkChainId.BSC,
          },
        });
      }

      return;
    
    };
    let execInterval = setInterval(timeInterval, 500);
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterOptions, privateLoanData, pageIndex, searchTerm, account, chainId]);
  useEffect(() => {
    setMaxPage(Math.ceil(data?.activeLoanOffersListing.count / 12));
  }, [data]);

  return (
    <>
      {view === "grid" ? (
        <LoanGridView
          loading={loading ? loading : privateLoading}
          error={error ? error : privateError}
          data={
            data?.activeLoanOffersListing.data
              ? data?.activeLoanOffersListing.data
              : privateData?.privateLoanOffer?.data
          }
          isActiveLoan={true}
        />
      ) : (
        <LoanListView
          loading={loading ? loading : privateLoading}
          error={error ? error : privateError}
          isActiveLoan={true}
          data={
            data?.activeLoanOffersListing.data
              ? data?.activeLoanOffersListing.data
              : privateData?.privateLoanOffer?.data
          }
        />
      )}
      {data?.activeLoanOffersListing.count > 12 ? (
        <PaginationRoot
          style={{ marginTop: "auto", marginBottom: 10, zIndex: 9999 }}
        >
          <PrevArrow
            disabled={pageIndex === 0}
            onClick={() => setPageIndex((prev) => prev - 1)}
          />
          {Array.from({ length: maxPage }).map((data, index) => {
            return (
              <PaginationButton
                data-state={index === pageIndex ? "active" : "inactive"}
                onClick={() => setPageIndex(index)}
              >
                {index + 1}
              </PaginationButton>
            );
          })}
          <NextArrow
            disabled={pageIndex === maxPage - 1}
            onClick={() => setPageIndex((prev) => prev + 1)}
          />
        </PaginationRoot>
      ) : null}
    </>
  );
};

export default ActiveLoansView;
