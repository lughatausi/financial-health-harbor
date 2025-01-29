import React from "react";
import { useForm } from "react-hook-form";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { type FinancialMetrics } from "@/types/financial";

interface FinancialMetricsFormProps {
  onSubmit: (data: FinancialMetrics) => void;
  initialData?: FinancialMetrics;
}

const FinancialMetricsForm: React.FC<FinancialMetricsFormProps> = ({
  onSubmit,
  initialData,
}) => {
  const { register, handleSubmit } = useForm<FinancialMetrics>({
    defaultValues: initialData || {
      revenue: 0,
      expenses: 0,
      assets: 0,
      liabilities: 0,
      cashFlow: 0,
    },
  });

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Enter Financial Metrics</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="revenue" className="block text-sm font-medium mb-1">
            Revenue
          </label>
          <Input
            id="revenue"
            type="number"
            {...register("revenue", { valueAsNumber: true })}
          />
        </div>
        <div>
          <label htmlFor="expenses" className="block text-sm font-medium mb-1">
            Expenses
          </label>
          <Input
            id="expenses"
            type="number"
            {...register("expenses", { valueAsNumber: true })}
          />
        </div>
        <div>
          <label htmlFor="assets" className="block text-sm font-medium mb-1">
            Assets
          </label>
          <Input
            id="assets"
            type="number"
            {...register("assets", { valueAsNumber: true })}
          />
        </div>
        <div>
          <label htmlFor="liabilities" className="block text-sm font-medium mb-1">
            Liabilities
          </label>
          <Input
            id="liabilities"
            type="number"
            {...register("liabilities", { valueAsNumber: true })}
          />
        </div>
        <div>
          <label htmlFor="cashFlow" className="block text-sm font-medium mb-1">
            Cash Flow
          </label>
          <Input
            id="cashFlow"
            type="number"
            {...register("cashFlow", { valueAsNumber: true })}
          />
        </div>
        <Button type="submit" className="w-full">
          Calculate Health Score
        </Button>
      </form>
    </Card>
  );
};

export default FinancialMetricsForm;