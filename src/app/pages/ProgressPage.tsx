import { TrendingUp, Award, Calendar, ChevronRight, Star, Heart, Shield, ArrowRight, BarChart3 } from "lucide-react";
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
    <div className="min-h-screen bg-[#FCF8E8] pb-32 portal-context">
      {/* Cinematic Header */}
      <div className="bg-[#99A88C] pt-12 pb-24 lg:pb-32 px-6 lg:px-10 md:rounded-b-[80px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white/10 rounded-[28px] flex items-center justify-center text-[#A68A45] backdrop-blur-md shadow-2xl border border-white/20">
                <BarChart3 size={32} />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white font-serif tracking-tight">Your Growth</h1>
                <p className="text-[#A68A45] text-sm lg:text-base font-bold uppercase tracking-widest mt-1 opacity-80">Evolution Tracker</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 lg:w-96">
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-6 shadow-sm">
                  <p className="text-[10px] text-[#A68A45] font-black uppercase tracking-widest mb-1.5 opacity-60">Avg Mood</p>
                  <p className="text-3xl font-black text-white font-serif">7.8<span className="text-xs ml-1 opacity-40">/10</span></p>
               </div>
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-6 shadow-sm">
                  <p className="text-[10px] text-[#A68A45] font-black uppercase tracking-widest mb-1.5 opacity-60">Milestone</p>
                  <p className="text-3xl font-black text-white font-serif">12<span className="text-xs ml-1 opacity-40">/15</span></p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Responsive Grid */}
      <div className="max-w-6xl mx-auto px-4 lg:px-10 -mt-12 lg:-mt-20 relative z-20">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Charting & Analysis (8/12) */}
            <div className="lg:col-span-8 space-y-8 text-center lg:text-left">
               <div className="bg-white rounded-[44px] p-8 lg:p-12 shadow-2xl border border-[#99A88C]/5">
                  <div className="flex items-center justify-between mb-12">
                     <h3 className="text-xl lg:text-2xl font-bold text-[#5E6C54] font-serif">Weekly Emotional Rhythm</h3>
                     <button className="text-[10px] font-black text-[#A68A45] uppercase tracking-widest border border-[#A68A45]/20 px-6 py-2.5 rounded-full hover:bg-[#A68A45] hover:text-white transition-all">Download Report</button>
                  </div>
                  
                  <div className="flex items-end justify-between h-56 lg:h-80 gap-3">
                     {weekData.map((data, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-6 group justify-end h-full">
                           <div 
                              className={`w-full max-w-[48px] rounded-full transition-all duration-1000 relative flex justify-center items-center group shadow-md ${i === 4 ? 'bg-[#99A88C]' : 'bg-[#99A88C] hover:bg-[#A68A45]'}`}
                              style={{ height: `${data.height}%` }}
                           >
                              <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all bg-[#99A88C] text-white text-[10px] font-black px-2 py-1 rounded-lg">
                                 {data.val}
                              </div>
                           </div>
                           <span className="text-[10px] lg:text-xs font-black text-[#5E6C54]/40 uppercase tracking-widest">{data.day}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Metrics Section */}
               <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#5E6C54] font-serif px-2">Focus Progress</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                     {[
                        { label: "Anxiety Control", val: 82, icon: Shield, color: "bg-[#99A88C]" },
                        { label: "Sleep Pattern", val: 65, icon: Calendar, color: "bg-[#99A88C]" },
                        { label: "Stability", val: 90, icon: Heart, color: "bg-[#A68A45]" },
                        { label: "Communication", val: 74, icon: TrendingUp, color: "bg-[#99A88C]" },
                     ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-[32px] border border-[#99A88C]/5 flex items-center gap-5 hover:shadow-xl transition-all group shadow-sm">
                           <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform`}>
                             <item.icon size={24} />
                           </div>
                           <div className="flex-1">
                             <div className="flex justify-between items-center mb-3">
                                <span className="text-sm font-black text-[#5E6C54] uppercase tracking-tight">{item.label}</span>
                                <span className="text-xs font-black text-[#A68A45]">{item.val}%</span>
                             </div>
                             <div className="h-2 bg-[#FCF8E8] rounded-full overflow-hidden">
                                <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.val}%` }} />
                             </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Right: Achievements (4/12) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-36 text-center lg:text-left">
               <div className="bg-[#99A88C] rounded-[44px] p-8 lg:p-10 text-white overflow-hidden relative group shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl opacity-40 group-hover:opacity-100 transition-all duration-700" />
                  <div className="flex flex-col items-center lg:items-start relative z-10">
                     <div className="w-16 h-16 bg-[#A68A45] rounded-[24px] flex items-center justify-center text-[#5E6C54] shadow-2xl mb-8 group-hover:scale-110 transition-transform">
                        <Award size={36} />
                     </div>
                     <h4 className="text-2xl font-bold font-serif mb-2">Consistency King</h4>
                     <p className="text-sm text-white/50 font-medium mb-8">You've reached an 8-day check-in streak</p>
                     
                     <div className="w-full h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
                        <div className="w-[80%] h-full bg-[#A68A45]" />
                     </div>

                     <div className="flex justify-center lg:justify-start gap-1 w-full">
                        {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-[#A68A45] fill-[#A68A45] animate-pulse" style={{ animationDelay: `${s*200}ms` }} />)}
                     </div>
                  </div>
               </div>

               <div className="bg-[#A68A45] p-8 lg:p-10 rounded-[44px] group cursor-pointer hover:scale-[1.02] transition-all shadow-xl">
                  <h4 className="text-[10px] font-black text-[#5E6C54] uppercase tracking-[0.3em] mb-6 opacity-60">Upcoming Milestone</h4>
                  <div className="flex items-center justify-between gap-4">
                     <p className="text-xl font-bold text-[#5E6C54] font-serif leading-tight max-w-[160px]">Unlock Advanced NLP Journaling</p>
                     <div className="w-12 h-12 bg-[#99A88C] text-white rounded-2xl flex items-center justify-center group-hover:translate-x-2 transition-transform shadow-lg">
                        <ArrowRight size={20} />
                     </div>
                  </div>
                  <p className="text-[10px] font-black text-[#5E6C54]/60 uppercase tracking-widest mt-6">Complete 3 more sessions</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
