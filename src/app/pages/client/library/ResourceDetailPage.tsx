import { Link, useParams, useNavigate } from "react-router";
import { ArrowLeft, BookmarkFill, ShareFill, PlayFill, Headphones, Quote, ChevronLeft, ArrowRight } from "react-bootstrap-icons";

export function ClientResourceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F4F7FA] pb-32 portal-context animate-in fade-in duration-700">
      
      {/* ── Mobile Header ── */}
      <div className="relative lg:hidden">
        <div className="bg-[#2D3324] pt-24 pb-20 px-6 rounded-b-[64px] relative overflow-hidden text-center shadow-xl z-10 flex flex-col items-center">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
           <button
             onClick={() => navigate('/portal/library')}
             className="absolute top-8 left-5 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/10 active:scale-95 transition-all z-20"
           >
             <ChevronLeft size={20} />
           </button>
           <h1 className="text-2xl font-black tracking-tight text-white font-serif italic uppercase relative z-20">Resource Vault</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 lg:px-6 relative z-20 -mt-12 lg:mt-12">
        
        {/* Desktop Back Link */}
        <Link to="/portal/library" className="hidden lg:inline-flex items-center gap-3 text-[#2D3324]/50 hover:text-[#2D3324] transition-all mb-12 group">
           <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-[#8B9A71]/10 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
              <ArrowLeft size={16} />
           </div>
           <span className="font-black text-[10px] uppercase tracking-widest">Back to Vault</span>
        </Link>
        
        <div className="bg-white rounded-[40px] md:rounded-[60px] overflow-hidden border border-[#8B9A71]/10 shadow-xl">
           {/* Hero Media Container */}
           <div className="h-64 md:h-[400px] bg-[#2D3324] relative flex items-center justify-center overflow-hidden group">
              <img 
                 src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop" 
                 alt="Resource Cover" 
                 className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3324]/90 via-[#2D3324]/20 to-transparent pointer-events-none" />
              
              <button className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-md rounded-[24px] flex items-center justify-center border border-white/20 shadow-2xl hover:scale-110 hover:bg-white/20 transition-all">
                 <PlayFill size={40} className="text-white ml-2" />
              </button>

              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-wrap items-center gap-3 md:gap-4 z-10">
                 <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-[12px] text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest border border-white/20 shadow-sm">
                    Workshop Video
                 </div>
                 <div className="text-white/80 text-[9px] md:text-[10px] font-black uppercase tracking-widest">18 Minutes</div>
              </div>
           </div>
           
           {/* Content Area */}
           <div className="p-8 md:p-16">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-12">
                 <div className="flex items-center gap-3">
                    <span className="text-[10px] md:text-[11px] font-black text-[#A68A45] uppercase tracking-[0.3em] md:tracking-[0.4em]">Self-Worth & Identity</span>
                 </div>
                 <div className="flex gap-3">
                    <button className="p-4 bg-[#F4F7FA] rounded-2xl text-[#2D3324] hover:bg-[#8B9A71] hover:text-white transition-colors shadow-sm"><BookmarkFill size={16} /></button>
                    <button className="p-4 bg-[#F4F7FA] rounded-2xl text-[#2D3324] hover:bg-[#8B9A71] hover:text-white transition-colors shadow-sm"><ShareFill size={16} /></button>
                 </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black text-[#2D3324] font-serif mb-8 leading-snug md:leading-tight uppercase tracking-tight italic">
                Understanding the Inner Critic: A Perspective
              </h1>
              
              <div className="prose prose-sage max-w-none text-[#2D3324]/70 font-medium text-base md:text-lg leading-relaxed space-y-6 md:space-y-8">
                 <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-black first-letter:text-[#A68A45] first-letter:mr-1 first-letter:float-left">
                   In the silence of our own minds, the loudest voice is often the one that tells us we are not enough. This "Inner Critic" is not an enemy, but an overprotective guardian that became misguided. In this deep-dive workshop, we explore the origins of this voice and how to transform it from a critic into a constructive ally.
                 </p>
                 
                 {/* Blockquote */}
                 <div className="bg-[#F4F7FA] p-8 md:p-10 rounded-[32px] md:rounded-[40px] border-l-4 border-[#A68A45] relative my-12">
                    <Quote className="absolute top-4 right-6 text-[#A68A45]/10" size={60} />
                    <p className="text-lg md:text-xl font-bold font-serif text-[#2D3324] italic mb-4 leading-relaxed relative z-10">
                      "The inner critic is just a part of you that is trying to keep you safe using the only tools it knows—fear and perfectionism."
                    </p>
                    <span className="text-[9px] font-black text-[#8B9A71] uppercase tracking-widest relative z-10">— From the Workshop</span>
                 </div>
                 
                 <h4 className="text-xl md:text-2xl font-bold text-[#2D3324] font-serif uppercase tracking-tight pt-6 md:pt-8 mb-6">Key Breakthroughs:</h4>
                 <ul className="space-y-4 md:space-y-6">
                    <li className="flex gap-4 items-start">
                       <CheckIcon /> <span className="pt-0.5">Identifying the specific triggers that activate self-doubt and paralyze action.</span>
                    </li>
                    <li className="flex gap-4 items-start">
                       <CheckIcon /> <span className="pt-0.5">Techniques to lower the volume of the critical voice in real-time.</span>
                    </li>
                    <li className="flex gap-4 items-start">
                       <CheckIcon /> <span className="pt-0.5">Practical exercises for self-compassion integration and rewiring beliefs.</span>
                    </li>
                 </ul>
              </div>

              {/* Bottom Action Area */}
              <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-[#F4F7FA] flex flex-col items-center justify-between gap-8 md:flex-row md:items-center">
                 <div className="flex items-center gap-4 w-full md:w-auto p-4 md:p-0 bg-[#F4F7FA] md:bg-transparent rounded-[24px] md:rounded-none">
                    <div className="w-14 h-14 bg-white md:bg-[#F4F7FA] shadow-sm md:shadow-none rounded-[16px] flex items-center justify-center text-[#A68A45] shrink-0">
                       <Headphones size={24} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black text-[#8B9A71] uppercase tracking-widest mb-1">Related Audio</p>
                       <p className="text-xs md:text-sm font-bold text-[#2D3324] tracking-tight">Inner Peace Guided Meditation</p>
                    </div>
                 </div>
                 
                 <button className="w-full md:w-auto px-10 py-5 bg-[#2D3324] text-white rounded-[20px] md:rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-[#8B9A71] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group">
                    Start Learning <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
    <div className="w-6 h-6 md:w-8 md:h-8 bg-[#8B9A71]/10 rounded-[8px] md:rounded-[10px] flex items-center justify-center text-[#A68A45] shrink-0 mt-0.5">
       <ArrowRight size={14} className="md:w-5 md:h-5" />
    </div>
  );
}
