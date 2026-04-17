import { useEffect } from "react";
import { Download, Bell, ArrowRight, LightningFill, PencilFill, Crop, Type, CodeSlash, BriefcaseFill, WrenchAdjustable, ThreeDots } from "react-bootstrap-icons";
import { useUser } from "../context/UserContext";
import { AnonBadge } from "../components/shared/AnonBadge";
import { HeroStats } from "../components/dashboard/HeroStats";
import { UpcomingSession } from "../components/dashboard/UpcomingSession";
import { RecentHistory } from "../components/dashboard/RecentHistory";
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";

export function DashboardPage() {
  const { user, isAnonymous } = useUser();

  useEffect(() => {
    document.title = "Dashboard | Life & You";
  }, []);

  return (
    <div className="animate-in fade-in duration-700 portal-context pb-20">
      {/* Modern Curved Header - App Aesthetic */}
      <div className="relative pt-12 pb-24 bg-[#5E6C54] overflow-hidden">
         {/* Ambient Background Glows */}
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFFFFF]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#99A88C]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]" />
         
         <div className="flex items-center justify-between relative z-10 max-w-4xl mx-auto px-8">
            <div>
               <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-60">Welcome back,</p>
               <h1 className="text-3xl md:text-5xl font-black text-[#FFFFFF] tracking-tight leading-none mb-1">
                  {isAnonymous ? "Wellness Seeker" : user.name.split(' ')[0]}
               </h1>
            </div>
            
            <div className="relative flex items-center gap-4">
               <button className="w-12 h-12 bg-[#FFFFFF]/10 rounded-2xl flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-all">
                  <Bell size={20} />
               </button>
               <div className="w-14 h-14 rounded-[24px] border-4 border-white/20 overflow-hidden shadow-2xl transition-transform hover:scale-105">
                  <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
               </div>
            </div>
         </div>

         {/* Curvature Element */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[100px] bg-[#FCF8E8] rounded-t-[100%] z-0" />
      </div>

      {/* Overlapping Search/Action Bar */}
      <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
         <div className="bg-[#FFFFFF] p-3 rounded-[32px] shadow-[0_20px_50px_rgba(94,108,84,0.15)] border border-[#99A88C]/5 flex items-center gap-4">
            <div className="flex-1 relative group">
               <Download className="absolute left-6 top-1/2 -translate-y-1/2 text-[#99A88C]" size={18} />
               <div className="w-full pl-16 pr-6 py-4 bg-[#FCF8E8] rounded-2xl text-[#5E6C54] text-[11px] font-black uppercase tracking-widest flex items-center justify-between cursor-pointer hover:bg-white transition-all shadow-inner border border-transparent hover:border-[#99A88C]/20">
                  <span>Explore Your Wellness Journey</span>
                  <ArrowRight size={16} />
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-16 space-y-12">
         {/* Large Feature Stats Grid */}
         <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#5E6C54] rounded-[48px] p-8 lg:p-10 text-white relative overflow-hidden group shadow-2xl hover:-translate-y-2 transition-transform cursor-pointer">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform" />
               <p className="text-4xl lg:text-5xl font-black font-serif mb-4">29</p>
               <p className="text-[10px] font-black text-[#99A88C] uppercase tracking-[0.3em]">Insights Found</p>
            </div>
            
            <div className="bg-[#99A88C] rounded-[48px] p-8 lg:p-10 text-white relative overflow-hidden group shadow-2xl hover:-translate-y-2 transition-transform cursor-pointer">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform" />
               <p className="text-4xl lg:text-5xl font-black font-serif mb-4">03</p>
               <p className="text-[10px] font-black text-[#FCF8E8] uppercase tracking-[0.3em]">Active Goals</p>
            </div>
         </div>

         {/* Categories / Focus Areas Grid - App Motif */}
         <div className="space-y-8">
            <h3 className="text-[11px] font-black text-[#5E6C54] uppercase tracking-[0.4em] px-2 opacity-60">Path Categories</h3>
            <div className="grid grid-cols-4 gap-6">
               {[
                  { icon: LightningFill, label: "Energy" },
                  { icon: PencilFill, label: "Journal" },
                  { icon: Crop, label: "Focus" },
                  { icon: Type, label: "Cognition" },
                  { icon: CodeSlash, label: "Blueprint" },
                  { icon: BriefcaseFill, label: "Career" },
                  { icon: WrenchAdjustable, label: "Tools" },
                  { icon: ThreeDots, label: "More" }
               ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-4 group cursor-pointer">
                     <div className="w-16 h-16 bg-[#FFFFFF] rounded-[24px] shadow-sm border border-[#99A88C]/10 flex items-center justify-center text-[#99A88C] group-hover:bg-[#5E6C54] group-hover:text-[#FFFFFF] group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                        <item.icon size={22} className="transition-transform group-hover:scale-110" />
                     </div>
                     <span className="text-[9px] font-black text-[#5E6C54]/60 uppercase tracking-widest">{item.label}</span>
                  </div>
               ))}
            </div>
         </div>

         {/* Original Content Sections */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
               <UpcomingSession />
               <RecentHistory />
            </div>
            <DashboardSidebar />
         </div>
      </div>
    </div>
  );
}
