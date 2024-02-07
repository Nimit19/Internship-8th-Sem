import React from "react";

import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {

  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)

  const maxVal = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxVal}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
