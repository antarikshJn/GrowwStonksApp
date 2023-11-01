export const TIME_SERIES_FUNCTIONS = {
  INTRADAY: "TIME_SERIES_INTRADAY",
  DAILY: "TIME_SERIES_DAILY",
  WEEKLY: "TIME_SERIES_WEEKLY",
  MONTHLY: "TIME_SERIES_MONTHLY",
};

export const TIME_SERIES_DURATION = {
  ONE_DAY: "ONE_DAY",
  ONE_WEEK: "ONE_WEEK",
  ONE_MONTH: "ONE_MONTH",
  THREE_MONTH: "THREE_MONTH",
  ONE_YEAR: "ONE_YEAR",
};

export const INTRADAY_INTERVAL = "5min";

export const TIME_SERIES_DURATION_VS_CONFIG = {
  [TIME_SERIES_DURATION.ONE_DAY]: {
    label: "1D",
    timeseriesFunction: TIME_SERIES_FUNCTIONS.INTRADAY,
    responseKey: `Time Series (${INTRADAY_INTERVAL})`,
  },
  [TIME_SERIES_DURATION.ONE_WEEK]: {
    label: "1W",
    timeseriesFunction: TIME_SERIES_FUNCTIONS.DAILY,
    responseKey: "Time Series (Daily)",
  },
  [TIME_SERIES_DURATION.ONE_MONTH]: {
    label: "1M",
    timeseriesFunction: TIME_SERIES_FUNCTIONS.DAILY,
    responseKey: "Time Series (Daily)",
  },
  [TIME_SERIES_DURATION.THREE_MONTH]: {
    label: "3M",
    timeseriesFunction: TIME_SERIES_FUNCTIONS.WEEKLY,
    responseKey: "Weekly Time Series",
  },
  [TIME_SERIES_DURATION.ONE_YEAR]: {
    label: "1Y",
    timeseriesFunction: TIME_SERIES_FUNCTIONS.MONTHLY,
    responseKey: "Monthly Time Series",
  },
};


export const TIME_SERIES_KEYS = {
  OPEN: "1. open",
  HIGH: "2. high",
  LOW: "3. low",
  CLOSE: "4. close",
  VOLUME: "5. volume",
};

export const TIME_SERIES_KEYS_VS_LABEL = {
  [TIME_SERIES_KEYS.OPEN]: "Open",
  [TIME_SERIES_KEYS.HIGH]: "High",
  [TIME_SERIES_KEYS.LOW]: "Low",
  [TIME_SERIES_KEYS.CLOSE]: "Close",
  [TIME_SERIES_KEYS.VOLUME]: "Volume",
};
