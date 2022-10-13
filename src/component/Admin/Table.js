import React from 'react';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import Search from "./Search";
//테이블 만드는 함수
function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,setGlobalFilter } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,

  );

  return (
    <>   
    <Search onSubmit={setGlobalFilter} />
      <table
        style={{
          bordercollapse: 'collapse',
          width: '100%',
          maxHeight: '200px',
          overflow: 'scroll',
          whiteSpace: 'nowrap',
        }}
        {...getTableProps()}
      >
        <thead style={{ position: 'sticky', top: '0', backgroundColor: 'pink' }}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <b>{column.render('Header')}</b>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    style={{ padding: '0.5rem', border: '1px  black', textalign: ' center' }}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
