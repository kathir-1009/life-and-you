import { Link } from "react-router";
import { CheckCircleFill, ArrowRight, ShieldCheck } from "react-bootstrap-icons";

export function CoachOnboardingCompletePage() {
  return (
    <div className="min-h-screen bg-[#2D3324] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71] rounded-full blur-[80px] opacity-20 pointer-events-none will-change-transform" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4E5540] rounded-full blur-[100px] opacity-25 pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#2D3324_100%)] opacity-60 pointer-events-none will-change-transform" />

      <div className="max-w-xl w-full animate-in fade-in zoom-in duration-1000 relative z-10">
        <div className="w-24 h-24 bg-[#8B9A71] rounded-[40px] flex items-center justify-center text-[#2D3324] mx-auto mb-10 shadow-2xl relative">
          <CheckCircleFill size={48} />
          <div className="absolute -top-2 -right-2 bg-white p-2 rounded-full shadow-lg">
             <ShieldCheck size={20} className="text-[#2D3324]" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-white font-serif mb-6 uppercase tracking-tighter leading-none">Application Submitted.</h1>
        <p className="text-lg text-white/60 max-w-md mx-auto mb-12 font-medium leading-relaxed">
          Your profile is now under review by our clinical board. We typically verify all credentials within 24-48 hours.
        </p>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[48px] mb-12 text-left space-y-6">
           <h3 className="text-xs font-black text-[#8B9A71] uppercase tracking-[0.3em] flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-[#8B9A71]" /> Next Phases
           </h3>
           <ul className="space-y-4">
              <li className="text-[11px] font-black text-white uppercase tracking-widest leading-relaxed opacity-70">
                1. Account verification by our team
              </li>
              <li className="text-[11px] font-black text-white uppercase tracking-widest leading-relaxed opacity-70">
                2. Professional conduct briefing
              </li>
              <li className="text-[11px] font-black text-white uppercase tracking-widest leading-relaxed opacity-70">
                3. Access to your mentor dashboard
              </li>
           </ul>
        </div>
        
        <Link 
          to="/coach" 
          className="px-12 py-6 bg-[#8B9A71] text-[#2D3324] rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:scale-105 hover:bg-white transition-all flex items-center justify-center gap-4 mx-auto w-full md:w-auto"
        >
          Go to Dashboard <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
