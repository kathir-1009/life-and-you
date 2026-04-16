import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, Lock, Calendar as CalendarIcon, Clock, MessageSquare, ArrowRight } from "lucide-react";

export function BookSessionPage() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [anonymous, setAnonymous] = useState(true);
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>(["Anxiety"]);

  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];
  const bookedTimes = ["11:00 AM", "5:00 PM"];
  const concerns = ["Anxiety", "Depression", "Stress", "Relationships", "Sleep", "Work"];

  const toggleConcern = (concern: string) => {
    setSelectedConcerns((prev) =>
      prev.includes(concern) ? prev.filter((c) => c !== concern) : [...prev, concern]
    );
  };

  const handleBookSession = () => navigate("/confirmation");

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  const availableDates = [10, 11, 15, 16, 17, 18, 22, 23, 24, 25];

  return (
    <div className="min-h-screen bg-[#FCF8E8] pb-32 portal-context">
      {/* Dynamic Header: Adapts to system width */}
      <div className="bg-[#99A88C] pt-10 lg:pt-16 pb-24 lg:pb-32 px-6 lg:px-10 rounded-b-[40px] lg:rounded-b-[80px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <button onClick={() => navigate(-1)} className="lg:hidden w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 hover:bg-white/20 transition-all">
            <ChevronLeft size={20} />
          </button>
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-white font-serif tracking-tight">Schedule Your Sanctuary</h1>
            <p className="text-[#A68A45] text-lg font-medium opacity-90">Find a moment of deep peace and transformation.</p>
          </div>
        </div>
      </div>

      {/* Main Content: Highly Responsive Grid */}
      <div className="max-w-6xl mx-auto px-4 lg:px-10 -mt-12 lg:-mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Calendar & Time (8/12 space on desktop) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-[40px] p-6 lg:p-10 shadow-2xl border border-[#99A88C]/5">
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Calendar View */}
                <div className="flex-1">
                  <SectionLabel icon={CalendarIcon}>Step 1: Focus Date</SectionLabel>
                  <div className="bg-[#FBF5E6] rounded-[32px] p-6 border border-[#99A88C]/5 shadow-inner">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-bold text-[#99A88C] font-serif uppercase tracking-widest text-base">April 2026</h3>
                      <div className="flex gap-3">
                        <button className="p-2.5 bg-white rounded-xl text-[#99A88C] shadow-sm hover:scale-105 transition-transform"><ChevronLeft size={20} /></button>
                        <button className="p-2.5 bg-white rounded-xl text-[#99A88C] shadow-sm hover:scale-105 transition-transform"><ChevronRight size={20} /></button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-3 mb-4">
                      {["S", "M", "T", "W", "T", "F", "S"].map((d, idx) => (
                        <div key={`${d}-${idx}`} className="text-center text-[10px] font-black text-[#99A88C]/40 uppercase tracking-widest">{d}</div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-3">
                      {[1, 2, 3].map(e => <div key={`e-${e}`} />)}
                      {daysInMonth.slice(0, 28).map(day => {
                        const isAvailable = availableDates.includes(day);
                        const isSelected = day === selectedDate;
                        return (
                          <button
                            key={day}
                            disabled={!isAvailable}
                            onClick={() => setSelectedDate(day)}
                            className={`aspect-square rounded-2xl text-xs font-black transition-all relative flex items-center justify-center ${
                              isSelected ? 'bg-[#99A88C] text-white shadow-xl shadow-[#99A88C]/20 scale-105 z-10' : isAvailable ? 'text-[#99A88C] bg-white border border-[#99A88C]/5 hover:border-[#99A88C] hover:scale-105' : 'text-[#99A88C]/20 opacity-30 cursor-not-allowed'
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Slots View */}
                <div className="flex-1">
                  <SectionLabel icon={Clock}>Step 2: Available Slots</SectionLabel>
                  <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 overflow-y-auto lg:max-h-[380px] custom-scrollbar pr-2">
                    {times.map(time => {
                      const isBooked = bookedTimes.includes(time);
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={time}
                          disabled={isBooked}
                          onClick={() => setSelectedTime(time)}
                          className={`py-5 rounded-[24px] text-[11px] font-black uppercase tracking-widest border transition-all flex flex-col items-center justify-center ${
                            isSelected ? 'bg-[#99A88C] border-transparent text-white shadow-2xl scale-[1.02] z-10' : isBooked ? 'bg-[#FCF8E8] border-transparent text-[#99A88C]/20 cursor-not-allowed opacity-50' : 'bg-white border-[#99A88C]/10 text-[#99A88C] hover:border-[#99A88C] hover:bg-[#FBF5E6]'
                          }`}
                        >
                          {isBooked ? "Reserved" : time}
                          {!isBooked && <span className="text-[8px] opacity-40 mt-1 uppercase tracking-tighter">60 Min Session</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Privacy & Footer (4/12 space on desktop) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-[40px] p-6 lg:p-8 shadow-2xl border border-[#99A88C]/5 lg:sticky lg:top-32">
               <SectionLabel icon={Lock}>Step 3: Protocol</SectionLabel>
               
               <div className={`p-6 rounded-[32px] border transition-all flex items-center justify-between mb-8 ${anonymous ? 'bg-[#EDF2EE] border-[#99A88C] shadow-sm' : 'bg-[#FCF8E8] border-transparent'}`}>
                  <div className="flex items-center gap-4">
                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${anonymous ? 'bg-[#99A88C] text-[#A68A45]' : 'bg-[#99A88C]/10 text-[#99A88C]'}`}>
                        <Lock size={20} />
                     </div>
                     <div>
                        <h4 className="text-sm font-black text-[#99A88C] uppercase tracking-tight">Identity Guard</h4>
                        <p className="text-[10px] text-[#99A88C]/60 font-bold uppercase tracking-widest mt-1">Concealed Session</p>
                     </div>
                  </div>
                  <button 
                    onClick={() => setAnonymous(!anonymous)}
                    className={`w-14 h-8 rounded-full relative transition-all ${anonymous ? 'bg-[#99A88C]' : 'bg-[#B5C4BA]'}`}
                  >
                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all shadow-md ${anonymous ? 'right-1' : 'left-1'}`} />
                  </button>
               </div>

               <SectionLabel icon={MessageSquare}>Areas of Focus</SectionLabel>
               <div className="flex flex-wrap gap-2 mb-10">
                  {concerns.map(c => {
                    const isSelected = selectedConcerns.includes(c);
                    return (
                      <button
                        key={c}
                        onClick={() => toggleConcern(c)}
                        className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                          isSelected ? 'bg-[#99A88C] border-transparent text-white shadow-xl scale-105' : 'bg-white border-[#99A88C]/10 text-[#99A88C]/60 hover:border-[#99A88C]'
                        }`}
                      >
                        {c}
                      </button>
                    );
                  })}
               </div>

               <div className="pt-6 border-t border-[#99A88C]/5">
                  <button
                    onClick={handleBookSession}
                    className="w-full bg-[#99A88C] text-white py-6 rounded-[28px] text-xs font-black uppercase tracking-widest shadow-2xl shadow-[#99A88C]/20 hover:bg-[#99A88C] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                  >
                    Confirm & Proceed
                    <ArrowRight size={20} />
                  </button>
                  <p className="text-center text-[9px] text-[#99A88C]/40 font-bold uppercase tracking-widest mt-6">Secure Sanctuary Protocol Active</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children, icon: Icon }: { children: React.ReactNode, icon: any }) {
  return (
    <div className="flex items-center gap-2.5 mb-6">
       <div className="p-1.5 bg-[#A68A45]/10 rounded-lg">
          <Icon size={14} className="text-[#A68A45]" />
       </div>
       <span className="text-[10px] font-black text-[#A68A45] uppercase tracking-[0.25em]">{children}</span>
    </div>
  );
}
