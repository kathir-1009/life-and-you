import { Link } from "react-router";
import { ArrowLeft, ArrowRight, PersonBadgeFill } from "react-bootstrap-icons";
import { Camera, User } from "lucide-react";

export function CoachProfileSetupPage() {
  return (
    <div className="min-h-screen bg-[#2D3324] flex flex-col items-center justify-start md:justify-center p-6 pt-12 md:pt-6 pb-32 md:pb-12 text-center relative overflow-hidden">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71] rounded-full blur-[80px] opacity-20 pointer-events-none will-change-transform" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4E5540] rounded-full blur-[100px] opacity-25 pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#2D3324_100%)] opacity-60 pointer-events-none will-change-transform" />

      <div className="max-w-3xl w-full bg-white p-8 md:p-14 pb-16 md:pb-20 rounded-[48px] md:rounded-[64px] shadow-[0_32px_64px_rgba(0,0,0,0.3)] animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10 border border-white/20">
        <div className="w-16 h-16 bg-[#2D3324] rounded-2xl flex items-center justify-center text-white mb-8 mx-auto shadow-xl">
           <PersonBadgeFill size={32} />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-[#2D3324] font-serif mb-4 uppercase tracking-tight leading-none">Basic Information</h1>
        <p className="text-[10px] text-[#8B9A71] font-black mb-12 uppercase tracking-[0.4em]">Phase 1: Your Identity</p>
        
        <div className="space-y-8 text-left mb-12">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputGroup label="Full Legal Name *" placeholder="As per Govt. ID" />
              <InputGroup label="Display Name" placeholder="e.g. Coach Sarah" />
              <InputGroup label="Email Address *" placeholder="email@address.com" type="email" />
              <InputGroup label="Phone Number" placeholder="+1 234 567 890" type="tel" />
              
              <div className="flex flex-col gap-3">
                 <label className="text-[10px] font-black text-[#2D3324]/40 uppercase tracking-[0.2em] ml-6">Gender</label>
                 <select className="w-full bg-[#F3F5F0] border border-[#8B9A71]/20 rounded-2xl px-8 py-5 text-sm text-[#2D3324] focus:bg-white focus:border-[#8B9A71]/30 transition-all outline-none appearance-none cursor-pointer">
                    <option value="" disabled>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non-binary</option>
                    <option>Prefer not to say</option>
                 </select>
              </div>

              <InputGroup label="Date of Birth" type="date" />
              <InputGroup label="Country" placeholder="e.g. India" />
              <InputGroup label="City / Location" placeholder="e.g. Mumbai" />
           </div>

           <div className="flex flex-col gap-4">
              <label className="text-[10px] font-black text-[#2D3324]/40 uppercase tracking-[0.2em] ml-6">Profile Photo</label>
              <div className="w-full h-40 border-2 border-dashed border-[#8B9A71]/20 rounded-[32px] bg-[#F3F5F0] flex flex-col items-center justify-center cursor-pointer hover:border-[#8B9A71]/40 hover:bg-white transition-all group">
                 <div className="w-12 h-12 rounded-2xl bg-[#2D3324]/5 flex items-center justify-center text-[#2D3324] group-hover:scale-110 transition-transform mb-3">
                    <Camera size={24} />
                 </div>
                 <span className="text-[10px] font-black text-[#2D3324]/30 uppercase tracking-widest">Upload professional HD headshot</span>
              </div>
           </div>
        </div>
        
        <div className="flex items-center justify-between gap-6 pt-10 border-t border-[#2D3324]/5">
          <Link to="/coach/onboarding/welcome" className="w-14 h-14 bg-[#F3F5F0] rounded-2xl flex items-center justify-center text-[#2D3324]/40 hover:text-[#2D3324] hover:bg-white transition-all border border-[#8B9A71]/20">
            <ArrowLeft size={24} />
          </Link>
          <Link 
            to="/coach/onboarding/credentials" 
            className="flex-1 py-5 bg-[#2D3324] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] hover:bg-[#1a1d14] shadow-2xl transition-all flex items-center justify-center gap-3">
            Continue Application <ArrowRight size={18} />
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
         className="w-full bg-[#F3F5F0] border border-[#8B9A71]/20 rounded-2xl px-8 py-5 text-sm text-[#2D3324] focus:bg-white focus:border-[#8B9A71]/30 transition-[background-color,border-color] duration-200 outline-none placeholder:text-[#2D3324]/20"
       />
    </div>
  );
}
