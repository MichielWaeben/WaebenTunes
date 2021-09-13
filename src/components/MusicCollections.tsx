import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadCollections } from "../actions/collectionsReducer";
import { RootState } from "../app/store";
import { Collection } from "../models/collection";

const MusicCollections = () => {
  //FETCH GAMES
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCollections());
  }, [dispatch]);

  //Get that data back
  const { collections }: any = useSelector(
    (state: RootState) => state.collections
  );

  const allCollections = () => {
    if (collections) {
      return collections.map((collection: Collection) => {
        return <Link to={`/library/${collection.id}`}><li className="CollectionCard">{collection.name}</li></Link>;
      });
    } else {
      return [];
    }
  };

  return (
    <div className="MusicCollections">
      <div className="collection-list">
        <ul>{allCollections()}</ul>
      </div>
    </div>
  );
};

export default MusicCollections;
