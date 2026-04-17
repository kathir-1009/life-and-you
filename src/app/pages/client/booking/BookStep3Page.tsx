import { Link, useNavigate } from "react-router";
import { CheckCircleFill, ShieldCheck, Calendar2CheckFill, CreditCard2BackFill } from "react-bootstrap-icons";
import { ChevronLeft } from "lucide-react";

export function BookSessionStep3Page() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FCF8E8] pb-32 portal-context">
      {/* Cinematic Header - Mobile Only */}
      <div className="lg:hidden relative">
         <button 
            onClick={() => navigate(-1)}
            className="absolute top-12 left-6 z-20 w-10 h-10 bg-[#FFFFFF]/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-[#FFFFFF]/10 active:scale-95 transition-all"
         >
            <ChevronLeft size={20} />
         </button>

         <div className="bg-[#5E6C54] pt-24 pb-32 px-6 rounded-b-[80px] relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
            <div className="relative z-10">
               <h1 className="text-2xl font-black tracking-tight mb-2 !text-[#FFFFFF]" style={{ color: '#FFFFFF' }}>Confirm Booking</h1>
               <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.3em] !text-[#99A88C]">Last step to your breakthrough</p>
            </div>
         </div>
      </div>

      <div className="max-w-xl mx-auto px-6 lg:pt-16 text-center">
        {/* Desktop Back Link */}
        <Link to="/portal/book/step-2" className="hidden lg:inline-flex items-center gap-2 text-[#5E6C54]/60 hover:text-[#5E6C54] transition-all mb-12">
            <ChevronLeft size={20} />
            <span className="font-bold text-xs uppercase tracking-widest">Back to Scheduling</span>
        </Link>

        {/* Desktop Header */}
        <div className="hidden lg:block mb-8">
           <div className="inline-flex items-center gap-2 bg-[#99A88C]/10 px-4 py-2 rounded-full text-[#99A88C] mb-8">
              <ShieldCheck size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">Guaranteed Privacy</span>
           </div>
           <h1 className="text-4xl font-black text-[#5E6C54] uppercase tracking-tight">Confirm Your Breakthrough</h1>
        </div>
        
        <div className="bg-[#FFFFFF] p-10 rounded-[48px] border border-[#99A88C]/10 shadow-2xl mb-12 text-left mt-8 lg:mt-0">
           <div className="space-y-8">
              <SummaryItem icon={Calendar2CheckFill} label="Scheduled Time" val="Thursday, March 14, 2026 at 02:00 PM (GST)" />
              <SummaryItem icon={CheckCircleFill} label="Session Type" val="Identity-Shield Video Session" />
              <SummaryItem icon={CreditCard2BackFill} label="Investment" val="AED 399 (Discovery Session)" />
           </div>
           
           <div className="mt-12 pt-8 border-t border-[#99A88C]/10 text-center">
              <p className="text-xs text-[#5E6C54]/60 font-medium italic mb-6">"Change begins the moment you commit."</p>
              <Link 
                to="/portal/book/confirm" 
                className="w-full py-6 bg-[#A68A45] text-[#FFFFFF] rounded-[32px] font-black text-xs uppercase tracking-[0.2em] hover:scale-[1.03] shadow-2xl transition-all block"
              >
                Confirm & Pay Securely
              </Link>
           </div>
        </div>
        
        <button 
          onClick={() => navigate(-1)}
          className="text-[#5E6C54]/40 hover:text-[#5E6C54] transition-all font-black text-[10px] uppercase tracking-widest"
        >
           I need to change something
        </button>
      </div>
    </div>
  );
}

function SummaryItem({ icon: Icon, label, val }: { icon: any, label: string, val: string }) {
  return (
    <div className="flex gap-5">
       <div className="w-12 h-12 bg-[#FDF8E1] rounded-2xl flex items-center justify-center text-[#99A88C] shrink-0">
          <Icon size={24} />
       </div>
       <div>
          <p className="text-[9px] font-black text-[#5E6C54]/40 uppercase tracking-[0.2em] mb-1">{label}</p>
          <p className="text-sm font-black text-[#5E6C54] uppercase tracking-tight leading-relaxed">{val}</p>
       </div>
    </div>
  );
}
