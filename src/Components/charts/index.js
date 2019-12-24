/* eslint-disable no-unreachable */
import React from "react";
import PieChart from "../charts/pieChart";
import RadarChart from "../charts/radarChart";
import ChartCard from "../../Components/chartCard";

const ChartWrapper = props => {
  switch (props.type) {
    case "pie":
      return (
        <ChartCard>
          <PieChart
            data={props.data.answerOptions}
            title={props.data.questionTitle}
            colors={["#35477d", "#6c5b7b", "#c06c84", "#FF6E5A", "#f67280"]}
          />
        </ChartCard>
      );
      break;

    case "radar":
      return (
        <ChartCard>
          <RadarChart
            data={props.data.answerOptions}
            title={props.data.questionTitle}
            color="#70CAD1"
          />
        </ChartCard>
      );
      break;

    case "bar":
      //any other type implementation
      break;

    default:
      return (
        <ChartCard>
          <PieChart
            data={props.data.answerOptions}
            title={props.data.questionTitle}
            colors={["#35477d", "#6c5b7b", "#c06c84", "#FF6E5A", "#f67280"]}
          />
        </ChartCard>
      );
      break;
  }
};

export default ChartWrapper;
