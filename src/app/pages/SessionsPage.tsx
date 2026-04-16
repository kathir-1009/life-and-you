import { useState } from "react";
import { Calendar, Clock, User, ChevronRight, Play, MoreVertical, Search, Filter } from "lucide-react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router";

export function SessionsPage() {
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
           <h1 className="text-3xl lg:text-4xl font-bold text-[#99A88C] font-serif mb-2">My Sessions</h1>
           <p className="text-[#99A88C]/60 text-sm font-medium">Manage your breakthroughs and journey history.</p>
        </div>

        <div className="flex items-center gap-3">
           <div className="relative flex-1 lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#99A88C]/30" size={18} />
              <input 
                type="text" 
                placeholder="Search sessions..." 
                className="w-full bg-white border border-[#99A88C]/10 pl-12 pr-4 py-3 rounded-2xl text-xs outline-none focus:border-[#C4A35A] transition-all"
              />
           </div>
           <button className="p-3 bg-white border border-[#99A88C]/10 rounded-2xl text-[#99A88C] hover:bg-[#FCF8E8] transition-colors">
              <Filter size={18} />
           </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-[#99A88C]/10 pb-1">
         <TabButton active={tab === 'upcoming'} onClick={() => setTab('upcoming')}>Upcoming (2)</TabButton>
         <TabButton active={tab === 'history'} onClick={() => setTab('history')}>Past Journey</TabButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {filteredSessions.map((session) => (
           <div key={session.id} className="bg-white rounded-[32px] p-6 lg:p-8 border border-[#99A88C]/5 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-[#EDF2EE] rounded-xl flex items-center justify-center text-[#99A88C]">
                          <Calendar size={18} />
                       </div>
                       <div>
                          <p className="text-xs font-black text-[#99A88C] uppercase tracking-widest">{session.date}</p>
                          <p className="text-[10px] text-[#A68A45] font-black uppercase mt-0.5">{session.time}</p>
                       </div>
                    </div>
                    <button className="p-2 text-[#99A88C]/20 hover:text-[#99A88C] transition-colors"><MoreVertical size={18} /></button>
                 </div>

                 <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#99A88C] font-serif mb-2">{session.type}</h3>
                    <div className="flex items-center gap-2">
                       <div className="w-5 h-5 bg-[#99A88C]/10 rounded-full flex items-center justify-center text-[#99A88C]"><User size={10} /></div>
                       <span className="text-xs font-bold text-[#99A88C]/60">{session.partner}</span>
                    </div>
                 </div>
              </div>

              <div className="pt-6 border-t border-[#FCF8E8] flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${session.isUpcoming ? 'bg-green-500 animate-pulse' : 'bg-[#99A88C]/20'}`} />
                    <span className="text-[10px] font-black text-[#99A88C]/40 uppercase tracking-widest">{session.status}</span>
                 </div>
                 
                 {session.isUpcoming ? (
                   <Link 
                     to={`/session/${session.id}`}
                     className="px-6 py-2.5 bg-[#99A88C] text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#99A88C]/10 hover:bg-[#99A88C] transition-all flex items-center gap-2"
                   >
                     Join Room <Play size={10} fill="currentColor" />
                   </Link>
                 ) : (
                   <button className="text-[10px] font-black text-[#A68A45] uppercase tracking-widest flex items-center gap-1 hover:gap-3 transition-all">
                     View Summary <ChevronRight size={14} />
                   </button>
                 )}
              </div>
           </div>
         ))}

         {tab === 'upcoming' && (
           <Link 
             to="/portal/book"
             className="border-2 border-dashed border-[#99A88C]/20 rounded-[32px] p-8 flex flex-col items-center justify-center text-center gap-4 group hover:border-[#99A88C]/40 hover:bg-white transition-all min-h-[280px]"
           >
              <div className="w-16 h-16 bg-[#FCF8E8] rounded-full flex items-center justify-center text-[#99A88C] group-hover:scale-110 transition-transform">
                 <Calendar size={28} />
              </div>
              <div>
                 <p className="text-sm font-black text-[#99A88C] uppercase tracking-widest mb-1">Book New Session</p>
                 <p className="text-xs text-[#99A88C]/40 font-bold max-w-[160px] mx-auto uppercase tracking-tighter">Your transformation is just one click away.</p>
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
      className={`relative px-4 py-2 text-xs font-black uppercase tracking-widest transition-all ${active ? 'text-[#99A88C]' : 'text-[#99A88C]/40 hover:text-[#99A88C]'}`}
    >
      {children}
      {active && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#99A88C] rounded-t-full shadow-[0_-2px_10px_rgba(61,82,71,0.2)] animate-in fade-in slide-in-from-bottom-1" />
      )}
    </button>
  );
}
