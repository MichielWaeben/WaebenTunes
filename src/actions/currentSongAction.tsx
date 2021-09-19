import { Song } from "../models/song";

export const fetchCurrentSong = {type: "FETCH_CURRENT_SONG", payload: null}

export const setCurrentSong = (song: Song) => async (dispatch: any) =>{
    dispatch({
        type: "SET_CURRENT_SONG",
        payload: song,
      });
}
