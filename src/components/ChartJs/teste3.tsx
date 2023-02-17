import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
  Filler,
  Legend
);

export function Chartjs3() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const [randon, setRandon] = useState(0);

  const ramdomNumbers = () => {
    setRandon(faker.datatype.number(100));
  };

  setTimeout(ramdomNumbers, 2000);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number(100)),
        borderColor: faker.color.rgb(),
        backgroundColor: `rgba(${faker.datatype.number(
          255
        )},${faker.datatype.number(255)},${faker.datatype.number(255)},0.2`,
      },
    ],
  };
  return <Line options={options} data={data} />;
}
