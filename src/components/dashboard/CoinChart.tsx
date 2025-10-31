"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface CoinChartProps {
  data: { date: string; price: number }[];
  coinName: string;
}

const CoinChart = ({ data, coinName }: CoinChartProps) => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis
            domain={["auto", "auto"]}
            tickFormatter={(value) => `$${value.toFixed(0)}`}
          />
          <Tooltip
            formatter={(value: number) => `$${value.toFixed(2)}`}
            labelStyle={{ color: "#888" }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#16a34a"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default CoinChart;
