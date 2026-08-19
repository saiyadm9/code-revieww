'use client'
import { useState } from "react"
import ReactApexChart from "react-apexcharts"

export default function SparklineGraph() {
  const [state, setState] = useState({
    series: [
      {
        data: [12, 9, 14, 10, 18, 15, 19, 23, 21, 87, 60],
      },
    ],
    options: {
      chart: {
        type: "area",
        sparkline: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },
      },

      stroke: {
        curve: "smooth",
        width: 3,
      },

      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.50,
          opacityTo: 0.20,
        },
      },

      colors: ["#22c55e"],

      tooltip: {
        enabled: false,
      },
    },
  })

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={96}
      />
    </div>
  )
}