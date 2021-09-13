const libraryStatusReducer = (state = false, action: any) => {
  switch (action.type) {
    case "FETCH_LIBRARY_STATUS":
      return state;
    case "TOGGLE_LIBRARY_STATUS":
      return !state;
    default: {
      return state;
    }
  }
};

export default libraryStatusReducer;
