import { useState } from "react";
import { ShieldCheck, StarFill, CalendarRange, PersonCheckFill, Search, Filter, ThreeDotsVertical, ArrowUpRight } from "react-bootstrap-icons";

export function AdminCoachesPage() {
  const coaches = [
    { id: "CO01", name: "Coach Sharma", specialty: "Mental Clarity", rating: 4.9, sessions: 156, status: "Verified", joiningDate: "Dec 2025" },
    { id: "CO02", name: "Elena Rodriguez", specialty: "Emotional Intelligence", rating: 4.8, sessions: 89, status: "Verified", joiningDate: "Jan 2026" },
    { id: "CO03", name: "David Chen", specialty: "Career Pivot", rating: 5.0, sessions: 12, status: "Pending", joiningDate: "Mar 2026" },
    { id: "CO04", name: "Sarah Jenkins", specialty: "Grief Healing", rating: 4.7, sessions: 210, status: "Verified", joiningDate: "Oct 2025" },
  ];

  return (
    <div className="animate-in fade-in duration-700 portal-context pb-20 space-y-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 px-2">
         <div>
            <h1 className="text-3xl lg:text-5xl font-black text-sage-dark font-serif uppercase tracking-tight">Coach Sanctuary</h1>
            <p className="text-sage-dark/40 text-[11px] font-black uppercase tracking-[0.4em] mt-2">Manage certified professional staff</p>
         </div>
         
         <div className="flex items-center gap-4">
            <button className="bg-gold text-sage-dark px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 shadow-xl hover:bg-white transition-all">
               <ShieldCheck size={18} /> Verification Queue
            </button>
         </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <StatCard label="Platform Rating" value="4.85" icon={StarFill} color="text-gold" />
         <StatCard label="Total Professional Hours" value="2,480" icon={CalendarRange} color="text-sage" />
         <StatCard label="Active Capacity" value="94%" icon={PersonCheckFill} color="text-sage-dark" />
      </div>

      {/* Coaches Table */}
      <div className="bg-white rounded-[48px] overflow-hidden shadow-premium border border-sage/5">
         <div className="p-8 border-b border-sage/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h3 className="text-xl font-bold text-sage-dark font-serif uppercase tracking-tight">Certified Professionals</h3>
            <div className="flex items-center gap-4">
               <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-dark/30" size={16} />
                  <input type="text" placeholder="Search professionals..." className="bg-cream/50 border border-sage/5 rounded-2xl pl-12 pr-6 py-3 text-[10px] font-bold uppercase tracking-widest outline-none w-64" />
               </div>
               <button className="p-3 bg-white border border-sage/10 rounded-2xl text-sage-dark"><Filter size={16} /></button>
            </div>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-cream/20">
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Professional</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Specialty</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Performance</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Status</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Tenure</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Protocol</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-sage/5">
                  {coaches.map((coach) => (
                     <tr key={coach.id} className="hover:bg-cream/10 transition-colors">
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-sage-dark text-white rounded-2xl flex items-center justify-center font-serif text-lg font-bold">
                                 {coach.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                 <p className="text-sm font-bold text-sage-dark uppercase tracking-wide">{coach.name}</p>
                                 <p className="text-[9px] font-black text-sage-dark/30 uppercase tracking-widest mt-0.5">ID: {coach.id}</p>
                              </div>
                           </div>
                        </td>
                        <td className="px-8 py-6">
                           <span className="text-xs font-bold text-sage-dark/60 uppercase tracking-wide">{coach.specialty}</span>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1 text-gold">
                                 <StarFill size={12} />
                                 <span className="text-xs font-black">{coach.rating}</span>
                              </div>
                              <span className="text-[10px] font-black text-sage-dark/30 uppercase tracking-widest">{coach.sessions} Sessions</span>
                           </div>
                        </td>
                        <td className="px-8 py-6">
                           <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${coach.status === 'Verified' ? 'bg-sage/10 text-sage' : 'bg-gold/10 text-gold-dark animate-pulse'}`}>
                              {coach.status}
                           </span>
                        </td>
                        <td className="px-8 py-6 text-xs font-bold text-sage-dark/60">{coach.joiningDate}</td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-3">
                              <button className="p-2.5 bg-cream rounded-xl text-sage-dark/40 hover:text-sage-dark transition-all"><ArrowUpRight size={14} /></button>
                              <button className="p-2.5 bg-cream rounded-xl text-sage-dark/40 hover:text-sage-dark transition-all"><ThreeDotsVertical size={14} /></button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon: Icon, color }: { label: string, value: string, icon: any, color: string }) {
  return (
    <div className="bg-white p-8 rounded-[40px] shadow-premium border border-sage/5 flex items-center justify-between">
       <div>
          <p className="text-[10px] font-black text-sage-dark/30 uppercase tracking-[0.2em] mb-2">{label}</p>
          <h3 className="text-3xl font-black text-sage-dark font-serif">{value}</h3>
       </div>
       <div className={`w-14 h-14 bg-cream rounded-2xl flex items-center justify-center ${color}`}>
          <Icon size={24} />
       </div>
    </div>
  );
}
