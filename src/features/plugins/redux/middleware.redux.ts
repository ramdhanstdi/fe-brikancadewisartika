"use client";

// Redux Toolkit
import type { Middleware } from "@reduxjs/toolkit";

// Toast
import toast from "react-hot-toast";

const middleware_renderGenericError = (errorType: string): string => {
  if (errorType === "FETCH_ERROR") return "Internal Server Error";

  return "";
};

export const middleware_toast: Middleware = () => (next) => (action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  console.log(action);
  if (action.error) {
    toast.error(action?.payload?.data?.message, { id: "error" });
  }
  if (action?.payload?.success) {
    toast.success(action?.payload?.message, { id: "success" });
  }
  if (action?.payload?.status === false) {
    toast.error(action?.payload?.message, { id: "401" });
  }

  return next(action);
};
