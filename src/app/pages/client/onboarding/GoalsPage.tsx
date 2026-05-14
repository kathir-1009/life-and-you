import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { CheckCircle, Target } from "lucide-react";
import { useState } from "react";

export function ClientGoalsPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const goals = ["Stress Management", "Career Growth", "Relationship Healing", "Self-Confidence", "Mindfulness", "Anxiety Reduction"];

  const toggle = (goal: string) => {
    setSelected(prev => prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start md:justify-center p-6 pt-12 md:pt-6 pb-32 md:pb-12 text-center relative overflow-hidden">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4E5540] rounded-full blur-[150px] opacity-25 pointer-events-none" />

      <div className="max-w-2xl w-full bg-[#FFFFFF] p-8 md:p-14 pb-16 md:pb-20 rounded-[48px] md:rounded-[64px] shadow-[0_32px_64px_rgba(0,0,0,0.3)] animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10 border border-white/20">
        <div className="w-16 h-16 bg-[#2D3324] rounded-2xl flex items-center justify-center text-white mb-8 mx-auto shadow-xl">
           <Target size={32} />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-[#2D3324] font-serif mb-4 uppercase tracking-tight">What brings you here?</h1>
        <p className="text-[#8B9A71] font-black mb-12 uppercase tracking-[0.4em] opacity-80 text-[10px]">Step 1: Your Sanctuary Goals</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {goals.map(goal => (
            <button 
              key={goal}
              onClick={() => toggle(goal)}
              className={`p-6 rounded-[32px] border-2 transition-all flex items-center justify-between group ${
                selected.includes(goal) 
                  ? 'bg-[#2D3324] border-transparent text-white shadow-xl' 
                  : 'bg-white/50 border-[#2D3324]/5 text-[#2D3324] hover:border-[#8B9A71]/30 hover:bg-white'
              }`}
            >
              <span className="font-black text-[10px] uppercase tracking-widest">{goal}</span>
              {selected.includes(goal) && <CheckCircle size={18} />}
            </button>
          ))}
        </div>
        
        <div className="flex items-center justify-between gap-6 pt-10 border-t border-[#2D3324]/5">
          <Link to="/onboarding/welcome" className="w-14 h-14 bg-white/50 rounded-2xl flex items-center justify-center text-[#2D3324]/40 hover:text-[#2D3324] hover:bg-white transition-all border border-[#2D3324]/10">
            <ArrowLeft size={24} />
          </Link>
          <Link 
            to="/onboarding/privacy" 
            className={`flex-1 py-5 bg-[#2D3324] text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${selected.length === 0 ? 'opacity-50 pointer-events-none' : 'hover:scale-[1.02] hover:bg-[#1a1d14] shadow-2xl'}`}
          >
            Continue <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
