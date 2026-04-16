import { Link, useParams } from "react-router";
import { ArrowLeft, CameraVideoFill, Calendar2CheckFill, ClockFill, FileEarmarkTextFill, PatchCheckFill, Trash3Fill, CalendarXFill } from "react-bootstrap-icons";

export function ClientSessionDetailPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#FCF8E8] pb-32 portal-context">
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <Link to="/portal/sessions" className="inline-flex items-center gap-2 text-[#5E6C54]/60 hover:text-[#5E6C54] transition-all mb-12">
           <ArrowLeft size={20} />
           <span className="font-bold text-xs uppercase tracking-widest">Back to All Sessions</span>
        </Link>
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
           {/* Left: Session Info */}
           <div className="lg:col-span-8 space-y-8">
              <div className="bg-white p-10 rounded-[48px] border border-[#99A88C]/10 shadow-sm relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#99A88C]/5 rounded-bl-[100px] -z-10" />
                 
                 <div className="flex items-center gap-4 mb-8">
                    <div className="px-4 py-1.5 bg-[#FCF8E8] text-[#99A88C] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#99A88C]/10">
                       Scheduled Session
                    </div>
                    <div className="flex items-center gap-2 text-[#8A7340]">
                       <PatchCheckFill size={14} />
                       <span className="text-[10px] font-black uppercase tracking-widest">Confirmed</span>
                    </div>
                 </div>
                 
                 <h1 className="text-4xl font-bold text-[#5E6C54] font-serif mb-6 leading-tight uppercase">Anxiety Breakthrough Session</h1>
                 <p className="text-[#5E6C54]/60 font-medium leading-relaxed mb-12 italic text-lg">
                    "A deep dive into grounding techniques and emotional processing with your mentor."
                 </p>
                 
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <DetailItem icon={Calendar2CheckFill} label="Date" val="April 15, 2026" />
                    <DetailItem icon={ClockFill} label="Time" val="10:00 AM (GST)" />
                    <DetailItem icon={CameraVideoFill} label="Mode" val="Identity-Video" />
                 </div>
              </div>

              <div className="bg-white p-10 rounded-[40px] border border-[#99A88C]/10 shadow-sm">
                 <h3 className="text-xl font-bold text-[#5E6C54] font-serif mb-8 uppercase tracking-tight">Preparation Notes</h3>
                 <div className="space-y-4">
                    <label className="flex gap-4 items-start p-4 bg-[#FCF8E8]/50 rounded-2xl">
                       <input type="checkbox" className="mt-1" />
                       <span className="text-sm text-[#5E6C54]/80 font-medium">Find a quiet, private space where you won't be interrupted.</span>
                    </label>
                    <label className="flex gap-4 items-start p-4 bg-[#FCF8E8]/50 rounded-2xl">
                       <input type="checkbox" className="mt-1" />
                       <span className="text-sm text-[#5E6C54]/80 font-medium">Have your journal and a glass of water nearby.</span>
                    </label>
                    <label className="flex gap-4 items-start p-4 bg-[#FCF8E8]/50 rounded-2xl">
                       <input type="checkbox" className="mt-1" />
                       <span className="text-sm text-[#5E6C54]/80 font-medium">Reflect on your emotional state for 5 minutes before joining.</span>
                    </label>
                 </div>
              </div>
           </div>

           {/* Right: Actions */}
           <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-36">
              <Link 
                to={`/session/${id}`}
                className="w-full py-6 bg-[#5E6C54] text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-2xl hover:scale-[1.03] transition-all flex items-center justify-center gap-3"
              >
                 Join Session Room <ArrowLeft size={18} className="rotate-180" />
              </Link>
              
              <div className="grid grid-cols-2 gap-4">
                 <ActionButton to="/portal/sessions/manage/reschedule" icon={CalendarXFill} label="Reschedule" color="text-[#A68A45]" />
                 <ActionButton to="/portal/sessions/manage/cancel" icon={Trash3Fill} label="Cancel" color="text-red-400" />
              </div>

              <div className="bg-[#5E6C54] p-8 rounded-[40px] text-white shadow-xl group cursor-pointer hover:bg-[#4A5D4E] transition-all">
                 <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <FileEarmarkTextFill size={24} className="text-[#8A7340]" />
                 </div>
                 <h4 className="text-lg font-bold font-serif mb-2">Previous Notes</h4>
                 <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.2em] mb-6">Review your last breakthrough</p>
                 <div className="flex gap-1">
                    {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#8A7340]" />)}
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
    <div className="space-y-2">
       <div className="flex items-center gap-2 text-[#99A88C]">
          <Icon size={16} />
          <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
       </div>
       <p className="text-sm font-bold text-[#5E6C54] tracking-tight">{val}</p>
    </div>
  );
}

function ActionButton({ to, icon: Icon, label, color }: { to: string, icon: any, label: string, color: string }) {
  return (
    <Link to={to} className={`bg-white p-6 rounded-[32px] border border-[#99A88C]/10 flex flex-col items-center gap-3 hover:shadow-lg transition-all shadow-sm`}>
       <Icon size={20} className={color} />
       <span className={`text-[9px] font-black uppercase tracking-widest ${color}`}>{label}</span>
    </Link>
  );
}
