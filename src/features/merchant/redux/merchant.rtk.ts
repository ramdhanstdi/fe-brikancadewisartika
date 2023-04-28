// RTL

import { emptySplitApi } from "@/features/app/redux/app.rtk";

export const merchantApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    create_merchant: builder.mutation({
      query: ({ body: values }) => ({
        url: "/merchant/create",
        method: "POST",
        body: values,
      }),
    }),
    monitoring_merchant: builder.query({
      query: ({ params }) => ({
        url: `/merchant/monitoring`,
        params,
      }),
    }),
  }),
});

export const { useCreate_merchantMutation, useLazyMonitoring_merchantQuery } =
  merchantApi;
