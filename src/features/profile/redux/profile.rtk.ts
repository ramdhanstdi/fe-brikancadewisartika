// RTK

import { emptySplitApi } from "@/features/app/redux/app.rtk";

const profileApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    profileDetai: builder.mutation({
      query: () => ({
        url: "/profile/detail",
      }),
    }),
  }),
});

export const { useProfileDetaiMutation } = profileApi;
