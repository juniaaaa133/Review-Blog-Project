import { combineReducers, configureStore, Reducer, SliceSelectors } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import  userReducer  from "./slices/userSlice";
import persistReducer from "redux-persist/es/persistReducer";
import { WebStorage } from "redux-persist";

interface Config {
key : string,
version : number,
storage : WebStorage
}

const persistConfig : Config = {
    key : "root",
    version : 1,
    storage
}

const combinedReducers  = combineReducers({
    user : userReducer
})

const reducer = persistReducer(persistConfig,combinedReducers)

export const store = configureStore({
 reducer : {
 reducer,
 }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;