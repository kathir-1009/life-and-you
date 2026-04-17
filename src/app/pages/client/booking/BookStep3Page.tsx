import { Link } from "react-router";
import { ArrowLeft, CheckCircleFill, ShieldCheck, Calendar2CheckFill, CreditCard2BackFill } from "react-bootstrap-icons";

export function BookSessionStep3Page() {
  return (
    <div className="min-h-screen bg-cream pb-32 portal-context">
      <div className="max-w-xl mx-auto px-6 pt-16 text-center">
        <div className="inline-flex items-center gap-2 bg-sage/10 px-4 py-2 rounded-full text-sage mb-8">
           <ShieldCheck size={14} />
           <span className="text-[9px] font-black uppercase tracking-widest">Guaranteed Privacy</span>
        </div>
        
        <h1 className="text-4xl font-bold text-sage-dark font-serif mb-12">Confirm Your Breakthrough</h1>
        
        <div className="bg-white p-10 rounded-[48px] border border-sage/10 shadow-2xl mb-12 text-left">
           <div className="space-y-8">
              <SummaryItem icon={Calendar2CheckFill} label="Scheduled Time" val="Thursday, March 14, 2026 at 02:00 PM (GST)" />
              <SummaryItem icon={CheckCircleFill} label="Session Type" val="Identity-Shield Video Session" />
              <SummaryItem icon={CreditCard2BackFill} label="Investment" val="AED 399 (Discovery Session)" />
           </div>
           
           <div className="mt-12 pt-8 border-t border-sage/10 text-center">
              <p className="text-xs text-sage-dark/60 font-medium italic mb-6">"Change begins the moment you commit."</p>
              <Link 
                to="/confirmation" 
                className="w-full py-6 bg-sage text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-[1.03] shadow-2xl transition-all block"
              >
                Confirm & Pay Securely
              </Link>
           </div>
        </div>
        
        <Link to="/portal/book/step-2" className="text-sage-dark/40 hover:text-sage-dark transition-all font-bold text-[10px] uppercase tracking-widest">
           I need to change something
        </Link>
      </div>
    </div>
  );
}

function SummaryItem({ icon: Icon, label, val }: { icon: any, label: string, val: string }) {
  return (
    <div className="flex gap-5">
       <div className="w-12 h-12 bg-[#FDF8E1] rounded-2xl flex items-center justify-center text-sage shrink-0">
          <Icon size={24} />
       </div>
       <div>
          <p className="text-[9px] font-black text-sage-dark/40 uppercase tracking-[0.2em] mb-1">{label}</p>
          <p className="text-sm font-bold text-sage-dark tracking-tight leading-relaxed">{val}</p>
       </div>
    </div>
  );
}
