import { useEffect } from "react";
import { Download, Bell, ArrowRight, LightningFill, PencilFill, Crop, Type, CodeSlash, BriefcaseFill, WrenchAdjustable, ThreeDots } from "react-bootstrap-icons";
import { useUser } from "../context/UserContext";
import { AnonBadge } from "../components/shared/AnonBadge";
import { HeroStats } from "../components/dashboard/HeroStats";
import { UpcomingSession } from "../components/dashboard/UpcomingSession";
import { RecentHistory } from "../components/dashboard/RecentHistory";
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function DashboardPage() {
  const { user, isAnonymous } = useUser();

  useEffect(() => {
    document.title = "Dashboard | Life & You";
  }, []);

  return (
    <div className="animate-in fade-in duration-700 portal-context pb-20">
      {/* Cinematic Full-Width Header */}
      <div className="relative">
         {/* Deep Colored Canopy - Touches all edges */}
         <div className="bg-[#5E6C54] pt-20 pb-32 px-6 rounded-b-[100px] md:rounded-b-[120px] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFFFFF]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#99A88C]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]" />
            
            <div className="flex items-center justify-between relative z-10 max-w-4xl mx-auto">
               <div>
                  <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.4em] mb-4">Welcome back,</p>
                  <h1 className="text-5xl md:text-7xl font-black text-white !text-white tracking-tighter leading-none" style={{ color: '#FFFFFF' }}>
                     {isAnonymous ? "Wellness Seeker" : user.name.split(' ')[0]}
                  </h1>
               </div>
               
               <div className="relative flex items-center gap-4">
                  <button className="w-12 h-12 bg-[#FFFFFF]/10 rounded-2xl flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-all">
                     <Bell size={20} />
                  </button>
                  <div className="w-14 h-14 rounded-[24px] border-4 border-white/20 overflow-hidden shadow-2xl skew-x-1 hover:skew-x-0 transition-transform">
                     <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
         </div>

         {/* Overlapping Action Bar */}
         <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
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

         {/* Recharts Integration: Wellness Pulse */}
         <div className="bg-white rounded-[48px] p-8 lg:p-12 border border-sage/5 shadow-premium">
            <div className="flex items-center justify-between mb-10">
               <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-sage-dark font-serif uppercase tracking-tight">Wellness Rhythm</h3>
                  <p className="text-[10px] font-black text-sage-dark/30 uppercase tracking-[0.3em] mt-1">Biometric & Mood Synthesis</p>
               </div>
               <div className="flex gap-2">
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-sage rounded-full" />
                     <span className="text-[9px] font-black text-sage-dark/40 uppercase tracking-widest">Growth</span>
                  </div>
               </div>
            </div>
            
            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                     data={[
                        { name: 'Mon', val: 4000 },
                        { name: 'Tue', val: 3000 },
                        { name: 'Wed', val: 2000 },
                        { name: 'Thu', val: 2780 },
                        { name: 'Fri', val: 1890 },
                        { name: 'Sat', val: 2390 },
                        { name: 'Sun', val: 3490 },
                     ]}
                     margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                  >
                     <defs>
                        <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#99A88C" stopOpacity={0.3}/>
                           <stop offset="95%" stopColor="#99A88C" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#5E6C54', opacity: 0.4 }} />
                     <YAxis axisLine={false} tickLine={false} tick={false} />
                     <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}
                        cursor={{ stroke: '#99A88C', strokeWidth: 2, strokeDasharray: '4 4' }}
                     />
                     <Area type="monotone" dataKey="val" stroke="#99A88C" strokeWidth={4} fillOpacity={1} fill="url(#colorVal)" />
                  </AreaChart>
               </ResponsiveContainer>
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
                     <span className="text-[10px] font-black text-[#5E6C54] uppercase tracking-widest">{item.label}</span>
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
