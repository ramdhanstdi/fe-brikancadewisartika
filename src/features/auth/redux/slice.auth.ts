import { createSlice } from "@reduxjs/toolkit";
import { setCookie, deleteCookie, getCookie } from "cookies-next";

const initialState = { token: getCookie("token") };

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    set_auth: (_state, { payload }) => {
      setCookie("token", payload);
    },
    auth_logout: () => {
      deleteCookie("token");
      return initialState;
    },
  },
});

export const { set_auth, auth_logout } = auth.actions;
export default auth.reducer;
