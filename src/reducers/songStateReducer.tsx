import { Song } from "../models/song";

const songState = {
    isPlayer: false,
    songInfo: {
        currentTime: 0,
        duration: 0,
        animationPercentage: 0
    },
    currentSong: {} as Song
  };

const songStateReducer = (state = songState, action: any) => {
    switch (action.type) {
      case "FETCH_SONG_STATE":
        return {
          ...state,
          popular: action.payload.popular,
          upcoming: action.payload.upcoming,
          newGames: action.payload.newGames,
        };
      case "FETCH_SEARCHED":
        return {
          ...state,
          searched: action.payload.searched,
        };
      case "CLEAR_SEARCHED":
        return {
          ...state,
          searched: [],
        };
      default:
        return { ...state };
    }
  };
  
  export default songStateReducer;