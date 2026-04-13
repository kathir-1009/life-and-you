import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, Check, ChevronRight, Heart, Shield, Calendar, Star } from "lucide-react";
import { useUser } from "../context/UserContext";

export function OnboardingPage() {
  const { role } = useUser();
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // If it's a coach, we skip the client onboarding entirely
    if (role === 'coach') {
      navigate("/app/dashboard");
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
        navigate("/app/dashboard");
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col px-6 py-12 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#8B9A71]/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#4E5540]/5 rounded-full blur-[80px]" />

      <div className="max-w-md mx-auto w-full flex-1 relative z-10">
        {/* Modern Progress Steps */}
        <div className="flex items-center gap-3 mb-16">
          {steps.map(s => (
            <div key={s.id} className="flex-1 flex flex-col gap-2">
               <div className={`h-1.5 rounded-full transition-all duration-700 ${s.id <= step ? "bg-[#8B9A71]" : "bg-[#CED2BA]/30"}`} />
            </div>
          ))}
        </div>

        {/* Content */}
        <div key={step} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="w-16 h-16 bg-[#8B9A71] rounded-[24px] flex items-center justify-center text-white shadow-xl shadow-[#8B9A71]/20 mb-8">
            <currentStep.icon size={32} />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D3324] mb-3 leading-tight">
            {currentStep.title}
          </h1>
          <p className="text-sm text-[#545454] font-medium mb-12 leading-relaxed opacity-80">
            {currentStep.subtitle}
          </p>

          <div className="space-y-4">
            {currentStep.options.map((option, i) => {
              const isActive = selected === option;
              return (
                <button
                  key={i}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full rounded-[24px] p-6 flex items-center justify-between group border-2 transition-all active:scale-[0.98] ${
                    isActive 
                      ? "bg-[#2D3324] border-transparent text-white shadow-2xl translate-x-1" 
                      : "bg-white border-[rgba(139,154,113,0.1)] text-[#2D3324] hover:border-[#8B9A71] hover:bg-[#8B9A71]/5 shadow-sm"
                  }`}
                >
                  <span className={`text-sm font-extrabold uppercase tracking-wider ${isActive ? "text-white" : "text-[#2D3324]"}`}>
                    {option}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${isActive ? "bg-[#8B9A71] text-white" : "bg-[#F5EFE6] text-[#8B9A71]"}`}>
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
          onClick={() => navigate("/app/dashboard")}
          className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8B9A71] hover:opacity-70 transition-all border-b border-[#8B9A71]/30 pb-1"
        >
          Skip Introduction <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
