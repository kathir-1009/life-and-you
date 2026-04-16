import { Calendar, Clock, ChevronLeft, ChevronRight, Plus, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export function CoachSchedulePage() {
  const navigate = useNavigate();
  const [activeDay, setActiveDay] = useState(15);

  const timeSlots = [
    { time: "09:00 AM", status: "Available", type: "Free" },
    { time: "10:00 AM", status: "Booked", type: "Standard Session", client: "Sarah Jenkins" },
    { time: "11:00 AM", status: "Booked", type: "Discovery Call", client: "Mark O." },
    { time: "12:00 PM", status: "Break", type: "Lunch" },
    { time: "02:00 PM", status: "Booked", type: "NLP Blueprinting", client: "Emma W." },
    { time: "03:00 PM", status: "Available", type: "Free" },
    { time: "04:00 PM", status: "Available", type: "Free" },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-32">
      <div className="bg-[#2D3324] py-12 px-6 md:px-12 rounded-b-[32px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B9A71]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#FAF9F6] leading-tight tracking-tight">Schedule</h1>
            <p className="text-[#8B9A71] mt-1 text-sm font-bold uppercase tracking-widest opacity-90">Manage your time and availability</p>
          </div>
          <button className="bg-[#8B9A71] text-[#2D3324] px-6 py-3.5 rounded-pill text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-3 shadow-xl hover:bg-white transition-all">
            <Plus size={18} /> Add Time Slot
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 relative z-20">
        <div className="bg-white rounded-[48px] shadow-premium border border-[rgba(139,154,113,0.1)] overflow-hidden">
          {/* Calendar Header */}
          <div className="p-8 border-b border-[rgba(139,154,113,0.05)] flex items-center justify-between">
            <div className="flex items-center gap-6">
               <h2 className="text-2xl font-black text-[#2D3324]">April 2026</h2>
               <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-xl bg-[#F8F9FA] flex items-center justify-center text-[#2D3324] hover:bg-[#8B9A71] hover:text-white transition-all">
                     <ChevronLeft size={20} />
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-[#F8F9FA] flex items-center justify-center text-[#2D3324] hover:bg-[#8B9A71] hover:text-white transition-all">
                     <ChevronRight size={20} />
                  </button>
               </div>
            </div>
            <div className="flex gap-2">
               {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                 <div key={i} className={`w-12 h-16 rounded-2xl flex flex-col items-center justify-center border transition-all cursor-pointer ${activeDay === 13+i ? 'bg-[#2D3324] border-transparent text-white shadow-lg' : 'bg-white border-[rgba(139,154,113,0.1)] text-[#545454] hover:border-[#8B9A71]'}`} onClick={() => setActiveDay(13+i)}>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">{d}</span>
                    <span className="text-lg font-black">{13+i}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Time Slots */}
          <div className="p-4 md:p-8 space-y-4">
            {timeSlots.map((slot, i) => (
              <div key={i} className={`p-6 rounded-[32px] border flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all ${slot.status === 'Booked' ? 'bg-[#FAF9F6] border-transparent' : 'bg-white border-[rgba(139,154,113,0.08)] hover:shadow-md'}`}>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#8B9A71] border border-[rgba(139,154,113,0.1)] shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-[#8B9A71] uppercase tracking-widest mb-1">{slot.time}</div>
                    <h3 className="text-lg font-black text-[#2D3324]">{slot.type}</h3>
                    {slot.client && <p className="text-sm font-bold text-[#545454]/60">with {slot.client}</p>}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${slot.status === 'Booked' ? 'bg-[#2D3324] text-white' : (slot.status === 'Break' ? 'bg-cream text-[#545454]/60' : 'bg-[#8B9A71]/10 text-[#8B9A71]')}`}>
                     {slot.status}
                  </span>
                  <button className="w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center text-[#CED2BA] hover:text-[#2D3324] transition-all">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
