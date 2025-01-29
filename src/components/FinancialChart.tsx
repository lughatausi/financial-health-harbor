import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { FinancialMetrics } from "@/pages/Index";

interface Props {
  metrics: FinancialMetrics;
}

export const FinancialChart = ({ metrics }: Props) => {
  const data = [
    {
      name: 'Revenue',
      value: metrics.revenue,
    },
    {
      name: 'Expenses',
      value: metrics.expenses,
    },
    {
      name: 'Assets',
      value: metrics.assets,
    },
    {
      name: 'Liabilities',
      value: metrics.liabilities,
    },
    {
      name: 'Cash Flow',
      value: metrics.cashFlow,
    },
  ];

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#1e40af" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};