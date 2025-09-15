import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AnalysisDashboard } from "@/components/AnalysisDashboard";
import { VideoUpload } from "@/components/VideoUpload";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="analysis">
          <AnalysisDashboard />
        </section>
        <section id="upload">
          <VideoUpload />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
