import { useState } from "react";
import { Calendar3, Clock, Person, ChevronRight, PlayFill, ThreeDotsVertical, Search, Filter } from "react-bootstrap-icons";
import { useUser } from "../../../context/UserContext";
import { Link, useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function CoachSessionListPage() {
  const navigate = useNavigate();
  const { role } = useUser();
  const [tab, setTab] = useState<"upcoming" | "history">("upcoming");

  const sessions = [
    {
      id: "S101",
      date: "April 24, 2026",
      time: "09:00 AM",
      client: "Sarah Mitchell",
      type: "Mental Clarity",
      status: "Scheduled",
      isUpcoming: true,
      duration: "50 min"
    },
    {
      id: "S102",
      date: "April 24, 2026",
      time: "11:30 AM",
      client: "Michael Chen",
      type: "Peak Performance",
      status: "Scheduled",
      isUpcoming: true,
      duration: "50 min"
    },
    {
      id: "S103",
      date: "April 25, 2026",
      time: "03:00 PM",
      client: "Emma Watson",
      type: "Emotional Intelligence",
      status: "Pending",
      isUpcoming: true,
      duration: "50 min"
    },
    {
      id: "H101",
      date: "April 20, 2026",
      time: "10:00 AM",
      client: "John Smith",
      type: "Stress Management",
      status: "Completed",
      isUpcoming: false,
      duration: "50 min"
    }
  ];

  const filteredSessions = sessions.filter(s => tab === 'upcoming' ? s.isUpcoming : !s.isUpcoming);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700 px-4 md:px-0 portal-context pb-20">
      {/* Cinematic Header - Mobile Only */}
      <div className="lg:hidden relative -mx-4 -mt-8">
         <button 
            onClick={() => navigate(-1)}
            className="absolute top-12 left-6 z-20 w-10 h-10 bg-[#FFFFFF]/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-[#FFFFFF]/10 active:scale-95 transition-all"
         >
            <ChevronLeft size={20} />
         </button>

         <div className="bg-[#5E6C54] pt-24 pb-32 px-6 rounded-b-[80px] relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
            <div className="relative z-10">
               <h1 className="text-3xl font-black tracking-tight mb-2 !text-[#FFFFFF]" style={{ color: '#FFFFFF' }}>Managed Sessions</h1>
               <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.3em] !text-[#99A88C]">Your Professional Schedule</p>
            </div>
         </div>
      </div>

      {/* Header with Search - Desktop with Mobile Hidden */}
      <div className="hidden lg:flex bg-[#FFFFFF] p-6 rounded-[32px] md:p-0 md:bg-transparent shadow-sm md:shadow-none flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl lg:text-4xl font-bold text-[#5E6C54] font-serif mb-2 uppercase tracking-tight">Managed Sessions</h1>
           <p className="text-[#5E6C54]/60 text-[11px] font-bold uppercase tracking-widest">Track and manage your professional coaching sessions.</p>
        </div>

        <div className="flex items-center gap-3">
           <div className="relative flex-1 lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5E6C54]/30" size={18} />
              <input 
                type="text" 
                placeholder="Search clients or sessions..." 
                className="w-full bg-[#FFFFFF] border border-[#99A88C]/10 pl-12 pr-4 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest outline-none focus:border-[#99A88C] transition-all"
              />
           </div>
           <button className="p-3 bg-[#FFFFFF] border border-[#99A88C]/10 rounded-2xl text-[#5E6C54] hover:bg-[#FCF8E8] transition-colors shadow-sm">
              <Filter size={18} />
           </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-sage/10 pb-1">
         <TabButton active={tab === 'upcoming'} onClick={() => setTab('upcoming')}>Upcoming ({sessions.filter(s => s.isUpcoming).length})</TabButton>
         <TabButton active={tab === 'history'} onClick={() => setTab('history')}>Previous Sessions</TabButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {filteredSessions.map((session) => (
           <div key={session.id} className="bg-white rounded-[40px] p-6 lg:p-10 border border-sage/5 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                 <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center text-sage shadow-sm">
                          <Calendar3 size={20} />
                       </div>
                       <div>
                          <p className="text-xs font-black text-sage-dark uppercase tracking-widest">{session.date}</p>
                          <p className="text-[10px] text-gold-dark font-black uppercase mt-1 tracking-widest">{session.time} • {session.duration}</p>
                       </div>
                    </div>
                    <button className="p-2 text-sage-dark/20 hover:text-sage-dark transition-colors"><ThreeDotsVertical size={18} /></button>
                 </div>

                 <div className="mb-10">
                    <h3 className="text-xl lg:text-2xl font-bold text-sage-dark font-serif mb-3 uppercase tracking-tight">{session.type}</h3>
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 bg-sage/10 rounded-full flex items-center justify-center text-sage-dark"><Person size={12} /></div>
                       <span className="text-[11px] font-bold text-sage-dark/60 uppercase tracking-widest">{session.client}</span>
                    </div>
                 </div>
              </div>

              <div className="pt-8 border-t border-cream flex items-center justify-between mt-auto">
                 <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${session.isUpcoming ? (session.status === 'Scheduled' ? 'bg-sage animate-pulse' : 'bg-gold animate-bounce') : 'bg-sage/20'}`} />
                    <span className="text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">{session.status}</span>
                 </div>
                 
                 {session.isUpcoming ? (
                   <Link 
                     to={`/session/${session.id}`}
                     className="px-8 py-3 bg-sage-dark text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-sage-dark/10 hover:scale-105 transition-all flex items-center gap-3"
                   >
                     Launch <PlayFill size={12} />
                   </Link>
                 ) : (
                   <Link to={`/coach/sessions/${session.id}`} className="text-[10px] font-black text-gold-dark uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all group/link">
                     Session Notes <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                   </Link>
                 )}
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}

function TabButton({ children, active, onClick }: { children: React.ReactNode, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`relative px-6 py-3 text-[11px] font-bold uppercase tracking-widest transition-all ${active ? 'text-sage-dark' : 'text-sage-dark/40 hover:text-sage-dark'}`}
    >
      {children}
      {active && (
        <div className="absolute bottom-0 left-4 right-4 h-1 bg-sage rounded-t-full shadow-[0_-2px_10px_rgba(153,168,140,0.3)] animate-in fade-in slide-in-from-bottom-1" />
      )}
    </button>
  );
}
