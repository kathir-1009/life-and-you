import { Link, useLocation } from "react-router";
import { House, ChatRightDots, GraphUp, Person, Compass, EyeSlash, JournalBookmarkFill, CalendarCheckFill } from "react-bootstrap-icons";
import { useUser } from "../context/UserContext";

export function BottomNav() {
  const location = useLocation();
  const { isAnonymous, role } = useUser();
  const isActive = (path: string) => location.pathname === path;

  const clientNav = [
    { icon: House, label: "Home", path: "/portal" },
    { icon: GraphUp, label: "Progress", path: "/portal/progress" },
    { icon: Compass, label: "Book", path: "/portal/book" },
    { icon: JournalBookmarkFill, label: "Journal", path: "/portal/journal" },
    { icon: ChatRightDots, label: "Chat", path: "/portal/messages", badge: true },
    { icon: Person, label: "Profile", path: "/portal/profile" },
  ];

  const coachNav = [
    { icon: House, label: "Home", path: "/coach" },
    { icon: CalendarCheckFill, label: "Schedule", path: "/coach/schedule" },
    { icon: ChatRightDots, label: "Chat", path: "/coach/messages", badge: true },
    { icon: Person, label: "Profile", path: "/portal/profile" }, // Profile is shared
  ];

  const navItems = role === 'coach' ? coachNav : clientNav;

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-[#FFFFFF]/10 backdrop-blur-2xl border-t border-[#FFFFFF]/10 px-4 sm:px-6 py-1 sm:py-3 pb-3 flex items-center justify-between z-50 rounded-t-[28px] sm:rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      {navItems.map((item) => {
        const active = isActive(item.path);
        return (
          <Link
            key={item.label}
            to={item.path}
            className="flex flex-col items-center gap-1.5 relative group"
          >
            <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${active ? 'bg-[#99A88C] text-[#FFFFFF] shadow-lg shadow-[#000000]/10 scale-100 sm:scale-110 -translate-y-1' : 'text-[#5E6C54]/50 hover:text-[#5E6C54]'}`}>
              <item.icon size={22} />
              {item.badge && !active && (
                <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#A68A45] rounded-full border-2 border-[#FFFFFF]" />
              )}
              {item.label === "Account" && isAnonymous && !active && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A68A45] rounded-full flex items-center justify-center text-[#FFFFFF] border-2 border-[#FFFFFF]">
                   <EyeSlash size={10} />
                </div>
              )}
            </div>
            
            <span className={`text-[10px] font-black uppercase tracking-widest transition-all ${active ? 'text-[#99A88C]' : 'text-[#5E6C54]/40 group-hover:text-[#5E6C54]'}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
