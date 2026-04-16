import { Link } from "react-router";
import { ArrowLeft, ArrowRight, ShieldLockFill, EyeSlashFill } from "react-bootstrap-icons";
import { useState } from "react";

export function ClientPrivacyModePage() {
  const [isAnon, setIsAnon] = useState(false);

  return (
    <div className="min-h-screen bg-[#FCF8E8] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-xl w-full">
        <div className="w-16 h-16 bg-[#8A7340]/10 rounded-2xl flex items-center justify-center text-[#8A7340] mx-auto mb-8">
          <ShieldLockFill size={32} />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-[#5E6C54] font-serif mb-6">Identity Shield</h1>
        <p className="text-lg text-[#5E6C54]/80 mb-12 font-medium">
          Would you like to remain anonymous during your sessions? Your safety and privacy are our highest priorities.
        </p>
        
        <div className="bg-white p-8 rounded-[40px] border border-[#99A88C]/10 mb-12 transition-all hover:border-[#8A7340]/30 shadow-sm">
           <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 text-[#5E6C54]">
                 <EyeSlashFill size={20} className="text-[#8A7340]" />
                 <span className="font-bold text-sm uppercase tracking-tight">Enable Anonymous Mode</span>
              </div>
              <button 
                onClick={() => setIsAnon(!isAnon)}
                className={`w-14 h-8 rounded-full transition-all relative ${isAnon ? 'bg-[#99A88C]' : 'bg-[#D0D9CD]'}`}
              >
                 <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${isAnon ? 'right-1' : 'left-1'}`} />
              </button>
           </div>
           <p className="text-left text-xs text-[#5E6C54]/60 leading-relaxed font-medium">
             When active, your coach will only see your chosen nickname. Session recordings and transcriptions will be automatically purged after 24 hours.
           </p>
        </div>
        
        <div className="flex items-center justify-between">
          <Link to="/onboarding/goals" className="p-4 text-[#5E6C54]/40 hover:text-[#5E6C54] transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <Link 
            to="/onboarding/notifications" 
            className="px-10 py-5 bg-[#99A88C] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 shadow-xl transition-all flex items-center gap-3"
          >
            Confirm Choice <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
