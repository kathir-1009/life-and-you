import { Link, useParams } from "react-router";
import { ArrowLeft, BookmarkFill, ShareFill, PlayFill, FileEarmarkTextFill, Headphones, Quote } from "react-bootstrap-icons";

export function ClientResourceDetailPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-cream pb-32 portal-context">
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <Link to="/portal/library" className="inline-flex items-center gap-2 text-sage-dark/60 hover:text-sage-dark transition-all mb-12">
           <ArrowLeft size={20} />
           <span className="font-bold text-xs uppercase tracking-widest">Back to Vault</span>
        </Link>
        
        <div className="bg-white rounded-[60px] overflow-hidden border border-sage/10 shadow-2xl">
           <div className="h-96 bg-sage-dark relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <PlayFill size={100} className="text-white/20 group-hover:scale-110 transition-transform" />
              <div className="absolute bottom-10 left-10 flex items-center gap-4">
                 <div className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-widest border border-white/20">
                    Workshop Video
                 </div>
                 <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest">18 Minutes</div>
              </div>
           </div>
           
           <div className="p-12 md:p-16">
              <div className="flex items-center justify-between mb-8">
                 <span className="text-[11px] font-black text-gold-dark uppercase tracking-[0.4em]">Self-Worth & Identity</span>
                 <div className="flex gap-4">
                    <button className="p-3 bg-cream rounded-2xl text-sage-dark hover:bg-sage hover:text-white transition-all"><BookmarkFill size={16} /></button>
                    <button className="p-3 bg-cream rounded-2xl text-sage-dark hover:bg-sage hover:text-white transition-all"><ShareFill size={16} /></button>
                 </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-sage-dark font-serif mb-10 leading-tight uppercase tracking-tight">Understanding the Inner Critic: A Coach's Perspective</h1>
              
              <div className="prose prose-sage max-w-none text-sage-dark/80 font-medium text-lg leading-relaxed space-y-8">
                 <p>In the silence of our own minds, the loudest voice is often the one that tells us we are not enough. This "Inner Critic" is not an enemy, but an overprotective guardian that became misguided. In this deep-dive workshop, we explore the origins of this voice and how to transform it from a critic into a constructive ally.</p>
                 
                 <div className="bg-cream p-10 rounded-[40px] border-l-8 border-gold-dark relative">
                    <Quote className="absolute top-6 right-8 text-gold-dark/20" size={60} />
                    <p className="text-xl font-bold font-serif text-sage-dark italic mb-4">"The inner critic is just a part of you that is trying to keep you safe using the only tools it knows—fear and perfectionism."</p>
                    <span className="text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">— From the Workshop</span>
                 </div>
                 
                 <h4 className="text-2xl font-bold text-sage-dark font-serif uppercase tracking-tight pt-8">Key Breakthroughs in this Module:</h4>
                 <ul className="space-y-4">
                    <li className="flex gap-4">
                       <CheckIcon /> <span>Identifying the specific triggers that activate self-doubt.</span>
                    </li>
                    <li className="flex gap-4">
                       <CheckIcon /> <span>Techniques to lower the volume of the critical voice.</span>
                    </li>
                    <li className="flex gap-4">
                       <CheckIcon /> <span>Practical exercises for self-compassion integration.</span>
                    </li>
                 </ul>
              </div>

              <div className="mt-16 pt-10 border-t border-cream flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center text-sage">
                       <Headphones size={28} />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-sage-dark/40 uppercase tracking-widest mb-1">Related Audio</p>
                       <p className="text-sm font-bold text-sage-dark tracking-tight">Inner Peace Guided Meditation</p>
                    </div>
                 </div>
                 <button className="px-12 py-5 bg-sage-dark text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                    Start Learning
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="w-6 h-6 bg-sage/20 rounded-lg flex items-center justify-center text-sage shrink-0 mt-1">
       <ArrowLeft size={12} className="rotate-180" />
    </div>
  );
}
