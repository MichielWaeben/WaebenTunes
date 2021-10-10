export const setIsPlaying = (isPlaying: boolean) => async (dispatch: any) =>{
    dispatch({
        type: "SET_IS_PLAYING_STATUS",
        payload: isPlaying,
      });
}