// import { ResponsiveBar } from "@nivo/bar";
import { useState, useEffect } from "react";

interface TimeSeriesQuery {
  baseUrl: string;
  parameters: string;
  resultLimit?: string;
}

interface TimeSeriesResult {
  time: string;
  count: string;
}

const BarChart = (props: TimeSeriesQuery) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const requestAPI = props.baseUrl + props.parameters + props.resultLimit;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetch(requestAPI)
        .then((response) => response.json())
        .then((json) => json.results);
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div style={{ height: "300px", width: "800px", background: "#ccc" }}>

          </div>
          <ul>
            {data.map((item: TimeSeriesResult, index) => (
              <li key={index}>
                {item.time}, {item.count}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default BarChart;
