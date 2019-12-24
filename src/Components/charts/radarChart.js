/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

const RadarChart = props => {
  const canvasRef = useRef(null);
  useEffect(() => {
    new Chart(canvasRef.current, {
      type: "radar",
      data: {
        labels: props.data.map(d => d.text),
        datasets: [
          {
            data: props.data.map(d => d.selectedByRespondents),
            backgroundColor: "rgba(255, 110, 90, 0.4)",
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: props.title,
          fontSize: 16
        },
        animation: {
          animateScale: false,
          animateRotate: false
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
