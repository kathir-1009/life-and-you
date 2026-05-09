import { Link, useLocation } from "react-router";
import {
  House,
  ChatRightDots,
  Person,
  Compass,
  EyeSlash,
  CalendarCheckFill,
  ClipboardCheckFill,
} from "react-bootstrap-icons";
import { useUser } from "../context/UserContext";

export function BottomNav() {
  const location = useLocation();
  const { isAnonymous, role } = useUser();

  const isActive = (path: string) => location.pathname === path || (path !== "/portal" && path !== "/coach" && location.pathname.startsWith(path));

  const clientNav = [
    { icon: House, label: "Home", path: "/portal" },
    { icon: ClipboardCheckFill, label: "Sessions", path: "/portal/sessions" },
    { icon: Compass, label: "Explore", path: "/portal/coaches", featured: true },
    { icon: ChatRightDots, label: "Messages", path: "/portal/messages", badge: true },
    { icon: Person, label: "Profile", path: "/portal/profile" },
  ];

  const coachNav = [
    { icon: House, label: "Home", path: "/coach" },
    { icon: CalendarCheckFill, label: "Schedule", path: "/coach/schedule" },
    { icon: ClipboardCheckFill, label: "Sessions", path: "/coach/sessions", featured: true },
    { icon: ChatRightDots, label: "Chat", path: "/coach/messages", badge: true },
    { icon: Person, label: "Profile", path: "/coach/profile" },
  ];

  const navItems = role === "coach" ? coachNav : clientNav;

  return (
    <>
      {/* ── Bottom Navigation Bar ── */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden z-50">
        {/* Gradient fade above nav */}
        <div className="h-6 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />

        <div className="bg-white/90 backdrop-blur-2xl border-t border-[#99A88C]/5 px-2 sm:px-4 py-1.5 sm:py-2 pb-3 flex items-center justify-around shadow-[0_-10px_40px_rgba(0,0,0,0.08)] rounded-t-[28px] sm:rounded-t-[32px]">
          {navItems.map((item) => {
            const active = isActive(item.path);

            return (
              <div key={item.label} className="relative">
                  <Link
                    to={item.path}
                    className="flex flex-col items-center gap-1 relative group"
                  >
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        "featured" in item && item.featured
                          ? "bg-[#2D3324] text-white shadow-xl shadow-[#2D3324]/30 -translate-y-3 scale-110 rounded-[20px]"
                          : active
                          ? "bg-[#8B9A71] text-white shadow-lg shadow-[#8B9A71]/20 scale-105 -translate-y-1"
                          : "text-[#5E6C54]/40 hover:text-[#5E6C54] active:scale-90"
                      }`}
                    >
                      <item.icon size={"featured" in item && item.featured ? 22 : 20} />

                      {"badge" in item && item.badge && !active && (
                        <div className="absolute top-2 right-2 w-2 h-2 bg-[#A68A45] rounded-full border-2 border-white" />
                      )}

                      {item.label === "Account" && isAnonymous && !active && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A68A45] rounded-full flex items-center justify-center text-white border-2 border-white">
                          <EyeSlash size={10} />
                        </div>
                      )}
                    </div>

                    <span
                      className={`text-[9px] font-black uppercase tracking-widest transition-all ${
                        "featured" in item && item.featured
                          ? "text-[#2D3324]"
                          : active
                          ? "text-[#8B9A71]"
                          : "text-[#5E6C54]/35"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
