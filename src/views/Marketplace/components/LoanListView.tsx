import styled from "styled-components";
import SortArrow from "assets/images/icons/sorting.svg";
import { Checkbox, CheckboxIndicator } from "components/Form/Checkbox";
import { FiCheck } from "react-icons/fi";
import IconButton from "components/Elements/IconButton";
import { DetailsIcon } from "components/Svg";
import { Switch, SwitchThumb } from "components/Form/Switch";
import { Routes } from "config/constants/routes";

import {
  RadialCheckbox,
  RadialCheckboxIndicator,
} from "components/Form/RadialCheckbox";
import type { LoanOffer } from "../api/getLoanOffers";
import { ApolloError } from "@apollo/client";
import Table from "./LoanTable";
import { RootState, useAppDispatch, useAppSelector } from "state";
import { setAutoSell, setSelectedLoans } from "../loansSlice";
import { toCommas } from "utils/conversion";
import ReactTooltip from "react-tooltip";
import { useWeb3React } from "@web3-react/core";
import Spinner from "components/Spinner";
import { TokenTypes } from "config/constants/loans";
import { useMemo } from "react";
import EyeIcon2 from "assets/icons/eye-icon-2.svg";
import { useHistory } from "react-router-dom";
import { LoanStatus } from "config/constants/loans";
import { StableCoinsNames } from "config/constants/types";
import ResponsiveCardHolder from "./ResponsiveLoanCard";
import useViewport from "hooks/useViewport";
import { __token_collateral_set } from "config/constants/sets";

type ViewProps = {
  loading: boolean;
  data: LoanOffer[];
  error?: ApolloError;
  isActiveLoan: boolean;
};

const tokens={
  [TokenTypes.SINGLE_NFT]: 'Single NFT',
  [TokenTypes.MULTI_NFT]: 'Multi NFT',
}

const LoanListView: React.FC<ViewProps> = ({ loading, data, isActiveLoan }) => {
  const { width } = useViewport();
  const dispatch = useAppDispatch();
  const { account } = useWeb3React();
  const { selected, loader, currentTab } = useAppSelector(
    (state: RootState) => ({
      selected: state.loans.selectedLoans,
      loader: state.loans.activateLoader,
      currentTab: state.loans.currentTab,
    })
  );
  const history = useHistory();
  const memoData = useMemo(
    () =>
      (data || []).map((res) => ({
        ...res,
        autoSell: selected[res.id]?.autoSell || false,
        checked: selected[res.id] ? true : false,
      })),
    [data, selected]
  );

  const expiryDate = (date: number, days: number) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  
  const calculateTimeLeft = (updatedAt: number, termLength: number) => {
    const date = expiryDate(updatedAt, termLength);
    let difference = +new Date(date) - +new Date();

    let days = 0;
    if (difference > 0) {
      days = Math.floor(difference / (1000 * 60 * 60 * 24));
    } else {
      days = 0;
    }

    return days;
  };

  const columns = useMemo(
    () => [
      {
        Header: () => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>MultiFund</div>
          </div>
        ),
        accessor: "checked",
        disableSortBy: true,
        Cell: ({ row }) => (
          <div
            style={{
              display: "flex",
              pointerEvents: loader ? "none" : "unset",
            }}
          >
            {/* if loader is active, show loader only for selected loan */}
            {loader && selected[row.original.id] ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <StyledSpinner />
              </div>
            ) : (
              <Checkbox
                checked={row.original.checked}
                onCheckedChange={() => {
                  dispatch(
                    setSelectedLoans({
                      id: row.original.id,
                      data: row.original,
                    })
                  );
                }}
              >
                <CheckboxIndicator>
                  <FiCheck />
                </CheckboxIndicator>
              </Checkbox>
            )}
            <IconButton
              onClick={() =>
                history.push(`${Routes.DETAILS}/${row.original.id}`)
              }
            >
              <DetailsIcon />
            </IconButton>
          </div>
        ),
        minWidth: 65,
        width: 65,
        maxWidth: 80,
      },
      {
        Header: () => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>Loan Amt</div>
            <img
              src={SortArrow}
              alt=""
              style={{ height: 11, marginLeft: 10 }}
            />
          </div>
        ),
        accessor: "borrowAmount",
        Cell: ({ row, value }) => (
          <StyledSpan
            className={
              row.original.user?.walletAddress === account
                ? "own-loan"
                : ""
            }
          >
            <span data-tip={value}>{`$${toCommas(value)}`}</span>
          </StyledSpan>
        ),
        minWidth: 80,
        width: 110,
        maxWidth: 120,
      },
      {
        Header: () => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>APY %</div>
            <img
              src={SortArrow}
              alt=""
              style={{ height: 11, marginLeft: 10 }}
            />
          </div>
        ),
        accessor: "apy",
        Cell: ({ row, value }) => (
          <StyledSpan
            className={
              row.original.user?.walletAddress === account
                ? "own-loan"
                : ""
            }
          >
            {value.toFixed(0) + " %"}
          </StyledSpan>
        ),
        minWidth: 70,
        width: 80,
        maxWidth: 90,
      },
      {
        Header: () => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>Earnings</div>
            <img
              src={SortArrow}
              alt=""
              style={{ height: 11, marginLeft: 10 }}
            />
          </div>
        ),
        accessor: "apyFee",
        Cell: ({ row, value }) => (
          <StyledSpan
            className={
              row.original.user?.walletAddress === account
                ? "own-loan"
                : ""
            }
          >
            <span data-tip={value}>{`$${value.toFixed(2)}`}</span>
          </StyledSpan>
        ),
        minWidth: 80,
        width: 105,
        maxWidth: 110,
      },
      {
        Header: () => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>Term</div>
            <img
              src={SortArrow}
              alt=""
              style={{ height: 11, marginLeft: 10 }}
            />
          </div>
        ),
        accessor: "termLength",
        Cell: ({ row, value }) => {
          return (
            <StyledSpan
              className={
                row.original.user?.walletAddress === account
                  ? "own-loan"
                  : ""
              }
            >
              {isActiveLoan
                ? `${calculateTimeLeft(
                  +row?.original?.activatedAt,
                  row?.original?.termLength
                )}${calculateTimeLeft(
                  +row?.original?.activatedAt,
                  row?.original?.termLength
                ) === 1
                  ? " day"
                  : " days"
                }`
                : value === 1
                  ? value + " day"
                  : value + " days"}
            </StyledSpan>
          );
        },
        minWidth: 70,
        width: 80,
        maxWidth: 90,
      },
      {
        Header: () => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>Collateral</div>
            <img
              src={SortArrow}
              alt=""
              style={{ height: 11, marginLeft: 10 }}
            />
          </div>
        ),
        accessor: "collateralAmount",
        Cell: ({ row, value }) => {
          // const totalCollateral = value
          //   .map((data) => data["price"])
          //   .reduce((partialSum, number) => partialSum + number, 0);
          return (
            <EyeSpan>
              <StyledSpan
                className={
                  row.original.user?.walletAddress === account
                    ? "own-loan"
                    : ""
                }
              >
                <span data-tip={value || '0'}>
                  {/* ${toCommas(totalCollateral)} */}
                  $ {toCommas(value)}
                </span>
              </StyledSpan>
            </EyeSpan>
          );
        },
        minWidth: 90,
        width: 105,
        maxWidth: 115,
      },
      
      {
        Header: () => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>LTV %</div>
            <img
              src={SortArrow}
              alt=""
              srcSet=""
              style={{ height: 11, marginLeft: 10 }}
            />
          </div>
        ),
        accessor: "ltv",
        Cell: ({ row, value }) => (
          <StyledSpan
            className={
              row.original.user?.walletAddress === account
                ? "own-loan"
                : ""
            }
          >{`${value.toFixed(1)} %`}</StyledSpan>
        ),
        minWidth: 70,
        width: 80,
        maxWidth: 90,
      },
      {
        Header: () => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>Stablecoin</div>
            <img
              src={SortArrow}
              alt=""
              style={{ height: 11, marginLeft: 10 }}
            />
          </div>
        ),
        accessor: "borrowedCoin.symbol",
        Cell: ({ row, value }) => {
          if (value === StableCoinsNames.USDT) {
            return (
              <StyledSpan
                className={
                  row.original.user?.walletAddress === account
                    ? "own-loan"
                    : ""
                }
              >
                {value}{" "}
              </StyledSpan>
            );
          }
          if (value === StableCoinsNames.USDC) {
            return (
              <StyledSpan
                className={
                  row.original.user?.walletAddress === account
                    ? "own-loan"
                    : ""
                }
              >
                {value}
              </StyledSpan>
            );
          }
          return (
            <StyledSpan
              className={
                row.original.user?.walletAddress === account
                  ? "own-loan"
                  : ""
              }
            >
              {value}
            </StyledSpan>
          );
        },
        minWidth: 80,
        width: 100,
        maxWidth: 110,
      },
      {
        Header: () => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>Loan ID</div>
            <img
              src={SortArrow}
              alt=""
              style={{ height: 11, marginLeft: 10 }}
            />
          </div>
        ),
        accessor: "id",
        Cell: ({ row, value }) => (
          <StyledSpan
            className={
              row.original.user?.walletAddress === account
                ? "own-loan"
                : row.original.loanOfferLender?.lenderWalletAddress === account
                  ? ""
                  : ""
            }
          >
            {value}
          </StyledSpan>
        ),
        minWidth: 80,
        width: 85,
        maxWidth: 90,
      },
      {
        Header: () => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>Price Impact</div>
            <img
              src={SortArrow}
              alt=""
              style={{ height: 11, marginLeft: 10 }}
            />
          </div>
        ),
        accessor: "priceImpact",
        Cell: ({ row, value }) => (
          <StyledSpan
            className={
             ` text-capitalize ${  row.original?.user?.walletAddress === account
                  ? "own-loan"
                  : ""}`
            }
          >
            { __token_collateral_set.has(row?.original?.collateralType) ? (
               <span data-tip={value}>{`${value.toFixed(3)}%`}</span>
            )
            : tokens[row?.original?.collateralType]
          }
          </StyledSpan>
        ),
        minWidth: 80,
        width: 130,
        maxWidth: 120,
      },
      {
        Header: () => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>AutoSell</div>
          </div>
        ),
        accessor: "autoSell",
        disableSortBy: true,
        Cell: ({ row }) =>
          row.original.loanStatus === LoanStatus.ACTIVE ? (
            <Switch
              checked={row.original.loanOfferLender?.autoSell}
              disabled={true}
              className={
                row.original.user?.walletAddress === account
                  ? "own-loan"
                  : ""
              }
            >
              <SwitchThumb />
            </Switch>
          ) : row.original.collateralType === TokenTypes.SINGLE_NFT ||
            row.original.collateralType === TokenTypes.MULTI_NFT ? (
            <></>
          ) : (
            <Switch
              checked={row.original.autoSell}
              onCheckedChange={(e) => {
                const { id } = row.original;
                dispatch(setAutoSell({ id, autoSell: e }));
              }}
              className={
                row.original.user?.walletAddress === account
                  ? "own-loan"
                  : row.original.loanOfferLender?.lenderWalletAddress ===
                    account
                    ? "user-activated"
                    : ""
              }
            >
              <SwitchThumb />
            </Switch>
          ),
        minWidth: 70,
        width: 82,
        maxWidth: 90,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [account, loader, selected]
  );

  if (loading || !data) {
    return (
      <TableWrapper>
        <Wrapper>
          <Spinner />
        </Wrapper>
      </TableWrapper>
    );
  }

  if (data.length === 0) {
    return (
      <TableWrapper>
        <Wrapper>No Data Found</Wrapper>
      </TableWrapper>
    );
  }

  if (
    data[0].loanStatus === LoanStatus.ACTIVE &&
    data[0].isPrivateLoan &&
    currentTab === "offers"
  ) {
    return (
      <TableWrapper>
        <Wrapper>This Loan has been Activated</Wrapper>
      </TableWrapper>
    );
  }

  if (
    data[0].loanStatus === LoanStatus.INACTIVE &&
    data[0].isPrivateLoan &&
    currentTab === "active"
  ) {
    return (
      <TableWrapper>
        <Wrapper>No Data Found</Wrapper>
      </TableWrapper>
    );
  }

  return (
    <>
      {/*width > 768 ? <TableWrapper>
        <TableCard>
          <ReactTooltip />
          <Table tableColumns={columns} tableData={memoData} />
        </TableCard>
      </TableWrapper> :
        <ResponsiveCardsWrapper>
          {memoData?.map(item => (
            <ResponsiveCardHolder item={item} isActiveLoan={isActiveLoan} />
          ))}
        </ResponsiveCardsWrapper>
        */}
      <TableWrapper>
        <TableCard>
          <ReactTooltip />
          <Table tableColumns={columns} tableData={memoData} />
        </TableCard>
      </TableWrapper>
    </>
  );
};


const TableWrapper = styled.div`
  z-index: 1000;

  .own-loan {
    color: ${({ theme }) => theme.colors.textAccent};
  }

  .invert {
    filter: invert(100%);
  }
  .user-activated {
      span{
        background: ${({ theme }) => theme.colors.text};
      }
  }
`;

const TableCard = styled.div`
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.drawerBackground};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollbarThumbBg};
    border-radius: 69.6758px;
  }
  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
`;

export const StyledSpan = styled.span<{ minWidth?: number }>`
  display: inline-block;
  width: 100%;
  padding: 0.5rem;
  min-width: ${(props) => props.minWidth || 80}px;

  &.with-img {
    padding: 0.2rem 0.5rem;
  }
  &.with-eye {
    padding: 0.4rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${({ theme }) => theme.mediaQueries.md} {
  }
`;

const EyeSpan = styled.div`
  position: relative;
  .with-icon {
    display: block;
    position: absolute;
    margin-left: 5px;
    margin-top: 5px;
    z-index: 10;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 25vh;
`;

const StyledSpinner = styled(Spinner)`
  width: 43px;
  height: 25px;
  margin: 0 15% !important;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const ResponsiveCardsWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap:10px;
  column-gap:10px;
`;

export default LoanListView;