import { useState } from "react";
import { Search, Filter, StarFill, PatchCheckFill, ArrowRight, CameraVideoFill, TelephoneFill, ChatDotsFill } from "react-bootstrap-icons";
import { Link } from "react-router";

export function ClientBrowseCoachesPage() {
  const coaches = [
    { id: "M001", name: "Coach Sharma", role: "Master NLP Mentor", rating: 4.9, reviews: 124, specialization: "Anxiety & Focus", img: "KS" },
    { id: "M002", name: "Sarah Mitchell", role: "Holistic Wellness", rating: 4.8, reviews: 89, specialization: "Mindfulness", img: "SM" },
    { id: "M003", name: "David Chen", role: "Executive Performance", rating: 5.0, reviews: 56, specialization: "Career Pivot", img: "DC" },
    { id: "M004", name: "Elena Rodriguez", role: "Emotional Resilience", rating: 4.7, reviews: 210, specialization: "Trauma Healing", img: "ER" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700 px-4 md:px-0 portal-context pb-20">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl lg:text-4xl font-bold text-[#5E6C54] font-serif mb-2 uppercase tracking-tight">Mentorship Sanctuary</h1>
           <p className="text-[#5E6C54]/60 text-[11px] font-bold uppercase tracking-widest">Find the mentor that resonates with your emotional frequency.</p>
        </div>

        <div className="flex items-center gap-3">
           <div className="relative flex-1 lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5E6C54]/30" size={18} />
              <input 
                type="text" 
                placeholder="Search mentors..." 
                className="w-full bg-white border border-[#99A88C]/10 pl-12 pr-4 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest outline-none focus:border-[#99A88C] transition-all"
              />
           </div>
           <button className="p-3 bg-white border border-[#99A88C]/10 rounded-2xl text-[#5E6C54] hover:bg-[#FCF8E8] transition-colors shadow-sm">
              <Filter size={18} />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {coaches.map((coach) => (
           <div key={coach.id} className="bg-white rounded-[40px] p-6 lg:p-8 border border-[#99A88C]/5 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center">
              <div className="relative mb-8">
                 <div className="w-24 h-24 bg-[#FCF8E8] rounded-[32px] flex items-center justify-center text-[#99A88C] shadow-sm font-serif text-3xl font-bold group-hover:scale-110 transition-transform">
                    {coach.img}
                 </div>
                 <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#99A88C] rounded-full border-4 border-white flex items-center justify-center text-white shadow-lg">
                    <PatchCheckFill size={14} />
                 </div>
              </div>

              <div className="mb-6">
                 <h3 className="text-xl font-bold text-[#5E6C54] font-serif mb-1 uppercase tracking-tight">{coach.name}</h3>
                 <p className="text-[9px] text-[#8A7340] font-black uppercase tracking-[0.2em] mb-3">{coach.role}</p>
                 <div className="flex items-center justify-center gap-1.5">
                    <StarFill size={10} className="text-[#8A7340]" />
                    <span className="text-[10px] font-bold text-[#5E6C54]">{coach.rating}</span>
                    <span className="text-[9px] font-bold text-[#5E6C54]/30">({coach.reviews} reviews)</span>
                 </div>
              </div>

              <div className="w-full bg-[#FCF8E8]/50 p-4 rounded-2xl mb-8">
                 <p className="text-[10px] text-[#5E6C54]/60 font-bold uppercase tracking-widest mb-1.5">Primary Focus</p>
                 <p className="text-xs font-black text-[#5E6C54] uppercase tracking-tight">{coach.specialization}</p>
              </div>

              <div className="flex gap-2 mb-8">
                 <ChannelIcon icon={CameraVideoFill} />
                 <ChannelIcon icon={TelephoneFill} />
                 <ChannelIcon icon={ChatDotsFill} />
              </div>

              <Link 
                to={`/portal/browse-coaches/${coach.id}`}
                className="w-full py-4 bg-[#5E6C54] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#5E6C54]/10 hover:bg-[#4A5D4E] transition-all flex items-center justify-center gap-3"
              >
                 View Profile <ArrowRight size={14} />
              </Link>
           </div>
         ))}
      </div>
    </div>
  );
}

function ChannelIcon({ icon: Icon }: { icon: any }) {
  return (
    <div className="w-10 h-10 bg-white border border-[#99A88C]/10 rounded-xl flex items-center justify-center text-[#99A88C]/40">
       <Icon size={16} />
    </div>
  );
}
