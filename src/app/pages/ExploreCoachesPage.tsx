import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Clock, 
  Shield, 
  ArrowRight, 
  MessageCircle,
  Video,
  Target,
  Heart,
  ChevronLeft
} from "lucide-react";

export function ExploreCoachesPage() {
  useEffect(() => {
    document.title = "Explore Coaches | Life & You - Find Your Ideal Guide";
  }, []);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "NLP Expert", "Stress Relief", "Relationship", "Career Growth", "Trauma"];

  const coaches = [
    {
      id: 1,
      name: "Sarah Jenkins",
      title: "Senior NLP Master",
      rating: 4.9,
      reviews: 124,
      specialty: "Anxiety & Trauma",
      experience: "12+ Years",
      price: "INR 3,500/hr",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      tags: ["ICF Certified", "Global Expert"]
    },
    {
      id: 2,
      name: "Benjamin K.",
      title: "Foundational Catalyst",
      rating: 5.0,
      reviews: 89,
      specialty: "Performance & Growth",
      experience: "8+ Years",
      price: "INR 2,800/hr",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
      tags: ["NLP Practitioner"]
    },
    {
      id: 3,
      name: "Mia Lang",
      title: "Relationships Expert",
      rating: 4.8,
      reviews: 210,
      specialty: "Partnership Growth",
      experience: "10+ Years",
      price: "INR 3,200/hr",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
      tags: ["ICF Coach"]
    },
    {
        id: 4,
        name: "David Ross",
        title: "Clinical Psychologist",
        rating: 4.9,
        reviews: 342,
        specialty: "Clinical Anxiety",
        experience: "15+ Years",
        price: "INR 4,500/hr",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
        tags: ["PhD", "ICF Trainer"]
    },
    {
        id: 5,
        name: "Elena Rodriguez",
        title: "Mindfulness Guide",
        rating: 4.7,
        reviews: 95,
        specialty: "Zen & Stress Relief",
        experience: "6+ Years",
        price: "INR 2,500/hr",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
        tags: ["Meditation", "Yoga Master"]
    },
    {
        id: 6,
        name: "Marcus Thorne",
        title: "Leadership Strategist",
        rating: 4.9,
        reviews: 156,
        specialty: "Executive Coaching",
        experience: "20+ Years",
        price: "INR 5,000/hr",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
        tags: ["CEO Mentor"]
    },
    {
        id: 7,
        name: "Sophie Chen",
        title: "EQ Specialist",
        rating: 4.8,
        reviews: 112,
        specialty: "Emotional Intelligence",
        experience: "9+ Years",
        price: "INR 3,000/hr",
        img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=800",
        tags: ["Linguistics"]
    },
    {
        id: 8,
        name: "Jordan Smith",
        title: "Cognitive Performance",
        rating: 4.9,
        reviews: 184,
        specialty: "ADHD & Focus",
        experience: "11+ Years",
        price: "INR 3,800/hr",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
        tags: ["Neuroscience"]
    }
  ];

  const filteredCoaches = coaches.filter(coach => {
    if (activeTab === "All") return true;
    if (activeTab === "NLP Expert") return coach.title.includes("NLP") || coach.tags.includes("NLP Practitioner");
    if (activeTab === "Stress Relief") return coach.specialty.includes("Anxiety") || coach.specialty.includes("Stress");
    if (activeTab === "Relationship") return coach.specialty.includes("Relationship") || coach.specialty.includes("Partnership");
    if (activeTab === "Career Growth") return coach.specialty.includes("Performance") || coach.specialty.includes("Growth");
    if (activeTab === "Trauma") return coach.specialty.includes("Trauma");
    return true;
  });

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-32 portal-context">
      
      {/* Compact Header - Mobile Only */}
      <div className="lg:hidden bg-[#2D3324] text-white px-6 py-10 rounded-b-[40px] relative overflow-hidden flex items-center gap-4 shadow-xl z-20">
         <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50 pointer-events-none" />
         <button 
            onClick={() => navigate(-1)}
            className="relative z-20 w-10 h-10 bg-[#FFFFFF]/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-[#FFFFFF]/10 active:scale-95 transition-all shrink-0"
         >
            <ChevronLeft size={20} />
         </button>
         <div className="relative z-10 flex-1">
            <h1 className="text-2xl font-black tracking-tight leading-none text-[#FFFFFF] uppercase font-serif">Discover Guides</h1>
            <p className="text-[#8B9A71] text-[10px] font-black uppercase tracking-[0.2em] mt-1.5 opacity-80">Find your ideal path match</p>
         </div>
      </div>
          

      {/* Header & Search - Desktop Only */}
      <section className="hidden lg:block bg-[#2D3324] pt-12 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,154,113,0.1)_0%,rgba(0,0,0,0)_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
           <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] mb-8 uppercase italic tracking-tight">Discover your <br/><span className="text-[#8B9A71]">Ideal Guide.</span></h1>
           
           <div className="flex flex-col md:flex-row gap-4 max-w-4xl">
              <div className="relative flex-1 group">
                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#8B9A71]" size={20} />
                 <input 
                    type="text" 
                    placeholder="Search by specialty, name, or goal..." 
                    className="w-full pl-16 pr-8 py-5 bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 rounded-[24px] text-[#FFFFFF] outline-none focus:border-[#8B9A71] focus:bg-[#FFFFFF]/15 transition-all font-medium placeholder:text-[#FFFFFF]/40"
                 />
              </div>
              <button className="px-8 py-5 bg-[#8B9A71] text-[#2D3324] rounded-[24px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#FFFFFF] transition-all shadow-xl">
                 <Filter size={20} />
                 Apply Filters
              </button>
           </div>
        </div>
      </section>

      {/* Categories Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-4 lg:-mt-10 relative z-30">
        <div className="bg-[#FFFFFF] p-2 rounded-[32px] shadow-premium flex items-center gap-2 overflow-x-auto scrollbar-hide border border-[rgba(139,154,113,0.1)]">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-3.5 rounded-[22px] text-[9px] font-black uppercase tracking-widest transition-all min-w-max ${
                  activeTab === cat 
                    ? 'bg-[#2D3324] text-[#FFFFFF] shadow-lg' 
                    : 'bg-transparent text-[#545454] hover:bg-[#F8F9FA]'
                }`}
              >
                {cat}
              </button>
            ))}
        </div>
      </div>

      {/* Coach Grid */}
      <section className="pt-8 pb-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
              {filteredCoaches.map(coach => (
                <div key={coach.id} className="group bg-[#FFFFFF] rounded-[32px] md:rounded-[48px] overflow-hidden border border-[rgba(139,154,113,0.08)] shadow-sm hover:shadow-premium transition-all hover:scale-[1.01] flex flex-col">
                   {/* Top Visual */}
                   <Link to={`/portal/coaches/${coach.id}`} className="h-40 md:h-64 relative bg-[#2D3324] overflow-hidden block">
                      <img src={coach.img} alt={coach.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-110 transition-transform" />
                      
                      <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-[#8B9A71] text-[#2D3324] px-2.5 md:px-4 py-1 md:py-2 rounded-xl md:rounded-2xl text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-lg">
                         {coach.price}
                      </div>

                      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex gap-1.5 md:gap-2 overflow-hidden max-w-[80%]">
                        {coach.tags.slice(0, 1).map(t => (
                          <span key={t} className="bg-[#2D3324]/60 backdrop-blur-md text-[#FFFFFF] text-[7px] md:text-[9px] font-black px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl border border-[#FFFFFF]/10 uppercase tracking-widest truncate">
                             {t}
                          </span>
                        ))}
                      </div>
                   </Link>

                   {/* Info Content */}
                   <div className="p-4 md:p-10 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-1.5 md:mb-2">
                         <span className="text-[7px] md:text-[10px] font-black text-[#8B9A71] uppercase tracking-[0.2em] md:tracking-[0.3em] truncate">{coach.specialty}</span>
                         <div className="flex items-center gap-1 text-[#A68A45]">
                            <Star size={10} fill="#A68A45" className="md:w-[14px]" />
                            <span className="text-[9px] md:text-sm font-black text-[#2D3324]">{coach.rating}</span>
                         </div>
                      </div>
                      
                      <Link to={`/portal/coaches/${coach.id}`}>
                         <h3 className="text-sm md:text-2xl font-black text-[#2D3324] mb-0.5 md:mb-2 hover:text-[#8B9A71] transition-colors truncate">{coach.name}</h3>
                      </Link>
                      <p className="text-[9px] md:text-sm text-[#545454]/60 font-bold mb-4 md:mb-8 leading-tight truncate">{coach.title}</p>

                      <div className="pt-4 md:pt-8 border-t border-[rgba(139,154,113,0.05)] mt-auto flex items-center gap-2 md:gap-4">
                         <button 
                           onClick={() => navigate(`/portal/book?coach=${coach.id}`)}
                           className="flex-1 bg-[#2D3324] text-[#FFFFFF] py-3 md:py-5 rounded-xl md:rounded-[24px] text-[8px] md:text-[11px] font-black uppercase tracking-widest hover:bg-[#000000] transition-all shadow-lg active:scale-[0.98]"
                         >
                            Book
                         </button>
                         <button className="w-10 h-10 md:w-16 md:h-16 bg-[#F8F9FA] rounded-xl md:rounded-[24px] flex items-center justify-center text-[#8B9A71] hover:bg-[#8B9A71] hover:text-[#FFFFFF] transition-all shadow-sm">
                            <MessageCircle size={16} className="md:w-[22px]" />
                         </button>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Can't Decide Banner */}
      <section className="max-w-7xl mx-auto px-6">
         <div className="bg-[#EBF2EA] rounded-[64px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#8B9A71]/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-2xl" />
            
            <div className="max-w-xl text-center md:text-left relative z-10">
               <h2 className="text-3xl md:text-5xl font-black text-[#2D3324] mb-8 leading-[1.1]">Unsure who fits <br/>your <span className="text-[#8B9A71]">journey?</span></h2>
               <p className="text-[#545454] font-medium text-lg opacity-80 mb-10">Our AI-Matching algorithm pairs you with the perfect coach based on your core linguistic and sensory targets.</p>
               <button className="px-12 py-5 bg-[#2D3324] text-[#FFFFFF] rounded-pill text-[11px] font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Start Matching Quiz</button>
            </div>

            <div className="hidden lg:flex items-center gap-6">
                <div className="w-48 h-64 bg-[#FFFFFF] rounded-[32px] p-8 shadow-premium border border-[rgba(139,154,113,0.1)] flex flex-col items-center justify-center text-center">
                   <Target className="text-[#8B9A71] mb-6" size={48} />
                   <div className="text-[10px] font-black text-[#545454] uppercase tracking-widest">Precision <br/>Targeting</div>
                </div>
                <div className="w-48 h-64 bg-[#8B9A71] rounded-[32px] p-8 shadow-premium border border-[rgba(139,154,113,0.1)] flex flex-col items-center justify-center text-center -translate-y-8">
                   <Shield className="text-white mb-6" size={48} />
                   <div className="text-[10px] font-black text-[#FFFFFF] uppercase tracking-widest">Global <br/>Anonymity</div>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
}
