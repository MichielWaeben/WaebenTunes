import { Collection } from "../models/collection";

const initState: Collection[] = [];
  
  const collectionsReducer = (state = initState, action: any) => {
    switch (action.type) {
      case "FETCH_COLLECTIONS":
        return {
          ...state,
          collections: action.payload as Collection[],
        };
      default:
        return { ...state };
    }
  };
  
  export default collectionsReducer;