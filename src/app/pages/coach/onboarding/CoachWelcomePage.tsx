import { Link } from "react-router";
import { ArrowRight, PeopleFill } from "react-bootstrap-icons";

export function CoachWelcomePage() {
  return (
    <div className="min-h-screen bg-[#2D3324] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71] rounded-full blur-[80px] opacity-20 pointer-events-none will-change-transform" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4E5540] rounded-full blur-[100px] opacity-25 pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#2D3324_100%)] opacity-60 pointer-events-none will-change-transform" />
      
      <div className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center text-white mb-10 shadow-2xl relative z-10">
        <PeopleFill size={40} className="text-[#8B9A71]" />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-black text-white font-serif mb-6 uppercase tracking-tighter relative z-10">Become a Mentor.</h1>
      <p className="text-lg text-white/60 max-w-lg mb-12 font-medium leading-relaxed relative z-10">
        Join our elite circle of ICF-certified coaches and help shape lives in our secure, anonymous sanctuary.
      </p>
      
      <Link 
        to="/coach/onboarding/profile" 
        className="px-12 py-5 bg-[#8B9A71] text-[#2D3324] rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 hover:bg-white transition-all flex items-center gap-3 relative z-10"
      >
        Start Coach Application <ArrowRight size={18} />
      </Link>
    </div>
  );
}
