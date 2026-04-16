import { Link } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircleFill } from "react-bootstrap-icons";
import { useState } from "react";

export function ClientGoalsPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const goals = ["Stress Management", "Career Growth", "Relationship Healing", "Self-Confidence", "Mindfulness", "Anxiety Reduction"];

  const toggle = (goal: string) => {
    setSelected(prev => prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]);
  };

  return (
    <div className="min-h-screen bg-[#FCF8E8] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-[#5E6C54] font-serif mb-4">What brings you here?</h1>
        <p className="text-[#5E6C54]/60 mb-10 font-medium uppercase text-[10px] tracking-widest">Select all that apply</p>
        
        <div className="grid grid-cols-2 gap-4 mb-12">
          {goals.map(goal => (
            <button 
              key={goal}
              onClick={() => toggle(goal)}
              className={`p-6 rounded-[32px] border-2 transition-all flex items-center justify-between group ${
                selected.includes(goal) 
                  ? 'bg-[#99A88C] border-transparent text-white' 
                  : 'bg-white border-[#99A88C]/10 text-[#5E6C54] hover:border-[#99A88C]/30'
              }`}
            >
              <span className="font-bold text-xs uppercase tracking-tight">{goal}</span>
              {selected.includes(goal) && <CheckCircleFill size={18} />}
            </button>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <Link to="/onboarding/welcome" className="p-4 text-[#5E6C54]/40 hover:text-[#5E6C54] transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <Link 
            to="/onboarding/privacy" 
            className={`px-10 py-5 bg-[#5E6C54] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-3 ${selected.length === 0 ? 'opacity-50 pointer-events-none' : 'hover:scale-105 shadow-xl'}`}
          >
            Continue <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
