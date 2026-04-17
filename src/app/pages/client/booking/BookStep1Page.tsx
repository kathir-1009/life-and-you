import { Link, useNavigate } from "react-router";
import { CameraVideoFill, TelephoneFill, ChatDotsFill, Calendar3, PersonCircle, ClockHistory } from "react-bootstrap-icons";
import { ChevronLeft, Compass, ArrowRight } from "lucide-react";

export function BookSessionStep1Page() {
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
               <h1 className="text-3xl font-black tracking-tight mb-2 !text-[#FFFFFF]" style={{ color: '#FFFFFF' }}>Choose Your Path</h1>
               <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.3em] !text-[#99A88C]">How would you like to connect today?</p>
            </div>
         </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:pt-16">
        {/* Desktop Back Link */}
        <Link to="/portal" className="hidden lg:inline-flex items-center gap-2 text-[#5E6C54]/60 hover:text-[#5E6C54] transition-all mb-12">
           <ChevronLeft size={20} />
           <span className="font-bold text-xs uppercase tracking-widest">Back to Dashboard</span>
        </Link>
        
        <div className="grid lg:grid-cols-12 gap-10 mt-8 lg:mt-0">
           {/* Left: Booking Options (8/12) */}
           <div className="lg:col-span-8 space-y-8">
              <div className="grid gap-6">
                 <OptionCard 
                    to="/portal/book/step-2" 
                    icon={CameraVideoFill} 
                    title="Identity-Shield Video" 
                    desc="Encrypted face-to-face video session with optional digital masks." 
                 />
                 <OptionCard 
                    to="/portal/book/step-2" 
                    icon={TelephoneFill} 
                    title="Voice Sanctuary" 
                    desc="Pure audio connection. Perfect for deep listening and verbal sharing." 
                 />
                 <OptionCard 
                    to="/portal/book/step-2" 
                    icon={ChatDotsFill} 
                    title="Deep Text Reflection" 
                    desc="Asynchronous real-time messaging for meditative progress." 
                 />
              </div>

              {/* Guide Hub Section */}
              <div className="bg-[#5E6C54] p-10 rounded-[48px] text-white relative overflow-hidden group border border-[#FFFFFF]/10 shadow-premium">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl transition-transform group-hover:scale-110" />
                 <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-14 h-14 bg-[#A68A45] rounded-2xl flex items-center justify-center text-[#5E6C54] shadow-xl">
                          <Compass size={28} />
                       </div>
                       <div>
                          <h3 className="text-2xl font-black tracking-tight">Your Guide Hub</h3>
                          <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-widest">Find the perfect mentor match</p>
                       </div>
                    </div>
                    <p className="text-sm font-medium text-white/70 leading-relaxed mb-10 max-w-sm italic">"Not sure who fits your journey? Our AI-Matching algorithm pairs you with the perfect coach."</p>
                    <Link to="/portal/explore" className="inline-flex items-center gap-3 bg-white text-[#5E6C54] px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
                       Explore Coaches <ArrowRight size={16} />
                    </Link>
                 </div>
              </div>
           </div>

           {/* Right: Quick Review (4/12) */}
           <div className="lg:col-span-4 space-y-8">
              <div className="bg-white p-8 rounded-[44px] border border-[#99A88C]/10 shadow-premium">
                 <div className="flex items-center justify-between mb-8 px-2">
                    <h3 className="text-xs font-black text-[#5E6C54] uppercase tracking-widest">Quick Access</h3>
                    <Link to="/portal/sessions" className="text-[10px] font-black text-[#A68A45] hover:underline uppercase tracking-widest">See All</Link>
                 </div>
                 
                 <div className="space-y-4">
                    <QuickLink icon={Calendar3} label="Upcoming Session" sub="Tomorrow at 10 AM" border />
                    <QuickLink icon={ClockHistory} label="Recent History" sub="Discovery Call Completed" border />
                    <QuickLink icon={PersonCircle} label="Favorite Guides" sub="Manage your guides" />
                 </div>
              </div>

              <div className="bg-[#A68A45] p-10 rounded-[44px] text-white text-center shadow-premium relative overflow-hidden group cursor-pointer">
                 <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4">Subscription</h4>
                 <p className="text-2xl font-black tracking-tight mb-2 leading-none uppercase">Premium Plus</p>
                 <p className="text-[10px] font-black uppercase tracking-widest text-white/60">3 Credits Remaining</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function OptionCard({ to, icon: Icon, title, desc }: { to: string, icon: any, title: string, desc: string }) {
  return (
    <Link to={to} className="group flex items-center gap-6 bg-[#FFFFFF] p-8 rounded-[40px] border border-[#99A88C]/10 hover:border-[#99A88C]/40 transition-all hover:shadow-xl">
       <div className="w-16 h-16 bg-[#FDF8E1] rounded-[24px] flex items-center justify-center text-[#99A88C] group-hover:bg-[#99A88C] group-hover:text-[#FFFFFF] transition-all duration-500 shadow-md">
          <Icon size={28} />
       </div>
       <div className="flex-1 text-left">
          <h4 className="text-xl font-black text-[#5E6C54] uppercase tracking-tight mb-2">{title}</h4>
          <p className="text-sm text-[#5E6C54]/60 font-medium leading-relaxed italic">{desc}</p>
       </div>
       <div className="w-10 h-10 rounded-full border border-[#99A88C]/20 flex items-center justify-center text-[#99A88C] group-hover:bg-[#99A88C] group-hover:text-[#FFFFFF] transition-all">
          <ArrowRight size={18} />
       </div>
    </Link>
  );
}

function QuickLink({ icon: Icon, label, sub, border }: { icon: any, label: string, sub: string, border?: boolean }) {
  return (
    <div className={`flex items-center gap-5 p-4 rounded-3xl hover:bg-[#FCF8E8] transition-all group cursor-pointer ${border ? 'border-b border-[#99A88C]/5' : ''}`}>
       <div className="w-10 h-10 bg-[#FCF8E8] text-[#99A88C] rounded-xl flex items-center justify-center group-hover:bg-[#99A88C] group-hover:text-white transition-all shadow-sm">
          <Icon size={18} />
       </div>
       <div>
          <p className="text-[10px] font-black text-[#5E6C54] uppercase tracking-widest mb-0.5">{label}</p>
          <p className="text-[10px] text-[#5E6C54]/40 font-bold uppercase tracking-tight">{sub}</p>
       </div>
    </div>
  );
}
