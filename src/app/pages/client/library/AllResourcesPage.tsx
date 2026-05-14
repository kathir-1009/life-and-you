import { useState } from "react";
import { LockFill, PlayFill, FileEarmarkTextFill, Headphones, CameraVideoFill, Search, ArrowRight, BookmarkFill, Globe, LightningFill, CollectionPlayFill, PersonFill } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function AllResourcesPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  const resourceCategories = [
    { id: 'all', label: 'All Sanctuary', icon: Globe },
    { id: 'article', label: 'Cognitive', icon: FileEarmarkTextFill },
    { id: 'audio', label: 'Meditations', icon: Headphones },
    { id: 'video', label: 'Workshops', icon: CameraVideoFill },
    { id: 'worksheet', label: 'Shadow Work', icon: LightningFill }
  ];

  const resources = [
    {
      id: "R001",
      title: "What Is NLP and How Does It Change Thinking?",
      type: "ARTICLE",
      readTime: "7 min read",
      topic: "Coaching",
      locked: true,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
      icon: FileEarmarkTextFill
    },
    {
      id: "R002",
      title: "10-Minute Guided Breathing for Anxiety",
      type: "AUDIO",
      readTime: "10 min",
      topic: "Anxiety",
      locked: false,
      recommendedBy: "Coach Sharma",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop",
      icon: Headphones
    },
    {
      id: "R003",
      title: "Understanding the Inner Critic: A Perspective",
      type: "VIDEO",
      readTime: "18 min",
      topic: "Self-Worth",
      locked: false,
      recommendedBy: "Coach Mitchell",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
      icon: PlayFill
    },
    {
      id: "R004",
      title: "Daily Reflection Journal — The 5-Question Template",
      type: "WORKSHEET",
      readTime: "PDF Guide",
      topic: "Awareness",
      locked: false,
      recommendedBy: "Coach Sharma",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
      icon: FileEarmarkTextFill
    },
    {
      id: "R005",
      title: "Navigating Mid-Life Transitions with Confidence",
      type: "ARTICLE",
      readTime: "12 min read",
      topic: "Career",
      locked: true,
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop",
      icon: FileEarmarkTextFill
    },
    {
      id: "R006",
      title: "Boundaries 101: How to Say No Without Guilt",
      type: "VIDEO",
      readTime: "22 min",
      topic: "Relationships",
      locked: false,
      image: "https://images.unsplash.com/photo-1516302752946-60f409f58e8b?q=80&w=800&auto=format&fit=crop",
      icon: PlayFill
    }
  ];

  return (
    <div className="bg-[#F4F7FA] min-h-screen pb-32 portal-context animate-in fade-in duration-700">
      
      {/* ── Mobile Header ── */}
      <div className="relative lg:hidden">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-5 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/10 active:scale-95 transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="bg-[#2D3324] pt-20 pb-20 px-6 rounded-b-[64px] relative overflow-hidden text-center border-t border-white/5 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#A68A45]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-3xl font-black text-white tracking-tight font-serif italic mb-2 uppercase">Wisdom Vault</h1>
            <p className="text-[#8B9A71] text-[9px] font-black uppercase tracking-[0.35em]">Curated Cognitive Tools</p>
            
            <div className="relative w-full max-w-sm mt-8">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                <input 
                    type="text" 
                    placeholder="Search techniques..." 
                    className="w-full pl-12 pr-6 py-3.5 bg-white/10 border border-white/20 rounded-[16px] text-white outline-none focus:border-white/40 focus:bg-white/20 transition-all placeholder:text-white/30 text-[10px] font-black uppercase tracking-widest"
                />
            </div>
          </div>
        </div>
      </div>

      {/* ── Desktop Header ── */}
      <section className="hidden lg:block bg-[#2D3324] pt-20 pb-32 px-6 rounded-b-[80px] relative overflow-hidden text-center shadow-xl z-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 font-serif uppercase tracking-tight italic">Wisdom <span className="text-[#8B9A71]">Vault.</span></h1>
            <p className="text-[#8B9A71] text-xs font-black uppercase tracking-[0.3em] mb-12">Curated tools for your cognitive transformation.</p>
            
            <div className="relative group max-w-2xl mx-auto">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input 
                    type="text" 
                    placeholder="Search techniques, articles, or workshops..." 
                    className="w-full pl-16 pr-8 py-5 bg-white/10 border border-white/20 rounded-[24px] text-white outline-none focus:border-white/40 focus:bg-white/20 transition-all placeholder:text-white/30 text-xs font-black uppercase tracking-widest"
                />
            </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 mt-6 lg:-mt-10 relative z-30">
        <div className="bg-white p-2 rounded-[24px] md:rounded-[36px] shadow-sm md:shadow-xl flex items-center gap-2 overflow-x-auto scrollbar-hide border border-[#8B9A71]/10 whitespace-nowrap">
            {resourceCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center justify-center gap-2 px-5 md:px-8 py-3 md:py-4 rounded-[16px] md:rounded-[28px] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all shrink-0 ${
                  activeFilter === cat.id 
                    ? 'bg-[#2D3324] text-white shadow-md' 
                    : 'bg-transparent text-[#2D3324]/50 hover:bg-[#F4F7FA] hover:text-[#2D3324]'
                }`}
              >
                <cat.icon size={14} className={activeFilter === cat.id ? 'text-[#A68A45]' : 'text-[#8B9A71]'} />
                {cat.label}
              </button>
            ))}
        </div>
      </div>

      {/* Resource Grid (2x2 on Mobile) */}
      <section className="py-8 md:py-20 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {resources
                .filter(r => activeFilter === 'all' || r.type.toLowerCase() === activeFilter)
                .map((resource) => (
                  <div key={resource.id} className="group bg-white rounded-[24px] md:rounded-[48px] overflow-hidden border border-[#8B9A71]/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                    
                    {/* Media Container - Scaled for 2x2 grid */}
                    <div className="h-28 md:h-56 relative flex items-center justify-center bg-[#2D3324] overflow-hidden">
                       <img src={resource.image} alt={resource.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#2D3324]/80 via-transparent to-[#2D3324]/30 pointer-events-none" />
                       
                       <span className="hidden md:block absolute top-6 left-6 text-[9px] font-black text-white tracking-[0.3em] uppercase z-10">{resource.type}</span>
                       <div className="absolute top-3 right-3 md:top-6 md:right-6 z-10">
                          {resource.locked ? (
                             <div className="w-6 h-6 md:w-10 md:h-10 bg-black/40 backdrop-blur-md rounded-[8px] md:rounded-2xl flex items-center justify-center text-white shadow-sm">
                                <LockFill size={12} className="md:w-4 md:h-4" />
                             </div>
                          ) : (
                             <button className="w-6 h-6 md:w-10 md:h-10 bg-black/40 backdrop-blur-md rounded-[8px] md:rounded-2xl flex items-center justify-center text-white hover:bg-black/60 transition-all shadow-sm">
                                <BookmarkFill size={12} className="md:w-4 md:h-4" />
                             </button>
                          )}
                       </div>
                       <resource.icon size={32} className="md:w-14 md:h-14 text-white relative z-10 shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-700" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 md:p-10 flex-1 flex flex-col items-start text-left">
                      <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
                         <span className="text-[8px] md:text-[10px] font-black text-[#A68A45] uppercase tracking-[0.2em] md:tracking-[0.3em]">{resource.topic}</span>
                         {resource.recommendedBy && (
                           <>
                             <span className="text-[#8B9A71]/30">•</span>
                             <div className="flex items-center gap-1 text-[#8B9A71]">
                               <PersonFill size={10} />
                               <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest">{resource.recommendedBy}</span>
                             </div>
                           </>
                         )}
                      </div>
                      
                      <h3 className="text-sm md:text-2xl font-bold text-[#2D3324] mb-4 md:mb-8 leading-snug md:leading-tight font-serif uppercase tracking-tight line-clamp-3">
                        {resource.title}
                      </h3>
                      
                      <div className="mt-auto w-full flex items-center justify-between pt-3 md:pt-8 border-t border-[#F4F7FA]">
                         <span className="text-[7px] md:text-[10px] text-[#8B9A71] font-black uppercase tracking-widest italic">{resource.readTime}</span>
                         <Link 
                           to={`/portal/library/${resource.id}`}
                           className="w-8 h-8 md:w-12 md:h-12 rounded-[10px] md:rounded-[16px] bg-[#F4F7FA] text-[#2D3324] flex items-center justify-center hover:bg-[#8B9A71] hover:text-white transition-colors shadow-sm group-hover:scale-110"
                         >
                            <ArrowRight size={14} className="md:w-5 md:h-5" />
                         </Link>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Mentor Curation CTA */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 mt-4">
        <div className="bg-[#8B9A71] rounded-[32px] md:rounded-[64px] p-8 md:p-20 relative overflow-hidden group shadow-2xl">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] pointer-events-none" />
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-[#2D3324] rounded-[20px] md:rounded-[32px] flex items-center justify-center text-white shadow-2xl shrink-0 group-hover:scale-110 transition-transform">
                 <CollectionPlayFill size={28} className="md:w-11 md:h-11 text-[#A68A45]" />
              </div>
              <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-6 font-serif uppercase tracking-tight italic">Can't find your path?</h2>
                  <p className="text-white/80 font-medium text-xs md:text-lg max-w-xl italic leading-relaxed">"Knowledge is power, but applied wisdom is transformation. Our mentors curate custom blueprints for every client."</p>
              </div>
              <button className="px-8 py-5 md:px-10 md:py-6 bg-white text-[#2D3324] rounded-[20px] md:rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 hover:bg-[#A68A45] hover:text-white transition-all shadow-xl w-full md:w-auto">
                 Request Blueprint
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
