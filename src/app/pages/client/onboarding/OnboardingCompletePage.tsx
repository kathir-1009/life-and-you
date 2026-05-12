import { Link } from "react-router";
import { CheckCircle, Sparkles } from "lucide-react";

export function ClientOnboardingCompletePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-[#2D3324]">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4E5540] rounded-full blur-[150px] opacity-25 pointer-events-none" />
      
      <div className="relative z-10 max-w-xl w-full">
        <div className="w-24 h-24 bg-[#FCF8E8] rounded-[32px] flex items-center justify-center text-[#2D3324] mx-auto mb-10 shadow-2xl animate-in zoom-in duration-700">
          <CheckCircle size={48} />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-white font-serif mb-6 leading-tight uppercase tracking-tighter">Your Sanctuary is Ready.</h1>
        <p className="text-xl text-[#8B9A71] mb-14 font-medium italic opacity-80 max-w-lg mx-auto">
          "The greatest discovery of all time is that a person can change their future by merely changing their attitude."
        </p>
        
        <Link 
          to="/portal" 
          className="px-16 py-6 bg-[#FCF8E8] text-[#2D3324] rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all inline-block hover:bg-white"
        >
          Enter Dashboard
        </Link>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10">
         <Sparkles size={600} className="text-white animate-pulse" />
      </div>
    </div>
  );
}
