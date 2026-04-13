import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { User, ShieldCheck, ArrowRight, Sparkles, Heart, Brain } from "lucide-react";
import { useUser } from "../context/UserContext";

export function SplashPage() {
  const { setRole } = useUser();
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRoleSelection(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleRoleSelect = (role: "client" | "coach") => {
    setRole(role);
    localStorage.setItem('userRole', role);
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-[#2D3324] flex flex-col items-center justify-center p-6 relative overflow-hidden font-['SUSE']">
      {/* Immersive Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8B9A71] rounded-full filter blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2 transition-all duration-1000 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#4E5540] rounded-full filter blur-[150px] opacity-30 translate-y-1/2 -translate-x-1/2 transition-all duration-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#C4A35A] rounded-full filter blur-[100px] opacity-10 animate-pulse delay-500" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#2D3324_100%)] opacity-80 z-1" />

      {/* Floating Decorative Elements */}
      <div className="absolute top-[18%] left-[12%] opacity-20 animate-bounce delay-100">
        <Sparkles size={32} className="text-[#8B9A71]" />
      </div>
      <div className="absolute bottom-[25%] right-[18%] opacity-15 animate-pulse">
        <Heart size={40} className="text-[#CED2BA]" />
      </div>
      <div className="absolute top-1/3 right-[15%] opacity-10 rotate-12">
        <Brain size={56} className="text-[#8B9A71]" />
      </div>

      {!showRoleSelection ? (
        <div className="relative z-10 flex flex-col items-center animate-in fade-in zoom-in-90 duration-1000">
          <div className="mb-12 relative">
             <div className="absolute inset-0 bg-white/20 blur-[40px] rounded-full scale-150" />
             <img 
               src="/img/Lifeandyou-logo-1.png" 
               alt="Life & You" 
               className="w-48 relative z-10 brightness-[10]"
             />
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="h-[2px] w-16 bg-[#8B9A71] rounded-full">
              <div className="h-full bg-white w-full animate-[shimmer_2s_infinite]" />
            </div>
            <p className="text-[#CED2BA] text-xs font-black uppercase tracking-[0.5em] text-center opacity-80">
              Transformative Sanctuary
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md relative z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-white/5 backdrop-blur-xl rounded-[32px] border border-white/10 mb-10 shadow-2xl">
              <img 
                src="/img/Lifeandyou-logo-1.png" 
                alt="Life & You" 
                className="h-10 brightness-[10]"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-tight">
              <span style={{ color: 'white' }}>Begin your</span> <span className="text-[#8B9A71]">Safe Session.</span>
            </h1>
            <p className="text-sm text-[#CED2BA] font-medium opacity-80 max-w-[280px] mx-auto leading-relaxed">
              Step into a space of growth, clarity, and absolute cognitive privacy.
            </p>
          </div>

          <div className="space-y-6">
            {/* Client Card (Glassmorphism) */}
            <button
              onClick={() => handleRoleSelect("client")}
              className="w-full bg-white/10 backdrop-blur-3xl border border-white/10 rounded-[32px] p-8 flex items-center gap-8 group hover:bg-white transition-all shadow-2xl hover:scale-[1.02] active:scale-[0.98] text-left"
            >
              <div className="w-16 h-16 bg-[#8B9A71] rounded-[24px] flex items-center justify-center text-[#2D3324] shadow-xl group-hover:rotate-6 transition-transform">
                <User size={32} strokeWidth={3} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black !text-white group-hover:!text-[#2D3324] transition-colors tracking-tight">Enter as Client</h3>
                <p className="text-xs text-[#CED2BA] group-hover:text-[#2D3324]/60 font-bold uppercase tracking-widest mt-1">Seek Transformation</p>
              </div>
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-[#2D3324] group-hover:border-transparent transition-all">
                <ArrowRight size={20} className="text-white group-hover:scale-110 transition-transform" />
              </div>
            </button>

            {/* Coach Card (Deep Forest) */}
            <button
              onClick={() => handleRoleSelect("coach")}
              className="w-full bg-[#1A1D14] border border-[#8B9A71]/20 rounded-[32px] p-8 flex items-center gap-8 group hover:bg-[#8B9A71] transition-all shadow-2xl hover:scale-[1.02] active:scale-[0.98] text-left"
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-[24px] flex items-center justify-center text-white group-hover:bg-[#2D3324] transition-all">
                <ShieldCheck size={32} strokeWidth={3} className="text-[#8B9A71] group-hover:text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black !text-white group-hover:!text-[#2D3324] transition-colors tracking-tight">Join as Expert</h3>
                <p className="text-xs text-white/40 group-hover:text-[#2D3324]/60 font-bold uppercase tracking-widest mt-1">Lead with Wisdom</p>
              </div>
              <div className="w-10 h-10 border border-[#8B9A71]/40 rounded-full flex items-center justify-center group-hover:bg-[#2D3324] transition-all">
                <ArrowRight size={20} className="text-[#8B9A71] group-hover:text-white transition-transform" />
              </div>
            </button>
          </div>

          <div className="mt-20 flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#CED2BA]/40">
               <div className="h-[1px] w-12 bg-[#8B9A71]/20" />
               Complete Anonymity Assured
               <div className="h-[1px] w-12 bg-[#8B9A71]/20" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
