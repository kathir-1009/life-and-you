import { useState } from "react";
import { ArrowLeft, Send, Lock, MoreVertical, Plus, Smile, ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";

export function MessagingPage() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const messages = [
    {
      type: "received",
      text: "Hi Sarah! How are you feeling today?",
      time: "10:30 AM",
    },
    {
      type: "sent",
      text: "I'm doing better, thanks! The breathing exercises really helped.",
      time: "10:32 AM",
    },
    {
      type: "received",
      text: "That's wonderful to hear! Keep practicing them daily. Would you like to schedule our next session?",
      time: "10:35 AM",
    },
    {
      type: "sent",
      text: "Yes, please! I'm free tomorrow afternoon.",
      time: "10:36 AM",
    },
  ];

  return (
    <div className="h-[100dvh] bg-[#F8F9FA] flex flex-col overflow-hidden">
      {/* Premium Chat Header */}
      <div className="bg-[#2D3324] px-6 py-5 flex items-center justify-between shadow-lg relative z-20">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white active:scale-95 transition-all">
            <ChevronLeft size={22} />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#8B9A71] rounded-2xl flex items-center justify-center text-white text-lg font-bold relative">
              J
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-[3px] border-[#2D3324]" />
            </div>
            <div>
              <h2 className="text-sm font-extrabold text-white">Dr. Johnson</h2>
              <p className="text-[10px] text-[#8B9A71] font-bold uppercase tracking-widest">Active Now</p>
            </div>
          </div>
        </div>

        <button className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Encryption Banner */}
      <div className="bg-[#CED2BA]/20 py-2.5 px-6 border-b border-[#CED2BA]/30 flex justify-center items-center gap-2">
        <Lock size={12} className="text-[#4E5540]" />
        <span className="text-[10px] text-[#4E5540] font-extrabold uppercase tracking-widest">End-to-End Encrypted</span>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed opacity-95">
        <div className="flex justify-center">
            <span className="bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-extrabold text-[#545454] uppercase tracking-[0.2em] border border-white">Today</span>
        </div>

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              msg.type === "sent" ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`max-w-[85%] px-5 py-4 rounded-[24px] shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                msg.type === "sent"
                  ? "bg-[#2D3324] text-white rounded-tr-none"
                  : "bg-white text-[#2D3324] rounded-tl-none border border-[rgba(139,154,113,0.1)]"
              }`}
            >
              <p className="text-sm leading-relaxed font-medium">{msg.text}</p>
            </div>
            <span className="text-[9px] mt-2 font-extrabold text-[#545454]/60 uppercase tracking-widest">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="bg-white border-t border-[rgba(139,154,113,0.1)] px-6 py-4 pb-8 md:pb-6 relative z-10">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <button className="w-11 h-11 bg-[#F8F9FA] rounded-2xl flex items-center justify-center text-[#8B9A71] hover:bg-[#8B9A71]/10 transition-all active:scale-95">
            <Plus size={22} />
          </button>
          
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message your coach..."
              className="w-full bg-[#F8F9FA] border-2 border-transparent focus:border-[#8B9A71] rounded-2xl pl-5 pr-12 py-3.5 text-sm font-medium outline-none transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#CED2BA] hover:text-[#8B9A71] transition-all">
              <Smile size={20} />
            </button>
          </div>

          <button className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all active:scale-90 ${message.trim() ? 'bg-[#8B9A71] text-white shadow-lg shadow-[#8B9A71]/20' : 'bg-[#F8F9FA] text-[#CED2BA]'}`}>
            <Send size={20} className={message.trim() ? "translate-x-0.5 -translate-y-0.5" : ""} />
          </button>
        </div>
      </div>
    </div>
  );
}
