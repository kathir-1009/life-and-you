import { Link } from "react-router";
import { ArrowRight, HeartFill } from "react-bootstrap-icons";

export function ClientWelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71] rounded-full blur-[120px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4E5540] rounded-full blur-[150px] opacity-15 pointer-events-none" />

      <div className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] flex items-center justify-center text-[#8B9A71] mb-10 shadow-2xl relative z-10 animate-bounce-slow">
        <HeartFill size={40} />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-black text-white font-serif mb-6 uppercase tracking-tighter relative z-10">Welcome to Your Sanctuary.</h1>
      <p className="text-lg text-white/60 max-w-lg mb-12 font-medium leading-relaxed relative z-10">
        We're honored to accompany you on this journey of self-discovery and growth. Let's personalize your experience.
      </p>
      
      <Link 
        to="/onboarding/goals" 
        className="px-12 py-5 bg-[#8B9A71] text-[#2D3324] rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:scale-105 hover:bg-white transition-all flex items-center gap-3 relative z-10"
      >
        Begin Onboarding <ArrowRight size={18} />
      </Link>
    </div>
  );
}
