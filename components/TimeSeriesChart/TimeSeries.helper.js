import {
  TIME_SERIES_DURATION,
} from "./TimeSeries.constant";

const getTimeSeriesDataForOneDay = (data = []) => {
  return data
    .map((datapoint) => {
      const date = new Date(datapoint.timestamp);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return { ...datapoint, timestamp: `${hours}:${minutes}` };
    })
    .reverse();
};

const getTransformedData =
  (numOfPoints = 7) =>
  (data = []) => {
    const first30DataPoints = [];

    for (let i = 0; i < Math.min(data.length, numOfPoints); i++) {
      const dataPoint = data[i];
      const timestamp = new Date(dataPoint.timestamp);

      const formattedTimestamp = timestamp.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
      });

      const newDataPoint = {
        ...dataPoint,
        timestamp: formattedTimestamp,
      };

      first30DataPoints.push(newDataPoint);
    }

    return first30DataPoints.reverse();
  };
const getTimeSeriesDataForOneWeek = getTransformedData(7);

const getTimeSeriesDataForOneMonth = getTransformedData(30);
const getTimeSeriesDataForThreeMonth = getTransformedData(12);
const getTimeSeriesDataForOneYear = getTransformedData(12);

export const TIME_SERIES_DURATION_VS_TRANSFORMED_DATA = {
  [TIME_SERIES_DURATION.ONE_DAY]: getTimeSeriesDataForOneDay,
  [TIME_SERIES_DURATION.ONE_WEEK]: getTimeSeriesDataForOneWeek,
  [TIME_SERIES_DURATION.ONE_MONTH]: getTimeSeriesDataForOneMonth,
  [TIME_SERIES_DURATION.THREE_MONTH]: getTimeSeriesDataForThreeMonth,
  [TIME_SERIES_DURATION.ONE_YEAR]: getTimeSeriesDataForOneYear,
};
