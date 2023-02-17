import React, { useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function Chartjs4() {
  const [randon, setRandon] = useState(0);

  const ramdomNumbers = () => {
    setRandon(faker.datatype.number(100));
  };

  setTimeout(ramdomNumbers, 5000);

  const labels = [
    faker.company.bsNoun(),
    faker.company.bsNoun(),
    faker.company.bsNoun(),
    faker.company.bsNoun(),
    faker.company.bsNoun(),
    faker.company.bsNoun(),
  ];
  const data = {
    labels,
    datasets: [
      {
        label: faker.company.bsNoun(),
        data: labels.map(() => faker.datatype.number(100)),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 5,
      },
      {
        label: faker.company.bsNoun(),
        data: labels.map(() => faker.datatype.number(100)),
        borderColor: "rgba(0, 255, 13, 1)",
        backgroundColor: "rgba(0, 255, 13, 0.2)",
        borderWidth: 5,
      },
      {
        label: faker.company.bsNoun(),
        data: labels.map(() => faker.datatype.number(100)),
        borderColor: "rgba(19, 0, 255, 1)",
        backgroundColor: "rgba(19, 0, 255, 0.2)",
        borderWidth: 6,
        borderDash: [3],
        hoverBackgroundColor: "#000000",
        hoverBorderColor: "red",
        hoverBorderWidth: 10,
      },
      {
        label: faker.company.bsNoun(),
        data: labels.map(() => faker.datatype.number(100)),
        borderColor: "rgba(251, 255, 0, 1)",
        backgroundColor: "rgba(251, 255, 0, 0.2)",
        borderWidth: 5,
      },
    ],
  };

  return <Radar data={data} />;
}
