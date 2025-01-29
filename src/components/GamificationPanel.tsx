import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrophyIcon, StarIcon, AwardIcon } from "lucide-react";

export function GamificationPanel() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Achievements & Progress</h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <TrophyIcon className="h-5 w-5 text-primary" />
              <span className="font-medium">Current Level</span>
            </div>
            <Badge variant="secondary">Level 7</Badge>
          </div>
          <Progress value={75} className="h-2" />
          <p className="text-sm text-muted-foreground mt-1">750/1000 XP to next level</p>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-medium flex items-center gap-2">
            <StarIcon className="h-5 w-5 text-primary" />
            Recent Achievements
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary/20 p-3 rounded-lg">
              <AwardIcon className="h-8 w-8 text-primary mb-2" />
              <p className="font-medium">Speed Demon</p>
              <p className="text-sm text-muted-foreground">Fast code completion</p>
            </div>
            <div className="bg-secondary/20 p-3 rounded-lg">
              <AwardIcon className="h-8 w-8 text-primary mb-2" />
              <p className="font-medium">Clean Coder</p>
              <p className="text-sm text-muted-foreground">Excellent code quality</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}