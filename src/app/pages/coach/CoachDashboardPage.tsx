import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useUser } from "../../context/UserContext";
import {
  CalendarCheckFill,
  PlayFill,
  ChevronRight,
  PeopleFill,
  ChatDotsFill,
  Upload,
  PlusCircleFill,
  StarFill,
  ClockHistory,
  BellFill,
  ArrowUpRight,
  GraphUpArrow,
  Wallet2,
} from "react-bootstrap-icons";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const weeklyData = [
  { day: "Mon", sessions: 3, revenue: 450 },
  { day: "Tue", sessions: 5, revenue: 750 },
  { day: "Wed", sessions: 2, revenue: 300 },
  { day: "Thu", sessions: 6, revenue: 900 },
  { day: "Fri", sessions: 4, revenue: 600 },
  { day: "Sat", sessions: 1, revenue: 150 },
  { day: "Sun", sessions: 0, revenue: 0 },
];

const todaySessions = [
  { id: "S101", time: "09:00 AM", client: "Sarah M.", type: "Anxiety Control", status: "upcoming", duration: "50 min" },
  { id: "S102", time: "11:30 AM", client: "Anonymous #421", type: "Grief Healing", status: "upcoming", duration: "50 min" },
  { id: "S103", time: "02:00 PM", client: "Michael C.", type: "Peak Performance", status: "active", duration: "50 min" },
  { id: "S104", time: "04:30 PM", client: "Elena R.", type: "Self-Confidence", status: "upcoming", duration: "50 min" },
];

const activityFeed = [
  { icon: CalendarCheckFill, color: "bg-[#99A88C]", text: "Client #4821 booked a new session", time: "5 min ago" },
  { icon: ChatDotsFill, color: "bg-[#A68A45]", text: "Sarah M. sent you a message", time: "18 min ago" },
  { icon: GraphUpArrow, color: "bg-[#5E6C54]", text: "Client #2214 logged a mood score of 8/10", time: "1 hr ago" },
  { icon: StarFill, color: "bg-[#A68A45]", text: "New 5-star review from Anonymous #421", time: "2 hr ago" },
  { icon: PeopleFill, color: "bg-[#99A88C]", text: "Elena R. completed your assigned worksheet", time: "3 hr ago" },
];

const upcomingSessions = [
  { id: "S201", date: "Tomorrow", time: "10:00 AM", client: "John D.", type: "Career Pivot", status: "Confirmed" },
  { id: "S202", date: "May 11", time: "09:30 AM", client: "Anonymous #124", type: "Stress Management", status: "Confirmed" },
  { id: "S203", date: "May 11", time: "03:00 PM", client: "Priya K.", type: "Relationship Coaching", status: "Pending" },
  { id: "S204", date: "May 12", time: "11:00 AM", client: "Tom B.", type: "NLP Deep Dive", status: "Confirmed" },
  { id: "S205", date: "May 13", time: "02:00 PM", client: "Anonymous #903", type: "Emotional Intelligence", status: "Confirmed" },
];

export function CoachDashboardPage() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("Good morning");

  useEffect(() => {
    document.title = "Coach Dashboard | Life & You";
    const hour = new Date().getHours();
    if (hour >= 12 && hour < 17) setGreeting("Good afternoon");
    else if (hour >= 17) setGreeting("Good evening");
    else setGreeting("Good morning");
  }, []);

  const today = new Date().toLocaleDateString("en-AE", {
    weekday: "long", month: "long", day: "numeric",
  });

  const kpis = [
    { label: "Today", value: "4", sub: "sessions", icon: CalendarCheckFill, bg: "bg-white", text: "text-[#5E6C54]", iconColor: "text-[#99A88C]", border: "border border-[#99A88C]/20" },
    { label: "This Week", value: "21", sub: "sessions", icon: ClockHistory, bg: "bg-white", text: "text-[#5E6C54]", iconColor: "text-[#A68A45]", border: "border border-[#99A88C]/20" },
    { label: "Active Clients", value: "18", sub: "clients", icon: PeopleFill, bg: "bg-[#5E6C54]", text: "text-white", iconColor: "text-[#99A88C]", border: "border border-white/10 shadow-lg shadow-[#5E6C54]/30" },
    { label: "Avg Rating", value: "4.9", sub: "/ 5.0 ⭐", icon: StarFill, bg: "bg-white", text: "text-[#5E6C54]", iconColor: "text-[#A68A45]", border: "border border-[#99A88C]/20" },
  ];

  return (
    <div className="animate-in fade-in duration-700 portal-context pb-24 lg:pb-10">
      {/* ── Cinematic Header ── */}
      <div className="relative -mx-0 lg:-mx-10 -mt-0 lg:-mt-10">
        <div className="bg-[#5E6C54] pt-14 pb-36 px-6 lg:px-16 relative overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#99A88C]/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-[80px]" />

          <div className="relative z-10 max-w-5xl mx-auto flex items-start justify-between gap-6">
            <div>
              <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.4em] mb-3">{greeting},</p>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none font-serif mb-3">
                Coach {user.name.split(" ")[0]}
              </h1>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-[0.3em]">{today}</p>
            </div>

            <div className="flex items-center gap-3 mt-2 shrink-0">
              <Link
                to="/coach/messages"
                className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-all relative"
              >
                <ChatDotsFill size={18} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#A68A45] rounded-full text-[8px] font-black text-white flex items-center justify-center">3</span>
              </Link>
              <Link to="/coach/profile">
                <div className="w-12 h-12 rounded-[20px] border-4 border-white/20 overflow-hidden shadow-2xl hover:scale-105 transition-transform">
                  <img src={user.avatar} alt="Coach" className="w-full h-full object-cover" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ── KPI Cards — Overlapping Banner ── */}
        <div className="max-w-5xl mx-auto px-6 lg:px-16 -mt-20 relative z-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((kpi, i) => (
              <div
                key={i}
                className={`${kpi.bg} ${kpi.text} ${kpi.border} rounded-[32px] p-6 relative overflow-hidden group shadow-xl hover:-translate-y-1 transition-all cursor-pointer`}
              >
                {kpi.bg === "bg-[#5E6C54]" && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform" />
                )}
                <div className="relative z-10">
                  <kpi.icon size={18} className={`mb-3 ${kpi.iconColor}`} />
                  <p className="text-3xl font-black font-serif leading-none mb-1">{kpi.value}</p>
                  <p className={`text-[9px] font-black uppercase tracking-[0.25em] ${kpi.bg === "bg-white" ? "text-[#99A88C]" : "opacity-60"}`}>{kpi.sub}</p>
                  <p className={`text-[8px] font-black uppercase tracking-widest mt-1 ${kpi.bg === "bg-white" ? "text-[#5E6C54]/40" : "opacity-40"}`}>{kpi.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-5xl mx-auto px-6 lg:px-16 mt-10 space-y-10">

        {/* ── Quick Actions ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: PlusCircleFill, label: "Add Slot", to: "/coach/schedule/add", bg: "bg-white", text: "text-[#5E6C54]", iconColor: "text-[#A68A45]" },
            { icon: ClockHistory, label: "Session History", to: "/coach/reports/sessions", bg: "bg-white", text: "text-[#5E6C54]", iconColor: "text-[#99A88C]" },
            { icon: ChatDotsFill, label: "Message Client", to: "/coach/messages", bg: "bg-[#5E6C54]", text: "text-white", iconColor: "text-[#99A88C]" },
            { icon: Wallet2, label: "View Earnings", to: "/coach/reports/earnings", bg: "bg-white", text: "text-[#5E6C54]", iconColor: "text-[#A68A45]" },
          ].map((action, i) => (
            <Link
              key={i}
              to={action.to}
              className={`${action.bg} ${action.text} rounded-[28px] p-5 flex items-center gap-4 shadow-sm border border-sage/10 hover:shadow-xl hover:border-sage/30 hover:-translate-y-1 transition-all group relative overflow-hidden`}
            >
              {action.bg === "bg-[#5E6C54]" && (
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl group-hover:scale-150 transition-transform" />
              )}
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${action.bg === "bg-white" ? "bg-cream" : "bg-white/10"}`}>
                <action.icon size={18} className={action.iconColor} />
              </div>
              <span className="text-[11px] font-bold font-serif uppercase tracking-widest">{action.label}</span>
              <ArrowUpRight size={14} className="ml-auto opacity-20 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          ))}
        </div>

        {/* ── Today's Schedule + Activity Feed ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Today's Schedule */}
          <div className="lg:col-span-3 bg-white rounded-[40px] p-8 shadow-sm border border-[#99A88C]/5">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-lg font-bold text-[#5E6C54] font-serif uppercase tracking-tight">Today's Schedule</h2>
                <p className="text-[9px] font-black text-[#5E6C54]/30 uppercase tracking-[0.3em] mt-0.5">
                  {todaySessions.length} sessions · {today}
                </p>
              </div>
              <Link
                to="/coach/sessions"
                className="text-[9px] font-black text-[#99A88C] uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
              >
                All Sessions <ChevronRight size={12} />
              </Link>
            </div>

            <div className="space-y-3">
              {todaySessions.map((session, i) => (
                <div
                  key={session.id}
                  className={`flex items-center gap-4 p-4 rounded-[20px] transition-all group cursor-pointer ${
                    session.status === "active"
                      ? "bg-[#5E6C54] text-white shadow-lg shadow-[#5E6C54]/20"
                      : "bg-[#FCF8E8] hover:bg-[#EDF2EE]"
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {/* Time */}
                  <div className={`text-right shrink-0 w-16 ${session.status === "active" ? "text-[#99A88C]" : "text-[#5E6C54]/40"}`}>
                    <p className="text-[10px] font-black uppercase tracking-tight">{session.time.split(" ")[0]}</p>
                    <p className="text-[8px] font-bold">{session.time.split(" ")[1]}</p>
                  </div>

                  {/* Divider */}
                  <div className={`w-px h-8 ${session.status === "active" ? "bg-white/20" : "bg-[#99A88C]/20"}`} />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className={`text-[11px] font-black uppercase tracking-tight truncate ${session.status === "active" ? "text-white" : "text-[#5E6C54]"}`}>
                      {session.type}
                    </p>
                    <p className={`text-[9px] font-bold uppercase tracking-widest truncate ${session.status === "active" ? "text-[#99A88C]" : "text-[#5E6C54]/40"}`}>
                      {session.client} · {session.duration}
                    </p>
                  </div>

                  {/* Action */}
                  {session.status === "active" ? (
                    <Link
                      to={`/session/${session.id}`}
                      className="px-4 py-2 bg-[#99A88C] text-white rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center gap-1 hover:bg-white hover:text-[#5E6C54] transition-all shrink-0"
                    >
                      Join <PlayFill size={10} />
                    </Link>
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#99A88C]/30 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Client Activity Feed */}
          <div className="lg:col-span-2 bg-white rounded-[40px] p-8 shadow-sm border border-[#99A88C]/5">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-lg font-bold text-[#5E6C54] font-serif uppercase tracking-tight">Activity</h2>
                <p className="text-[9px] font-black text-[#5E6C54]/30 uppercase tracking-[0.3em] mt-0.5">Client actions live feed</p>
              </div>
              <BellFill size={16} className="text-[#5E6C54]/20" />
            </div>

            <div className="space-y-4">
              {activityFeed.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 group cursor-pointer"
                  style={{ animation: `slideUp 400ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 80}ms both` }}
                >
                  <div className={`${item.color} w-9 h-9 rounded-[14px] flex items-center justify-center text-white shrink-0 shadow-sm`}>
                    <item.icon size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-[#5E6C54] leading-tight">{item.text}</p>
                    <p className="text-[8px] font-black text-[#5E6C54]/30 uppercase tracking-widest mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Revenue Chart + Upcoming Sessions ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Revenue Chart */}
          <div className="lg:col-span-3 bg-white rounded-[40px] p-8 shadow-sm border border-[#99A88C]/5">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-lg font-bold text-[#5E6C54] font-serif uppercase tracking-tight">Weekly Revenue</h2>
                <p className="text-[9px] font-black text-[#5E6C54]/30 uppercase tracking-[0.3em] mt-0.5">INR · This week</p>
              </div>
              <Link
                to="/coach/earnings"
                className="text-[9px] font-black text-[#A68A45] uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
              >
                Full Report <ArrowUpRight size={12} />
              </Link>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#99A88C" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#99A88C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 800, fill: "#5E6C54", opacity: 0.4 }} />
                  <YAxis axisLine={false} tickLine={false} tick={false} />
                  <Tooltip
                    contentStyle={{ borderRadius: "16px", border: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", fontSize: "10px", fontWeight: "bold" }}
                    formatter={(val: number) => [`INR ${val}`, "Revenue"]}
                    cursor={{ stroke: "#99A88C", strokeWidth: 2, strokeDasharray: "4 4" }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#99A88C" strokeWidth={3} fillOpacity={1} fill="url(#revenueGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="lg:col-span-2 bg-white rounded-[40px] p-8 shadow-sm border border-[#99A88C]/5">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-lg font-bold text-[#5E6C54] font-serif uppercase tracking-tight">Upcoming</h2>
                <p className="text-[9px] font-black text-[#5E6C54]/30 uppercase tracking-[0.3em] mt-0.5">Next 5 sessions</p>
              </div>
              <Link to="/coach/sessions" className="text-[9px] font-black text-[#99A88C] uppercase tracking-widest flex items-center gap-1">
                All <ChevronRight size={12} />
              </Link>
            </div>

            <div className="space-y-3">
              {upcomingSessions.map((s, i) => (
                <div
                  key={s.id}
                  className="flex items-center gap-3 p-3 rounded-[16px] hover:bg-[#FCF8E8] transition-all cursor-pointer group"
                  style={{ animation: `slideUp 400ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 70}ms both` }}
                >
                  <div className="w-9 h-9 bg-[#FCF8E8] rounded-[14px] flex flex-col items-center justify-center shrink-0">
                    <span className="text-[8px] font-black text-[#5E6C54] uppercase tracking-tight leading-none">{s.date.split(" ")[0]}</span>
                    <span className="text-[10px] font-black text-[#99A88C]">{s.date.split(" ")[1] ?? ""}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-black text-[#5E6C54] uppercase tracking-tight truncate">{s.type}</p>
                    <p className="text-[8px] font-bold text-[#5E6C54]/40 uppercase truncate">{s.client} · {s.time}</p>
                  </div>
                  <div className={`w-2 h-2 rounded-full shrink-0 ${s.status === "Confirmed" ? "bg-[#99A88C]" : "bg-[#A68A45]"}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
