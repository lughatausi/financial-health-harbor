import React from "react";
import { type FinancialMetrics } from "@/types/financial";
import { calculateFinancialHealth } from "@/utils/financialCalculations";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

interface FinancialHealthScoreProps {
  metrics: FinancialMetrics;
}

const FinancialHealthScore: React.FC<FinancialHealthScoreProps> = ({ metrics }) => {
  const score = calculateFinancialHealth(metrics);

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Financial Health Score</h2>
      <div className="space-y-4">
        <Progress value={score} className="w-full" />
        <p className="text-center text-2xl font-bold">{score}/100</p>
      </div>
    </Card>
  );
};

export default FinancialHealthScore;