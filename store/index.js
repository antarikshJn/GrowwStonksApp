import { configureStore } from "@reduxjs/toolkit";

import { searchApi } from "@/features/services/searchApi";
import { companyOverviewApi } from "@/features/services/companyOverviewApi";
import { topGainersLosersApi } from "@/features/services/topGainersLosersApi";
import { timeseriesApi } from "@/features/services/timeseriesApi";

export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
    [companyOverviewApi.reducerPath]: companyOverviewApi.reducer,
    [topGainersLosersApi.reducerPath]: topGainersLosersApi.reducer,
    [timeseriesApi.reducerPath]: timeseriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      searchApi.middleware,
      companyOverviewApi.middleware,
      topGainersLosersApi.middleware,
      timeseriesApi.middleware
    ),
});
