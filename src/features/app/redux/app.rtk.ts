// RTK
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

// Reducer
import { auth_logout } from "@/features/auth/redux/slice.auth";

// Mutex
import { Mutex } from "async-mutex";
import { getCookie } from "cookies-next";

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  credentials: "include",
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
  mode: "cors",
  prepareHeaders(headers) {
    const token = getCookie("token");
    headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    api.dispatch(auth_logout);
  }

  return result;
};

export const emptySplitApi = createApi({
  reducerPath: "empty",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
