import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Mail, ArrowRight, Lock, User, ChevronLeft, ShieldCheck, Github, Chrome } from "lucide-react";
import { useUser } from "../context/UserContext";

export function AuthPage() {
  const { role, setRole } = useUser();
  const [mode, setMode] = useState<"login" | "register">("login");
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock successful login
    sessionStorage.setItem("portal_access", "true");
    
    // Route based on role
    if (role === 'admin') navigate("/admin");
    else if (role === 'coach') navigate("/coach");
    else navigate("/portal");
  };

  return (
    <div className="min-h-[100dvh] bg-[#F5EFE6] flex items-center justify-center px-6 py-12 portal-context">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3D5247]/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C4A35A]/5 rounded-full blur-[120px] -z-0 pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        {/* Logo & Back */}
        <div className="flex items-center justify-between mb-12">
           <Link to="/" className="p-3 bg-white rounded-2xl border border-[#3D5247]/10 text-[#3D5247] shadow-sm hover:bg-[#EDF2EE] transition-colors">
              <ChevronLeft size={20} />
           </Link>
           <img src="/img/Lifeandyou-logo-1.png" alt="Life & You" className="h-8 brightness-0 opacity-80" />
           <div className="w-12" />
        </div>

        {/* Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-white p-8 md:p-10 rounded-[40px] shadow-2xl">
          <div className="text-center mb-10">
            {role === 'admin' && (
              <div className="inline-flex items-center gap-2 bg-[#1C2320] text-[#C4A35A] px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-4">
                <ShieldCheck size={12} />
                Admin Oversight
              </div>
            )}
            <h1 className="text-3xl font-bold text-[#3D5247] font-serif mb-2">
              {mode === "login" ? "Welcome Back" : "Start Journey"}
            </h1>
            <p className="text-[#3D5247]/60 text-sm font-medium">
              {mode === "login" 
                ? `Access your ${role} dashboard` 
                : "Join the sanctuary for coaching"}
            </p>
          </div>

          {/* Social Auth */}
          <div className="grid grid-cols-2 gap-4 mb-8">
             <button className="flex items-center justify-center gap-3 py-3 px-4 bg-white border border-[#3D5247]/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#EDF2EE] transition-all">
                <Chrome size={16} className="text-[#3D5247]" />
                Google
             </button>
             <button className="flex items-center justify-center gap-3 py-3 px-4 bg-[#1C2320] text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-all">
                <Github size={16} />
                Apple
             </button>
          </div>

          <div className="relative mb-8 flex items-center">
             <div className="flex-1 border-t border-[#3D5247]/10"></div>
             <span className="mx-4 text-[10px] font-bold text-[#3D5247]/30 uppercase tracking-widest">Or with email</span>
             <div className="flex-1 border-t border-[#3D5247]/10"></div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleAuth}>
            {mode === "register" && (
              <div className="space-y-1">
                 <label className="text-[10px] font-bold text-[#3D5247]/40 uppercase tracking-widest ml-2">Display Name (Optional)</label>
                 <div className="relative">
                   <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3D5247]/30" size={18} />
                   <input 
                     type="text" 
                     placeholder="e.g. WellnessSeeker" 
                     className="w-full bg-white/50 border border-[#3D5247]/10 rounded-2xl pl-12 pr-4 py-4 text-sm outline-none focus:border-[#C4A35A] focus:bg-white transition-all"
                   />
                 </div>
              </div>
            )}
            
            <div className="space-y-1">
               <label className="text-[10px] font-bold text-[#3D5247]/40 uppercase tracking-widest ml-2">Email Identity (Optional for testing)</label>
               <div className="relative">
                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3D5247]/30" size={18} />
                 <input 
                   type="email" 
                   placeholder="test@example.com" 
                   className="w-full bg-white/50 border border-[#3D5247]/10 rounded-2xl pl-12 pr-4 py-4 text-sm outline-none focus:border-[#C4A35A] focus:bg-white transition-all"
                 />
               </div>
            </div>

            <div className="space-y-1">
               <label className="text-[10px] font-bold text-[#3D5247]/40 uppercase tracking-widest ml-2">Access Key (Optional)</label>
               <div className="relative">
                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3D5247]/30" size={18} />
                 <input 
                   type="password" 
                   placeholder="Any key works" 
                   className="w-full bg-white/50 border border-[#3D5247]/10 rounded-2xl pl-12 pr-4 py-4 text-sm outline-none focus:border-[#C4A35A] focus:bg-white transition-all"
                 />
               </div>
            </div>

            <div className="pt-6">
               <button 
                 type="submit"
                 className="w-full bg-[#3D5247] text-white py-5 rounded-2xl flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest shadow-xl shadow-[#3D5247]/10 hover:bg-[#1C2320] transition-all"
               >
                 {mode === "login" ? "Request Access" : "Join Platform"}
                 <ArrowRight size={18} />
               </button>
            </div>
          </form>

          {/* Role Toggle for convenience in demo */}
          <div className="mt-8 pt-8 border-t border-[#3D5247]/5 flex justify-center gap-4">
             <button onClick={() => setRole('client')} className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg ${role === 'client' ? 'bg-[#3D5247] text-white' : 'text-[#3D5247]/50'}`}>Patient</button>
             <button onClick={() => setRole('coach')} className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg ${role === 'coach' ? 'bg-[#3D5247] text-white' : 'text-[#3D5247]/50'}`}>Doctor</button>
             <button onClick={() => setRole('admin')} className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg ${role === 'admin' ? 'bg-[#3D5247] text-white' : 'text-[#3D5247]/50'}`}>Admin</button>
          </div>

          <div className="mt-6 text-center text-xs font-medium text-[#3D5247]/60">
            {mode === "login" ? "Need an identity?" : "Already part of us?"}{" "}
            <button 
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="text-[#C4A35A] font-bold hover:underline"
            >
              {mode === "login" ? "Onboard Now" : "Port Back In"}
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-[10px] text-[#3D5247]/30 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
           <Lock size={12} />
           Sanctuary Grade Encryption Active
        </p>
      </div>
    </div>
  );
}
