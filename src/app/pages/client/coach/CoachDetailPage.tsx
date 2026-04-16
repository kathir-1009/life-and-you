import { Link, useParams } from "react-router";
import { ArrowLeft, PatchCheckFill, StarFill, CardChecklist, PersonWorkspace, ChatQuoteFill, ArrowRight, ShieldFillCheck } from "react-bootstrap-icons";

export function ClientCoachDetailPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-cream pb-32 portal-context">
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <Link to="/portal/browse-coaches" className="inline-flex items-center gap-2 text-sage-dark/60 hover:text-sage-dark transition-all mb-12">
           <ArrowLeft size={20} />
           <span className="font-bold text-xs uppercase tracking-widest">Back to Directory</span>
        </Link>
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
           {/* Left: Bio & Details */}
           <div className="lg:col-span-8 space-y-10">
              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
                 <div className="relative">
                    <div className="w-48 h-48 bg-white rounded-[64px] border border-sage/10 flex items-center justify-center text-sage shadow-2xl font-serif text-6xl font-bold">
                       KS
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-sage rounded-full border-4 border-white flex items-center justify-center text-white shadow-xl">
                       <PatchCheckFill size={24} />
                    </div>
                 </div>
                 
                 <div className="flex-1 pt-4">
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                       <h1 className="text-4xl lg:text-5xl font-bold text-sage-dark font-serif uppercase tracking-tight">Coach Sharma</h1>
                       <div className="px-4 py-1.5 bg-gold-dark/10 text-gold-dark rounded-full text-[10px] font-black uppercase tracking-widest border border-gold-dark/10">
                          Senior Mentor
                       </div>
                    </div>
                    <p className="text-lg text-sage-dark/60 font-medium italic mb-8 max-w-xl">
                       "Specializing in NLP and deep emotional resilience to help you find your center."
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-8">
                       <Metric val="4.9" label="Rating" />
                       <Metric val="124" label="Mentees" />
                       <Metric val="820+" label="Hours" />
                    </div>
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                 <InfoCard icon={PersonWorkspace} title="Philosophy" text="I believe in zero-trace sanctuary healing where identity is protected and breakthroughs are permanent. My method combines classical psychology with modern neuro-linguistics." />
                 <InfoCard icon={CardChecklist} title="Certifications" list={["ICF Professional Certified Coach (PCC)", "NLP Master Practitioner", "Cognitive Behavioral Specialist"]} />
              </div>

              <div className="bg-white p-12 rounded-[60px] border border-sage/10 shadow-sm relative overflow-hidden">
                 <ChatQuoteFill className="absolute top-10 right-12 text-sage/10" size={80} />
                 <h3 className="text-2xl font-bold text-sage-dark font-serif mb-8 uppercase tracking-tight">Mentee Journey</h3>
                 <p className="text-sage-dark/80 text-xl font-medium leading-relaxed italic mb-8 relative z-10">
                    "Walking this path with Coach Sharma was the first time I felt truly seen without being judged. The anonymity allowed me to peel back layers I didn't know existed."
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-cream rounded-full" />
                    <span className="text-[11px] font-black text-gold-dark uppercase tracking-widest">Verified Client Reflection</span>
                 </div>
              </div>
           </div>

           {/* Right: Booking Action */}
           <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-36">
              <div className="bg-sage-dark p-10 rounded-[48px] text-white shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px]" />
                 <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                       <ShieldFillCheck size={20} className="text-gold-dark" />
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Anonymity Guaranteed</span>
                    </div>
                    <h4 className="text-2xl font-bold font-serif mb-4 leading-tight">Secure Your Place.</h4>
                    <p className="text-sm text-white/50 mb-12 font-medium">Limited availability for new 1:1 mentorship journeys this month.</p>
                    <Link 
                      to="/portal/book" 
                      className="w-full py-6 bg-white text-sage-dark rounded-full font-black text-xs uppercase tracking-widest shadow-xl hover:scale-[1.03] transition-all flex items-center justify-center gap-3"
                    >
                       Book Discovery Session <ArrowRight size={16} />
                    </Link>
                 </div>
              </div>
              
              <div className="bg-white p-8 rounded-[40px] border border-sage/10 shadow-sm flex items-center justify-between group cursor-pointer hover:border-sage/40 transition-all">
                 <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black text-sage-dark/40 uppercase tracking-widest">Next Available</span>
                    <span className="text-xs font-bold text-sage-dark">Tomorrow, 10:00 AM</span>
                 </div>
                 <ArrowRight size={20} className="text-sage group-hover:translate-x-2 transition-transform" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ val, label }: { val: string, label: string }) {
  return (
    <div className="flex flex-col gap-1">
       <span className="text-2xl font-bold font-serif text-sage-dark">{val}</span>
       <span className="text-[9px] font-black text-sage-dark/40 uppercase tracking-widest">{label}</span>
    </div>
  );
}

function InfoCard({ icon: Icon, title, text, list }: { icon: any, title: string, text?: string, list?: string[] }) {
  return (
    <div className="bg-white p-8 rounded-[40px] border border-sage/10 shadow-sm">
       <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-cream rounded-xl flex items-center justify-center text-sage">
             <Icon size={20} />
          </div>
          <h4 className="text-base font-bold text-sage-dark font-serif uppercase tracking-tight">{title}</h4>
       </div>
       {text && <p className="text-sm text-sage-dark/60 font-medium leading-relaxed">{text}</p>}
       {list && (
         <ul className="space-y-2">
            {list.map((item, i) => (
              <li key={i} className="text-xs text-sage-dark/80 font-bold flex items-center gap-2">
                 <div className="w-1 h-1 bg-gold-dark rounded-full" />
                 {item}
              </li>
            ))}
         </ul>
       )}
    </div>
  );
}
