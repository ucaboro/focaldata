/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import Chart from "chart.js";
import { splitLongString } from "../../constants/utils";

const RadarChart = props => {
  const canvasRef = useRef(null);
  const { data, color, title } = props;
  useEffect(() => {
    new Chart(canvasRef.current, {
      type: "radar",
      data: {
        labels: data.map(d => d.text),
        datasets: [
          {
            data: data.map(d => d.selectedByRespondents),
            backgroundColor: color,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: splitLongString(title),
          fontSize: 16,
          padding: 15
        },
        animation: {
          duration: 0
        },
        legend: {
          display: false,
          position: "right",
          labels: {
            boxWidth: 30
          }
        },
        tooltips: {
          enabled: true,
          callbacks: {
            label: (tooltipItem, data) =>
              `${data.labels[tooltipItem.index]}: ${
                data.datasets[0].data[tooltipItem.index]
              }%`
          }
        },
        scale: {
          angleLines: {
            display: false
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 30
          }
        }
      }
    });
  }, []);

  return <canvas ref={canvasRef} />;
};

export default RadarChart;
