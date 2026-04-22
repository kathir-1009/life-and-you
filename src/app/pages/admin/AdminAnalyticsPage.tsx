import { useEffect } from "react";
import { GraphUp, People, ArrowUpRight, BarChart, PieChart, Search, Filter } from "react-bootstrap-icons";

export function AdminAnalyticsPage() {
  useEffect(() => {
    document.title = "Analytics | Life & You";
  }, []);

  const metrics = [
    { label: "Monthly Growth", value: "+24%", trend: "Up from 18%", icon: GraphUp, color: "text-sage" },
    { label: "Avg Engagement", value: "42m", trend: "Sessions/Day", icon: BarChart, color: "text-gold" },
    { label: "Retention Rate", value: "92%", trend: "LTV +15%", icon: PieChart, color: "text-sage-dark" },
    { label: "New Inhabitants", value: "482", trend: "This Quarter", icon: People, color: "text-sage" },
  ];

  return (
    <div className="animate-in fade-in duration-700 portal-context pb-20 space-y-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 px-2">
         <div>
            <h1 className="text-3xl lg:text-5xl font-black text-sage-dark font-serif uppercase tracking-tight">Growth Protocol</h1>
            <p className="text-sage-dark/40 text-[11px] font-black uppercase tracking-[0.4em] mt-2">Analytical insights & Metrics</p>
         </div>
         
         <div className="flex items-center gap-4">
            <button className="bg-white border border-sage/10 px-6 py-4 rounded-2xl text-[10px] font-black text-sage-dark uppercase tracking-widest flex items-center gap-3 hover:bg-cream transition-all">
               Export Raw Data <ArrowUpRight size={18} />
            </button>
         </div>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {metrics.map((m, i) => (
            <div key={i} className="bg-white p-8 rounded-[40px] shadow-premium border border-sage/5">
               <div className={`w-12 h-12 bg-cream rounded-2xl flex items-center justify-center ${m.color} mb-6`}>
                  <m.icon size={20} />
               </div>
               <p className="text-[10px] font-black text-sage-dark/30 uppercase tracking-widest mb-1">{m.label}</p>
               <h3 className="text-3xl font-black text-sage-dark font-serif mb-2">{m.value}</h3>
               <p className="text-[9px] font-black text-sage uppercase tracking-widest">{m.trend}</p>
            </div>
         ))}
      </div>

      {/* Main Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 bg-[#5E6C54] rounded-[48px] p-10 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><BarChart size={120} /></div>
            <div className="flex items-center justify-between mb-12 relative z-10">
               <div>
                  <h3 className="text-xl font-bold font-serif uppercase tracking-tight">Acquisition Pulse</h3>
                  <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-widest mt-1">Last 30 Days Sanctuary Entry</p>
               </div>
               <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest border border-white/10">W</button>
                  <button className="px-4 py-2 bg-white rounded-xl text-[9px] font-black text-sage-dark uppercase tracking-widest">M</button>
                  <button className="px-4 py-2 bg-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest border border-white/10">Y</button>
               </div>
            </div>
            
            {/* Mock Chart Area */}
            <div className="h-64 flex items-end justify-between gap-4 relative z-10">
               {[40, 70, 45, 90, 65, 80, 55, 75, 60, 85, 45, 95].map((h, i) => (
                  <div key={i} className="flex-1 bg-white/10 rounded-t-xl group/bar relative">
                     <div className="absolute bottom-0 left-0 right-0 bg-[#99A88C] rounded-t-xl transition-all duration-1000 group-hover/bar:bg-white" style={{ height: `${h}%` }} />
                  </div>
               ))}
            </div>
         </div>

         <div className="bg-white rounded-[48px] p-10 border border-sage/5 shadow-premium">
            <h3 className="text-xl font-bold text-sage-dark font-serif uppercase tracking-tight mb-8">Role Distribution</h3>
            <div className="space-y-8">
               <DistributionRow label="Patients" percentage={64} color="bg-sage" />
               <DistributionRow label="Doctors" percentage={28} color="bg-gold" />
               <DistributionRow label="Admin Oversight" percentage={8} color="bg-sage-dark" />
            </div>
            
            <div className="mt-12 pt-12 border-t border-sage/5">
               <div className="flex items-center justify-between p-6 bg-cream rounded-3xl border border-sage/5">
                  <div>
                     <p className="text-[9px] font-black text-sage-dark/30 uppercase tracking-widest mb-1">Active Now</p>
                     <p className="text-2xl font-black text-sage-dark font-serif">142</p>
                  </div>
                  <div className="w-12 h-12 bg-sage text-white rounded-2xl flex items-center justify-center animate-pulse">
                     <Activity size={24} />
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

function DistributionRow({ label, percentage, color }: { label: string, percentage: number, color: string }) {
  return (
    <div className="space-y-2">
       <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
          <span className="text-sage-dark/60">{label}</span>
          <span className="text-sage-dark">{percentage}%</span>
       </div>
       <div className="h-1.5 bg-cream rounded-full overflow-hidden">
          <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${percentage}%` }} />
       </div>
    </div>
  );
}

function Activity({ size }: { size: number }) {
   return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
         <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
   );
}
