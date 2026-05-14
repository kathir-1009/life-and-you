import { TrendingUp, Award, Calendar, Star, Heart, Shield, ArrowRight, BarChart3, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export function ProgressPage() {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-[#F4F7FA] pb-32 portal-context animate-in fade-in duration-700">
      
      {/* ── Mobile Header ── */}
      <div className="relative lg:hidden">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-5 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/10 active:scale-95 transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="bg-[#2D3324] pt-20 pb-16 px-6 rounded-b-[64px] relative overflow-hidden text-center border-t border-white/5 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#A68A45]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
             <div className="w-16 h-16 bg-white/10 rounded-[22px] flex items-center justify-center mb-5 border border-white/10 backdrop-blur-md">
               <BarChart3 size={26} className="text-[#A68A45]" />
             </div>
            <h1 className="text-3xl font-black text-white tracking-tight font-serif italic mb-2">Your Growth</h1>
            <p className="text-[#8B9A71] text-[10px] font-black uppercase tracking-[0.35em]">Evolution Tracker</p>
          </div>
        </div>
      </div>
          

      {/* ── Desktop Header ── */}
      <div className="hidden lg:block bg-[#2D3324] pt-20 pb-32 px-10 rounded-b-[80px] relative overflow-hidden shadow-xl z-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/10 rounded-[28px] flex items-center justify-center text-[#A68A45] backdrop-blur-md shadow-2xl border border-white/20">
                <BarChart3 size={36} />
              </div>
              <div>
                <h1 className="text-5xl font-black text-white font-serif italic tracking-tight mb-2">Your Growth</h1>
                <p className="text-[#8B9A71] text-xs font-black uppercase tracking-widest">Evolution Tracker</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 lg:w-96">
               <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[28px] p-6 shadow-xl">
                  <p className="text-[10px] text-[#8B9A71] font-black uppercase tracking-widest mb-1.5">Avg Mood</p>
                  <p className="text-3xl font-black text-white font-serif italic">7.8<span className="text-xs ml-1 opacity-40">/10</span></p>
               </div>
               <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[28px] p-6 shadow-xl">
                  <p className="text-[10px] text-[#8B9A71] font-black uppercase tracking-widest mb-1.5">Milestones</p>
                  <p className="text-3xl font-black text-white font-serif italic">12<span className="text-xs ml-1 opacity-40">/15</span></p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Responsive Grid */}
      <div className="max-w-6xl mx-auto px-5 lg:px-10 -mt-6 lg:-mt-16 relative z-30 space-y-8">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left: Charting & Analysis (8/12) */}
            <div className="lg:col-span-8 space-y-6 lg:space-y-8">
               <div className="bg-white rounded-[40px] p-6 md:p-10 shadow-sm border border-[#8B9A71]/10 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 md:mb-12">
                     <h3 className="text-2xl font-bold text-[#2D3324] font-serif uppercase tracking-tight">Weekly Emotional Rhythm</h3>
                     <button className="text-[9px] font-black text-[#A68A45] uppercase tracking-widest border border-[#A68A45]/20 px-6 py-3 rounded-[14px] hover:bg-[#A68A45] hover:text-white transition-all w-full md:w-auto">Download Report</button>
                  </div>
                  
                  <div className="h-64 lg:h-80 w-full relative">
                     {/* Gradient Defs for Recharts */}
                     <svg style={{ height: 0 }}>
                       <defs>
                         <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#A68A45" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#A68A45" stopOpacity={0}/>
                         </linearGradient>
                       </defs>
                     </svg>

                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                           data={weekData}
                           margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                        >
                           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" opacity={0.5} />
                           <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#8B9A71', opacity: 0.8 }} />
                           <YAxis axisLine={false} tickLine={false} tick={false} />
                           <Tooltip 
                              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', color: '#2D3324' }}
                           />
                           <Area type="monotone" dataKey="val" stroke="#A68A45" strokeWidth={4} fillOpacity={1} fill="url(#progressGradient)" />
                        </AreaChart>
                     </ResponsiveContainer>
                  </div>
               </div>

               {/* Metrics Section */}
               <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-[#2D3324] font-serif px-2 uppercase tracking-tight text-center md:text-left">Focus Progress</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {[
                        { label: "Anxiety Control", val: 82, icon: Shield, color: "bg-[#8B9A71]" },
                        { label: "Sleep Pattern", val: 65, icon: Calendar, color: "bg-[#8B9A71]" },
                        { label: "Stability", val: 90, icon: Heart, color: "bg-[#A68A45]" },
                        { label: "Communication", val: 74, icon: TrendingUp, color: "bg-[#8B9A71]" },
                     ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-[32px] border border-[#8B9A71]/10 flex items-center gap-5 hover:shadow-lg hover:border-[#8B9A71]/30 transition-all group shadow-sm">
                           <div className={`w-14 h-14 ${item.color} rounded-[16px] flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}>
                             <item.icon size={22} />
                           </div>
                           <div className="flex-1">
                             <div className="flex justify-between items-center mb-2">
                                <span className="text-[11px] font-black text-[#2D3324] uppercase tracking-widest">{item.label}</span>
                                <span className="text-[11px] font-black text-[#A68A45]">{item.val}%</span>
                             </div>
                             <div className="h-2 bg-[#F4F7FA] rounded-full overflow-hidden">
                                <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.val}%` }} />
                             </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Right: Achievements (4/12) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
               <div className="bg-[#8B9A71] rounded-[40px] p-8 lg:p-10 text-white overflow-hidden relative group shadow-2xl">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl opacity-40 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                  <div className="flex flex-col items-center lg:items-start relative z-10 text-center lg:text-left">
                     <div className="w-16 h-16 bg-[#2D3324] rounded-[20px] flex items-center justify-center text-white shadow-2xl mb-8 group-hover:scale-110 transition-transform">
                        <Award size={32} />
                     </div>
                     <h4 className="text-2xl font-bold font-serif mb-2 uppercase tracking-tight">Consistency King</h4>
                     <p className="text-[10px] text-white/80 font-black uppercase tracking-widest mb-8 leading-relaxed">You've reached an 8-day check-in streak</p>
                     
                     <div className="w-full h-1.5 bg-white/20 rounded-full mb-6 overflow-hidden">
                        <div className="w-[80%] h-full bg-[#2D3324]" />
                     </div>

                     <div className="flex justify-center lg:justify-start gap-1 w-full">
                        {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-[#2D3324] fill-[#2D3324] animate-pulse" style={{ animationDelay: `${s*200}ms` }} />)}
                     </div>
                  </div>
               </div>

               <div className="bg-[#2D3324] p-8 lg:p-10 rounded-[40px] group cursor-pointer hover:bg-[#A68A45] transition-colors duration-500 shadow-xl text-center lg:text-left">
                  <h4 className="text-[9px] font-black text-white/50 uppercase tracking-[0.3em] mb-6">Upcoming Milestone</h4>
                  <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6">
                     <p className="text-xl md:text-2xl font-bold text-white font-serif italic leading-tight lg:max-w-[160px]">Unlock Advanced Journaling</p>
                     <div className="w-12 h-12 bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-[16px] flex items-center justify-center group-hover:translate-x-2 transition-transform shadow-lg shrink-0">
                        <ArrowRight size={20} />
                     </div>
                  </div>
                  <p className="text-[9px] font-black text-[#A68A45] group-hover:text-white uppercase tracking-widest mt-6 transition-colors">Complete 3 more sessions</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
