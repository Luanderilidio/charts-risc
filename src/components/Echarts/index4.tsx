// src/App.js
import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

import { faker } from "@faker-js/faker";

export function Echart4() {
  const [randon, setRandon] = useState(0);

  const ramdomNumbers = () => {
    setRandon(faker.datatype.number(100));
  };

  setTimeout(ramdomNumbers, 5000);
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const option = {
    xAxis: {
      axisLabel: {
        formatter: "{value} kg",
        align: "center",
      },
    },
    yAxis: {
      axisLabel: {
        formatter: "{value} ¥",
        align: "center",
      },
    },
    legend: {
      top: "bottom",
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "Nightingale Chart",
        type: "pie",
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
        radius: [50, 250],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },

        data: [
          { value: faker.datatype.number(100), name: faker.company.bsNoun() },
          { value: faker.datatype.number(100), name: faker.company.bsNoun() },
          { value: faker.datatype.number(100), name: faker.company.bsNoun() },
          { value: faker.datatype.number(100), name: faker.company.bsNoun() },
          { value: faker.datatype.number(100), name: faker.company.bsNoun() },
          { value: faker.datatype.number(100), name: faker.company.bsNoun() },
          { value: faker.datatype.number(100), name: faker.company.bsNoun() },
          { value: faker.datatype.number(100), name: faker.company.bsNoun() },
        ],
      },
    ],
  };

  return <ReactEcharts style={{ height: "600px" }} option={option} />;
}
