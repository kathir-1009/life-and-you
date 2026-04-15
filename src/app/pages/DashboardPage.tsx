import { useEffect } from "react";
import { Link } from "react-router";
import { 
  Calendar3, 
  ChatRightDots, 
  JournalBookmark, 
  Download, 
  Grid1x2, 
  Bell, 
  ArrowRight 
} from "react-bootstrap-icons";
import { useUser } from "../context/UserContext";
import { StatTile } from "../components/shared/StatTile";
import { SessionCard } from "../components/shared/SessionCard";
import { ProgressBar } from "../components/shared/ProgressBar";
import { AnonBadge } from "../components/shared/AnonBadge";

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
            <h1 className="text-3xl md:text-4xl font-bold text-[#1C2320] font-serif">
              Good afternoon, {isAnonymous ? "Wellness Seeker" : user.name.split(' ')[0]}
            </h1>
            {isAnonymous && <AnonBadge />}
          </div>
          <p className="text-[#1C2320]/80 font-bold uppercase tracking-widest text-[10px]">Week 6 · 8 Sessions Completed</p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="p-3 bg-white rounded-2xl border border-[#3D5247]/10 text-[#3D5247] relative">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#C4A35A] rounded-full border-2 border-white" />
           </button>
           <button className="flex items-center gap-2 px-6 py-3 bg-[#3D5247] text-white rounded-2xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#3D5247]/10 hover:bg-[#1C2320] transition-all">
              <Download size={16} />
              Export Summary
           </button>
        </div>
      </div>

      {/* Hero Stats Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatTile 
          label="Mood Average" 
          value="7.8/10" 
          delta={{ value: "12%", isPositive: true }} 
          icon={Grid1x2}
        />
        <StatTile 
          label="Sessions Done" 
          value="08" 
          delta={{ value: "2", isPositive: true }} 
          icon={Calendar3}
        />
        <StatTile 
          label="Resources Read" 
          value="14" 
          icon={JournalBookmark}
        />
        <StatTile 
          label="Secure Messages" 
          value="03" 
          icon={ChatRightDots}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Sessions & Journey */}
        <div className="lg:col-span-2 space-y-8">
          {/* Upcoming Session Banner */}
          <div className="bg-[#3D5247] rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
             <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                   <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Confirmed Session</span>
                   <h2 className="text-3xl font-serif mb-2">Tomorrow at 10:00 AM</h2>
                   <p className="text-white/60 font-medium">Session with Coach Sharma · 60 Minutes</p>
                </div>
                <Link 
                  to="/session/next" 
                  className="px-8 py-4 bg-[#C4A35A] text-[#1C2320] rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-transform text-center shadow-lg shadow-black/20"
                >
                  Join Room
                </Link>
             </div>
          </div>

          {/* Recent History */}
          <div className="space-y-4">
             <div className="flex items-center justify-between px-2">
                <h3 className="text-xl font-bold text-[#3D5247] font-serif">Recent Sessions</h3>
                <Link to="/portal/sessions" className="text-xs font-bold text-[#C4A35A] uppercase tracking-widest">View All</Link>
             </div>
             <div className="grid gap-4">
                <SessionCard 
                  role="client" 
                  session={{
                    id: "1",
                    date: "Mar 11",
                    time: "02:00 PM",
                    participantName: "Sharma",
                    type: "Individual Coaching",
                    status: "completed"
                  }} 
                />
                <SessionCard 
                  role="client" 
                  session={{
                    id: "2",
                    date: "Mar 04",
                    time: "10:00 AM",
                    participantName: "Sharma",
                    type: "Discovery Call",
                    status: "completed"
                  }} 
                />
             </div>
          </div>
        </div>

        {/* Sidebar: Progress & Library Snippet */}
        <div className="space-y-8">
           {/* Progress Overview Card */}
           <div className="bg-white p-8 rounded-[32px] border border-[#3D5247]/10 shadow-sm space-y-8">
              <div className="flex items-center justify-between">
                 <h3 className="font-bold text-[#3D5247] uppercase tracking-widest text-xs">Growth Areas</h3>
                 <Link to="/portal/progress" className="w-8 h-8 bg-[#F5EFE6] rounded-xl flex items-center justify-center text-[#3D5247]"><ArrowRight size={14} /></Link>
              </div>
              
              <div className="space-y-6">
                 <ProgressBar label="Self-Awareness" progress={72} />
                 <ProgressBar label="Communication" progress={81} />
                 <ProgressBar label="Resilience" progress={58} />
              </div>

              <div className="pt-6 border-t border-[#F5EFE6]">
                 <p className="text-[11px] text-[#3D5247]/40 font-bold uppercase tracking-widest leading-relaxed">
                   Next Milestone:<br />
                   <span className="text-[#3D5247]">10 Sessions Completed (2 to go)</span>
                 </p>
              </div>
           </div>

           {/* Library Snippet */}
           <div className="bg-[#EDF2EE] p-8 rounded-[32px] border border-[#3D5247]/10 overflow-hidden relative group cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3D5247]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-[#3D5247]/10 transition-colors" />
              <h4 className="font-bold text-[#3D5247] uppercase tracking-widest text-[10px] mb-6">Recommended for you</h4>
              <div className="bg-white p-4 rounded-2xl shadow-sm mb-6 flex items-center gap-4">
                 <div className="w-12 h-12 bg-[#FBF5E6] rounded-xl flex items-center justify-center text-[#C4A35A] shrink-0">
                    <JournalBookmark size={20} />
                 </div>
                 <div>
                    <h5 className="text-[13px] font-bold text-[#3D5247] leading-tight mb-1">Anxiety Management NLP</h5>
                    <p className="text-[10px] text-[#3D5247]/60 font-bold uppercase tracking-tighter">Audio Guide · 12 Min</p>
                 </div>
              </div>
              <Link to="/portal/library" className="text-[10px] font-bold text-[#3D5247] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                Access Library <ArrowRight size={14} />
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
