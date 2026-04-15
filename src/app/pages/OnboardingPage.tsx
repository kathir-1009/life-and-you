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
    <div className="min-h-screen bg-[#F5EFE6] flex flex-col px-6 py-12 relative overflow-hidden portal-context">
      {/* Background Decorative Element */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#3D5247]/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#C4A35A]/5 rounded-full blur-[80px]" />

      <div className="max-w-md mx-auto w-full flex-1 relative z-10">
        {/* Modern Progress Steps */}
        <div className="flex items-center gap-3 mb-16">
          {steps.map(s => (
            <div key={s.id} className="flex-1 flex flex-col gap-2">
               <div className={`h-1.5 rounded-full transition-all duration-700 ${s.id <= step ? "bg-[#3D5247]" : "bg-[#3D5247]/10"}`} />
            </div>
          ))}
        </div>

        {/* Content */}
        <div key={step} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="w-16 h-16 bg-[#3D5247] rounded-[24px] flex items-center justify-center text-white shadow-xl shadow-black/10 mb-8">
            <currentStep.icon size={32} className="text-[#C4A35A]" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#3D5247] font-serif mb-3 leading-tight">
            {currentStep.title}
          </h1>
          <p className="text-sm text-[#3D5247]/60 font-medium mb-12 leading-relaxed">
            {currentStep.subtitle}
          </p>

          <div className="space-y-4">
            {currentStep.options.map((option, i) => {
              const isActive = selected === option;
              return (
                <button
                  key={i}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full rounded-[24px] p-6 flex items-center justify-between group border transition-all active:scale-[0.98] ${
                    isActive 
                      ? "bg-[#1C2320] border-transparent text-white shadow-2xl translate-x-1" 
                      : "bg-white border-[#3D5247]/10 text-[#3D5247] hover:border-[#3D5247] hover:bg-[#EDF2EE] shadow-sm"
                  }`}
                >
                  <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? "text-white" : "text-[#3D5247]"}`}>
                    {option}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${isActive ? "bg-[#3D5247] text-white" : "bg-[#F5EFE6] text-[#3D5247]"}`}>
                    {isActive ? <Check size={16} /> : <ChevronRight size={18} />}
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
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#3D5247]/40 hover:text-[#3D5247] transition-all border-b border-[#3D5247]/10 pb-1"
        >
          Skip Introduction <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
