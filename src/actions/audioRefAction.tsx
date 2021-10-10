export const setAudioRef = (audioRef: HTMLAudioElement) => async (dispatch: any) =>{
    dispatch({
        type: "SET_AUDIO_REF",
        payload: audioRef,
      });
}