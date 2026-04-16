import { useEffect } from "react";
import { Link } from "react-router";
import { Check, Calendar, Clock, User, Mail, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

export function ConfirmationPage() {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCF8E8] flex flex-col items-center justify-center p-6 relative overflow-hidden portal-context">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#99A88C]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C4A35A]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]" />

      <div className="max-w-md w-full relative z-10 text-center">
        {/* Success burst */}
        <div className="mb-8 relative inline-block">
          <div className="w-24 h-24 bg-[#99A88C] rounded-[32px] flex items-center justify-center text-white shadow-2xl animate-in zoom-in duration-500">
            <Check size={48} strokeWidth={3} className="text-[#C4A35A]" />
          </div>
          <div className="absolute -top-2 -right-2 px-3 py-1 bg-[#C4A35A] rounded-full text-[#99A88C] text-[10px] font-bold shadow-lg">
             MATCHED
          </div>
        </div>

        <h1 className="text-4xl font-bold text-[#99A88C] font-serif mb-3 tracking-tight">You're All Set!</h1>
        <p className="text-sm text-[#99A88C]/60 mb-10 leading-relaxed font-medium px-4">
          Step forward with clarity. Your session has been secured, and we've dispatched a formal confirmation to your inbox.
        </p>

        {/* Details card with glass effect */}
        <div className="bg-white/70 backdrop-blur-xl rounded-[40px] p-8 shadow-2xl border border-white mb-8 transition-transform hover:scale-[1.01]">
           <div className="space-y-5">
              <DetailRow icon={Calendar} label="Date" value="April 15, 2026" />
              <DetailRow icon={Clock} label="Time" value="10:00 AM (IST)" />
              <DetailRow icon={User} label="Mode" value="Anonymous" />
              <DetailRow icon={Mail} label="Status" value="Confirmed" highlighted />
           </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-4">
          <Link
            to="/portal"
            className="group w-full bg-[#99A88C] text-white rounded-2xl py-5 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl shadow-black/10 hover:bg-black transition-all"
          >
            Go to Dashboard <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="text-[10px] text-[#99A88C]/40 font-bold uppercase tracking-widest bg-[#99A88C]/5 py-3 rounded-2xl border border-[#99A88C]/10">
             ✦ A calendar invite has been sent ✦
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ icon: Icon, label, value, highlighted }: { icon: any, label: string, value: string, highlighted?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1">
       <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#EDF2EE] flex items-center justify-center text-[#99A88C]">
             <Icon size={14} />
          </div>
          <span className="text-[10px] font-bold text-[#99A88C]/40 uppercase tracking-widest">{label}</span>
       </div>
       <span className={`text-xs font-bold ${highlighted ? 'text-[#C4A35A]' : 'text-[#99A88C]'}`}>{value}</span>
    </div>
  );
}
