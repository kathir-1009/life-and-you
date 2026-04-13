import { useState } from "react";
import { Search, Filter, Mail, MessageCircle, Calendar, ChevronRight, User, Shield, Info } from "lucide-react";

export function CoachClientsPage() {
  const [activeSegment, setActiveSegment] = useState("Active");

  const clients = [
    {
      id: 1,
      name: "Sarah Jenkins",
      type: "Premium Client",
      lastSession: "Apr 12, 2026",
      status: "Active",
      specialty: "Anxiety",
      img: "/img/user/user8.jpg"
    },
    {
      id: 2,
      name: "Anonymous User (LY-882)",
      type: "Standard Client",
      lastSession: "Apr 10, 2026",
      status: "Active",
      specialty: "Growth",
      img: "/img/user/anonymous.png",
      isAnonymous: true
    },
    {
      id: 3,
      name: "Mark O'Neill",
      type: "Discovery",
      lastSession: "Apr 14, 2026",
      status: "Upcoming",
      specialty: "Career",
      img: "/img/user/user6.jpg"
    },
    {
      id: 4,
      name: "Emma Wilson",
      type: "Premium Client",
      lastSession: "Mar 28, 2026",
      status: "Completed",
      specialty: "Transitions",
      img: "/img/user/user5.jpg"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-32">
       <div className="bg-[#2D3324] pt-12 pb-16 px-6 md:px-12 rounded-b-[40px] relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
             <h1 className="text-4xl font-black text-white">My Clients.</h1>
             <p className="text-[#8B9A71] mt-2 text-sm font-bold opacity-80 uppercase tracking-widest">Managing 28 active transformations.</p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 mt-12">
          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
             <div className="flex bg-white p-1.5 rounded-full border border-[rgba(139,154,113,0.1)] shadow-sm">
                {["Active", "Upcoming", "Completed"].map(s => (
                  <button 
                    key={s} 
                    onClick={() => setActiveSegment(s)}
                    className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeSegment === s ? 'bg-[#2D3324] text-white shadow-lg' : 'text-[#545454] hover:bg-[#F8F9FA]'}`}
                  >
                    {s}
                  </button>
                ))}
             </div>
             
             <div className="relative group w-full md:w-96">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#8B9A71]" size={18} />
                <input 
                  type="text" 
                  placeholder="Find client by name or ID..." 
                  className="w-full pl-14 pr-6 py-4 bg-white border-2 border-transparent rounded-full shadow-sm outline-none focus:border-[#8B9A71] transition-all text-sm font-bold"
                />
             </div>
          </div>

          {/* Client List */}
          <div className="grid md:grid-cols-2 gap-6">
             {clients.filter(c => activeSegment === "All" || c.status === activeSegment).map(client => (
               <div key={client.id} className="bg-white p-8 rounded-[48px] border border-[rgba(139,154,113,0.08)] shadow-sm hover:shadow-premium hover:scale-[1.01] transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-6">
                     <div className="w-20 h-20 rounded-[32px] overflow-hidden border-4 border-[#FAF9F6] shadow-lg relative">
                        <img src={client.img} alt={client.name} className={`w-full h-full object-cover ${client.isAnonymous ? 'grayscale' : ''}`} />
                        {client.isAnonymous && <div className="absolute inset-0 bg-[#2D3324]/20 flex items-center justify-center text-white"><Shield size={24} strokeWidth={3} /></div>}
                     </div>
                     <div>
                        <div className="flex items-center gap-2 mb-1">
                           <h3 className="text-xl font-black text-[#2D3324]">{client.name}</h3>
                           {client.isAnonymous && <span className="text-[8px] bg-[#8B9A71] text-white px-2 py-0.5 rounded-md font-bold uppercase">Private</span>}
                        </div>
                        <p className="text-[10px] font-black text-[#8B9A71] uppercase tracking-[0.1em] mb-4">{client.type} • {client.specialty}</p>
                        
                        <div className="flex gap-2">
                           <button className="w-10 h-10 bg-[#FAF9F6] text-[#8B9A71] rounded-xl flex items-center justify-center hover:bg-[#2D3324] hover:text-white transition-all">
                              <MessageCircle size={18} />
                           </button>
                           <button className="w-10 h-10 bg-[#FAF9F6] text-[#8B9A71] rounded-xl flex items-center justify-center hover:bg-[#2D3324] hover:text-white transition-all">
                              <Calendar size={18} />
                           </button>
                           <button className="w-10 h-10 bg-[#FAF9F6] text-[#8B9A71] rounded-xl flex items-center justify-center hover:bg-[#2D3324] hover:text-white transition-all">
                              <Info size={18} />
                           </button>
                        </div>
                     </div>
                  </div>
                  
                  <div className="hidden sm:flex flex-col items-end">
                     <div className="text-[10px] font-black text-[#545454]/40 uppercase tracking-widest mb-1">Last Meeting</div>
                     <div className="text-sm font-black text-[#2D3324]">{client.lastSession}</div>
                     <ChevronRight size={24} className="text-[#CED2BA] mt-4 group-hover:translate-x-2 transition-transform" />
                  </div>
               </div>
             ))}
          </div>
          
          {clients.filter(c => activeSegment === "All" || c.status === activeSegment).length === 0 && (
             <div className="py-32 text-center">
                <p className="text-[#545454] opacity-40 font-bold uppercase tracking-widest">No clients found in this segment.</p>
             </div>
          )}
       </div>
    </div>
  );
}
