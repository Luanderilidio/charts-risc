// src/App.js
import React from "react";
import ReactEcharts from "echarts-for-react";
import { Echart1 } from "../../components/Echarts/index1";
import { Echart2 } from "../../components/Echarts/index2";
import { Echart3 } from "../../components/Echarts/index3";
import { Echart4 } from "../../components/Echarts/index4";
import { Echart5 } from "../../components/Echarts/index5";
import { Echart6 } from "../../components/Echarts/index6";
import { Echart7 } from "../../components/Echarts/index7";
export function Home2() {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };
  return (
    <div className="flex flex-col">
      <p className="mt-10 text-center font-Anton text-3xl">e-CHART</p>
      <div className="grid grid-cols-4">
        <div className="col-span-4 sm:col-span-1">
          <Echart1 />
        </div>
        <div className="col-span-4 sm:col-span-1">
          <Echart5 />
        </div>
        <div className="col-span-4 sm:col-span-1">
          <Echart6 />
        </div>
        <div className="col-span-4 sm:col-span-1">
          <Echart7 />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-4 sm:col-span-1">
          <Echart2 />
        </div>
        <div className="col-span-4 sm:col-span-1">
          <Echart3 />
        </div>
      </div>
      <Echart4 />
    </div>
  );
}
