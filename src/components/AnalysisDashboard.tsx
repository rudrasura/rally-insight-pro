import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Clock,
  Award,
  AlertTriangle,
  BarChart3
} from "lucide-react";

const sampleData = {
  overallScore: 78,
  matchDuration: "1h 23m",
  totalRallies: 156,
  shotBreakdown: [
    { type: "Forehand", accuracy: 82, total: 45, color: "bg-secondary" },
    { type: "Backhand", accuracy: 65, total: 38, color: "bg-primary" },
    { type: "Volleys", accuracy: 91, total: 22, color: "bg-accent" },
    { type: "Serves", accuracy: 73, total: 28, color: "bg-secondary/70" }
  ],
  strengths: [
    "Excellent net play consistency (91%)",
    "Strong forehand placement",
    "Good rally endurance"
  ],
  improvements: [
    "Backhand return needs work (65% accuracy)",
    "Serve placement consistency",
    "Reduce unforced errors in rallies 10+"
  ]
};

export const AnalysisDashboard = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Performance
            <span className="block text-primary">At a Glance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our AI transforms raw match footage into actionable insights
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 text-center bg-gradient-primary text-white">
              <Award className="h-8 w-8 mx-auto mb-3 opacity-90" />
              <div className="text-3xl font-bold mb-1">{sampleData.overallScore}</div>
              <div className="text-sm opacity-90">Overall Score</div>
            </Card>
            
            <Card className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">{sampleData.matchDuration}</div>
              <div className="text-sm text-muted-foreground">Match Duration</div>
            </Card>
            
            <Card className="p-6 text-center">
              <Target className="h-8 w-8 mx-auto mb-3 text-secondary" />
              <div className="text-3xl font-bold mb-1">{sampleData.totalRallies}</div>
              <div className="text-sm text-muted-foreground">Total Rallies</div>
            </Card>
            
            <Card className="p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-accent" />
              <div className="text-3xl font-bold mb-1">+12%</div>
              <div className="text-sm text-muted-foreground">vs Last Match</div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Shot Breakdown */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                Shot Analysis
              </h3>
              
              <div className="space-y-4">
                {sampleData.shotBreakdown.map((shot, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{shot.type}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {shot.total} shots
                        </Badge>
                        <span className="text-sm font-semibold">{shot.accuracy}%</span>
                      </div>
                    </div>
                    <Progress value={shot.accuracy} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Strengths & Improvements */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Key Insights</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-secondary mb-3 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Strengths
                  </h4>
                  <ul className="space-y-2">
                    {sampleData.strengths.map((strength, index) => (
                      <li key={index} className="text-sm flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-accent mb-3 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Areas to Improve
                  </h4>
                  <ul className="space-y-2">
                    {sampleData.improvements.map((improvement, index) => (
                      <li key={index} className="text-sm flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="px-8">
                <Play className="mr-2 h-5 w-5" />
                View Full Report
              </Button>
              <Button variant="secondary" size="lg" className="px-8">
                Get Coaching Tips
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};