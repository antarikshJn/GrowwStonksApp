import React, { useCallback, useMemo, useState } from "react";

import Loader from "@/components/common/Loader";
import { useGetTimeSeriesDataQuery } from "@/features/services/timeseriesApi";

import StockLineChart from "./StockLineChart";
import Durations from "./Durations";
import {
  TIME_SERIES_DURATION,
  TIME_SERIES_DURATION_VS_CONFIG,
} from "./TimeSeries.constant";
import { TIME_SERIES_DURATION_VS_TRANSFORMED_DATA } from "./TimeSeries.helper";

import styles from "./TimeSeriesChart.module.css";

const TimeSeriesChart = () => {
  const [activeDuration, setActiveDuration] = useState(
    TIME_SERIES_DURATION.ONE_DAY
  );
  const { isFetching, data } = useGetTimeSeriesDataQuery({
    duration: activeDuration,
    ...TIME_SERIES_DURATION_VS_CONFIG[activeDuration],
  });
  const timeseriesData = useMemo(
    () => TIME_SERIES_DURATION_VS_TRANSFORMED_DATA[activeDuration](data),
    [data]
  );

  const handleDurationChange = useCallback((duration) => {
    setActiveDuration(duration);
  }, []);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <div className={styles.timeseriesChartContainer}>
      <StockLineChart data={timeseriesData} />
      <Durations
        config={TIME_SERIES_DURATION_VS_CONFIG}
        onChange={handleDurationChange}
        activeDuration={activeDuration}
      />
    </div>
  );
};

export default TimeSeriesChart;
