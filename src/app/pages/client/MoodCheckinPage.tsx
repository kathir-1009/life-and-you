import { useState } from "react";
import { EmojiSmileFill, EmojiNeutralFill, EmojiFrownFill, EmojiGrinFill, EmojiExpressionlessFill, SendFill, BarChartFill, Calendar3 } from "react-bootstrap-icons";

export function MoodCheckinPage() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState("");

  const moods = [
    { icon: EmojiFrownFill, label: "Struggling", color: "text-red-400" },
    { icon: EmojiExpressionlessFill, label: "Low Energy", color: "text-gold-dark" },
    { icon: EmojiNeutralFill, label: "Neutral", color: "text-sage" },
    { icon: EmojiSmileFill, label: "Positive", color: "text-sage-dark" },
    { icon: EmojiGrinFill, label: "Radiant", color: "text-sage-dark" },
  ];

  return (
    <div className="animate-in fade-in duration-700 portal-context pb-20 space-y-10">
      {/* Header */}
      <div className="bg-cream/50 pt-16 pb-24 px-6 text-center">
         <h1 className="text-4xl md:text-6xl font-black text-sage-dark tracking-tighter leading-tight font-serif mb-4">How are you, really?</h1>
         <p className="text-sage-dark/40 text-[10px] font-black uppercase tracking-[0.4em]">Honest check-in for your sanctuary</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-12">
         {/* Mood Selector */}
         <div className="bg-white rounded-[48px] p-10 lg:p-14 shadow-premium border border-sage/5 text-center">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
               {moods.map((mood, i) => (
                  <button 
                     key={i}
                     onClick={() => setSelectedMood(i)}
                     className="flex flex-col items-center gap-4 group"
                  >
                     <div className={`w-16 h-16 md:w-24 md:h-24 rounded-[32px] md:rounded-[40px] flex items-center justify-center transition-all duration-500 ${selectedMood === i ? 'bg-sage-dark text-white shadow-2xl scale-110' : 'bg-cream text-sage-dark/20 hover:bg-sage/10 hover:text-sage-dark'}`}>
                        <mood.icon className="text-3xl md:text-5xl" />
                     </div>
                     <span className={`text-[10px] font-black uppercase tracking-widest transition-opacity ${selectedMood === i ? 'opacity-100 text-sage-dark' : 'opacity-0 group-hover:opacity-100 text-sage-dark/40'}`}>
                        {mood.label}
                     </span>
                  </button>
               ))}
            </div>

            {selectedMood !== null && (
               <div className="mt-16 animate-in fade-in slide-in-from-top-4 duration-500">
                  <textarea 
                     value={note}
                     onChange={(e) => setNote(e.target.value)}
                     placeholder="What's on your mind? (Optional)"
                     className="w-full bg-cream/30 border border-sage/10 rounded-[32px] p-8 text-sm font-medium text-sage-dark outline-none focus:bg-white focus:border-sage transition-all min-h-[160px] shadow-inner"
                  />
                  <button className="mt-8 bg-sage-dark text-white px-12 py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all flex items-center gap-3 mx-auto">
                     Commit Check-in <SendFill size={14} />
                  </button>
               </div>
            )}
         </div>

         {/* Mood History / Trends */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-[#5E6C54] rounded-[48px] p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10"><BarChartFill size={48} /></div>
               <div className="flex items-center justify-between mb-10 relative z-10">
                  <h3 className="text-xl font-bold font-serif uppercase tracking-tight">Emotional Pulse</h3>
                  <button className="text-[10px] font-black text-[#99A88C] uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                     Last 7 Days <Calendar3 size={14} />
                  </button>
               </div>
               
               <div className="h-40 flex items-end justify-between gap-2 relative z-10">
                  {[30, 45, 90, 70, 60, 85, 95].map((h, i) => (
                     <div key={i} className="flex-1 bg-white/10 rounded-t-xl relative group">
                        <div className="absolute bottom-0 left-0 right-0 bg-[#99A88C] rounded-t-xl group-hover:bg-white transition-all" style={{ height: `${h}%` }} />
                     </div>
                  ))}
               </div>
               <div className="flex justify-between mt-6 text-[9px] font-black text-[#99A88C] uppercase tracking-widest relative z-10">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
               </div>
            </div>

            <div className="bg-white rounded-[40px] p-10 border border-sage/5 shadow-premium flex flex-col justify-center items-center text-center gap-6">
               <div className="w-16 h-16 bg-cream rounded-[24px] flex items-center justify-center text-sage">
                  <EmojiSmileFill size={32} />
               </div>
               <div>
                  <h4 className="text-sm font-black text-sage-dark uppercase tracking-widest mb-2">Steady Growth</h4>
                  <p className="text-[10px] text-sage-dark/40 font-bold uppercase tracking-widest leading-relaxed">Your emotional stability has increased by 14% this week.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
