// src/App.js
import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import { faker } from "@faker-js/faker";

export function Echart6() {
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
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 60,
        splitNumber: 12,
        itemStyle: {
          color: faker.color.rgb(),
        },
        progress: {
          show: true,
          width: 30,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            width: 30,
          },
        },
        axisTick: {
          distance: -45,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: "#000",
          },
        },
        splitLine: {
          distance: -52,
          length: 14,
          lineStyle: {
            width: 3,
            color: "#000",
          },
        },
        axisLabel: {
          distance: -20,
          color: "#999",
          fontSize: 20,
        },
        anchor: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          width: "60%",
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, "-15%"],
          fontSize: 60,
          fontWeight: "bolder",
          formatter: "{value} °C",
          color: faker.color.rgb(),
        },
        data: [
          {
            value: faker.datatype.number(60),
          },
        ],
      },
      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 60,
        itemStyle: {
          color: "#FD7347",
        },
        progress: {
          show: true,
          width: 8,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          show: false,
        },
        data: [
          {
            value: 20,
          },
        ],
      },
    ],
  };
  return <ReactEcharts option={option} />;
}
