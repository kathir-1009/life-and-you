import { Link } from "react-router";
import { ArrowRight, PeopleFill } from "react-bootstrap-icons";

export function CoachWelcomePage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 bg-sage rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl">
        <PeopleFill size={40} />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-sage-dark font-serif mb-6 uppercase tracking-tighter">Become a Mentor.</h1>
      <p className="text-lg text-sage-dark/80 max-w-lg mb-12 font-medium">
        Join our elite circle of ICF-certified coaches and help shape lives in our secure, anonymous sanctuary.
      </p>
      
      <Link 
        to="/coach/onboarding/profile" 
        className="px-12 py-5 bg-sage-dark text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all flex items-center gap-3"
      >
        Start Coach Application <ArrowRight size={18} />
      </Link>
    </div>
  );
}
