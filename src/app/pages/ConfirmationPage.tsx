import { useEffect } from "react";
import { Link } from "react-router";
import { Check, Calendar, Clock, User, Mail, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

export function ConfirmationPage() {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, colors: ['#2D3324', '#8B9A71', '#A68A45', '#FFFFFF'] };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-[#2D3324] flex flex-col items-center justify-start pt-20 pb-32 px-6 relative overflow-x-hidden portal-context">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#A68A45]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/img/texture.png')] opacity-5 pointer-events-none" />

      <div className="max-w-md w-full relative z-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">

        {/* Success Icon */}
        <div className="mb-8 relative inline-block">
          <div className="w-28 h-28 bg-[#3D4A2E] border-2 border-[#8B9A71]/30 rounded-[36px] flex items-center justify-center shadow-2xl animate-in zoom-in duration-500 relative">
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-[#8B9A71]/20 to-transparent" />
            <Check size={52} strokeWidth={2.5} className="text-[#8B9A71] relative z-10" />
          </div>
          <div className="absolute -top-2 -right-3 px-3 py-1 bg-[#A68A45] rounded-full text-white text-[9px] font-black uppercase tracking-widest shadow-lg">
            MATCHED
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-black text-white font-serif italic mb-3 tracking-tight leading-none">
          You're All Set!
        </h1>
        <p className="text-sm text-[#8B9A71] mb-10 leading-relaxed font-medium px-6">
          Step forward with clarity. Your session has been secured, and we've dispatched a formal confirmation to your inbox.
        </p>

        {/* Details card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-[40px] p-8 shadow-2xl border border-white/10 mb-8 hover:scale-[1.01] transition-transform">
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
            className="group w-full bg-[#8B9A71] text-white rounded-[20px] py-5 text-xs font-black uppercase tracking-[0.25em] flex items-center justify-center gap-3 shadow-xl hover:bg-white hover:text-[#2D3324] transition-all duration-300"
          >
            Go to Dashboard <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="text-[10px] text-[#8B9A71]/60 font-black uppercase tracking-widest bg-white/5 py-3 rounded-[18px] border border-white/5">
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
        <div className="w-9 h-9 rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center text-[#8B9A71]">
          <Icon size={15} />
        </div>
        <span className="text-[10px] font-black text-[#8B9A71]/50 uppercase tracking-widest">{label}</span>
      </div>
      <span className={`text-xs font-black ${highlighted ? 'text-[#A68A45]' : 'text-white'}`}>{value}</span>
    </div>
  );
}
