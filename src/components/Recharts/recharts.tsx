import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

interface TimeSeriesQuery {
  baseUrl: string;
  parameters: string;
  resultLimit?: string;
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
        json.results.map((item:TimeSeriesResult) => ({ name: item.time, count: item.count }))
      );
    };

    fetchData();
  }, []);

  return (
    <div style={{width: '100%', height: '500px'}}>
    <ResponsiveContainer width={700} height="80%">
    <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="count" stroke="#8884d8" />
    </LineChart>
    </ResponsiveContainer></div>
  );
};

export default TimeSeriesChart;
