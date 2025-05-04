import styled from "styled-components";
import { useMemo } from "react";
import Table from "./Table";
import { decimalValues, walletAddressFormatter } from "utils/conversion";
import { configGraphQL as config } from "config/constants/config";
import { useWeb3React } from "@web3-react/core";
import { fetchNetworkDetail } from "utils/wallet";

type TableProps = {
  data: any;
  loading?: boolean;
};

const NftsTable: React.FC<TableProps> = ({ data, loading }) => {
  const { chainId } = useWeb3React();
  const columns = useMemo(
    () => [
      {
        Header: <span className="header-span">NFT</span>,
        accessor: "collection",
        width: 70,
        maxWidth: 360,
        disableSortBy: true,
        Cell: ({ value, row }) => (
          <div
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <img
                className="token-icon"
                style={{
                  /*minWidth: "34px",
                  height: value === "ETH" ? "30px" : "34px",
                  marginRight: "12px",*/
                }}
                src={row?.original?.image}
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
          </div>
        ),
      },
      {
        Header: <span className="header-span">Floor</span>,
        accessor: "price",
        Cell: ({ value }) => <>${decimalValues(value)}</>,
        width: 30,
        maxWidth: 160,
      },
      {
        Header: <span className="header-span">Contract</span>,
        accessor: "nftAddress",
        Cell: ({ value, row }) => (
          <div
            className="text-underline"
            onClick={() =>
              window.open(
                `${config.openSeaUrl}/${fetchNetworkDetail(
                  chainId
                ).name.toLowerCase()}/${value}/${row?.original?.nftId}`
              )
            }
          >
            {walletAddressFormatter(value)}
          </div>
        ),
        width: 30,
        maxWidth: 360,
      },
    ],
    [chainId]
  );

  return (
    <TableCard>
      <Table
        loading={loading}
        tableName="nftTiers"
        tableClass="nfts-table extraPadding"
        tableColumns={columns}
        tableData={data}
      />
    </TableCard>
  );
};

export default NftsTable;

const TableCard = styled.div`
  .token-icon{
    width: auto;
    height: 38px;
    margin-right: 14px;
    border-radius: 100%;
  }
  .text-underline {
    &:hover {
      text-decoration: underline !important;
      cursor: pointer !important;
    }
  }
`;
