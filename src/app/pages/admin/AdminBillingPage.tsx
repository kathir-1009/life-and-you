import { useState } from "react";
import { CurrencyDollar, CreditCard, ArrowDownLeft, ArrowUpRight, Search, Filter, ThreeDotsVertical, ShieldCheck } from "react-bootstrap-icons";

export function AdminBillingPage() {
  const transactions = [
    { id: "T9042", user: "Sarah Mitchell", amount: "+$120.00", status: "Success", type: "Subscription", date: "April 21, 2026" },
    { id: "T9041", user: "Coach Sharma", amount: "-$840.00", status: "Payout", type: "Withdrawal", date: "April 20, 2026" },
    { id: "T9040", user: "John Doe", amount: "+$50.00", status: "Success", type: "One-time", date: "April 19, 2026" },
    { id: "T9039", user: "Elena Rodriguez", amount: "-$620.00", status: "Processing", type: "Withdrawal", date: "April 18, 2026" },
  ];

  return (
    <div className="animate-in fade-in duration-700 portal-context pb-20 space-y-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 px-2">
         <div>
            <h1 className="text-3xl lg:text-5xl font-black text-sage-dark font-serif uppercase tracking-tight">Financial Ledger</h1>
            <p className="text-sage-dark/40 text-[11px] font-black uppercase tracking-[0.4em] mt-2">Revenue & Payout protocols</p>
         </div>
         
         <div className="flex items-center gap-4">
            <button className="bg-sage text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 shadow-xl hover:bg-sage-dark transition-all">
               <ShieldCheck size={18} /> Payout Settings
            </button>
         </div>
      </div>

      {/* Finance Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <FinanceCard label="Current Treasury" value="$12,482.00" icon={CurrencyDollar} color="text-sage" />
         <FinanceCard label="Pending Payouts" value="$1,850.00" icon={CreditCard} color="text-gold" />
         <FinanceCard label="Monthly Revenue" value="$4,120.00" icon={ArrowUpRight} color="text-sage-dark" />
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-[48px] overflow-hidden shadow-premium border border-sage/5">
         <div className="p-8 border-b border-sage/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h3 className="text-xl font-bold text-sage-dark font-serif uppercase tracking-tight">Recent Ledger</h3>
            <div className="flex items-center gap-4">
               <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-dark/30" size={16} />
                  <input type="text" placeholder="Filter ledger..." className="bg-cream/50 border border-sage/5 rounded-2xl pl-12 pr-6 py-3 text-[10px] font-bold uppercase tracking-widest outline-none w-64" />
               </div>
               <button className="p-3 bg-white border border-sage/10 rounded-2xl text-sage-dark"><Filter size={16} /></button>
            </div>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-cream/20">
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Transaction ID</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Identity</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Quantum</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Type</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Status</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Timestamp</th>
                     <th className="px-8 py-6 text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-sage/5">
                  {transactions.map((t) => (
                     <tr key={t.id} className="hover:bg-cream/10 transition-colors">
                        <td className="px-8 py-6">
                           <span className="text-xs font-black text-sage-dark/40 uppercase tracking-widest">{t.id}</span>
                        </td>
                        <td className="px-8 py-6">
                           <span className="text-sm font-bold text-sage-dark uppercase tracking-wide">{t.user}</span>
                        </td>
                        <td className="px-8 py-6">
                           <div className={`flex items-center gap-1 font-black ${t.amount.startsWith('+') ? 'text-sage' : 'text-red-400'}`}>
                              {t.amount.startsWith('+') ? <ArrowDownLeft size={12} /> : <ArrowUpRight size={12} />}
                              <span className="text-xs">{t.amount}</span>
                           </div>
                        </td>
                        <td className="px-8 py-6">
                           <span className="text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">{t.type}</span>
                        </td>
                        <td className="px-8 py-6">
                           <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${t.status === 'Success' ? 'bg-sage/10 text-sage' : t.status === 'Payout' ? 'bg-sage-dark text-white' : 'bg-gold/10 text-gold-dark animate-pulse'}`}>
                              {t.status}
                           </span>
                        </td>
                        <td className="px-8 py-6 text-xs font-bold text-sage-dark/60">{t.date}</td>
                        <td className="px-8 py-6 text-right">
                           <button className="p-2.5 bg-cream rounded-xl text-sage-dark/40 hover:text-sage-dark transition-all"><ThreeDotsVertical size={16} /></button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}

function FinanceCard({ label, value, icon: Icon, color }: { label: string, value: string, icon: any, color: string }) {
  return (
    <div className="bg-white p-10 rounded-[48px] shadow-premium border border-sage/5 flex flex-col gap-6 group hover:border-sage transition-all">
       <div className={`w-14 h-14 bg-cream rounded-2xl flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
          <Icon size={24} />
       </div>
       <div>
          <p className="text-[10px] font-black text-sage-dark/30 uppercase tracking-[0.2em] mb-2">{label}</p>
          <h3 className="text-4xl font-black text-sage-dark font-serif">{value}</h3>
       </div>
    </div>
  );
}
