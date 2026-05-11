import { Link } from "react-router";
import { CheckCircleFill, ArrowRight, ShieldCheck } from "react-bootstrap-icons";

export function CoachOnboardingCompletePage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-xl w-full animate-in fade-in zoom-in duration-1000">
        <div className="w-24 h-24 bg-sage rounded-[40px] flex items-center justify-center text-white mx-auto mb-10 shadow-2xl shadow-sage/30 relative">
          <CheckCircleFill size={48} />
          <div className="absolute -top-2 -right-2 bg-white p-2 rounded-full shadow-lg">
             <ShieldCheck size={20} className="text-sage" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-sage-dark font-serif mb-6 uppercase tracking-tighter">Application Submitted.</h1>
        <p className="text-lg text-sage-dark/70 max-w-md mx-auto mb-12 font-medium leading-relaxed">
          Your profile is now under review by our clinical board. We typically verify all credentials within 24-48 hours.
        </p>

        <div className="bg-white/50 backdrop-blur-xl border border-sage/10 p-8 rounded-[40px] mb-12 text-left space-y-4">
           <h3 className="text-xs font-black text-sage-dark uppercase tracking-widest flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-sage" /> Next Steps
           </h3>
           <ul className="space-y-3">
              <li className="text-[11px] font-bold text-sage-dark/60 uppercase tracking-widest leading-relaxed">
                1. Account verification by our team
              </li>
              <li className="text-[11px] font-bold text-sage-dark/60 uppercase tracking-widest leading-relaxed">
                2. Professional conduct briefing
              </li>
              <li className="text-[11px] font-bold text-sage-dark/60 uppercase tracking-widest leading-relaxed">
                3. Access to your mentor dashboard
              </li>
           </ul>
        </div>
        
        <Link 
          to="/coach" 
          className="px-12 py-6 bg-sage-dark text-white rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-4 mx-auto w-full md:w-auto"
        >
          Go to Dashboard <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
