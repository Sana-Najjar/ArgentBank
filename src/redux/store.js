/*import { setupListeners } from "@reduxjs/toolkit/query";
import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import {userApi} from "./user/userApi";

export const reducers = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      userApi.middleware,
    ),
})

setupListeners(store.dispatch);*/
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth.reducer.jsx';
import { userReducer } from './reducers/user.reducer.jsx';

const rootReducer = combineReducers({
   auth: authReducer,
   user: userReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true 
})

export default store