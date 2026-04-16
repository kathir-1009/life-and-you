import { useState } from "react";
import { PeopleFill, Search, Filter, ThreeDotsVertical, ChatDotsFill, ClockHistory, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router";

export function CoachClientListPage() {
  const clients = [
    { id: "C001", name: "Sarah Mitchell", goal: "Anxiety Control", status: "Active", lastSession: "2 days ago", progress: 82 },
    { id: "C002", name: "John Doe", goal: "Career Pivot", status: "Active", lastSession: "5 days ago", progress: 45 },
    { id: "C003", name: "Anonymous #124", goal: "Grief Healing", status: "High Priority", lastSession: "Yesterday", progress: 15 },
    { id: "C004", name: "Elena Rodriguez", goal: "Self-Confidence", status: "Stable", lastSession: "1 week ago", progress: 91 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700 px-4 md:px-0 portal-context pb-20">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl lg:text-4xl font-bold text-[#5E6C54] font-serif mb-2 uppercase tracking-tight">Mentee Directory</h1>
           <p className="text-[#5E6C54]/60 text-[11px] font-bold uppercase tracking-widest">Track progress and manage relationships with your clients.</p>
        </div>

        <div className="flex items-center gap-3">
           <div className="relative flex-1 lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5E6C54]/30" size={18} />
              <input 
                type="text" 
                placeholder="Search clients..." 
                className="w-full bg-white border border-[#99A88C]/10 pl-12 pr-4 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest outline-none focus:border-[#99A88C] transition-all"
              />
           </div>
           <button className="p-3 bg-white border border-[#99A88C]/10 rounded-2xl text-[#5E6C54] hover:bg-[#FCF8E8] transition-colors shadow-sm">
              <Filter size={18} />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {clients.map((client) => (
           <div key={client.id} className="bg-white rounded-[40px] p-8 border border-[#99A88C]/5 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                 <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 bg-[#FCF8E8] rounded-2xl flex items-center justify-center text-[#99A88C] shadow-sm font-serif text-xl font-bold">
                       {client.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex gap-2">
                       <IconButton icon={ChatDotsFill} />
                       <IconButton icon={ThreeDotsVertical} />
                    </div>
                 </div>

                 <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#5E6C54] font-serif mb-1 uppercase tracking-tight">{client.name}</h3>
                    <p className="text-[10px] text-[#8A7340] font-black uppercase tracking-[0.2em]">{client.goal}</p>
                 </div>

                 <div className="space-y-4 mb-10">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                       <span className="text-[#5E6C54]/40">Growth Score</span>
                       <span className="text-[#99A88C]">{client.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-[#FCF8E8] rounded-full overflow-hidden">
                       <div className="h-full bg-[#99A88C] rounded-full transition-all duration-1000" style={{ width: `${client.progress}%` }} />
                    </div>
                 </div>
              </div>

              <div className="pt-8 border-t border-[#FCF8E8] flex items-center justify-between mt-auto">
                 <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                       <ClockHistory size={12} className="text-[#5E6C54]/30" />
                       <span className="text-[9px] font-black text-[#5E6C54]/40 uppercase tracking-widest">{client.lastSession}</span>
                    </div>
                    <div className="px-2 py-0.5 bg-[#99A88C]/10 text-[#99A88C] rounded-full text-[8px] font-black uppercase tracking-widest inline-block w-fit">
                       {client.status}
                    </div>
                 </div>
                 
                 <Link 
                   to={`/coach/clients/${client.id}`}
                   className="w-12 h-12 bg-[#5E6C54] text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:translate-x-1 transition-transform"
                 >
                    <ArrowRight size={20} />
                 </Link>
              </div>
           </div>
         ))}

         <button className="border-2 border-dashed border-[#99A88C]/20 rounded-[40px] p-10 flex flex-col items-center justify-center text-center gap-4 group hover:border-[#99A88C]/40 hover:bg-white transition-all min-h-[300px] shadow-sm">
            <div className="w-16 h-16 bg-[#FCF8E8] rounded-full flex items-center justify-center text-[#5E6C54] group-hover:scale-110 transition-transform">
               <PeopleFill size={28} />
            </div>
            <div>
               <p className="text-sm font-black text-[#5E6C54] uppercase tracking-widest mb-1">Onboard Client</p>
               <p className="text-[9px] text-[#5E6C54]/40 font-bold max-w-[160px] mx-auto uppercase tracking-widest">Manually invite a new mentee to your sanctuary.</p>
            </div>
         </button>
      </div>
    </div>
  );
}

function IconButton({ icon: Icon }: { icon: any }) {
  return (
    <button className="p-2.5 bg-white border border-[#99A88C]/10 rounded-xl text-[#5E6C54]/40 hover:text-[#5E6C54] hover:bg-[#FCF8E8] transition-all">
       <Icon size={16} />
    </button>
  );
}
