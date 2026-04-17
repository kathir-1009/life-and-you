import { useState, useEffect } from "react";
import { Lock, Play, FileText, Headphones, Video, Search, ArrowRight, Bookmark, Brain, Globe, Target, Heart } from "lucide-react";

export function ResourcesPage() {
  useEffect(() => {
    document.title = "Resource Library | Life & You - Tools for Growth";
  }, []);
  const [activeFilter, setActiveFilter] = useState("all");

  const resourceCategories = [
    { id: 'all', label: 'All Resources', icon: Globe },
    { id: 'article', label: 'Articles', icon: Brain },
    { id: 'audio', label: 'Meditations', icon: Heart },
    { id: 'video', label: 'Workshops', icon: Play },
    { id: 'worksheet', label: 'Worksheets', icon: Target }
  ];

  const resources = [
    {
      title: "What Is NLP and How Does It Change Your Thinking?",
      type: "ARTICLE",
      readTime: "7 min read",
      topic: "Coaching Basics",
      locked: true,
      color: "bg-[#1a3a32]",
      icon: Brain
    },
    {
      title: "10-Minute Guided Breathing for Anxiety Relief",
      type: "AUDIO",
      readTime: "10 min",
      topic: "Anxiety & Stress",
      locked: false,
      color: "bg-[#a65d45]",
      icon: Heart
    },
    {
      title: "Understanding the Inner Critic: A Coach's Perspective",
      type: "VIDEO",
      readTime: "18 min",
      topic: "Self-Worth",
      locked: false,
      color: "bg-[#b08d4e]",
      icon: Play
    },
    {
      title: "Daily Reflection Journal — The 5-Question Template",
      type: "WORKSHEET",
      readTime: "PDF Guide",
      topic: "Self-Awareness",
      locked: false,
      color: "bg-[#1e2d29]",
      icon: Target
    },
    {
        title: "Navigating Mid-Life Transitions with Confidence",
        type: "ARTICLE",
        readTime: "12 min read",
        topic: "Career",
        locked: true,
        color: "bg-[#1a3a32]",
        icon: Brain
    },
    {
        title: "Boundaries 101: How to Say No Without Guilt",
        type: "VIDEO",
        readTime: "22 min",
        topic: "Relationships",
        locked: false,
        color: "bg-[#b08d4e]",
        icon: Play
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-32">
      {/* Search Header */}
      <section className="bg-[#2D3324] pt-16 pb-28 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,154,113,0.1)_0%,rgba(0,0,0,0)_70%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-black text-[#FFFFFF] mb-8">Knowledge <span className="text-[#8B9A71]">Vault.</span></h1>
            <p className="text-lg text-[#FFFFFF]/60 mb-12 font-medium">Curated tools for your cognitive transformation.</p>
            
            <div className="relative group max-w-2xl mx-auto">
                <Search className="absolute left-6 top-1/2 -track-y-1/2 text-[#8B9A71]" size={20} />
                <input 
                    type="text" 
                    placeholder="Search techniques, articles, or workshops..." 
                    className="w-full pl-16 pr-8 py-6 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-pill text-[#FFFFFF] outline-none focus:border-[#8B9A71] focus:bg-[#FFFFFF]/10 transition-all placeholder:text-[#FFFFFF]/20"
                />
            </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-30">
        <div className="bg-[#FFFFFF] p-2 rounded-[32px] shadow-premium flex items-center gap-2 overflow-x-auto scrollbar-hide border border-[rgba(139,154,113,0.1)]">
            {resourceCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-[24px] text-[10px] font-black uppercase tracking-[0.2em] transition-all min-w-max ${
                  activeFilter === cat.id 
                    ? 'bg-[#2D3324] text-[#FFFFFF] shadow-lg' 
                    : 'bg-[#00000000] text-[#545454] hover:bg-[#F8F9FA]'
                }`}
              >
                <cat.icon size={14} className={activeFilter === cat.id ? 'text-[#8B9A71]' : 'text-[#8B9A71]/60'} />
                {cat.label}
              </button>
            ))}
        </div>
      </div>

      {/* Resource Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {resources
                .filter(r => activeFilter === 'all' || r.type.toLowerCase() === activeFilter)
                .map((resource, i) => (
                  <div key={i} className="group bg-[#FFFFFF] rounded-[48px] overflow-hidden border border-[rgba(139,154,113,0.08)] shadow-sm hover:shadow-premium transition-all hover:scale-[1.02] flex flex-col h-full">
                    <div className={`h-56 relative flex items-center justify-center ${resource.color}`}>
                       <span className="absolute top-8 left-8 text-[9px] font-black text-[#FFFFFF]/50 tracking-widest uppercase">{resource.type}</span>
                       {resource.locked && (
                         <div className="absolute top-8 right-8 w-10 h-10 bg-[#FFFFFF]/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#FFFFFF]">
                            <Lock size={16} />
                         </div>
                       )}
                       <resource.icon size={64} className="text-[#FFFFFF]/80 group-hover:scale-125 transition-transform duration-500" />
                    </div>
                    
                    <div className="p-10 flex-1 flex flex-col">
                      <span className="text-[10px] font-extrabold text-[#8B9A71] uppercase tracking-[0.2em] mb-3">{resource.topic}</span>
                      <h3 className="text-xl font-black text-[#2D3324] mb-8 leading-tight group-hover:text-[#8B9A71] transition-colors line-clamp-2">
                        {resource.title}
                      </h3>
                      
                      <div className="mt-auto flex items-center justify-between pt-8 border-t border-[rgba(139,154,113,0.05)]">
                         <span className="text-[10px] text-[#545454] opacity-40 font-bold uppercase tracking-widest italic">{resource.readTime}</span>
                         <button className="w-12 h-12 rounded-2xl bg-[#F8F9FA] text-[#2D3324] flex items-center justify-center hover:bg-[#2D3324] hover:text-[#FFFFFF] transition-all shadow-sm">
                            <ArrowRight size={20} />
                         </button>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Spotlight CTA */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#2D3324] rounded-[64px] p-12 md:p-20 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="w-24 h-24 bg-[#8B9A71] rounded-[32px] flex items-center justify-center text-[#2D3324] shadow-2xl shrink-0 group-hover:rotate-12 transition-transform">
                 <Sparkles size={40} />
              </div>
              <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-black text-[#FFFFFF] mb-6">Can't find what you need?</h2>
                  <p className="text-[#FFFFFF]/60 font-medium text-lg max-w-xl">Our coaches curate personalized reading lists and meditation tracks for every client. Book a discovery call to get your custom blueprint.</p>
              </div>
              <button className="px-12 py-6 bg-[#8B9A71] text-[#2D3324] rounded-pill text-xs font-black uppercase tracking-widest hover:bg-[#FFFFFF] transition-all shadow-xl shadow-[#8B9A71]/20">
                 Request Blueprint
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}

function Sparkles(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  )
}
