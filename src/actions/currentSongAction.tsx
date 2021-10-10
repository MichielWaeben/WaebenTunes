import { Song } from "../models/song";

export const setCurrentSong = (song: Song) => async (dispatch: any) =>{
    dispatch({
        type: "SET_CURRENT_SONG",
        payload: song,
      });
}
