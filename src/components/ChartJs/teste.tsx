import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Chartjs() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number(100)),
        borderColor: faker.color.rgb(),
        backgroundColor: faker.color.rgb(),
        borderWidth: 5,
        hoverBorderColor: faker.color.rgb(),
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number(100)),
        borderColor: faker.color.rgb(),
        backgroundColor: faker.color.rgb(),
        borderWidth: 5,
      },
    ],
  };

  const [randon, setRandon] = useState(0);

  const ramdomNumbers = () => {
    setRandon(faker.datatype.number(100));
  };

  setTimeout(ramdomNumbers, 5000);

  return (
    <Line
      options={{
        responsive: true,
        layout: {
          padding: 0,
        },
        animations: {
          y: {
            easing: "easeInOutElastic",
          },
          radius: {
            duration: 400,
            easing: "linear",
            loop: (context) => context.active,
          },
        },

        plugins: {
          legend: {
            position: "top" as const,
            labels: {
              font: {
                family: "Inter",
                size: 15,
              },
            },
          },
          title: {
            display: true,
            text: "Chart.js Line Chart",
            font: {
              family: "Roboto",
              size: 15,
            },
          },
        },
        scales: {
          x: {
            border: { dash: [4, 4] },
            grid: {
              // color: "#f3f4f6",
              display: true,
              tickBorderDash: [10],
              tickBorderDashOffset: 10,
              drawTicks: true,
              lineWidth: 1,
            },
            ticks: {
              color: "white",
              font: {
                family: "Anton",
                size: 15,
              },
            },
          },
          y: {
            border: { dash: [4, 4] },
            grid: {
              // color: "#f3f4f6",

              display: true,
              tickBorderDash: [10],
              tickBorderDashOffset: 10,
              drawTicks: true,
              lineWidth: 1,
            },
            ticks: {
              color: "white",
              font: {
                family: "Anton",
                size: 15,
              },
            },
          },
        },
      }}
      data={data}
    />
  );
}
