import { Link } from "react-router";
import { ArrowLeft, Calendar3, ClockFill } from "react-bootstrap-icons";
import { useState } from "react";

export function BookSessionStep2Page() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const times = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "07:00 PM"];

  return (
    <div className="min-h-screen bg-cream pb-32 portal-context">
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <Link to="/portal/book/step-1" className="inline-flex items-center gap-2 text-sage-dark/60 hover:text-sage-dark transition-all mb-12">
           <ArrowLeft size={20} />
           <span className="font-bold text-xs uppercase tracking-widest">Back to Path Selection</span>
        </Link>
        
        <h1 className="text-4xl lg:text-5xl font-bold text-sage-dark font-serif mb-16">When shall we meet?</h1>
        
        <div className="grid lg:grid-cols-12 gap-12">
           <div className="lg:col-span-7 bg-white p-10 rounded-[48px] border border-sage/10 shadow-sm text-center">
              <Calendar3 size={40} className="text-sage mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-sage-dark font-serif uppercase tracking-tight mb-8">March 2026</h3>
              <div className="grid grid-cols-7 gap-6">
                 {/* Simplified calendar mock */}
                 {[...Array(31)].map((_, i) => (
                    <button 
                      key={i} 
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-bold transition-all ${
                        i === 13 ? 'bg-sage text-white shadow-lg' : 'hover:bg-cream text-sage-dark'
                      }`}
                    >
                      {i + 1}
                    </button>
                 ))}
              </div>
           </div>
           
           <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3 text-sage-dark/60 mb-8 px-4">
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
                          ? 'bg-sage border-transparent text-white shadow-xl' 
                          : 'bg-white border-sage/10 text-sage-dark hover:border-sage/40'
                      }`}
                    >
                       {time}
                    </button>
                 ))}
              </div>
              
              <Link 
                to="/portal/book/confirm" 
                className={`w-full mt-10 py-6 bg-sage-dark text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all text-center block ${!selectedTime ? 'opacity-50 pointer-events-none' : 'hover:scale-105 shadow-2xl'}`}
              >
                Proceed to Confirmation
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
