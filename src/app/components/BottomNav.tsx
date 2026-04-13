import { Link, useLocation } from "react-router";
import { Home, MessageCircle, Calendar, User, TrendingUp, Compass, EyeOff } from "lucide-react";
import { useUser } from "../context/UserContext";

export function BottomNav() {
  const location = useLocation();
  const { isAnonymous } = useUser();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: Home, label: "Home", path: "/app/dashboard" },
    { icon: Compass, label: "Discover", path: "/app/explore" },
    { icon: Calendar, label: "Book", path: "/app/book" },
    { icon: MessageCircle, label: "Chat", path: "/app/messages", badge: true },
    { icon: User, label: "Account", path: "/app/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-2xl border-t border-white/10 px-4 sm:px-6 py-2 sm:py-3 pb-8 md:pb-4 flex items-center justify-between z-50 rounded-t-[28px] sm:rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:max-w-md md:mx-auto md:bottom-6 md:rounded-full md:border">
      {navItems.map((item) => {
        const active = isActive(item.path);
        return (
          <Link
            key={item.label}
            to={item.path}
            className="flex flex-col items-center gap-1.5 relative group"
          >
            <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${active ? 'bg-[#8B9A71] text-white shadow-lg shadow-[#8B9A71]/20 scale-100 sm:scale-110 -translate-y-1' : 'text-[#2D3324]/40 hover:text-[#8B9A71]'}`}>
              <item.icon size={22} strokeWidth={active ? 2.5 : 2} />
              {item.badge && !active && (
                <div className="absolute top-2 right-2 w-2 w-2 bg-red-400 rounded-full border-2 border-white" />
              )}
              {item.label === "Account" && isAnonymous && !active && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#8B9A71] rounded-full flex items-center justify-center text-[#2D3324] border-2 border-white">
                   <EyeOff size={10} />
                </div>
              )}
            </div>
            {!active && (
              <span className="text-[8px] font-bold text-[#2D3324]/50 uppercase tracking-widest group-hover:text-[#8B9A71] transition-all">
                {item.label}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
