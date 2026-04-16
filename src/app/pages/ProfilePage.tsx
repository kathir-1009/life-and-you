import { Settings, Bell, Lock, CreditCard, HelpCircle, LogOut, Edit2, ChevronRight, User, ShieldCheck } from "lucide-react";
import { useUser } from "../context/UserContext";

export function ProfilePage() {
  const { role, setRole, user } = useUser();
  return (
    <div className="min-h-screen bg-[#FCF8E8] pb-32 portal-context">
      {/* Dynamic Profile Header */}
      <div className="bg-[#99A88C] pt-12 pb-16 px-6 md:px-12 md:rounded-[40px] relative overflow-hidden text-center">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#C4A35A]/10 rounded-full translate-y-1/2 translate-x-1/2 blur-2xl" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-6">
            <div className="w-24 h-24 bg-[#FCF8E8] rounded-[32px] flex items-center justify-center text-[#99A88C] shadow-2xl border-4 border-white/20">
               <img src={user.avatar} alt="Profile" className="w-full h-full object-cover rounded-[28px]" />
            </div>
            <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#C4A35A] rounded-2xl flex items-center justify-center border-4 border-[#99A88C] shadow-lg text-[#99A88C] hover:scale-110 transition-all">
              <Edit2 size={16} />
            </button>
          </div>

          <h1 className="text-3xl font-bold text-white font-serif mb-1">{user.name}</h1>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
            <span className="text-[10px] text-white/80 font-bold uppercase tracking-widest leading-none">Premium Explorer</span>
            <ShieldCheck size={12} className="text-[#C4A35A]" />
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 -mt-8 relative z-20 space-y-6">
        {/* Quick Summary Grid */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "12", label: "Sessions", color: "text-[#99A88C]" },
            { value: "8", label: "Streak", color: "text-[#C4A35A]" },
            { value: "24", label: "Items", color: "text-[#99A88C]" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-[28px] border border-[#99A88C]/5 shadow-sm text-center">
              <div className={`text-2xl font-bold font-serif ${stat.color}`}>{stat.value}</div>
              <div className="text-[10px] font-bold text-[#99A88C]/40 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Settings Menu Sections */}
        <div className="space-y-4">
          <SectionTitle>Account preferences</SectionTitle>
          <div className="bg-white rounded-[32px] overflow-hidden border border-[#99A88C]/5 shadow-sm">
            <MenuItem icon={Settings} label="Global Settings" color="bg-[#99A88C]" />
            <MenuItem icon={Bell} label="Push Notifications" color="bg-[#C4A35A]" badge="3" />
            <MenuItem icon={Lock} label="Security & Privacy" color="bg-[#99A88C]" />
          </div>

          <SectionTitle>Support & Billing</SectionTitle>
          <div className="bg-white rounded-[32px] overflow-hidden border border-[#99A88C]/5 shadow-sm">
            <MenuItem icon={CreditCard} label="Payment Methods" color="bg-[#B5C4BA]" />
            <MenuItem icon={HelpCircle} label="Help Center" color="bg-[#99A88C]" />
          </div>

          <button className="w-full bg-white p-5 rounded-[32px] border border-red-50 flex items-center justify-center gap-3 group hover:bg-red-50 transition-all shadow-sm">
             <div className="w-10 h-10 bg-red-50 group-hover:bg-red-100 rounded-2xl flex items-center justify-center text-red-500 transition-all">
               <LogOut size={20} />
             </div>
             <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Sign out completely</span>
          </button>

          <div className="pt-8 border-t border-[#99A88C]/10">
             <button 
                onClick={() => setRole(role === 'client' ? 'coach' : 'client')}
                className="w-full bg-[#99A88C]/5 text-[#99A88C] py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#99A88C] hover:text-white transition-all"
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
    <h3 className="text-[10px] font-black text-[#99A88C]/60 uppercase tracking-[0.25em] px-4 pt-2">
      {children}
    </h3>
  );
}

function MenuItem({ icon: Icon, label, color, badge }: { icon: any, label: string, color: string, badge?: string }) {
  return (
    <button className="w-full flex items-center gap-4 p-5 hover:bg-[#FBF5E6] transition-all group active:opacity-70">
      <div className={`w-11 h-11 ${color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-all`}>
        <Icon size={20} className={color === 'bg-[#B5C4BA]' ? 'text-[#99A88C]' : 'text-white'} />
      </div>
      <span className="flex-1 text-left text-xs font-black text-[#99A88C] uppercase tracking-widest">
        {label}
      </span>
      {badge && (
        <span className="bg-[#C4A35A] text-[#99A88C] text-[9px] font-bold px-2 py-0.5 rounded-full">{badge}</span>
      )}
      <ChevronRight size={18} className="text-[#99A88C]/20 group-hover:text-[#99A88C] group-hover:translate-x-1 transition-all" />
    </button>
  );
}
