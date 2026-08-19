"use client";

import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function MonthlyRequestGraph() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(
        document.documentElement.classList.contains("dark")
      );
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const series = [
    {
      name: "Cricket",
      data: [11, 32, 45, 32, 34, 52, 41, 36, 34, 22, 50, 45],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      width: 0,
    },

    colors: ["#02877D"],

    grid: {
      borderColor: isDark ? "#334155" : "#e5e7eb",
    },

    legend: {
      position: "top",
      horizontalAlign: "left",

      labels: {
        colors: isDark ? "#f8fafc" : "#334155",
      },
    },

    fill: {
      type: "gradient",

      gradient: {
        type: "vertical",
        shadeIntensity: 0.1,
        opacityFrom: 0.8,
        opacityTo: 0.5,
        stops: [0, 90, 100],
      },
    },

    xaxis: {
      type: "datetime",

      labels: {
        style: {
          colors: isDark ? "#94a3b8" : "#64748b",
        },
      },

      axisBorder: {
        color: isDark ? "#334155" : "#e5e7eb",
      },

      axisTicks: {
        color: isDark ? "#334155" : "#e5e7eb",
      },

      categories: [
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
        "2018-09-19T07:30:00.000Z",
        "2018-09-19T08:30:00.000Z",
        "2018-09-19T09:30:00.000Z",
        "2018-09-19T10:30:00.000Z",
        "2018-09-19T11:30:00.000Z",
        "2018-09-19T12:30:00.000Z",
      ],
    },

    yaxis: {
      labels: {
        style: {
          colors: isDark ? "#94a3b8" : "#64748b",
        },
      },
    },

    tooltip: {
      theme: isDark ? "dark" : "light",

      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div className="border border-border-gray rounded-lg bg-surface shadow-card">
      <h3 className="text-base p-4 pb-0">Monthly Request</h3>

      <div id="monthly-request-chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={320}
        />
      </div>
    </div>
  );
}