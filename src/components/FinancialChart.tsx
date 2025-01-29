import React from "react";
import { type FinancialMetrics } from "@/types/financial";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Card } from "./ui/card";

interface FinancialChartProps {
  metrics: FinancialMetrics;
}

const FinancialChart: React.FC<FinancialChartProps> = ({ metrics }) => {
  const data = [
    {
      name: "Revenue",
      value: metrics.revenue,
    },
    {
      name: "Expenses",
      value: metrics.expenses,
    },
    {
      name: "Assets",
      value: metrics.assets,
    },
    {
      name: "Liabilities",
      value: metrics.liabilities,
    },
    {
      name: "Cash Flow",
      value: metrics.cashFlow,
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Financial Metrics Overview</h2>
      <div className="w-full h-[300px]">
        <LineChart
          width={600}
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </Card>
  );
};

export default FinancialChart;