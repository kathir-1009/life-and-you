import { TrendingUp, ArrowUpRight, DollarSign, Download, Calendar, ArrowDownRight, CreditCard, PieChart } from "lucide-react";

export function CoachEarningsPage() {
  const transactions = [
    { date: "Apr 10, 2026", client: "Sarah Jenkins", amount: "+ ₹3,500", status: "Settled", type: "NLP Mastery" },
    { date: "Apr 08, 2026", client: "Anonymous LY-882", amount: "+ ₹2,800", status: "Settled", type: "Growth Call" },
    { date: "Apr 05, 2026", client: "Platform Fee", amount: "- ₹1,200", status: "Debit", type: "Platform" },
    { date: "Apr 02, 2026", client: "Emma Wilson", amount: "+ ₹3,500", status: "Settled", type: "Deep Discovery" },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-32">
      <div className="bg-[#2D3324] py-12 px-6 md:px-12 rounded-b-[32px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B9A71]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#FAF9F6] leading-tight tracking-tight">Earnings</h1>
            <p className="text-[#8B9A71] mt-1 text-sm font-bold uppercase tracking-widest opacity-90">Track your professional growth</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
             <div className="text-[9px] font-bold text-[#8B9A71] uppercase tracking-[0.2em] mb-1">Available Balance</div>
             <div className="text-3xl font-extrabold text-white tracking-tight">₹45,200.00</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 relative z-20 space-y-8">
        {/* Stats Summary */}
        <div className="grid md:grid-cols-3 gap-6">
           <StatCard icon={TrendingUp} label="Monthly Growth" val="+12.4%" sub="vs last month" trend="up" />
           <StatCard icon={PieChart} label="Total Sessions" val="142" sub="Across all clients" trend="up" />
           <StatCard icon={CreditCard} label="Avg. Rate" val="₹3,100" sub="Higher than avg." trend="up" />
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-[48px] shadow-premium border border-[rgba(139,154,113,0.1)] overflow-hidden">
           <div className="p-8 border-b border-[rgba(139,154,113,0.05)] flex items-center justify-between">
              <h3 className="text-xl font-black text-[#2D3324]">Recent Payouts</h3>
              <button className="text-[10px] font-black text-[#8B9A71] uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-all">
                <Download size={16} /> Download CSV
              </button>
           </div>
           
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="bg-[#F8F9FA] text-[10px] font-black text-[#8B9A71] uppercase tracking-widest">
                       <th className="px-10 py-6">Date</th>
                       <th className="px-10 py-6">Description</th>
                       <th className="px-10 py-6">Client</th>
                       <th className="px-10 py-6 text-right">Amount</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-[rgba(139,154,113,0.05)]">
                    {transactions.map((t, i) => (
                      <tr key={i} className="hover:bg-[#FAF9F6] transition-colors group">
                         <td className="px-10 py-8">
                           <div className="text-sm font-bold text-[#545454]">{t.date}</div>
                         </td>
                         <td className="px-10 py-8">
                           <div className="text-sm font-black text-[#2D3324]">{t.type}</div>
                         </td>
                         <td className="px-10 py-8">
                           <div className="text-sm font-bold text-[#545454]">{t.client}</div>
                         </td>
                         <td className="px-10 py-8 text-right">
                           <div className={`text-lg font-black ${t.amount.startsWith('+') ? 'text-[#8B9A71]' : 'text-red-400'}`}>
                             {t.amount}
                           </div>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, val, sub, trend }: { icon: any, label: string, val: string, sub: string, trend: 'up' | 'down' }) {
  return (
    <div className="bg-white p-10 rounded-[48px] border border-[rgba(139,154,113,0.08)] shadow-sm">
       <div className="w-14 h-14 bg-[#F8F9FA] text-[#8B9A71] rounded-2xl flex items-center justify-center mb-8">
          <Icon size={24} />
       </div>
       <p className="text-[10px] font-black text-[#545454]/40 uppercase tracking-widest mb-1">{label}</p>
       <div className="flex items-center gap-3">
          <h4 className="text-3xl font-black text-[#2D3324]">{val}</h4>
          {trend === 'up' ? <ArrowUpRight className="text-[#8B9A71]" size={20} /> : <ArrowDownRight className="text-red-400" size={20} />}
       </div>
       <p className="text-xs font-bold text-[#8B9A71] mt-1">{sub}</p>
    </div>
  );
}
