import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const topGainersLosersApi = createApi({
  reducerPath: "topGainersLosers",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.alphavantage.co/query",
  }),
  endpoints: (builder) => ({
    getTopGainersLosers: builder.query({
      query: () => `?function=TOP_GAINERS_LOSERS&apikey=demo`,
      transformResponse: (response) => ({
        top_gainers: response?.top_gainers,
        top_losers: response?.top_losers,
      }),
    }),
  }),
});

export const { useGetTopGainersLosersQuery } = topGainersLosersApi;
