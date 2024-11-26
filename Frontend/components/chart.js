import dynamic from "next/dynamic";
import React, { useState } from "react";

const btnTag = ["1m", "5m", "15m", "30m", "1h", "2h", "4h", "12h", "24h"];
// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PriceChart = () => {
  const [btnStatus, setBtnStatus] = useState(0);

  const chartOptions = {
    chart: {
      id: "basic-area",
    },
    xaxis: {
      categories: ["10s", "20s", "30s", "40s", "50s"],
    },
    title: {
      text: "",
      align: "center",
    },
    stroke: {
      curve: "straight",
      width: "1px",
      color: "#00BDDD",
    },
    grid: {
      borderColor: "#1F1F1F",
      opacity: 0.5,

      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true, // Show y-axis grid lines
          width: "1px", // Set width of y-axis grid lines
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0,
        gradientToColors: ["rgba(5, 5, 5, 0)"], // End color (transparent)
        stops: [11, 49], // Match gradient stops
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0,
        colorStops: [
          {
            offset: 0,
            color: "#58B9FF",
            opacity: 1,
          },
          {
            offset: 49,
            color: "rgba(5, 5, 5, 0)",
            opacity: 0,
          },
        ],
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
  };

  const chartSeries = [
    {
      name: "Price",
      data: [30, 40, 45, 50, 49, 43, 36, 34, 46, 32, 47, 32, 32, 45],
      color: "#00BDDD",
    },
  ];

  return (
    <div className="max-w-[1554px] mx-auto px-[20px] ">
      <div className="text-center text-white pb-10 text-[40px] font-bold">
        Price chart
      </div>
      <div className="flex gap-[11px] ">
        {btnTag.map((item, index) => (
          <button
            key={index}
            className={`lg:w-[89px] w-[70px] h-[40px] lg:h-[56px] border-[1px] border-[#3F717A] itemsdetail_page_msmallfont lg:text-[32px] md:text-[24px] sm:text-[16px] text-[12px] leading-[40.96px] text-[#FFFFFF] rounded-[6px] ${
              btnStatus === index ? "bg-[#3F717A]" : ""
            }`}
            onClick={() => setBtnStatus(index)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="bg-[#131313] mt-[23px]">
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="area" // Ensure this is "area" for gradient fills to apply
          height={350}
        />
      </div>
    </div>
  );
};

export default PriceChart;
