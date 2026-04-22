import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Mail, ArrowRight, ChevronLeft, ShieldCheck, Lock } from "lucide-react";

export function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would trigger an email
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
          {!isSubmitted ? (
            <>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-4">
                  <Lock size={12} />
                  Security Protocol
                </div>
                <h1 className="text-3xl font-bold text-sage-dark font-serif mb-2">
                  Forgot Password?
                </h1>
                <p className="text-sage-dark/60 text-sm font-medium">
                  Enter your email to receive recovery instructions
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-sage-dark/40 uppercase tracking-widest ml-2">Registered Email</label>
                   <div className="relative">
                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-dark/30" size={18} />
                     <input 
                       type="email" 
                       required
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder="your@email.com" 
                       className="w-full bg-white/50 border border-sage/10 rounded-2xl pl-12 pr-4 py-4 text-sm outline-none focus:border-gold focus:bg-white transition-all"
                     />
                   </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-sage text-white py-5 rounded-2xl flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest shadow-xl shadow-sage/10 hover:bg-sage transition-all"
                >
                  Send Recovery Link
                  <ArrowRight size={18} />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-20 h-20 bg-sage/10 text-sage rounded-full flex items-center justify-center mx-auto mb-8">
                <Mail size={32} />
              </div>
              <h2 className="text-2xl font-bold text-sage-dark font-serif mb-4">Check Your Inbox</h2>
              <p className="text-sage-dark/60 text-sm font-medium mb-10 leading-relaxed">
                If an account exists for <span className="text-sage-dark font-bold">{email}</span>, you'll receive instructions to reset your password shortly.
              </p>
              <button 
                onClick={() => navigate("/auth/login")}
                className="w-full bg-sage-light text-sage-dark py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-sage hover:text-white transition-all"
              >
                Return to Login
              </button>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-sage/5 text-center">
            <Link to="/auth/login" className="text-xs font-bold text-sage-dark/40 hover:text-gold transition-colors uppercase tracking-widest">
              Back to Sign In
            </Link>
          </div>
        </div>

        <p className="mt-8 text-center text-[10px] text-sage-dark/30 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
           <ShieldCheck size={12} />
           Encrypted Recovery Session
        </p>
      </div>
    </div>
  );
}
