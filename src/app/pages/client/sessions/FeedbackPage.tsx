import { useState } from "react";
import { Link } from "react-router";
import { StarFill, SendFill, EmojiSmileFill, ChatQuoteFill } from "react-bootstrap-icons";

export function ClientFeedbackPage() {
  const [rating, setRating] = useState(0);

  return (
    <div className="min-h-screen bg-[#FCF8E8] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-xl w-full">
        <div className="w-20 h-20 bg-[#FDF8E1] rounded-[32px] flex items-center justify-center text-[#8A7340] mx-auto mb-8 shadow-sm">
           <EmojiSmileFill size={40} />
        </div>
        
        <h1 className="text-4xl font-bold text-[#5E6C54] font-serif mb-6 leading-tight uppercase">How was your journey today?</h1>
        <p className="text-[#5E6C54]/60 font-medium mb-12 italic">Your feedback helps your mentor tune into your frequency.</p>
        
        <div className="bg-white p-10 rounded-[48px] border border-[#99A88C]/10 shadow-2xl mb-12">
           <div className="flex justify-center gap-3 mb-10">
              {[1,2,3,4,5].map(s => (
                <button 
                  key={s} 
                  onClick={() => setRating(s)}
                  className={`transition-all ${s <= rating ? 'text-[#8A7340] scale-125' : 'text-[#99A88C]/20 hover:text-[#99A88C]/40'}`}
                >
                   <StarFill size={36} />
                </button>
              ))}
           </div>
           
           <div className="relative">
              <label className="text-[10px] font-black text-[#5E6C54]/40 uppercase tracking-[0.3em] mb-4 block text-left ml-4">Reflection Notes (Optional)</label>
              <textarea 
                placeholder="What stayed with you after this session?"
                className="w-full bg-[#FCF8E8] border border-transparent rounded-[32px] p-8 text-sm text-[#5E6C54] focus:bg-white focus:border-[#99A88C]/40 transition-all outline-none min-h-[160px]"
              />
              <ChatQuoteFill className="absolute right-8 bottom-8 text-[#99A88C]/20" size={24} />
           </div>
        </div>
        
        <div className="flex flex-col gap-4">
           <Link 
             to="/portal" 
             className="w-full py-6 bg-[#5E6C54] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-[1.03] shadow-2xl transition-all flex items-center justify-center gap-3"
           >
             Save Feedback <SendFill size={14} />
           </Link>
           <Link to="/portal" className="text-[#5E6C54]/40 hover:text-[#5E6C54] transition-all font-bold text-[10px] uppercase tracking-widest">
              Skip for now
           </Link>
        </div>
      </div>
    </div>
  );
}
