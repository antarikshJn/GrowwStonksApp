export default {
  symbol: (data) => data?.["01. symbol"],
  open: (data) => data?.["02. open"],
  high: (data) => data?.["03. high"],
  low: (data) => data?.["04. low"],
  price: (data) => data?.["05. price"],
  volume: (data) => data?.["06. volume"],
  latestTradingDay: (data) => data?.["07. latest trading day"],
  previousClose: (data) => data?.["08. previous close"],
  change: (data) => data?.["09. change"],
  changePercent: (data) => data?.["10. change percent"],
};
