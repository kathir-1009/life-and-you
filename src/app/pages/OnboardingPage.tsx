import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, Check, ChevronRight, Heart, Shield, Calendar } from "lucide-react";
import { useUser } from "../context/UserContext";

export function OnboardingPage() {
  const { role } = useUser();
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // If it's a coach, we skip the client onboarding entirely
    if (role === 'coach') {
      navigate("/coach");
    } else if (role === 'admin') {
      navigate("/admin");
    }
  }, [role, navigate]);

  const steps = [
    {
      id: 1,
      title: "How can we help you grow?",
      subtitle: "Select the primary area you'd like to focus on for your journey.",
      icon: Heart,
      options: ["Anxiety & Stress", "Growth & Purpose", "Loneliness", "Life Transitions", "Career Coaching", "Other"],
    },
    {
      id: 2,
      title: "Your Safe Space",
      subtitle: "Anonymity is our priority. How would you like to participate?",
      icon: Shield,
      options: ["Full Anonymity (Audio Only)", "Standard (Video & Audio)", "Undecided"],
    },
    {
      id: 3,
      title: "Timing is Everything",
      subtitle: "What's the best time for your breakthroughs?",
      icon: Calendar,
      options: ["Morning Peace", "Lunch Breaks", "Late Evenings", "Weekends Only"],
    }
  ];

  const currentStep = steps.find(s => s.id === step)!;

  const handleOptionSelect = (option: string) => {
    setSelected(option);
    setTimeout(() => {
      if (step < steps.length) {
        setStep(step + 1);
        setSelected(null);
      } else {
        navigate("/portal");
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#2D3324] flex flex-col px-6 py-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71] rounded-full blur-[80px] opacity-20 pointer-events-none will-change-transform" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4E5540] rounded-full blur-[100px] opacity-25 pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#2D3324_100%)] opacity-60 pointer-events-none will-change-transform" />

      <div className="max-w-md mx-auto w-full flex-1 relative z-10">
        {/* Modern Progress Steps */}
        <div className="flex items-center gap-3 mb-16">
          {steps.map(s => (
            <div key={s.id} className="flex-1 flex flex-col gap-2">
               <div className={`h-1.5 rounded-full transition-all duration-700 ${s.id <= step ? "bg-[#8B9A71]" : "bg-white/10"}`} />
            </div>
          ))}
        </div>

        {/* Content */}
        <div key={step} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="w-16 h-16 bg-[#FFFFFF]/5 backdrop-blur-xl border border-white/10 rounded-[24px] flex items-center justify-center text-white shadow-2xl mb-8">
            <currentStep.icon size={32} className="text-[#8B9A71]" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black text-white font-serif mb-3 leading-tight tracking-tight uppercase">
            {currentStep.title}
          </h1>
          <p className="text-sm text-[#CED2BA] font-medium mb-12 leading-relaxed opacity-70">
            {currentStep.subtitle}
          </p>

          <div className="space-y-4">
            {currentStep.options.map((option, i) => {
              const isActive = selected === option;
              return (
                <button
                  key={i}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full rounded-[32px] p-7 flex items-center justify-between group border transition-all active:scale-[0.98] ${
                    isActive 
                      ? "bg-[#FFFFFF] border-transparent text-[#2D3324] shadow-2xl translate-x-1" 
                      : "bg-[#FFFFFF]/5 border-white/10 text-white hover:bg-white/10 shadow-sm"
                  }`}
                >
                  <span className={`text-[11px] font-black uppercase tracking-widest ${isActive ? "text-[#2D3324]" : "text-white"}`}>
                    {option}
                  </span>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${isActive ? "bg-[#2D3324] text-white" : "bg-white/5 text-white/40"}`}>
                    {isActive ? <Check size={18} /> : <ChevronRight size={20} />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center relative z-10">
        <button 
          onClick={() => navigate("/portal")}
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#CED2BA]/40 hover:text-white transition-all border-b border-white/10 pb-1"
        >
          Skip Introduction <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
