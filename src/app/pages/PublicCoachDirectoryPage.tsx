import { useState } from "react";
import { Search, Filter, StarFill, ShieldCheck, HeartFill, ArrowRight, PersonFill, GeoAltFill } from "react-bootstrap-icons";
import { Link } from "react-router";

export function PublicCoachDirectoryPage() {
  const coaches = [
    { id: 1, name: "Coach Sharma", specialty: "Anxiety & Focus", bio: "Certified NLP Practitioner with over 10 years of experience in mindfulness-based cognitive coaching.", rating: 4.9, reviews: 156, price: "$120", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=60" },
    { id: 2, name: "Elena Rodriguez", specialty: "Emotional Intelligence", bio: "Helping high-performers navigate complex emotional landscapes and build resilient relationships.", rating: 4.8, reviews: 92, price: "$150", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60" },
    { id: 3, name: "John Doe", specialty: "Career Pivot", bio: "Strategist focused on career transitions and purposeful professional growth.", rating: 5.0, reviews: 48, price: "$110", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60" },
    { id: 4, name: "Sarah Jenkins", specialty: "Grief Healing", bio: "Compassionate support for navigating life's most difficult transitions and losses.", rating: 4.7, reviews: 210, price: "$130", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60" },
  ];

  return (
    <div className="animate-in fade-in duration-1000 pb-20">
      {/* Hero Section */}
      <div className="bg-cream/50 pt-24 pb-32 px-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none" />
         <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-black text-sage-dark tracking-tighter leading-tight font-serif mb-6">
               Find Your <br className="hidden md:block" /> Sanctuary Guide
            </h1>
            <p className="max-w-2xl mx-auto text-sage-dark/60 text-sm md:text-base font-medium leading-relaxed mb-12">
               Our certified professionals are vetted for empathy, expertise, and a commitment to your transformation. Discover the perfect partner for your journey.
            </p>
            
            {/* Quick Search */}
            <div className="max-w-2xl mx-auto bg-white p-3 rounded-[32px] shadow-premium border border-sage/10 flex flex-col md:flex-row gap-3">
               <div className="flex-1 relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-sage-dark/30" size={18} />
                  <input 
                     type="text" 
                     placeholder="Search specialty (e.g. Anxiety)" 
                     className="w-full bg-cream/30 border-none pl-14 pr-6 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest outline-none"
                  />
               </div>
               <button className="bg-sage text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-sage-dark transition-all">
                  Search Directory
               </button>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-16">
         {/* Filter Section */}
         <div className="flex flex-wrap items-center justify-between gap-8 border-b border-sage/5 pb-8">
            <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
               {["All Specialties", "Mindfulness", "Career", "Emotional Intelligence", "Wellness"].map((tab) => (
                  <button key={tab} className="px-6 py-3 rounded-xl bg-white border border-sage/10 text-[9px] font-black uppercase tracking-widest text-sage-dark hover:bg-sage hover:text-white transition-all whitespace-nowrap">
                     {tab}
                  </button>
               ))}
            </div>
            <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-sage-dark/40 hover:text-sage-dark transition-colors">
               <Filter size={16} /> More Filters
            </button>
         </div>

         {/* Coach Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {coaches.map((coach) => (
               <div key={coach.id} className="bg-white rounded-[48px] p-8 lg:p-10 border border-sage/5 shadow-premium group hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row gap-10">
                  <div className="w-full md:w-48 h-64 rounded-[40px] overflow-hidden shadow-xl relative shrink-0">
                     <img 
                        src={coach.img} 
                        alt={coach.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="flex flex-col justify-between py-2">
                     <div>
                        <div className="flex items-center gap-2 mb-4">
                           <ShieldCheck className="text-sage" size={16} />
                           <span className="text-[9px] font-black text-sage uppercase tracking-widest">Certified Sanctuary Guide</span>
                        </div>
                        <h3 className="text-2xl font-bold text-sage-dark font-serif mb-2">{coach.name}</h3>
                        <p className="text-[10px] text-gold-dark font-black uppercase tracking-[0.2em] mb-6">{coach.specialty}</p>
                        <p className="text-sm text-sage-dark/60 font-medium leading-relaxed mb-8 line-clamp-3">
                           {coach.bio}
                        </p>
                     </div>
                     
                     <div className="flex items-center justify-between pt-6 border-t border-sage/5 mt-auto">
                        <div className="flex items-center gap-4">
                           <div className="flex items-center gap-1 text-gold">
                              <StarFill size={14} />
                              <span className="text-xs font-black text-sage-dark">{coach.rating}</span>
                           </div>
                           <span className="text-[9px] font-black text-sage-dark/30 uppercase tracking-widest">{coach.reviews} Reviews</span>
                        </div>
                        <Link 
                           to={`/home/coaches/${coach.id}`}
                           className="w-12 h-12 bg-cream text-sage-dark rounded-2xl flex items-center justify-center hover:bg-sage hover:text-white transition-all shadow-sm"
                        >
                           <ArrowRight size={20} />
                        </Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Call to Action */}
         <div className="bg-[#5E6C54] rounded-[60px] p-12 lg:p-20 text-white relative overflow-hidden shadow-premium">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] opacity-50" />
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
               <div className="max-w-xl">
                  <div className="w-16 h-16 bg-white/10 rounded-[24px] flex items-center justify-center mb-8 text-gold">
                     <HeartFill size={32} />
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold font-serif mb-6 leading-tight">Ready to meet your perfect match?</h2>
                  <p className="text-white/60 text-sm font-medium leading-relaxed">
                     Take our 2-minute discovery quiz to get matched with the top 3 guides specifically suited to your goals and personality.
                  </p>
               </div>
               <button className="bg-white text-sage-dark px-12 py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-gold transition-all whitespace-nowrap">
                  Take Discovery Quiz
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
