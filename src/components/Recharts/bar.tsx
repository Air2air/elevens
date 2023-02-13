import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

interface BarQuery {
  dataKey?: string;
  baseUrl: string;
  parameters: string;
  resultLimit?: string;
  textColor?: string;
  chartColor?: string;
}
interface BarResult {
  dataKey?: string;
  term?: string;
  time?: string;
  count?: string;
}
const BarChart = (props: BarQuery) => {
  const [data, setData] = useState<BarResult[]>([]);

  const requestAPI = props.baseUrl + props.parameters + props.resultLimit;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(requestAPI);
      const json = await result.json();
      setData(
        json.results.map((item: BarResult) => ({
          term: item.term,
          time: item.time,
          count: item.count,
        }))
      );
    };

    fetchData();
  }, []);


  const seriesData = data.map((item) => item.count);
  const labelData = data.map((item) => item.term);

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 40 },
    xAxis: {
      type: "category",
      data: labelData, //['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: seriesData, //[820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return <ReactECharts option={options} />;
};

export default BarChart;
