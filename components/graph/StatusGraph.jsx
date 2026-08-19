'use client'
import { useState } from "react"
import ReactApexChart from "react-apexcharts"

export default function StatusGraph() {
  const [state, setState] = useState({
    series: [
      {
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 100,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },

      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  })

  return (
    <div className="">
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={100}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}