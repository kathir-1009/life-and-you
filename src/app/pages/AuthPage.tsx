import { useState } from "react";
import { useNavigate } from "react-router";
import { Mail, Phone, ArrowRight, Lock, User, ChevronLeft, ShieldCheck } from "lucide-react";
import { useUser } from "../context/UserContext";

export function AuthPage() {
  const { role } = useUser();
  const [mode, setMode] = useState<"login" | "register">("login");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col px-6 py-12 md:px-12">
      <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
        {/* Header with Back */}
        <div className="flex items-center justify-between mb-12">
          <button onClick={() => navigate("/splash")} className="w-10 h-10 border border-[rgba(139,154,113,0.15)] rounded-2xl flex items-center justify-center text-[#2D3324] bg-white">
            <ChevronLeft size={20} />
          </button>
          <img src="/img/Lifeandyou-logo-1.png" alt="Life & You" className="h-8 md:h-9" />
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="mb-10 text-center">
            {role === 'coach' && (
              <div className="inline-flex items-center gap-2 bg-[#2D3324] text-[#8B9A71] rounded-full px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-widest border border-[#8B9A71]/20">
                <ShieldCheck size={12} />
                Coach Portal Access
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D3324] mb-3 tracking-tight">
              {mode === "login" ? (role === 'coach' ? "Coach Login" : "Let's Sign You In") : (role === 'coach' ? "Join as an Expert" : "Join our portal")}
            </h1>
            <p className="text-sm text-[#545454] leading-relaxed max-w-[280px] mx-auto font-medium opacity-70">
              {mode === "login" 
                ? (role === 'coach' ? "Access your professional console" : "Enter your details to access your dashboard") 
                : (role === 'coach' ? "Become part of our global expert network" : "Begin your transformation journey today")}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); navigate("/otp"); }}>
            {mode === "register" && (
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold text-[#2D3324] uppercase tracking-wider ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B9A71]" size={18} />
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-white border-2 border-[rgba(139,154,113,0.1)] rounded-[18px] pl-12 pr-4 py-4 text-sm outline-none focus:border-[#8B9A71] transition-all"
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-1.5">
              <label className="text-[11px] font-extrabold text-[#2D3324] uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B9A71]" size={18} />
                <input 
                  type="email" 
                  placeholder="hello@example.com" 
                  className="w-full bg-white border-2 border-[rgba(139,154,113,0.1)] rounded-[18px] pl-12 pr-4 py-4 text-sm outline-none focus:border-[#8B9A71] transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-extrabold text-[#2D3324] uppercase tracking-wider ml-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B9A71]" size={18} />
                <input 
                  type="tel" 
                  placeholder="+971 -- --- ----" 
                  className="w-full bg-white border-2 border-[rgba(139,154,113,0.1)] rounded-[18px] pl-12 pr-4 py-4 text-sm outline-none focus:border-[#8B9A71] transition-all"
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-[#2D3324] text-white py-4.5 rounded-pill flex items-center justify-center gap-3 text-sm font-extrabold shadow-lg shadow-[#2D3324]/20 hover:bg-[#1C1A1E] transition-all active:scale-[0.98]"
              >
                {mode === "login" ? "Sign In" : "Create Account"}
                <ArrowRight size={18} />
              </button>
            </div>
          </form>

          {/* Mode Toggle */}
          <div className="mt-8 text-center text-sm font-medium text-[#545454]">
            {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
            <button 
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="text-[#8B9A71] font-extrabold hover:underline"
            >
              {mode === "login" ? "Register Now" : "Sign In Here"}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-12 text-center">
          <div className="flex items-center justify-center gap-2 text-[10px] text-[#2D3324] font-extrabold uppercase tracking-widest mb-4">
            <Lock size={14} className="text-[#8B9A71]" />
            Encrypted & Secure
          </div>
        </div>
      </div>
    </div>
  );
}
