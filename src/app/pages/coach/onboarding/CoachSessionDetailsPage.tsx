import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { MessageSquare, Calendar } from "lucide-react";
import { useState } from "react";

export function CoachSessionDetailsPage() {
  const navigate = useNavigate();
  const [isDiscoveryAvailable, setIsDiscoveryAvailable] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start md:justify-center p-6 pt-12 md:pt-6 pb-32 md:pb-12 text-center relative overflow-hidden">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4E5540] rounded-full blur-[150px] opacity-25 pointer-events-none" />

      <div className="max-w-3xl w-full bg-[#FCF8E8] p-8 md:p-14 pb-16 md:pb-24 rounded-[48px] md:rounded-[64px] shadow-[0_32px_64px_rgba(0,0,0,0.3)] animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10 border border-white/20">
        <div className="w-16 h-16 bg-[#2D3324] rounded-2xl flex items-center justify-center text-white mb-8 mx-auto shadow-xl">
           <MessageSquare size={32} />
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#2D3324] font-serif mb-2 uppercase tracking-tight">Session Configuration</h1>
        <p className="text-[10px] text-[#8B9A71] font-black mb-12 uppercase tracking-[0.4em]">Phase 3: Methods & Availability</p>
        
        <div className="space-y-12 text-left mb-16">
           <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="flex flex-col gap-6">
                    <label className="text-[10px] font-black text-[#2D3324]/40 uppercase tracking-[0.2em] ml-6">Session Types</label>
                    <div className="flex flex-wrap gap-4">
                       {['Video Call', 'Audio Call', 'Chat Coaching'].map(type => (
                         <label key={type} className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl border border-[#2D3324]/10 cursor-pointer transition-all hover:bg-white has-[:checked]:bg-[#8B9A71]/20 has-[:checked]:border-[#8B9A71]/30 group">
                            <div className="relative w-5 h-5 shrink-0">
                               <input type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer z-10" />
                               <div className="absolute inset-0 bg-white border-2 border-[#2D3324]/10 rounded-lg transition-all peer-checked:bg-[#2D3324] peer-checked:border-[#2D3324] flex items-center justify-center">
                                  <svg className="w-3 h-3 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="5">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                               </div>
                            </div>
                            <span className="text-[10px] font-black text-[#2D3324] uppercase tracking-tight opacity-70 group-hover:opacity-100">{type}</span>
                         </label>
                       ))}
                    </div>
                 </div>

                 <div className="flex flex-col gap-6">
                    <label className="text-[10px] font-black text-[#2D3324]/40 uppercase tracking-[0.2em] ml-6">Offered Durations</label>
                    <div className="flex flex-wrap gap-3">
                       {['30 min', '45 min', '60 min', '90 min'].map(dur => (
                         <label key={dur} className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl border border-[#2D3324]/10 cursor-pointer transition-all hover:bg-white has-[:checked]:bg-[#8B9A71]/20 has-[:checked]:border-[#8B9A71]/30 group">
                            <div className="relative w-5 h-5 shrink-0">
                               <input type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer z-10" />
                               <div className="absolute inset-0 bg-white border-2 border-[#2D3324]/10 rounded-lg transition-all peer-checked:bg-[#2D3324] peer-checked:border-[#2D3324] flex items-center justify-center">
                                  <svg className="w-3 h-3 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="5">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                               </div>
                            </div>
                            <span className="text-[10px] font-black text-[#2D3324] uppercase tracking-tight opacity-70 group-hover:opacity-100">{dur}</span>
                         </label>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <InputGroup label="Suggested Price per Session" type="number" placeholder="Enter amount in INR" />
                 <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-black text-[#2D3324]/40 uppercase tracking-[0.2em] ml-6">Discovery Call Available?</label>
                    <div className="flex p-1.5 bg-white/50 rounded-2xl w-fit border border-[#2D3324]/10 relative">
                       <button 
                         onClick={() => setIsDiscoveryAvailable(true)}
                         className={`px-10 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all relative z-10 ${isDiscoveryAvailable ? 'text-white' : 'text-[#2D3324]/40 hover:text-[#2D3324]'}`}
                       >
                         Yes
                       </button>
                       <button 
                         onClick={() => setIsDiscoveryAvailable(false)}
                         className={`px-10 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all relative z-10 ${!isDiscoveryAvailable ? 'text-white' : 'text-[#2D3324]/40 hover:text-[#2D3324]'}`}
                       >
                         No
                       </button>
                       <div 
                         className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-xl transition-all duration-300 shadow-lg ${
                           isDiscoveryAvailable 
                             ? 'left-1.5 bg-[#4B6344]' 
                             : 'left-[calc(50%+1.5px)] bg-[#944A4A]'
                         }`}
                       />
                    </div>
                 </div>
              </div>
           </div>

           {/* Section 5: Availability */}
           <div className="pt-12 border-t border-[#2D3324]/5 space-y-10">
              <div className="flex items-center gap-4 text-[#8B9A71]">
                 <Calendar size={24} />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">Weekly Availability</h3>
              </div>
              
              <div className="flex flex-col gap-6">
                 <label className="text-[10px] font-black text-[#2D3324]/40 uppercase tracking-[0.2em] ml-6">Available Days</label>
                 <div className="flex flex-wrap gap-3">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                      <label key={day} className="flex items-center justify-center w-14 h-14 bg-white/50 rounded-2xl border border-[#2D3324]/10 cursor-pointer transition-all hover:bg-white has-[:checked]:bg-[#2D3324] has-[:checked]:text-white has-[:checked]:shadow-xl has-[:checked]:border-transparent">
                         <input type="checkbox" className="hidden" />
                         <span className="text-[10px] font-black uppercase">{day}</span>
                      </label>
                    ))}
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-black text-[#2D3324]/40 uppercase tracking-[0.2em] ml-6">Time Zone</label>
                    <select className="w-full bg-white/50 border border-[#2D3324]/10 rounded-2xl px-8 py-5 text-sm text-[#2D3324] focus:bg-white focus:border-[#8B9A71]/30 transition-all outline-none appearance-none cursor-pointer">
                       <option>IST (India)</option>
                       <option>GST (Dubai)</option>
                       <option>GMT (London)</option>
                       <option>EST (New York)</option>
                    </select>
                 </div>
                 <InputGroup label="Preferred Time Slots" placeholder="e.g. 10 AM - 4 PM" />
              </div>
           </div>
        </div>
        
        <div className="flex items-center justify-between gap-6 pt-10 border-t border-[#2D3324]/5">
          <button onClick={() => navigate(-1)} className="w-14 h-14 bg-white/50 rounded-2xl flex items-center justify-center text-[#2D3324]/40 hover:text-[#2D3324] hover:bg-white transition-all border border-[#2D3324]/10">
            <ArrowLeft size={24} />
          </button>
          <Link 
            to="/coach/onboarding/kyc" 
            className="flex-1 py-5 bg-[#2D3324] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] hover:bg-[#1a1d14] shadow-2xl transition-all flex items-center justify-center gap-3"
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
    <div className="flex flex-col gap-3">
       <label className="text-[10px] font-black text-[#2D3324]/40 uppercase tracking-[0.2em] ml-6">{label}</label>
       <input 
         type={type} 
         placeholder={placeholder}
         className="w-full bg-white/50 border border-[#2D3324]/10 rounded-2xl px-8 py-5 text-sm text-[#2D3324] focus:bg-white focus:border-[#8B9A71]/30 transition-all outline-none placeholder:text-[#2D3324]/20"
       />
    </div>
  );
}

