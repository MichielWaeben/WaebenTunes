import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import rootReducers from "../reducers" 

const composeEnhancers: any = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
