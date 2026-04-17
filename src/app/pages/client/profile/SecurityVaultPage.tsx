import { ChevronLeft, Lock, ShieldCheck, Fingerprint, Key } from "lucide-react";
import { useNavigate } from "react-router";

export function SecurityVaultPage() {
  const navigate = useNavigate();

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
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
            <div className="relative z-10 flex flex-col items-center">
               <div className="w-16 h-16 bg-[#FFFFFF]/10 rounded-3xl flex items-center justify-center mb-6 backdrop-blur-md border border-[#FFFFFF]/10">
                  <Lock size={28} className="text-[#99A88C]" />
               </div>
               <h1 className="text-4xl font-black tracking-tight mb-2 !text-[#FFFFFF]" style={{ color: '#FFFFFF' }}>Security Vault</h1>
               <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.3em] !text-[#99A88C]">Protect your journey & privacy</p>
            </div>
         </div>
      </div>

      <div className="max-w-xl mx-auto px-6 -mt-10 relative z-10 space-y-8">
         {/* Security Status */}
         <div className="bg-[#FFFFFF] p-8 rounded-[40px] shadow-[0_20px_50px_rgba(94,108,84,0.1)] border border-[#99A88C]/10 flex items-center gap-6">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shadow-sm border border-green-100">
               <ShieldCheck size={28} />
            </div>
            <div>
               <h3 className="text-xl font-black text-[#5E6C54]">Account Secured</h3>
               <p className="text-[10px] text-[#5E6C54]/40 font-black uppercase tracking-widest">Last scan: 2 hours ago</p>
            </div>
         </div>

         {/* Options Grid */}
         <div className="bg-[#FFFFFF] rounded-[44px] overflow-hidden border border-[#99A88C]/10 shadow-2xl">
            <SecurityOption icon={Key} label="Change Access Key" description="Update your login password regularly" />
            <SecurityOption icon={Fingerprint} label="Bio-Metric Lock" description="Use fingerprint or face ID to unlock" badge="PRO" />
            <SecurityOption icon={ShieldCheck} label="Two-Factor Vault" description="Add another layer of authentication" active />
         </div>

         <div className="bg-red-50/50 p-8 rounded-[40px] border border-red-100 text-center">
            <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest mb-4">Danger Zone</p>
            <button className="text-red-600 text-xs font-black uppercase tracking-widest hover:underline">Deactivate Account</button>
         </div>
      </div>
    </div>
  );
}

function SecurityOption({ icon: Icon, label, description, badge, active }: { icon: any, label: string, description: string, badge?: string, active?: boolean }) {
  return (
    <button className="w-full p-6 flex items-center gap-6 text-left hover:bg-[#FCF8E8]/50 transition-all border-b border-[#99A88C]/5 last:border-none group">
       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${active ? 'bg-[#99A88C] text-white shadow-lg' : 'bg-[#FCF8E8] text-[#99A88C] shadow-sm'}`}>
          <Icon size={22} />
       </div>
       <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
             <span className="text-xs font-black text-[#5E6C54] uppercase tracking-widest">{label}</span>
             {badge && <span className="bg-[#A68A45] text-white text-[8px] px-2 py-0.5 rounded-full font-black">{badge}</span>}
          </div>
          <p className="text-[10px] text-[#5E6C54]/40 font-bold tracking-tight">{description}</p>
       </div>
    </button>
  );
}
