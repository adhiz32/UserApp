import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistReducer,persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { EcommerceReducer } from "./reducer";

//
const persistConfig={
    key:'EcommerceUser',
    storage:AsyncStorage,
};

//middleware
const persistedReducer=persistReducer(persistConfig,EcommerceReducer);

//redux:store
const store=configureStore({
    reducer:persistedReducer,
    middleware:getDefaultMiddleware=>
    getDefaultMiddleware({
        immutableCheck:false,
        serializableCheck:false,
    })
});


//middleware:redux persist persistor

let persister=persistStore(store);

//export

export{store,persister};