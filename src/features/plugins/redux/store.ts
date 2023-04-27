"use client";

import { emptySplitApi } from "@/features/app/redux/app.rtk";
import { authApi } from "@/features/auth/redux/auth.rtk";
import { registerApi } from "@/features/register/redux/register.rtk";
import { configureStore } from "@reduxjs/toolkit";
// Redux Persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { middleware_toast } from "./middleware.redux";
import { combined } from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducers = persistReducer(persistConfig, combined);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      middleware_toast,
      emptySplitApi.middleware,
      authApi.middleware,
      registerApi.middleware
    ),
});

export const persistor = persistStore(store);
