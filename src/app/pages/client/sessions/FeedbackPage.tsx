import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { StarFill, SendFill, EmojiSmileFill, ChatQuoteFill } from "react-bootstrap-icons";
import { ChevronLeft } from "lucide-react";

export function ClientFeedbackPage() {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F4F7FA] pb-32 portal-context animate-in fade-in duration-700">

      {/* ── Header ── */}
      <div className="relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-5 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/10 active:scale-95 transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="bg-[#2D3324] pt-20 pb-24 px-6 rounded-b-[64px] relative overflow-hidden text-center border-t border-white/5 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#A68A45]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-[22px] flex items-center justify-center mb-5 border border-white/10 backdrop-blur-md">
              <EmojiSmileFill size={26} className="text-[#A68A45]" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight font-serif italic mb-2 uppercase">How was your journey?</h1>
            <p className="text-[#8B9A71] text-[10px] font-black uppercase tracking-[0.35em]">Help your mentor tune into your frequency</p>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-5 -mt-10 relative z-10">
        <div className="bg-white p-8 md:p-10 rounded-[40px] border border-[#8B9A71]/10 shadow-sm mb-8">
           
           <div className="flex justify-center gap-2 md:gap-3 mb-10">
              {[1,2,3,4,5].map(s => (
                <button 
                  key={s} 
                  onClick={() => setRating(s)}
                  className={`transition-all duration-300 ${s <= rating ? 'text-[#A68A45] scale-125' : 'text-[#8B9A71]/20 hover:text-[#8B9A71]/40'}`}
                >
                   <StarFill size={36} className="md:w-10 md:h-10" />
                </button>
              ))}
           </div>
           
           <div className="relative">
              <label className="text-[9px] font-black text-[#2D3324]/40 uppercase tracking-[0.3em] mb-4 block text-left ml-4">Reflection Notes (Optional)</label>
              <textarea 
                placeholder="What stayed with you after this session?"
                className="w-full bg-[#F4F7FA] border border-[#8B9A71]/10 rounded-[24px] p-6 text-sm text-[#2D3324] font-medium focus:bg-white focus:border-[#8B9A71]/40 transition-all outline-none min-h-[160px] resize-none placeholder:text-[#8B9A71]/50"
              />
              <ChatQuoteFill className="absolute right-6 bottom-6 text-[#8B9A71]/20" size={20} />
           </div>
        </div>
        
        <div className="flex flex-col gap-4">
           <Link 
             to="/portal" 
             className="w-full py-5 bg-[#2D3324] text-white rounded-[20px] font-black text-[10px] uppercase tracking-widest hover:scale-[1.02] shadow-xl hover:bg-[#8B9A71] transition-all flex items-center justify-center gap-3 border border-white/10"
           >
             Save Feedback <SendFill size={14} />
           </Link>
           
           <Link 
             to="/portal" 
             className="text-[#2D3324]/40 hover:text-[#2D3324] transition-all font-black text-[9px] uppercase tracking-[0.2em] text-center mt-2"
           >
              Skip for now
           </Link>
        </div>
      </div>
    </div>
  );
}
