import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Nov", value: 1000 },
  { name: "Dec", value: 1000 },
  { name: "Jan", value: 3000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 3000 },
  { name: "Apr", value: 4000 },
  { name: "May", value: 6000 },
  { name: "Jun", value: 6000 },
  { name: "Jul", value: 4500 },
  { name: "Aug", value: 4500 },
  { name: "Sep", value: 3000 },
  { name: "Oct", value: 3000 },
];

export const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis
          dataKey="name"
          tick={{ fill: "#CBC6D7" }}
          fontFamily="Roboto"
          tickLine={false}
        />
        <YAxis
          type="number"
          domain={[0, 5000]}
          ticks={[0, 5000]}
          tick={{ fill: "#CBC6D7" }}
          fontFamily="Roboto"
          axisLine={false}
          tickLine={false}
        />

        <Tooltip />
        <ReferenceLine y={5000} stroke="#EEEAFC" />

        <Line
          type="monotone"
          dataKey="value"
          stroke="#696CFF"
          style={{ strokeWidth: 3 }}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
