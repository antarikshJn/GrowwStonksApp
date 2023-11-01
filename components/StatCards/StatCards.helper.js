export const STATS_KEYS = {
  WEEK_HIGH_52: "WeekHigh52",
  WEEK_LOW_52: "WeekLow52",
  MARKET_CAPITALIZATION: "MarketCapitalization",
  PE_RATIO: "PERatio",
  BETA: "Beta",
  DIVIDEND_YIELD: "DividendYield",
  PROFIT_MARGIN: "ProfitMargin",
};

export const STATS_KEYS_VS_LABEL = {
  [STATS_KEYS.WEEK_HIGH_52]: "52-Week High",
  [STATS_KEYS.WEEK_LOW_52]: "52-Week Low",
  [STATS_KEYS.MARKET_CAPITALIZATION]: "Market Cap",
  [STATS_KEYS.PE_RATIO]: "P/E Ratio",
  [STATS_KEYS.BETA]: "Beta",
  [STATS_KEYS.DIVIDEND_YIELD]: "Profit Margin",
  [STATS_KEYS.PROFIT_MARGIN]: "52-Week High",
};

export const STATS_KEYS_TO_PICK = [
  STATS_KEYS.WEEK_HIGH_52,
  STATS_KEYS.WEEK_LOW_52,
  STATS_KEYS.MARKET_CAPITALIZATION,
  STATS_KEYS.PE_RATIO,
  STATS_KEYS.BETA,
  STATS_KEYS.DIVIDEND_YIELD,
  STATS_KEYS.PROFIT_MARGIN,
];
