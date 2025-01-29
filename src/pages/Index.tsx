import { Card } from "@/components/ui/card";
import { CodeAssistantDashboard } from "@/components/CodeAssistantDashboard";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";
import { LearningInsights } from "@/components/LearningInsights";
import { GamificationPanel } from "@/components/GamificationPanel";

export default function Index() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary mb-8">
        Tausi Behavioral Code Assistant (TBCA)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CodeAssistantDashboard />
        <PerformanceMetrics />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LearningInsights />
        <GamificationPanel />
      </div>
    </div>
  );
}