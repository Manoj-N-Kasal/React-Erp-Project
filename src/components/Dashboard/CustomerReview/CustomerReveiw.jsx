import React from "react";
import Chart from "react-apexcharts";
import './CustomerReveiw.css'

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2024-03-08T00:00:00.000Z",
          "2024-03-09T01:30:00.000Z",
          "2024-03-10T02:30:00.000Z",
          "2024-03-11T03:30:00.000Z",
          "2024-03-12T04:30:00.000Z",
          "2024-03-13T05:30:00.000Z",
          "2024-03-14T06:30:00.000Z",
        ],
      
      },
      yaxis: {
        show: false
      },
      toolbar:{
        show: false
      }
    },
  };
  return <div className="CustomerReview" >
        <Chart options={data.options} series={data.series} type="area" />
  </div>;
};

export default CustomerReview;