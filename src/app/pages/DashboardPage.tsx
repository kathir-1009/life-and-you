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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-sage-dark font-serif">
              Good afternoon, {isAnonymous ? "Wellness Seeker" : user.name.split(' ')[0]}
            </h1>
            {isAnonymous && <AnonBadge />}
          </div>
          <p className="text-sage-dark/80 font-bold uppercase tracking-widest text-[10px]">Week 6 · 8 Sessions Completed</p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="p-3 bg-white rounded-2xl border border-sage/10 text-sage-dark relative">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-gold rounded-full border-2 border-white" />
           </button>
           <button className="flex items-center gap-2 px-6 py-3 bg-sage text-white rounded-2xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-sage/10 hover:bg-sage transition-all">
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
