import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import {
  House,
  ChatRightDots,
  GraphUp,
  Person,
  Compass,
  EyeSlash,
  JournalBookmarkFill,
  CalendarCheckFill,
  XLg,
  PencilSquare,
  BarChartFill,
  Trophy,
  HeartFill,
  ShieldFill,
  ArrowRight,
  Calendar3,
} from "react-bootstrap-icons";
import { useUser } from "../context/UserContext";

/* ── Quick-access drawer data ── */
const journalQuickEntries = [
  { date: "Today", title: "Morning Reflection", preview: "Start your day with intention..." },
  { date: "Yesterday", title: "Evening Gratitude", preview: "3 things I'm grateful for..." },
  { date: "Apr 22", title: "Stoic Breathing", preview: "Focus protocol results improving..." },
];

const progressQuickStats = [
  { label: "Anxiety Control", value: 82, color: "bg-[#99A88C]" },
  { label: "Sleep Pattern", value: 65, color: "bg-[#99A88C]" },
  { label: "Emotional Stability", value: 90, color: "bg-[#A68A45]" },
];

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAnonymous, role } = useUser();
  const [activeDrawer, setActiveDrawer] = useState<"journal" | "progress" | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  /* Close drawer on route change */
  useEffect(() => {
    setActiveDrawer(null);
  }, [location.pathname]);

  /* Close drawer on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setActiveDrawer(null);
      }
    }
    if (activeDrawer) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [activeDrawer]);

  /* Handle nav item tap — intercept Journal/Progress for drawer on mobile */
  const handleNavTap = (item: typeof clientNav[0]) => {
    if (item.drawer) {
      setActiveDrawer((prev) => (prev === item.drawer ? null : item.drawer!));
    } else {
      setActiveDrawer(null);
    }
  };

  const clientNav = [
    { icon: House, label: "Home", path: "/portal" },
    { icon: GraphUp, label: "Progress", path: "/portal/progress", drawer: "progress" as const },
    { icon: Compass, label: "Book", path: "/portal/book", featured: true },
    { icon: JournalBookmarkFill, label: "Journal", path: "/portal/journal", drawer: "journal" as const },
    { icon: Person, label: "Profile", path: "/portal/profile" },
  ];

  const coachNav = [
    { icon: House, label: "Home", path: "/coach" },
    { icon: CalendarCheckFill, label: "Schedule", path: "/coach/schedule" },
    { icon: ChatRightDots, label: "Chat", path: "/coach/messages", badge: true },
    { icon: Person, label: "Profile", path: "/portal/profile" },
  ];

  const navItems = role === "coach" ? coachNav : clientNav;

  return (
    <>
      {/* ── Drawer Overlay ── */}
      {activeDrawer && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
          style={{ animation: "fadeIn 200ms ease-out" }}
        />
      )}

      {/* ── Drawer Panel ── */}
      {activeDrawer && (
        <div
          ref={drawerRef}
          className="fixed bottom-[88px] left-3 right-3 z-50 lg:hidden"
          style={{ animation: "slideUp 300ms cubic-bezier(0.22, 1, 0.36, 1)" }}
        >
          <div className="bg-white/95 backdrop-blur-2xl rounded-[32px] shadow-[0_-20px_60px_rgba(0,0,0,0.15)] border border-[#99A88C]/10 overflow-hidden">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#99A88C]/5">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg ${
                  activeDrawer === "journal" ? "bg-[#99A88C] text-white" : "bg-[#A68A45] text-white"
                }`}>
                  {activeDrawer === "journal" ? <PencilSquare size={18} /> : <BarChartFill size={18} />}
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#5E6C54] tracking-tight">
                    {activeDrawer === "journal" ? "Quick Journal" : "Progress Snapshot"}
                  </h3>
                  <p className="text-[9px] font-bold text-[#5E6C54]/40 uppercase tracking-[0.2em]">
                    {activeDrawer === "journal" ? "Recent entries" : "Weekly overview"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveDrawer(null)}
                className="w-8 h-8 rounded-xl bg-[#FCF8E8] flex items-center justify-center text-[#5E6C54]/40 hover:text-[#5E6C54] hover:bg-[#99A88C]/10 transition-all active:scale-90"
              >
                <XLg size={14} />
              </button>
            </div>

            {/* Journal Drawer */}
            {activeDrawer === "journal" && (
              <div className="p-4 space-y-3 max-h-[50vh] overflow-y-auto custom-scrollbar">
                {journalQuickEntries.map((entry, i) => (
                  <div
                    key={i}
                    className="bg-[#FCF8E8] p-4 rounded-[20px] hover:bg-[#99A88C]/5 transition-all active:scale-[0.98] cursor-pointer"
                    style={{ animation: `slideUp 300ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 60}ms both` }}
                    onClick={() => navigate("/portal/journal")}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-black text-[#5E6C54]/30 uppercase tracking-widest flex items-center gap-1.5">
                        <Calendar3 size={9} /> {entry.date}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#5E6C54] font-serif mb-1">{entry.title}</h4>
                    <p className="text-[11px] text-[#5E6C54]/40 font-medium italic line-clamp-1">
                      "{entry.preview}"
                    </p>
                  </div>
                ))}

                {/* New Entry CTA */}
                <button
                  onClick={() => navigate("/portal/journal")}
                  className="w-full flex items-center justify-center gap-2 p-4 bg-[#99A88C] text-white rounded-[20px] text-[10px] font-black uppercase tracking-widest hover:bg-[#5E6C54] transition-all active:scale-[0.98] shadow-lg shadow-[#99A88C]/20"
                >
                  <PencilSquare size={14} /> New Entry
                </button>
              </div>
            )}

            {/* Progress Drawer */}
            {activeDrawer === "progress" && (
              <div className="p-4 space-y-4 max-h-[50vh] overflow-y-auto custom-scrollbar">
                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Mood", value: "7.8", sub: "/10" },
                    { label: "Streak", value: "8", sub: "days" },
                    { label: "Score", value: "82", sub: "%" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-[#FCF8E8] p-3 rounded-[16px] text-center"
                      style={{ animation: `slideUp 300ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 60}ms both` }}
                    >
                      <p className="text-xl font-black text-[#5E6C54] font-serif leading-none">
                        {stat.value}
                        <span className="text-[9px] text-[#5E6C54]/30 ml-0.5">{stat.sub}</span>
                      </p>
                      <p className="text-[8px] font-bold text-[#5E6C54]/40 uppercase tracking-[0.15em] mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Progress bars */}
                <div className="space-y-3">
                  {progressQuickStats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-[#FCF8E8] p-3.5 rounded-[16px]"
                      style={{ animation: `slideUp 300ms cubic-bezier(0.22, 1, 0.36, 1) ${(i + 3) * 60}ms both` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black text-[#5E6C54] uppercase tracking-tight">
                          {stat.label}
                        </span>
                        <span className="text-[10px] font-black text-[#A68A45]">{stat.value}%</span>
                      </div>
                      <div className="h-1.5 bg-[#5E6C54]/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${stat.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${stat.value}%`, animation: `widthGrow 800ms cubic-bezier(0.22, 1, 0.36, 1) ${(i + 3) * 100}ms both` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Milestones */}
                <div className="flex items-center gap-3 bg-[#A68A45]/10 p-3.5 rounded-[16px]">
                  <Trophy size={18} className="text-[#A68A45] shrink-0" />
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-[#5E6C54] tracking-tight">Next: Advanced NLP Journaling</p>
                    <p className="text-[9px] text-[#5E6C54]/40 font-bold">3 sessions remaining</p>
                  </div>
                </div>

                {/* Full View CTA */}
                <button
                  onClick={() => navigate("/portal/progress")}
                  className="w-full flex items-center justify-center gap-2 p-4 bg-[#5E6C54] text-white rounded-[20px] text-[10px] font-black uppercase tracking-widest hover:bg-[#99A88C] transition-all active:scale-[0.98] shadow-lg shadow-[#5E6C54]/20"
                >
                  <BarChartFill size={14} /> Full Dashboard <ArrowRight size={12} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Bottom Navigation Bar ── */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden z-50">
        {/* Gradient fade above nav */}
        <div className="h-6 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />

        <div className="bg-white/90 backdrop-blur-2xl border-t border-[#99A88C]/5 px-2 sm:px-4 py-1.5 sm:py-2 pb-3 flex items-center justify-around shadow-[0_-10px_40px_rgba(0,0,0,0.08)] rounded-t-[28px] sm:rounded-t-[32px]">
          {navItems.map((item) => {
            const active = isActive(item.path);
            const hasDrawer = "drawer" in item && item.drawer;
            const drawerActive = hasDrawer && activeDrawer === item.drawer;

            return (
              <div key={item.label} className="relative">
                {/* For items with drawers, use button; otherwise Link */}
                {hasDrawer ? (
                  <button
                    onClick={() => handleNavTap(item as typeof clientNav[0])}
                    className="flex flex-col items-center gap-1 relative group"
                  >
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        active || drawerActive
                          ? "bg-[#99A88C] text-white shadow-lg shadow-[#99A88C]/20 scale-105 -translate-y-1"
                          : "text-[#5E6C54]/40 hover:text-[#5E6C54] active:scale-90"
                      }`}
                    >
                      <item.icon size={20} />
                    </div>
                    <span
                      className={`text-[9px] font-black uppercase tracking-widest transition-all ${
                        active || drawerActive ? "text-[#99A88C]" : "text-[#5E6C54]/35"
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Active drawer indicator dot */}
                    {drawerActive && (
                      <div
                        className="absolute -top-1 right-1 w-2 h-2 bg-[#A68A45] rounded-full"
                        style={{ animation: "pulse 1.5s infinite" }}
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="flex flex-col items-center gap-1 relative group"
                    onClick={() => setActiveDrawer(null)}
                  >
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        "featured" in item && item.featured
                          ? "bg-[#5E6C54] text-white shadow-xl shadow-[#5E6C54]/30 -translate-y-3 scale-110 rounded-[20px]"
                          : active
                          ? "bg-[#99A88C] text-white shadow-lg shadow-[#99A88C]/20 scale-105 -translate-y-1"
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
                          ? "text-[#5E6C54]"
                          : active
                          ? "text-[#99A88C]"
                          : "text-[#5E6C54]/35"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
