// src/App.js
import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import { faker } from "@faker-js/faker";

export function Echart2() {
  const [randon, setRandon] = useState(0);

  const ramdomNumbers = () => {
    setRandon(faker.datatype.number(100));
  };

  setTimeout(ramdomNumbers, 5000);
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const option = {
    color: [
      faker.color.rgb(),
      faker.color.rgb(),
      faker.color.rgb(),
      faker.color.rgb(),
      faker.color.rgb(),
      faker.color.rgb(),
      faker.color.rgb(),
      faker.color.rgb(),
    ],
    xAxis: {
      type: "category",
      data: labels,
      axisTick: {
        length: 6,
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function (idx: any) {
          return Math.random() * 200;
        },
        data: labels.map(() => faker.datatype.number(100)),
        type: "line",
        areaStyle: {
          color: faker.color.rgb(),
          opacity: 0.5,
        },
      },
      {
        data: labels.map(() => faker.datatype.number(100)),
        type: "bar",
      },
    ],
  };
  return <ReactEcharts option={option} />;
}
