import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { Bell } from "lucide-react";

export function ClientNotificationPrefsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start md:justify-center p-6 pt-12 md:pt-6 pb-32 md:pb-12 text-center relative overflow-hidden">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4E5540] rounded-full blur-[150px] opacity-25 pointer-events-none" />

      <div className="max-w-2xl w-full bg-[#FCF8E8] p-8 md:p-14 pb-16 md:pb-20 rounded-[48px] md:rounded-[64px] shadow-[0_32px_64px_rgba(0,0,0,0.3)] animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10 border border-white/20">
        <div className="w-16 h-16 bg-[#2D3324] rounded-2xl flex items-center justify-center text-white mb-8 mx-auto shadow-xl">
           <Bell size={32} />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-[#2D3324] font-serif mb-6 uppercase tracking-tight leading-none">Stay Connected?</h1>
        <p className="text-lg text-[#2D3324]/80 mb-12 font-medium leading-relaxed">
          Get subtle, low-impact reminders for your sessions and new library updates.
        </p>
        
        <div className="grid gap-4 mb-12">
           <NotificationToggle label="Email Summaries" desc="Weekly insights and progress reports" defaultOn={true} />
           <NotificationToggle label="Browser Alerts" desc="Instant session reminders 10 mins before" defaultOn={true} />
           <NotificationToggle label="WhatsApp Support" desc="Direct line for quick coach check-ins" defaultOn={false} />
        </div>
        
        <div className="flex items-center justify-between gap-6 pt-10 border-t border-[#2D3324]/5">
          <Link to="/onboarding/privacy" className="w-14 h-14 bg-white/50 rounded-2xl flex items-center justify-center text-[#2D3324]/40 hover:text-[#2D3324] hover:bg-white transition-all border border-[#2D3324]/10">
            <ArrowLeft size={24} />
          </Link>
          <Link 
            to="/onboarding/complete" 
            className="flex-1 py-5 bg-[#2D3324] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] hover:bg-[#1a1d14] shadow-2xl transition-all flex items-center justify-center gap-3"
          >
            Almost Done <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function NotificationToggle({ label, desc, defaultOn }: { label: string, desc: string, defaultOn: boolean }) {
  return (
    <div className="bg-white/50 p-6 rounded-[32px] border border-[#2D3324]/5 flex items-center justify-between text-left group hover:border-[#8B9A71]/20 transition-all">
       <div>
          <h4 className="font-black text-[10px] text-[#2D3324] uppercase tracking-widest mb-1">{label}</h4>
          <p className="text-[10px] text-[#2D3324]/40 font-bold uppercase tracking-widest leading-tight opacity-80">{desc}</p>
       </div>
       <div className={`w-12 h-6 rounded-full relative transition-all shrink-0 ${defaultOn ? 'bg-[#2D3324]' : 'bg-[#D0D9CD]'}`}>
          <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all ${defaultOn ? 'right-0.5' : 'left-0.5'}`} />
       </div>
    </div>
  );
}
