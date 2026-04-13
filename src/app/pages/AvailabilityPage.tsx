import { useState } from "react";
import { Clock, Plus, Trash2, Save, Calendar, ArrowRight, Settings, Info, Heart, Shield } from "lucide-react";

export function AvailabilityPage() {
  const [availability, setAvailability] = useState([
    { day: "Monday", slots: ["09:00 AM - 12:00 PM", "02:00 PM - 05:00 PM"] },
    { day: "Tuesday", slots: ["09:00 AM - 12:00 PM", "02:00 PM - 05:00 PM"] },
    { day: "Wednesday", slots: ["10:00 AM - 01:00 PM"] },
    { day: "Thursday", slots: ["09:00 AM - 12:00 PM", "02:00 PM - 05:00 PM"] },
    { day: "Friday", slots: ["09:00 AM - 12:00 PM"] },
  ]);

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-32">
       {/* Header */}
       <div className="bg-[#2D3324] py-12 px-6 md:px-12 rounded-b-[32px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B9A71]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
             <div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#FAF9F6] tracking-tight leading-tight">Availability</h1>
                <p className="text-[#8B9A71] mt-1 text-sm font-bold uppercase tracking-widest leading-relaxed">Define your professional consulting hours</p>
             </div>
             <div className="flex gap-3">
                <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white/10 transition-all">
                   <Settings size={18} /> Settings
                </button>
                <button className="bg-[#8B9A71] text-[#2D3324] px-8 py-3.5 rounded-pill text-[10px] font-black uppercase tracking-widest flex items-center gap-3 shadow-xl hover:bg-white transition-all">
                   <Save size={18} /> Save Changes
                </button>
             </div>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Availability Matrix */}
          <div className="lg:col-span-2 space-y-6">
             <div className="bg-white rounded-[40px] shadow-premium border border-[rgba(139,154,113,0.1)] p-10">
                <div className="flex items-center justify-between mb-10">
                   <h2 className="text-2xl font-black text-[#2D3324]">Weekly Cadence</h2>
                   <div className="flex items-center gap-2 text-[#8B9A71]">
                      <Info size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Global Timezone: India (GMT+5:30)</span>
                   </div>
                </div>

                <div className="space-y-6">
                   {availability.map((item, i) => (
                     <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-3xl bg-[#FAF9F6] group hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-[#8B9A71]/20">
                        <div className="w-40">
                           <h3 className="text-xl font-black text-[#2D3324]">{item.day}</h3>
                           <p className="text-[10px] font-bold text-[#8B9A71] uppercase tracking-[0.1em]">{item.slots.length} Blocks active</p>
                        </div>
                        
                        <div className="flex-1 flex flex-wrap gap-3">
                           {item.slots.map((slot, si) => (
                             <div key={si} className="bg-white border border-[rgba(139,154,113,0.15)] px-4 py-2.5 rounded-xl flex items-center gap-3 group/slot hover:border-[#8B9A71] transition-all cursor-pointer">
                                <Clock size={14} className="text-[#8B9A71]" />
                                <span className="text-xs font-bold text-[#545454]">{slot}</span>
                                <Trash2 size={14} className="text-red-400 opacity-0 group-hover/slot:opacity-100 transition-opacity" />
                             </div>
                           ))}
                           <button className="w-10 h-10 border-2 border-dashed border-[#CED2BA] rounded-xl flex items-center justify-center text-[#CED2BA] hover:border-[#8B9A71] hover:text-[#8B9A71] transition-all">
                              <Plus size={18} />
                           </button>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             {/* Vacation / Block Dates */}
             <div className="bg-white rounded-[40px] shadow-premium border border-[rgba(139,154,113,0.1)] p-10">
                <div className="flex items-center justify-between mb-8">
                   <h2 className="text-2xl font-black text-[#2D3324]">Blocked Dates</h2>
                   <button className="text-[10px] font-black text-[#8B9A71] uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-all">
                      <Plus size={16} /> Add Exception
                   </button>
                </div>
                <div className="bg-[#FAF9F6] p-10 rounded-[32px] border border-dashed border-[#CED2BA] text-center">
                   <Calendar size={32} className="mx-auto text-[#CED2BA] mb-4" />
                   <p className="text-sm font-bold text-[#545454] opacity-50">No vacations or blackouts scheduled for April.</p>
                </div>
             </div>
          </div>

          {/* Sidebar / Insights */}
          <div className="space-y-6">
             <div className="bg-[#8B9A71] rounded-[48px] p-10 text-[#2D3324] shadow-premium relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                   <Shield size={64} />
                </div>
                <h3 className="text-xl font-black mb-4">Availability Insights</h3>
                <p className="text-sm font-bold leading-relaxed opacity-80 mb-8">You are currently visible for 34 hours per week. Your peak booking times are Tuesday afternoons.</p>
                <div className="space-y-4">
                   <div className="bg-white/20 p-4 rounded-3xl flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest">Active Rate</span>
                      <span className="text-lg font-black">92%</span>
                   </div>
                </div>
             </div>

             <div className="bg-white rounded-[40px] p-10 border border-[rgba(139,154,113,0.1)] shadow-premium">
                <h3 className="text-lg font-black text-[#2D3324] mb-6">Discovery Buffer</h3>
                <p className="text-xs font-bold text-[#545454]/60 mb-6 leading-relaxed">Automatically add travel/prep time before sessions.</p>
                <div className="flex items-center gap-4">
                   <div className="flex-1 h-12 bg-[#F8F9FA] rounded-[16px] flex items-center justify-center font-black text-[#2D3324]">15 MINS</div>
                   <button className="w-12 h-12 bg-[#8B9A71] rounded-[16px] flex items-center justify-center text-white"><ArrowRight size={20} /></button>
                </div>
             </div>

             <div className="bg-black/5 rounded-[40px] p-10 border border-black/5 text-center">
                <Heart size={24} className="mx-auto text-red-400 mb-4 animate-pulse" />
                <p className="text-[10px] font-black text-[#2D3324] uppercase tracking-widest">Focus on quality sessions, not just quantity.</p>
             </div>
          </div>
       </div>
    </div>
  );
}
