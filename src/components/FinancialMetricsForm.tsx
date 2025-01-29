import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { FinancialMetrics } from "@/pages/Index";

interface Props {
  onSubmit: (metrics: FinancialMetrics) => void;
}

export const FinancialMetricsForm = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState<FinancialMetrics>({
    revenue: 0,
    expenses: 0,
    assets: 0,
    liabilities: 0,
    cashFlow: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setFormData(prev => ({
      ...prev,
      [e.target.name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="revenue">Revenue</Label>
        <Input
          id="revenue"
          name="revenue"
          type="number"
          value={formData.revenue}
          onChange={handleChange}
          placeholder="Enter revenue"
        />
      </div>

      <div>
        <Label htmlFor="expenses">Expenses</Label>
        <Input
          id="expenses"
          name="expenses"
          type="number"
          value={formData.expenses}
          onChange={handleChange}
          placeholder="Enter expenses"
        />
      </div>

      <div>
        <Label htmlFor="assets">Assets</Label>
        <Input
          id="assets"
          name="assets"
          type="number"
          value={formData.assets}
          onChange={handleChange}
          placeholder="Enter total assets"
        />
      </div>

      <div>
        <Label htmlFor="liabilities">Liabilities</Label>
        <Input
          id="liabilities"
          name="liabilities"
          type="number"
          value={formData.liabilities}
          onChange={handleChange}
          placeholder="Enter total liabilities"
        />
      </div>

      <div>
        <Label htmlFor="cashFlow">Cash Flow</Label>
        <Input
          id="cashFlow"
          name="cashFlow"
          type="number"
          value={formData.cashFlow}
          onChange={handleChange}
          placeholder="Enter cash flow"
        />
      </div>

      <Button type="submit" className="w-full">Calculate Health Score</Button>
    </form>
  );
};