import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, ChatDotsFill, TelephoneFill, ThreeDots, StarFill, CalendarCheck, FileTextFill, Activity } from "react-bootstrap-icons";

export function CoachClientProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"overview" | "notes" | "sessions">("overview");

  // Mock data for the client
  const client = {
    id: id || "C001",
    name: "Sarah Mitchell",
    email: "sarah.m@example.com",
    goal: "Anxiety Control & Focus",
    joined: "Jan 12, 2026",
    status: "Active",
    progress: 82,
    nextSession: "April 24, 2026",
    totalSessions: 14,
    recentNotes: [
      { date: "April 15", content: "Client showed significant improvement in breathwork techniques. Recommended increasing meditation duration to 15 mins." },
      { date: "April 08", content: "Discussed workplace triggers. Sarah is implementing the '5-second rule' for decision making." }
    ],
    sessions: [
      { id: "S101", date: "April 15", type: "Anxiety Breakthrough", status: "Completed" },
      { id: "S102", date: "April 08", type: "Focus & Resilience", status: "Completed" },
      { id: "S103", date: "April 01", type: "Discovery Call", status: "Completed" }
    ]
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700 px-4 md:px-0 portal-context pb-20">
      {/* Header / Profile Summary */}
      <div className="bg-white rounded-[48px] p-8 lg:p-12 border border-sage/5 shadow-premium overflow-hidden relative">
         <div className="absolute top-0 right-0 w-64 h-64 bg-sage/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
         
         <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="flex items-center gap-6">
               <button 
                  onClick={() => navigate(-1)}
                  className="p-3 bg-cream rounded-2xl text-sage-dark hover:bg-sage hover:text-white transition-all"
               >
                  <ChevronLeft size={20} />
               </button>
               <div className="w-20 h-20 bg-sage-dark text-white rounded-3xl flex items-center justify-center font-serif text-3xl font-bold shadow-xl">
                  {client.name.split(' ').map(n => n[0]).join('')}
               </div>
               <div>
                  <h1 className="text-3xl font-bold text-sage-dark font-serif uppercase tracking-tight">{client.name}</h1>
                  <p className="text-[10px] text-gold-dark font-black uppercase tracking-[0.2em] mt-1">{client.goal}</p>
                  <div className="flex items-center gap-3 mt-4">
                     <span className="px-3 py-1 bg-sage/10 text-sage rounded-full text-[9px] font-black uppercase tracking-widest">{client.status}</span>
                     <span className="text-[9px] text-sage-dark/40 font-bold uppercase tracking-widest">Joined {client.joined}</span>
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-3">
               <button className="flex-1 lg:flex-none px-6 py-4 bg-sage text-white rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-sage-dark transition-all shadow-lg">
                  <ChatDotsFill size={16} /> Message
               </button>
               <button className="p-4 bg-cream text-sage-dark rounded-2xl hover:bg-sage/10 transition-all border border-sage/5">
                  <TelephoneFill size={18} />
               </button>
               <button className="p-4 bg-cream text-sage-dark rounded-2xl hover:bg-sage/10 transition-all border border-sage/5">
                  <ThreeDots size={18} />
               </button>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Left Column: Stats & Progress */}
         <div className="space-y-8">
            <div className="bg-[#5E6C54] rounded-[40px] p-8 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-10"><Activity size={48} /></div>
               <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-[#99A88C]">Growth Overview</h3>
               <div className="flex items-end justify-between mb-4">
                  <p className="text-5xl font-black font-serif">{client.progress}%</p>
                  <p className="text-[10px] font-black text-[#99A88C] uppercase tracking-widest mb-1">+12% this month</p>
               </div>
               <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#99A88C] rounded-full" style={{ width: `${client.progress}%` }} />
               </div>
            </div>

            <div className="bg-white rounded-[40px] p-8 border border-sage/5 shadow-premium">
               <h3 className="text-[10px] font-black text-sage-dark/40 uppercase tracking-widest mb-8">Vital Metrics</h3>
               <div className="space-y-6">
                  <MetricRow icon={CalendarCheck} label="Total Sessions" value={client.totalSessions} />
                  <MetricRow icon={StarFill} label="Satisfaction" value="4.9/5" />
                  <MetricRow icon={Activity} label="Engagement" value="High" color="text-sage" />
               </div>
            </div>
         </div>

         {/* Middle & Right Column: Tabs */}
         <div className="lg:col-span-2 bg-white rounded-[48px] p-8 lg:p-10 border border-sage/5 shadow-premium">
            <div className="flex gap-8 border-b border-sage/5 mb-10 pb-2">
               <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>Clinical Notes</TabButton>
               <TabButton active={activeTab === 'sessions'} onClick={() => setActiveTab('sessions')}>Full History</TabButton>
            </div>

            {activeTab === 'overview' && (
               <div className="space-y-8">
                  <div className="flex items-center justify-between">
                     <h2 className="text-xl font-bold text-sage-dark font-serif uppercase tracking-tight">Recent Insights</h2>
                     <button className="text-[10px] font-black text-sage uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                        <FileTextFill size={14} /> Add Note
                     </button>
                  </div>
                  
                  <div className="space-y-6">
                     {client.recentNotes.map((note, i) => (
                        <div key={i} className="p-6 rounded-3xl bg-cream/50 border border-sage/5 relative group hover:bg-white hover:shadow-md transition-all">
                           <div className="flex items-center justify-between mb-4">
                              <span className="text-[9px] font-black text-sage-dark/30 uppercase tracking-widest">{note.date}</span>
                              <button className="opacity-0 group-hover:opacity-100 transition-opacity"><ThreeDots size={14} /></button>
                           </div>
                           <p className="text-sm font-medium text-sage-dark/70 leading-relaxed italic">"{note.content}"</p>
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {activeTab === 'sessions' && (
               <div className="space-y-4">
                  {client.sessions.map((session) => (
                     <div key={session.id} className="flex items-center justify-between p-6 rounded-3xl bg-white border border-sage/5 hover:border-sage/20 transition-all group">
                        <div className="flex items-center gap-6">
                           <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center text-sage">
                              <CalendarCheck size={20} />
                           </div>
                           <div>
                              <h4 className="text-sm font-bold text-sage-dark uppercase tracking-wide">{session.type}</h4>
                              <p className="text-[10px] font-black text-sage-dark/30 uppercase tracking-widest mt-1">{session.date}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-6">
                           <span className="text-[9px] font-black text-sage uppercase tracking-widest">{session.status}</span>
                           <button className="p-2 text-sage-dark/20 group-hover:text-sage-dark transition-colors"><ChevronRight size={18} /></button>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>
    </div>
  );
}

function MetricRow({ icon: Icon, label, value, color }: { icon: any, label: string, value: string | number, color?: string }) {
  return (
    <div className="flex items-center justify-between">
       <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-cream rounded-lg flex items-center justify-center text-sage-dark/40">
             <Icon size={14} />
          </div>
          <span className="text-[10px] font-bold text-sage-dark/60 uppercase tracking-widest">{label}</span>
       </div>
       <span className={`text-xs font-black uppercase tracking-widest ${color || 'text-sage-dark'}`}>{value}</span>
    </div>
  );
}

function TabButton({ children, active, onClick }: { children: React.ReactNode, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`relative py-3 text-[11px] font-black uppercase tracking-widest transition-all ${active ? 'text-sage-dark' : 'text-sage-dark/30 hover:text-sage-dark'}`}
    >
      {children}
      {active && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-sage rounded-t-full shadow-[0_-2px_10px_rgba(153,168,140,0.3)] animate-in fade-in slide-in-from-bottom-1" />
      )}
    </button>
  );
}
