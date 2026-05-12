import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { ShieldAlert, EyeOff } from "lucide-react";
import { useState } from "react";

export function ClientPrivacyModePage() {
  const [isAnon, setIsAnon] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start md:justify-center p-6 pt-12 md:pt-6 pb-32 md:pb-12 text-center relative overflow-hidden">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4E5540] rounded-full blur-[150px] opacity-25 pointer-events-none" />

      <div className="max-w-2xl w-full bg-[#FCF8E8] p-8 md:p-14 pb-16 md:pb-20 rounded-[48px] md:rounded-[64px] shadow-[0_32px_64px_rgba(0,0,0,0.3)] animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10 border border-white/20">
        <div className="w-16 h-16 bg-[#2D3324] rounded-2xl flex items-center justify-center text-white mb-8 mx-auto shadow-xl">
           <ShieldAlert size={32} />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-[#2D3324] font-serif mb-6 uppercase tracking-tight leading-none">Identity Shield</h1>
        <p className="text-lg text-[#2D3324]/80 mb-12 font-medium leading-relaxed">
          Would you like to remain anonymous during your sessions? Your safety and privacy are our highest priorities.
        </p>
        
        <div className="bg-white/50 p-8 rounded-[40px] border border-[#2D3324]/10 mb-12 transition-all hover:border-[#8B9A71]/30 shadow-sm text-left">
           <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4 text-[#2D3324]">
                 <div className="w-10 h-10 rounded-xl bg-[#2D3324]/5 flex items-center justify-center">
                    <EyeOff size={20} className="text-[#2D3324]" />
                 </div>
                 <span className="font-black text-[10px] uppercase tracking-widest">Enable Anonymous Mode</span>
              </div>
              <button 
                onClick={() => setIsAnon(!isAnon)}
                className={`w-14 h-8 rounded-full transition-all relative shadow-inner ${isAnon ? 'bg-[#4B6344]' : 'bg-[#944A4A]'}`}
              >
                 <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${isAnon ? 'right-1' : 'left-1'}`} />
              </button>
           </div>
           <p className="text-xs text-[#2D3324]/60 leading-relaxed font-bold uppercase tracking-wide opacity-80">
             When active, your coach will only see your chosen nickname. Session recordings and transcriptions will be automatically purged after 24 hours.
           </p>
        </div>
        
        <div className="flex items-center justify-between gap-6 pt-10 border-t border-[#2D3324]/5">
          <Link to="/onboarding/goals" className="w-14 h-14 bg-white/50 rounded-2xl flex items-center justify-center text-[#2D3324]/40 hover:text-[#2D3324] hover:bg-white transition-all border border-[#2D3324]/10">
            <ArrowLeft size={24} />
          </Link>
          <Link 
            to="/onboarding/notifications" 
            className="flex-1 py-5 bg-[#2D3324] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] hover:bg-[#1a1d14] shadow-2xl transition-all flex items-center justify-center gap-3"
          >
            Confirm Choice <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
