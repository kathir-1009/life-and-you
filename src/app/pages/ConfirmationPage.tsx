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
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B9A71]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4E5540]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]" />

      <div className="max-w-md w-full relative z-10 text-center">
        {/* Success burst */}
        <div className="mb-8 relative inline-block">
          <div className="w-24 h-24 bg-[#8B9A71] rounded-[32px] flex items-center justify-center text-white shadow-premium animate-in zoom-in duration-500">
            <Check size={48} strokeWidth={3} />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2D3324] rounded-2xl flex items-center justify-center text-white text-[10px] font-bold shadow-lg">
             NEW
          </div>
        </div>

        <h1 className="text-4xl font-extrabold text-[#2D3324] mb-3">You're All Set!</h1>
        <p className="text-sm text-[#545454] opacity-80 mb-10 leading-relaxed font-medium">
          Step forward with clarity. Your session has been secured, and we've dispatched a formal confirmation to your inbox.
        </p>

        {/* Details card with glass effect */}
        <div className="bg-white rounded-[32px] p-8 shadow-xl border border-[rgba(139,154,113,0.1)] mb-8 transition-transform hover:scale-[1.01]">
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
            to="/app/dashboard"
            className="group w-full bg-[#2D3324] text-white rounded-pill py-5 text-sm font-extrabold uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl hover:bg-[#1C1A1E] transition-all active:scale-[0.98]"
          >
            Go to Dashboard <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-[10px] text-[#8B9A71] font-extrabold uppercase tracking-widest bg-[#8B9A71]/10 py-3 rounded-2xl border border-[#8B9A71]/20">
             ✦ A calendar invite has been sent ✦
          </p>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ icon: Icon, label, value, highlighted }: { icon: any, label: string, value: string, highlighted?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1">
       <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#F8F9FA] flex items-center justify-center text-[#8B9A71]">
             <Icon size={14} />
          </div>
          <span className="text-[11px] font-extrabold text-[#545454] uppercase tracking-widest">{label}</span>
       </div>
       <span className={`text-xs font-extrabold ${highlighted ? 'text-[#8B9A71]' : 'text-[#2D3324]'}`}>{value}</span>
    </div>
  );
}
