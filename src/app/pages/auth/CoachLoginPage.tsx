import { useNavigate, Link } from "react-router";
import { Mail, ArrowRight, Lock, ChevronLeft, Chrome } from "lucide-react";

function AppleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 814 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-38.8-155.5-127.4C46 790.8 0 663 0 541.8c0-207.7 135.4-317.5 267.8-317.5 70.7 0 129.5 46.4 173.9 46.4 42.8 0 109.9-49.1 188.3-49.1 30.5 0 135.5 2.6 208 98.9zm-155-181.3c35.7-43.7 60.1-104.6 60.1-165.5 0-8.4-.6-16.9-2-24.7-57.3 2.2-125.8 38.3-167 84.8-30.5 34.4-60.7 95.3-60.7 157.1 0 8.4 1.3 16.9 2 19.5 3.9.6 10.4 1.3 16.9 1.3 51.1 0 115.2-34.4 150.7-72.5z" />
    </svg>
  );
}

export function CoachLoginPage() {
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/auth/verify", { state: { mode: "login" } });
  };

  return (
    <div className="min-h-[100dvh] bg-[#2D3324] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71] rounded-full blur-[80px] opacity-20 pointer-events-none will-change-transform" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4E5540] rounded-full blur-[100px] opacity-25 pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#2D3324_100%)] opacity-60 pointer-events-none will-change-transform" />

      <div className="max-w-md w-full relative z-10">
        <div className="flex items-center justify-between mb-10">
          <Link to="/splash" className="p-3 bg-white/10 rounded-2xl border border-white/10 text-white hover:bg-white/20 transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <img src="/img/Lifeandyou-logo-1.png" alt="Life & You" className="h-8 brightness-[10] opacity-90" />
          <div className="w-12" />
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#2D3324] font-serif mb-2">Welcome Back, Coach</h1>
            <p className="text-[#2D3324]/50 text-sm font-medium">Sign in to continue your journey</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[#F3F5F0] border border-[#8B9A71]/20 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-[#2D3324] hover:bg-[#E3EAE0] transition-all">
              <Chrome size={16} /> Google
            </button>
            <button className="flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[#2D3324] border border-[#2D3324] text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#1a1d14] transition-all">
              <AppleIcon size={15} /> Apple
            </button>
          </div>

          <div className="relative mb-8 flex items-center">
            <div className="flex-1 border-t border-[#2D3324]/10" />
            <span className="mx-4 text-[10px] font-bold text-[#2D3324]/30 uppercase tracking-widest">Or with email</span>
            <div className="flex-1 border-t border-[#2D3324]/10" />
          </div>

          <form className="space-y-4" onSubmit={handleAuth}>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#2D3324]/50 uppercase tracking-widest ml-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2D3324]/30 pointer-events-none" size={18} />
                <input type="email" required placeholder="you@example.com" className="w-full bg-[#F3F5F0] border border-[#8B9A71]/20 rounded-2xl pl-12 pr-4 py-4 text-sm text-[#2D3324] outline-none focus:border-[#8B9A71] focus:bg-white transition-[background-color,border-color] duration-200 placeholder:text-[#2D3324]/30" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#2D3324]/50 uppercase tracking-widest ml-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2D3324]/30 pointer-events-none" size={18} />
                <input type="password" required placeholder="Enter your password" className="w-full bg-[#F3F5F0] border border-[#8B9A71]/20 rounded-2xl pl-12 pr-4 py-4 text-sm text-[#2D3324] outline-none focus:border-[#8B9A71] focus:bg-white transition-[background-color,border-color] duration-200 placeholder:text-[#2D3324]/30" />
              </div>
            </div>

            <div className="flex justify-end">
              <Link to="/auth/forgot-password" className="text-[10px] font-bold text-[#8B9A71] hover:text-[#4E5540] transition-colors uppercase tracking-widest">
                Forgot password?
              </Link>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full bg-[#2D3324] text-white py-5 rounded-2xl flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest shadow-xl hover:bg-[#1a1d14] transition-all active:scale-[0.98]">
                Sign In
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="mt-4 text-center text-[10px] font-medium text-[#2D3324]/50">
              Don't have an account?{" "}
              <Link to="/auth/coach/register" className="text-[#8B9A71] font-bold hover:text-[#2D3324] transition-colors uppercase tracking-widest">
                Register
              </Link>
            </div>
          </form>
        </div>

        <p className="mt-8 text-center text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
          <Lock size={12} />
          End-to-end encrypted · Your data stays private
        </p>
      </div>
    </div>
  );
}
