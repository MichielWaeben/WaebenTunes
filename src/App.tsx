import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import { RootState } from "./app/store";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import SmallPlayer from "./components/SmallPlayer";
import MusicCollections from "./components/MusicCollections";
import Header from "./components/Header";
import MusicTable from "./components/MusicTable";

function App() {
  const libraryStatus = useSelector((state: RootState) => state.libraryStatus);
  const dispatch = useDispatch();
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <BrowserRouter>
      <Header></Header>

      <div className="content-body">

        <Switch>
          <Route path="/library" exact>
            <MusicCollections></MusicCollections>
          </Route>
          <Route path="/library/:collectionId" exact>
            <MusicTable></MusicTable>
          </Route>
        </Switch>

      </div>
      </BrowserRouter>
      <SmallPlayer></SmallPlayer>
      {/*       <button onClick={() => dispatch({ type: "TOGGLE_LIBRARY_STATUS" })}>
        TEST
      </button> */}
    </div>
  );
}

export default App;
