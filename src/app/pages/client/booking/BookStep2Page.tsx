import { Link } from "react-router";
import { ArrowLeft, Calendar3, ClockFill } from "react-bootstrap-icons";
import { useState } from "react";

export function BookSessionStep2Page() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const times = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "07:00 PM"];

  return (
    <div className="min-h-screen bg-[#FCF8E8] pb-32 portal-context">
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <Link to="/portal/book/step-1" className="inline-flex items-center gap-2 text-[#5E6C54]/60 hover:text-[#5E6C54] transition-all mb-12">
           <ArrowLeft size={20} />
           <span className="font-bold text-xs uppercase tracking-widest">Back to Path Selection</span>
        </Link>
        
        <h1 className="text-4xl lg:text-5xl font-bold text-[#5E6C54] font-serif mb-16">When shall we meet?</h1>
        
        <div className="grid lg:grid-cols-12 gap-12">
           <div className="lg:col-span-7 bg-[#FFFFFF] p-10 rounded-[48px] border border-[#99A88C]/10 shadow-sm text-center">
              <Calendar3 size={40} className="text-[#99A88C] mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-[#5E6C54] font-serif uppercase tracking-tight mb-8">March 2026</h3>
              <div className="grid grid-cols-7 gap-6">
                 {/* Simplified calendar mock */}
                 {[...Array(31)].map((_, i) => (
                    <button 
                      key={i} 
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-bold transition-all ${
                        i === 13 ? 'bg-[#99A88C] text-[#FFFFFF] shadow-lg' : 'hover:bg-[#FCF8E8] text-[#5E6C54]'
                      }`}
                    >
                      {i + 1}
                    </button>
                 ))}
              </div>
           </div>
           
           <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3 text-[#5E6C54]/60 mb-8 px-4">
                 <ClockFill size={20} />
                 <span className="font-bold text-xs uppercase tracking-widest">Available Slots (GST)</span>
              </div>
              
              <div className="grid gap-4">
                 {times.map(time => (
                    <button 
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`w-full p-6 rounded-[32px] border-2 transition-all font-bold text-sm tracking-tight ${
                        selectedTime === time 
                          ? 'bg-[#99A88C] border-transparent text-[#FFFFFF] shadow-xl' 
                          : 'bg-[#FFFFFF] border-[#99A88C]/10 text-[#5E6C54] hover:border-[#99A88C]/40'
                      }`}
                    >
                       {time}
                    </button>
                 ))}
              </div>
              
              <Link 
                to="/portal/book/confirm" 
                className={`w-full mt-10 py-6 bg-[#5E6C54] text-[#FFFFFF] rounded-full font-bold text-xs uppercase tracking-widest transition-all text-center block ${!selectedTime ? 'opacity-50 pointer-events-none' : 'hover:scale-105 shadow-2xl'}`}
              >
                Proceed to Confirmation
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
