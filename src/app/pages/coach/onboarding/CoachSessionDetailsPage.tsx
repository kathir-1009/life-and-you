import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, ChatLeftTextFill, CalendarDateFill } from "react-bootstrap-icons";

export function CoachSessionDetailsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-start md:justify-center p-6 pt-12 md:pt-6 pb-32 md:pb-12 text-center">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-[40px] md:rounded-[60px] border border-sage/10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
        <ChatLeftTextFill size={48} className="text-sage mb-8 mx-auto" />
        <h1 className="text-2xl md:text-3xl font-bold text-sage-dark font-serif mb-2 uppercase tracking-tight">Session Configuration</h1>
        <p className="text-[10px] text-sage-dark/60 font-black mb-10 uppercase tracking-[0.2em]">Step 3 of 5</p>
        
        <div className="space-y-10 text-left mb-12">
           {/* Section 4: Session Details */}
           <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="flex flex-col gap-4">
                    <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">Session Types</label>
                    <div className="flex flex-wrap gap-3">
                       {['Video Call', 'Audio Call', 'Chat Coaching'].map(type => (
                         <label key={type} className="flex items-center gap-2 p-3 bg-cream/50 rounded-xl border border-transparent cursor-pointer transition-all has-[:checked]:bg-sage/10 has-[:checked]:border-sage/20">
                            <input type="checkbox" className="w-3.5 h-3.5 accent-sage" />
                            <span className="text-[9px] font-bold text-sage-dark uppercase tracking-tight">{type}</span>
                         </label>
                       ))}
                    </div>
                 </div>

                 <div className="flex flex-col gap-4">
                    <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">Offered Durations</label>
                    <div className="flex flex-wrap gap-2">
                       {['30 min', '45 min', '60 min', '90 min'].map(dur => (
                         <label key={dur} className="flex items-center gap-2 p-3 bg-cream/50 rounded-xl border border-transparent cursor-pointer transition-all has-[:checked]:bg-sage/10 has-[:checked]:border-sage/20">
                            <input type="checkbox" className="w-3.5 h-3.5 accent-sage" />
                            <span className="text-[9px] font-bold text-sage-dark uppercase tracking-tight">{dur}</span>
                         </label>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <InputGroup label="Suggested Price per Session" type="number" placeholder="Enter amount" />
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">Discovery Call Available?</label>
                    <div className="flex gap-4 p-1 bg-cream/50 rounded-full w-fit">
                       <button className="px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest bg-white text-sage shadow-sm">Yes</button>
                       <button className="px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-sage-dark/30">No</button>
                    </div>
                 </div>
              </div>
           </div>

           {/* Section 5: Availability */}
           <div className="pt-10 border-t border-sage/5 space-y-8">
              <div className="flex items-center gap-3 text-sage">
                 <CalendarDateFill size={20} />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.3em]">Weekly Availability</h3>
              </div>
              
              <div className="flex flex-col gap-4">
                 <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">Available Days</label>
                 <div className="flex flex-wrap gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                      <label key={day} className="flex items-center justify-center w-12 h-12 bg-cream/50 rounded-2xl border border-transparent cursor-pointer transition-all has-[:checked]:bg-sage has-[:checked]:text-white">
                         <input type="checkbox" className="hidden" />
                         <span className="text-[10px] font-black uppercase">{day}</span>
                      </label>
                    ))}
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">Time Zone</label>
                    <select className="w-full bg-cream border border-transparent rounded-full px-8 py-4 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none appearance-none">
                       <option>GMT (London)</option>
                       <option>IST (India)</option>
                       <option>EST (New York)</option>
                       <option>PST (Los Angeles)</option>
                    </select>
                 </div>
                 <InputGroup label="Preferred Time Slots" placeholder="e.g. 10 AM - 4 PM" />
              </div>
           </div>
        </div>
        
        <div className="flex items-center justify-between gap-6 pt-4 border-t border-sage/5">
          <button onClick={() => navigate(-1)} className="p-4 text-sage-dark/40 hover:text-sage-dark transition-colors">
            <ArrowLeft size={24} />
          </button>
          <Link 
            to="/coach/onboarding/kyc" 
            className="flex-1 py-5 bg-sage text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-[1.02] shadow-xl transition-all flex items-center justify-center gap-3"
          >
            Verification & Legal <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder, type = "text" }: { label: string, placeholder?: string, type?: string }) {
  return (
    <div className="flex flex-col gap-2">
       <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">{label}</label>
       <input 
         type={type} 
         placeholder={placeholder}
         className="w-full bg-cream border border-transparent rounded-full px-8 py-4 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none"
       />
    </div>
  );
}
