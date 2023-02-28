import ReactECharts from "echarts-for-react";
import { useState, useEffect } from "react";
import { BREAKPOINT, COLOR_CHART_BAR } from "styles/Constants";
import { FONT_FAMILY_CONDENSED } from "styles/Text";

const ChartSummary = ({ data }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const capAscending = [...data].sort((a, b) => a.cap - b.cap);

  //const cagrAscending = [...data].sort((a, b) => a.cagr - b.cagr);

  const chartDataSrc = capAscending;

  const options = {
    grid: {
      top: 0,
      right: 10,
      bottom: 30,
      left: 250,
      show: false,
    },
    xAxis: {
      type: "value",
      show: false,
      axisLabel: {
        fontFamily: FONT_FAMILY_CONDENSED,
        fontSize: 17,
        color: "rgba(255,255,255,1)",
        location: "inside",
        padding: [8, 0, 0, 0],
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "category",
      data: chartDataSrc.map((item) => item.title),
      nameLocation: "right",
      name: "",
      axisLabel: {
        fontFamily: FONT_FAMILY_CONDENSED,
        fontSize: 17,
        color: "rgba(255,255,255,0.8)",
        location: "inside",
        padding: [0, 0, 0, 0],
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    series: [
      {
        labelLine: false,
        name: "Market size (in billions of USD)",
        type: "bar",
        data: chartDataSrc.map((item) => item.cap),
        label: {
          fontFamily: FONT_FAMILY_CONDENSED,
          fontSize: 17,
          show: true,
          position: "inside",
        },
        showBackground: true,
        itemStyle: { color: COLOR_CHART_BAR },
        backgroundStyle: {
          color: "rgba(255, 255, 255, 0.05)",
        },
      },
    ],
  };

  return (
    <ReactECharts
      option={options}
      style={{
        padding: width > BREAKPOINT ? "10px 0" : "4px 0",
        height: "280px",
        width: "100%",
      }}
    />
  );
};

export default ChartSummary;
