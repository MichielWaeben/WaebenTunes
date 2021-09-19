import { Song } from "../models/song";

const currentSong = {} as Song;

const currentSongReducer = (state = currentSong, action: any) => {
  switch (action.type) {
    case "FETCH_CURRENT_SONG":
      return currentSong;
    case "SET_CURRENT_SONG":
      return {
        ...state,
        currentSong: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default currentSongReducer;
