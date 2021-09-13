
import { combineReducers } from "redux";
import collectionsReducer from "./collectionReducer";
import currentSongReducer from "./currentSongReducer";
import libraryStatusReducer from "./libraryStatusReducer";

const rootReducers = combineReducers({
    currentSong: currentSongReducer,
    libraryStatus: libraryStatusReducer,
    collections: collectionsReducer
})

export default rootReducers;