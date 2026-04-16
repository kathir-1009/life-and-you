import { Link } from "react-router";
import { ArrowRight, HeartFill } from "react-bootstrap-icons";

export function ClientWelcomePage() {
  return (
    <div className="min-h-screen bg-[#FCF8E8] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 bg-[#99A88C]/10 rounded-3xl flex items-center justify-center text-[#99A88C] mb-8 animate-bounce-slow">
        <HeartFill size={40} />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-[#5E6C54] font-serif mb-6">Welcome to Your Sanctuary.</h1>
      <p className="text-lg text-[#5E6C54]/80 max-w-md mb-12 font-medium">
        We're honored to accompany you on this journey of self-discovery and growth. Let's personalize your experience.
      </p>
      
      <Link 
        to="/onboarding/goals" 
        className="px-12 py-5 bg-[#99A88C] text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all flex items-center gap-3"
      >
        Begin Onboarding <ArrowRight size={18} />
      </Link>
    </div>
  );
}
