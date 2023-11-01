export default {
  Symbol: (data) => data?.Symbol,
  AssetType: (data) => data?.AssetType,
  Name: (data) => data?.Name,
  Description: (data) => data?.Description,
  CIK: (data) => data?.CIK,
  Exchange: (data) => data?.Exchange,
  Currency: (data) => data?.Currency,
  Country: (data) => data?.Country,
  Sector: (data) => data?.Sector,
  Industry: (data) => data?.Industry,
  Address: (data) => data?.Address,
  FiscalYearEnd: (data) => data?.FiscalYearEnd,
  LatestQuarter: (data) => data?.LatestQuarter,
  MarketCapitalization: (data) => data?.MarketCapitalization,
  EBITDA: (data) => data?.EBITDA,
  PERatio: (data) => data?.PERatio,
  PEGRatio: (data) => data?.PEGRatio,
  BookValue: (data) => data?.BookValue,
  DividendPerShare: (data) => data?.DividendPerShare,
  DividendYield: (data) => data?.DividendYield,
  EPS: (data) => data?.EPS,
  RevenuePerShareTTM: (data) => data?.RevenuePerShareTTM,
  ProfitMargin: (data) => data?.ProfitMargin,
  OperatingMarginTTM: (data) => data?.OperatingMarginTTM,
  ReturnOnAssetsTTM: (data) => data?.ReturnOnAssetsTTM,
  ReturnOnEquityTTM: (data) => data?.ReturnOnEquityTTM,
  RevenueTTM: (data) => data?.RevenueTTM,
  GrossProfitTTM: (data) => data?.GrossProfitTTM,
  DilutedEPSTTM: (data) => data?.DilutedEPSTTM,
  QuarterlyEarningsGrowthYOY: (data) => data?.QuarterlyEarningsGrowthYOY,
  QuarterlyRevenueGrowthYOY: (data) => data?.QuarterlyRevenueGrowthYOY,
  AnalystTargetPrice: (data) => data?.AnalystTargetPrice,
  TrailingPE: (data) => data?.TrailingPE,
  ForwardPE: (data) => data?.ForwardPE,
  PriceToSalesRatioTTM: (data) => data?.PriceToSalesRatioTTM,
  PriceToBookRatio: (data) => data?.PriceToBookRatio,
  EVToRevenue: (data) => data?.EVToRevenue,
  EVToEBITDA: (data) => data?.EVToEBITDA,
  Beta: (data) => data?.Beta,
  WeekHigh52: (data) => data?.["52WeekHigh"],
  WeekLow52: (data) => data?.["52WeekLow"],
  DayMovingAverage50: (data) => data?.["50DayMovingAverage"],
  DayMovingAverage200: (data) => data?.["200DayMovingAverage"],
  SharesOutstanding: (data) => data?.SharesOutstanding,
  DividendDate: (data) => data?.DividendDate,
  ExDividendDate: (data) => data?.ExDividendDate,
};
