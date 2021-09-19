import { collection } from "@firebase/firestore/dist/lite";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadCollections } from "../actions/collectionsAction";
import { RootState } from "../app/store";
import { Collection } from "../models/collection";
import { getAllCollections } from "../services/database.service";

const MusicCollections = () => {
  const [allCollections, setCollections] = useState([] as Collection[]);
  const [allCards, setCards] = useState({ cardList: [] as JSX.Element[] });

  useEffect(() => {
    getAllCollections().then((collections) => {
      setCollections(collections);
    });
  }, []);

  useEffect(() => {
    showAllCollections();
  }, [allCollections]);

  const showAllCollections = async () => {
    let totalCards: JSX.Element[] = [];

    for (let i = 0; i < allCollections.length; i++) {
      await delay(50);
      let card = (
        <li className="collection-card-container">
          <Link
            key={allCollections[i].id}
            to={`/library/${allCollections[i].id}`}
          >
            <div className="card-body">{allCollections[i].name}</div>
          </Link>
        </li>
      );
      totalCards.push(card);
      setCards({ ...allCards, cardList: totalCards });
    }
  };

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className="MusicCollections">
      <div className="collection-list">
        <ul>{allCards.cardList}</ul>
      </div>
    </div>
  );
};

export default MusicCollections;
