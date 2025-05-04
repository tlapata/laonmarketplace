import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import styled from "styled-components";
import Table from "./Table";
import { ConvertToExponential, toCommas } from "utils/conversion";
import { fetchNetworkDetail } from "utils/wallet";
import { GovSynthetic40Icon } from "components/Svg";
import SortArrow from "assets/images/icons/sorting.svg";

type TableProps = {
  data: any;
  loading?: boolean;
};

const TokensTable: React.FC<TableProps> = ({ data, loading }) => {
  const { chainId } = useWeb3React()
  const newData = useMemo(
    () =>
      (data ?? []).map((d: any) => ({
        ...d,
        icon: d.icon ?? `assets/tokenIcons/${d.symbol}.svg`,
        newValue: d.price / +d.amount,
      })),
    [data]
  );

  const columns = useMemo(
    () => [
      {
        Header: <span>Token <img src={SortArrow} alt="" /></span>,
        accessor: "symbol",
        width: 70,
        maxWidth: 360,
        Cell: ({ value, row }) => (
          <Token
            className="token-info"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <img
                className="token-icon"
                style={{
                  minWidth: "34px",
                  height: "34px",
                  marginRight: "12px",
                }}
                src={ value.includes("GovSynthetic") ? <GovSynthetic40Icon className="icon"/> : row.original.icon}
                alt=""
              />
            </div>
            <span
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {value}
            </span>
          </Token>
        ),
      },
      {
        Header: <span>Price <img src={SortArrow} alt="" /></span>,
        accessor: "newValue",
        width: 30,
        maxWidth: 160,
        Cell: ({ value }) => {
          return (
            <span data-tip={value}>
              ${value < 1 ? value.toFixed(3) : ConvertToExponential(value, 0)}
            </span>
          );
        },
      },
      {
        Header: <span>Coins <img src={SortArrow} alt="" /></span>,
        accessor: "amount",
        Cell: ({ value, row }) => {
          if (row?.original?.symbol === fetchNetworkDetail(chainId)?.nativeCurrency?.name || row.original.symbol === fetchNetworkDetail(chainId)?.wrappedToken?.symbol) {
            return <span data-tip={value}>{(+value).toFixed(3)} </span>;
          }
          return (
            <span data-tip={value}>
              {value <= 1 ? (+value).toFixed(3) : toCommas(value)}
            </span>
          );
        },
        width: 30,
        maxWidth: 160,
      },
      {
        Header: <span>Value <img src={SortArrow} alt="" /></span>,
        accessor: "price",
        Cell: ({ value }) => <span data-tip={value}>${toCommas(value)}</span>,
        width: 30,
        maxWidth: 360,
      },
    ],
    [chainId]
  );

  return (
    <TableCard>
      <Table
        tableName="nftTiers"
        tableClass="nfts-table tokens"
        tableColumns={columns}
        tableData={newData}
        loading={loading}
      />
    </TableCard>
  );
};


const TableCard = styled.div`
`;

const Token=styled.div`
  &.token-info {
    .token-icon{
      width: auto;
      height: 38px;
      margin-right: 14px;
      border-radius: 100%;
      background: rgba(255, 255, 255, 0.06);
    }
  }
`

export default TokensTable;