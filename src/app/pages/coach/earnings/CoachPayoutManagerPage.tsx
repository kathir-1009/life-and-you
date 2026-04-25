import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, CurrencyDollar, ArrowUpRight, Bank, ClockHistory, Download, Receipt } from "react-bootstrap-icons";

export function CoachPayoutManagerPage() {
  const navigate = useNavigate();

  const payouts = [
    { id: "PAY-001", date: "April 15, 2026", amount: "$1,250.00", status: "Processed", method: "Bank Transfer (...4589)" },
    { id: "PAY-002", date: "April 01, 2026", amount: "$1,100.00", status: "Processed", method: "Bank Transfer (...4589)" },
    { id: "PAY-003", date: "March 15, 2026", amount: "$980.00", status: "Processed", method: "Bank Transfer (...4589)" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700 px-4 md:px-0 portal-context pb-20">
      {/* Cinematic Header - Mobile Only */}
      <div className="lg:hidden relative -mx-4 -mt-8">
         <button 
            onClick={() => navigate(-1)}
            className="absolute top-12 left-6 z-20 w-10 h-10 bg-[#FFFFFF]/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-[#FFFFFF]/10 active:scale-95 transition-all"
         >
            <ChevronLeft size={20} />
         </button>

         <div className="bg-[#5E6C54] pt-24 pb-32 px-6 rounded-b-[80px] relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
            <div className="relative z-10">
               <h1 className="text-3xl font-black tracking-tight mb-2 !text-[#FFFFFF]" style={{ color: '#FFFFFF' }}>Payout Manager</h1>
               <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.3em] !text-[#99A88C]">Financial Dashboard</p>
            </div>
         </div>
      </div>

      {/* Header with Actions - Desktop */}
      <div className="hidden lg:flex bg-[#FFFFFF] p-6 rounded-[32px] md:p-0 md:bg-transparent shadow-sm md:shadow-none flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl lg:text-4xl font-bold text-[#5E6C54] font-serif mb-2 uppercase tracking-tight">Payout Manager</h1>
           <p className="text-[#5E6C54]/60 text-[11px] font-bold uppercase tracking-widest">Manage your earnings, methods, and statements.</p>
        </div>

        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 bg-[#99A88C] text-white px-6 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-[#5E6C54] transition-all shadow-lg shadow-[#99A88C]/20">
              <Download size={16} /> Export Tax Report
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            {/* Next Payout Card */}
            <div className="bg-[#5E6C54] rounded-[40px] p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                     <span className="text-[10px] font-black text-[#99A88C] uppercase tracking-widest flex items-center gap-2">
                        <CurrencyDollar size={14} /> Next Scheduled Payout
                     </span>
                     <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-white border border-white/10">Processing</span>
                  </div>
                  <h2 className="text-5xl font-black font-serif mb-2">$845.00</h2>
                  <p className="text-[11px] text-[#99A88C] font-bold uppercase tracking-widest mb-10">Expected: May 1, 2026</p>
                  
                  <button className="w-full py-4 bg-[#FFFFFF] text-[#5E6C54] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-[#FCF8E8] transition-all">
                     View Details
                  </button>
               </div>
            </div>

            {/* Payout History */}
            <div className="bg-white rounded-[40px] p-8 border border-sage/5 shadow-sm">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-sage-dark font-serif uppercase tracking-tight">Recent Payouts</h3>
                  <button className="text-[10px] font-black text-sage uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                     View All <ArrowUpRight size={14} />
                  </button>
               </div>
               
               <div className="space-y-4">
                  {payouts.map((payout, i) => (
                     <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-3xl bg-cream/30 hover:bg-cream/50 transition-colors group gap-4">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sage-dark shadow-sm">
                              <Receipt size={20} />
                           </div>
                           <div>
                              <p className="text-base font-bold text-sage-dark">{payout.amount}</p>
                              <p className="text-[9px] font-black text-sage-dark/30 uppercase tracking-widest mt-1">{payout.date} • {payout.method}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-4 justify-between sm:justify-end border-t border-sage/5 sm:border-t-0 pt-4 sm:pt-0">
                           <span className="text-[9px] font-black text-sage uppercase tracking-widest px-3 py-1 bg-sage/10 rounded-full flex items-center gap-1.5">
                              <ClockHistory size={10} /> {payout.status}
                           </span>
                           <button className="text-sage-dark/30 hover:text-sage-dark transition-colors"><Download size={16} /></button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Sidebar */}
         <div className="space-y-8">
            <div className="bg-[#FCF8E8] rounded-[32px] p-8 border border-sage/5 shadow-inner">
               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gold-dark mb-6 shadow-sm">
                  <Bank size={20} />
               </div>
               <h3 className="text-lg font-bold text-sage-dark font-serif mb-2">Payout Method</h3>
               <p className="text-xs text-sage-dark/60 font-medium leading-relaxed mb-6">
                  Funds are currently deposited to your checking account ending in 4589.
               </p>
               <button className="w-full py-3 bg-sage-dark text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-sage transition-all">
                  Update Method
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
