import { useEffect } from "react";
import { Download, Bell } from "react-bootstrap-icons";
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
      {/* Header Area */}
      <div className="bg-[#FFFFFF] p-8 rounded-[40px] border border-[#99A88C]/10 md:border-none md:p-0 md:bg-transparent shadow-xl md:shadow-none flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[#5E6C54] font-serif">
              Good afternoon, Sarah
            </h1>
            {isAnonymous && <AnonBadge />}
          </div>
          <p className="text-[#5E6C54]/80 font-bold uppercase tracking-widest text-[10px]">Week 6 · 8 Sessions Completed</p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="p-3 bg-[#FFFFFF] rounded-2xl border border-[#99A88C]/10 text-[#5E6C54] relative">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#A68A45] rounded-full border-2 border-[#FFFFFF]" />
           </button>
           <button className="flex items-center gap-2 px-6 py-3 bg-[#99A88C] text-[#FFFFFF] rounded-2xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#99A88C]/10 hover:bg-[#99A88C] transition-all">
              <Download size={16} />
              Export Summary
           </button>
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
