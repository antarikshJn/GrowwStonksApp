import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchApi = createApi({
  reducerPath: "search",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.alphavantage.co/query",
  }),
  endpoints: (builder) => ({
    searchCompanies: builder.query({
      query: (query = "tesco") =>
        `/query?function=SYMBOL_SEARCH&keywords=${"tesco"}&apikey=demo`,
      transformResponse: (response) => response?.bestMatches,
    }),
  }),
});

export const { useSearchCompaniesQuery } = searchApi;
