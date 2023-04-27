// RTK
import { emptySplitApi } from "@/features/app/redux/app.rtk";

export const registerApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ body }) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
