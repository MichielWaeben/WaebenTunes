import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Column, useTable } from "react-table";
import { Collection } from "../models/collection";
import { Song } from "../models/song";
import { getAllSongsFromCollection, getCollectionById } from "../services/database.service";
import { Table } from "./Table";
import Modal from 'react-modal';
import { getStorage, ref } from "firebase/storage";

const MusicTable = () => {
  const { collectionId } = useParams<{ collectionId: string }>();

  const [allSongs, setAllSongs] = useState([] as Song[]);
  const [collection, setCollection] = useState({} as Collection);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const storage = getStorage();
  const [image , setImage] = useState('');
const upload = ()=>{
  if(image == null)
    return;
  storage.ref(`/images/${image.name}`).put(image)
  .on("state_changed" , alert("success") , alert);
}

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    useEffect(() => {
      getAllSongsFromCollection(collectionId).then(songs => {

        setAllSongs(songs);
      })
    }, [])

    useEffect(() => {
      getCollectionById(collectionId).then(collection => {
        setCollection(collection);
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
      <div className="CollectionInfo">
        <div className="collection-info-container">
          <button onClick={openModal}>Add Song</button>
          <div className="image-container">
            <img src={collection.cover} alt="" />
          </div>
          <div className="info-container">
            <h2>Playlist</h2>
            <h1>{collection.name}</h1>
          </div>
        </div>
        <div className="background" style={{backgroundImage: `url(${collection.cover})`}}></div>
      </div>
      <div className="table-container">
                <Table<Song>
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        headerGroups={headerGroups}
        rows={rows}
        prepareRow={prepareRow}
      />
      </div>

      <Modal className="add-song-modal"
           isOpen={modalIsOpen}
           contentLabel="Minimal Modal Example"
        >
          <div className="modal-header">
            <h1>Add Song</h1>
            <button className="modal-close-button" onClick={closeModal}>X</button>
          </div>
          <div className="modal-body">
            <div className="song-info-input">
            <label>Name</label>
            <input type="text" />
            </div>
            <div className="song-info-input">
            <label>Artist</label>
            <input type="text" />
            </div>
          </div>
          <div className="modal-footer"></div>
        </Modal>
    </div>
  );
};

export default MusicTable;
