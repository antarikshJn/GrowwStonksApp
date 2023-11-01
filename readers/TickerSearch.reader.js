export default {
  symbol: (data) => data?.["1. symbol"],
  name: (data) => data?.["2. name"],
  type: (data) => data?.["3. type"],
  region: (data) => data?.["4. region"],
  marketOpen: (data) => data?.["5. marketOpen"],
  marketClose: (data) => data?.["6. marketClose"],
  timezone: (data) => data?.["7. timezone"],
  currency: (data) => data?.["8. currency"],
  matchScore: (data) => data?.["9. matchScore"],
};
