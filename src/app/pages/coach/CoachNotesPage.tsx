import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import {
  PencilSquare,
  ChevronRight,
  Clock,
  PersonFill,
  CheckCircleFill,
  ShareFill,
  FloppyFill,
  TrashFill,
  Search,
} from "react-bootstrap-icons";

interface SessionNote {
  id: string;
  sessionId: string;
  client: string;
  date: string;
  type: string;
  prepNotes: string;
  sessionNotes: string;
  summary: string;
  actionItems: string;
  nextGoal: string;
  sharedWithClient: boolean;
  lastSaved: string;
}

const mockNotes: SessionNote[] = [
  {
    id: "N001",
    sessionId: "S101",
    client: "Sarah M.",
    date: "May 8, 2026",
    type: "Anxiety Control",
    prepNotes: "Review previous session notes on breathing exercises. Client was struggling with panic attacks at work.",
    sessionNotes: "Client showed significant improvement in recognizing triggers. Practiced the 4-7-8 breathing technique. Discussed workplace boundaries.",
    summary: "Great progress on self-awareness. Client is now identifying anxiety triggers 80% of the time before escalation.",
    actionItems: "Practice 4-7-8 breathing daily. Journal anxiety triggers. Review boundary-setting worksheet.",
    nextGoal: "Build a consistent morning routine to anchor emotional regulation.",
    sharedWithClient: true,
    lastSaved: "2 hours ago",
  },
  {
    id: "N002",
    sessionId: "S102",
    client: "Anonymous #421",
    date: "May 7, 2026",
    type: "Grief Healing",
    prepNotes: "Third session. Client recently lost a parent. Needs gentle approach. Do not push closure yet.",
    sessionNotes: "Session was emotionally heavy. Client opened up about complex relationship with the deceased. Used narrative therapy techniques.",
    summary: "Client is beginning to process grief beyond initial shock phase. Healthy signs of integrating the loss.",
    actionItems: "Write a letter (unsent). Look at one photo from a happy memory. Reach out to one supportive friend this week.",
    nextGoal: "Move toward acceptance stage while honoring the full complexity of the relationship.",
    sharedWithClient: false,
    lastSaved: "Yesterday",
  },
  {
    id: "N003",
    sessionId: "S103",
    client: "Michael C.",
    date: "May 5, 2026",
    type: "Peak Performance",
    prepNotes: "Client is a senior manager. Goal is executive presence and focus under pressure.",
    sessionNotes: "Worked on reframing imposter syndrome. Identified core competencies. Practiced power posture and confident speech patterns.",
    summary: "Breakthrough session — client articulated their professional strengths clearly for the first time.",
    actionItems: "Write a 'brag document'. Do 2-min power pose before important meetings. Record one presentation and self-review.",
    nextGoal: "Lead next team meeting using techniques practiced today. Report back with observations.",
    sharedWithClient: true,
    lastSaved: "3 days ago",
  },
];

const noteFields = [
  { key: "prepNotes", label: "Pre-Session Prep", emoji: "📋", placeholder: "Notes before the session — only visible to you..." },
  { key: "sessionNotes", label: "In-Session Observations", emoji: "🔍", placeholder: "What happened during the session..." },
  { key: "summary", label: "Post-Session Summary", emoji: "✅", placeholder: "Key takeaways and outcomes..." },
  { key: "actionItems", label: "Action Items for Client", emoji: "🎯", placeholder: "Tasks for the client to complete..." },
  { key: "nextGoal", label: "Next Session Goal", emoji: "🚀", placeholder: "What to focus on next time..." },
] as const;

export function CoachNotesPage() {
  const navigate = useNavigate();
  const [selectedNote, setSelectedNote] = useState<SessionNote>(mockNotes[0]);
  const [editedNote, setEditedNote] = useState<SessionNote>(mockNotes[0]);
  const [saved, setSaved] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Session Notes | Life & You";
  }, []);

  const filtered = mockNotes.filter(
    (n) =>
      n.client.toLowerCase().includes(search.toLowerCase()) ||
      n.type.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleField = (field: string, value: string) => {
    setEditedNote((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelect = (note: SessionNote) => {
    setSelectedNote(note);
    setEditedNote(note);
  };

  return (
    <div className="animate-in fade-in duration-700 portal-context pb-24 lg:pb-10 h-[calc(100dvh-0px)]">

      {/* ── Mobile Header ── */}
      <div className="lg:hidden relative -mx-0 -mt-0 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-14 left-5 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/10 active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="bg-[#5E6C54] pt-20 pb-28 px-6 rounded-b-[64px] relative overflow-hidden text-center text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <h1 className="text-3xl font-black tracking-tight mb-1 !text-white" style={{ color: "#fff" }}>Session Notes</h1>
            <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.3em]">Encrypted · Private</p>
          </div>
        </div>
      </div>

      {/* ── Desktop Layout: Split Panel ── */}
      <div className="hidden lg:flex h-[calc(100vh-80px)] gap-0 -mx-10 -mt-10 overflow-hidden">

        {/* Left: Note List */}
        <div className="w-80 bg-white border-r border-[#99A88C]/10 flex flex-col h-full overflow-hidden shadow-sm">
          {/* Header */}
          <div className="p-6 border-b border-[#99A88C]/5">
            <h2 className="text-lg font-bold text-[#5E6C54] font-serif uppercase tracking-tight mb-4">Session Notes</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5E6C54]/30" size={14} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search notes..."
                className="w-full pl-9 pr-4 py-2.5 bg-[#FCF8E8] rounded-2xl text-[10px] font-bold uppercase tracking-widest outline-none focus:bg-white focus:ring-1 focus:ring-[#99A88C]/30 transition-all"
              />
            </div>
          </div>

          {/* Notes list */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-2">
            {filtered.map((note) => (
              <button
                key={note.id}
                onClick={() => handleSelect(note)}
                className={`w-full text-left p-4 rounded-[20px] transition-all ${
                  selectedNote.id === note.id
                    ? "bg-[#5E6C54] text-white shadow-lg"
                    : "hover:bg-[#FCF8E8] text-[#5E6C54]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[9px] font-black uppercase tracking-widest ${selectedNote.id === note.id ? "text-[#99A88C]" : "text-[#5E6C54]/40"}`}>
                    {note.date}
                  </span>
                  {note.sharedWithClient && (
                    <ShareFill size={10} className={selectedNote.id === note.id ? "text-[#99A88C]" : "text-[#99A88C]"} />
                  )}
                </div>
                <p className={`text-[11px] font-black uppercase tracking-tight leading-tight mb-1 ${selectedNote.id === note.id ? "text-white" : "text-[#5E6C54]"}`}>
                  {note.type}
                </p>
                <p className={`text-[9px] font-bold uppercase tracking-widest ${selectedNote.id === note.id ? "text-[#99A88C]" : "text-[#5E6C54]/40"}`}>
                  {note.client}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Editor */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#FCF8E8]">
          {/* Editor Toolbar */}
          <div className="bg-white border-b border-[#99A88C]/10 px-8 py-4 flex items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 bg-[#5E6C54] rounded-[14px] flex items-center justify-center text-white">
                <PencilSquare size={16} />
              </div>
              <div>
                <p className="text-[11px] font-black text-[#5E6C54] uppercase tracking-tight">{selectedNote.type}</p>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="flex items-center gap-1 text-[9px] font-bold text-[#5E6C54]/40 uppercase tracking-widest">
                    <PersonFill size={9} /> {selectedNote.client}
                  </span>
                  <span className="flex items-center gap-1 text-[9px] font-bold text-[#5E6C54]/40 uppercase tracking-widest">
                    <Clock size={9} /> {selectedNote.date}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Share with client toggle */}
              <div className="flex items-center gap-2 px-4 py-2 bg-[#FCF8E8] rounded-2xl">
                <ShareFill size={12} className="text-[#99A88C]" />
                <span className="text-[9px] font-black uppercase tracking-widest text-[#5E6C54]/60">Share with client</span>
                <button
                  onClick={() => setEditedNote((p) => ({ ...p, sharedWithClient: !p.sharedWithClient }))}
                  className={`w-9 h-5 rounded-full relative transition-all ml-1 ${editedNote.sharedWithClient ? "bg-[#99A88C]" : "bg-[#5E6C54]/10"}`}
                >
                  <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all shadow-sm ${editedNote.sharedWithClient ? "right-0.5" : "left-0.5"}`} />
                </button>
              </div>

              {/* Save */}
              <button
                onClick={handleSave}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm ${
                  saved
                    ? "bg-[#99A88C] text-white"
                    : "bg-[#5E6C54] text-white hover:bg-[#99A88C]"
                }`}
              >
                {saved ? <CheckCircleFill size={14} /> : <FloppyFill size={14} />}
                {saved ? "Saved!" : "Save"}
              </button>

              <button className="p-2.5 rounded-2xl text-red-400 hover:bg-red-50 transition-all">
                <TrashFill size={14} />
              </button>
            </div>
          </div>

          {/* Scrollable Editor Fields */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-6">
            {/* Auto-save badge */}
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#99A88C] rounded-full animate-pulse" />
              <span className="text-[9px] font-black text-[#5E6C54]/30 uppercase tracking-widest">Last saved {selectedNote.lastSaved}</span>
            </div>

            {noteFields.map((field) => (
              <div key={field.key} className="bg-white rounded-[28px] p-6 shadow-sm border border-[#99A88C]/5">
                <p className="text-[10px] font-black text-[#5E6C54] uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                  <span>{field.emoji}</span> {field.label}
                </p>
                <textarea
                  value={editedNote[field.key] as string}
                  onChange={(e) => handleField(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  rows={4}
                  className="w-full bg-[#FCF8E8] rounded-[20px] p-4 text-sm text-[#5E6C54] font-medium resize-none outline-none focus:bg-white focus:ring-2 focus:ring-[#99A88C]/20 transition-all placeholder:text-[#5E6C54]/20 leading-relaxed custom-scrollbar"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile: Single Pane ── */}
      <div className="lg:hidden px-4 space-y-6 -mt-14 relative z-10">
        {/* Note selector */}
        <div className="bg-white rounded-[32px] p-2 shadow-sm border border-[#99A88C]/5 flex gap-2 overflow-x-auto custom-scrollbar">
          {mockNotes.map((note) => (
            <button
              key={note.id}
              onClick={() => handleSelect(note)}
              className={`shrink-0 px-5 py-3 rounded-[24px] text-[9px] font-black uppercase tracking-widest transition-all ${
                selectedNote.id === note.id ? "bg-[#5E6C54] text-white shadow-md" : "text-[#5E6C54]/50 hover:text-[#5E6C54]"
              }`}
            >
              {note.type.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Session info */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-[#99A88C]/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black text-[#5E6C54] uppercase tracking-tight">{selectedNote.type}</p>
              <p className="text-[9px] text-[#5E6C54]/40 font-bold uppercase tracking-widest mt-0.5">{selectedNote.client} · {selectedNote.date}</p>
            </div>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#5E6C54] text-white rounded-2xl text-[9px] font-black uppercase tracking-widest flex items-center gap-2"
            >
              {saved ? <CheckCircleFill size={12} /> : <FloppyFill size={12} />}
              {saved ? "Saved" : "Save"}
            </button>
          </div>
        </div>

        {/* Fields */}
        <div className="space-y-4">
          {noteFields.map((field) => (
            <div key={field.key} className="bg-white rounded-[28px] p-5 shadow-sm border border-[#99A88C]/5">
              <p className="text-[9px] font-black text-[#5E6C54] uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                <span>{field.emoji}</span> {field.label}
              </p>
              <textarea
                value={editedNote[field.key] as string}
                onChange={(e) => handleField(field.key, e.target.value)}
                placeholder={field.placeholder}
                rows={3}
                className="w-full bg-[#FCF8E8] rounded-[16px] p-4 text-sm text-[#5E6C54] font-medium resize-none outline-none focus:ring-2 focus:ring-[#99A88C]/20 transition-all placeholder:text-[#5E6C54]/20 leading-relaxed"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
