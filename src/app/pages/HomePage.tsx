import { useEffect } from "react";
import { Link } from "react-router";
import { Play, ArrowRight, Lock, Shield, Star, Heart, CheckCircle, ArrowUpRight, Globe } from "lucide-react";

export function HomePage() {
  useEffect(() => {
    document.title = "Home | Life & You - Coaching & Consulting";
  }, []);
  return (
    <div className="bg-[#FAF9F6]">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8B9A71]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4E5540]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-3 bg-[#8B9A71]/10 border border-[#8B9A71]/20 rounded-full px-5 py-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Shield size={14} className="text-[#8B9A71]" />
              <span className="text-[10px] font-extrabold text-[#4E5540] uppercase tracking-[0.2em]">100% Anonymous & ICF Certified</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#2D3324] leading-[1.05] mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Be <span className="text-[#8B9A71]">Heard.</span><br />
              Heal Truly.<br />
              Live Well.
            </h1>

            <p className="text-lg md:text-xl text-[#545454] leading-relaxed mb-12 max-w-[520px] font-medium opacity-80 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Premium 1-on-1 coaching that preserves your identity while accelerating your growth. Experience the security of complete anonymity.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-16 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <Link
                to="/app/book"
                className="px-8 py-4 sm:px-10 sm:py-5 bg-[#2D3324] text-white rounded-pill font-bold text-sm uppercase tracking-widest shadow-2xl hover:bg-[#1C1A1E] transition-all active:scale-[0.98] text-center"
              >
                Begin Your Journey
              </Link>
              <button className="px-8 py-4 sm:px-10 sm:py-5 bg-white border border-[rgba(139,154,113,0.15)] text-[#2D3324] rounded-pill font-bold text-sm uppercase tracking-widest hover:bg-[#8B9A71]/5 transition-all flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-[#8B9A71]/10 text-[#8B9A71] rounded-full flex items-center justify-center">
                  <Play size={10} fill="currentColor" />
                </div>
                View Demo
              </button>
            </div>

            <div className="flex gap-8 md:gap-12 pt-12 border-t border-[rgba(139,154,113,0.1)] w-full overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex-shrink-0">
                <div className="text-3xl md:text-4xl font-extrabold text-[#2D3324] tracking-tight">500+</div>
                <div className="text-[10px] font-bold text-[#8B9A71] uppercase tracking-[0.2em] mt-1 whitespace-nowrap">Lives Touched</div>
              </div>
              <div className="flex-shrink-0">
                <div className="text-3xl md:text-4xl font-extrabold text-[#2D3324] tracking-tight">100%</div>
                <div className="text-[10px] font-bold text-[#8B9A71] uppercase tracking-[0.2em] mt-1 whitespace-nowrap">Anonymity</div>
              </div>
              <div className="hidden sm:block flex-shrink-0">
                <div className="text-3xl md:text-4xl font-extrabold text-[#2D3324] tracking-tight">4.9</div>
                <div className="text-[10px] font-bold text-[#8B9A71] uppercase tracking-[0.2em] mt-1 whitespace-nowrap">Top Rating</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000">
             {/* Abstract Premium Geometry */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-br from-[#8B9A71]/10 to-transparent rounded-full blur-[100px] -z-10" />
             
             <div className="relative z-10">
                <img src="/img/banner/banner-img-111.png" alt="App Preview" className="w-full h-auto drop-shadow-2xl translate-x-10" />
             </div>

             <div className="absolute -bottom-20 -left-20 bg-white p-12 rounded-[64px] shadow-premium border border-[rgba(139,154,113,0.05)] z-20">
                <div className="grid grid-cols-2 gap-8">
                   <StatCard icon={Heart} label="Wellness Score" val="92%" color="bg-[#8B9A71]" />
                   <StatCard icon={Shield} label="Privacy" val="Active" color="bg-[#2D3324]" />
                   <div className="col-span-2 bg-[#F8F9FA] rounded-[40px] p-8 flex items-center justify-between">
                      <div>
                         <p className="text-[10px] font-extrabold text-[#545454]/60 uppercase tracking-widest mb-1">Upcoming Session</p>
                         <h4 className="text-xl font-extrabold text-[#2D3324]">Tomorrow, 10 AM</h4>
                      </div>
                      <Link to="/auth" className="w-14 h-14 bg-[#2D3324] rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all">
                        <ArrowUpRight size={24} />
                      </Link>
                   </div>
                </div>
                
                {/* Floating Member Badge */}
                <div className="absolute -top-6 -right-6 bg-[#8B9A71] text-white p-6 rounded-[32px] shadow-2xl rotate-12">
                   <Star size={32} fill="white" />
                   <p className="text-[10px] font-black uppercase tracking-tighter mt-2">Premium Support</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust & Certification Bar */}
      <section className="bg-[#2D3324] py-10 overflow-hidden border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-80">
               {[
                 { icon: Star, label: "4.9/5.0", sub: "Average Rating" },
                 { icon: Shield, label: "NLP Certified", sub: "Mastery Level" },
                 { icon: Globe, label: "ICF Member", sub: "Global Standards" },
                 { icon: Lock, label: "100% Anonymous", sub: "Privacy Promise" }
               ].map((badge, i) => (
                 <div key={i} className="flex items-center gap-4">
                    <badge.icon size={28} className="text-[#8B9A71] stroke-1" />
                    <div>
                       <div className="text-white font-bold text-sm uppercase tracking-widest">{badge.label}</div>
                       <div className="text-[9px] text-white/40 font-bold uppercase tracking-tight">{badge.sub}</div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Modern Treatment Categories */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-16 text-center">
            <h2 className="text-[11px] font-extrabold text-[#8B9A71] uppercase tracking-[0.4em] mb-4">Our Specializations</h2>
            <h3 className="text-4xl md:text-6xl font-black text-[#2D3324]">Tailored <span className="text-[#8B9A71]">Treatments.</span></h3>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 px-6 lg:px-16 scrollbar-hide">
           {[
             { title: "Relationships", desc: "Two Souls, One journey", img: "relationships.png", color: "bg-blue-50/50" },
             { title: "Personal Growth", desc: "Build The Life You Deserve", img: "growth.png", color: "bg-green-50/50" },
             { title: "Marriage Issue", desc: "Two Hearts, One Solution", img: "marriage.png", color: "bg-rose-50/50" },
             { title: "Feeling Lonely", desc: "Smiling Outside, Silent Inside", img: "lonely.png", color: "bg-orange-50/50" },
             { title: "Trauma Recovery", desc: "The Past Hurt, The Future Heals", img: "trauma.png", color: "bg-indigo-50/50" }
           ].map((t, i) => (
             <div key={i} className="min-w-[280px] sm:min-w-[320px] bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 border border-[rgba(139,154,113,0.08)] hover:shadow-premium transition-all group cursor-pointer">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden mb-8 group-hover:scale-110 transition-all ${t.color}`}>
                   <img src={`/img/treatment/${t.img}`} alt={t.title} className="w-full h-full object-cover p-4 sm:p-5 grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#2D3324] mb-2 tracking-tight">{t.title}</h4>
                <p className="text-sm font-medium text-[#545454] opacity-50 mb-8">{t.desc}</p>
                <Link to="/app/book" className="text-[10px] font-bold text-[#8B9A71] uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                   Book Breakthrough <ArrowRight size={14} />
                </Link>
             </div>
           ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-[#2D3324] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[11px] font-bold text-[#8B9A71] uppercase tracking-[0.4em] mb-8">Our Philosophy</h2>
            <p className="text-3xl md:text-5xl font-extrabold leading-tight mb-16 tracking-tight">
              True transformation happens in a <span className="text-[#8B9A71]">Safe Space</span> where judgment is removed and identity is protected.
            </p>
            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { title: "NLP Mastery", desc: "Scientific approach to rewiring thought patterns." },
                 { title: "Pure Anonymity", desc: "Share your soul, not your social status." },
                 { title: "Elite Coaches", desc: "ICF certified experts dedicated to your growth." }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#8B9A71] mb-6">
                       <CheckCircle size={24} className="stroke-1" />
                    </div>
                    <h4 className="text-base font-bold mb-3 uppercase tracking-widest text-[#CED2BA]">{item.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed font-medium">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-end justify-between mb-20">
             <div>
                <h2 className="text-[11px] font-bold text-[#8B9A71] uppercase tracking-[0.3em] mb-4">Select your path</h2>
                <h3 className="text-4xl md:text-6xl font-extrabold text-[#2D3324] tracking-tight">Tailored for <span className="text-[#8B9A71]">You.</span></h3>
             </div>
             <Link to="/programs" className="hidden md:flex items-center gap-3 text-sm font-bold text-[#2D3324] uppercase tracking-widest border-b-2 border-[#8B9A71] pb-1">
               View All Programs <ArrowRight size={18} />
             </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
             {[
               { title: "Discovery Phase", price: "₹2,500", desc: "A single powerful 60-min session to map your barriers.", icon: "🌱" },
               { title: "Healing Journey", price: "₹8,000", desc: "4 sessions + 24/7 chat support for consistent growth.", icon: "🌿", popular: true },
               { title: "Elite Masterclass", price: "₹22,000", desc: "12 sessions, NLP blueprints, and performance mapping.", icon: "💎" }
             ].map((p, i) => (
               <div key={i} className={`p-8 sm:p-10 rounded-[32px] border transition-all hover:scale-[1.03] group ${p.popular ? 'bg-[#2D3324] border-transparent text-white shadow-premium' : 'bg-white border-[rgba(139,154,113,0.08)] text-[#2D3324]'}`}>
                  <div className="text-4xl sm:text-5xl mb-8 transform group-hover:scale-110 transition-all opacity-80">{p.icon}</div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight">{p.title}</h4>
                  <p className={`text-sm mb-10 leading-relaxed opacity-60 font-medium ${p.popular ? 'text-white' : 'text-[#545454]'}`}>{p.desc}</p>
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                     <span className={`text-xl sm:text-2xl font-extrabold tracking-tight ${p.popular ? 'text-[#8B9A71]' : 'text-[#2D3324]'}`}>{p.price}</span>
                     <Link to="/app/book" className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all ${p.popular ? 'bg-[#8B9A71] text-white' : 'bg-[#F8F9FA] text-[#8B9A71]'}`}>
                        <ArrowRight size={20} />
                     </Link>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>


    </div>
  );
}

function StatCard({ icon: Icon, label, val, color }: { icon: any, label: string, val: string, color: string }) {
  return (
    <div className="bg-[#F8F9FA] p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] flex flex-col items-center">
       <div className={`w-12 h-12 sm:w-14 sm:h-14 ${color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-4`}>
          <Icon size={20} className="sm:size-[24px]" />
       </div>
       <p className="text-[9px] sm:text-[10px] font-extrabold text-[#545454] uppercase tracking-widest mb-1">{label}</p>
       <p className="text-xl sm:text-2xl font-black text-[#2D3324]">{val}</p>
    </div>
  );
}
