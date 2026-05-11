import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Download, Bell, ArrowRight } from "react-bootstrap-icons";
import { Star, Shield, Brain, Sparkles, BookOpen, ClipboardList, Users, HeartPulse, Wind, MoreHorizontal } from "lucide-react";
import { useUser } from "../context/UserContext";
import { UpcomingSession } from "../components/dashboard/UpcomingSession";
import { RecentHistory } from "../components/dashboard/RecentHistory";
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";

// Recommended coaches mock data
const RECOMMENDED_COACHES = [
  {
    id: 1,
    name: "Sarah Jenkins",
    title: "Senior NLP Master",
    specialty: "Anxiety & Trauma",
    rating: 4.9,
    reviews: 124,
    experience: "12 yrs",
    price: "₹3,500/hr",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    badge: "Top Rated",
  },
  {
    id: 2,
    name: "Benjamin K.",
    title: "Performance Coach",
    specialty: "Growth & Career",
    rating: 5.0,
    reviews: 89,
    experience: "8 yrs",
    price: "₹2,800/hr",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    badge: "ICF Certified",
  },
  {
    id: 3,
    name: "Mia Laurent",
    title: "Cognitive Specialist",
    specialty: "Relationships",
    rating: 4.8,
    reviews: 210,
    experience: "10 yrs",
    price: "₹3,200/hr",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    badge: "Most Loved",
  },
  {
    id: 4,
    name: "David Rao",
    title: "Clinical Psychologist",
    specialty: "Stress & Burnout",
    rating: 4.9,
    reviews: 342,
    experience: "15 yrs",
    price: "₹4,500/hr",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    badge: "PhD",
  },
];



export function DashboardPage() {
  const { user, isAnonymous } = useUser();
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === "left" ? -200 : 200;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.title = "Dashboard | Life & You";
  }, []);

  return (
    <div className="animate-in fade-in duration-700 portal-context pb-20">

      {/* ── Header ── dark green, tight */}
      <div className="relative">
        <div className="bg-[#2D3324] pt-14 pb-24 px-6 rounded-b-[64px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#8B9A71]/15 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#4E5540]/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-[60px]" />

          <div className="flex items-center justify-between relative z-10 max-w-4xl mx-auto">
            <div>
              <p className="text-[#8B9A71] text-[10px] font-black uppercase tracking-[0.4em] mb-2">Welcome back,</p>
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
                {isAnonymous ? "Seeker" : user.name.split(" ")[0]}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-all">
                <Bell size={18} />
              </button>
              <div className="w-12 h-12 rounded-[18px] border-2 border-white/20 overflow-hidden shadow-xl">
                <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping white action bar */}
        <div className="max-w-4xl mx-auto px-6 -mt-7 relative z-20">
          <div className="bg-white p-2.5 rounded-[28px] shadow-xl border border-[#8B9A71]/10 flex items-center gap-3">
            <div className="flex-1 relative">
              <Download className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8B9A71]" size={16} />
              <div className="w-full pl-12 pr-5 py-3.5 bg-[#F3F5F0] rounded-[20px] text-[#2D3324] text-[10px] font-black uppercase tracking-widest flex items-center justify-between cursor-pointer hover:bg-[#E3EAE0] transition-all">
                <span>Explore Your Wellness Journey</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Recommended Coaches ── horizontal scroll */}
      <div className="mt-8 px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] font-black text-[#8B9A71] uppercase tracking-[0.3em]">Recommended</p>
            <h2 className="text-lg font-black text-[#2D3324] tracking-tight">Your Coaches</h2>
          </div>
          <button
            onClick={() => navigate("/portal/coaches")}
            className="text-[10px] font-black text-[#8B9A71] uppercase tracking-widest flex items-center gap-1 hover:text-[#2D3324] transition-colors"
          >
            See all <ArrowRight size={12} />
          </button>
        </div>

        {/* Horizontal scroll strip */}
        <div className="relative group">
          <button 
            onClick={() => scroll("left")} 
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-[#2D3324] flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-[#8B9A71]/10 z-10 hover:scale-110 hover:bg-white transition-all"
          >
            <ArrowRight size={14} className="rotate-180" />
          </button>
          
          <button 
            onClick={() => scroll("right")} 
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-[#2D3324] flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-[#8B9A71]/10 z-10 hover:scale-110 hover:bg-white transition-all"
          >
            <ArrowRight size={14} />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 px-1 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] snap-x snap-mandatory"
          >
          {RECOMMENDED_COACHES.map((coach) => (
            <button
              key={coach.id}
              onClick={() => navigate(`/portal/coaches/${coach.id}`)}
              className="shrink-0 w-44 bg-white rounded-[28px] border border-[#8B9A71]/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden text-left active:scale-[0.97] group snap-start"
            >
              {/* Photo */}
              <div className="relative h-36 bg-[#2D3324] overflow-hidden">
                <img
                  src={coach.img}
                  alt={coach.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-[#2D3324]/80 backdrop-blur-sm text-white text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Shield size={8} />
                  {coach.badge}
                </div>
                {/* Rating */}
                <div className="absolute bottom-3 right-3 bg-white/90 text-[#2D3324] text-[9px] font-black px-2 py-1 rounded-xl flex items-center gap-1">
                  <Star size={9} fill="#A68A45" className="text-[#A68A45]" />
                  {coach.rating}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-[8px] font-black text-[#8B9A71] uppercase tracking-widest mb-0.5">{coach.specialty}</p>
                <h3 className="text-sm font-black text-[#2D3324] leading-tight mb-1">{coach.name}</h3>
                <p className="text-[9px] text-[#5E6C54]/60 font-bold mb-3">{coach.title} · {coach.experience}</p>
                <div className="bg-[#2D3324] text-white text-[8px] font-black uppercase tracking-widest py-2 rounded-xl text-center">
                  {coach.price}
                </div>
              </div>
            </button>
          ))}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-4xl mx-auto px-6 mt-8 space-y-6">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-8">
            <UpcomingSession />

            {/* Path Categories */}
            <div className="space-y-4">
              <p className="text-[9px] font-black text-[#5E6C54] uppercase tracking-[0.4em] opacity-50 px-1">Wellness Paths</p>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: Brain, label: "Therapy" },
                  { icon: Sparkles, label: "Meditation" },
                  { icon: BookOpen, label: "Journaling" },
                  { icon: ClipboardList, label: "Assess" },
                  { icon: Users, label: "Workshops" },
                  { icon: HeartPulse, label: "Community" },
                  { icon: Wind, label: "Breathwork" },
                  { icon: MoreHorizontal, label: "More" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2.5 group cursor-pointer">
                    <div className="w-14 h-14 bg-white rounded-[20px] shadow-sm border border-[#8B9A71]/10 flex items-center justify-center text-[#8B9A71] group-hover:bg-[#2D3324] group-hover:text-white group-hover:-translate-y-1 transition-all duration-200">
                      <item.icon size={20} />
                    </div>
                    <span className="text-[9px] font-black text-[#5E6C54] uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#2D3324] rounded-[36px] p-6 text-white relative overflow-hidden group shadow-lg hover:-translate-y-1 transition-transform cursor-pointer">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl group-hover:scale-150 transition-transform" />
                <p className="text-4xl font-black font-serif mb-2">29</p>
                <p className="text-[9px] font-black text-[#8B9A71] uppercase tracking-[0.3em]">Insights Found</p>
              </div>
              <div className="bg-[#2D3324] rounded-[36px] p-6 text-white relative overflow-hidden group shadow-lg hover:-translate-y-1 transition-transform cursor-pointer">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl group-hover:scale-150 transition-transform" />
                <p className="text-4xl font-black font-serif mb-2 text-[#A68A45]">03</p>
                <p className="text-[9px] font-black text-[#8B9A71] uppercase tracking-[0.3em]">Active Goals</p>
              </div>
            </div>

            {/* Recent History */}
            <RecentHistory />
          </div>
          
          {/* Right Column (Sidebar) */}
          <DashboardSidebar />
        </div>

      </div>
    </div>
  );
}
