import { ChevronLeft, User, Mail, Phone, MapPin, Camera } from "lucide-react";
import { useNavigate } from "react-router";
import { useUser } from "../../../context/UserContext";

export function PersonalInfoPage() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-[#FCF8E8] pb-32 portal-context animate-in fade-in duration-700">
      {/* Cinematic Full-Width Header */}
      <div className="relative">
         <button 
            onClick={() => navigate(-1)}
            className="absolute top-12 left-6 z-20 w-10 h-10 bg-[#FFFFFF]/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-[#FFFFFF]/10 active:scale-95 transition-all"
         >
            <ChevronLeft size={20} />
         </button>

         <div className="bg-[#5E6C54] pt-28 pb-32 px-6 rounded-b-[80px] relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10 flex flex-col items-center">
               <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl">
                     <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#A68A45] rounded-full flex items-center justify-center text-white border-2 border-[#5E6C54] shadow-lg active:scale-90 transition-all">
                     <Camera size={14} />
                  </button>
               </div>
               <h1 className="text-4xl font-black tracking-tight mb-2 !text-[#FFFFFF]" style={{ color: '#FFFFFF' }}>Personal Identity</h1>
               <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.3em] !text-[#99A88C]">Update your public presence</p>
            </div>
         </div>
      </div>

      <div className="max-w-xl mx-auto px-6 -mt-10 relative z-10 space-y-8">
         {/* Form Fields Container */}
         <div className="bg-[#FFFFFF] rounded-[44px] overflow-hidden border border-[#99A88C]/10 shadow-2xl p-8 space-y-8">
            <InfoField label="Full Name" value={user.name} icon={User} />
            <InfoField label="Email Address" value="sarah.jenkins@evolution.com" icon={Mail} />
            <InfoField label="Phone Number" value="+91 98765 43210" icon={Phone} />
            <InfoField label="Primary Location" value="Mumbai, India" icon={MapPin} />
         </div>

         <button className="w-full bg-[#5E6C54] py-6 rounded-[40px] shadow-2xl shadow-[#5E6C54]/20 font-black uppercase tracking-[0.2em] active:scale-[0.98] transition-all">
            <span className="!text-[#FFFFFF]" style={{ color: '#FFFFFF' }}>Save Changes</span>
         </button>
      </div>
    </div>
  );
}

function InfoField({ label, value, icon: Icon }: { label: string, value: string, icon: any }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 px-1">
         <Icon size={14} className="text-[#99A88C]" />
         <span className="text-[10px] font-black text-[#5E6C54]/40 uppercase tracking-widest">{label}</span>
      </div>
      <div className="w-full bg-[#FCF8E8]/50 p-5 rounded-[24px] border border-[#99A88C]/5 text-xs font-bold text-[#5E6C54] shadow-inner">
         {value}
      </div>
    </div>
  );
}
