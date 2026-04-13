import { TrendingUp, Award, Calendar, ChevronRight, Star, Heart, Shield } from "lucide-react";
import { Link } from "react-router";

export function ProgressPage() {
  const weekData = [
    { day: "Mon", height: 60, val: 6 },
    { day: "Tue", height: 75, val: 7.5 },
    { day: "Wed", height: 85, val: 8.5 },
    { day: "Thu", height: 70, val: 7 },
    { day: "Fri", height: 90, val: 9 },
    { day: "Sat", height: 65, val: 6.5 },
    { day: "Sun", height: 80, val: 8 },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-32">
      {/* Header with Visual Gradient */}
      <div className="bg-[#4E5540] pt-8 pb-16 px-6 rounded-b-[40px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B9A71]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white backdrop-blur-md">
              <TrendingUp size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-white">Your Growth</h1>
              <p className="text-[#CED2BA] text-sm font-medium">Tracking your journey to wellness</p>
            </div>
          </div>
          
          {/* Summary Mini Cards */}
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-4">
                <p className="text-[10px] text-[#CED2BA] font-extrabold uppercase tracking-widest mb-1">Avg Mood</p>
                <p className="text-2xl font-extrabold text-white">7.8</p>
             </div>
             <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-4">
                <p className="text-[10px] text-[#CED2BA] font-extrabold uppercase tracking-widest mb-1">Sessions</p>
                <p className="text-2xl font-extrabold text-white">12/15</p>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-6 -mt-8 relative z-20 space-y-6">
        {/* Weekly Chart Card */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-premium border border-[rgba(139,154,113,0.1)]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-extrabold text-[#2D3324]">Weekly Overview</h3>
            <button className="text-[10px] font-extrabold text-[#8B9A71] uppercase tracking-widest border border-[#8B9A71]/20 px-3 py-1.5 rounded-full">Report</button>
          </div>
          
          <div className="flex items-end justify-between h-48 sm:h-64 gap-2 sm:gap-3">
             {weekData.map((data, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-4 group justify-end h-full">
                   <div 
                      className={`w-full rounded-2xl transition-all duration-700 relative flex justify-center items-end pb-3 ${i === 4 ? 'bg-[#4E5540]' : 'bg-[#8B9A71]'}`}
                      style={{ height: `${data.height}%` }}
                   >
                      <span className="text-[10px] font-black text-white opacity-0 group-hover:opacity-100 transition-all mb-2">{data.val}</span>
                   </div>
                   <span className="text-xs font-black text-[#2D3324] uppercase tracking-wider">{data.day[0]}</span>
                </div>
             ))}
          </div>
        </div>

        {/* Detailed Metrics */}
        <div className="space-y-4">
          <h3 className="text-lg font-extrabold text-[#2D3324] px-2">Focus Areas</h3>
          {[
            { label: "Anxiety Control", val: 82, icon: Shield, color: "bg-[#8B9A71]" },
            { label: "Sleep Pattern", val: 65, icon: Calendar, color: "bg-[#4E5540]" },
            { label: "Emotional Balance", val: 90, icon: Heart, color: "bg-[#2D3324]" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-[28px] border border-[rgba(139,154,113,0.08)] flex items-center gap-4 hover:border-[#8B9A71] transition-all group">
              <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                <item.icon size={22} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-sm font-extrabold text-[#2D3324]">{item.label}</span>
                   <span className="text-sm font-extrabold text-[#8B9A71]">{item.val}%</span>
                </div>
                <div className="h-1.5 bg-[#F5EFE6] rounded-full overflow-hidden">
                   <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.val}%` }} />
                </div>
              </div>
              <ChevronRight size={18} className="text-[#CED2BA] group-hover:text-[#8B9A71] transition-all" />
            </div>
          ))}
        </div>

        {/* Achievement Card */}
        <div className="bg-[#2D3324] rounded-[32px] p-6 text-white overflow-hidden relative group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-white/10 transition-all" />
           <div className="flex items-center gap-5 relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#8B9A71] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#8B9A71]/20">
                 <Award size={32} />
              </div>
              <div>
                 <h4 className="text-lg font-extrabold">Consistency King</h4>
                 <p className="text-xs text-white/60 mt-1">You've reached an 8-day check-in streak</p>
                 <div className="flex mt-3 gap-1">
                    {[1,2,3].map(s => <Star key={s} size={12} className="text-[#8B9A71] fill-[#8B9A71]" />)}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
