import { useState } from "react";
import { Calendar3, Clock, Person, ChevronRight, PlayFill, ThreeDotsVertical, Search, Filter } from "react-bootstrap-icons";
import { useUser } from "../../../context/UserContext";
import { Link } from "react-router";

export function AllSessionsPage() {
  const { role } = useUser();
  const [tab, setTab] = useState<"upcoming" | "history">("upcoming");

  const sessions = [
    {
      id: "S001",
      date: "April 15, 2026",
      time: "10:00 AM",
      partner: role === 'client' ? "Coach Sharma" : "Sarah Mitchell",
      type: "Anxiety Breakthrough",
      status: "Confirmed",
      isUpcoming: true
    },
    {
      id: "S002",
      date: "April 18, 2026",
      time: "02:00 PM",
      partner: role === 'client' ? "Coach Sharma" : "John Doe",
      type: "Focus & Resilience",
      status: "Confirmed",
      isUpcoming: true
    },
    {
      id: "H001",
      date: "April 08, 2026",
      time: "11:00 AM",
      partner: role === 'client' ? "Coach Sharma" : "Sarah Mitchell",
      type: "Discovery Call",
      status: "Completed",
      isUpcoming: false
    }
  ];

  const filteredSessions = sessions.filter(s => tab === 'upcoming' ? s.isUpcoming : !s.isUpcoming);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700 px-4 md:px-0 portal-context pb-20">
      {/* Header with Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl lg:text-4xl font-bold text-[#5E6C54] font-serif mb-2 uppercase tracking-tight">My Sessions</h1>
           <p className="text-[#5E6C54]/60 text-[11px] font-bold uppercase tracking-widest">Manage your breakthroughs and journey history.</p>
        </div>

        <div className="flex items-center gap-3">
           <div className="relative flex-1 lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5E6C54]/30" size={18} />
              <input 
                type="text" 
                placeholder="Search sessions..." 
                className="w-full bg-white border border-[#99A88C]/10 pl-12 pr-4 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest outline-none focus:border-[#99A88C] transition-all"
              />
           </div>
           <button className="p-3 bg-white border border-[#99A88C]/10 rounded-2xl text-[#5E6C54] hover:bg-[#FCF8E8] transition-colors shadow-sm">
              <Filter size={18} />
           </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-[#99A88C]/10 pb-1">
         <TabButton active={tab === 'upcoming'} onClick={() => setTab('upcoming')}>Upcoming ({sessions.filter(s => s.isUpcoming).length})</TabButton>
         <TabButton active={tab === 'history'} onClick={() => setTab('history')}>Past Journey</TabButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {filteredSessions.map((session) => (
           <div key={session.id} className="bg-white rounded-[40px] p-6 lg:p-10 border border-[#99A88C]/5 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                 <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-[#FCF8E8] rounded-2xl flex items-center justify-center text-[#99A88C] shadow-sm">
                          <Calendar3 size={20} />
                       </div>
                       <div>
                          <p className="text-xs font-black text-[#5E6C54] uppercase tracking-widest">{session.date}</p>
                          <p className="text-[10px] text-[#8A7340] font-black uppercase mt-1 tracking-widest">{session.time}</p>
                       </div>
                    </div>
                    <button className="p-2 text-[#5E6C54]/20 hover:text-[#5E6C54] transition-colors"><ThreeDotsVertical size={18} /></button>
                 </div>

                 <div className="mb-10">
                    <h3 className="text-xl lg:text-2xl font-bold text-[#5E6C54] font-serif mb-3 uppercase tracking-tight">{session.type}</h3>
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 bg-[#99A88C]/10 rounded-full flex items-center justify-center text-[#5E6C54]"><Person size={12} /></div>
                       <span className="text-[11px] font-bold text-[#5E6C54]/60 uppercase tracking-widest">{session.partner}</span>
                    </div>
                 </div>
              </div>

              <div className="pt-8 border-t border-[#FCF8E8] flex items-center justify-between mt-auto">
                 <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${session.isUpcoming ? 'bg-[#99A88C] animate-pulse' : 'bg-[#99A88C]/20'}`} />
                    <span className="text-[10px] font-black text-[#5E6C54]/40 uppercase tracking-widest">{session.status}</span>
                 </div>
                 
                 {session.isUpcoming ? (
                   <Link 
                     to={`/portal/sessions/${session.id}`}
                     className="px-8 py-3 bg-[#5E6C54] text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-[#5E6C54]/10 hover:scale-105 transition-all flex items-center gap-3"
                   >
                     Join Room <PlayFill size={12} />
                   </Link>
                 ) : (
                   <Link to={`/portal/sessions/${session.id}`} className="text-[10px] font-black text-[#8A7340] uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all group/link">
                     View Summary <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                   </Link>
                 )}
              </div>
           </div>
         ))}

         {tab === 'upcoming' && (
           <Link 
             to="/portal/book"
             className="border-2 border-dashed border-[#99A88C]/20 rounded-[40px] p-10 flex flex-col items-center justify-center text-center gap-6 group hover:border-[#99A88C]/40 hover:bg-white transition-all min-h-[320px] shadow-sm"
           >
              <div className="w-20 h-20 bg-[#FCF8E8] rounded-full flex items-center justify-center text-[#5E6C54] group-hover:scale-110 transition-transform shadow-sm">
                 <Calendar3 size={32} />
              </div>
              <div>
                 <h4 className="text-base font-black text-[#5E6C54] uppercase tracking-widest mb-2">Book New Session</h4>
                 <p className="text-[10px] text-[#5E6C54]/40 font-bold max-w-[200px] mx-auto uppercase tracking-widest leading-relaxed italic">"The journey of a thousand miles begins with a single step."</p>
              </div>
           </Link>
         )}
      </div>
    </div>
  );
}

function TabButton({ children, active, onClick }: { children: React.ReactNode, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`relative px-6 py-3 text-[11px] font-bold uppercase tracking-widest transition-all ${active ? 'text-[#5E6C54]' : 'text-[#5E6C54]/40 hover:text-[#5E6C54]'}`}
    >
      {children}
      {active && (
        <div className="absolute bottom-0 left-4 right-4 h-1 bg-[#99A88C] rounded-t-full shadow-[0_-2px_10px_rgba(153,168,140,0.3)] animate-in fade-in slide-in-from-bottom-1" />
      )}
    </button>
  );
}
