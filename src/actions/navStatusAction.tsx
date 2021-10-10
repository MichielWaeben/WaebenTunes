export const setNavStatus = (navStatus: boolean) => async (dispatch: any) =>{
    dispatch({
        type: "SET_NAV_STATUS",
        payload: navStatus,
      });
}