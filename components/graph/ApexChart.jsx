"use client";

import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function ApexChart() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const options = {
    chart: {
      height: 350,
      type: "area",
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
      curve: "smooth",
      width: 3,
    },

    markers: {
      size: 3,
      strokeWidth: 0,
      hover: {
        size: 5,
      },
    },

    grid: {
      borderColor: isDark ? "#334155" : "#e5e7eb",
    },

    colors: ["#3b82f6", "#10b981"],

    legend: {
      position: "top",
      horizontalAlign: "left",
      labels: {
        colors: isDark ? "#f8fafc" : "#334155",
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
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
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

    fill: {
      type: "gradient",

      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
  };

  const series = [
    {
      name: "Football",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Cricket",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  return (
    <div className="col-span-1 xl:col-span-7 border border-border-gray rounded-lg bg-surface shadow-card">
      <h3 className="text-base p-4 pb-0">Request Overview</h3>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={320}
        />
      </div>
    </div>
  );
}