import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Shield, Brain, Globe, Heart, ArrowRight, Star, CheckCircle, ChevronRight, User } from "lucide-react";

export function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Life & You - Our Mission & Vision";
  }, []);
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF9F6]">
      {/* High-End Split Hero */}
      <section className="min-h-screen grid lg:grid-cols-2">
        <div className="bg-[#2D3324] px-8 md:px-16 py-24 flex flex-col justify-center relative overflow-hidden">
           {/* Decorative blur */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-[#8B9A71]/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-[80px]" />
           
           <div className="relative z-10">
              <div className="inline-flex items-center gap-3 bg-[#8B9A71]/20 border border-[#8B9A71]/30 rounded-full px-5 py-2 mb-10">
                 <Shield size={14} className="text-[#8B9A71]" />
                 <span className="text-[10px] text-[#CED2BA] font-extrabold uppercase tracking-[0.2em]">Our DNA: Privacy & Certification</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-12">
                 The Art of <br/><span className="text-[#8B9A71]">Safe</span> Space.
              </h1>
              
              <p className="text-lg text-white/70 leading-relaxed mb-16 max-w-[480px] font-medium opacity-80">
                 We are a collective of NLP and ICF certified coaches dedicated to the belief that every transformation begins with silence and security.
              </p>

              <div className="space-y-8 mb-16">
                 {[
                   { icon: Brain, title: "NLP Mastered", desc: "Neuro-Linguistic Programming techniques to recode your inner internal narrative." },
                   { icon: Shield, title: "100% Anonymous", desc: "Participate in sessions without revealing your face or social identity." },
                   { icon: Globe, title: "Global Experts", desc: "ICF certified coaches serving clients from Dubai to London and beyond." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 items-start group">
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#8B9A71] shadow-2xl transition-all group-hover:bg-[#8B9A71] group-hover:text-white">
                         <item.icon size={24} />
                      </div>
                      <div className="flex-1">
                         <h4 className="text-base font-extrabold text-[#CED2BA] mb-2 uppercase tracking-widest">{item.title}</h4>
                         <p className="text-sm text-white/40 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <button 
                onClick={() => navigate("/app/book")}
                className="inline-flex items-center gap-4 px-10 py-5 bg-[#8B9A71] text-white rounded-pill font-extrabold text-sm uppercase tracking-widest shadow-2xl shadow-[#8B9A71]/20 hover:scale-105 transition-all"
              >
                Meet Your Coach <ArrowRight size={18} />
              </button>
           </div>
        </div>

          <div className="bg-[#FAF9F6] p-8 md:p-20 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,154,113,0.05)_0%,_transparent_70%)]" />
             <img src="/img/about/about-img-1.png" alt="Growth Space" className="relative z-10 w-full max-w-lg drop-shadow-[0_32px_64px_rgba(45,51,36,0.15)] rounded-[64px]" />
          </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-32 bg-[#2D3324] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/bg/stat-bg.png')] bg-cover opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { label: "Certified Coaches", val: "200+" },
                { label: "Active Clients", val: "500+" },
                { label: "Breakthrough Sessions", val: "900+" },
                { label: "Success Rate", val: "92%" }
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                   <div className="text-5xl md:text-6xl font-black text-[#8B9A71] mb-4 group-hover:scale-110 transition-transform">
                      {stat.val}
                   </div>
                   <div className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-white/40 group-hover:text-white/60 transition-colors">
                      {stat.label}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-32 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-24">
             <h2 className="text-[11px] font-extrabold text-[#8B9A71] uppercase tracking-[0.4em] mb-4">The Custodians</h2>
             <h3 className="text-4xl md:text-6xl font-black text-[#2D3324]">Certified <span className="text-[#8B9A71]">Experts.</span></h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
             {[
               { name: "Coach Sarah J.", role: "Sr. NLP Expert", tags: ["Anxiety", "Trauma"], img: "account-01.jpg" },
               { name: "Coach Benjamin K.", role: "Founder & ICF Master", tags: ["Purpose", "Performance"], img: "account-02.jpg" },
               { name: "Coach Mia L.", role: "Linguistics Lead", tags: ["Self-Worth", "Identity"], img: "account-05.jpg" }
             ].map((coach, i) => (
               <div key={i} className="bg-white rounded-[64px] overflow-hidden border border-[rgba(139,154,113,0.1)] shadow-premium flex flex-col items-center p-12 hover:scale-[1.02] transition-all group">
                  <div className="w-24 h-24 bg-[#FAF9F6] rounded-[32px] overflow-hidden shadow-xl shadow-[#8B9A71]/10 mb-8 group-hover:scale-110 transition-all border-4 border-white">
                     <img src={`/img/about/${coach.img}`} alt={coach.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-2xl font-black text-[#2D3324] mb-2">{coach.name}</h4>
                  <p className="text-[10px] font-extrabold text-[#8B9A71] uppercase tracking-[0.2em] mb-6">{coach.role}</p>
                  
                  <div className="flex gap-2 mb-10">
                    {coach.tags.map(t => <span key={t} className="text-[8px] font-black uppercase tracking-widest bg-[#F8F9FA] text-[#545454]/60 px-3 py-1.5 rounded-full border border-[rgba(139,154,113,0.05)]">{t}</span>)}
                  </div>
                  
                  <Link to="/app/book" className="w-full bg-[#2D3324] text-white py-5 rounded-pill text-[10px] font-extrabold uppercase tracking-widest text-center shadow-lg hover:bg-[#1C1A1E] transition-all">
                    Book Breakthrough
                  </Link>
               </div>
             ))}
          </div>
        </div>
      </section>


    </div>
  );
}
