import React, {
  HTMLInputTypeAttribute,
  useEffect,
  useRef,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { Column, useTable } from "react-table";
import { Collection } from "../models/collection";
import { Song } from "../models/song";
import {
  addSong,
  getAllSongsFromCollection,
  getCollectionById,
} from "../services/database.service";
import { Table } from "./Table";
import Modal from "react-modal";

const MusicTable = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  let fileInputRef = useRef<HTMLInputTypeAttribute>(null) as any;
  const [allSongs, setAllSongs] = useState([] as Song[]);
  const [collection, setCollection] = useState({} as Collection);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let newSongName = "";
  let newSongArtist = "";
  let newSongFile: any;

  const fileChangeHandler = (event: any) => {
    newSongFile = event.target.files[0];
    let selectName = document.getElementsByClassName("file-select-name")[0];
    selectName.innerHTML = newSongFile.name;
  };

  const onNameChange = (e: any) => {
    newSongName = e.target.value;
  };
  const onArtistChange = (e: any) => {
    newSongArtist = e.target.value;
  };

  const fileUploadClick = () => {
    let fileInput = document.getElementById("file-upload-input");
    fileInput!.click();
  }

  const uploadSong = async (e: any) => {
    e.preventDefault();
    let newSong: Song = {} as Song;
    newSong.name = newSongName;
    newSong.artist = newSongArtist;
    newSong.cover = "";
    newSong.collection = collection;
    await addSong(newSong, newSongFile);
    closeModal();
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    getAllSongsFromCollection(collectionId).then((songs) => {
      setAllSongs(songs);
    });
  }, []);

  useEffect(() => {
    getCollectionById(collectionId).then((collection) => {
      setCollection(collection);
    });
  }, []);

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
          return originalRow.collection.name;
        },
      },
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
        <div
          className="background"
          style={{ backgroundImage: `url(${collection.cover})` }}
        ></div>
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

      <Modal
        className="add-song-modal"
        isOpen={modalIsOpen}
        ariaHideApp={false}
        contentLabel="Minimal Modal Example"
      >
        <div className="modal-header">
          <h1>Add Song</h1>
          <button className="modal-close-button" onClick={closeModal}>
            X
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={uploadSong}>
            <div className="song-info-input">
              <label>Name</label>
              <input required onChange={onNameChange} type="text" />
            </div>
            <div className="song-info-input">
              <label>Artist</label>
              <input required onChange={onArtistChange} type="text" />
            </div>
            <div className="song-info-input">
              <label>Song</label>
              <div className="file-upload">
                <div onClick={fileUploadClick} className="file-upload-select">
                  <div className="file-select-button">Choose Song</div>
                  <div className="file-select-name">No file chosen...</div>
                  <input
                    required
                    accept=".mp3,audio/*"
                    type="file"
                    onChange={fileChangeHandler}
                    name="file-upload-input"
                    id="file-upload-input"
                  ></input>
                </div>
              </div>
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
        <div className="modal-footer"></div>
      </Modal>
    </div>
  );
};

export default MusicTable;
