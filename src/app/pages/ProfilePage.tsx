import { Settings, Bell, Lock, CreditCard, HelpCircle, LogOut, Edit2, ChevronRight, User, ShieldCheck } from "lucide-react";
import { useUser } from "../context/UserContext";

export function ProfilePage() {
  const { role, setRole, user } = useUser();
  return (
    <div className="min-h-screen bg-cream pb-32 portal-context">
      {/* High-Concept Profile Header */}
      <div className="relative h-96 bg-[#99A88C] overflow-hidden">
        {/* Abstract Curved Shape */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#FFFFFF]/5 backdrop-blur-3xl" />
        <div className="absolute -top-[50%] -left-[10%] w-[120%] h-[150%] bg-[#5E6C54] rounded-[100%] transition-transform duration-1000" />
        
        <div className="relative z-10 pt-20 flex flex-col items-center">
           <h2 className="text-white text-lg font-bold tracking-widest uppercase mb-8">Profile</h2>
           
           <div className="relative">
              <div className="w-28 h-28 rounded-full border-4 border-[#FCF8E8] shadow-2xl overflow-hidden bg-[#FCF8E8]">
                 <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
           </div>
           
           <div className="mt-6 text-center">
              <h1 className="text-3xl font-bold text-[#FFFFFF] font-serif mb-2">{user.name}</h1>
              <div className="inline-flex items-center gap-2 bg-[#FCF8E8] px-6 py-1.5 rounded-full shadow-lg">
                 <ShieldCheck size={14} className="text-[#99A88C]" />
                 <span className="text-[10px] text-[#5E6C54] font-black uppercase tracking-widest">Verified Account</span>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 -mt-16 relative z-20 space-y-8">
        {/* App-Style Summary Cards */}
        <div className="grid grid-cols-2 gap-6">
           <div className="bg-[#FFFFFF] p-8 rounded-[40px] shadow-xl border border-[#99A88C]/10 text-center group hover:scale-105 transition-all">
              <p className="text-[10px] text-[#5E6C54]/40 font-black uppercase tracking-widest mb-2">Sessions</p>
              <p className="text-4xl font-bold text-[#5E6C54] font-serif">24</p>
           </div>
           <div className="bg-[#FFFFFF] p-8 rounded-[40px] shadow-xl border border-[#99A88C]/10 text-center group hover:scale-105 transition-all">
              <p className="text-[10px] text-[#5E6C54]/40 font-black uppercase tracking-widest mb-2">Check-ins</p>
              <p className="text-4xl font-bold text-[#A68A45] font-serif">08</p>
           </div>
        </div>

        {/* Settings Menu Sections */}
        <div className="space-y-6">
          <SectionTitle>Profile</SectionTitle>
          <div className="bg-[#FFFFFF] rounded-[44px] overflow-hidden border border-[#99A88C]/10 shadow-2xl">
            <MenuItem icon={User} label="Personal Information" color="bg-[#99A88C]/10" />
            <MenuItem icon={Bell} label="Notices & Bulletins" color="bg-[#99A88C]/10" />
            <MenuItem icon={Lock} label="Security Vault" color="bg-[#99A88C]/10" />
            <MenuItem icon={CreditCard} label="Billing History" color="bg-[#99A88C]/10" />
            <MenuItem icon={HelpCircle} label="Evolution Support" color="bg-[#99A88C]/10" />
          </div>

          <button className="w-full bg-[#FFFFFF] p-6 rounded-[44px] border border-red-50 flex items-center justify-center gap-4 group hover:bg-red-50 transition-all shadow-xl">
             <div className="w-12 h-12 bg-red-50 group-hover:bg-red-100 rounded-2xl flex items-center justify-center text-red-500 transition-all shadow-sm">
               <LogOut size={22} />
             </div>
             <span className="text-[11px] font-black text-red-500 uppercase tracking-[0.2em]">Sign out completely</span>
          </button>

          <div className="pt-8 border-t border-[#99A88C]/10">
             <button 
                onClick={() => setRole(role === 'client' ? 'coach' : 'client')}
                className="w-full bg-[#99A88C]/5 text-[#5E6C54] py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#99A88C] hover:text-[#FFFFFF] transition-all"
             >
                Switch to {role === 'client' ? 'Coach' : 'Client'} View (Demo)
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[10px] font-black text-sage-dark/60 uppercase tracking-[0.25em] px-4 pt-2">
      {children}
    </h3>
  );
}

function MenuItem({ icon: Icon, label, color, badge }: { icon: any, label: string, color: string, badge?: string }) {
  return (
    <button className="w-full flex items-center gap-6 p-6 hover:bg-[#FCF8E8] transition-all group active:opacity-70 border-b border-[#99A88C]/5 last:border-none">
      <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center text-[#99A88C] shadow-sm group-hover:scale-110 transition-all`}>
        <Icon size={22} />
      </div>
      <span className="flex-1 text-left text-xs font-bold text-[#5E6C54] uppercase tracking-widest">
        {label}
      </span>
      {badge && (
        <span className="bg-[#A68A45] text-[#FFFFFF] text-[9px] font-bold px-3 py-1 rounded-full">{badge}</span>
      )}
      <ChevronRight size={18} className="text-[#99A88C]/30 group-hover:text-[#99A88C] group-hover:translate-x-2 transition-all" />
    </button>
  );
}
