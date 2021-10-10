import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import { RootState, store } from "./app/store";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import SmallPlayer from "./components/SmallPlayer";
import MusicCollections from "./components/MusicCollections";
import Header from "./components/Header";
import MusicTable from "./components/MusicTable";
import Nav from "./components/Nav";

function App() {
  const navStatus = useSelector((state: RootState) => state.navStatus);

  //dispatch(setAudioRef(audioRef));
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <div className={`content-container ${navStatus ? "move-right" : ""}`}>
      <Nav></Nav>
      <div className={`content-body`}>
        <Switch>
          <Route path="/library" exact>
            <MusicCollections></MusicCollections>
          </Route>
          <Route path="/library/:collectionId" exact>
            <MusicTable></MusicTable>
          </Route>
        </Switch>
      </div>
      <SmallPlayer></SmallPlayer>
      </div>
      </BrowserRouter>

      {/*       <button onClick={() => dispatch({ type: "TOGGLE_LIBRARY_STATUS" })}>
        TEST
      </button> */}
    </div>
  );
}

export default App;
