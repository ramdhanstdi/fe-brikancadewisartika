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
    list_merchant: builder.query({
      query: ({ params }) => ({
        url: "/merchant/list",
        params,
      }),
    }),
    update_merchant: builder.mutation({
      query: ({ body: values }) => ({
        url: "/merchant/edit",
        method: "POST",
        body: values,
      }),
    }),
  }),
});

export const {
  useCreate_merchantMutation,
  useLazyMonitoring_merchantQuery,
  useLazyList_merchantQuery,
  useList_merchantQuery,
  useUpdate_merchantMutation,
} = merchantApi;
