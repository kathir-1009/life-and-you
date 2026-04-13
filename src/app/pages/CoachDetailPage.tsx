import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Star, Shield, Check, MessageCircle, Calendar, MapPin, Globe, Briefcase, Award } from "lucide-react";

export function CoachDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for the coach
  const coach = {
    id: id || 1,
    name: "Coach Sarah Jenkins",
    title: "Senior NLP Master & ICF Trainer",
    rating: 4.9,
    reviews: 124,
    specialty: "Anxiety & Trauma Recovery",
    experience: "12+ Years",
    price: "₹3,500/hr",
    img: "/img/about/account-01.jpg",
    bio: "With over a decade of experience in cognitive behavioral shifts and Neuro-Linguistic Programming, I help high-performers navigate internal barriers while maintaining absolute privacy. My approach is evidence-based and soul-focused.",
    achievements: ["ICF Master Certified", "NLP Gold Standards", "2023 Coach of the Year"],
    approach: [
      { title: "Neuro-Mapping", desc: "Identifying the linguistic patterns that keep you stuck." },
      { title: "Silent Support", desc: "Full session anonymity options for total safety." },
      { title: "Growth Blueprints", desc: "Actionable paths tailored to your specific goals." }
    ]
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-32">
      {/* Visual Header */}
      <div className="h-96 relative overflow-hidden bg-[#2D3324]">
         <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] to-transparent z-10" />
         <img src={coach.img} alt={coach.name} className="w-full h-full object-cover opacity-50" />
         
         <div className="absolute top-10 left-6 z-20">
            <button onClick={() => navigate(-1)} className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
               <ArrowLeft size={24} />
            </button>
         </div>

         <div className="absolute bottom-12 left-8 z-20">
            <div className="flex items-center gap-3 bg-[#8B9A71] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest mb-4 w-max">
               <Shield size={12} />
               Verified Expert
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#2D3324] leading-tight">{coach.name}</h1>
            <p className="text-lg font-bold text-[#545454]/80 mt-2">{coach.title}</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 mt-12">
         {/* Sidebar Bio Info */}
         <div className="lg:col-span-2 space-y-12">
            <section>
               <h2 className="text-[11px] font-black text-[#8B9A71] uppercase tracking-[0.4em] mb-6">About the Coach</h2>
               <p className="text-xl text-[#545454] leading-relaxed font-medium">
                  {coach.bio}
               </p>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
               <InfoCard icon={Briefcase} label="Experience" val={coach.experience} />
               <InfoCard icon={Star} label="Rating" val={`${coach.rating} / 5.0`} />
               <InfoCard icon={Globe} label="Languages" val="English, Hindi" />
            </section>

            <section className="space-y-8">
               <h2 className="text-[11px] font-black text-[#8B9A71] uppercase tracking-[0.4em]">Methodology</h2>
               <div className="space-y-4">
                  {coach.approach.map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-[40px] border border-[rgba(139,154,113,0.08)] shadow-sm flex items-start gap-6 group hover:border-[#8B9A71] transition-all">
                       <div className="w-12 h-12 bg-[#FAF9F6] text-[#8B9A71] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#8B9A71] group-hover:text-white transition-all">
                          <Check size={24} />
                       </div>
                       <div>
                          <h4 className="text-lg font-black text-[#2D3324] mb-2">{item.title}</h4>
                          <p className="text-sm text-[#545454] leading-relaxed font-medium opacity-70">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </section>
         </div>

         {/* Booking Widget Container */}
         <div className="lg:col-span-1">
            <div className="bg-[#2D3324] p-10 rounded-[64px] shadow-2xl sticky top-12">
               <h3 className="text-2xl font-black text-white mb-2">Book a Session</h3>
               <p className="text-[#8B9A71] text-xs font-black uppercase tracking-widest mb-10">Starting from {coach.price}</p>
               
               <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4 text-white/60">
                     <Calendar size={18} />
                     <span className="text-sm font-bold">Available: Mon - Fri</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/60">
                     <MapPin size={18} />
                     <span className="text-sm font-bold">Online / Dubai Node</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/60">
                     <Award size={18} />
                     <span className="text-sm font-bold">100% Satisfaction Guarantee</span>
                  </div>
               </div>

               <button 
                 onClick={() => navigate(`/app/book?coach=${coach.id}`)}
                 className="w-full bg-[#8B9A71] text-white py-6 rounded-pill text-[11px] font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-[#2D3324] transition-all mb-4"
               >
                  Reserve Slot Now
               </button>
               <button className="w-full bg-white/5 border border-white/10 text-white py-6 rounded-pill text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                  <MessageCircle size={18} />
                  Message Promptly
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, label, val }: { icon: any, label: string, val: string }) {
  return (
    <div className="bg-white p-6 rounded-[32px] border border-[rgba(139,154,113,0.08)] shadow-sm">
       <Icon size={24} className="text-[#8B9A71] mb-4" />
       <p className="text-[10px] font-black text-[#545454]/40 uppercase tracking-widest mb-1">{label}</p>
       <p className="text-sm font-black text-[#2D3324]">{val}</p>
    </div>
  );
}
