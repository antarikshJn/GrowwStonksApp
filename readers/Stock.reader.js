export default {
  ticker: (data) => data?.ticker,
  price: (data) => data?.price,
  change_amount: (data) => data?.change_amount,
  change_percentage: (data) => data?.change_percentage,
  volume: (data) => data?.volume,
};
