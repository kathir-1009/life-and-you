import { Link, useLocation } from "react-router";
import { House, ChatRightDots, GraphUp, Person, Compass, EyeSlash } from "react-bootstrap-icons";
import { useUser } from "../context/UserContext";

export function BottomNav() {
  const location = useLocation();
  const { isAnonymous } = useUser();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: House, label: "Home", path: "/portal" },
    { icon: Compass, label: "Book", path: "/portal/book" },
    { icon: GraphUp, label: "Progress", path: "/portal/progress" },
    { icon: ChatRightDots, label: "Chat", path: "/portal/messages", badge: true },
    { icon: Person, label: "Account", path: "/portal/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white/10 backdrop-blur-2xl border-t border-white/10 px-4 sm:px-6 py-1 sm:py-3 pb-3 flex items-center justify-between z-50 rounded-t-[28px] sm:rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      {navItems.map((item) => {
        const active = isActive(item.path);
        return (
          <Link
            key={item.label}
            to={item.path}
            className="flex flex-col items-center gap-1.5 relative group"
          >
            <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${active ? 'bg-[#99A88C] text-white shadow-lg shadow-black/10 scale-100 sm:scale-110 -translate-y-1' : 'text-[#99A88C]/40 hover:text-[#99A88C]'}`}>
              <item.icon size={22} />
              {item.badge && !active && (
                <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#8A7340] rounded-full border-2 border-white" />
              )}
              {item.label === "Account" && isAnonymous && !active && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#8A7340] rounded-full flex items-center justify-center text-[#2A3324] border-2 border-white">
                   <EyeSlash size={10} />
                </div>
              )}
            </div>
            {!active && (
              <span className="text-[8px] font-bold text-[#99A88C]/50 uppercase tracking-widest group-hover:text-[#99A88C] transition-all">
                {item.label}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
