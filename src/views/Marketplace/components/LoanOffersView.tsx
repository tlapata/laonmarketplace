import { useState, useEffect } from "react";
import useLoanOffers from "../api/getLoanOffers";
import { useAppDispatch, useAppSelector } from "state";
import LoanListView from "./LoanListView";
import LoanGridView from "./LoanGridView";
import { PaginationRoot, PaginationButton, NextArrow, PrevArrow, } from "components/Elements/Pagination";
import { useWeb3React } from "@web3-react/core";
import { resetLoans } from "../loansSlice";
import { useRouteMatch } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { PRIVATE_LOAN_QUERY } from "utils/graphQueries/queries";
import usePagination, { DOTS } from "hooks/usePagination";
import useCollateralSubscription from "utils/subscriptions/collateralSubscription";
import { useLoanData } from "state/hooks";
import { LoanListViewType } from "../LoanMarketplace";
import { NetWorkChainId } from "config/constants/types";

type LoanOffersViewProps = {
  view: LoanListViewType.LIST | LoanListViewType.GRID;
  isRefresh?: boolean;
  update?: boolean;
};

const LoanOffersView: React.FC<LoanOffersViewProps> = ({ view }) => {
  const { account, chainId } = useWeb3React();
  const {
    data: collateralSub,
    error: errorSub,
    loading: loadingSub,
  } = useCollateralSubscription();
  const [updatedCollateral, setUpdatedCollateral] = useState([]);
  const [loader, setLoader] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (account || chainId) {
      dispatch(resetLoans());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, chainId]);
  const { searchTerm, filterOptions } = useAppSelector(
    (state) => state.filters
  );
  const { loanState } = useLoanData();
  const { loanActivated, loanCreated, loanAdjusted, loanPayback, loanLiquidated } =
    loanState.queriesList;

  useEffect(() => {
    if (account) {
      if (loadingSub) {
        return;
      }
      if (errorSub) {
        return;
      }
      if (collateralSub && !loadingSub) {
        const updatedCollateralList =
          collateralSub?.marketLoanTransactionListener?.data;
        if (updatedCollateralList?.length > 0) {
          const updatedCollateralData = updatedCollateral?.map((result) => {
            const collaterals = result?.collateral?.map((collateral) => {
              let tokenPrice;
              for (const iterator of updatedCollateralList) {
                if (
                  collateral?.address?.toLowerCase() ===
                  iterator?.address?.toLowerCase()
                ) {
                  tokenPrice = iterator?.price;
                }
              }
              if (collateral?.nftId) {
                let foundObj = updatedCollateral?.find(
                  (x) => x?.collateral[0]?.price === collateral?.price
                );
                return {
                  ...collateral,
                  price: foundObj?.collateral[0]?.price,
                };
              } else {
                return {
                  ...collateral,
                  // price: tokenPrice * collateral.amount,
                  collateralAmount: collateral.collateralAmount,
                  ltv: collateral.ltv,
                  priceImpact: collateral.priceImpact

                };
              }
            });
            return {
              ...result,
              collateral: collaterals,
            };
          });
          setUpdatedCollateral(updatedCollateralData);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingSub, errorSub, account, loadingSub, collateralSub]);

  const [
    privateLoanData,
    { data: privateData, error: privateError, loading: privateLoading },
  ] = useLazyQuery(PRIVATE_LOAN_QUERY);
  const { params } = useRouteMatch();

  const [maxPage, setMaxPage] = useState(0);
  const { range, active, setPage, previous, next } = usePagination({
    total: maxPage,
    siblings: 0,
  });

  const [loanOffers, { data, error, loading }] = useLoanOffers();
  useEffect(() => {
    if (data?.loanOffersListing?.data) {
      setUpdatedCollateral(data?.loanOffersListing.data);
    }
  }, [data]);

  useEffect(() => {
    setPage(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterOptions]);

  useEffect(() => {
    // if (account || chainId) {
    setLoader(true);

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
        loanOffers({
          variables: {
            pageNumber: active - 1,
            pageSize: 12,
            search: searchTerm,
            filter: filterOptions,
            chainId: chainId ? chainId : NetWorkChainId.BSC,
          },
        });
      }
      setTimeout(() => {
        setLoader(false);
      }, 800);

      return;

    };
    let execInterval = setInterval(timeInterval, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    filterOptions,
    loanCreated,
    loanActivated,
    loanAdjusted,
    loanPayback,
    loanLiquidated,
    active,
    searchTerm,
    account,
    chainId,
  ]);

  useEffect(() => {
    // newMax can be NaN in case count is undefined
    const newMax = Math.ceil(data?.loanOffersListing.count / 12);
    // avoid unnecessary re-renders,
    if (newMax && newMax !== maxPage) {
      setMaxPage(newMax);
    }
  }, [data, maxPage]);

  return (
    <>
      {view === LoanListViewType.GRID ? (
        <LoanGridView
          loading={loading ? loading : privateLoading}
          error={error ? error : privateError}
          isActiveLoan={false}
          data={
            data?.loanOffersListing.data
              ? updatedCollateral
              : privateData?.privateLoanOffer?.data
          }
        />
      ) : (
        <LoanListView
          loading={loader ? loader : loading ? loading : privateLoading}
          error={error ? error : privateError}
          isActiveLoan={false}
          data={
            data?.loanOffersListing.data
              ? updatedCollateral
              : privateData?.privateLoanOffer?.data
          }
        />
      )}
      {maxPage > 1 ? (
        <PaginationRoot
          style={{ marginTop: "auto", marginBottom: 20, zIndex: 999 }}
        >
          <PrevArrow disabled={active === 1} onClick={previous} />
          {range.map((value) => {
            if (value !== DOTS) {
              return (
                <PaginationButton
                  data-state={active === value ? "active" : "inactive"}
                  onClick={() => setPage(value)}
                >
                  {value}
                </PaginationButton>
              );
            }
            return <PaginationButton disabled>...</PaginationButton>;
          })}
          <NextArrow disabled={active === maxPage} onClick={next} />
        </PaginationRoot>
      ) : null}
    </>
  );
};

export default LoanOffersView;
