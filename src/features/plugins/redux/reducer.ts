"use client";

import { combineReducers } from "@reduxjs/toolkit";
import auth from "@/features/auth/redux/slice.auth";
import { authApi } from "@/features/auth/redux/auth.rtk";
import { registerApi } from "@/features/register/redux/register.rtk";

export const combined = combineReducers({
  auth,
  [authApi.reducerPath]: authApi.reducer,
  [registerApi.reducerPath]: authApi.reducer,
});
