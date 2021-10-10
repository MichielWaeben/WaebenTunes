const isPlayingReducer = (state = false, action: any) => {
    switch (action.type) {
      case "SET_IS_PLAYING_STATUS":
        return action.payload;
      default: {
        return state;
      }
    }
  };
  
  export default isPlayingReducer;
  