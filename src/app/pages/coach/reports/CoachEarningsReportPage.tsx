import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, Download, Wallet2, ArrowUpRight, ArrowDownRight, Calendar3, Bank, Receipt, GraphUp } from "react-bootstrap-icons";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from "recharts";

const revenueData = [
  { month: "Jan", earnings: 4200 },
  { month: "Feb", earnings: 3800 },
  { month: "Mar", earnings: 5100 },
  { month: "Apr", earnings: 4900 },
  { month: "May", earnings: 6200 },
  { month: "Jun", earnings: 5800 },
];

const transactionHistory = [
  { id: "T1092", date: "May 10, 2026", desc: "Session Payout - Sarah M.", amount: "+ INR 350", status: "Processed", type: "credit" },
  { id: "T1091", date: "May 09, 2026", desc: "Monthly Platform Fee", amount: "- INR 150", status: "Processed", type: "debit" },
  { id: "T1090", date: "May 08, 2026", desc: "Session Payout - Anonymous #421", amount: "+ INR 400", status: "Processed", type: "credit" },
  { id: "T1089", date: "May 05, 2026", desc: "Withdrawal to Bank (****4210)", amount: "- INR 2500", status: "Pending", type: "debit" },
  { id: "T1088", date: "May 04, 2026", desc: "Session Payout - Michael C.", amount: "+ INR 350", status: "Processed", type: "credit" },
];

export function CoachEarningsReportPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pb-24 lg:pb-10 animate-in fade-in duration-700">
      <div className="max-w-5xl mx-auto px-6 lg:px-16 pt-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <Link to="/coach" className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center text-sage-dark border border-sage/10 shadow-sm hover:bg-sage/5 transition-all">
              <ChevronLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl font-black text-sage-dark font-serif tracking-tight">Earnings & Payouts</h1>
              <p className="text-[10px] font-black text-sage-dark/30 uppercase tracking-[0.3em] mt-1">Manage your professional revenue and transfers</p>
            </div>
          </div>
          
          <div className="flex gap-3">
             <button className="flex items-center gap-2.5 px-6 py-4 bg-white text-sage-dark border border-sage/10 rounded-[20px] text-[10px] font-black uppercase tracking-widest shadow-sm hover:bg-sage/5 transition-all">
               <Receipt size={16} /> Tax Invoice
             </button>
             <button className="flex items-center gap-2.5 px-6 py-4 bg-sage-dark text-white rounded-[20px] text-[10px] font-black uppercase tracking-widest shadow-xl shadow-sage-dark/20 hover:scale-[1.02] transition-all">
               <Bank size={16} /> Withdraw Funds
             </button>
          </div>
        </div>

        {/* Financial Snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#5E6C54] p-8 rounded-[40px] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <Wallet2 size={24} className="text-sage mb-6" />
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-2">Available Balance</p>
            <h2 className="text-4xl font-black font-serif leading-none">INR 8,420.50</h2>
            <div className="mt-8 flex items-center gap-2 text-[10px] font-black text-sage uppercase tracking-widest bg-white/5 w-fit px-3 py-1.5 rounded-full">
               <ArrowUpRight size={14} /> +12% from last month
            </div>
          </div>

          <div className="md:col-span-2 bg-white p-8 rounded-[40px] border border-sage/10 shadow-sm">
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-xs font-black text-sage-dark uppercase tracking-widest">Revenue Growth</h3>
               <div className="flex items-center gap-2 text-[10px] font-black text-sage-dark/30 uppercase tracking-widest">
                  <Calendar3 size={14} /> Last 6 Months
               </div>
            </div>
            <div className="h-40">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={revenueData}>
                   <defs>
                     <linearGradient id="earnGrad" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#99A88C" stopOpacity={0.2} />
                       <stop offset="95%" stopColor="#99A88C" stopOpacity={0} />
                     </linearGradient>
                   </defs>
                   <Tooltip 
                     contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', fontSize: '10px', fontWeight: 'bold' }}
                     cursor={{ stroke: '#99A88C', strokeWidth: 1, strokeDasharray: '4 4' }}
                   />
                   <Area type="monotone" dataKey="earnings" stroke="#99A88C" strokeWidth={3} fill="url(#earnGrad)" />
                 </AreaChart>
               </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-[40px] border border-sage/10 shadow-sm p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-black text-sage-dark uppercase tracking-widest">Recent Transactions</h3>
            <button className="text-[10px] font-black text-sage uppercase tracking-widest flex items-center gap-2">
               Full Statement <Download size={14} />
            </button>
          </div>

          <div className="space-y-4">
             {transactionHistory.map((t) => (
               <div key={t.id} className="flex items-center justify-between p-5 rounded-[24px] hover:bg-cream/50 transition-all cursor-pointer border border-transparent hover:border-sage/10 group">
                  <div className="flex items-center gap-4">
                     <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${t.type === 'credit' ? 'bg-sage/10 text-sage' : 'bg-gold/10 text-gold'}`}>
                        {t.type === 'credit' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                     </div>
                     <div>
                        <p className="text-xs font-bold text-sage-dark leading-tight">{t.desc}</p>
                        <p className="text-[9px] font-bold text-sage-dark/40 uppercase tracking-widest mt-1">{t.date} · {t.id}</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <p className={`text-sm font-black ${t.type === 'credit' ? 'text-sage-dark' : 'text-gold-dark'}`}>{t.amount}</p>
                     <p className="text-[8px] font-black text-sage-dark/30 uppercase tracking-widest mt-1">{t.status}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
}
