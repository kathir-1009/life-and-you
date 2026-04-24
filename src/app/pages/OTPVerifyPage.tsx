import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { ChevronLeft, RefreshCw, CheckCircle2, ShieldCheck, Mail } from "lucide-react";
import { useUser } from "../context/UserContext";

export function OTPVerifyPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = useUser();
  const mode = location.state?.mode || "login";

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (otp.every(v => v !== "")) {
      // Set secure portal access flag
      sessionStorage.setItem("portal_access", "true");
      const timer = setTimeout(() => {
        if (mode === "register") {
          navigate("/onboarding");
        } else {
          if (role === 'admin') navigate("/admin");
          else if (role === 'coach') navigate("/coach");
          else navigate("/portal");
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [otp, navigate, mode, role]);

  return (
    <div className="min-h-[100dvh] bg-cream flex flex-col p-6 sm:p-8 portal-context">
      <div className="max-w-md mx-auto w-full flex-1 flex flex-col relative">
        {/* Abstract Background Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sage/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Header Navigation */}
        <div className="mb-12">
          <button onClick={() => navigate("/auth/login")} className="w-12 h-12 bg-white border border-sage/10 rounded-2xl flex items-center justify-center text-sage-dark shadow-sm hover:scale-105 transition-all active:scale-95">
            <ChevronLeft size={20} />
          </button>
        </div>

        {/* Identity & Mission */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-transparent rounded-[32px] shadow-2xl mb-8 animate-in zoom-in duration-700">
             <img src="/img/Lifeandyou-logo-1.png" alt="Life & You" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-4xl font-bold text-sage-dark font-serif mb-3 tracking-tight">Secure Entry</h1>
          <p className="text-[15px] text-sage-dark/60 font-medium leading-relaxed max-w-[300px] mx-auto">
            A unique 4-digit key has been dispatched to your secure inbox. Enter it to access your portal.
          </p>
        </div>

        {/* OTP Modular Inputs */}
        <div className="flex gap-4 justify-between mb-16 relative group">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={el => { inputRefs.current[i] = el; }}
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className={`flex-1 aspect-[7/8.5] max-w-[70px] text-3xl sm:text-4xl font-bold text-sage-dark text-center rounded-[24px] border border-sage/10 outline-none transition-all shadow-lg ${
                digit ? "border-gold bg-sage-light" : "bg-white/50 backdrop-blur-sm focus:border-gold focus:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Action / Feedback Loop */}
        <div className="mt-auto pb-12">
          {otp.every(v => v !== "") ? (
            <div className="bg-sage text-white p-6 rounded-[32px] flex items-center justify-center gap-4 animate-in slide-in-from-bottom-8 duration-500 shadow-2xl shadow-black/20">
              <CheckCircle2 size={24} className="text-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Verified Securely</span>
            </div>
          ) : (
            <div className="space-y-10">
              <button 
                onClick={() => setOtp(["", "", "", ""])}
                className="w-full flex items-center justify-center gap-3 text-[10px] font-bold text-sage-dark uppercase tracking-[0.3em] group hover:text-gold transition-all"
              >
                <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-700" />
                Regenerate Key
              </button>
              
              <div className="flex items-center gap-3 justify-center text-sage-dark/20">
                 <div className="h-[1px] flex-1 bg-sage/10" />
                 <ShieldCheck size={16} />
                 <div className="h-[1px] flex-1 bg-sage/10" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
