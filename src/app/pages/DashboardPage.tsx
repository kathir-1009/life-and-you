import { useEffect } from "react";
import { Download, Bell, ArrowRight } from "react-bootstrap-icons";
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
    <div className="space-y-8 animate-in fade-in duration-700 px-4 md:px-0">
      {/* Premium Header - App Aesthetic */}
      <div className="bg-[#FFFFFF] p-8 rounded-[40px] shadow-xl border border-[#99A88C]/10 md:bg-transparent md:border-none md:shadow-none md:p-0">
        <div className="flex items-center justify-between mb-8">
           <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FCF8E8] border border-[#99A88C]/10 flex items-center justify-center overflow-hidden shadow-sm">
                 <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                 <p className="text-[10px] font-black text-[#99A88C] uppercase tracking-widest mb-0.5">Hello,</p>
                 <h1 className="text-2xl font-black text-[#5E6C54] tracking-tight">
                    {isAnonymous ? "Wellness Seeker" : user.name.split(' ')[0]}
                 </h1>
              </div>
           </div>
           
           <div className="flex gap-3">
              <button className="w-12 h-12 bg-[#FCF8E8] rounded-2xl flex items-center justify-center text-[#5E6C54] relative hover:scale-105 transition-all">
                 <Bell size={20} />
                 <span className="absolute top-3.5 right-3.5 w-2 h-2 bg-[#A68A45] rounded-full border-2 border-[#FFFFFF]" />
              </button>
           </div>
        </div>

        <div className="mb-10">
           <h2 className="text-xl md:text-2xl font-bold text-[#5E6C54] font-serif leading-tight">
              Every day is a new opportunity to <span className="text-[#99A88C]">grow and give your best</span>
           </h2>
        </div>

        {/* Integrated Search Console */}
        <div className="relative group mb-4">
           <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#99A88C]">
              <Download size={18} />
           </div>
           <div className="w-full pl-16 pr-8 py-5 bg-[#FCF8E8] rounded-full text-[#5E6C54] text-xs font-bold uppercase tracking-widest flex items-center justify-between group-hover:bg-[#FFFFFF] transition-all border border-transparent group-hover:border-[#99A88C]/20 shadow-inner">
              <span>Generate Performance Report</span>
              <ArrowRight size={16} />
           </div>
        </div>
      </div>

      <HeroStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Sessions & Journey */}
        <div className="lg:col-span-2 space-y-8">
          <UpcomingSession />
          <RecentHistory />
        </div>

        {/* Sidebar: Progress & Library Snippet */}
        <DashboardSidebar />
      </div>
    </div>
  );
}
