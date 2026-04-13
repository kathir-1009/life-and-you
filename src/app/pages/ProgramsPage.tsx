import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, Sparkles, Target, Compass, Zap, MessageCircle } from "lucide-react";

export function ProgramsPage() {
  useEffect(() => {
    document.title = "Our Programs | Life & You - Specialized Cognitive Care";
  }, []);
  const programs = [
    {
      icon: Target,
      title: "Sole 60",
      desc: "Ideal for immediate breakthroughs. Focused, impactful, and tailored to gain clarity and momentum.",
      price: "₹2,500",
      sessions: "60 mins · 1 Session",
      badge: "Discovery",
      color: "bg-[#8B9A71]",
    },
    {
      icon: Compass,
      title: "3 Plus",
      desc: "Designed to spark action around focused challenges. Offers a powerful space to shift what’s holding you back.",
      price: "₹8,000",
      sessions: "3 Sessions · 60m ea.",
      badge: "Strategic",
      isNew: true,
      color: "bg-[#2D3324]",
    },
    {
      icon: Zap,
      title: "6 Pro",
      desc: "Our most recommended format for lasting change. Unpack complex patterns and rewire limiting beliefs.",
      price: "₹15,000",
      sessions: "6 Sessions · 90m ea.",
      badge: "Transformation",
      color: "bg-[#2D3324]",
    },
    {
      icon: MessageCircle,
      title: "Elite Quest",
      desc: "A comprehensive 3-month journey featuring deep NLP blueprinting and proactive mapping.",
      price: "₹25,000",
      sessions: "12 Sessions Total",
      badge: "Mastery",
      color: "bg-[#8B9A71]",
    },
  ];

  return (
    <div className="bg-[#FAF9F6]">
      {/* Premium Programs Header */}
      <section className="bg-[#2D3324] py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,154,113,0.05)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 bg-[#8B9A71]/20 border border-[#8B9A71]/30 rounded-full px-5 py-2 mb-10">
            <Sparkles size={14} className="text-[#8B9A71]" />
            <span className="text-[10px] text-[#CED2BA] font-extrabold uppercase tracking-[0.2em]">Curated Growth Frameworks</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Architect your <br/><span className="text-[#8B9A71]">New Reality.</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium opacity-70 leading-relaxed">
            Every program is a unique blueprint. Select the intensity that matches your current appetite for transformation.
          </p>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-32 -mt-12 px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {programs.map((program, i) => (
              <div
                key={i}
                className="group rounded-[48px] bg-white border border-[rgba(139,154,113,0.08)] p-10 shadow-sm hover:shadow-premium transition-all hover:scale-[1.02] flex flex-col h-full overflow-hidden relative"
              >
                {/* Visual Anchor */}
                <div className={`w-16 h-16 ${program.color} rounded-[24px] flex items-center justify-center text-white mb-10 shadow-lg group-hover:scale-110 transition-transform`}>
                   <program.icon size={28} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                     <span className="text-[9px] font-black text-[#8B9A71] uppercase tracking-[0.2em]">{program.badge}</span>
                     {program.isNew && <div className="w-1.5 h-1.5 bg-[#8B9A71] rounded-full" />}
                  </div>

                  <h3 className="text-2xl font-black text-[#2D3324] mb-4 leading-tight group-hover:text-[#8B9A71] transition-colors line-clamp-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-[#545454] leading-relaxed font-bold opacity-60 mb-10">
                    {program.desc}
                  </p>
                </div>

                <div className="pt-8 border-t border-[rgba(139,154,113,0.05)] mt-auto flex items-end justify-between">
                   <div>
                      <div className="text-3xl font-black text-[#2D3324]">{program.price}</div>
                      <div className="text-[10px] font-black text-[#8B9A71] uppercase tracking-[0.1em] mt-1">{program.sessions}</div>
                   </div>
                   <Link
                      to="/app/book"
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${program.color === 'bg-[#2D3324]' ? 'bg-[#2D3324] text-white' : 'bg-[#F8F9FA] text-[#8B9A71]'}`}
                    >
                      <ArrowRight size={20} />
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Impact */}
      <section className="py-32 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-20">
              <h2 className="text-[11px] font-extrabold text-[#8B9A71] uppercase tracking-[0.4em] mb-4">Mission & Impact</h2>
              <h3 className="text-4xl md:text-6xl font-black text-[#2D3324]">Transformation <span className="text-[#8B9A71]">DNA.</span></h3>
           </div>
           
           <div className="grid md:grid-cols-3 gap-10">
              {[
                { step: "01", title: "Inspire", desc: "Empower clients to dream beyond limits through shared experiences and real stories." },
                { step: "02", title: "Connect", desc: "Create meaningful coach–client bonds built on trust, empathy, and shared goals." },
                { step: "03", title: "Transform", desc: "Turn guidance into growth by helpings individual strengths and overcoming challenges." }
              ].map((m, i) => (
                <div key={i} className="bg-white p-12 rounded-[64px] shadow-sm hover:shadow-xl transition-all border border-[rgba(139,154,113,0.05)]">
                   <div className="text-5xl font-black text-[#8B9A71]/20 mb-8">{m.step}</div>
                   <h4 className="text-2xl font-black text-[#2D3324] mb-4">{m.title}</h4>
                   <p className="text-sm text-[#545454] leading-relaxed font-medium opacity-70">{m.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Quote Summary */}
      <section className="py-32 bg-[#2D3324] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h4 className="text-[11px] font-extrabold text-[#8B9A71] uppercase tracking-[0.4em] mb-12">Universal Protocol</h4>
           <blockquote className="text-3xl md:text-5xl font-black italic opacity-90 leading-tight">
             "The greatest barrier to growth is the fear of being seen before being healed."
           </blockquote>
        </div>
      </section>


    </div>
  );
}
