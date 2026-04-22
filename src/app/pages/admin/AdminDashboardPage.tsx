import { useEffect } from "react";
import { People, ShieldCheck, Calendar3, CurrencyDollar, Activity, ArrowUpRight, Bell, Gear, Search } from "react-bootstrap-icons";
import { useUser } from "../../context/UserContext";

export function AdminDashboardPage() {
  const { user } = useUser();

  useEffect(() => {
    document.title = "Admin Dashboard | Life & You";
  }, []);

  const stats = [
    { label: "Total Sanctuary Users", value: "1,284", icon: People, color: "text-sage", bg: "bg-sage/10", trend: "+12%" },
    { label: "Active Certified Coaches", value: "42", icon: ShieldCheck, color: "text-gold", bg: "bg-gold/10", trend: "+3" },
    { label: "Sessions Conducted", value: "312", icon: Calendar3, color: "text-sage-dark", bg: "bg-sage-dark/10", trend: "This Week" },
    { label: "Platform Revenue", value: "$12.4k", icon: CurrencyDollar, color: "text-sage", bg: "bg-sage/5", trend: "+18%" },
  ];

  return (
    <div className="animate-in fade-in duration-700 portal-context pb-20">
      {/* Admin Command Header */}
      <div className="bg-sage-dark pt-16 pb-32 px-6 rounded-b-[80px] lg:rounded-b-[100px] relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] pointer-events-none" />
         
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div>
               <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] mb-4">
                  <Activity size={12} /> Platform Oversight Active
               </div>
               <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight font-serif">
                  Command Center
               </h1>
               <p className="text-white/40 text-xs font-bold uppercase tracking-[0.4em] mt-2">Life & You Administrative Protocol</p>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="relative hidden lg:block">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search platform..." 
                    className="bg-white/10 border border-white/10 rounded-2xl pl-12 pr-6 py-3.5 text-white text-[11px] font-bold uppercase tracking-widest outline-none focus:bg-white/20 transition-all w-64"
                  />
               </div>
               <button className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-all">
                  <Bell size={20} />
               </button>
               <button className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-all">
                  <Gear size={20} />
               </button>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 space-y-12">
         {/* Stats Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
               <div key={i} className="bg-white p-8 rounded-[40px] shadow-premium border border-sage/5 group hover:-translate-y-2 transition-all duration-300">
                  <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                     <stat.icon size={24} />
                  </div>
                  <p className="text-[10px] font-black text-sage-dark/30 uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                  <div className="flex items-baseline justify-between">
                     <h3 className="text-3xl font-black text-sage-dark font-serif">{stat.value}</h3>
                     <span className="text-[10px] font-black text-sage uppercase tracking-widest">{stat.trend}</span>
                  </div>
               </div>
            ))}
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-white rounded-[48px] p-8 lg:p-10 border border-sage/5 shadow-premium">
               <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-bold text-sage-dark font-serif uppercase tracking-tight">Administrative Logs</h3>
                  <button className="text-[10px] font-black text-sage uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                     View All <ArrowUpRight size={14} />
                  </button>
               </div>
               
               <div className="space-y-6">
                  {[
                     { user: "Coach Sharma", action: "Approved Profile", time: "2 hours ago", type: "Approval" },
                     { user: "Sarah Mitchell", action: "New Membership Plan", time: "5 hours ago", type: "Billing" },
                     { user: "System", action: "Security Update Completed", time: "Yesterday", type: "System" },
                     { user: "Coach Elena", action: "Updated Availability", time: "Yesterday", type: "Update" }
                  ].map((log, i) => (
                     <div key={i} className="flex items-center justify-between p-5 rounded-3xl bg-cream/30 hover:bg-cream/50 transition-colors group">
                        <div className="flex items-center gap-5">
                           <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-sage-dark shadow-sm">
                              <Activity size={18} />
                           </div>
                           <div>
                              <p className="text-sm font-bold text-sage-dark uppercase tracking-wide">{log.action}</p>
                              <p className="text-[9px] font-black text-sage-dark/30 uppercase tracking-widest mt-1">{log.user} • {log.time}</p>
                           </div>
                        </div>
                        <span className="text-[9px] font-black text-gold-dark uppercase tracking-widest px-3 py-1 bg-gold/10 rounded-full">{log.type}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* System Health */}
            <div className="space-y-8">
               <div className="bg-[#5E6C54] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                     <ShieldCheck size={64} />
                  </div>
                  <h3 className="text-xl font-black mb-6">System Integrity</h3>
                  <div className="space-y-6">
                     <HealthRow label="API Clusters" status="Optimal" />
                     <HealthRow label="Database Sync" status="99.9%" />
                     <HealthRow label="User Sanctuary" status="Active" />
                  </div>
                  <button className="w-full mt-10 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all">
                     Run Diagnostics
                  </button>
               </div>

               <div className="bg-gold rounded-[40px] p-10 text-sage-dark shadow-premium">
                  <h3 className="text-xl font-black mb-4">Pending Approvals</h3>
                  <p className="text-sm font-bold opacity-60 mb-8 leading-relaxed italic">"3 new coach applications require your protocol verification."</p>
                  <button className="bg-sage-dark text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                     Verify Now
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

function HealthRow({ label, status }: { label: string, status: string }) {
  return (
    <div className="flex items-center justify-between">
       <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{label}</span>
       <span className="text-xs font-black uppercase tracking-widest">{status}</span>
    </div>
  );
}
