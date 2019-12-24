/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

const BarChart = props => {
  const canvasRef = useRef(null);
  useEffect(() => {
    new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: props.data.map(d => d.text),
        datasets: [
          {
            label: props.title,
            data: props.data.map(d => d.selectedByRespondents),
            backgroundColor: props.color
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100
              }
            }
          ]
        }
      }
    });
  }, []);

  return <canvas ref={canvasRef} />;
};

export default BarChart;
