import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyOverviewApi = createApi({
  reducerPath: "companyOverview",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.alphavantage.co/query",
  }),
  endpoints: (builder) => ({
    getCompanyOverview: builder.query({
      query: (query) => `?function=OVERVIEW&symbol=${query}&apikey=demo`,
    }),
    getQuoteBySombol: builder.query({
      query: (query) => `?function=GLOBAL_QUOTE&symbol=${query}&apikey=demo`,
      transformResponse: (response) => response["Global Quote"],
    }),
  }),
});

export const { useGetCompanyOverviewQuery, useGetQuoteBySombolQuery } =
  companyOverviewApi;
