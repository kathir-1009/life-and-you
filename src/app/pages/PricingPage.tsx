import { useEffect } from "react";
import { Link } from "react-router";
import { Check, ArrowRight, ShieldCheck, CreditCard, Sparkles, HelpCircle, ArrowUpRight } from "lucide-react";

export function PricingPage() {
  useEffect(() => {
    document.title = "Pricing & Plans | Life & You - Invest in Your Growth";
  }, []);
  const plans = [
    {
      name: "Single Step",
      price: "₹2,500",
      period: "per session",
      desc: "Ideal for immediate breakthroughs or situational guidance.",
      features: [
        "60-minute deep dive session",
        "Complete anonymity assured",
        "NLP-integrated framework",
        "Post-session summary report",
      ],
      cta: "Book Trial",
      color: "border-[rgba(139,154,113,0.1)]",
    },
    {
      name: "The Healing Pack",
      price: "₹8,000",
      period: "per month",
      desc: "Our hallmark program for consistent, lasting mental shifts.",
      features: [
        "4 Sessions every month",
        "Full Client Portal access",
        "Priority 24/7 chat support",
        "Resource library included",
        "Custom roadmap reports",
      ],
      cta: "Secure Spot",
      popular: true,
      color: "border-[#8B9A71] bg-[#2D3324]",
    },
    {
      name: "Breakthrough Quest",
      price: "₹22,000",
      period: "3-month journey",
      desc: "Full immersion into personal mastery and cognitive rewiring.",
      features: [
        "12 Sessions total",
        "Personalized NLP blueprint",
        "Life-mapping diagnostics",
        "Performance optimization",
        "Lifetime portal access",
      ],
      cta: "Begin Quest",
      color: "border-[rgba(139,154,113,0.1)]",
    },
  ];

  return (
    <div className="bg-[#FAF9F6]">
      {/* Cinematic Pricing Header */}
      <section className="bg-[#2D3324] py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B9A71]/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-[120px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 bg-[#8B9A71]/20 border border-[#8B9A71]/30 rounded-full px-5 py-2 mb-8">
            <Sparkles size={14} className="text-[#8B9A71]" />
            <span className="text-[10px] text-[#CED2BA] font-extrabold uppercase tracking-[0.2em]">Transparent & Secure</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Invest in your <br/><span className="text-[#8B9A71]">Peace of Mind.</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
            Premium coaching architecture built for anonymity and impact. No hidden costs, just profound transformation.
          </p>
        </div>
      </section>

      {/* Pricing Modules */}
      <section className="py-32 -mt-20 px-6 relative z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-[32px] p-12 border transition-all hover:scale-[1.02] active:scale-[0.98] flex flex-col ${
                plan.popular 
                  ? "bg-[#2D3324] border-transparent shadow-premium text-white z-10" 
                  : "bg-white border-[rgba(139,154,113,0.15)] text-[#2D3324] shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#8B9A71] text-white text-[10px] font-bold px-8 py-2.5 rounded-full tracking-[0.25em] uppercase shadow-xl">
                  Most Selected
                </div>
              )}

              <div className="mb-10">
                <h3 className={`text-2xl font-bold mb-4 tracking-tight ${plan.popular ? 'text-white' : 'text-[#2D3324]'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className={`text-4xl md:text-5xl font-extrabold tracking-tight ${plan.popular ? 'text-[#8B9A71]' : 'text-[#2D3324]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-[11px] font-bold uppercase tracking-widest opacity-60 ${plan.popular ? 'text-white' : 'text-[#545454]'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed font-medium opacity-80 ${plan.popular ? 'text-white/70' : 'text-[#545454]'}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="space-y-5 mb-12 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-[#8B9A71]/20 text-[#8B9A71]' : 'bg-[#F8F9FA] text-[#8B9A71]'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-xs font-bold leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/app/book"
                className={`w-full py-5 rounded-pill flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${
                  plan.popular
                    ? "bg-[#8B9A71] text-white shadow-2xl hover:bg-[#A9B891]"
                    : "bg-[#2D3324] text-white hover:bg-[#1C1A1E] shadow-xl"
                }`}
              >
                {plan.cta}
                <ArrowUpRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & FAQ Snapshot */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
             <div className="flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8B9A71]/10 rounded-[28px] text-[#8B9A71] mb-6">
                   <HelpCircle size={32} />
                </div>
                <h2 className="text-3xl font-black text-[#2D3324] mb-8">Common Inquiries</h2>
                <div className="space-y-10">
                   <FAQItem 
                      q="Can I maintain full anonymity?" 
                      a="Always. Our infrastructure is built for pseudo-anonymous interaction. No camera, no full names, no tracking — unless you prefer otherwise."
                   />
                   <FAQItem 
                      q="How does onboarding work?" 
                      a="After selection, you'll complete a 2-minute digital session mapping your goals, followed by instant access to your private locker and coach."
                   />
                </div>
             </div>
             
             <div className="w-full md:w-80 bg-[#2D3324] p-10 rounded-[32px] text-white relative overflow-hidden shadow-premium group border border-white/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B9A71]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <h4 className="text-xl font-bold mb-4 tracking-tight">Secure Payment</h4>
                <p className="text-[13px] text-white/40 leading-relaxed mb-8 font-medium">We support encrypted cards, UPI, and international banking wires. Your transaction is discreet.</p>
                <div className="flex gap-3 mb-8">
                   <CreditCard size={20} className="text-[#8B9A71] stroke-1" />
                   <ShieldCheck size={20} className="text-[#8B9A71] stroke-1" />
                </div>
                <Link to="/contact" className="text-[11px] font-bold uppercase tracking-widest text-[#8B9A71] hover:text-white transition-all flex items-center gap-2">Custom Package <ArrowRight size={14} /></Link>
             </div>
          </div>
        </div>
      </section>


    </div>
  );
}

function FAQItem({ q, a }: { q: string, a: string }) {
  return (
    <div className="group cursor-default">
       <h4 className="text-lg font-extrabold text-[#2D3324] mb-3 flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-[#8B9A71] rounded-full" />
          {q}
       </h4>
       <p className="text-sm text-[#545454] leading-relaxed font-medium opacity-80 pl-4">{a}</p>
    </div>
  );
}
