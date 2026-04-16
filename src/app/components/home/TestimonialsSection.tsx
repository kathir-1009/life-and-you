import { StarFill } from "react-bootstrap-icons";

export function TestimonialsSection() {
  return (
    <section className="py-40 bg-sage relative overflow-hidden">
       <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-dark rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
       </div>
       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-24">
             <h2 className="text-4xl md:text-6xl font-bold text-white font-serif leading-tight">Shared Truths from the <span className="text-gold-dark">Sanctuary.</span></h2>
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
  );
}

function BigTestimonial({ quote, author }: { quote: string, author: string }) {
  return (
    <div className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[60px]">
       <div className="flex gap-1 mb-10">
          {[1,2,3,4,5].map(i => <StarFill key={i} size={18} className="text-gold-dark" />)}
       </div>
       <p className="text-3xl text-white font-serif italic mb-12 leading-tight">"{quote}"</p>
       <div className="flex items-center gap-4">
          <div className="w-12 h-1 bg-gold-dark rounded-full" />
          <span className="text-xs font-black text-gold-dark uppercase tracking-widest">{author}</span>
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
