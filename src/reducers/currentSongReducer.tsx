import { Song } from "../models/song";

const currentSong = {} as Song;

const currentSongReducer = (state = currentSong, action: any) => {
  switch (action.type) {
    case "FETCH_CURRENT_SONG":
      return currentSong;
    case "SET_CURRENT_SONG":
      return {
        ...state,
        searched: action.payload.searched,
      };
    default: {
      return state;
    }
  }
};

export default currentSongReducer;
