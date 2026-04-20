import { ChevronLeft, CreditCard, Lock, ShieldCheck, Plus, CheckCircle2, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";

export function UpdatePaymentPage() {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState<number>(0);
  
  const savedCards = [
    { id: 0, type: "Visa", last4: "4242", expiry: "12/26", isDefault: true },
    { id: 1, type: "Mastercard", last4: "8891", expiry: "10/25", isDefault: false },
  ];

  return (
    <div className="min-h-screen bg-[#FCF8E8] pb-32 portal-context animate-in fade-in slide-in-from-bottom-8 duration-700">
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
               <div className="w-16 h-16 bg-[#A68A45] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <CreditCard size={28} className="text-[#5E6C54]" />
               </div>
               <h1 className="text-4xl font-black tracking-tight mb-2 !text-[#FFFFFF]" style={{ color: '#FFFFFF' }}>Vault Payment</h1>
               <p className="text-[#99A88C] text-[10px] font-black uppercase tracking-[0.3em] !text-[#99A88C]">Securely manage your capital connection</p>
            </div>
         </div>
      </div>

      <div className="max-w-xl mx-auto px-6 -mt-10 relative z-10 space-y-10">
         {/* Active Cards Section */}
         <div className="space-y-4">
            <h3 className="text-[10px] font-black text-[#5E6C54] opacity-40 uppercase tracking-[0.25em] px-4">Saved Instruments</h3>
            <div className="space-y-3">
               {savedCards.map((card) => (
                  <button 
                    key={card.id}
                    onClick={() => setSelectedCard(card.id)}
                    className={`w-full p-6 rounded-[32px] border-2 transition-all text-left flex items-center gap-6 ${
                      selectedCard === card.id 
                      ? 'bg-[#5E6C54] border-transparent shadow-2xl !text-white' 
                      : 'bg-white border-[#99A88C]/10 !text-[#5E6C54] hover:border-[#99A88C]/30'
                    }`}
                    style={selectedCard === card.id ? { color: '#FFFFFF' } : { color: '#5E6C54' }}
                  >
                     <div className={`w-14 h-10 rounded-lg flex items-center justify-center font-black text-[10px] uppercase ${selectedCard === card.id ? 'bg-white/10 border border-white/20' : 'bg-[#FCF8E8]'}`}>
                        {card.type}
                     </div>
                     <div className="flex-1">
                        <p className={`text-xs font-black uppercase tracking-widest ${selectedCard === card.id ? '!text-white' : '!text-[#5E6C54]'}`}>**** **** **** {card.last4}</p>
                        <p className={`text-[10px] font-bold ${selectedCard === card.id ? '!text-[#99A88C]' : '!text-[#5E6C54]/40'}`}>Expires {card.expiry}</p>
                     </div>
                     {selectedCard === card.id ? (
                        <CheckCircle2 size={24} className="text-[#A68A45]" />
                     ) : (
                        <MoreVertical size={20} className="text-[#99A88C]/30" />
                     )}
                  </button>
               ))}

               <button className="w-full p-6 rounded-[32px] border-2 border-dashed border-[#99A88C]/30 flex items-center justify-center gap-3 text-[#99A88C] hover:bg-white transition-all hover:border-[#99A88C]">
                  <Plus size={20} />
                  <span className="text-xs font-black uppercase tracking-widest">Connect New Instrument</span>
               </button>
            </div>
         </div>

         {/* New Card Form */}
         <div className="bg-white p-8 rounded-[48px] shadow-2xl border border-[#99A88C]/10 space-y-8">
            <div className="flex items-center gap-3 mb-2">
               <ShieldCheck size={20} className="text-[#99A88C]" />
               <h3 className="text-sm font-black text-[#5E6C54] uppercase tracking-widest">Instrument Details</h3>
            </div>

            <div className="space-y-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#5E6C54]/40 uppercase tracking-widest ml-4">Cardholder Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#FCF8E8]/50 border-2 border-transparent rounded-[24px] px-6 py-4 text-sm font-bold outline-none focus:border-[#99A88C] focus:bg-white transition-all"
                    placeholder="JAMIE SMITH"
                  />
               </div>

               <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#5E6C54]/40 uppercase tracking-widest ml-4">Card Number</label>
                  <div className="relative">
                     <input 
                        type="text" 
                        className="w-full bg-[#FCF8E8]/50 border-2 border-transparent rounded-[24px] px-6 py-4 text-sm font-bold outline-none focus:border-[#99A88C] focus:bg-white transition-all"
                        placeholder="0000 0000 0000 0000"
                     />
                     <CreditCard size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-[#99A88C]" />
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-[#5E6C54]/40 uppercase tracking-widest ml-4">Expiry</label>
                     <input 
                        type="text" 
                        className="w-full bg-[#FCF8E8]/50 border-2 border-transparent rounded-[24px] px-6 py-4 text-sm font-bold outline-none focus:border-[#99A88C] focus:bg-white transition-all"
                        placeholder="MM / YY"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-[#5E6C54]/40 uppercase tracking-widest ml-4">CVV / CVC</label>
                     <div className="relative">
                        <input 
                           type="password" 
                           className="w-full bg-[#FCF8E8]/50 border-2 border-transparent rounded-[24px] px-6 py-4 text-sm font-bold outline-none focus:border-[#99A88C] focus:bg-white transition-all"
                           placeholder="***"
                        />
                        <Lock size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-[#99A88C]" />
                     </div>
                  </div>
               </div>
            </div>

            <button 
              className="w-full bg-[#5E6C54] !text-white py-6 rounded-[32px] font-black text-[10px] uppercase tracking-[0.3em] shadow-xl hover:scale-[1.02] active:scale-100 transition-all mt-4"
              style={{ color: '#FFFFFF' }}
            >
               Secure Instrument & Update
            </button>
            <p className="text-[9px] text-[#5E6C54]/30 font-bold uppercase tracking-tight text-center">
               Locked by end-to-end encryption. Powered by Stripe.
            </p>
         </div>
      </div>
    </div>
  );
}
