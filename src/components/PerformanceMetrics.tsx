import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { day: 'Mon', efficiency: 65 },
  { day: 'Tue', efficiency: 75 },
  { day: 'Wed', efficiency: 85 },
  { day: 'Thu', efficiency: 82 },
  { day: 'Fri', efficiency: 90 },
];

export function PerformanceMetrics() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Performance Tracking</h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Coding Efficiency</span>
            <span className="text-sm text-muted-foreground">90%</span>
          </div>
          <Progress value={90} className="h-2" />
        </div>
        
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="efficiency" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}