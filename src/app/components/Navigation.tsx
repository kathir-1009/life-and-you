import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, ShieldCheck, User, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { role } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const status = sessionStorage.getItem("portal_access") === "true";
    setIsLoggedIn(status);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About" },
    { path: "/programs", label: "Programs" },
    { path: "/book", label: "Book a Session", badge: "NEW" },
    { path: "/resources", label: "Resources", badge: "NEW" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
  ];

  const getPortalPath = () => {
    if (role === 'admin') return "/admin";
    if (role === 'coach') return "/coach";
    return "/portal";
  };

  return (
    <>
      {/* Cinematic Announcement Bar */}
      <div className="bg-[#99A88C] py-2.5 text-center text-[10px] text-[#B5C4BA] tracking-[0.25em] font-bold uppercase px-4 border-b border-white/5 relative z-[60]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 overflow-hidden whitespace-nowrap">
          <span>NLP Certified & ICF Member</span>
          <span className="opacity-30">•</span>
          <span className="text-[#C4A35A]">100% Anonymous Coaching</span>
          <span className="opacity-30">•</span>
          <span>Free Discovery Calls Available</span>
        </div>
      </div>
      
      <nav className="bg-white/95 backdrop-blur-xl border-b border-[#99A88C]/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
               <div className="w-10 h-10">
                  <img src="/img/Lifeandyou-logo-1.png" alt="Life & You" className="w-full h-full object-contain" />
               </div>
               <div className="flex flex-col">
                  <span className="text-xl font-bold text-[#99A88C] leading-none tracking-tight font-serif">Life & You</span>
                  <span className="text-[10px] font-bold text-[#C4A35A] uppercase tracking-[0.1em] mt-1">UAE & Global</span>
               </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                    isActive(link.path)
                      ? "text-[#99A88C] bg-[#EDF2EE]"
                      : "text-[#99A88C]/60 hover:text-[#99A88C] hover:bg-[#FCF8E8]"
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="px-1.5 py-0.5 bg-[#C4A35A] text-[#99A88C] text-[8px] font-black rounded tracking-tighter shrink-0">{link.badge}</span>
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
              {isLoggedIn ? (
                <Link
                  to={getPortalPath()}
                  className="flex items-center gap-2 px-6 py-2.5 bg-[#99A88C] text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-black/10 hover:bg-[#99A88C] transition-all"
                >
                   Enter Portal <ArrowRight size={14} />
                </Link>
              ) : (
                <div className="flex items-center gap-4">
                  <Link 
                    to="/auth/login"
                    className="text-[11px] font-bold uppercase tracking-widest text-[#99A88C] hover:text-[#C4A35A] transition-all"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/book"
                    className="px-7 py-2.5 bg-[#99A88C] text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-[#99A88C]/20 hover:bg-[#99A88C] transition-all"
                  >
                    Book Now
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#99A88C]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-[#99A88C]/5 py-8 animate-in slide-in-from-top-4 duration-300">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-6 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center justify-between ${
                      isActive(link.path)
                        ? "bg-[#99A88C] text-white shadow-lg shadow-[#99A88C]/20"
                        : "bg-[#FCF8E8] text-[#99A88C]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                       {link.label}
                       {link.badge && <span className="bg-[#C4A35A] text-[#99A88C] text-[8px] px-1 rounded">{link.badge}</span>}
                    </div>
                    <ArrowRight size={14} className="opacity-40" />
                  </Link>
                ))}
                
                <div className="pt-4 grid grid-cols-2 gap-4">
                  {isLoggedIn ? (
                    <Link
                      to={getPortalPath()}
                      onClick={() => setMobileMenuOpen(false)}
                      className="col-span-2 px-6 py-4 text-xs font-bold text-center text-white bg-[#99A88C] rounded-2xl uppercase tracking-widest"
                    >
                      Go to Dashboard
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="/auth/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-6 py-4 text-xs font-bold text-center text-[#99A88C] bg-white border border-[#99A88C]/10 rounded-2xl uppercase tracking-widest"
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/book"
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-6 py-4 text-xs font-bold text-center text-white bg-[#99A88C] rounded-2xl uppercase tracking-widest shadow-lg shadow-[#99A88C]/20"
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
