import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { StyledPlot } from "./Plot.styles";

const data = [
  {
    name: "Page A",
    price: 2400,
  },
  {
    name: "Page B",
    price: 2210,
  },
  {
    name: "Page C",
    price: 2290,
  },
  {
    name: "Page D",
    price: 2000,
  },
  {
    name: "Page E",
    price: 2181,
  },
  {
    name: "Page F",
    price: 2500,
  },
  {
    name: "Page G",
    price: 2100,
  },
];

interface PlotProps {}

export const Plot: React.FC<PlotProps> = ({ ...otherProps }) => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" stroke="white" />
      <YAxis stroke="white" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="price"
        stroke="#0ac18e"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default Plot;
