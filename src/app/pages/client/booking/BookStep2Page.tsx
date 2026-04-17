import { Link, useNavigate } from "react-router";
import { Calendar3, ClockFill, ArrowRight, PersonCircle, StarFill } from "react-bootstrap-icons";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";

export function BookSessionStep2Page() {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedCoach, setSelectedCoach] = useState<number | null>(1);
  const times = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "07:00 PM"];

  const coaches = [
    { id: 1, name: "Dr. Johnson", specialty: "Trauma Specialist", rating: 4.9, img: "/img/about/account-01.jpg" },
    { id: 2, name: "Sarah Jenkins", specialty: "NLP Master", rating: 5.0, img: "/img/about/account-02.jpg" },
    { id: 3, name: "Benjamin K.", specialty: "Growth Catalyst", rating: 4.8, img: "/img/about/account-05.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#FCF8E8] pb-32 portal-context">
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
               <h1 className="text-3xl font-black tracking-tight mb-2 !text-[#FFFFFF]" style={{ color: '#FFFFFF' }}>Schedule Session</h1>
               <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.3em] !text-[#99A88C]">Secure your premium time slot</p>
            </div>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:pt-16">
        {/* Desktop Back Link */}
        <Link to="/portal/book/step-1" className="hidden lg:inline-flex items-center gap-2 text-[#5E6C54]/60 hover:text-[#5E6C54] transition-all mb-12">
           <ChevronLeft size={20} />
           <span className="font-bold text-xs uppercase tracking-widest">Back to Path Selection</span>
        </Link>
        
        {/* Step Header */}
        <div className="mb-12 hidden lg:block">
           <h1 className="text-4xl lg:text-5xl font-black text-[#5E6C54] uppercase tracking-tight leading-none mb-4">When shall we meet?</h1>
           <p className="text-sm text-[#5E6C54]/40 font-black uppercase tracking-widest">Select your guide and preferred timing</p>
        </div>

        {/* Coach Selection Hub */}
        <div className="mb-16">
           <div className="flex items-center justify-between mb-8 px-2">
              <h3 className="text-xs font-black text-[#5E6C54] uppercase tracking-widest flex items-center gap-2">
                 <PersonCircle className="text-[#99A88C]" /> Select Your Guide
              </h3>
              <Link to="/portal/explore" className="text-[10px] font-black text-[#A68A45] hover:underline uppercase tracking-widest">Explore All</Link>
           </div>
           
           <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide -mx-2 px-2">
              {coaches.map(coach => (
                <button 
                  key={coach.id}
                  onClick={() => setSelectedCoach(coach.id)}
                  className={`flex-shrink-0 w-64 p-6 rounded-[32px] border-2 transition-all text-left flex items-center gap-4 ${
                    selectedCoach === coach.id 
                    ? 'bg-[#5E6C54] border-transparent shadow-xl !text-[#FFFFFF]' 
                    : 'bg-white/50 border-transparent hover:border-[#99A88C]/30 text-[#5E6C54]'
                  }`}
                >
                   <div className="w-14 h-14 bg-[#FCF8E8] rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
                      <img src={coach.img} alt={coach.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="overflow-hidden">
                      <h4 className={`text-xs font-black uppercase truncate ${selectedCoach === coach.id ? 'text-[#FFFFFF]' : 'text-[#5E6C54]'}`}>{coach.name}</h4>
                      <p className={`text-[10px] font-bold uppercase truncate ${selectedCoach === coach.id ? 'text-[#99A88C]' : 'text-[#5E6C54]/40'}`}>{coach.specialty}</p>
                      <div className="flex items-center gap-1 mt-1">
                         <StarFill size={8} className="text-[#A68A45]" />
                         <span className={`text-[9px] font-black ${selectedCoach === coach.id ? 'text-[#A68A45]' : 'text-[#A68A45]'}`}>{coach.rating}</span>
                      </div>
                   </div>
                </button>
              ))}
           </div>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12">
           <div className="lg:col-span-7 bg-[#FFFFFF] p-10 rounded-[48px] border border-[#99A88C]/10 shadow-2xl text-center">
              <div className="flex items-center justify-between mb-10 px-4">
                 <h3 className="text-base font-black text-[#5E6C54] uppercase tracking-widest">March 2026</h3>
                 <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full border border-[#99A88C]/10 flex items-center justify-center text-[#99A88C] hover:bg-[#FCF8E8] transition-colors"><ChevronLeft size={16} /></button>
                    <button className="w-8 h-8 rounded-full border border-[#99A88C]/10 flex items-center justify-center text-[#99A88C] hover:bg-[#FCF8E8] transition-colors rotate-180"><ChevronLeft size={16} /></button>
                 </div>
              </div>
              
              <div className="grid grid-cols-7 gap-4">
                 {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <span key={d} className="text-[10px] font-black text-[#5E6C54]/30 mb-4">{d}</span>)}
                 {[...Array(31)].map((_, i) => (
                    <button 
                      key={i} 
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-bold transition-all ${
                        i === 13 ? 'bg-[#5E6C54] !text-[#FFFFFF] shadow-lg' : 'hover:bg-[#FCF8E8] text-[#5E6C54]'
                      }`}
                      style={i === 13 ? { color: '#FFFFFF' } : {}}
                    >
                      {i + 1}
                    </button>
                 ))}
              </div>
           </div>
           
           <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3 text-[#5E6C54]/60 mb-8 px-4">
                 <ClockFill size={20} className="text-[#99A88C]" />
                 <span className="font-black text-xs uppercase tracking-widest">Available Slots (GST)</span>
              </div>
              
              <div className="grid gap-4">
                 {times.map(time => (
                    <button 
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`w-full p-6 rounded-[32px] border-2 transition-all font-black text-sm tracking-tight flex justify-between items-center ${
                        selectedTime === time 
                          ? 'bg-[#5E6C54] border-transparent !text-[#FFFFFF] shadow-xl' 
                          : 'bg-[#FFFFFF] border-[#99A88C]/10 text-[#5E6C54] hover:border-[#99A88C]/40'
                      }`}
                      style={{ color: selectedTime === time ? '#FFFFFF' : '#5E6C54' }}
                    >
                       <span className={selectedTime === time ? 'text-[#FFFFFF]' : ''}>{time}</span>
                       {selectedTime === time && <ArrowRight size={18} className="text-[#FFFFFF]" />}
                    </button>
                 ))}
              </div>
              
              <Link 
                to="/portal/book/confirm" 
                className={`w-full mt-10 py-6 bg-[#A68A45] text-[#FFFFFF] rounded-[40px] font-black text-xs uppercase tracking-[0.2em] transition-all text-center block ${!selectedTime ? 'opacity-50 pointer-events-none' : 'hover:scale-[1.02] shadow-2xl shadow-[#A68A45]/30'}`}
              >
                Proceed to Confirmation
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
