"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: [
    "May 22",
    "May 27",
    "Jun 1",
    "Jun 6",
    "Jun 11",
    "Jun 16",
    "Jun 21"
  ],
  datasets: [
    {
      label: "Cricket API",
      data: [120000, 22000, 18000, 26000, 19000, 21000, 18000],
      borderColor: "#22c55e",
      backgroundColor: "#22c55e",
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 5
    },
    {
      label: "Football API",
      data: [4000, 7000, 5000, 80500, 5200, 7600, 8000],
      borderColor: "#3b82f6",
      backgroundColor: "#3b82f6",
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 5
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,

  interaction: {
    mode: "index",
    intersect: false
  },

  plugins: {
    legend: {
      position: "top",
      align: "start",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 8,
        boxHeight: 8
      }
    },

    tooltip: {
      backgroundColor: "#111827",
      padding: 12,
      displayColors: true
    }
  },

  scales: {
    x: {
      grid: {
        display: false
      },
      border: {
        display: false
      }
    },

    y: {
      beginAtZero: true,

      ticks: {
        callback(value) {
          return value / 1000 + "K";
        }
      },

      border: {
        display: false
      },

      grid: {
        color: "#f1f5f9"
      }
    }
  }
};


export default function ChartCard(){
  return(
    <div className="bg-surface rounded-3xl p-4">
      <Line
        data={data}
        options={options}
      />
    </div>
  )
}


