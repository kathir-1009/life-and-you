import { useEffect } from "react";
import { Link } from "react-router";
import { 
  ArrowRight, 
  ShieldLock, 
  StarFill, 
  Globe2, 
  Lock, 
  Heart, 
  CheckCircle, 
  Phone, 
  CameraVideo, 
  ChatDots, 
  LightningCharge 
} from "react-bootstrap-icons";

export function HomePage() {
  useEffect(() => {
    document.title = "Life & You | NLP & ICF Coaching - UAE & Global";
  }, []);

  return (
    <div className="bg-[#FCF8E8] font-sans-web">
      {/* Hero Section - Super Dimensional Layout */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#99A88C]/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C4A35A]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md border border-[#99A88C]/10 px-5 py-2.5 rounded-full mb-10 shadow-sm">
               <ShieldLock size={16} className="text-[#8A7340]" />
               <span className="text-[10px] font-black text-[#5E6C54] uppercase tracking-[0.3em]">ICF Certified Sanctuary · 100% Private</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-bold text-[#5E6C54] font-serif leading-[0.9] mb-12 tracking-tighter">
              Be <span className="text-[#8A7340] relative">Heard.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#8A7340]/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" /></svg>
              </span><br />
              Heal Anonymously.<br />
              Live Better.
            </h1>
            
            <p className="text-xl lg:text-3xl text-[#5E6C54]/80 font-medium mb-14 max-w-2xl leading-[1.4]">
              Premium wellness coaching that respects your identity. Experience life-changing breakthroughs through our zero-trace anonymous world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-20">
              <Link 
                to="/book" 
                className="px-12 py-6 bg-[#99A88C] text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all text-center"
              >
                Launch Your First Session
              </Link>
              <Link 
                to="/programs" 
                className="px-12 py-6 bg-white border border-[#99A88C]/10 text-[#5E6C54] rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#EDF2EE] transition-all flex items-center justify-center gap-3 group"
              >
                Explore Programs <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual Overlay */}
          <div className="lg:col-span-5 relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
             <div className="absolute inset-0 bg-gradient-to-br from-[#99A88C]/20 to-transparent rounded-[80px] blur-3xl -z-10 scale-110" />
             <div className="relative z-10">
                <div className="bg-[#99A88C] rounded-[60px] p-2 shadow-2xl overflow-hidden aspect-[4/5]">
                  <img 
                    src="/img/banner/banner-img-111.png" 
                    alt="Sanctuary Session" 
                    className="w-full h-full object-cover rounded-[54px] opacity-90 hover:scale-105 transition-transform duration-700" 
                  />
                </div>
             </div>
             
             {/* Dynamic Floaties */}
             <div className="absolute -bottom-12 -left-12 bg-white/80 backdrop-blur-2xl p-8 rounded-[40px] shadow-2xl border border-white z-20 max-w-xs animate-bounce-slow">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-14 h-14 bg-[#99A88C] rounded-2xl flex items-center justify-center text-[#8A7340] shadow-lg">
                      <Lock size={28} />
                   </div>
                   <div>
                      <h4 className="font-black text-[#5E6C54] text-sm uppercase tracking-tight">Pure Privacy</h4>
                      <p className="text-[10px] font-black text-[#8A7340] uppercase tracking-widest">Identity Shield Active</p>
                   </div>
                </div>
                <p className="text-xs text-[#5E6C54]/70 font-bold leading-relaxed italic">
                  "The first platform where I felt safe being truly honest."
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* The 3-Step Process - Highly Responsive */}
      <section className="py-32 bg-white">
         <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-[#5E6C54] font-serif mb-24">Simple Path to <span className="text-[#8A7340]">Peace.</span></h2>
            
            <div className="grid lg:grid-cols-3 gap-16 relative">
               {/* Connecting Line (Desktop) */}
               <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#99A88C]/10 to-transparent -translate-y-1/2 hidden lg:block" />
               
               <ProcessStep 
                 num="01" 
                 icon={Phone} 
                 title="Choose Partner" 
                 desc="Select from our ICF-certified experts based on your specific life goals and energy." 
               />
               <ProcessStep 
                 num="02" 
                 icon={CameraVideo} 
                 title="Secure Stream" 
                 desc="Enter your one-click sanctuary room. No downloads, no records, just a safe stream." 
               />
               <ProcessStep 
                 num="03" 
                 icon={LightningCharge} 
                 title="Transform" 
                 desc="Experience breakthroughs using world-class NLP and coaching methodologies." 
               />
            </div>
         </div>
      </section>

      {/* Programs Cards - Modern Grid */}
      <section className="py-32 bg-[#FCF8E8]">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
               <div className="max-w-2xl">
                  <span className="text-[10px] font-black text-[#8A7340] uppercase tracking-[0.4em] mb-4 block">Our Offerings</span>
                  <h2 className="text-4xl md:text-6xl font-bold text-[#5E6C54] font-serif">Tailored Growth <span className="text-[#8A7340]">Programs.</span></h2>
               </div>
               <Link to="/programs" className="px-8 py-4 bg-white border border-[#99A88C]/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-sm hover:scale-105 transition-all">
                  View Full Catalog
               </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               <ProgramCard 
                 title="Discovery Call" 
                 desc="Uncover the root of your barriers in a high-impact session."
                 price="AED 399"
               />
               <ProgramCard 
                 title="The Moon Path" 
                 desc="4 structured sessions + WhatsApp support for deep habit shifts."
                 price="AED 1,499"
                 featured={true}
               />
               <ProgramCard 
                 title="Elite 3 Months" 
                 desc="Total life transformation package for high-stakes performers."
                 price="AED 3,999"
               />
            </div>
         </div>
      </section>

      {/* Testimonials - Cinematic Dark */}
      <section className="py-40 bg-[#99A88C] relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8A7340] rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
         </div>
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl mb-24">
               <h2 className="text-4xl md:text-6xl font-bold text-white font-serif leading-tight">Shared Truths from the <span className="text-[#8A7340]">Sanctuary.</span></h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
               <BigTestimonial 
                 quote="The coaching was life-changing. I felt safe and heard for the first time in a decade. Being able to remain anonymous was the barrier that finally broke down for me."
                 author="CEO, Dubai Tech Firm"
               />
               <div className="space-y-8">
                  <SmallTestimonial quote="Total anonymity allowed me to be vulnerable without any fear of reputation." />
                  <SmallTestimonial quote="Coach Sharma helped me navigate my career transition with total clarity and focus." />
                  <SmallTestimonial quote="A first-class experience from onboarding to the final breakthrough session." />
               </div>
            </div>
         </div>
      </section>
      
      {/* Dynamic CTA */}
      <section className="py-24 bg-[#8A7340]">
         <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
            <h3 className="text-3xl md:text-5xl font-bold text-[#5E6C54] font-serif max-w-xl text-center lg:text-left leading-tight">Your first 20 minutes are on us. Ready to start?</h3>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
               <Link 
                 to="/book" 
                 className="px-12 py-5 bg-[#99A88C] text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-110 transition-all shadow-2xl shadow-black/30"
               >
                 Book Discovery Call
               </Link>
               <Link 
                 to="/contact" 
                 className="px-12 py-5 bg-white/20 backdrop-blur-md border border-[#99A88C]/10 text-[#5E6C54] rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/40 transition-all"
               >
                 Chat with Us
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}

function ProcessStep({ num, icon: Icon, title, desc }: { num: string, icon: any, title: string, desc: string }) {
  return (
    <div className="relative z-10 group">
       <div className="w-24 h-24 bg-[#FCF8E8] rounded-[32px] mx-auto mb-10 flex items-center justify-center text-[#5E6C54] shadow-xl group-hover:bg-[#99A88C] group-hover:text-white transition-all duration-500">
          <Icon size={32} />
          <div className="absolute -top-4 right-0 w-10 h-10 bg-[#8A7340] rounded-full flex items-center justify-center text-[#5E6C54] text-xs font-black shadow-lg">
             {num}
          </div>
       </div>
       <h4 className="text-2xl font-bold text-[#5E6C54] font-serif mb-4 uppercase tracking-tight">{title}</h4>
       <p className="text-sm font-medium text-[#5E6C54]/60 leading-relaxed max-w-xs mx-auto">{desc}</p>
    </div>
  );
}

function ProgramCard({ title, desc, price, featured = false }: { title: string, desc: string, price: string, featured?: boolean }) {
  return (
    <div className={`p-10 lg:p-14 rounded-[48px] border transition-all hover:-translate-y-4 group ${
      featured 
        ? 'bg-[#4A5D4E] border-transparent text-white shadow-[0_40px_80px_rgba(0,0,0,0.2)]' 
        : 'bg-white border-[#A3B18A]/10 text-[#A3B18A] shadow-sm'
    }`}>
       <h4 className="text-3xl lg:text-4xl font-bold mb-6 font-serif uppercase tracking-tight leading-tight">{title}</h4>
       <p className={`text-base lg:text-lg font-medium mb-16 leading-relaxed ${featured ? 'text-white/60' : 'text-[#4A5D4E]/60'}`}>
         {desc}
       </p>
       <div className="flex items-center justify-between pt-10 border-t border-current opacity-20 group-hover:opacity-100 transition-opacity">
          <span className="text-3xl font-black font-serif">{price}</span>
          <div className="w-12 h-12 rounded-2xl bg-current/5 flex items-center justify-center">
            <ArrowRight size={24} className={featured ? 'text-[#8A7340]' : 'text-[#5E6C54]'} />
          </div>
       </div>
    </div>
  );
}

function BigTestimonial({ quote, author }: { quote: string, author: string }) {
  return (
    <div className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[60px]">
       <div className="flex gap-1 mb-10">
          {[1,2,3,4,5].map(i => <StarFill key={i} size={18} className="text-[#8A7340]" />)}
       </div>
       <p className="text-3xl text-white font-serif italic mb-12 leading-tight">"{quote}"</p>
       <div className="flex items-center gap-4">
          <div className="w-12 h-1 bg-[#8A7340] rounded-full" />
          <span className="text-xs font-black text-[#8A7340] uppercase tracking-widest">{author}</span>
       </div>
    </div>
  );
}

function SmallTestimonial({ quote }: { quote: string }) {
  return (
    <div className="p-8 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-colors">
       <p className="text-lg text-white/80 font-medium italic">"{quote}"</p>
    </div>
  );
}
