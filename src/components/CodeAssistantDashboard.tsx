import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeIcon, BrainCircuitIcon, GitBranchIcon } from "lucide-react";

export function CodeAssistantDashboard() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Code Assistant Status</h2>
        <Badge variant="secondary">Active</Badge>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <CodeIcon className="h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Auto-Completion</p>
            <p className="text-sm text-muted-foreground">Pattern matching active</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <BrainCircuitIcon className="h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Error Prevention</p>
            <p className="text-sm text-muted-foreground">Monitoring code patterns</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <GitBranchIcon className="h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Learning Mode</p>
            <p className="text-sm text-muted-foreground">Adapting to your style</p>
          </div>
        </div>
      </div>
    </Card>
  );
}