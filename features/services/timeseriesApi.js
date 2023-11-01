import {
  INTRADAY_INTERVAL,
  TIME_SERIES_FUNCTIONS,
} from "@/components/TimeSeriesChart/TimeSeries.constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const getTransformedTimeseries = (data) => {
  const timeseries = [];
  for (const [timestamp, values] of Object.entries(data)) {
    timeseries.push({ ...values, timestamp });
  }

  return timeseries;
};

export const timeseriesApi = createApi({
  reducerPath: "timeseries",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.alphavantage.co/query",
  }),
  endpoints: (builder) => ({
    getTimeSeriesData: builder.query({
      query: (query) =>
        `?function=${query?.timeseriesFunction}&symbol=IBM${
          query?.timeseriesFunction === TIME_SERIES_FUNCTIONS.INTRADAY
            ? "&interval=" + INTRADAY_INTERVAL
            : ""
        }&apikey=demo`,
      transformResponse: (response, meta, arg) => {
        const { responseKey } = arg || {};
        return getTransformedTimeseries(response[responseKey] || {});
      },
    }),
  }),
});

export const { useGetTimeSeriesDataQuery } = timeseriesApi;
