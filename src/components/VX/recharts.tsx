import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TimeSeriesChart: React.FC = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch('https://api.fda.gov/animalandveterinary/event.json?count=original_receive_date');
        const json = await result.json();
        setData(json.results.map(item => ({ name: item.time, count: item.count })));
      };
  
      fetchData();
    }, []);
  
    return (
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
      </LineChart>
    );
  };
  
  export default TimeSeriesChart;
  