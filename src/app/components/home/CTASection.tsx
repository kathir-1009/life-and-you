import { Link } from "react-router";

export function CTASection() {
  return (
    <section className="py-24 bg-gold-dark">
       <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          <h3 className="text-3xl md:text-5xl font-bold text-sage-dark font-serif max-w-xl text-center lg:text-left leading-tight">Your first 20 minutes are on us. Ready to start?</h3>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
             <Link 
               to="/book" 
               className="px-12 py-5 bg-sage text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-110 transition-all shadow-2xl shadow-black/30"
             >
               Book Discovery Call
             </Link>
             <Link 
               to="/contact" 
               className="px-12 py-5 bg-white/20 backdrop-blur-md border border-sage/10 text-sage-dark rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/40 transition-all"
             >
               Chat with Us
             </Link>
          </div>
       </div>
    </section>
  );
}
