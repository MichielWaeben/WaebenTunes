import { Song } from "../models/song";

const initState: Song[] = [];
  
  const songsFromCollectionReducer = (state = initState, action: any) => {
    switch (action.type) {
      case "FETCH_COLLECTION_SONGS":
        return {
          ...state,
          collections: action.payload as Song,
        };
      default:
        return { ...state };
    }
  };
  
  export default songsFromCollectionReducer;