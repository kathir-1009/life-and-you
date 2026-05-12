import { Link, useNavigate } from "react-router";
import { Settings, Bell, Lock, CreditCard, HelpCircle, LogOut, Edit2, ChevronRight, User, ShieldCheck, EyeOff, Plus } from "lucide-react";
import { useUser } from "../context/UserContext";

export function ProfilePage() {
  const { role, setRole, user, isAnonymous, setIsAnonymous } = useUser();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-cream pb-32 portal-context">
      {/* Cinematic Full-Width Header */}
      <div className="relative">
         {/* Deep Colored Canopy - Touches all edges */}
         <div className="bg-[#5E6C54] pt-12 pb-24 px-6 rounded-b-[60px] md:rounded-b-[80px] relative overflow-hidden text-center">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FFFFFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />
            
            <div className="relative z-10 flex flex-col items-center">
               <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.4em] mb-8">My Profile</p>
               
               <div className="relative group">
                  <div className="w-20 h-20 rounded-full border-[3px] border-[#FCF8E8] shadow-2xl overflow-hidden relative z-10">
                     <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-[#A68A45]/20 rounded-full blur-xl transition-transform group-hover:scale-110" />
               </div>
               
               <div className="mt-4">
                  <h1 className="text-3xl md:text-4xl font-black text-white !text-white tracking-tight mb-3" style={{ color: '#FFFFFF' }}>{user.name}</h1>
                  <div className="inline-flex items-center gap-2 bg-[#FFFFFF]/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#FFFFFF]/30">
                     <ShieldCheck size={12} className="text-[#99A88C]" />
                     <span className="text-[9px] text-white !text-white font-black uppercase tracking-widest">
                        {role === 'coach' ? 'Certified Coach' : 'Premium Member'}
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Floating App-Style Summary Cards */}
        <div className="grid grid-cols-2 gap-6 -mt-12">
           {role === 'client' ? (
             <>
               <div className="bg-[#FFFFFF] p-8 rounded-[40px] shadow-[0_20px_50px_rgba(94,108,84,0.1)] border border-[#99A88C]/10 text-center hover:scale-105 transition-all">
                  <p className="text-[10px] text-[#5E6C54]/40 font-black uppercase tracking-widest mb-2">Total Journey</p>
                  <p className="text-4xl font-black text-[#5E6C54] tracking-tight">24<span className="text-xs text-[#99A88C] ml-1">Pts</span></p>
               </div>
               <div className="bg-[#FFFFFF] p-8 rounded-[40px] shadow-[0_20px_50px_rgba(94,108,84,0.1)] border border-[#99A88C]/10 text-center hover:scale-105 transition-all">
                  <p className="text-[10px] text-[#5E6C54]/40 font-black uppercase tracking-widest mb-2">Path Streak</p>
                  <p className="text-4xl font-black text-[#A68A45] tracking-tight">08<span className="text-xs text-[#99A88C] ml-1">Days</span></p>
               </div>
             </>
           ) : (
             <>
               <div className="bg-[#FFFFFF] p-8 rounded-[40px] shadow-[0_20px_50px_rgba(94,108,84,0.1)] border border-[#99A88C]/10 text-center hover:scale-105 transition-all">
                  <p className="text-[10px] text-[#5E6C54]/40 font-black uppercase tracking-widest mb-2">Impact Score</p>
                  <p className="text-4xl font-black text-[#5E6C54] tracking-tight">4.9<span className="text-xs text-[#99A88C] ml-1">/5</span></p>
               </div>
               <div className="bg-[#FFFFFF] p-8 rounded-[40px] shadow-[0_20px_50px_rgba(94,108,84,0.1)] border border-[#99A88C]/10 text-center hover:scale-105 transition-all">
                  <p className="text-[10px] text-[#5E6C54]/40 font-black uppercase tracking-widest mb-2">Active Clients</p>
                  <p className="text-4xl font-black text-[#A68A45] tracking-tight">18</p>
               </div>
             </>
           )}
        </div>

        {/* Settings Menu Sections */}
        <div className="space-y-6">
          <SectionTitle>Profile</SectionTitle>
          <div className="bg-[#FFFFFF] rounded-[44px] overflow-hidden border border-[#99A88C]/10 shadow-2xl">
            {/* Anonymous Mode Toggle - Client Only */}
            {role === 'client' && (
              <div className="w-full flex items-center gap-6 p-6 border-b border-[#99A88C]/5 hover:bg-[#FCF8E8]/30 transition-all">
                <div className={`w-12 h-12 transition-all duration-300 rounded-2xl flex items-center justify-center shadow-sm ${isAnonymous ? 'bg-[#5E6C54] text-white' : 'bg-[#99A88C]/10 text-[#99A88C]'}`}>
                  <EyeOff size={22} />
                </div>
                <div className="flex-1 text-left">
                  <span className="block text-xs font-black text-[#5E6C54] uppercase tracking-widest mb-0.5">Anonymous Mode</span>
                  <span className="block text-[10px] text-[#5E6C54]/40 font-bold uppercase tracking-tight">{isAnonymous ? 'Identity Hidden' : 'Public Profile'}</span>
                </div>
                <button 
                  onClick={() => setIsAnonymous(!isAnonymous)}
                  className={`w-14 h-8 rounded-full relative transition-all duration-300 shadow-inner ${isAnonymous ? 'bg-[#5E6C54]' : 'bg-[#99A88C]/20'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${isAnonymous ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
            )}

            {role === 'client' ? (
              <>
                <MenuItem icon={User} label="Personal Information" color="bg-[#99A88C]/10" to="/portal/profile/personal" />
                <MenuItem icon={Settings} label="My Bookings & Sessions" color="bg-[#99A88C]/10" to="/portal/sessions" />
                <MenuItem icon={Edit2} label="My Wellness Journals" color="bg-[#99A88C]/10" to="/portal/journal" />
                <MenuItem icon={Bell} label="Notices & Bulletins" color="bg-[#99A88C]/10" to="/portal/notifications" />
                <MenuItem icon={Lock} label="Security Vault" color="bg-[#99A88C]/10" to="/portal/profile/security" />
                <MenuItem icon={CreditCard} label="Billing History" color="bg-[#99A88C]/10" to="/portal/profile/billing" />
                <MenuItem icon={Plus} label="Update Payment Method" color="bg-[#99A88C]/10" to="/portal/profile/payment" />
                <MenuItem icon={HelpCircle} label="Evolution Support" color="bg-[#99A88C]/10" to="/portal/profile/support" />
              </>
            ) : (
              <>
                <MenuItem icon={User} label="Professional Profile" color="bg-[#99A88C]/10" to="/coach/onboarding/profile" />
                <MenuItem icon={Settings} label="My Schedule" color="bg-[#99A88C]/10" to="/coach/schedule" />
                <MenuItem icon={Bell} label="Resource Library" color="bg-[#99A88C]/10" to="/coach/resources" />
                <MenuItem icon={CreditCard} label="Earnings & Payouts" color="bg-[#99A88C]/10" to="/coach/earnings" />
                <MenuItem icon={Lock} label="Security Vault" color="bg-[#99A88C]/10" to="/portal/profile/security" />
                <MenuItem icon={HelpCircle} label="Evolution Support" color="bg-[#99A88C]/10" to="/portal/profile/support" />
              </>
            )}
          </div>

          <button 
             onClick={() => navigate('/')}
             className="w-full bg-[#FFFFFF] p-6 rounded-[44px] border border-red-50 flex items-center justify-center gap-4 group hover:bg-red-50 transition-all shadow-xl"
          >
             <div className="w-12 h-12 bg-red-50 group-hover:bg-red-100 rounded-2xl flex items-center justify-center text-red-500 transition-all shadow-sm">
               <LogOut size={22} />
             </div>
             <span className="text-[11px] font-black text-red-500 uppercase tracking-[0.2em]">Sign out completely</span>
          </button>

        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[10px] font-black text-[#5E6C54] opacity-40 uppercase tracking-[0.25em] px-4 pt-2">
      {children}
    </h3>
  );
}

function MenuItem({ icon: Icon, label, color, badge, to }: { icon: any, label: string, color: string, badge?: string, to: string }) {
  return (
    <Link to={to} className="w-full flex items-center gap-6 p-6 hover:bg-[#FCF8E8] transition-all group active:opacity-70 border-b border-[#99A88C]/5 last:border-none">
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
    </Link>
  );
}
