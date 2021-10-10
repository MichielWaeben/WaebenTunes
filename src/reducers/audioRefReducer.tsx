const audioRef: any = null;

const audioRefReducer = (state = audioRef, action: any) => {
    switch (action.type) {
      case "SET_AUDIO_REF":
        return { 
          ...state,
           state: action.payload}
      default: {
        return state;
      }
    }
  };
  
  export default audioRefReducer;
  