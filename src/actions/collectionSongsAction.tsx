import DatabaseService from "../services/database.service";

//Action Creator

export const loadSongsFromCollection = (collectionId: string) => async (dispatch: any) =>
 {
     await DatabaseService.getAllSongs().then((allSongsFromCollection) => {
        dispatch({
            type: "FETCH_COLLECTION_SONGS",
            payload: allSongsFromCollection,
          });
    });
}