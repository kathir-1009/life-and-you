import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Lock, ArrowRight, ChevronLeft, ShieldCheck, CheckCircle2 } from "lucide-react";

export function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setIsSuccess(true);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="min-h-[100dvh] bg-[#2D3324] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Same ambient gradients as Splash/Auth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71] rounded-full blur-[80px] opacity-20 pointer-events-none will-change-transform" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4E5540] rounded-full blur-[100px] opacity-25 pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#2D3324_100%)] opacity-60 pointer-events-none will-change-transform" />

      <div className="max-w-md w-full relative z-10">
        {/* Logo & Back */}
        <div className="flex items-center justify-between mb-12">
           <Link to="/auth/login" className="p-3 bg-white/10 rounded-2xl border border-white/10 text-white hover:bg-white/20 transition-colors">
              <ChevronLeft size={20} />
           </Link>
           <img src="/img/Lifeandyou-logo-1.png" alt="Life & You" className="h-8 brightness-[10] opacity-90" />
           <div className="w-12" />
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl">
          {!isSuccess ? (
            <>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-[#8B9A71]/10 text-[#8B9A71] px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-4">
                  <ShieldCheck size={12} />
                  Verified Identity
                </div>
                <h1 className="text-3xl font-bold text-[#2D3324] font-serif mb-2">
                  New Passkey
                </h1>
                <p className="text-[#2D3324]/50 text-sm font-medium">
                  Define your new secure access credentials
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-[#2D3324]/50 uppercase tracking-widest ml-2">New Password</label>
                   <div className="relative">
                     <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2D3324]/30" size={18} />
                      <input 
                        type="password" 
                        id="password"
                        name="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••" 
                        className="w-full bg-[#F3F5F0] border border-[#8B9A71]/20 rounded-2xl pl-12 pr-4 py-4 text-sm text-[#2D3324] outline-none focus:border-[#8B9A71] focus:bg-white transition-[background-color,border-color] duration-200 placeholder:text-[#2D3324]/30"
                      />
                   </div>
                </div>

                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-[#2D3324]/50 uppercase tracking-widest ml-2">Confirm Password</label>
                   <div className="relative">
                     <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2D3324]/30" size={18} />
                      <input 
                        type="password" 
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••" 
                        className="w-full bg-[#F3F5F0] border border-[#8B9A71]/20 rounded-2xl pl-12 pr-4 py-4 text-sm text-[#2D3324] outline-none focus:border-[#8B9A71] focus:bg-white transition-[background-color,border-color] duration-200 placeholder:text-[#2D3324]/30"
                      />
                   </div>
                </div>

                <div className="pt-6">
                   <button 
                     type="submit"
                     className="w-full bg-[#2D3324] text-white py-5 rounded-2xl flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest shadow-xl hover:bg-[#1a1d14] transition-all"
                   >
                     Update Credentials
                     <ArrowRight size={18} />
                   </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-20 h-20 bg-[#8B9A71]/10 text-[#8B9A71] rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="text-2xl font-bold text-[#2D3324] font-serif mb-4">Credentials Updated</h2>
              <p className="text-[#2D3324]/50 text-sm font-medium mb-10 leading-relaxed">
                Your password has been successfully reset. You can now use your new passkey to access your sanctuary.
              </p>
              <button 
                onClick={() => navigate("/auth/login")}
                className="w-full bg-[#2D3324] text-white py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-[#1a1d14] transition-all"
              >
                Sign In Now
              </button>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-[#2D3324]/5 text-center text-xs font-medium text-[#2D3324]/50">
            Need assistance? <Link to="/contact" className="text-[#8B9A71] font-bold hover:underline">Contact Sanctuary Support</Link>
          </div>
        </div>

        <p className="mt-8 text-center text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
           <Lock size={12} />
           Sanctuary Grade Encryption Active
        </p>
      </div>
    </div>
  );
}
