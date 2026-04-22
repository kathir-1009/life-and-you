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
    <div className="min-h-[100dvh] bg-cream flex items-center justify-center px-6 py-12 portal-context relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -z-0 pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        {/* Logo & Back */}
        <div className="flex items-center justify-between mb-12">
           <Link to="/auth/login" className="p-3 bg-white rounded-2xl border border-sage/10 text-sage-dark shadow-sm hover:bg-sage-light transition-colors">
              <ChevronLeft size={20} />
           </Link>
           <img src="/img/Lifeandyou-logo-1.png" alt="Life & You" className="h-8 brightness-0 opacity-80" />
           <div className="w-12" />
        </div>

        {/* Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-white p-8 md:p-10 rounded-[40px] shadow-2xl">
          {!isSuccess ? (
            <>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-sage text-gold px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-4">
                  <ShieldCheck size={12} />
                  Verified Identity
                </div>
                <h1 className="text-3xl font-bold text-sage-dark font-serif mb-2">
                  New Passkey
                </h1>
                <p className="text-sage-dark/60 text-sm font-medium">
                  Define your new secure access credentials
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-sage-dark/40 uppercase tracking-widest ml-2">New Password</label>
                   <div className="relative">
                     <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-dark/30" size={18} />
                     <input 
                       type="password" 
                       required
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder="••••••••" 
                       className="w-full bg-white/50 border border-sage/10 rounded-2xl pl-12 pr-4 py-4 text-sm outline-none focus:border-gold focus:bg-white transition-all"
                     />
                   </div>
                </div>

                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-sage-dark/40 uppercase tracking-widest ml-2">Confirm Password</label>
                   <div className="relative">
                     <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-dark/30" size={18} />
                     <input 
                       type="password" 
                       required
                       value={confirmPassword}
                       onChange={(e) => setConfirmPassword(e.target.value)}
                       placeholder="••••••••" 
                       className="w-full bg-white/50 border border-sage/10 rounded-2xl pl-12 pr-4 py-4 text-sm outline-none focus:border-gold focus:bg-white transition-all"
                     />
                   </div>
                </div>

                <div className="pt-6">
                   <button 
                     type="submit"
                     className="w-full bg-sage text-white py-5 rounded-2xl flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest shadow-xl shadow-sage/10 hover:bg-sage transition-all"
                   >
                     Update Credentials
                     <ArrowRight size={18} />
                   </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-20 h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="text-2xl font-bold text-sage-dark font-serif mb-4">Credentials Updated</h2>
              <p className="text-sage-dark/60 text-sm font-medium mb-10 leading-relaxed">
                Your password has been successfully reset. You can now use your new passkey to access your sanctuary.
              </p>
              <button 
                onClick={() => navigate("/auth/login")}
                className="w-full bg-sage text-white py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-sage-dark transition-all"
              >
                Sign In Now
              </button>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-sage/5 text-center text-xs font-medium text-sage-dark/60">
            Need assistance? <Link to="/home/contact" className="text-gold font-bold hover:underline">Contact Sanctuary Support</Link>
          </div>
        </div>

        <p className="mt-8 text-center text-[10px] text-sage-dark/30 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
           <Lock size={12} />
           Sanctuary Grade Encryption Active
        </p>
      </div>
    </div>
  );
}
