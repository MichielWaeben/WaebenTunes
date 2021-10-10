import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseTableInstanceProps } from "react-table";
import { setCurrentSong } from "../actions/currentSongAction";
import { RootState } from "../app/store";
import { Song } from "../models/song";

export interface TableNewProps<T extends object>
  extends Pick<
    UseTableInstanceProps<T>,
    | "getTableProps"
    | "headerGroups"
    | "getTableBodyProps"
    | "prepareRow"
    | "rows"
  > {}

export function Table<T extends object>(props: TableNewProps<T>) {
  const dispatch = useDispatch();
  const { getTableProps, headerGroups, getTableBodyProps, rows, prepareRow } =
    props;
  const currentSong = useSelector((state: RootState) => state.currentSong);
  const isPlaying = useSelector((state: RootState) => state.isPlaying);

  function clickHandler(song: Song) {
    dispatch(setCurrentSong(song));
  }

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            <th className="playing-t"></th>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              className={
                (currentSong as any).currentSong &&
                (row.original as Song).id == (currentSong as any).currentSong.id
                  ? "active-t"
                  : ""
              }
              onClick={() => clickHandler(row.original as Song)}
              {...row.getRowProps()}
            >
              <td className={`playing-t ${isPlaying
                    ? "is-playing"
                    : ""}`}>
                {(currentSong as any).currentSong &&
                (row.original as Song).id ==
                  (currentSong as any).currentSong.id ? (
                  <div className={`icon audio`}>
                    <i></i>
                    <i></i>
                  </div>
                ) : null}
              </td>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
