import { useState } from "react";
import { PeopleFill, Search, Filter, ChatDotsFill, ClockHistory, ArrowRight, PersonFill } from "react-bootstrap-icons";
import { Link } from "react-router";

const clients = [
  { id: "C001", name: "Sarah Mitchell", initials: "SM", goal: "Anxiety Control",    status: "Active",         lastSession: "2 days ago",  progress: 82, color: "bg-[#8B9A71]/20 text-[#8B9A71]" },
  { id: "C002", name: "John Doe",       initials: "JD", goal: "Career Pivot",       status: "Active",         lastSession: "5 days ago",  progress: 45, color: "bg-[#A68A45]/20 text-[#A68A45]" },
  { id: "C003", name: "Anonymous #124", initials: "AN", goal: "Grief Healing",      status: "High Priority",  lastSession: "Yesterday",   progress: 15, color: "bg-red-100 text-red-400" },
  { id: "C004", name: "Elena Rodriguez",initials: "ER", goal: "Self-Confidence",    status: "Stable",         lastSession: "1 week ago",  progress: 91, color: "bg-[#2D3324]/10 text-[#2D3324]" },
];

const STATUS_COLOR: Record<string, string> = {
  "Active":        "bg-[#8B9A71]/15 text-[#8B9A71]",
  "High Priority": "bg-red-100 text-red-500",
  "Stable":        "bg-[#2D3324]/10 text-[#2D3324]",
};

export function CoachClientListPage() {
  const [query, setQuery] = useState("");

  const filtered = clients.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.goal.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F4F7FA] animate-in fade-in duration-500 pb-32">
      <div className="max-w-4xl mx-auto px-4 pt-6 space-y-6">

        {/* Page Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-[#2D3324] font-serif uppercase italic tracking-tight">
            Mentee Directory
          </h1>
          <p className="text-[#8B9A71] text-[10px] font-black uppercase tracking-[0.25em] mt-1">
            Track progress and manage relationships with your clients.
          </p>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B9A71]" size={16} />
            <input
              type="text"
              placeholder="Search clients..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full bg-white border border-[#8B9A71]/15 pl-11 pr-4 py-3.5 rounded-[16px] text-[11px] font-black uppercase tracking-widest outline-none focus:border-[#8B9A71]/40 transition-all text-[#2D3324] placeholder-[#8B9A71]/40"
            />
          </div>
          <button className="w-12 h-12 bg-white border border-[#8B9A71]/15 rounded-[14px] flex items-center justify-center text-[#8B9A71] hover:bg-[#2D3324] hover:text-white transition-all shadow-sm">
            <Filter size={17} />
          </button>
        </div>

        {/* ── 2 × 2 Grid ── */}
        <div className="grid grid-cols-2 gap-4">
          {filtered.map((client) => (
            <Link
              key={client.id}
              to={`/coach/clients/${client.id}`}
              className="bg-white rounded-[24px] p-5 border border-[#8B9A71]/10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all group flex flex-col gap-4"
            >
              {/* Top row: avatar + chat icon */}
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-[16px] flex items-center justify-center text-base font-black font-serif shadow-sm ${client.color}`}>
                  {client.initials}
                </div>
                <div className="w-8 h-8 bg-[#F4F7FA] rounded-[10px] flex items-center justify-center text-[#8B9A71] group-hover:bg-[#2D3324] group-hover:text-white transition-all">
                  <ChatDotsFill size={13} />
                </div>
              </div>

              {/* Name + goal */}
              <div>
                <h3 className="text-sm font-black text-[#2D3324] tracking-tight leading-tight line-clamp-1">
                  {client.name}
                </h3>
                <p className="text-[9px] text-[#A68A45] font-black uppercase tracking-widest mt-0.5 line-clamp-1">
                  {client.goal}
                </p>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-black text-[#8B9A71] uppercase tracking-widest">Growth</span>
                  <span className="text-[9px] font-black text-[#2D3324]">{client.progress}%</span>
                </div>
                <div className="h-1.5 bg-[#F4F7FA] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#2D3324] rounded-full transition-all duration-1000"
                    style={{ width: `${client.progress}%` }}
                  />
                </div>
              </div>

              {/* Footer: last session + status + arrow */}
              <div className="flex items-center justify-between pt-3 border-t border-[#F4F7FA]">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <ClockHistory size={10} className="text-[#8B9A71]/50" />
                    <span className="text-[8px] font-black text-[#8B9A71] uppercase tracking-widest">{client.lastSession}</span>
                  </div>
                  <span className={`text-[7px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${STATUS_COLOR[client.status] || "bg-gray-100 text-gray-500"}`}>
                    {client.status}
                  </span>
                </div>
                <div className="w-8 h-8 bg-[#2D3324] rounded-[10px] flex items-center justify-center text-white group-hover:bg-[#8B9A71] transition-all shadow-sm">
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}

          {/* Add client card */}
          <button className="border-2 border-dashed border-[#8B9A71]/20 rounded-[24px] p-5 flex flex-col items-center justify-center text-center gap-3 group hover:border-[#8B9A71]/50 hover:bg-white transition-all min-h-[220px]">
            <div className="w-12 h-12 bg-[#F4F7FA] rounded-[16px] flex items-center justify-center text-[#8B9A71] group-hover:bg-[#2D3324] group-hover:text-white transition-all">
              <PeopleFill size={22} />
            </div>
            <div>
              <p className="text-[10px] font-black text-[#2D3324] uppercase tracking-widest mb-1">Onboard Client</p>
              <p className="text-[8px] text-[#8B9A71] font-black uppercase tracking-widest leading-relaxed max-w-[100px] mx-auto">Invite a new mentee to your sanctuary</p>
            </div>
          </button>
        </div>

        {/* Count */}
        <p className="text-[9px] font-black text-[#8B9A71] uppercase tracking-widest text-center">
          {filtered.length} of {clients.length} mentees
        </p>
      </div>
    </div>
  );
}
