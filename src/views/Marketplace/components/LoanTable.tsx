import { useTable, useSortBy, useFlexLayout } from "react-table";
import { useMemo } from "react";
import styled from "styled-components";
import type { LoanOffer } from "../api/getLoanOffers";


type TableProps = {
  tableColumns: Array<{ [key: string]: any }>;
  tableData: Array<LoanOffer>;
};

const Table: React.FC<TableProps> = ({ tableColumns, tableData }) => {
  const data = useMemo(() => tableData, [tableData]);
  const columns = useMemo(() => tableColumns, [tableColumns]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
      useFlexLayout
    );
  const firstPageRows = rows;

  
  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {firstPageRows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};


const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;

  thead {
    font-size: 0.875rem;
    font-weight:bold;

    tr th div {
      opacity: 0.6;
    }
  }

  tr {
    gap: 10px;
  }

  th {
    text-align: center;
  }

  th:first-child {
    text-align: left;
  }

  tbody {
    font-size: 1rem;
    text-align: center;
    min-height: 25vh;

    tr {
      border-bottom: 1px dashed rgba(255, 255, 255, 0.06);
    }

    td {
      padding: 10px 0;
      align-content: center;
      position: relative;

      &::after{
        content:' ';
        display: block;
        position: absolute;
        height: 2px;
        width: 90%;
        bottom: -1px;
        left: 5%;
      }

      &:nth-child(2n){
        &::after{
          background: linear-gradient(to right, rgba(101, 103, 209, 1), rgba(101, 103, 209, 0));
        }
      }

      &:nth-child(2n+1){
        &::after{
          background: linear-gradient(to right, rgba(140, 235, 231, 1), rgba(140, 235, 231, 0));
        }
      }

      &:nth-child(1) {
        &::after{
          display:none;
        }
      }
    }
  }
`;

export default Table;