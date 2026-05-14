import { Link, useParams, useNavigate } from "react-router";
import { CameraVideoFill, Calendar2CheckFill, ClockFill, FileEarmarkTextFill, PatchCheckFill, Trash3Fill, CalendarXFill, ArrowRight } from "react-bootstrap-icons";
import { ChevronLeft, CalendarHeart, FileText } from "lucide-react";

export function ClientSessionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F4F7FA] pb-32 portal-context animate-in fade-in duration-700">
      
      {/* ── Header ── */}
      <div className="relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-5 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/10 active:scale-95 transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="bg-[#2D3324] pt-20 pb-24 px-6 rounded-b-[64px] relative overflow-hidden text-center border-t border-white/5 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8B9A71]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-[22px] flex items-center justify-center mb-5 border border-white/10 backdrop-blur-md">
              <CalendarHeart size={26} className="text-[#8B9A71]" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight font-serif italic mb-2">Session Details</h1>
            <p className="text-[#8B9A71] text-[10px] font-black uppercase tracking-[0.35em]">Deep dive into your progress</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 -mt-10 relative z-10 space-y-6">
        
        <div className="grid lg:grid-cols-12 gap-6 items-start">
           {/* Left: Session Info */}
           <div className="lg:col-span-8 space-y-6">
              <div className="bg-white p-6 md:p-10 rounded-[32px] md:rounded-[48px] border border-[#8B9A71]/10 shadow-sm relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B9A71]/5 rounded-bl-[100px] -z-10" />
                 
                 <div className="flex flex-wrap items-center gap-4 mb-6 md:mb-8">
                    <div className="px-4 py-2 bg-[#F4F7FA] text-[#2D3324] rounded-[12px] text-[9px] font-black uppercase tracking-widest border border-[#8B9A71]/10">
                       Scheduled Session
                    </div>
                    <div className="flex items-center gap-2 text-[#A68A45] bg-[#A68A45]/10 px-4 py-2 rounded-[12px]">
                       <PatchCheckFill size={14} />
                       <span className="text-[9px] font-black uppercase tracking-widest">Confirmed</span>
                    </div>
                 </div>
                 
                 <h1 className="text-2xl md:text-4xl font-bold text-[#2D3324] font-serif mb-4 leading-tight uppercase">Anxiety Breakthrough Session</h1>
                 <p className="text-[#8B9A71] font-medium leading-relaxed mb-8 italic text-sm md:text-lg">
                    "A deep dive into grounding techniques and emotional processing with your mentor."
                 </p>
                 
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6 bg-[#F4F7FA] p-6 rounded-[24px]">
                    <DetailItem icon={Calendar2CheckFill} label="Date" val="April 15, 2026" />
                    <DetailItem icon={ClockFill} label="Time" val="10:00 AM (GST)" />
                    <DetailItem icon={CameraVideoFill} label="Mode" val="Video Call" />
                 </div>
              </div>

              <div className="bg-white p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-[#8B9A71]/10 shadow-sm">
                 <h3 className="text-base md:text-xl font-bold text-[#2D3324] font-serif mb-6 uppercase tracking-tight">Preparation Notes</h3>
                 <div className="space-y-3">
                    <label className="flex gap-4 items-start p-4 bg-[#F4F7FA] rounded-[20px] cursor-pointer group hover:bg-[#8B9A71]/5 transition-all">
                       <input type="checkbox" className="mt-1 w-4 h-4 accent-[#8B9A71] cursor-pointer" />
                       <span className="text-xs md:text-sm text-[#2D3324]/80 font-medium leading-snug">Find a quiet, private space where you won't be interrupted.</span>
                    </label>
                    <label className="flex gap-4 items-start p-4 bg-[#F4F7FA] rounded-[20px] cursor-pointer group hover:bg-[#8B9A71]/5 transition-all">
                       <input type="checkbox" className="mt-1 w-4 h-4 accent-[#8B9A71] cursor-pointer" />
                       <span className="text-xs md:text-sm text-[#2D3324]/80 font-medium leading-snug">Have your journal and a glass of water nearby.</span>
                    </label>
                    <label className="flex gap-4 items-start p-4 bg-[#F4F7FA] rounded-[20px] cursor-pointer group hover:bg-[#8B9A71]/5 transition-all">
                       <input type="checkbox" className="mt-1 w-4 h-4 accent-[#8B9A71] cursor-pointer" />
                       <span className="text-xs md:text-sm text-[#2D3324]/80 font-medium leading-snug">Reflect on your emotional state for 5 minutes before joining.</span>
                    </label>
                 </div>
              </div>
           </div>

           {/* Right: Actions */}
           <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
              <Link 
                to={`/session/${id}`}
                className="w-full py-5 bg-[#2D3324] text-white rounded-[20px] font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-[1.02] hover:bg-[#8B9A71] transition-all flex items-center justify-center gap-3 border border-white/10"
              >
                 Join Session Room <ArrowRight size={18} />
              </Link>
              
              <div className="grid grid-cols-2 gap-4">
                 <ActionButton to="/portal/sessions/manage/reschedule" icon={CalendarXFill} label="Reschedule" color="text-[#A68A45]" />
                 <ActionButton to="/portal/sessions/manage/cancel" icon={Trash3Fill} label="Cancel" color="text-red-400" />
              </div>

              <div className="bg-[#8B9A71] p-6 md:p-8 rounded-[32px] text-white shadow-xl group cursor-pointer hover:bg-[#2D3324] transition-all duration-500 overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                 <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-[16px] flex items-center justify-center mb-6 border border-white/10 relative z-10">
                    <FileText size={24} className="text-white" />
                 </div>
                 <h4 className="text-lg font-bold font-serif mb-2 relative z-10">Previous Notes</h4>
                 <p className="text-[9px] text-white/80 font-black uppercase tracking-[0.2em] mb-6 relative z-10 leading-relaxed">Review your last breakthrough</p>
                 <div className="flex gap-1.5 relative z-10">
                    {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white transition-all" />)}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ icon: Icon, label, val }: { icon: any, label: string, val: string }) {
  return (
    <div className="space-y-1.5">
       <div className="flex items-center gap-2 text-[#8B9A71]">
          <Icon size={14} />
          <span className="text-[8px] font-black uppercase tracking-widest">{label}</span>
       </div>
       <p className="text-xs md:text-sm font-bold text-[#2D3324] tracking-tight">{val}</p>
    </div>
  );
}

function ActionButton({ to, icon: Icon, label, color }: { to: string, icon: any, label: string, color: string }) {
  return (
    <Link to={to} className={`bg-white p-5 rounded-[24px] border border-[#8B9A71]/10 flex flex-col items-center gap-3 hover:shadow-md hover:border-[#8B9A71]/30 transition-all shadow-sm`}>
       <Icon size={20} className={color} />
       <span className={`text-[9px] font-black uppercase tracking-widest ${color}`}>{label}</span>
    </Link>
  );
}
