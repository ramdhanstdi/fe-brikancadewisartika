"use client";

import { combineReducers } from "@reduxjs/toolkit";
import auth from "@/features/auth/redux/slice.auth";

export const combined = combineReducers({
  auth,
});
