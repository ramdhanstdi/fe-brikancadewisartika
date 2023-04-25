// RTK

import { emptySplitApi } from "@/features/app/redux/app.rtk";

const authApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    auth_login: builder.mutation({
      query: ({ body: values }) => ({
        url: "/auth/login",
        method: "POST",
        body: values,
      }),
    }),
  }),
});

export const { useAuth_loginMutation } = authApi;
