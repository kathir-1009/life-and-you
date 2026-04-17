import { Bell, ArrowLeft, Trash2, Calendar, MessageCircle, Star, Sparkles, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

export function NotificationsPage() {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: "session",
      icon: Calendar,
      title: "Session Reminder",
      desc: "Your session with Dr. Johnson is scheduled for tomorrow at 10:00 AM.",
      time: "2h ago",
      color: "bg-[#8B9A71]",
      isNew: true
    },
    {
      id: 2,
      type: "message",
      icon: MessageCircle,
      title: "New Message",
      desc: "Coach Sarah Jenkins sent you a message regarding your latest reflection.",
      time: "4h ago",
      color: "bg-[#4E5540]",
      isNew: true
    },
    {
      id: 3,
      type: "milestone",
      icon: Star,
      title: "Milestone Achieved!",
      desc: "You've completed your 3rd consecutive week of emotional check-ins. Keep it up!",
      time: "1d ago",
      color: "bg-[#2D3324]",
      isNew: false
    },
    {
      id: 4,
      type: "system",
      icon: Sparkles,
      title: "New Resource Available",
      desc: "A new guided meditation for 'Deep Focus' has been added to your library.",
      time: "2d ago",
      color: "bg-[#CED2BA]",
      isNew: false
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-32">
      {/* Cinematic Header - Mobile Only */}
      <div className="lg:hidden relative">
         <button 
            onClick={() => navigate(-1)}
            className="absolute top-12 left-6 z-20 w-10 h-10 bg-[#FFFFFF]/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-[#FFFFFF]/10 active:scale-95 transition-all"
         >
            <ChevronLeft size={20} />
         </button>

         <div className="bg-[#5E6C54] pt-24 pb-32 px-6 rounded-b-[80px] relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
            <div className="relative z-10">
               <h1 className="text-3xl font-black tracking-tight mb-2 !text-[#FFFFFF]" style={{ color: '#FFFFFF' }}>Notifications</h1>
               <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.3em] !text-[#99A88C]">Stay updated on your journey</p>
            </div>
         </div>
      </div>

      {/* Original Header - Desktop Only */}
      <div className="hidden lg:block bg-[#2D3324] pt-20 pb-24 px-12 rounded-b-[40px] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl opacity-20" />
        
        <div className="max-w-3xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate(-1)} className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/20">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-3xl font-black text-white">Notifications</h1>
          </div>
          <button className="text-white/40 hover:text-white transition-colors">
            <Trash2 size={24} />
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-12 space-y-4">
        {notifications.map((notif) => (
          <div key={notif.id} className={`p-6 rounded-[32px] border transition-all flex items-start gap-6 ${notif.isNew ? 'bg-white border-[#8B9A71]/20 shadow-premium' : 'bg-white/50 border-[rgba(139,154,113,0.05)]'}`}>
             <div className={`w-14 h-14 ${notif.color} rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg`}>
                <notif.icon size={24} />
             </div>
             <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                   <h4 className={`text-base font-black ${notif.isNew ? 'text-[#2D3324]' : 'text-[#2D3324]/60'}`}>{notif.title}</h4>
                   <span className="text-[10px] font-black text-[#8B9A71] uppercase tracking-widest">{notif.time}</span>
                </div>
                <p className="text-sm text-[#545454] leading-relaxed font-medium opacity-80">{notif.desc}</p>
                {notif.isNew && (
                  <div className="mt-4 flex gap-4">
                     <button className="text-[10px] font-black text-[#8B9A71] uppercase tracking-widest border-b border-[#8B9A71]/30 pb-0.5">View Details</button>
                     <button className="text-[10px] font-black text-[#545454]/40 uppercase tracking-widest">Mark read</button>
                  </div>
                )}
             </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="py-32 text-center">
             <div className="w-20 h-20 bg-cream rounded-[32px] flex items-center justify-center text-[#CED2BA] mx-auto mb-6">
                <Bell size={40} />
             </div>
             <h3 className="text-xl font-black text-[#2D3324] mb-2">Clear as a summer sky</h3>
             <p className="text-[#545454] opacity-60 font-medium">No new notifications at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
