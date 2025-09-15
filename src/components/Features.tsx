import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  BarChart3, 
  Target, 
  Clock, 
  TrendingUp, 
  BookOpen,
  Zap,
  Eye
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Smart Video Analysis",
    description: "AI-powered detection and classification of every shot, rally, and key moment in your match.",
    badge: "Core Feature"
  },
  {
    icon: BarChart3,
    title: "Performance Metrics",
    description: "Detailed statistics on shot accuracy, rally length, positioning, and win/loss ratios.",
    badge: "Analytics"
  },
  {
    icon: Target,
    title: "Shot Classification",
    description: "Automatically categorizes serves, returns, volleys, smashes, and groundstrokes with precision.",
    badge: "AI Detection"
  },
  {
    icon: Clock,
    title: "Instant Timestamps",
    description: "Jump to critical moments with clickable timestamps for winners, errors, and turning points.",
    badge: "Navigation"
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your improvement over time with skill scores and trend analysis.",
    badge: "Growth"
  },
  {
    icon: BookOpen,
    title: "Coaching Insights",
    description: "Receive personalized drills and tactical recommendations based on your weaknesses.",
    badge: "Education"
  },
  {
    icon: Zap,
    title: "Quick Processing",
    description: "Get your complete analysis report within minutes of uploading your match video.",
    badge: "Speed"
  },
  {
    icon: Eye,
    title: "Interactive Reports",
    description: "Explore your performance with expandable stats and visual breakdowns.",
    badge: "Experience"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Analysis
            <span className="block text-secondary">Made Simple</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to understand your game and accelerate your improvement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 border-0 bg-card/80 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {feature.badge}
                </Badge>
              </div>
              
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};