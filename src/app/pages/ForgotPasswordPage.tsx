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
          {!isSubmitted ? (
            <>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-[#8B9A71]/10 text-[#8B9A71] px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-4">
                  <Lock size={12} />
                  Security Protocol
                </div>
                <h1 className="text-3xl font-bold text-[#2D3324] font-serif mb-2">
                  Forgot Password?
                </h1>
                <p className="text-[#2D3324]/50 text-sm font-medium">
                  Enter your email to receive recovery instructions
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-[#2D3324]/50 uppercase tracking-widest ml-2">Registered Email</label>
                   <div className="relative">
                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2D3324]/30 pointer-events-none" size={18} />
                     <input 
                       type="email" 
                       id="email"
                       name="email"
                       required
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder="your@email.com" 
                       className="w-full bg-[#F3F5F0] border border-[#8B9A71]/20 rounded-2xl pl-12 pr-4 py-4 text-sm text-[#2D3324] outline-none focus:border-[#8B9A71] focus:bg-white transition-[background-color,border-color] duration-200 placeholder:text-[#2D3324]/30"
                     />
                   </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#2D3324] text-white py-5 rounded-2xl flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest shadow-xl hover:bg-[#1a1d14] transition-all"
                >
                  Send Recovery Link
                  <ArrowRight size={18} />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-20 h-20 bg-[#8B9A71]/10 text-[#8B9A71] rounded-full flex items-center justify-center mx-auto mb-8">
                <Mail size={32} />
              </div>
              <h2 className="text-2xl font-bold text-[#2D3324] font-serif mb-4">Check Your Inbox</h2>
              <p className="text-[#2D3324]/50 text-sm font-medium mb-10 leading-relaxed">
                If an account exists for <span className="text-[#2D3324] font-bold">{email}</span>, you'll receive instructions to reset your password shortly.
              </p>
              <button 
                onClick={() => navigate("/auth/login")}
                className="w-full bg-[#F3F5F0] text-[#2D3324] py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-[#E3EAE0] transition-all"
              >
                Return to Login
              </button>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-[#2D3324]/5 text-center">
            <Link to="/auth/login" className="text-xs font-bold text-[#8B9A71] hover:text-[#2D3324] transition-colors uppercase tracking-widest">
              Back to Sign In
            </Link>
          </div>
        </div>

        <p className="mt-8 text-center text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
           <ShieldCheck size={12} />
           Encrypted Recovery Session
        </p>
      </div>
    </div>
  );
}
