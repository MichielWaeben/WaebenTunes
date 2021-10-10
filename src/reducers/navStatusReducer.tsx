const navStatusReducer = (state = false, action: any) => {
  switch (action.type) {
    case "SET_NAV_STATUS":
      return action.payload;
    default: {
      return state;
    }
  }
};

export default navStatusReducer;
