import { Link, useLocation } from "react-router";
import { Home, MessageCircle, Calendar, User, TrendingUp, LogOut, Star, Compass, EyeOff, Eye, Book, Clock, LucideIcon } from "lucide-react";
import { useUser } from "../context/UserContext";

interface NavItem {
  icon: LucideIcon;
  label: string;
  path: string;
  badge?: string;
}

export function Sidebar({ isOpen, onClose }: { isOpen?: boolean, onClose?: () => void }) {
  const location = useLocation();
  const { isAnonymous, setIsAnonymous, user, role } = useUser();
  const isActive = (path: string) => location.pathname === path;

  const clientNav: NavItem[] = [
    { icon: Home, label: "Dashboard", path: "/portal" },
    { icon: Calendar, label: "My Sessions", path: "/portal/sessions" },
    { icon: Compass, label: "Book Session", path: "/portal/book" },
    { icon: TrendingUp, label: "My Progress", path: "/portal/progress" },
    { icon: Book, label: "Library", path: "/portal/library" },
    { icon: MessageCircle, label: "Messages", path: "/portal/messages", badge: "3" },
    { icon: Star, label: "Journal", path: "/portal/journal" },
  ];

  const coachNav: NavItem[] = [
    { icon: Home, label: "Dashboard", path: "/coach" },
    { icon: Calendar, label: "Schedule", path: "/coach/schedule" },
    { icon: User, label: "Clients", path: "/coach/clients" },
    { icon: Clock, label: "Sessions", path: "/coach/sessions" },
    { icon: MessageCircle, label: "Messages", path: "/coach/messages", badge: "12" },
    { icon: Book, label: "Notes", path: "/coach/notes" },
    { icon: Star, label: "Resources", path: "/coach/resources" },
    { icon: TrendingUp, label: "Earnings", path: "/coach/earnings" },
  ];

  const navItems = role === 'coach' ? coachNav : clientNav;
  const profilePath = role === 'coach' ? "/coach/profile" : "/portal/profile";
  const portalLabel = role === 'coach' ? "Coach Workspace" : "Portal Home";

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] lg:hidden animate-in fade-in duration-300"
          onClick={onClose}
        />
      )}

      <div className={`
        fixed lg:sticky top-0 left-0 h-screen w-80 bg-[#2D3324] flex flex-col p-8 border-r border-white/5 shadow-2xl overflow-y-auto z-[101] transition-transform duration-500 custom-scrollbar
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-[80px]" />
        
        {/* Logo Area */}
        <div className="mb-12 relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10">
               <img 
                 src="/img/Lifeandyou-logo-1.png" 
                 alt="Life & You" 
                 className="w-full h-full object-contain brightness-[10]" 
               />
            </div>
            <div className="flex flex-col">
               <h1 className="text-xl font-bold text-white tracking-tight leading-none font-serif">Life & You</h1>
               <span className="text-[10px] font-bold text-[#8B9A71] uppercase tracking-[0.2em] mt-1">Coaching Platform</span>
            </div>
          </div>
          {onClose && (
            <button onClick={onClose} className="lg:hidden w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors">
               <EyeOff size={20} className="rotate-45" /> {/* Close icon substitute or just use X */}
            </button>
          )}
        </div>

        {/* User Quick Profile */}
        <div className="mb-10 px-4 py-6 bg-white/5 rounded-[24px] border border-white/5 relative z-10">
           <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg border border-white/10 relative">
                 <img 
                   src={(isAnonymous && role === 'client') ? "/img/user/anonymous.png" : user.avatar} 
                   alt="Avatar" 
                   className={`w-full h-full object-cover ${(isAnonymous && role === 'client') ? 'grayscale' : ''}`} 
                 />
                 {(isAnonymous && role === 'client') && <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white"><EyeOff size={14} /></div>}
              </div>
              <div className="flex flex-col">
                 <span className="text-xs font-bold text-white leading-tight">
                   {(isAnonymous && role === 'client') ? "Anonymous User" : user.name}
                 </span>
                 <span className="text-[10px] text-[#8B9A71] uppercase tracking-wider mt-0.5">
                   {role === 'coach' ? "Certified Coach" : "Client"}
                 </span>
              </div>
           </div>

            {role === 'client' && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className={`p-1.5 rounded-lg ${isAnonymous ? 'bg-[#8B9A71] text-white' : 'bg-white/10 text-white/40'}`}>
                      {isAnonymous ? <EyeOff size={14} /> : <Eye size={14} />}
                   </div>
                   <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Privacy Mode</span>
                </div>
                <button 
                  onClick={() => setIsAnonymous(!isAnonymous)}
                  className={`w-9 h-5 rounded-full relative transition-all ${isAnonymous ? 'bg-[#8B9A71]' : 'bg-white/10'}`}
                >
                   <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${isAnonymous ? 'right-0.5' : 'left-0.5'}`} />
                </button>
              </div>
            )}
        </div>

        {/* Navigation Groups */}
        <div className="flex-1 space-y-1 relative z-10">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-4 ml-4">
            {portalLabel}
          </p>
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-4 px-5 py-3.5 rounded-[16px] transition-all group ${
                  active 
                    ? "bg-[#8B9A71] text-white shadow-lg shadow-black/20" 
                    : "text-white/40 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon size={18} className={active ? "text-white" : "group-hover:text-white"} />
                <span className="text-xs font-bold tracking-wide flex-1">{item.label}</span>
                {item.badge && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${active ? 'bg-white/20 text-white' : 'bg-[#C4A35A] text-[#2D3324]'}`}>{item.badge}</span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Account Profile Bottom Link */}
        <Link
          to={profilePath}
          onClick={onClose}
          className={`flex items-center gap-4 px-6 py-4 rounded-[24px] transition-all mb-4 relative z-10 ${
            isActive(profilePath) ? "bg-[#8B9A71] text-white" : "text-white/50 hover:bg-white/5 hover:text-white"
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
    </>
  );
}
  );
}
