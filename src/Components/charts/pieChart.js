/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import Chart from "chart.js";
import { splitLongString } from "../../constants/utils";

const PieChart = props => {
  const canvasRef = useRef(null);
  const { data, colors, title } = props;
  useEffect(() => {
    new Chart(canvasRef.current, {
      type: "pie",
      data: {
        labels: data.map(d => d.text),
        datasets: [
          {
            data: data.map(d => d.selectedByRespondents),
            backgroundColor: colors
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
          animateScale: false,
          animateRotate: false
        },
        legend: {
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
        }
      }
    });
  }, []);

  return <canvas ref={canvasRef} />;
};

export default PieChart;
