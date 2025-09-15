import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Target } from "lucide-react";
import heroImage from "@/assets/padel-court-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Padel Performance
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Upload your match videos and receive professional-grade analysis with actionable insights to elevate your game
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 min-w-48"
            >
              <Play className="mr-2 h-5 w-5" />
              Analyze Your Match
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 min-w-48 border-white/30 text-white hover:bg-white/10"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">95%</h3>
              <p className="opacity-80">Accuracy in Shot Detection</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">40%</h3>
              <p className="opacity-80">Average Improvement Rate</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Play className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">5000+</h3>
              <p className="opacity-80">Matches Analyzed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};