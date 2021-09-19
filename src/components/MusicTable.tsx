import { collection } from "@firebase/firestore/dist/lite";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Column, useTable } from "react-table";
import { Song } from "../models/song";
import { getAllSongs, getAllSongsFromCollection } from "../services/database.service";
import { Table } from "./Table";

const MusicTable = () => {
  const { collectionId } = useParams<{ collectionId: string }>();

  const [allSongs, setAllSongs] = useState([] as Song[]);

    useEffect(() => {
      getAllSongsFromCollection(collectionId).then(songs => {

        setAllSongs(songs);
      })
    }, [])

    const data = React.useMemo<Song[]>(() => allSongs, [allSongs]);



  const columns = React.useMemo<Column<Song>[]>(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Artist",
        accessor: "artist",
      },
      {
        Header: "Collection",
        accessor: (originalRow) => {
          return originalRow.collection.name
      }
    }
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Song>({ columns, data });

    
  return (
    <div className="MusicTable">
      <div className="CollectionInfo"></div>
      <div className="table-container">
                <Table<Song>
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
