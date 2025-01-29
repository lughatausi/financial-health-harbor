import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpenIcon, BrainIcon, CodeIcon } from "lucide-react";

export function LearningInsights() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Learning Insights</h2>
      
      <div className="space-y-4">
        <div className="bg-secondary/20 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <BookOpenIcon className="h-5 w-5 text-primary" />
            <h3 className="font-medium">Current Focus Areas</h3>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Badge>Recursion</Badge>
            <Badge>Data Structures</Badge>
            <Badge>Algorithms</Badge>
          </div>
        </div>
        
        <div className="bg-secondary/20 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <BrainIcon className="h-5 w-5 text-primary" />
            <h3 className="font-medium">Recommended Resources</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li>• Advanced Recursion Tutorial</li>
            <li>• Data Structures Practice Problems</li>
            <li>• Algorithm Optimization Guide</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}