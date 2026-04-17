import { useState, useEffect } from "react";
import { LockFill, PlayFill, FileEarmarkTextFill, Headphones, CameraVideoFill, Search, ArrowRight, BookmarkFill, Globe, LightningFill, HeartFill, CollectionPlayFill } from "react-bootstrap-icons";
import { Link } from "react-router";

export function AllResourcesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const resourceCategories = [
    { id: 'all', label: 'All Sanctuary', icon: Globe },
    { id: 'article', label: 'Cognitive Articles', icon: FileEarmarkTextFill },
    { id: 'audio', label: 'Audio Meditations', icon: Headphones },
    { id: 'video', label: 'Workshops', icon: CameraVideoFill },
    { id: 'worksheet', label: 'Shadow Work', icon: LightningFill }
  ];

  const resources = [
    {
      id: "R001",
      title: "What Is NLP and How Does It Change Your Thinking?",
      type: "ARTICLE",
      readTime: "7 min read",
      topic: "Coaching Basics",
      locked: true,
      color: "bg-sage",
      icon: FileEarmarkTextFill
    },
    {
      id: "R002",
      title: "10-Minute Guided Breathing for Anxiety Relief",
      type: "AUDIO",
      readTime: "10 min",
      topic: "Anxiety & Stress",
      locked: false,
      color: "bg-gold-dark",
      icon: Headphones
    },
    {
      id: "R003",
      title: "Understanding the Inner Critic: A Coach's Perspective",
      type: "VIDEO",
      readTime: "18 min",
      topic: "Self-Worth",
      locked: false,
      color: "bg-sage-dark",
      icon: PlayFill
    },
    {
      id: "R004",
      title: "Daily Reflection Journal — The 5-Question Template",
      type: "WORKSHEET",
      readTime: "PDF Guide",
      topic: "Self-Awareness",
      locked: false,
      color: "bg-[#B7C4B1]",
      icon: FileEarmarkTextFill
    },
    {
      id: "R005",
      title: "Navigating Mid-Life Transitions with Confidence",
      type: "ARTICLE",
      readTime: "12 min read",
      topic: "Career",
      locked: true,
      color: "bg-sage",
      icon: FileEarmarkTextFill
    },
    {
      id: "R006",
      title: "Boundaries 101: How to Say No Without Guilt",
      type: "VIDEO",
      readTime: "22 min",
      topic: "Relationships",
      locked: false,
      color: "bg-sage-dark",
      icon: PlayFill
    }
  ];

  return (
    <div className="bg-cream min-h-screen pb-32 portal-context">
      {/* Search Header */}
      <section className="bg-sage pt-16 pb-28 px-6 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif uppercase tracking-tight">Wisdom <span className="text-cream/60">Vault.</span></h1>
            <p className="text-sm text-cream/60 mb-12 font-bold uppercase tracking-[0.3em]">Curated tools for your cognitive transformation.</p>
            
            <div className="relative group max-w-2xl mx-auto">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input 
                    type="text" 
                    placeholder="Search techniques, articles, or workshops..." 
                    className="w-full pl-16 pr-8 py-5 bg-white/10 border border-white/20 rounded-full text-white outline-none focus:border-white/40 focus:bg-white/20 transition-all placeholder:text-white/30 text-xs font-bold uppercase tracking-widest"
                />
            </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-30">
        <div className="bg-white p-2 rounded-[36px] shadow-2xl flex items-center gap-2 overflow-x-auto scrollbar-hide border border-sage/10">
            {resourceCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-[28px] text-[10px] font-black uppercase tracking-widest transition-all min-w-max ${
                  activeFilter === cat.id 
                    ? 'bg-sage-dark text-white shadow-lg' 
                    : 'bg-transparent text-sage-dark/60 hover:bg-cream'
                }`}
              >
                <cat.icon size={14} className={activeFilter === cat.id ? 'text-gold-dark' : 'text-sage/60'} />
                {cat.label}
              </button>
            ))}
        </div>
      </div>

      {/* Resource Grid */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources
                .filter(r => activeFilter === 'all' || r.type.toLowerCase() === activeFilter)
                .map((resource) => (
                  <div key={resource.id} className="group bg-white rounded-[48px] overflow-hidden border border-sage/5 shadow-sm hover:shadow-2xl transition-all hover:scale-[1.02] flex flex-col h-full">
                    <div className={`h-56 relative flex items-center justify-center ${resource.color}`}>
                       <span className="absolute top-8 left-8 text-[9px] font-black text-white/50 tracking-[0.3em] uppercase">{resource.type}</span>
                       <div className="absolute top-8 right-8">
                          {resource.locked ? (
                             <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-sm">
                                <LockFill size={16} />
                             </div>
                          ) : (
                             <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 hover:bg-white/30 transition-all shadow-sm">
                                <BookmarkFill size={16} />
                             </button>
                          )}
                       </div>
                       <resource.icon size={60} className="text-white/80 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    
                    <div className="p-10 flex-1 flex flex-col items-start text-left">
                      <span className="text-[10px] font-black text-gold-dark uppercase tracking-[0.3em] mb-4">{resource.topic}</span>
                      <h3 className="text-xl lg:text-2xl font-bold text-sage-dark mb-8 leading-tight font-serif uppercase tracking-tight">
                        {resource.title}
                      </h3>
                      
                      <div className="mt-auto w-full flex items-center justify-between pt-8 border-t border-cream">
                         <span className="text-[10px] text-sage-dark/30 font-black uppercase tracking-widest italic">{resource.readTime}</span>
                         <Link 
                           to={`/portal/library/${resource.id}`}
                           className="w-12 h-12 rounded-2xl bg-cream text-sage-dark flex items-center justify-center hover:bg-sage hover:text-white transition-all shadow-sm group-hover:scale-110"
                         >
                            <ArrowRight size={20} />
                         </Link>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Mentor Curation CTA */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-sage-dark rounded-[64px] p-12 md:p-20 relative overflow-hidden group shadow-2xl">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="w-24 h-24 bg-gold-dark rounded-[32px] flex items-center justify-center text-white shadow-2xl shrink-0 group-hover:scale-110 transition-transform">
                 <CollectionPlayFill size={44} />
              </div>
              <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif uppercase tracking-tight">Can't find your path?</h2>
                  <p className="text-white/60 font-medium text-lg max-w-xl italic leading-relaxed">"Knowledge is power, but applied wisdom is transformation. Our mentors curate custom blueprints for every client."</p>
              </div>
              <button className="px-10 py-6 bg-white text-sage-dark rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl">
                 Request Blueprint
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
