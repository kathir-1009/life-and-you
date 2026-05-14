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
        <div className="bg-[#F4F7FA] border-t border-[#8B9A71]/10 px-2 sm:px-6 py-3 pb-safe flex items-center justify-around shadow-[0_-10px_40px_rgba(0,0,0,0.05)] rounded-t-[32px]">
          {navItems.map((item) => {
            const active = isActive(item.path);

            return (
              <div key={item.label} className="relative">
                  <Link
                    to={item.path}
                    className="flex flex-col items-center gap-1.5 relative group"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        "featured" in item && item.featured
                          ? "bg-[#2D3324] text-[#8B9A71] shadow-2xl shadow-[#2D3324]/30 -translate-y-6 scale-110 rounded-full border-4 border-[#F4F7FA]"
                          : active
                          ? "bg-[#8B9A71] text-white shadow-xl shadow-[#8B9A71]/20 -translate-y-1"
                          : "text-[#2D3324]/30 hover:text-[#2D3324] active:scale-90"
                      }`}
                    >
                      <item.icon size={"featured" in item && item.featured ? 24 : 20} />

                      {"badge" in item && item.badge && !active && (
                        <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#A68A45] rounded-full border-2 border-[#F4F7FA] shadow-sm" />
                      )}

                      {item.label === "Account" && isAnonymous && !active && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A68A45] rounded-full flex items-center justify-center text-white border-2 border-[#F4F7FA] shadow-sm">
                          <EyeSlash size={10} />
                        </div>
                      )}
                    </div>

                    <span
                      className={`text-[8px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                        active || ("featured" in item && item.featured)
                          ? "text-[#2D3324] opacity-100"
                          : "text-[#2D3324]/40 opacity-0 group-hover:opacity-100"
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
