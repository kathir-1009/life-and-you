import { Settings, Bell, Lock, CreditCard, HelpCircle, LogOut, Edit2, ChevronRight, User, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import { useUser } from "../context/UserContext";

export function ProfilePage() {
  const { role, setRole } = useUser();
  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-32">
      {/* Dynamic Profile Header */}
      <div className="bg-[#4E5540] pt-12 pb-16 px-6 md:px-12 rounded-b-[40px] relative overflow-hidden text-center">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#8B9A71]/20 rounded-full translate-y-1/2 translate-x-1/2 blur-2xl" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-6">
            <div className="w-24 h-24 bg-[#F5EFE6] rounded-[32px] flex items-center justify-center text-[#8B9A71] shadow-2xl border-4 border-white/20">
              <User size={48} />
            </div>
            <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#8B9A71] rounded-2xl flex items-center justify-center border-4 border-[#4E5540] shadow-lg text-white hover:scale-110 transition-all">
              <Edit2 size={16} />
            </button>
          </div>

          <h1 className="text-3xl font-extrabold text-white mb-1">Sarah Mitchell</h1>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
            <span className="text-[10px] text-white/80 font-extrabold uppercase tracking-widest leading-none">Premium Explorer</span>
            <ShieldCheck size={12} className="text-[#8B9A71]" />
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-6 -mt-8 relative z-20 space-y-6">
        {/* Quick Summary Grid */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "12", label: "Sessions", color: "text-[#8B9A71]" },
            { value: "8", label: "Streak", color: "text-[#4E5540]" },
            { value: "24", label: "Items", color: "text-[#2D3324]" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-[28px] border border-[rgba(139,154,113,0.1)] shadow-sm text-center">
              <div className={`text-2xl font-extrabold ${stat.color}`}>{stat.value}</div>
              <div className="text-[10px] font-extrabold text-[#545454] uppercase tracking-widest mt-1 opacity-60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Settings Menu Sections */}
        <div className="space-y-4">
          <SectionTitle>Account preferences</SectionTitle>
          <div className="bg-white rounded-[32px] overflow-hidden border border-[rgba(139,154,113,0.08)] shadow-sm">
            <MenuItem icon={Settings} label="Global Settings" color="bg-[#8B9A71]" />
            <MenuItem icon={Bell} label="Push Notifications" color="bg-[#4E5540]" badge="3" />
            <MenuItem icon={Lock} label="Security & Privacy" color="bg-[#2D3324]" />
          </div>

          <SectionTitle>Support & Billing</SectionTitle>
          <div className="bg-white rounded-[32px] overflow-hidden border border-[rgba(139,154,113,0.08)] shadow-sm">
            <MenuItem icon={CreditCard} label="Payment Methods" color="bg-[#CED2BA]" />
            <MenuItem icon={HelpCircle} label="Help Center" color="bg-[#8B9A71]" />
          </div>

          <button className="w-full bg-white p-5 rounded-[28px] border border-red-50 flex items-center justify-center gap-3 group hover:bg-red-50 transition-all">
             <div className="w-10 h-10 bg-red-50 group-hover:bg-red-100 rounded-2xl flex items-center justify-center text-red-500 transition-all">
               <LogOut size={20} />
             </div>
             <span className="text-sm font-extrabold text-red-500 uppercase tracking-widest">Sign out completely</span>
          </button>

          <div className="pt-8 border-t border-[rgba(139,154,113,0.1)]">
             <button 
                onClick={() => setRole(role === 'client' ? 'coach' : 'client')}
                className="w-full bg-[#8B9A71]/10 text-[#8B9A71] py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#8B9A71] hover:text-white transition-all shadow-sm"
             >
                Switch to {role === 'client' ? 'Coach' : 'Client'} View (Demo Mode)
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[11px] font-extrabold text-[#8B9A71] uppercase tracking-[0.2em] px-4 pt-2">
      {children}
    </h3>
  );
}

function MenuItem({ icon: Icon, label, color, badge }: { icon: any, label: string, color: string, badge?: string }) {
  return (
    <button className="w-full flex items-center gap-4 p-5 hover:bg-[#F8F9FA] transition-all group active:bg-[#F0F2F5]">
      <div className={`w-11 h-11 ${color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-all`}>
        <Icon size={20} />
      </div>
      <span className="flex-1 text-left text-sm font-extrabold text-[#2D3324] uppercase tracking-wider">
        {label}
      </span>
      {badge && (
        <span className="bg-[#8B9A71] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full">{badge}</span>
      )}
      <ChevronRight size={18} className="text-[#CED2BA] group-hover:text-[#8B9A71] group-hover:translate-x-1 transition-all" />
    </button>
  );
}
