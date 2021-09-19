import DatabaseService from "../services/database.service";

//Action Creator

export const loadCollections = () => async (dispatch: any) =>
 {
     await DatabaseService.getAllCollections().then((allCollections) => {
        dispatch({
            type: "FETCH_COLLECTIONS",
            payload: allCollections,
          });
    });
}