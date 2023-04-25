"use client";

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combined } from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducers = persistReducer(persistConfig, combined);

export const store = configureStore({ reducer: persistedReducers });

export const persistor = persistStore(store);
