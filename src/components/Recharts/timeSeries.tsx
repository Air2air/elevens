import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { FONT_FAMILY_CONDENSED } from "styles/Constants";
import { formatDate } from "utils/formatDate";

interface TimeSeriesQuery {
  baseUrl: string;
  parameters: string;
  resultLimit?: string;
  textColor?: string;
  chartColor?: string;
}

interface TimeSeriesResult {
  time: string;
  count: string;
}

const TimeSeriesChart = (props: TimeSeriesQuery) => {
  const [data, setData] = useState([]);

  const requestAPI = props.baseUrl + props.parameters + props.resultLimit;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(requestAPI);
      const json = await result.json();
      setData(
        json.results.map((item: TimeSeriesResult) => ({
          time: item.time,
          count: item.count,
        }))
      );
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%">
      <AreaChart
        data={data}
        margin={{ top: 30, right: 0, left: 0, bottom: 20 }}
      >
        <defs>
          <linearGradient id="fillConfig" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={props.chartColor} stopOpacity={1} />
            <stop offset="85%" stopColor={props.chartColor} stopOpacity={.2} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="time"
          tick={{ fill: props.textColor, fontFamily: FONT_FAMILY_CONDENSED }}
          strokeWidth={0}
          tickFormatter={formatDate}
        />
        <YAxis
          tick={{ fill: props.textColor, fontFamily: FONT_FAMILY_CONDENSED }}
          strokeWidth={0}
        />
        <Area
          type="monotone"
          dataKey="count"
          strokeWidth={0}
          fillOpacity={1}
          fill={props.chartColor}//"url(#fillConfig)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TimeSeriesChart;
