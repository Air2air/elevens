import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { ReportProps } from "./interface";

const EChart = (props: ReportProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState([] as any[]);

  const requestAPI = props.baseUrl + props.params + props.resultLimit;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(requestAPI);
      const json = await result.json();
      setData(
        json.results.map((item) => ({
          term: item.term,
          time: item.time,
          count: item.count,
        }))
      );
    };

    fetchData();
  }, []);


  const labelData = data.map((item) => item.time);
  const seriesData = data.map((item) => item.count);

  const options = {
    grid: { top: 10, right: 8, bottom: 20, left: 80, containLabel: false },
    xAxis: {
      data: labelData,
      type: props.horizontal ? "value" : "category",
      inverse: false,
    },
    yAxis: {
      type: props.horizontal ? "category" : "value",
    },
    series: [
      {
        data: seriesData,
        type: props.chartType,
        smooth: true,
        itemStyle: {
          color: props.seriesColor,
        },
        encode: {
          // Map the "amount" column to X axis.
          x: 'count',
          // Map the "product" column to Y axis
          y: 'term'
        }
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return <ReactECharts option={options} />;
};

export default EChart;
