import { HelpCircle, MessageCircle, FileText, Shield, ExternalLink, Mail, Phone, ArrowRight } from "lucide-react";

export function HelpSupportPage() {
  const categories = [
    { title: "Booking & Sessions", icon: HelpCircle, items: ["Rescheduling a session", "Canceling your appointment", "How to prepare for your first call"] },
    { title: "Privacy & Security", icon: Shield, items: ["How anonymous mode works", "Our data encryption policy", "Terminating your account"] },
    { title: "Portal Technicals", icon: ExternalLink, items: ["Mobile app installation", "Browser compatibility", "Troubleshooting video calls"] },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-32">
       {/* Header */}
       <div className="bg-[#2D3324] py-12 px-6 md:px-12 rounded-b-[32px] relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
             <h1 className="text-3xl md:text-5xl font-extrabold text-[#FAF9F6] tracking-tight">Support Hub</h1>
             <p className="text-[#8B9A71] mt-1 text-sm font-bold uppercase tracking-widest leading-relaxed">We're here to ensure your journey is seamless</p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Help Areas */}
          <div className="lg:col-span-2 space-y-8">
             <div className="grid md:grid-cols-1 gap-6">
                {categories.map((cat, i) => (
                  <div key={i} className="bg-white p-10 rounded-[40px] border border-[rgba(139,154,113,0.1)] shadow-premium transition-all hover:scale-[1.01]">
                     <div className="flex items-center gap-6 mb-8">
                        <div className="w-16 h-16 bg-[#F8F9FA] rounded-2xl flex items-center justify-center text-[#8B9A71]">
                           <cat.icon size={32} />
                        </div>
                        <h2 className="text-2xl font-black text-[#2D3324]">{cat.title}</h2>
                     </div>
                     <div className="space-y-4">
                        {cat.items.map((item, ii) => (
                          <div key={ii} className="flex items-center justify-between p-4 bg-[#FAF9F6] rounded-2xl group cursor-pointer hover:bg-[#8B9A71]/5 transition-all">
                             <span className="text-sm font-bold text-[#545454]">{item}</span>
                             <ArrowRight size={16} className="text-[#CED2BA] group-hover:text-[#8B9A71] transition-transform group-hover:translate-x-1" />
                          </div>
                        ))}
                     </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
             <div className="bg-[#8B9A71] rounded-[48px] p-10 text-[#2D3324] shadow-premium">
                <h3 className="text-xl font-black mb-4">Direct Concierge</h3>
                <p className="text-sm font-bold leading-relaxed opacity-80 mb-8">Need immediate human assistance? Our concierge team is active 24/7.</p>
                <div className="space-y-4">
                   <button className="w-full bg-white p-4 rounded-3xl flex items-center gap-4 hover:shadow-xl transition-all">
                      <div className="w-10 h-10 bg-[#FAF9F6] rounded-xl flex items-center justify-center text-[#8B9A71]"><MessageCircle size={20} /></div>
                      <span className="text-xs font-black uppercase tracking-widest">Live Messenger</span>
                   </button>
                   <button className="w-full bg-white p-4 rounded-3xl flex items-center gap-4 hover:shadow-xl transition-all">
                      <div className="w-10 h-10 bg-[#FAF9F6] rounded-xl flex items-center justify-center text-[#8B9A71]"><Mail size={20} /></div>
                      <span className="text-xs font-black uppercase tracking-widest">support@lifeandyou.com</span>
                   </button>
                </div>
             </div>

             <div className="bg-white rounded-[40px] p-10 border border-[rgba(139,154,113,0.1)] shadow-premium text-center">
                <div className="w-20 h-20 bg-[#F8F9FA] rounded-full flex items-center justify-center mx-auto mb-6 text-[#CED2BA]">
                   <Shield size={40} />
                </div>
                <h4 className="text-lg font-black text-[#2D3324] mb-2">Privacy Shield</h4>
                <p className="text-xs font-bold text-[#545454]/60 leading-relaxed">Your support requests are also encrypted. We never link tickets to your real identity in anonymous mode.</p>
             </div>
          </div>
       </div>
    </div>
  );
}
