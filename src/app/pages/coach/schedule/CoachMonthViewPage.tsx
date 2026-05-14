import { useState } from "react";
import { Calendar3, ChevronLeft, ChevronRight, PlusLg, ListTask, ClockHistory, X, PersonFill, CameraVideo, Mic, Chat, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router";

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(month: number, year: number) {
  return new Date(year, month, 1).getDay();
}

// Sample bookings data keyed by day number
const BOOKINGS: Record<number, { time: string; client: string; type: string; mode: "video" | "audio" | "text"; status: "confirmed" | "pending" }[]> = {
  8:  [{ time: "10:00 AM", client: "Sarah Mitchell", type: "Anxiety & Clarity", mode: "video", status: "confirmed" }],
  15: [
    { time: "09:00 AM", client: "Rahul Verma", type: "NLP Deep Dive", mode: "video", status: "confirmed" },
    { time: "02:00 PM", client: "Priya Nair", type: "Executive Focus", mode: "audio", status: "pending" },
  ],
  18: [{ time: "11:30 AM", client: "John Doe", type: "Stress Management", mode: "text", status: "confirmed" }],
  22: [
    { time: "10:00 AM", client: "Aisha Khan", type: "Mental Clarity", mode: "video", status: "confirmed" },
    { time: "04:00 PM", client: "David Lee", type: "Goals Review", mode: "audio", status: "confirmed" },
  ],
};

const MODE_ICON = { video: CameraVideo, audio: Mic, text: Chat };
const MODE_LABEL = { video: "Video Call", audio: "Audio Call", text: "Text Chat" };

type Booking = { time: string; client: string; type: string; mode: "video" | "audio" | "text"; status: "confirmed" | "pending" };

export function CoachMonthViewPage() {
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [activeView, setActiveView] = useState<"Month" | "Week" | "Day">("Month");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedBookings, setSelectedBookings] = useState<Booking[]>([]);

  const daysInMonth = getDaysInMonth(viewMonth, viewYear);
  const firstDay = getFirstDayOfMonth(viewMonth, viewYear);
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const isToday = (day: number) =>
    day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
    setSelectedBookings(BOOKINGS[day] || []);
  };

  const closePopup = () => setSelectedDay(null);

  return (
    <div className="min-h-screen bg-[#F4F7FA] animate-in fade-in duration-500 pb-32 relative">
      <div className="max-w-6xl mx-auto px-4 pt-6 space-y-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-[#2D3324] font-serif uppercase italic tracking-tight">
              Mentorship Schedule
            </h1>
            <p className="text-[#8B9A71] text-[10px] font-black uppercase tracking-[0.25em] mt-1">
              Manage your availability and upcoming client breakthroughs.
            </p>
          </div>
          <Link
            to="/coach/schedule/add"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2D3324] text-white rounded-[16px] text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-[#8B9A71] transition-all self-start sm:self-auto"
          >
            <PlusLg size={16} /> Add Availability
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">

          {/* ── Calendar ── */}
          <div className="lg:col-span-8 bg-white rounded-[32px] border border-[#8B9A71]/10 shadow-sm p-5 md:p-8">

            {/* Month nav + view toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h3 className="text-xl font-black text-[#2D3324] font-serif uppercase italic tracking-tight">
                {MONTHS[viewMonth]} {viewYear}
              </h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-[#F4F7FA] rounded-[12px] p-1 border border-[#8B9A71]/10">
                  {(["Month", "Week", "Day"] as const).map(v => (
                    <button key={v} onClick={() => setActiveView(v)}
                      className={`px-3 py-1.5 rounded-[9px] text-[9px] font-black uppercase tracking-widest transition-all ${activeView === v ? "bg-[#2D3324] text-white shadow-sm" : "text-[#8B9A71] hover:text-[#2D3324]"}`}>
                      {v}
                    </button>
                  ))}
                </div>
                <div className="flex gap-1">
                  <button onClick={prevMonth} className="w-9 h-9 bg-[#F4F7FA] border border-[#8B9A71]/10 rounded-[10px] flex items-center justify-center text-[#2D3324] hover:bg-[#2D3324] hover:text-white transition-all"><ChevronLeft size={15} /></button>
                  <button onClick={nextMonth} className="w-9 h-9 bg-[#F4F7FA] border border-[#8B9A71]/10 rounded-[10px] flex items-center justify-center text-[#2D3324] hover:bg-[#2D3324] hover:text-white transition-all"><ChevronRight size={15} /></button>
                </div>
              </div>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 mb-1">
              {["S","M","T","W","T","F","S"].map((d, i) => (
                <div key={i} className="py-2 text-center text-[9px] font-black text-[#8B9A71] uppercase tracking-widest">{d}</div>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: totalCells }).map((_, i) => {
                const dayNum = i - firstDay + 1;
                const isValid = dayNum >= 1 && dayNum <= daysInMonth;
                const hasBooking = isValid && !!BOOKINGS[dayNum];
                const todayFlag = isValid && isToday(dayNum);
                const isSelected = isValid && selectedDay === dayNum;
                const count = hasBooking ? BOOKINGS[dayNum].length : 0;

                return (
                  <div key={i}
                    onClick={() => isValid && handleDayClick(dayNum)}
                    className={`min-h-[52px] md:min-h-[72px] rounded-[12px] p-1.5 flex flex-col items-center md:items-start transition-all
                      ${isValid ? "cursor-pointer hover:bg-[#F4F7FA]" : ""}
                      ${todayFlag ? "bg-[#2D3324]" : ""}
                      ${isSelected && !todayFlag ? "bg-[#8B9A71]/15 ring-2 ring-[#8B9A71]/40" : ""}
                    `}
                  >
                    {isValid && (
                      <>
                        <span className={`text-[10px] md:text-xs font-black leading-none mb-1 w-6 h-6 flex items-center justify-center rounded-full
                          ${todayFlag ? "text-white" : "text-[#2D3324]"}
                        `}>
                          {dayNum}
                        </span>
                        {hasBooking && (
                          <>
                            {/* Mobile: coloured dots */}
                            <div className="md:hidden flex gap-0.5 mt-auto flex-wrap justify-center">
                              {Array.from({ length: Math.min(count, 3) }).map((_, d) => (
                                <div key={d} className={`w-1.5 h-1.5 rounded-full ${todayFlag ? "bg-white/60" : "bg-[#8B9A71]"}`} />
                              ))}
                            </div>
                            {/* Desktop: session chip */}
                            <div className="hidden md:block w-full mt-1 space-y-0.5">
                              <div className={`text-[8px] font-black uppercase tracking-tight px-1.5 py-1 rounded-[6px] truncate
                                ${todayFlag ? "bg-white/15 text-white" : "bg-[#2D3324]/8 text-[#2D3324] border-l-2 border-[#8B9A71]"}
                              `}>
                                {BOOKINGS[dayNum][0].time} • {BOOKINGS[dayNum][0].client.split(" ")[0]}
                              </div>
                              {count > 1 && (
                                <div className={`text-[7px] font-black uppercase tracking-tight px-1.5 ${todayFlag ? "text-white/50" : "text-[#8B9A71]"}`}>
                                  +{count - 1} more
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-[#2D3324] p-8 rounded-[28px] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[80px]" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#8B9A71]/10 rounded-tr-[80px]" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 bg-white/10 rounded-[12px] flex items-center justify-center">
                  <Calendar3 size={18} className="text-[#8B9A71]" />
                </div>
                <h4 className="text-sm font-black uppercase tracking-widest text-white/80">{MONTHS[viewMonth]} Stats</h4>
              </div>
              <div className="space-y-4 relative z-10">
                <StatRow label="Completed Sessions" val="24" />
                <StatRow label="Upcoming Bookings" val="12" />
                <StatRow label="Hours Authored" val="36h" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-[28px] border border-[#8B9A71]/10 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-[10px] font-black text-[#2D3324] uppercase tracking-widest">Today's Focus</h4>
                <ListTask size={16} className="text-[#8B9A71]" />
              </div>
              <div className="space-y-3">
                <AgendaItem time="10:00 AM" client="Sarah Mitchell" type="Anxiety Check" />
                <AgendaItem time="02:00 PM" client="John Doe" type="Goals Review" />
              </div>
              <button className="w-full mt-5 py-3.5 text-[9px] font-black text-[#2D3324] uppercase tracking-[0.2em] border border-[#2D3324]/20 rounded-[14px] hover:bg-[#2D3324] hover:text-white transition-all">
                Full Day Agenda
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Day Detail Popup ── */}
      {selectedDay !== null && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          onClick={closePopup}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Sheet */}
          <div
            className="relative z-10 w-full max-w-md bg-[#2D3324] rounded-t-[36px] sm:rounded-[32px] shadow-2xl animate-in slide-in-from-bottom-4 duration-300 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Handle bar (mobile) */}
            <div className="sm:hidden w-10 h-1 bg-white/20 rounded-full mx-auto mt-3 mb-1" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/10">
              <div>
                <p className="text-[#8B9A71] text-[9px] font-black uppercase tracking-[0.3em]">{MONTHS[viewMonth]} {viewYear}</p>
                <h2 className="text-2xl font-black text-white font-serif italic tracking-tight">
                  {selectedDay} {MONTHS[viewMonth].slice(0,3)}
                </h2>
              </div>
              <button onClick={closePopup} className="w-9 h-9 bg-white/10 rounded-[10px] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all">
                <X size={18} />
              </button>
            </div>

            {/* Bookings list */}
            <div className="px-6 py-5 space-y-3 max-h-[60vh] overflow-y-auto">
              {selectedBookings.length === 0 ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 bg-white/5 rounded-[18px] flex items-center justify-center mx-auto mb-4">
                    <Calendar3 size={24} className="text-[#8B9A71]" />
                  </div>
                  <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">No sessions scheduled</p>
                  <Link to="/coach/schedule/add"
                    className="mt-5 inline-flex items-center gap-2 px-5 py-3 bg-[#8B9A71] text-white rounded-[12px] text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#2D3324] transition-all">
                    <PlusLg size={14} /> Add Slot
                  </Link>
                </div>
              ) : (
                <>
                  <p className="text-[#8B9A71] text-[9px] font-black uppercase tracking-widest mb-2">{selectedBookings.length} session{selectedBookings.length > 1 ? "s" : ""} scheduled</p>
                  {selectedBookings.map((b, idx) => {
                    const ModeIcon = MODE_ICON[b.mode];
                    return (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-[18px] p-4 hover:bg-white/10 transition-all">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#8B9A71]/20 rounded-[12px] flex items-center justify-center flex-shrink-0">
                              <PersonFill size={18} className="text-[#8B9A71]" />
                            </div>
                            <div>
                              <p className="text-white font-black text-sm tracking-tight">{b.client}</p>
                              <p className="text-[#8B9A71] text-[9px] font-black uppercase tracking-widest">{b.type}</p>
                            </div>
                          </div>
                          <span className={`text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full flex-shrink-0
                            ${b.status === "confirmed" ? "bg-[#8B9A71]/20 text-[#8B9A71]" : "bg-[#A68A45]/20 text-[#A68A45]"}`}>
                            {b.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/10">
                          <div className="flex items-center gap-1.5 text-[#8B9A71]">
                            <ClockHistory size={12} />
                            <span className="text-[10px] font-black text-white">{b.time}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[#8B9A71]">
                            <ModeIcon size={12} />
                            <span className="text-[10px] font-black text-[#8B9A71]">{MODE_LABEL[b.mode]}</span>
                          </div>
                          <Link to="/coach/sessions" className="ml-auto flex items-center gap-1 text-[9px] font-black text-[#8B9A71] hover:text-white uppercase tracking-widest transition-colors">
                            View <ArrowRight size={11} />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/10">
              <Link to="/coach/schedule/add"
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#8B9A71] text-white rounded-[16px] text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#2D3324] transition-all">
                <PlusLg size={14} /> Add Session to This Day
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatRow({ label, val }: { label: string; val: string }) {
  return (
    <div className="flex justify-between items-end border-b border-white/10 pb-3">
      <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{label}</span>
      <span className="text-2xl font-black font-serif text-white">{val}</span>
    </div>
  );
}

function AgendaItem({ time, client, type }: { time: string; client: string; type: string }) {
  return (
    <div className="p-4 bg-[#F4F7FA] rounded-[16px] border border-[#8B9A71]/10 hover:border-[#8B9A71]/30 transition-all cursor-pointer">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[9px] font-black text-[#A68A45] uppercase tracking-widest">{time}</span>
        <ClockHistory size={11} className="text-[#8B9A71]/40" />
      </div>
      <p className="text-sm font-black text-[#2D3324] tracking-tight mb-0.5">{client}</p>
      <p className="text-[9px] font-black text-[#8B9A71] uppercase tracking-widest">{type}</p>
    </div>
  );
}
