import { useState } from "react";
import { Calendar3, PlayFill, Clock, People, Search, Filter, ThreeDotsVertical, ArrowRightCircleFill } from "react-bootstrap-icons";

export function AdminSessionsPage() {
  const sessions = [
    { id: "S1284", client: "Sarah Mitchell", coach: "Coach Sharma", type: "Anxiety Breakthrough", status: "Live", started: "10 mins ago", duration: "50m" },
    { id: "S1283", client: "John Doe", coach: "Elena Rodriguez", type: "Career Pivot", status: "Starting Soon", started: "In 5 mins", duration: "50m" },
    { id: "S1282", client: "Anonymous #12", coach: "Coach Sharma", type: "Focus Session", status: "Completed", started: "2 hours ago", duration: "30m" },
    { id: "S1281", client: "Elena R.", coach: "Coach Sharma", type: "Cognition Boost", status: "Completed", started: "3 hours ago", duration: "50m" },
  ];

  return (
    <div className="animate-in fade-in duration-700 portal-context pb-20 space-y-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 px-2">
         <div>
            <h1 className="text-3xl lg:text-5xl font-black text-sage-dark font-serif uppercase tracking-tight">Session Monitoring</h1>
            <p className="text-sage-dark/40 text-[11px] font-black uppercase tracking-[0.4em] mt-2">Platform activity & Throughput</p>
         </div>
         
         <div className="flex items-center gap-4">
            <div className="bg-sage/10 text-sage px-6 py-4 rounded-2xl flex items-center gap-3">
               <div className="w-2 h-2 bg-sage rounded-full animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-widest">12 Live Sessions</span>
            </div>
         </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         <SmallStatCard label="Today's Total" value="84" icon={Calendar3} />
         <SmallStatCard label="Avg Duration" value="48m" icon={Clock} />
         <SmallStatCard label="Active Participants" value="24" icon={People} />
         <SmallStatCard label="Completion Rate" value="98%" icon={ArrowRightCircleFill} />
      </div>

      {/* Sessions Feed */}
      <div className="bg-white rounded-[48px] p-8 lg:p-10 border border-sage/5 shadow-premium">
         <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-bold text-sage-dark font-serif uppercase tracking-tight">Activity Feed</h3>
            <div className="flex items-center gap-3">
               <div className="relative hidden md:block">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-dark/30" size={16} />
                  <input type="text" placeholder="Filter sessions..." className="bg-cream/50 border border-sage/5 rounded-2xl pl-12 pr-6 py-3 text-[10px] font-bold uppercase tracking-widest outline-none" />
               </div>
               <button className="p-3 bg-white border border-sage/10 rounded-2xl text-sage-dark"><Filter size={16} /></button>
            </div>
         </div>

         <div className="space-y-4">
            {sessions.map((session) => (
               <div key={session.id} className="flex items-center justify-between p-6 rounded-[32px] bg-cream/20 border border-transparent hover:border-sage/20 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="flex items-center gap-8">
                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${session.status === 'Live' ? 'bg-sage text-white shadow-lg shadow-sage/20 animate-pulse' : 'bg-white text-sage-dark/30 shadow-sm'}`}>
                        {session.status === 'Live' ? <PlayFill size={28} /> : <Calendar3 size={24} />}
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                        <div>
                           <p className="text-sm font-bold text-sage-dark uppercase tracking-wide">{session.type}</p>
                           <p className="text-[10px] font-black text-sage-dark/30 uppercase tracking-widest mt-1">ID: {session.id} • {session.duration}</p>
                        </div>
                        <div className="hidden md:block">
                           <p className="text-xs font-bold text-sage-dark/60 uppercase tracking-widest">{session.client} + {session.coach}</p>
                           <p className="text-[9px] font-black text-sage uppercase tracking-widest mt-1">{session.started}</p>
                        </div>
                     </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                     <span className={`hidden md:block text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${session.status === 'Live' ? 'text-sage bg-sage/10' : 'text-sage-dark/40 bg-sage-dark/5'}`}>
                        {session.status}
                     </span>
                     <button className="p-3 bg-white rounded-xl text-sage-dark/20 hover:text-sage-dark transition-all shadow-sm">
                        <ThreeDotsVertical size={18} />
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}

function SmallStatCard({ label, value, icon: Icon }: { label: string, value: string, icon: any }) {
  return (
    <div className="bg-white p-6 rounded-[32px] shadow-premium border border-sage/5 flex flex-col gap-4">
       <div className="w-10 h-10 bg-cream rounded-xl flex items-center justify-center text-sage">
          <Icon size={18} />
       </div>
       <div>
          <p className="text-[9px] font-black text-sage-dark/30 uppercase tracking-widest mb-1">{label}</p>
          <p className="text-xl font-black text-sage-dark font-serif">{value}</p>
       </div>
    </div>
  );
}
