import React from "react";
import { Column, useTable } from "react-table";
import { Table } from "./Table";

type Data = {
  id: string;
  date: string;
  firstName: string;
  lastName: string;
  email: string;
  view: React.ReactNode;
};

const createArr = (n: number): Data[] => {
  const data: Data[] = [];
  for (let i = 0; i < n; i += 1) {
    data.push({
      id: `ID-${Math.random().toFixed(4)}`,
      date: new Date().toDateString(),
      firstName: `Rick #${i}`,
      lastName: `Sanchez #${i}`,
      email: `morty_${i}@rick.space`,
      view: <button>View</button>,
    });
  }
  return data;
};

const MusicTable = () => {
  const data = React.useMemo<Data[]>(() => createArr(10), []);
  const columns = React.useMemo<Column<Data>[]>(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Date Requested",
        accessor: "date",
      },
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        accessor: "view",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Data>({ columns, data });

  return (
    <div className="MusicTable">
      <div className="CollectionInfo"></div>
      <div className="table-container">
                <Table<Data>
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        headerGroups={headerGroups}
        rows={rows}
        prepareRow={prepareRow}
      />
      </div>

    </div>
  );
};

export default MusicTable;
