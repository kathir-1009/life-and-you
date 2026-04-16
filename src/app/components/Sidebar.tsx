import { Link, useLocation } from "react-router";
import { Home, MessageCircle, Calendar, User, TrendingUp, LogOut, ShieldCheck, Star, Compass, EyeOff, Eye, Book, Clock } from "lucide-react";
import { useUser } from "../context/UserContext";

export function Sidebar() {
  const location = useLocation();
  const { isAnonymous, setIsAnonymous, user, role } = useUser();
  const isActive = (path: string) => location.pathname === path;

  const clientNav = [
    { icon: Home, label: "Dashboard", path: "/portal" },
    { icon: Calendar, label: "My Sessions", path: "/portal/sessions" },
    { icon: Compass, label: "Book Session", path: "/portal/book" },
    { icon: TrendingUp, label: "My Progress", path: "/portal/progress" },
    { icon: Book, label: "Library", path: "/portal/library" },
    { icon: MessageCircle, label: "Messages", path: "/portal/messages", badge: "3" },
    { icon: Star, label: "Journal", path: "/portal/journal" },
  ];

  const coachNav = [
    { icon: Home, label: "Dashboard", path: "/coach" },
    { icon: Calendar, label: "Schedule", path: "/coach/schedule" },
    { icon: User, label: "Clients", path: "/coach/clients" },
    { icon: Clock, label: "Sessions", path: "/coach/sessions" },
    { icon: MessageCircle, label: "Messages", path: "/coach/messages", badge: "12" },
    { icon: Book, label: "Resources", path: "/coach/resources" },
    { icon: TrendingUp, label: "Earnings", path: "/coach/earnings" },
  ];

  const adminNav = [
    { icon: Home, label: "Dashboard", path: "/admin" },
    { icon: User, label: "Users", path: "/admin/users" },
    { icon: ShieldCheck, label: "Coaches", path: "/admin/coaches" },
    { icon: Clock, label: "Sessions", path: "/admin/sessions" },
    { icon: Book, label: "Content", path: "/admin/content" },
    { icon: TrendingUp, label: "Analytics", path: "/admin/analytics" },
    { icon: TrendingUp, label: "Billing", path: "/admin/billing" },
  ];

  const navItems = role === 'coach' ? coachNav : role === 'admin' ? adminNav : clientNav;

  return (
    <div className="w-80 h-screen sticky top-0 bg-sage flex flex-col p-8 border-r border-sage/20 shadow-2xl overflow-y-auto hidden lg:flex custom-scrollbar">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sage/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-[80px]" />
      
      {/* Logo Area */}
      <div className="mb-12 relative z-10 flex items-center gap-4">
        <div className="w-10 h-10">
           <img 
             src="/img/Lifeandyou-logo-1.png" 
             alt="Life & You" 
             className="w-full h-full object-contain brightness-[10]" 
           />
        </div>
        <div className="flex flex-col">
           <h1 className="text-xl font-bold text-white tracking-tight leading-none font-serif">Life & You</h1>
           <span className="text-[10px] font-bold text-[#B5C4BA] uppercase tracking-[0.2em] mt-1">Coaching Platform</span>
        </div>
      </div>

      {/* User Quick Profile */}
      <div className="mb-10 px-4 py-6 bg-white/5 rounded-[24px] border border-white/5 relative z-10">
         <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg border border-[#B5C4BA]/20 relative">
               <img 
                 src={(isAnonymous && role === 'client') ? "/img/user/anonymous.png" : user.avatar} 
                 alt="Avatar" 
                 className={`w-full h-full object-cover ${(isAnonymous && role === 'client') ? 'grayscale' : ''}`} 
               />
               {(isAnonymous && role === 'client') && <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white"><EyeOff size={14} /></div>}
            </div>
            <div className="flex flex-col">
               <span className="text-xs font-bold text-white leading-tight">{(isAnonymous && role === 'client') ? "Anonymous User" : user.name}</span>
               <span className="text-[10px] text-[#B5C4BA] uppercase tracking-wider mt-0.5">
                 {role === 'admin' ? "Platform Admin" : role === 'coach' ? "Certified Coach" : "Client"}
               </span>
            </div>
         </div>

          {role === 'client' && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                 <div className={`p-1.5 rounded-lg ${isAnonymous ? 'bg-sage text-white' : 'bg-white/10 text-white/40'}`}>
                    {isAnonymous ? <EyeOff size={14} /> : <Eye size={14} />}
                 </div>
                 <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Privacy Mode</span>
              </div>
              <button 
                onClick={() => setIsAnonymous(!isAnonymous)}
                className={`w-9 h-5 rounded-full relative transition-all ${isAnonymous ? 'bg-sage' : 'bg-white/10'}`}
              >
                 <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${isAnonymous ? 'right-0.5' : 'left-0.5'}`} />
              </button>
            </div>
          )}
      </div>

      {/* Navigation Groups */}
      <div className="flex-1 space-y-1 relative z-10">
        <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-4 ml-4">
          {role === 'admin' ? "Admin Console" : role === 'coach' ? "Coach Workspace" : "Portal Home"}
        </p>
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-4 px-5 py-3.5 rounded-[16px] transition-all group ${
                active 
                  ? "bg-sage text-white shadow-lg shadow-black/20" 
                  : "text-white/40 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon size={18} className={active ? "text-white" : "group-hover:text-white"} />
              <span className="text-xs font-bold tracking-wide flex-1">{item.label}</span>
              {item.badge && (
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${active ? 'bg-white/20 text-white' : 'bg-gold text-sage-dark'}`}>{item.badge}</span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Account Profile Bottom Link */}
      <Link
        to="/app/profile"
        className={`flex items-center gap-4 px-6 py-4 rounded-[24px] transition-all mb-4 relative z-10 ${
          isActive("/app/profile") ? "bg-[#8B9A71] text-white" : "text-white/50 hover:bg-white/5 hover:text-white"
        }`}
      >
        <User size={20} />
        <span className="text-xs font-black uppercase tracking-widest">My Preferences</span>
      </Link>

      {/* Sign Out */}
      <button 
        onClick={() => { sessionStorage.clear(); window.location.href = "/splash"; }}
        className="flex items-center gap-4 px-6 py-4 rounded-[24px] text-red-400 hover:bg-red-500/10 transition-all group relative z-10"
      >
         <LogOut size={20} />
         <span className="text-xs font-black uppercase tracking-widest">Terminate Session</span>
      </button>
    </div>
  );
}
