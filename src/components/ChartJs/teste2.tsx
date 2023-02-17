import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Chartjs2() {
  let delayed: any;

  const options = {
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context: any) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },

    scales: {
      x: {
        ticks: {
          color: "white",
          font: {
            family: "Anton",
            size: 15,
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
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

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number(100)),
        backgroundColor: faker.color.rgb(),
        borderRadius: 5,
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number(100)),
        backgroundColor: faker.color.rgb(),
        borderRadius: 5,
      },
      {
        label: "Dataset 3",
        data: labels.map(() => faker.datatype.number(100)),
        backgroundColor: faker.color.rgb(),
        borderRadius: 5,
      },
    ],
  };
  const [randon, setRandon] = useState(0);

  const ramdomNumbers = () => {
    setRandon(faker.datatype.number(100));
  };

  setTimeout(ramdomNumbers, 5000);
  return <Bar options={options} data={data} />;
}
