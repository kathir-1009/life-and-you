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
  Heart
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
      name: "Coach Sarah J.",
      title: "Senior NLP Master",
      rating: 4.9,
      reviews: 124,
      specialty: "Anxiety & Trauma",
      experience: "12+ Years",
      price: "₹3,500/hr",
      img: "/img/about/account-01.jpg",
      tags: ["ICF Certified", "Global Expert"]
    },
    {
      id: 2,
      name: "Coach Benjamin K.",
      title: "Foundational Catalyst",
      rating: 5.0,
      reviews: 89,
      specialty: "Performance & Growth",
      experience: "8+ Years",
      price: "₹2,800/hr",
      img: "/img/about/account-02.jpg",
      tags: ["NLP Practitioner"]
    },
    {
      id: 3,
      name: "Coach Mia L.",
      title: "Cognitive Shifting Specialist",
      rating: 4.8,
      reviews: 210,
      specialty: "Relationships",
      experience: "10+ Years",
      price: "₹3,200/hr",
      img: "/img/about/account-05.jpg",
      tags: ["Relationship Coach"]
    },
    {
        id: 4,
        name: "Coach David R.",
        title: "Clinical Psychologist",
        rating: 4.9,
        reviews: 342,
        specialty: "Clinical Anxiety",
        experience: "15+ Years",
        price: "₹4,500/hr",
        img: "/img/about/account-01.jpg",
        tags: ["PhD", "ICF Trainer"]
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-32">
      {/* Header & Search */}
      <section className="bg-[#2D3324] pt-12 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,154,113,0.1)_0%,rgba(0,0,0,0)_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
           <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] mb-8">Discover your <br/><span className="text-[#8B9A71]">Ideal Guide.</span></h1>
           
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
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-30">
        <div className="bg-[#FFFFFF] p-3 rounded-[32px] shadow-premium flex items-center gap-3 overflow-x-auto scrollbar-hide border border-[rgba(139,154,113,0.1)]">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-4 rounded-[22px] text-[10px] font-black uppercase tracking-widest transition-all min-w-max ${
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
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
           <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
              {coaches.map(coach => (
                <div key={coach.id} className="group bg-[#FFFFFF] rounded-[48px] overflow-hidden border border-[rgba(139,154,113,0.08)] shadow-sm hover:shadow-premium transition-all hover:scale-[1.01] flex flex-col">
                   {/* Top Visual */}
                   <Link to={`/app/coach/${coach.id}`} className="h-64 relative bg-[#2D3324] overflow-hidden block">
                      <img src={coach.img} alt={coach.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-700 group-hover:scale-110 transition-transform" />
                      
                      <div className="absolute top-8 right-8 bg-[#8B9A71] text-[#2D3324] px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest">
                         {coach.price}
                      </div>

                      <div className="absolute bottom-8 left-8 flex gap-2">
                        {coach.tags.map(t => (
                          <span key={t} className="bg-[#FFFFFF]/10 backdrop-blur-md text-[#FFFFFF] text-[9px] font-black px-3 py-1.5 rounded-xl border border-[#FFFFFF]/20 uppercase tracking-widest">
                             {t}
                          </span>
                        ))}
                      </div>
                   </Link>

                   {/* Info Content */}
                   <div className="p-10 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                         <span className="text-[10px] font-black text-[#8B9A71] uppercase tracking-[0.3em]">{coach.specialty}</span>
                         <div className="flex items-center gap-1 text-[#8B9A71]">
                            <Star size={14} fill="#8B9A71" />
                            <span className="text-sm font-black text-[#2D3324]">{coach.rating}</span>
                         </div>
                      </div>
                      
                      <Link to={`/app/coach/${coach.id}`}>
                         <h3 className="text-2xl font-black text-[#2D3324] mb-2 hover:text-[#8B9A71] transition-colors">{coach.name}</h3>
                      </Link>
                      <p className="text-sm text-[#545454]/60 font-bold mb-8 leading-tight">{coach.title} • {coach.experience}</p>

                      <div className="pt-8 border-t border-[rgba(139,154,113,0.05)] mt-auto flex items-center gap-4">
                         <button 
                           onClick={() => navigate(`/app/book?coach=${coach.id}`)}
                           className="flex-1 bg-[#2D3324] text-[#FFFFFF] py-5 rounded-[24px] text-[11px] font-black uppercase tracking-widest hover:bg-[#000000] transition-all shadow-xl active:scale-[0.98]"
                         >
                            Book Session
                         </button>
                         <button className="w-16 h-16 bg-[#F8F9FA] rounded-[24px] flex items-center justify-center text-[#8B9A71] hover:bg-[#8B9A71] hover:text-[#FFFFFF] transition-all shadow-sm">
                            <MessageCircle size={22} />
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
