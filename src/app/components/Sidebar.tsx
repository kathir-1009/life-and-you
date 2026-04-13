import { Link, useLocation } from "react-router";
import { Home, MessageCircle, Calendar, User, TrendingUp, LogOut, ShieldCheck, Star, Compass, EyeOff, Eye, Book, Clock } from "lucide-react";
import { useUser } from "../context/UserContext";

export function Sidebar() {
  const location = useLocation();
  const { isAnonymous, setIsAnonymous, user, role } = useUser();
  const isActive = (path: string) => location.pathname === path;

  const clientNav = [
    { icon: Home, label: "Dashboard", path: "/app/dashboard" },
    { icon: Compass, label: "Explore Coaches", path: "/app/explore" },
    { icon: Calendar, label: "Book Session", path: "/app/book" },
    { icon: MessageCircle, label: "Messenger", path: "/app/messages", badge: "3" },
    { icon: TrendingUp, label: "My Progress", path: "/app/progress" },
    { icon: Book, label: "Journal", path: "/app/journal" },
  ];

  const coachNav = [
    { icon: Home, label: "Dashboard", path: "/app/dashboard" },
    { icon: Calendar, label: "Schedule", path: "/app/schedule" },
    { icon: Clock, label: "Availability", path: "/app/availability" },
    { icon: User, label: "My Clients", path: "/app/clients" },
    { icon: MessageCircle, label: "Messenger", path: "/app/messages", badge: "12" },
    { icon: TrendingUp, label: "Earnings", path: "/app/earnings" },
  ];

  const navItems = role === 'coach' ? coachNav : clientNav;

  return (
    <div className="w-80 h-screen sticky top-0 bg-[#2D3324] flex flex-col p-8 border-r border-[#8B9A71]/10 shadow-2xl overflow-y-auto hidden lg:flex custom-scrollbar">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#8B9A71]/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-[80px]" />
      
      {/* Logo Area */}
      <div className="mb-12 relative z-10 flex items-center gap-4">
        <div className="w-12 h-12 bg-transparent flex items-center justify-center">
           <img 
             src="/img/Lifeandyou-logo-1.png" 
             alt="Life & You" 
             className="w-full h-full object-contain brightness-[10]" // Forced brightness for dark background
           />
        </div>
        <div className="flex flex-col">
           <h1 className="text-xl font-black text-white tracking-tight leading-none" style={{ color: '#ffffff' }}>Life & You</h1>
           <span className="text-[10px] font-bold text-[#8B9A71] uppercase tracking-[0.2em] mt-1.5" style={{ color: '#8B9A71' }}>Coaching & Consulting</span>
        </div>
      </div>

      {/* User Quick Profile */}
      <div className="mb-10 px-4 py-6 bg-white/5 rounded-[32px] border border-white/5 relative z-10">
         <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg border-2 border-[#8B9A71]/20 relative">
               <img 
                 src={(isAnonymous && role === 'client') ? "/img/user/anonymous.png" : user.avatar} 
                 alt="Avatar" 
                 className={`w-full h-full object-cover transition-all duration-500 ${(isAnonymous && role === 'client') ? 'grayscale' : ''}`} 
               />
               {(isAnonymous && role === 'client') && <div className="absolute inset-0 bg-[#2D3324]/40 flex items-center justify-center text-white"><EyeOff size={14} /></div>}
            </div>
            <div className="flex flex-col">
               <span className="text-[11px] font-black text-white uppercase tracking-wider leading-tight" style={{ color: 'white' }}>{(isAnonymous && role === 'client') ? "Counseling Anonymously" : user.name}</span>
               <span className="text-[9px] font-bold text-[#8B9A71] uppercase tracking-[0.15em] mt-0.5" style={{ color: '#8B9A71' }}>{(isAnonymous && role === 'client') ? "ID: LY-7729" : (role === 'coach' ? "Certified Coach" : "Client Account")}</span>
            </div>
         </div>

          {role === 'client' && (
            <div className="flex items-center justify-between pointer-events-auto">
              <div className="flex items-center gap-2">
                 <div className={`p-1.5 rounded-lg transition-colors ${isAnonymous ? 'bg-[#8B9A71] text-[#2D3324]' : 'bg-white/10 text-white/40'}`}>
                    {isAnonymous ? <EyeOff size={14} /> : <Eye size={14} />}
                 </div>
                 <span className="text-[10px] font-extrabold text-white/60 tracking-widest uppercase">Anonymous Mode</span>
              </div>
              <button 
                onClick={() => setIsAnonymous(!isAnonymous)}
                className={`w-10 h-6 rounded-full relative transition-all ${isAnonymous ? 'bg-[#8B9A71]' : 'bg-white/10'}`}
              >
                 <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isAnonymous ? 'right-1' : 'left-1'}`} />
              </button>
            </div>
          )}
      </div>

      {/* Navigation Groups */}
      <div className="flex-1 space-y-2 relative z-10">
        <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] mb-4 ml-4">
          {role === 'coach' ? "Coach Console" : "Main Experience"}
        </p>
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-4 px-6 py-4 rounded-[16px] transition-all group ${
                active 
                  ? "bg-[#8B9A71] text-[#2D3324] shadow-lg shadow-[#8B9A71]/10 translate-x-1" 
                  : "text-white/40 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className={`transition-transform duration-500 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
                <item.icon size={20} strokeWidth={active ? 2.5 : 2} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] flex-1">{item.label}</span>
              {item.badge && (
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-lg ${active ? 'bg-white text-[#8B9A71]' : 'bg-[#8B9A71] text-white'}`}>{item.badge}</span>
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
