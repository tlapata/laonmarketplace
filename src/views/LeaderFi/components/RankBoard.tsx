import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import PageLoader from "components/PageLoader";
import { useEffect, useRef, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { decimalValues } from "utils/conversion";
import useRankBoardDetails from "./getRankBoard";
import {
  PaginationRoot,
  PaginationButton,
} from "components/Elements/Pagination";
import { PrevArrow, NextArrow } from "components/SliderArrows";
import { RootState } from "state";
import DropDownIcon from "assets/images/loanbuilder/drop-down.svg";
import TL from "assets/images/marketplace/top-left.svg";
import BR from "assets/images/marketplace/bottom-right.svg";
import { useSelector } from "react-redux";
import { NetWorkChainId } from "config/constants/types";
import React from "react";
import CopyDataToClipBoard from "components/CopyToClipBoard/CopyToClipBoard";
import useViewport from "hooks/useViewport";


const RankBoard = ({ setMyData }) => {
  const GET_ALL_TIERS = gql`
    query {
      tierLevel(chain: "BNB") {
        id
        name
      }
    }
  `;
  const { data: tiers } = useQuery(GET_ALL_TIERS);
  const { chainId } = useWeb3React();
  const sidebarOpen = useSelector(
    (state: RootState) => state.loanBuilder.drawer
  );
  const [showDropDown, setShowDropDown] = useState(false);
  const [rankBoardDetails, { data, loading }] = useRankBoardDetails();
  const [pageIndex, setPageIndex] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { account } = useWeb3React();
  const [, setAllTiers] = useState(null);
  useEffect(() => {
    rankBoardDetails({
      variables: {
        pageSize: rowsPerPage,
        pageNo: pageIndex,
        address: account ? account : "",
        chainId: chainId ? chainId : NetWorkChainId.BSC,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex, rowsPerPage, account, chainId]);
  useEffect(() => {
    if (data) {
      setMyData(data.getLeaderFi);
    }
  }, [data, setMyData, account]);

  useEffect(() => {
    if (tiers && data?.getLeaderFi?.myTier) {
      const tiersAll = tiers?.tierLevel?.filter(
        (tier) =>
          tier?.name.toLowerCase() !== data?.getLeaderFi?.myTier?.toLowerCase()
      );
      setAllTiers(tiersAll);
    }
  }, [data?.getLeaderFi?.myTier, tiers]);

  useEffect(() => {
    setMaxPage(Math.ceil(data?.getLeaderFi?.ranking?.count / rowsPerPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setShowDropDown(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);
  const { width } = useViewport()
  const getPageNumbers = () => {
    const pageCountToShow = width <= 768 ? 5 : 10; // Number of page numbers to display
    const result = [];

    if (maxPage <= pageCountToShow) {
      for (let i = 1; i <= maxPage; i++) {
        result.push(i);
      }
    } else {
      const halfCount = Math.floor(pageCountToShow / 2);

      if (pageIndex <= halfCount) {
        for (let i = 1; i <= pageCountToShow - 1; i++) {
          result.push(i);
        }
        result.push("...");
        result.push(maxPage);
      } else if (pageIndex >= maxPage - halfCount) {
        result.push(1);
        result.push("...");
        for (let i = maxPage - pageCountToShow + 2; i <= maxPage; i++) {
          result.push(i);
        }
      } else {
        result.push(1);
        result.push("...");
        for (
          let i = pageIndex - halfCount + 1;
          i <= pageIndex + halfCount - 1;
          i++
        ) {
          result.push(i);
        }
        result.push("...");
        result.push(maxPage);
      }
    }

    return result;
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Container >
      <InnerContainer style={{ zIndex: "100" }}>
        <TableRow>
          <TableHeaderCell>Rank</TableHeaderCell>
          <TableHeaderCell>Wallet</TableHeaderCell>
          <TableHeaderCell style={{ justifySelf: "center" }}>
            GovHoldings
          </TableHeaderCell>
        </TableRow>

        {data &&
          data?.getLeaderFi?.ranking?.data?.map((item, index) => {
            const adjustedIndex = (pageIndex - 1) * rowsPerPage + index + 1;
            return (
              <TableRow key={index} style={{ zIndex: "100" }}>
                <TableCell>#{adjustedIndex}</TableCell>
                <TableCell style={{ zIndex: "100" }}>
                  <span className="address">{item?.holder}</span>
                  <CopyDataToClipBoard textToCopy={item?.holder} />

                </TableCell>
                <TableCell style={{ justifySelf: "center", zIndex: "100" }}>
                  {decimalValues(item?.amount)}
                </TableCell>
              </TableRow>
            )
          })}
      </InnerContainer>
      {data?.getLeaderFi?.ranking?.count > rowsPerPage ? (
        <Page >
          <div></div>
          <PaginationRoot
            style={{
              marginTop: "auto",
              marginBottom: 10,
              zIndex: "100",
              position: "relative",
            }}
          >
            <PrevArrow
              disabled={pageIndex === 1}
              onClick={() => {
                if (pageIndex === 1) {
                  return;
                } else setPageIndex((prev) => prev - 1);
              }}
            />
            {getPageNumbers().map((pageNumber, index) => (
              <React.Fragment key={index}>
                {pageNumber === "..." ? (
                  <span>{pageNumber}</span>
                ) : (
                  <PaginationButton
                    data-state={
                      pageNumber === pageIndex ? "active" : "inactive"
                    }
                    onClick={() => setPageIndex(pageNumber)}
                  >
                    {pageNumber}
                  </PaginationButton>
                )}
              </React.Fragment>
            ))}
            <NextArrow
              disabled={pageIndex === maxPage}
              onClick={() => {
                if (pageIndex === maxPage) {
                  return;
                } else setPageIndex((prev) => prev + 1);
              }}
            />
          </PaginationRoot>
          <div style={{ position: "relative" }}>
            <div className="d-flex align-items-center justify-content-end">
              Rows per page
              <CurrencyBtn
                onClick={() => setShowDropDown(true)}
                className="dropdownitems"
                ref={ref}
              >
                <span>{rowsPerPage}</span>
              </CurrencyBtn>
            </div>
            {showDropDown && (
              <CustomDropDown sidebarOpen={sidebarOpen}>
                {[10, 20, 30, 40, 50].map((item) => (
                  <div
                    className={`dropdownitems `}
                    onClick={() => {
                      setRowsPerPage(item);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </CustomDropDown>
            )}
          </div>
        </Page>
      ) : null}
    </Container>
  );
};

const CurrencyBtn = styled.div`
  width: 80px;
  height: 31px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-image: url(${DropDownIcon});
  background-repeat: no-repeat;
  background-position: 160px center;
  ${({ theme }) => theme.mediaQueries.fold} {
    width: 50px;
   }
  span {
    display: block;
  }
  &:hover {
    background: url(${DropDownIcon});
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: 84px center, center, center;
  }
  &[data-state="active"] {
    background: rgba(255, 255, 255, 0.25);
  }

  margin: 5px 5px 5px 5px; // based on positioning of ::before and ::after
  ::before {
    content: "";
    background-image: url(${TL});
    background-position: top left;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    position: absolute;
    top: -5px;
    left: -5px;
  }

  ::after {
    content: "";
    background-image: url(${BR});
    background-position: bottom right;
    background-repeat: no-repeat;
    position: absolute;
    width: 50px;
    height: 20px;
    right: -5px;
    bottom: -5px;
  }
`;

const CustomDropDown = styled.div<{ sidebarOpen?: Boolean }>`
  width: 80px;
  right: 0px;
  top: 00px;
  z-index: 100;
  position: absolute;
  text-align: center;
  top: calc(100% - 235px);
  left: calc(100% - 85px);
  @media (max-width: 1024px) {
    right: calc(50% - ${(props) => (props.sidebarOpen ? "237px" : "163px")});
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    right: calc(50% - 90px);
  }
  @media (min-width: 1281px) and (max-width: 1366px) {
    right: calc(50% - ${(props) => (props.sidebarOpen ? "195px" : "90px")});
  }
  @media (width: 1440px) {
    right: ${(props) => (props.sidebarOpen ? "calc(50% - 90px)" : "40px")};
  }
  background: linear-gradient(
    90deg,
    rgba(241, 198, 255, 0.35) -16.66%,
    rgba(189, 10, 248, 0.35) 24.05%,
    rgba(54, 92, 252, 0.35) 99.31%
  );
  .dropdownitems {
    padding: 8px 0;
    &.disabled {
      opacity: 0.5;
    }
  }

  .dropdownitems:hover,
  .dropdownitems:focus,
  .dropdownitems:active {
    color: ${({ theme }) => theme.colors.textAccent};
  }
`;

const Container = styled.div`
  position: relative;
  margin: 0 min(115px, 5%) 50px;
  min-height: 400px;
  box-sizing: border-box;
  padding: 25px 5px 25px 15px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin: 20px 0px 0px 0px;
  }

  @media (min-width: 768px) {
    padding: 25px 10px 25px 30px;
  }
  .cards-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  .cards {
    display: grid;
    gap: 15px;
    grid-auto-rows: minmax(140px, 1fr);

    @media (min-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
    .leaderscard {
      height: 155px;
    }
  }
`;

const InnerContainer = styled.div`
  height: 500px;
  overflow-y: auto;
  padding-right: 10px;
  @media (min-width: 768px) {
    padding-right: 20px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;

  img {
    position: absolute;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 3fr;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  height: 40px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    grid-template-columns: 3fr 6fr 3fr;
  }
`;

const TableCell = styled.div`
  text-transform: capitalize;
  display: flex;
  align-items: end;
  padding-bottom: 2px;
  padding-left: 10px;
  
  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: 15px;
     }
  gap: 10px;
  img {
    width:40px;
  }
  span.address {
    display: block;
    max-width: 85px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
  }

  @media (min-width: 576px) {
    font-size: 12px;
    span.address {
      max-width: 280px;
    }
  }
  @media (min-width: 768px) {
    font-size: 15px;
  }
  @media (min-width: 996px) {
    font-size: 18px;
  }
`;

const TableHeaderCell = styled(TableCell)`
  font-family: "Organetto Ultra Bold", sans-serif;
  font-weight: 800;
  font-size: 10px;
  line-height: 22px;
  padding-bottom: 15px;
  @media (min-width: 576px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 996px) {
    font-size: 16px;
  }
  ${({ theme }) => theme.mediaQueries.fold} {
    font-size: 7px;
  }
`;
const Page = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
gap:10px;
${({ theme }) => theme.mediaQueries.md} {
 justify-content:center;
   }
`;
export default RankBoard;
