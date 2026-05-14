import { useState } from "react";
import { Calendar3, Person, ChevronRight, PlayFill, ThreeDotsVertical, Search, Filter } from "react-bootstrap-icons";
import { useUser } from "../../../context/UserContext";
import { Link, useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function AllSessionsPage() {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-[#F4F7FA] pb-24 portal-context animate-in fade-in slide-in-from-bottom-5 duration-700">
      
      {/* ── Mobile Header ── */}
      <div className="relative lg:hidden">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-5 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/10 active:scale-95 transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="bg-[#2D3324] pt-20 pb-16 px-6 rounded-b-[64px] relative overflow-hidden text-center border-t border-white/5 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#A68A45]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-3xl font-black text-white tracking-tight font-serif italic mb-2">My Sessions</h1>
            <p className="text-[#8B9A71] text-[10px] font-black uppercase tracking-[0.35em]">Breakthroughs & Journey</p>
          </div>
        </div>
      </div>
          

      {/* ── Desktop Header ── */}
      <div className="hidden lg:flex bg-[#2D3324] pt-20 pb-20 px-12 rounded-b-[60px] relative overflow-hidden shadow-xl z-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full relative z-10 flex items-center justify-between">
           <div>
              <h1 className="text-4xl font-black text-white font-serif italic mb-2 tracking-tight">My Sessions</h1>
              <p className="text-[#8B9A71] text-[10px] font-black uppercase tracking-widest">Manage your breakthroughs and journey history.</p>
           </div>
           
           <div className="flex items-center gap-3">
              <div className="relative w-72">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                 <input 
                   type="text" 
                   placeholder="Search sessions..." 
                   className="w-full bg-white/10 border border-white/10 pl-12 pr-4 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none text-white focus:bg-white/20 transition-all placeholder:text-white/40"
                 />
              </div>
              <button className="p-3.5 bg-white/10 border border-white/10 rounded-2xl text-[#8B9A71] hover:bg-white/20 hover:text-white transition-colors">
                 <Filter size={18} />
              </button>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-12 mt-6 lg:-mt-6 relative z-30 space-y-6">
        
        {/* Tabs */}
        <div className="flex gap-4 border-b border-[#8B9A71]/10 pb-1 px-2">
           <TabButton active={tab === 'upcoming'} onClick={() => setTab('upcoming')}>Upcoming ({sessions.filter(s => s.isUpcoming).length})</TabButton>
           <TabButton active={tab === 'history'} onClick={() => setTab('history')}>Past Journey</TabButton>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
           {filteredSessions.map((session) => (
             <div key={session.id} className="bg-white rounded-[32px] md:rounded-[40px] p-6 lg:p-8 border border-[#8B9A71]/10 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div>
                   <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-[#F4F7FA] rounded-[16px] flex items-center justify-center text-[#8B9A71] border border-[#8B9A71]/10">
                            <Calendar3 size={18} />
                         </div>
                         <div>
                            <p className="text-[10px] font-black text-[#2D3324] uppercase tracking-widest">{session.date}</p>
                            <p className="text-[9px] text-[#A68A45] font-black uppercase mt-1 tracking-widest">{session.time}</p>
                         </div>
                      </div>
                      <button className="p-2 text-[#8B9A71]/40 hover:text-[#8B9A71] transition-colors"><ThreeDotsVertical size={18} /></button>
                   </div>

                   <div className="mb-8">
                      <h3 className="text-xl md:text-2xl font-bold text-[#2D3324] font-serif mb-3 uppercase tracking-tight">{session.type}</h3>
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 bg-[#8B9A71]/10 rounded-full flex items-center justify-center text-[#2D3324]"><Person size={12} /></div>
                         <span className="text-[10px] font-black text-[#8B9A71] uppercase tracking-widest">{session.partner}</span>
                      </div>
                   </div>
                </div>

                <div className="pt-6 border-t border-[#F4F7FA] flex items-center justify-between mt-auto">
                   <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${session.isUpcoming ? 'bg-[#8B9A71] animate-pulse' : 'bg-[#8B9A71]/30'}`} />
                      <span className="text-[9px] font-black text-[#2D3324]/50 uppercase tracking-widest">{session.status}</span>
                   </div>
                   
                   {session.isUpcoming ? (
                     <Link 
                       to={`/session/${session.id}`}
                       className="px-6 py-3 bg-[#2D3324] text-white rounded-[14px] text-[9px] font-black uppercase tracking-widest shadow-xl shadow-[#2D3324]/10 hover:scale-105 hover:bg-[#8B9A71] transition-all flex items-center gap-3"
                     >
                       Join Room <PlayFill size={12} />
                     </Link>
                   ) : (
                     <Link to={`/portal/sessions/${session.id}`} className="text-[9px] font-black text-[#A68A45] uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all group/link">
                       View Summary <ChevronRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                     </Link>
                   )}
                </div>
             </div>
           ))}

           {tab === 'upcoming' && (
             <Link 
               to="/portal/book"
               className="border-2 border-dashed border-[#8B9A71]/20 rounded-[32px] md:rounded-[40px] p-8 flex flex-col items-center justify-center text-center gap-5 group hover:border-[#8B9A71]/40 hover:bg-white transition-all min-h-[280px] shadow-sm"
             >
                <div className="w-16 h-16 bg-[#F4F7FA] border border-[#8B9A71]/10 rounded-[20px] flex items-center justify-center text-[#2D3324] group-hover:scale-110 group-hover:bg-[#8B9A71] group-hover:text-white transition-all shadow-sm">
                   <Calendar3 size={24} />
                </div>
                <div>
                   <h4 className="text-[11px] font-black text-[#2D3324] uppercase tracking-widest mb-2">Book New Session</h4>
                   <p className="text-[10px] text-[#8B9A71] font-bold max-w-[200px] mx-auto uppercase tracking-widest leading-relaxed">"The journey of a thousand miles begins with a single step."</p>
                </div>
             </Link>
           )}
        </div>
      </div>
    </div>
  );
}

function TabButton({ children, active, onClick }: { children: React.ReactNode, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`relative px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${active ? 'text-[#2D3324]' : 'text-[#8B9A71]/50 hover:text-[#2D3324]'}`}
    >
      {children}
      {active && (
        <div className="absolute bottom-0 left-3 right-3 h-1 bg-[#8B9A71] rounded-t-full shadow-[0_-2px_10px_rgba(139,154,113,0.3)] animate-in fade-in slide-in-from-bottom-1" />
      )}
    </button>
  );
}
