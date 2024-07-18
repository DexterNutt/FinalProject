import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Nov", value: 1000 },
  { name: "Dec", value: 1000 },
  { name: "Jan", value: 3000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 3000 },
  { name: "Apr", value: 5000 },
  { name: "May", value: 7000 },
  { name: "Jun", value: 7000 },
  { name: "Jul", value: 4500 },
  { name: "Aug", value: 4500 },
  { name: "Sep", value: 3000 },
  { name: "Oct", value: 3000 },
];

export const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <ReferenceLine y={5000} stroke="#EEEAFC" />
        <XAxis dataKey="name" tick={{ fill: "#CBC6D7" }} fontFamily="Roboto" />
        <YAxis
          ticks={[0, 5000]}
          tick={{ fill: "#CBC6D7" }}
          fontFamily="Roboto"
        />
        <Line type="monotone" dataKey="value" stroke="#696CFF" />
      </LineChart>
    </ResponsiveContainer>
  );
};
