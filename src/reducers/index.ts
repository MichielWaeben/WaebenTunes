
import { combineReducers } from "redux";
import collectionsReducer from "./collectionReducer";
import currentSongReducer from "./currentSongReducer";
import isPlayingReducer from "./isPlayingReducer";
import libraryStatusReducer from "./libraryStatusReducer";
import songsFromCollectionReducer from "./songsFromCollectionReducer";

const rootReducers = combineReducers({
    currentSong: currentSongReducer,
    libraryStatus: libraryStatusReducer,
    collections: collectionsReducer,
    songsFromCollection: songsFromCollectionReducer,
    isPlaying: isPlayingReducer
})

export default rootReducers;