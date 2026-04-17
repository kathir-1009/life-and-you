import { Link, useLocation } from "react-router";
import { 
  House, 
  Calendar3, 
  Compass, 
  GraphUp, 
  JournalText, 
  Star, 
  Person, 
  ShieldCheck, 
  Clock, 
  Bell, 
  ChatRightDots, 
  BoxArrowRight 
} from "react-bootstrap-icons";
import { useUser } from "../context/UserContext";

export function PortalHeader() {
  const location = useLocation();
  const { role, user } = useUser();
  const isActive = (path: string) => location.pathname === path;

  const clientNav = [
    { icon: House, label: "Home", path: "/portal", desc: "My Dashboard" },
    { icon: Calendar3, label: "Sessions", path: "/portal/sessions", desc: "Appointments" },
    { icon: Compass, label: "Book", path: "/portal/book", desc: "New Breakthrough" },
    { icon: GraphUp, label: "Progress", path: "/portal/progress", desc: "Growth Path" },
    { icon: JournalText, label: "Library", path: "/portal/library", desc: "Resources" },
    { icon: Star, label: "Journal", path: "/portal/journal", desc: "My Thoughts" },
  ];

  const coachNav = [
    { icon: House, label: "Home", path: "/coach", desc: "Workspace" },
    { icon: Calendar3, label: "Schedule", path: "/coach/schedule", desc: "Availability" },
    { icon: Person, label: "Clients", path: "/coach/clients", desc: "Management" },
    { icon: ChatRightDots, label: "Messages", path: "/coach/messages", desc: "Community" },
    { icon: GraphUp, label: "Earnings", path: "/coach/earnings", desc: "Analytics" },
  ];

  const adminNav = [
    { icon: House, label: "Admin", path: "/admin", desc: "Stats" },
    { icon: Person, label: "Users", path: "/admin/users", desc: "Directory" },
    { icon: ShieldCheck, label: "Coaches", path: "/admin/coaches", desc: "Platform" },
    { icon: Clock, label: "Sessions", path: "/admin/sessions", desc: "History" },
    { icon: GraphUp, label: "Analytics", path: "/admin/analytics", desc: "Reports" },
  ];

  const navItems = role === 'coach' ? coachNav : role === 'admin' ? adminNav : clientNav;

  return (
    <header className="hidden lg:block relative font-sans-app">
      {/* Cinematic Top Background - Fixed Layering */}
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-r from-sage via-sage to-[#B7C4B1] overflow-hidden z-0">
         <div className="absolute inset-0 bg-[url('/img/bg/pattern-bg.png')] opacity-10 mix-blend-overlay" />
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold-dark/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-10 relative z-10">
        {/* Top Header Bar */}
        <div className="h-24 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 group">
               <div className="w-12 h-12 bg-[#A68A45]/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:bg-[#A68A45]/20 transition-all">
                  <img src="/img/Lifeandyou-logo-1.png" alt="Logo" className="w-8 h-8 brightness-0 invert" />
               </div>
               <div>
                  <h1 className="text-2xl font-bold text-white tracking-tight leading-none font-serif">Life & You</h1>
                  <p className="text-[10px] font-black text-gold-dark uppercase tracking-[0.3em] mt-1.5">Sanctuary Portal</p>
               </div>
            </Link>

            <div className="flex items-center gap-10">
               <div className="flex items-center gap-6">
                  <button className="text-white/40 hover:text-gold-dark transition-all"><Bell size={20} /></button>
                  <button className="text-white/40 hover:text-gold-dark transition-all"><ChatRightDots size={20} /></button>
               </div>
               
               <div className="h-10 w-[1px] bg-white/10" />

               <div className="flex items-center gap-5">
                  <div className="text-right">
                     <p className="text-sm font-black text-white leading-none tracking-tight">{user.name}</p>
                     <p className="text-[10px] text-gold-dark font-black uppercase tracking-widest mt-1.5 opacity-90">{role} Access</p>
                  </div>
                  <div className="relative group/avatar">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl group-hover/avatar:border-[#A68A45] transition-all">
                       <img src={user.avatar} className="w-full h-full object-cover" alt="User" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-sage rounded-full" />
                  </div>
                  <button 
                    onClick={() => { sessionStorage.clear(); window.location.href = "/splash"; }}
                    className="p-2 text-white/20 hover:text-red-400 transition-colors ml-2"
                  >
                     <BoxArrowRight size={18} />
                  </button>
               </div>
            </div>
        </div>

        {/* Floating Navigation Card (MakeMyTrip Style) */}
        <div className="mt-4 translate-y-6 relative z-20">
           <div className="bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-sage/5 p-2 flex items-center justify-between">
              <div className="flex items-center">
                 {navItems.map((item, idx) => {
                   const active = isActive(item.path);
                   return (
                      <Link 
                        key={idx}
                        to={item.path}
                        className={`flex flex-col items-center gap-2 px-8 py-4 min-w-[120px] transition-all relative group ${active ? 'text-[#2A3324]' : 'text-[#2A3324]/60 hover:text-[#2A3324]'}`}
                      >
                         <item.icon size={26} className={`transition-transform duration-300 ${active ? 'scale-110 opacity-100' : 'opacity-50 group-hover:opacity-100 group-hover:scale-110'}`} />
                         <span className={`text-[11px] font-bold tracking-wide transition-all ${active ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>{item.label}</span>
                         {active && (
                           <div className="absolute bottom-0 left-6 right-6 h-1 bg-[#2A3324] rounded-t-full shadow-[0_-4px_10px_rgba(42,51,36,0.2)]" />
                         )}
                         <span className="absolute top-1 right-1 opacity-0 group-hover:opacity-10 text-[8px] font-black uppercase pointer-events-none">{item.desc}</span>
                      </Link>
                   )
                 })}
              </div>
              
              <div className="pr-8 pl-4">
                 <Link 
                   to="/portal/book" 
                   className="bg-gradient-to-r from-sage to-[#2D3324] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl hover:scale-[1.03] transition-all block focus:ring-4 ring-sage/20"
                 >
                   Instant Booking
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}
