import { Link } from "react-router";
import { ArrowRight, ShieldLock, Lock } from "react-bootstrap-icons";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-sage/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-7 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md border border-sage/10 px-5 py-2.5 rounded-full mb-10 shadow-sm">
             <ShieldLock size={16} className="text-gold-dark" />
             <span className="text-[10px] font-black text-sage-dark uppercase tracking-[0.3em]">ICF Certified Sanctuary · 100% Private</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-bold text-sage-dark font-serif leading-[0.9] mb-12 tracking-tighter">
            Be <span className="text-gold-dark relative">Heard.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-gold-dark/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" /></svg>
            </span><br />
            Heal Anonymously.<br />
            Live Better.
          </h1>
          
          <p className="text-xl lg:text-3xl text-sage-dark/80 font-medium mb-14 max-w-2xl leading-[1.4]">
            Premium wellness coaching that respects your identity. Experience life-changing breakthroughs through our zero-trace anonymous world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <Link 
              to="/book" 
              className="px-12 py-6 bg-sage text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all text-center"
            >
              Launch Your First Session
            </Link>
            <Link 
              to="/programs" 
              className="px-12 py-6 bg-white border border-sage/10 text-sage-dark rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-sage-light transition-all flex items-center justify-center gap-3 group"
            >
              Explore Programs <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Visual Overlay */}
        <div className="lg:col-span-5 relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
           <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-transparent rounded-[80px] blur-3xl -z-10 scale-110" />
           <div className="relative z-10">
              <div className="bg-sage rounded-[60px] p-2 shadow-2xl overflow-hidden aspect-[4/5] relative">
                <img 
                  src="/img/banner/banner-img-111.png" 
                  alt="Sanctuary Session" 
                  className="w-full h-full object-cover rounded-[54px] opacity-90 hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/30 to-transparent pointer-events-none" />
              </div>
           </div>
           
           {/* Dynamic Floaties */}
           <div className="absolute -bottom-12 -left-12 bg-white/80 backdrop-blur-2xl p-8 rounded-[40px] shadow-2xl border border-white z-20 max-w-xs animate-in slide-in-from-bottom-10 duration-1000 delay-500">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-14 h-14 bg-sage rounded-2xl flex items-center justify-center text-gold-dark shadow-lg">
                    <Lock size={28} />
                 </div>
                 <div>
                    <h4 className="font-black text-sage-dark text-sm uppercase tracking-tight">Pure Privacy</h4>
                    <p className="text-[10px] font-black text-gold-dark uppercase tracking-widest">Identity Shield Active</p>
                 </div>
              </div>
              <p className="text-xs text-sage-dark/70 font-bold leading-relaxed italic">
                "The first platform where I felt safe being truly honest."
              </p>
           </div>

           <div className="absolute top-1/4 -right-12 bg-gold text-sage-dark p-6 rounded-[32px] shadow-2xl border border-white/20 z-20 animate-in slide-in-from-right-10 duration-1000 delay-700">
              <div className="flex items-center gap-3">
                 <div className="w-3 h-3 bg-sage-dark rounded-full animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em]">124 Active Sessions</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
