import { useTable, useSortBy, useFlexLayout, useRowSelect } from "react-table";
import * as React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Spinner from "components/Spinner";

export type TableNames = "nftTiers" | "InstLender" | "InstBorrower";

type TableProps = {
  tableName: TableNames;
  tableColumns: any;
  tableData: any;
  tableClass?: string;
  typeOfTable?: string;
  loading?: boolean;
};

const Table: React.FC<TableProps> = ({
  tableName,
  tableColumns,
  tableData,
  tableClass = "",
  typeOfTable,
  loading,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns: tableColumns,
      data: tableData,
    },
    useSortBy,
    useFlexLayout,
    useRowSelect
  );
  useEffect(() => { }, [selectedFlatRows]);

  const firstPageRows = rows;

  return (
    <StyledTable
      typeOfTable={typeOfTable}
      className={tableClass}
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      {loading ? (
        <SpinnerWrapper>
          {" "}
          <StyledSpinner />{" "}
        </SpinnerWrapper>
      ) : !loading && rows.length === 0 ? (
        <NoData>No Data Found</NoData>
      ) : (
        <tbody {...getTableBodyProps()}>
          {firstPageRows.length > 0 ? (
            firstPageRows.map((row: any, i: number) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={i}>
                  {row.cells.map((cell: any, i: number) => (
                    <React.Fragment key={i}>
                      <ReactTooltip />
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    </React.Fragment>
                  ))}
                </tr>
              );
            })
          ) : (
            <NoData>No data found</NoData>
          )}
        </tbody>
      )}
    </StyledTable>
  );
};


const StyledTable = styled.table<{ typeOfTable?: string }>`
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  min-width: unset !important;

  thead {
    text-align: left;
    font-size: 0.875rem;

    tr th div {
      opacity: 0.4;
    }

    th img{
      margin-left: 6px;
    }
  }

  &.hide-check-header > thead {
    th:first-child {
      display: none;
    }
  }

  tbody {
    display: block;
    margin-top: 20px;
    height: 100%;
    font-weight: 500;

    td {
      align-content: center;
    }
  }

  tr > td:first-child {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &.nfts-table {
    thead {
      @media (min-width: 3840px) {
        height: 70px;
        > tr {
          padding-top: 28px;
        }
      }
    }

    tbody tr > td {
      width: 33px;
      padding: 10px 0;
    }
    tbody tr > td:nth-child(1) {
      padding-left: 17px;
      width: 51px;
    }
    tbody tr > td:nth-child(3) {
      padding-right: 21px;
    }
    tbody tr > td:nth-child(4) {
      padding-right: 29px;
    }
    tbody tr > td:nth-child(5) {
      padding-right: 10px;
      margin-right: 5px;
    }
  }
  /*
  &.extraPadding {
    tbody tr > td:nth-child(1) {
      padding-left: 0;
    }
    thead tr > th:nth-child(2) {
      padding-right: 46px;
    }
    thead tr > th:nth-child(4) {
      padding-right: 39px;
    }

    tbody tr > td:nth-child(2) {
      padding-right: 0;
    }
    tbody tr > td:nth-child(3) {
      padding-right: 26px;
    }
    tbody tr > td:nth-child(4) {
      padding-right: 23px;
    }
  }*/
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledSpinner = styled(Spinner)`
  width: 25px;
  height: 100px;
  margin: 0 15% !important;
  display: flex;
  width: 50px;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const NoData = styled.div`
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Table;