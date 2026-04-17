import { Link } from "react-router";
import { ArrowLeft, ArrowRight, BellFill } from "react-bootstrap-icons";

export function ClientNotificationPrefsPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-xl w-full">
        <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center text-sage mx-auto mb-8">
          <BellFill size={32} />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-sage-dark font-serif mb-6">Stay Connected?</h1>
        <p className="text-lg text-sage-dark/80 mb-12 font-medium">
          Get subtle, low-impact reminders for your sessions and new library updates.
        </p>
        
        <div className="grid gap-4 mb-12">
           <NotificationToggle label="Email Summaries" desc="Weekly insights and progress reports" defaultOn={true} />
           <NotificationToggle label="Browser Alerts" desc="Instant session reminders 10 mins before" defaultOn={true} />
           <NotificationToggle label="WhatsApp Support" desc="Direct line for quick coach check-ins" defaultOn={false} />
        </div>
        
        <div className="flex items-center justify-between">
          <Link to="/onboarding/privacy" className="p-4 text-sage-dark/40 hover:text-sage-dark transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <Link 
            to="/onboarding/complete" 
            className="px-10 py-5 bg-sage-dark text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 shadow-xl transition-all flex items-center gap-3"
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
    <div className="bg-white p-6 rounded-[32px] border border-sage/5 flex items-center justify-between text-left group hover:border-sage/20 transition-all">
       <div>
          <h4 className="font-bold text-sm text-sage-dark uppercase tracking-tight mb-1">{label}</h4>
          <p className="text-[10px] text-sage-dark/60 font-medium uppercase tracking-widest">{desc}</p>
       </div>
       <div className={`w-12 h-6 rounded-full relative transition-all ${defaultOn ? 'bg-sage' : 'bg-[#D0D9CD]'}`}>
          <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all ${defaultOn ? 'right-0.5' : 'left-0.5'}`} />
       </div>
    </div>
  );
}
