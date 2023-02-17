// src/App.js
import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import { faker } from "@faker-js/faker";

export function Echart7() {
  const [randon, setRandon] = useState(0);

  const ramdomNumbers = () => {
    setRandon(faker.datatype.number(100));
  };

  setTimeout(ramdomNumbers, 5000);

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  console.log(faker.datatype.float({ min: 0, max: 1 }));

  const option = {
    series: [
      {
        type: "gauge",
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.3, faker.color.rgb()],
              [0.7, faker.color.rgb()],
              [1, faker.color.rgb()],
            ],
          },
        },
        pointer: {
          itemStyle: {
            color: "inherit",
          },
        },
        axisTick: {
          distance: -30,
          length: 8,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        splitLine: {
          distance: -30,
          length: 30,
          lineStyle: {
            color: "#fff",
            width: 5,
          },
        },
        axisLabel: {
          color: "inherit",
          distance: 35,
          fontSize: 15,
        },
        detail: {
          valueAnimation: true,
          formatter: "{value} km/h",
          color: "inherit",
        },
        data: [
          {
            value: faker.datatype.number(100),
          },
        ],
      },
    ],
  };
  return <ReactEcharts option={option} />;
}
