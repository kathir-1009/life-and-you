import { useEffect } from "react";
import { HeroSection } from "../components/home/HeroSection";
import { ProcessSection } from "../components/home/ProcessSection";
import { ProgramsSection } from "../components/home/ProgramsSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { CTASection } from "../components/home/CTASection";

export function HomePage() {
  useEffect(() => {
    document.title = "Life & You | NLP & ICF Coaching - UAE & Global";
  }, []);

  return (
    <div className="bg-cream font-sans-web">
      <HeroSection />
      <ProcessSection />
      <ProgramsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
