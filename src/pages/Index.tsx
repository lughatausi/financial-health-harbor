import { Card } from "@/components/ui/card";
import { FinancialMetricsForm } from "@/components/FinancialMetricsForm";
import { FinancialHealthScore } from "@/components/FinancialHealthScore";
import { FinancialChart } from "@/components/FinancialChart";
import { useState } from "react";
import { calculateFinancialHealth } from "@/utils/financialCalculations";

export type FinancialMetrics = {
  revenue: number;
  expenses: number;
  assets: number;
  liabilities: number;
  cashFlow: number;
};

const Index = () => {
  const [metrics, setMetrics] = useState<FinancialMetrics>({
    revenue: 0,
    expenses: 0,
    assets: 0,
    liabilities: 0,
    cashFlow: 0,
  });

  const handleMetricsUpdate = (newMetrics: FinancialMetrics) => {
    setMetrics(newMetrics);
  };

  const healthScore = calculateFinancialHealth(metrics);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Lugha Tausi Financial Health Analysis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Input Financial Metrics</h2>
          <FinancialMetricsForm onSubmit={handleMetricsUpdate} />
        </Card>
        
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Financial Health Score</h2>
          <FinancialHealthScore score={healthScore} metrics={metrics} />
        </Card>
      </div>

      <Card className="mt-8 p-6">
        <h2 className="text-xl font-semibold mb-4">Financial Trends</h2>
        <FinancialChart metrics={metrics} />
      </Card>
    </div>
  );
};

export default Index;