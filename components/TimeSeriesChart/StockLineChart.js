import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  TIME_SERIES_KEYS,
  TIME_SERIES_KEYS_VS_LABEL,
} from "./TimeSeries.constant";

const LINE_CHART_HEIGHT = 400;

const StockLineChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={LINE_CHART_HEIGHT}>
      <LineChart
        data={data}
        margin={{
          top: 0,
          right: 10,
          left: 20,
          bottom: 20,
        }}
      >
        <Line
          type="monotone"
          dataKey={TIME_SERIES_KEYS.CLOSE}
          name={TIME_SERIES_KEYS_VS_LABEL[TIME_SERIES_KEYS.CLOSE]}
          stroke="#00b386"
          dot={false}
        />
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis
          dataKey="timestamp"
          color="#00b386"
          interval="preserveStartEnd"
          padding={{ left: 30, right: 30 }}
          label={{
            value: "Time",
            position: "insideBottomRight",
            offset: -8,
          }}
        />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
      </LineChart>
    </ResponsiveContainer>
  );
};

StockLineChart.propTypes = {
  data: PropTypes.array,
};

StockLineChart.defaultProps = {
  data: [],
};

export default StockLineChart;
