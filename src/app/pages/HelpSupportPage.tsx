import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, HelpCircle, MessageCircle, Mail, Shield, ExternalLink, ChevronRight, Send, CheckCircle, Sparkles, Phone, Clock } from "lucide-react";

const FAQ_CATEGORIES = [
  {
    icon: HelpCircle,
    title: "Booking & Sessions",
    items: [
      { q: "How do I reschedule a session?", a: "You can reschedule from your Dashboard up to 24 hours before the session starts without any penalty." },
      { q: "Can I cancel an appointment?", a: "Yes, cancellations made 48 hours in advance receive a full refund. Late cancellations may incur a fee." },
      { q: "How to prepare for your first call", a: "Find a quiet, private space. Bring a notebook and an open mind. No other preparation is required." },
      { q: "What happens if my coach cancels?", a: "In the rare event your coach cancels, you will be immediately notified and granted a free priority reschedule." },
    ],
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    items: [
      { q: "How anonymous mode works", a: "Your real name and contact details are hidden from your coach. You are identified only by a secure alias." },
      { q: "Our end-to-end encryption policy", a: "All video calls and chat messages are end-to-end encrypted. We cannot view or store your session content." },
      { q: "Can my coach see my real name?", a: "No. Unless you explicitly share it during a session, your identity remains completely confidential." },
      { q: "How to delete your account data", a: "You can request a full data deletion from the Security Vault. All records will be wiped within 72 hours." },
    ],
  },
  {
    icon: ExternalLink,
    title: "Portal Technicals",
    items: [
      { q: "Mobile app installation guide", a: "You can install our Progressive Web App directly to your home screen via your browser's share menu." },
      { q: "Browser compatibility requirements", a: "We support the latest versions of Chrome, Safari, Firefox, and Edge. Please ensure your browser is updated." },
      { q: "Troubleshooting video call issues", a: "Check your microphone and camera permissions. If issues persist, try refreshing the page or switching browsers." },
      { q: "Offline mode & data sync", a: "Journal entries can be written offline and will automatically sync to our secure servers once you reconnect." },
    ],
  },
];

export function HelpSupportPage() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [expandedQ, setExpandedQ] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;
    setSent(true);
    setMessage("");
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] pb-32 animate-in fade-in duration-700">

      {/* ── Mobile Header ── */}
      <div className="lg:hidden relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-5 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/10 active:scale-95 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="bg-[#2D3324] pt-20 pb-24 px-6 rounded-b-[64px] relative overflow-hidden text-center border-t border-white/5 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-[22px] flex items-center justify-center mb-5 border border-white/10">
              <Sparkles size={26} className="text-[#8B9A71]" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight font-serif italic mb-2">Evolution Support</h1>
            <p className="text-[#8B9A71] text-[10px] font-black uppercase tracking-[0.35em]">We're here to ensure your journey is seamless</p>
          </div>
        </div>
      </div>

      {/* ── Desktop Header ── */}
      <div className="hidden lg:block bg-[#2D3324] pt-24 pb-20 px-12 rounded-b-[60px] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/10 rounded-[22px] flex items-center justify-center border border-white/10">
              <Sparkles size={28} className="text-[#8B9A71]" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white font-serif italic tracking-tight">Evolution Support</h1>
              <p className="text-[#8B9A71] text-[10px] font-black uppercase tracking-widest mt-1">We're here to ensure your journey is seamless</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 -mt-10 relative z-10 space-y-5">

        {/* ── Concierge Contact Card ── */}
        <div className="bg-[#2D3324] rounded-[28px] p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-[80px]" />
          <p className="text-[#8B9A71] text-[9px] font-black uppercase tracking-widest mb-1 relative z-10">24/7 Active</p>
          <h3 className="text-lg font-black text-white mb-4 relative z-10">Direct Concierge</h3>
          <div className="grid grid-cols-2 gap-3 relative z-10">
            <button className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-[16px] p-4 hover:bg-white/20 transition-all text-left">
              <div className="w-9 h-9 bg-[#8B9A71]/20 rounded-[10px] flex items-center justify-center flex-shrink-0">
                <MessageCircle size={16} className="text-[#8B9A71]" />
              </div>
              <div>
                <p className="text-[9px] font-black text-white uppercase tracking-widest">Live Chat</p>
                <p className="text-[8px] text-[#8B9A71] font-black">Instant reply</p>
              </div>
            </button>
            <button className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-[16px] p-4 hover:bg-white/20 transition-all text-left">
              <div className="w-9 h-9 bg-[#8B9A71]/20 rounded-[10px] flex items-center justify-center flex-shrink-0">
                <Mail size={16} className="text-[#8B9A71]" />
              </div>
              <div>
                <p className="text-[9px] font-black text-white uppercase tracking-widest">Email Us</p>
                <p className="text-[8px] text-[#8B9A71] font-black">Within 2 hours</p>
              </div>
            </button>
          </div>
        </div>

        {/* ── Availability Banner ── */}
        <div className="bg-white rounded-[24px] p-4 border border-[#8B9A71]/10 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 bg-[#8B9A71]/10 rounded-[12px] flex items-center justify-center flex-shrink-0">
            <Clock size={18} className="text-[#8B9A71]" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-black text-[#2D3324] uppercase tracking-widest">Support Hours</p>
            <p className="text-[9px] text-[#8B9A71] font-black uppercase tracking-widest">Mon–Sat · 9AM–9PM IST</p>
          </div>
          <div className="w-2 h-2 bg-[#8B9A71] rounded-full animate-pulse" />
        </div>

        {/* ── Send a Message ── */}
        <div className="bg-white rounded-[28px] p-6 border border-[#8B9A71]/10 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2D3324]/8 rounded-[12px] flex items-center justify-center">
              <Send size={17} className="text-[#2D3324]" />
            </div>
            <p className="text-[10px] font-black text-[#2D3324] uppercase tracking-widest">Send a Message</p>
          </div>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Describe your issue or question..."
            rows={4}
            className="w-full bg-[#F4F7FA] rounded-[16px] px-4 py-3.5 text-sm text-[#2D3324] font-medium resize-none outline-none focus:ring-2 focus:ring-[#8B9A71]/20 transition-all placeholder:text-[#8B9A71]/40 leading-relaxed"
          />
          <button
            onClick={handleSend}
            className={`w-full py-4 rounded-[16px] text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all
              ${sent ? "bg-[#8B9A71] text-white" : "bg-[#2D3324] text-white hover:bg-[#8B9A71]"}`}
          >
            {sent ? <><CheckCircle size={14} /> Message Sent!</> : <><Send size={14} /> Send to Support Team</>}
          </button>
        </div>

        {/* ── FAQ Accordion ── */}
        <div className="space-y-4">
          {FAQ_CATEGORIES.map((cat, ci) => (
            <div key={ci} className="bg-white rounded-[24px] overflow-hidden border border-[#8B9A71]/10 shadow-sm">
              {/* Category header */}
              <button
                onClick={() => setExpanded(expanded === cat.title ? null : cat.title)}
                className="w-full p-5 flex items-center gap-4 text-left hover:bg-[#F4F7FA] transition-all"
              >
                <div className="w-10 h-10 bg-[#2D3324]/8 rounded-[12px] flex items-center justify-center flex-shrink-0">
                  <cat.icon size={18} className="text-[#2D3324]" />
                </div>
                <span className="flex-1 text-[11px] font-black text-[#2D3324] uppercase tracking-widest">{cat.title}</span>
                <ChevronRight
                  size={16}
                  className={`text-[#8B9A71] transition-transform duration-300 ${expanded === cat.title ? "rotate-90" : ""}`}
                />
              </button>

              {/* Items */}
              {expanded === cat.title && (
                <div className="border-t border-[#F4F7FA] divide-y divide-[#F4F7FA] animate-in fade-in duration-300">
                  {cat.items.map((item, ii) => (
                    <div key={ii} className="group">
                      <button 
                        onClick={() => setExpandedQ(expandedQ === item.q ? null : item.q)}
                        className="w-full px-5 py-4 flex items-center justify-between gap-3 hover:bg-[#F4F7FA] transition-all text-left"
                      >
                        <span className="text-sm font-medium text-[#2D3324] leading-snug">{item.q}</span>
                        <ChevronRight size={14} className={`text-[#8B9A71] flex-shrink-0 transition-transform ${expandedQ === item.q ? 'rotate-90' : 'group-hover:translate-x-0.5'}`} />
                      </button>
                      {expandedQ === item.q && (
                        <div className="px-5 pb-4 text-[13px] text-[#2D3324]/60 font-medium leading-relaxed animate-in fade-in slide-in-from-top-1">
                          {item.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Privacy Shield Notice ── */}
        <div className="bg-white rounded-[24px] p-5 border border-[#8B9A71]/10 shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 bg-[#8B9A71]/10 rounded-[12px] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Shield size={18} className="text-[#8B9A71]" />
          </div>
          <div>
            <p className="text-[10px] font-black text-[#2D3324] uppercase tracking-widest mb-1">Privacy Shield Active</p>
            <p className="text-[11px] text-[#8B9A71] font-medium leading-relaxed">Your support requests are fully encrypted. In anonymous mode, tickets are never linked to your real identity.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
