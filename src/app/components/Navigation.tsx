import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, ShieldCheck, User, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const status = sessionStorage.getItem("portal_access") === "true";
    setIsLoggedIn(status);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/programs", label: "Programs" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Cinematic Announcement Bar */}
      <div className="bg-[#2D3324] py-2.5 text-center text-[9px] md:text-[10px] text-[#CED2BA] tracking-[0.4em] font-black uppercase px-4 border-b border-white/5 relative z-50">
        ✦ Safe Space · Certified NLP & ICF Coaching · Anonymous ✦
      </div>
      
      <nav className="bg-white/95 backdrop-blur-xl border-b border-[rgba(139,154,113,0.1)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
               <div className="w-10 h-10 bg-transparent flex items-center justify-center group-hover:scale-110 transition-all">
                  <img src="/img/Lifeandyou-logo-1.png" alt="Life & You" className="w-full h-full object-contain" />
               </div>
               <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-[#2D3324] leading-none tracking-tight">Life & You</span>
                  <span className="text-[9px] font-bold text-[#8B9A71] uppercase tracking-[0.2em] mt-1 opacity-80">Coaching & Consulting</span>
               </div>
          </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-2 rounded-full text-[10.5px] font-bold uppercase tracking-[0.15em] transition-all ${
                    isActive(link.path)
                      ? "bg-[#8B9A71]/10 text-[#2D3324]"
                      : "text-[#545454]/80 hover:text-[#8B9A71] hover:bg-[#8B9A71]/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {isLoggedIn ? (
                <Link
                  to="/app/dashboard"
                  className="flex items-center gap-3 px-6 py-3 bg-[#2D3324] text-white rounded-pill text-[10px] font-bold uppercase tracking-widest shadow-xl hover:bg-black transition-all"
                >
                  <User size={16} />
                   My Dashboard
                </Link>
              ) : (
                <>
                  <button 
                    onClick={() => navigate("/splash")}
                    className="text-[10px] font-bold uppercase tracking-widest text-[#545454] hover:text-[#2D3324] transition-all px-4"
                  >
                    Portal Access
                  </button>
                  <Link
                    to="/app/book"
                    className="flex items-center gap-3 px-6 py-3 bg-[#8B9A71] text-white rounded-pill text-[10px] font-bold uppercase tracking-widest shadow-xl hover:opacity-90 transition-all"
                  >
                    Book Session <ArrowRight size={14} />
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center text-[#2D3324] bg-[#F8F9FA] rounded-2xl"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-10 border-t border-[rgba(139,154,113,0.1)] animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center justify-between ${
                      isActive(link.path)
                        ? "bg-[#8B9A71] text-white shadow-lg"
                        : "bg-[#F8F9FA] text-[#2D3324]"
                    }`}
                  >
                    {link.label}
                    <ArrowRight size={14} className="opacity-40" />
                  </Link>
                ))}
                
                <div className="pt-6 grid grid-cols-1 gap-4">
                  {isLoggedIn ? (
                    <Link
                      to="/app/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-6 py-5 text-[11px] font-black text-center text-white bg-[#2D3324] rounded-pill uppercase tracking-widest"
                    >
                      Enter Portal
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => { setMobileMenuOpen(false); navigate("/splash"); }}
                        className="px-6 py-5 text-[11px] font-black text-center text-[#2D3324] bg-[#F8F9FA] rounded-pill uppercase tracking-widest"
                      >
                        Sign In
                      </button>
                      <Link
                        to="/app/book"
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-6 py-5 text-[11px] font-black text-center text-white bg-[#8B9A71] rounded-pill uppercase tracking-widest shadow-xl"
                      >
                        Book Now
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
