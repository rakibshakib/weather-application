import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";

const LineChart = ({ dayData = {} }) => {
//   const [updateData, setUpdatedData] = useState({});
//   const data = {
//     labels: ["January", "February", "March", "April", "May"],
//     datasets: [
//       {
//         label: "Maximum",
//         data: [22, 23, 22, 24, 22],
//         borderColor: "orange",
//         backgroundColor: "orange",
//         fill: false,
//         tension: 0.1,
//       },
//       {
//         label: "Minimum",
//         data: [23, 22, 21, 25, 22],
//         borderColor: "gray",
//         backgroundColor: "gray",
//         fill: false,
//         tension: 0.1,
//       },
//     ],
//   };
  const config = {
    type: "line",
    data: dayData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
      },
    },
  };
//   useEffect(() => {
//     const label = [];
//     const maxData = [];
//     const minData = [];
//     console.log(dayDate);
//     dayDate.forEach((item) => {
//       label.push(item?.dt_txt?.split(" ")?.[1]);
//       maxData.push(item?.main?.temp_max);
//       minData.push(item?.main?.temp_min);
//     });
//     const data = {
//       labels: label,
//       datasets: [
//         {
//           label: "Maximum",
//           data: maxData,
//           borderColor: "orange",
//           backgroundColor: "orange",
//           fill: false,
//           tension: 0.1,
//         },
//         {
//           label: "Minimum",
//           data: minData,
//           borderColor: "gray",
//           backgroundColor: "gray",
//           fill: false,
//           tension: 0.1,
//         },
//       ],
//     };
//     setUpdatedData(data);
//   }, [dayDate]);
  return (
    <>
      {" "}
      <Line data={dayData} config={config} />
    </>
  );
};
export default LineChart;
