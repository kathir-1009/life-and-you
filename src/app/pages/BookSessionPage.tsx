import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ChevronLeft, ChevronRight, Lock, Check, Calendar as CalendarIcon, Clock, User, MessageSquare } from "lucide-react";

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
    <div className="min-h-screen bg-[#F8F9FA] pb-32">
      {/* Premium Header */}
      <div className="bg-[#2D3324] pt-16 pb-20 px-6 rounded-b-[40px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-xl mx-auto relative z-10">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-3xl font-extrabold text-white mb-2">Schedule Session</h1>
          <p className="text-[#8B9A71] text-sm font-medium">Find a time that brings you peace.</p>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-6 -mt-8 relative z-20 space-y-6">
        {/* Step 1: Date & Time */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-premium border border-[rgba(139,154,113,0.1)]">
          <SectionLabel icon={CalendarIcon}>Select Date</SectionLabel>
          
          <div className="bg-[#F8F9FA] rounded-[24px] p-5 mb-8 border border-[rgba(139,154,113,0.05)]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-extrabold text-[#2D3324]">April 2026</h3>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-[#8B9A71]/10 rounded-xl text-[#8B9A71]"><ChevronLeft size={20} /></button>
                <button className="p-2 hover:bg-[#8B9A71]/10 rounded-xl text-[#8B9A71]"><ChevronRight size={20} /></button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {["S", "M", "T", "W", "T", "F", "S"].map(d => (
                <div key={d} className="text-center text-[10px] font-extrabold text-[#545454]/40 uppercase">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {[1, 2, 3].map(e => <div key={`e-${e}`} />)}
              {daysInMonth.slice(0, 28).map(day => {
                const isAvailable = availableDates.includes(day);
                const isSelected = day === selectedDate;
                return (
                  <button
                    key={day}
                    disabled={!isAvailable}
                    onClick={() => setSelectedDate(day)}
                    className={`aspect-square rounded-2xl text-xs font-extrabold transition-all relative flex items-center justify-center ${
                      isSelected ? 'bg-[#8B9A71] text-white shadow-lg' : isAvailable ? 'text-[#2D3324] hover:bg-white' : 'text-[#CED2BA] opacity-30 cursor-not-allowed'
                    }`}
                  >
                    {day}
                    {isAvailable && !isSelected && <div className="absolute bottom-2 w-1 h-1 bg-[#8B9A71] rounded-full" />}
                  </button>
                );
              })}
            </div>
          </div>

          <SectionLabel icon={Clock}>Available Slots</SectionLabel>
          <div className="grid grid-cols-2 gap-3">
            {times.map(time => {
              const isBooked = bookedTimes.includes(time);
              const isSelected = selectedTime === time;
              return (
                <button
                  key={time}
                  disabled={isBooked}
                  onClick={() => setSelectedTime(time)}
                  className={`py-4 rounded-2xl text-[11px] font-extrabold uppercase tracking-widest border-2 transition-all ${
                    isSelected ? 'bg-[#2D3324] border-transparent text-white shadow-xl' : isBooked ? 'bg-[#F8F9FA] border-transparent text-[#CED2BA] cursor-not-allowed' : 'bg-white border-[rgba(139,154,113,0.1)] text-[#2D3324] hover:border-[#8B9A71]'
                  }`}
                >
                  {isBooked ? "Reserved" : time}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Privacy & Identity */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-premium border border-[rgba(139,154,113,0.1)]">
           <SectionLabel icon={Lock}>Privacy Settings</SectionLabel>
           <div className={`p-6 rounded-[24px] border-2 transition-all flex items-center justify-between mb-8 ${anonymous ? 'bg-[#8B9A71]/5 border-[#8B9A71] shadow-sm' : 'bg-[#F8F9FA] border-transparent'}`}>
              <div className="flex items-center gap-4">
                 <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${anonymous ? 'bg-[#8B9A71] text-white' : 'bg-[#CED2BA] text-white'}`}>
                    <Lock size={18} />
                 </div>
                 <div>
                    <h4 className="text-sm font-extrabold text-[#2D3324]">Anonymous Mode</h4>
                    <p className="text-[10px] text-[#545454] opacity-70">Identity concealed for session</p>
                 </div>
              </div>
              <button 
                onClick={() => setAnonymous(!anonymous)}
                className={`w-12 h-7 rounded-full relative transition-all ${anonymous ? 'bg-[#8B9A71]' : 'bg-[#CED2BA]'}`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all shadow-md ${anonymous ? 'right-1' : 'left-1'}`} />
              </button>
           </div>

           <SectionLabel icon={MessageSquare}>Focus Areas</SectionLabel>
           <div className="flex flex-wrap gap-2 mb-8">
              {concerns.map(c => {
                const isSelected = selectedConcerns.includes(c);
                return (
                  <button
                    key={c}
                    onClick={() => toggleConcern(c)}
                    className={`px-5 py-2.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest border-2 transition-all ${
                      isSelected ? 'bg-[#2D3324] border-transparent text-white shadow-lg' : 'bg-white border-[rgba(139,154,113,0.1)] text-[#545454] hover:border-[#8B9A71]'
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
           </div>

           <button
             onClick={handleBookSession}
             className="w-full bg-[#2D3324] text-white py-5 rounded-pill text-[13px] font-extrabold uppercase tracking-[0.2em] shadow-2xl hover:bg-[#1C1A1E] transition-all active:scale-[0.98]"
           >
             Confirm Breakthrough
           </button>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children, icon: Icon }: { children: React.ReactNode, icon: any }) {
  return (
    <div className="flex items-center gap-2 mb-5">
       <Icon size={14} className="text-[#8B9A71]" />
       <span className="text-[11px] font-extrabold text-[#8B9A71] uppercase tracking-[0.2em]">{children}</span>
    </div>
  );
}
