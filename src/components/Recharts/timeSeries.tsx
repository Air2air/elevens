import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { FONT_FAMILY_CONDENSED } from "styles/Constants";

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

// format the date for props.time using date-fns.format

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

  function formatDate(dateStr: string): string {
    dateStr = dateStr as string;
    const num = parseInt(dateStr, 10);
    const year = num.toString().slice(0, 4);
    const month = parseInt(num.toString().slice(4, 6), 10) - 1;
    const day = num.toString().slice(6, 8);
    const date = new Date(parseInt(year, 10), month, parseInt(day, 10));
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
  }

  return (
    <ResponsiveContainer width="100%">
      <AreaChart
        data={data}
        margin={{ top: 30, right: 0, left: 0, bottom: 20 }}
      >
        <defs>
          <linearGradient id="fillConfig" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={props.chartColor} stopOpacity={1} />
            <stop offset="95%" stopColor={props.chartColor} stopOpacity={0.2} />
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
          fill="url(#fillConfig)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TimeSeriesChart;
