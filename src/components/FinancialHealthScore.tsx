import { Progress } from "@/components/ui/progress";
import type { FinancialMetrics } from "@/pages/Index";

interface Props {
  score: number;
  metrics: FinancialMetrics;
}

export const FinancialHealthScore = ({ score, metrics }: Props) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const profitMargin = metrics.revenue ? ((metrics.revenue - metrics.expenses) / metrics.revenue) * 100 : 0;
  const debtRatio = metrics.assets ? (metrics.liabilities / metrics.assets) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Overall Score</h3>
        <span className={`text-4xl font-bold ${getScoreColor(score)}`}>
          {score.toFixed(1)}%
        </span>
        <Progress value={score} className="mt-2" />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-500">Profit Margin</h4>
          <p className="text-lg font-semibold">{profitMargin.toFixed(1)}%</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-500">Debt Ratio</h4>
          <p className="text-lg font-semibold">{debtRatio.toFixed(1)}%</p>
        </div>
      </div>
    </div>
  );
};