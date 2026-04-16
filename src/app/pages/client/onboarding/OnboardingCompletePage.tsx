import { Link } from "react-router";
import { Check2All } from "react-bootstrap-icons";
import { Sparkles } from "lucide-react";

export function ClientOnboardingCompletePage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <Sparkles size={400} className="text-gold-dark absolute -top-20 -left-20 animate-pulse" />
      </div>
      
      <div className="relative z-10 max-w-md w-full">
        <div className="w-24 h-24 bg-sage rounded-full flex items-center justify-center text-white mx-auto mb-10 shadow-[0_20px_40px_rgba(153,168,140,0.3)]">
          <Check2All size={48} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-sage-dark font-serif mb-6 leading-tight">Your Sanctuary is Ready.</h1>
        <p className="text-lg text-sage-dark/80 mb-14 font-medium italic">
          "The greatest discovery of all time is that a person can change their future by merely changing their attitude."
        </p>
        
        <Link 
          to="/portal" 
          className="w-full py-6 bg-sage-dark text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 shadow-2xl transition-all inline-block"
        >
          Enter Dashboard
        </Link>
      </div>
    </div>
  );
}
