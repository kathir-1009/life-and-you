import { useState } from "react";
import { Search, Plus, Filter, Book, Edit3, Trash2, Shield, Calendar, Heart, Brain, Star, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

export function JournalPage() {
  const navigate = useNavigate();
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: "Apr 12, 2026",
      title: "Clarity after Morning Session",
      snippet: "Today's session with Coach Sarah really helped me visualize my boundaries. I feel lighter...",
      mood: "Peaceful",
      icon: Heart,
      color: "text-red-400"
    },
    {
      id: 2,
      date: "Apr 10, 2026",
      title: "Resistance in Personal Work",
      snippet: "Finding it hard to stick to the breathing exercises. Need to discuss this in the next call.",
      mood: "Anxious",
      icon: Brain,
      color: "text-blue-400"
    },
    {
      id: 3,
      date: "Apr 08, 2026",
      title: "Breakthrough in Career Goal",
      snippet: "Finally understood that my fear isn't about failure, but about the responsibility of success.",
      mood: "Powerful",
      icon: Star,
      color: "text-[#8B9A71]"
    }
  ]);

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-32">
        {/* Cinematic Header - Mobile Only */}
        <div className="lg:hidden relative">
           <button 
              onClick={() => navigate(-1)}
              className="absolute top-12 left-6 z-20 w-10 h-10 bg-[#FFFFFF]/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-[#FFFFFF]/10 active:scale-95 transition-all"
           >
              <ChevronLeft size={20} />
           </button>

           <div className="bg-[#5E6C54] pt-24 pb-32 px-6 rounded-b-[80px] relative overflow-hidden text-center text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
              <div className="relative z-10">
                 <h1 className="text-3xl font-black tracking-tight mb-2 !text-[#FFFFFF]" style={{ color: '#FFFFFF' }}>My Sanctuary</h1>
                 <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.3em] !text-[#99A88C]">A private space for your inner dialogue</p>
              </div>
           </div>
        </div>

        {/* Original Header - Desktop Only */}
        <div className="hidden lg:block bg-[#4E5540] py-16 px-12 rounded-b-[40px] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
           <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                 <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 mb-4 border border-white/10">
                    <Shield size={12} className="text-[#CED2BA]" />
                    <span className="text-[10px] text-white/80 font-black uppercase tracking-widest">End-to-End Encrypted</span>
                 </div>
                 <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">My Sanctuary</h1>
                 <p className="text-[#CED2BA] mt-2 text-sm font-medium opacity-80">A private space for your inner dialogue</p>
              </div>
              <button className="bg-[#8B9A71] text-[#2D3324] px-10 py-5 rounded-pill text-xs font-black uppercase tracking-widest flex items-center gap-3 shadow-[0_20px_40px_rgba(139,154,113,0.3)] hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95">
                 <Plus size={20} /> New Entry
              </button>
           </div>
        </div>

       <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar / Filters & Search */}
          <div className="lg:col-span-1 space-y-8">
             <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#8B9A71]" size={18} />
                <input 
                  type="text" 
                  placeholder="Search your soul..." 
                  className="w-full pl-14 pr-6 py-4 bg-white border-2 border-transparent rounded-[24px] shadow-sm outline-none focus:border-[#8B9A71] transition-all text-sm font-bold"
                />
             </div>
             
             <div className="bg-white rounded-[32px] p-8 border border-[rgba(139,154,113,0.08)] shadow-sm">
                <h3 className="text-sm font-black text-[#2D3324] uppercase tracking-widest mb-6">Mood Filter</h3>
                <div className="space-y-3">
                   {["All Entries", "Peaceful", "Anxious", "Powerful", "Emotional"].map(m => (
                     <button key={m} className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all ${m === 'All Entries' ? 'bg-[#FAF9F6] text-[#2D3324] font-black' : 'text-[#545454]/60 hover:bg-[#FAF9F6] font-bold'}`}>
                        <span className="text-xs">{m}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8B9A71] opacity-40" />
                     </button>
                   ))}
                </div>
             </div>

             <div className="bg-[#FAF9F6] p-8 rounded-[32px] border-2 border-dashed border-[#CED2BA] text-center">
                 <Book size={32} className="mx-auto text-[#CED2BA] mb-4" />
                 <p className="text-[10px] font-black text-[#545454]/40 uppercase tracking-[0.2em]">Archived Journals</p>
             </div>
          </div>

          {/* Journal Entries List */}
          <div className="lg:col-span-3 space-y-6">
             {entries.map(entry => (
               <div key={entry.id} className="bg-white rounded-[48px] p-10 border border-[rgba(139,154,113,0.08)] shadow-sm hover:shadow-premium group transition-all cursor-pointer">
                  <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
                     <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-[#FAF9F6] rounded-2xl flex items-center justify-center border border-[rgba(139,154,113,0.05)]">
                           <entry.icon className={entry.color} size={28} />
                        </div>
                        <div>
                           <div className="flex items-center gap-3 mb-1">
                              <span className="text-[10px] font-black text-[#8B9A71] uppercase tracking-widest">{entry.date}</span>
                              <span className={`px-3 py-1 bg-[#FAF9F6] ${entry.color} rounded-full text-[9px] font-black uppercase tracking-widest`}>{entry.mood}</span>
                           </div>
                           <h2 className="text-2xl font-black text-[#2D3324] tracking-tight">{entry.title}</h2>
                        </div>
                     </div>
                     <div className="flex items-start gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-12 h-12 bg-[#FAF9F6] text-[#545454] rounded-2xl flex items-center justify-center hover:bg-[#2D3324] hover:text-white transition-all">
                           <Edit3 size={18} />
                        </button>
                        <button className="w-12 h-12 bg-[#FAF9F6] text-[#545454] rounded-2xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all">
                           <Trash2 size={18} />
                        </button>
                     </div>
                  </div>
                  <p className="text-lg text-[#545454] leading-relaxed font-medium opacity-70 italic line-clamp-2">"{entry.snippet}"</p>
                  
                  <div className="mt-8 pt-8 border-t border-[rgba(139,154,113,0.05)] flex items-center justify-between text-[#8B9A71]">
                     <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                           {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-[#8B9A71]/20" />)}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest">3 Insights Found</span>
                     </div>
                     <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
                        Read More Entry <Calendar size={14} />
                     </button>
                  </div>
               </div>
             ))}
          </div>
       </div>
    </div>
  );
}
