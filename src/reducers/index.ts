
import { combineReducers } from "redux";
import audioRefReducer from "./audioRefReducer";
import collectionsReducer from "./collectionReducer";
import currentSongReducer from "./currentSongReducer";
import isPlayingReducer from "./isPlayingReducer";
import navStatusReducer from "./navStatusReducer";
import songsFromCollectionReducer from "./songsFromCollectionReducer";

const rootReducers = combineReducers({
    currentSong: currentSongReducer,
    navStatus: navStatusReducer,
    collections: collectionsReducer,
    songsFromCollection: songsFromCollectionReducer,
    isPlaying: isPlayingReducer,
    audioRef: audioRefReducer
})

export default rootReducers;