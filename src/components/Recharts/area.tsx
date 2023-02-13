import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { FONT_FAMILY_CONDENSED } from "styles/Constants";
import { formatDate } from "utils/formatDate";

interface AreaQuery {
  dataKey?: string;
  baseUrl: string;
  parameters: string;
  resultLimit?: string;
  textColor?: string;
  chartColor?: string;
}

interface AreaResult {
  dataKey?: string;
  term?: string;
  time?: string;
  count: string;
}

const AreaChartComponent = (props: AreaQuery) => {
  const [data, setData] = useState([]);

  const requestAPI = props.baseUrl + props.parameters + props.resultLimit;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(requestAPI);
      const json = await result.json();
      setData(
        json.results.map((item: AreaResult) => ({
          term: item.term,
          time: item.time,
          count: item.count,
        }))
      );
    };

    fetchData();
  }, []);

  //detect whether type of pros.datakey is a number

  return (
    <ResponsiveContainer width="100%">
      <AreaChart
        data={data}
        margin={{ top: 30, right: 0, left: 10, bottom: 20 }}
      >
        <defs>
          <linearGradient id="fillConfig" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={props.chartColor} stopOpacity={1} />
            <stop offset="85%" stopColor={props.chartColor} stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey={props.dataKey}
          tick={{ fill: props.textColor, fontFamily: FONT_FAMILY_CONDENSED }}
          strokeWidth={0}
          // tickFormatter={formatDate}
          tickFormatter={props.dataKey === "time" ? formatDate : props.dataKey}
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
          fill={props.chartColor} //"url(#fillConfig)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
