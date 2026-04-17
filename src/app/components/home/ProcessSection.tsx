import { Phone, CameraVideo, LightningCharge } from "react-bootstrap-icons";

export function ProcessSection() {
  return (
    <section className="py-32 bg-white">
       <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-sage-dark font-serif mb-24">Simple Path to <span className="text-gold-dark">Peace.</span></h2>
          
          <div className="grid lg:grid-cols-3 gap-16 relative">
             {/* Connecting Line (Desktop) */}
             <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sage/10 to-transparent -translate-y-1/2 hidden lg:block" />
             
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
  );
}

function ProcessStep({ num, icon: Icon, title, desc }: { num: string, icon: any, title: string, desc: string }) {
  return (
    <div className="relative z-10 group">
       <div className="w-24 h-24 bg-cream rounded-[32px] mx-auto mb-10 flex items-center justify-center text-sage-dark shadow-xl group-hover:bg-sage group-hover:text-white transition-all duration-500">
          <Icon size={32} />
          <div className="absolute -top-4 right-0 w-10 h-10 bg-gold-dark rounded-full flex items-center justify-center text-sage-dark text-xs font-black shadow-lg">
             {num}
          </div>
       </div>
       <h4 className="text-2xl font-bold text-sage-dark font-serif mb-4 uppercase tracking-tight">{title}</h4>
       <p className="text-sm font-medium text-sage-dark/60 leading-relaxed max-w-xs mx-auto">{desc}</p>
    </div>
  );
}
