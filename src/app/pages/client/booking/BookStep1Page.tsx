import { Link, useNavigate } from "react-router";
import { CameraVideoFill, TelephoneFill, ChatDotsFill, Calendar3, PersonCircle, ClockHistory, StarFill } from "react-bootstrap-icons";
import { ChevronLeft, Compass, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export function BookSessionStep1Page() {
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [selectedCoach, setSelectedCoach] = useState<number | null>(null);

  const coaches = [
    { id: 1, name: "Sarah Jenkins", specialty: "Trauma Specialist", rating: 4.9, img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Benjamin K.", specialty: "NLP Master", rating: 5.0, img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Mia Lang", specialty: "Growth Catalyst", rating: 4.8, img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "David Ross", specialty: "Mindfulness Guide", rating: 4.7, img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" },
    { id: 5, name: "Elena Rodriguez", specialty: "Zen Master", rating: 4.7, img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" },
    { id: 6, name: "Marcus Thorne", specialty: "Leadership", rating: 4.9, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
    { id: 7, name: "Sophie Chen", specialty: "EQ Specialist", rating: 4.8, img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=800" },
    { id: 8, name: "Jordan Smith", specialty: "Cognitive Focus", rating: 4.9, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
  ];

  const paths = [
    { id: 'video', icon: CameraVideoFill, title: "Video", subtitle: "Identity-Shield", desc: "Face-to-face encrypted video" },
    { id: 'voice', icon: TelephoneFill, title: "Voice", subtitle: "Sanctuary", desc: "Pure audio connection" },
    { id: 'text', icon: ChatDotsFill, title: "Text", subtitle: "Reflection", desc: "Asynchronous messaging" },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] pb-32 portal-context font-sans-app">
      
      {/* Cinematic Header */}
      <div className="bg-[#2D3324] text-white px-6 py-12 rounded-b-[40px] lg:rounded-b-[60px] relative overflow-hidden shadow-2xl z-20">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFFFFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none" />
         <div className="max-w-6xl mx-auto flex items-center gap-6 relative z-10">
            <button 
               onClick={() => navigate(-1)}
               className="w-12 h-12 bg-[#FFFFFF]/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-[#FFFFFF]/10 hover:bg-[#FFFFFF]/20 transition-all shrink-0"
            >
               <ChevronLeft size={24} />
            </button>
            <div>
               <h1 className="text-2xl lg:text-4xl font-black tracking-tight leading-none text-[#FFFFFF] uppercase font-serif">Book Your Breakthrough</h1>
               <p className="text-[#8B9A71] text-[10px] lg:text-xs font-black uppercase tracking-[0.4em] mt-2 opacity-80">Phase 1: Configure Your Journey</p>
            </div>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -translate-y-8 relative z-30">
        {/* Step 1: Choose Your Path (Horizontal Row) */}
        <div className="bg-white/80 backdrop-blur-2xl p-8 lg:p-12 rounded-[48px] shadow-premium border border-white/20 mb-12">
            <div className="flex items-center gap-3 mb-10">
               <div className="w-8 h-8 bg-[#99A88C] rounded-lg flex items-center justify-center text-white font-black text-xs">01</div>
               <h2 className="text-sm font-black text-[#5E6C54] uppercase tracking-widest">Choose Your Modality</h2>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-6">
               {paths.map((path) => (
                  <button
                     key={path.id}
                     onClick={() => setSelectedPath(path.id)}
                     className={`group relative p-4 md:p-8 rounded-[24px] md:rounded-[40px] border-2 transition-all duration-500 text-center md:text-left overflow-hidden ${
                        selectedPath === path.id 
                        ? 'bg-[#5E6C54] border-transparent shadow-2xl scale-[1.02]' 
                        : 'bg-white border-[#99A88C]/10 hover:border-[#99A88C]/40 hover:shadow-xl'
                     }`}
                  >
                     <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-3 md:mb-6 transition-all duration-500 ${
                        selectedPath === path.id ? 'bg-[#99A88C] text-white' : 'bg-[#FFFFFF] text-[#99A88C]'
                     }`}>
                        <path.icon size={20} className="md:w-7 md:h-7" />
                     </div>
                     <h3 className={`text-[10px] md:text-lg font-black uppercase tracking-tight leading-none mb-1 ${selectedPath === path.id ? 'text-white' : 'text-[#5E6C54]'}`}>{path.title}</h3>
                     <p className={`hidden md:block text-[10px] font-bold uppercase tracking-widest mb-4 ${selectedPath === path.id ? 'text-[#8B9A71]' : 'text-[#A68A45]'}`}>{path.subtitle}</p>
                     <p className={`hidden md:block text-xs font-medium leading-relaxed italic ${selectedPath === path.id ? 'text-white/60' : 'text-[#5E6C54]/40'}`}>{path.desc}</p>
                     
                     {selectedPath === path.id && (
                        <div className="absolute top-2 right-2 md:top-6 md:right-6 w-5 h-5 md:w-8 md:h-8 bg-[#99A88C] rounded-full flex items-center justify-center text-white shadow-lg animate-in zoom-in duration-300">
                           <Check size={12} className="md:w-4 md:h-4" />
                        </div>
                     )}
                  </button>
               ))}
            </div>
        </div>

        {/* Step 2: Select Your Coach (Appears after Path Selection) */}
        <div className={`transition-all duration-700 ${selectedPath ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-10 scale-[0.98]'}`}>
           <div className="bg-[#2D3324] p-8 lg:p-14 rounded-[48px] lg:rounded-[64px] border border-white/10 mb-12 shadow-2xl relative overflow-hidden">
               {/* Decorative Background Element */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
               
               <div className="flex items-center justify-between mb-12 relative z-10">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-[#A68A45] rounded-xl flex items-center justify-center text-white font-black text-xs shadow-lg">02</div>
                     <h2 className="text-lg font-black text-white uppercase font-serif tracking-widest">Select Your Guide</h2>
                  </div>
                  <Link to="/portal/explore" className="text-[10px] font-black text-[#8B9A71] hover:text-white uppercase tracking-widest transition-colors">View All Guides</Link>
               </div>

               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative z-10">
                  {coaches.map(coach => (
                    <button 
                      key={coach.id}
                      onClick={() => setSelectedCoach(coach.id)}
                      className={`relative p-5 md:p-8 rounded-[40px] border-2 transition-all duration-500 text-center flex flex-col items-center group ${
                        selectedCoach === coach.id 
                        ? 'bg-white border-transparent shadow-2xl scale-[1.05] z-10' 
                        : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                      }`}
                    >
                       <div className={`w-20 h-20 md:w-32 md:h-32 rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl mb-6 relative transition-all duration-500 ${selectedCoach === coach.id ? 'ring-4 ring-[#A68A45]' : 'group-hover:scale-105'}`}>
                          <img src={coach.img} alt={coach.name} className="w-full h-full object-cover" />
                       </div>
                       
                       <h4 className={`text-xs md:text-base font-black uppercase tracking-tight mb-1 ${selectedCoach === coach.id ? 'text-[#2D3324]' : 'text-white'}`}>{coach.name}</h4>
                       <p className={`text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-4 ${selectedCoach === coach.id ? 'text-[#A68A45]' : 'text-white/40'}`}>{coach.specialty}</p>
                       
                       <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${selectedCoach === coach.id ? 'bg-[#FFFFFF]' : 'bg-white/5'}`}>
                          <StarFill size={10} className="text-[#A68A45]" />
                          <span className={`text-[10px] font-black ${selectedCoach === coach.id ? 'text-[#2D3324]' : 'text-white'}`}>{coach.rating}</span>
                       </div>

                       {selectedCoach === coach.id && (
                          <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#A68A45] rounded-2xl flex items-center justify-center text-white shadow-xl rotate-12 animate-in bounce-in">
                             <Check size={20} />
                          </div>
                       )}
                    </button>
                  ))}
               </div>
           </div>
        </div>

        {/* Final Action Button */}
        <div className={`transition-all duration-700 flex justify-center ${selectedCoach ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
           <button 
              onClick={() => navigate("/portal/book/step-2")}
              className="bg-[#A68A45] text-white px-12 py-6 rounded-[40px] text-sm font-black uppercase tracking-[0.3em] shadow-2xl hover:scale-105 hover:bg-[#8e7539] transition-all flex items-center gap-6 group"
           >
              Continue to Scheduling
              <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center group-hover:translate-x-2 transition-transform">
                 <ArrowRight size={24} />
              </div>
           </button>
        </div>
      </div>
    </div>
  );
}
