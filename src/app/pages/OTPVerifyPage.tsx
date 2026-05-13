import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { ChevronLeft, RefreshCw, CheckCircle2, ShieldCheck } from "lucide-react";
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
      sessionStorage.setItem("portal_access", "true");
      const timer = setTimeout(() => {
        if (mode === "register") {
          if (role === "coach") navigate("/coach/onboarding");
          else navigate("/onboarding");
        } else {
          if (role === "coach") navigate("/coach");
          else navigate("/portal");
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [otp, navigate, mode, role]);

  return (
    <div className="min-h-[100dvh] bg-[#2D3324] flex flex-col p-6 sm:p-8 relative overflow-hidden">
      {/* Ambient blurs — matches auth page */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#8B9A71] rounded-full blur-[80px] opacity-20 pointer-events-none will-change-transform" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4E5540] rounded-full blur-[100px] opacity-25 pointer-events-none will-change-transform" />

      <div className="max-w-md mx-auto w-full flex-1 flex flex-col relative z-10">
        {/* Back */}
        <div className="mb-12 mt-4">
          <button
            onClick={() => navigate("/auth")}
            className="w-11 h-11 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        {/* Logo + Title */}
        <div className="mb-14 text-center">
          <div className="inline-block p-4 bg-white/8 rounded-[28px] border border-white/10 mb-8 shadow-xl">
            <img src="/img/Lifeandyou-logo-1.png" alt="Life & You" className="h-10 brightness-[10]" />
          </div>
          <h1 className="text-4xl font-bold text-white font-serif mb-3 tracking-tight">
            Secure Entry
          </h1>
          <p className="text-sm text-white/50 font-medium leading-relaxed max-w-[280px] mx-auto">
            A unique 4-digit code has been sent to your inbox. Enter it below to continue.
          </p>
        </div>

        {/* OTP Boxes — border only, transparent bg */}
        <div className="flex gap-4 justify-center mb-14">
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
              className={`w-16 h-20 text-3xl font-bold text-white text-center rounded-[20px] border-2 bg-transparent outline-none transition-[border-color,box-shadow] duration-200 ${
                digit
                  ? "border-white shadow-[0_0_20px_rgba(139,154,113,0.4)]"
                  : "border-white/25 focus:border-white/80"
              }`}
            />
          ))}
        </div>

        {/* Action */}
        <div className="mt-auto pb-8">
          {otp.every(v => v !== "") ? (
            <div className="bg-white/15 border border-white/20 text-white p-5 rounded-[28px] flex items-center justify-center gap-4 animate-in slide-in-from-bottom-8 duration-500 shadow-xl">
              <CheckCircle2 size={22} className="text-[#8B9A71]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Verified — Redirecting…</span>
            </div>
          ) : (
            <div className="space-y-8 text-center">
              <button
                onClick={() => setOtp(["", "", "", ""])}
                className="flex items-center justify-center gap-2 mx-auto text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] hover:text-white transition-all group"
              >
                <RefreshCw size={13} className="group-hover:rotate-180 transition-transform duration-700" />
                Resend Code
              </button>

              <div className="flex items-center gap-3 justify-center text-white/15">
                <div className="h-[1px] flex-1 bg-white/10" />
                <ShieldCheck size={14} />
                <div className="h-[1px] flex-1 bg-white/10" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
