import { ChevronLeft, CreditCard, Download, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router";

export function BillingHistoryPage() {
  const navigate = useNavigate();
  
  const transactions = [
    { id: "INV-2026-001", date: "Apr 12, 2026", amount: "₹4,999", status: "Paid", plan: "Premium Monthly" },
    { id: "INV-2026-002", date: "Mar 12, 2026", amount: "₹4,999", status: "Paid", plan: "Premium Monthly" },
    { id: "INV-2026-003", date: "Feb 12, 2026", amount: "₹4,999", status: "Paid", plan: "Premium Monthly" },
  ];

  return (
    <div className="min-h-screen bg-[#FCF8E8] pb-32 portal-context animate-in fade-in duration-700">
      {/* Cinematic Full-Width Header */}
      <div className="relative">
         <button 
            onClick={() => navigate(-1)}
            className="absolute top-12 left-6 z-20 w-10 h-10 bg-[#FFFFFF]/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-[#FFFFFF]/10 active:scale-95 transition-all"
         >
            <ChevronLeft size={20} />
         </button>

         <div className="bg-[#5E6C54] pt-28 pb-32 px-6 rounded-b-[80px] relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl overflow-hidden" />
            <div className="relative z-10">
               <div className="w-16 h-16 bg-[#FFFFFF]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-[#FFFFFF]/10">
                  <CreditCard size={28} className="text-[#99A88C]" />
               </div>
               <h1 className="text-3xl font-black tracking-tight mb-2">Billing History</h1>
               <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.3em] opacity-80">Manage your subscription & invoices</p>
            </div>
         </div>
      </div>

      <div className="max-w-xl mx-auto px-6 -mt-10 relative z-10 space-y-6">
         {/* Active Plan Card */}
         <div className="bg-[#FFFFFF] p-8 rounded-[40px] shadow-[0_20px_50px_rgba(94,108,84,0.1)] border border-[#99A88C]/10 flex items-center justify-between">
            <div>
               <p className="text-[10px] text-[#5E6C54]/40 font-black uppercase tracking-widest mb-1">Current Plan</p>
               <h3 className="text-xl font-black text-[#5E6C54]">Premium Annual</h3>
            </div>
            <div className="bg-[#99A88C]/10 px-4 py-2 rounded-2xl">
               <span className="text-[10px] text-[#99A88C] font-black uppercase tracking-widest">Active</span>
            </div>
         </div>

         {/* Transactions List */}
         <div className="bg-[#FFFFFF] rounded-[44px] overflow-hidden border border-[#99A88C]/10 shadow-2xl">
            <div className="p-6 border-b border-[#99A88C]/5 bg-[#FCF8E8]/50">
               <h3 className="text-[10px] font-black text-[#5E6C54] uppercase tracking-widest">Recent Transactions</h3>
            </div>
            
            {transactions.map((tx, i) => (
               <div key={i} className="p-6 flex items-center justify-between border-b border-[#99A88C]/5 last:border-none hover:bg-[#FCF8E8]/30 transition-all">
                  <div className="flex gap-4 items-center">
                     <div className="w-12 h-12 bg-[#FCF8E8] rounded-2xl flex items-center justify-center text-[#99A88C]">
                        <Download size={18} />
                     </div>
                     <div>
                        <p className="text-xs font-black text-[#5E6C54] mb-0.5">{tx.id}</p>
                        <p className="text-[10px] text-[#5E6C54]/40 font-bold">{tx.date}</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-sm font-black text-[#5E6C54]">{tx.amount}</p>
                     <p className="text-[9px] text-green-600 font-bold uppercase tracking-widest">{tx.status}</p>
                  </div>
               </div>
            ))}
         </div>

         <button className="w-full bg-[#FFFFFF]/50 py-6 rounded-[40px] border border-[#99A88C]/10 flex items-center justify-center gap-3 text-[#5E6C54]/60 hover:bg-white transition-all group">
            <ExternalLink size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">Update Payment Method</span>
         </button>
      </div>
    </div>
  );
}
