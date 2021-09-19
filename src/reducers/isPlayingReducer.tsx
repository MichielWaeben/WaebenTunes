const isPlayingReducer = (state = false, action: any) => {
    switch (action.type) {
      case "FETCH_IS_PLAYING_STATUS":
        return state;
      case "TOGGLE_IS_PLAYING_STATUS":
        return !state;
      default: {
        return state;
      }
    }
  };
  
  export default isPlayingReducer;
  