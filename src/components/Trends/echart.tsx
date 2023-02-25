import ReactECharts from "echarts-for-react";
import { FONT_FAMILY_CONDENSED } from "styles/Text";

const EChart = (props) => {
  const options = {
    grid: {
      top: 25,
      right: 5,
      bottom: 40,
      left: 5,
      show: false,
    },
    xAxis: {
      show: true,
      type: "category",
      data: props.chartData.map((item) => item.key),
      name: props.chartData.xAxisName,
      axisLabel: {
        fontFamily: FONT_FAMILY_CONDENSED,
        fontSize: 17,
        color: "rgba(255,255,255,1)",
        location: "top",
        padding: [8,0,0,0]
      },
      axisLine: {
        show: false, // Hide full Line
      },
      axisTick: {
        show: false, // Hide full Line
      },
    },
    yAxis: {
      nameRotate: 90,
      show: false,
      nameLocation: "middle",
      nameGap: 40,
      type: "value",
      name: "Market Cap (USD)",
      nameTextStyle: {
        fontFamily: FONT_FAMILY_CONDENSED,
        fontSize: 19,
        color: "rgba(255,255,255,0.8)",
      },
      axisLabel: {
        fontFamily: FONT_FAMILY_CONDENSED,
        fontSize: 16,
        color: "rgba(255,255,255,0.8)",
      },
      axisLine: {
        show: false, // Hide full Line
      },
    },
    series: [
      {
        data: props.chartData.map((item) => item.value),
        type: "bar",
        smooth: true,
        label: {
          fontFamily: FONT_FAMILY_CONDENSED,
          fontSize: 17,
          show: true,
          position: "inside",
          shadowOffsetX: 20,
        },
        showBackground: true,
        backgroundStyle: {
          color: "rgba(255, 255, 255, 0.05)",
        },
      },
    ],
    tooltip: {
      show: false,
      trigger: "axis",
    },
  };

  return (
    <ReactECharts option={options} style={{ height: "200px", width: "100%" }} />
  );
};

export default EChart;
