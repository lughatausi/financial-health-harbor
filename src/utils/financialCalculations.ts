import { type FinancialMetrics } from "@/types/financial";

export const calculateFinancialHealth = (metrics: FinancialMetrics): number => {
  // Calculate various ratios
  const profitMargin = metrics.revenue ? ((metrics.revenue - metrics.expenses) / metrics.revenue) * 100 : 0;
  const currentRatio = metrics.liabilities ? (metrics.assets / metrics.liabilities) : 0;
  const debtRatio = metrics.assets ? (metrics.liabilities / metrics.assets) * 100 : 0;
  const cashFlowRatio = metrics.revenue ? (metrics.cashFlow / metrics.revenue) * 100 : 0;

  // Weight the components
  const profitScore = Math.min(100, Math.max(0, profitMargin * 2)); // 0-100
  const liquidityScore = Math.min(100, Math.max(0, currentRatio * 50)); // 0-100
  const debtScore = Math.min(100, Math.max(0, 100 - debtRatio)); // 0-100
  const cashFlowScore = Math.min(100, Math.max(0, cashFlowRatio * 2 + 50)); // 0-100

  // Calculate weighted average
  const weights = {
    profit: 0.3,
    liquidity: 0.2,
    debt: 0.25,
    cashFlow: 0.25
  };

  const finalScore = 
    profitScore * weights.profit +
    liquidityScore * weights.liquidity +
    debtScore * weights.debt +
    cashFlowScore * weights.cashFlow;

  return Math.round(finalScore * 10) / 10;
};