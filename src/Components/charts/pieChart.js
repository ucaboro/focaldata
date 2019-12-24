/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

const PieChart = props => {
  const canvasRef = useRef(null);
  useEffect(() => {
    new Chart(canvasRef.current, {
      type: "pie",
      data: {
        labels: props.data.map(d => d.text),
        datasets: [
          {
            data: props.data.map(d => d.selectedByRespondents),
            backgroundColor: props.colors
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
