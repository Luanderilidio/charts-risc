// src/App.js
import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import { faker } from "@faker-js/faker";

export function Echart5() {
  const [randon, setRandon] = useState(0);

  const ramdomNumbers = () => {
    setRandon(faker.datatype.number(100));
  };

  setTimeout(ramdomNumbers, 5000);

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  console.log(faker.datatype.float({ min: 0, max: 1 }));

  const gaugeData = [
    {
      value: faker.datatype.number(100),
      name: "Perfect",
      title: {
        offsetCenter: ["0%", "-50%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "-33%"],
      },
    },
    {
      value: faker.datatype.number(100),
      name: "Good",
      title: {
        offsetCenter: ["0%", "-10%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "7%"],
      },
    },
    {
      value: faker.datatype.number(100),
      name: "Commonly",
      title: {
        offsetCenter: ["0%", "30%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "47%"],
      },
    },
  ];

  const option = {
    color: [faker.color.rgb(), faker.color.rgb(), faker.color.rgb()],
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: 1,
            borderColor: "#000000",
          },
        },
        axisLine: {
          lineStyle: {
            width: 40,
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 50,
        },
        data: gaugeData,
        title: {
          fontSize: 14,
        },
        detail: {
          width: 30,
          height: 14,
          fontSize: 14,
          color: "inherit",
          borderColor: "inherit",
          borderRadius: 20,
          borderWidth: 1,
          formatter: "{value}%",
        },
      },
    ],
  };
  return <ReactEcharts option={option} />;
}
