import { useEffect } from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Send, ShieldCheck, ChevronRight } from "lucide-react";

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | Life & You - Talk to a Specialist";
  }, []);
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* High-End Contact Header */}
      <section className="bg-[#2D3324] py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B9A71]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 bg-[#8B9A71]/20 border border-[#8B9A71]/30 rounded-full px-5 py-2 mb-8">
            <div className="w-4 h-4 flex items-center justify-center">
              <img src="/img/Lifeandyou-logo-1.png" alt="Life & You" className="w-full h-full object-contain" />
            </div>
            <span className="text-[10px] text-[#CED2BA] font-extrabold uppercase tracking-[0.2em]">Privacy First Communication</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Connect <span className="text-[#8B9A71]">Silently.</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium opacity-70 leading-relaxed">
            Whether for certification verification or personalized queries, our lines are secure and judgment-free. 
          </p>
        </div>
      </section>

      <section className="py-32 -mt-20 px-6 relative z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
               <h2 className="text-3xl font-black text-[#2D3324] mb-6">Our Secure Outlets</h2>
               <p className="text-[#545454] font-medium leading-relaxed opacity-80 mb-10">
                 We operate globally with a core hub in Dubai. Reach us across any of these verified channels.
               </p>
            </div>

            <div className="space-y-6">
               <ContactItem 
                 icon={Mail} 
                 label="Cryptic Email" 
                 val="secure@lifeandyou.com" 
                 desc="Encrypted response within 12 hours."
               />
               <ContactItem 
                 icon={Phone} 
                 label="Direct Bridge" 
                 val="+971 50 123 4567" 
                 desc="WhatsApp enabled for voice & text."
               />
               <ContactItem 
                 icon={MapPin} 
                 label="Global Node" 
                 val="Dubai, UAE" 
                 desc="International timezone support."
               />
            </div>

            <div className="pt-10 border-t border-[rgba(139,154,113,0.1)] flex items-center gap-8">
               <span className="text-[10px] font-extrabold text-[#8B9A71] uppercase tracking-[0.2em]">Social Presence</span>
               <div className="flex gap-4">
                  <SocialPill icon={Instagram} />
                  <SocialPill icon={Linkedin} />
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-[64px] p-12 shadow-premium border border-[rgba(139,154,113,0.05)] relative overflow-hidden group">
             {/* Subtle background glow */}
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8B9A71]/5 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
             
             <h3 className="text-2xl font-black text-[#2D3324] mb-10">Inquiry Dispatch</h3>
             <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <InputLabel>Identity (Pseudonym fine)</InputLabel>
                      <input type="text" className="w-full bg-[#F8F9FA] border-2 border-transparent rounded-[24px] px-6 py-5 text-sm font-bold outline-none focus:border-[#8B9A71] focus:bg-white transition-all" placeholder="Sarah M." />
                   </div>
                   <div className="space-y-2">
                      <InputLabel>Secure Email</InputLabel>
                      <input type="email" className="w-full bg-[#F8F9FA] border-2 border-transparent rounded-[24px] px-6 py-5 text-sm font-bold outline-none focus:border-[#8B9A71] focus:bg-white transition-all" placeholder="s.mitchell@email.com" />
                   </div>
                </div>

                <div className="space-y-2">
                   <InputLabel>Topic of Conversation</InputLabel>
                   <div className="relative">
                      <select className="w-full bg-[#F8F9FA] border-2 border-transparent rounded-[24px] px-6 py-5 text-sm font-bold outline-none focus:border-[#8B9A71] focus:bg-white appearance-none transition-all">
                        <option>General Growth Inquiry</option>
                        <option>Booking/Portal Access</option>
                        <option>Certification Verification</option>
                        <option>Corporate Sanctuary</option>
                      </select>
                      <ChevronRight size={18} className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-[#8B9A71] pointer-events-none" />
                   </div>
                </div>

                <div className="space-y-2">
                   <InputLabel>Detailed Notes</InputLabel>
                   <textarea rows={4} className="w-full bg-[#F8F9FA] border-2 border-transparent rounded-[24px] px-6 py-5 text-sm font-bold outline-none focus:border-[#8B9A71] focus:bg-white transition-all resize-none" placeholder="What is on your mind?"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#2D3324] text-white py-6 rounded-pill text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl hover:bg-[#1C1A1E] transition-all group active:scale-[0.98]">
                   Transmit Message 
                   <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
             </form>
          </div>
        </div>
      </section>


    </div>
  );
}

function ContactItem({ icon: Icon, label, val, desc }: { icon: any, label: string, val: string, desc: string }) {
  return (
    <div className="flex gap-6 items-center p-6 bg-white rounded-[32px] border border-[rgba(139,154,113,0.05)] shadow-sm hover:translate-x-2 transition-transform cursor-default">
       <div className="w-16 h-16 bg-[#2D3324] rounded-2xl flex items-center justify-center text-[#8B9A71] shadow-lg">
          <Icon size={24} />
       </div>
       <div>
          <p className="text-[10px] font-black text-[#8B9A71] uppercase tracking-[0.2em] mb-1">{label}</p>
          <h4 className="text-lg font-black text-[#2D3324] mb-1">{val}</h4>
          <p className="text-[11px] font-medium text-[#545454]/60">{desc}</p>
       </div>
    </div>
  );
}

function SocialPill({ icon: Icon }: { icon: any }) {
  return (
    <div className="w-12 h-12 bg-white border border-[rgba(139,154,113,0.1)] rounded-2xl flex items-center justify-center text-[#2D3324] hover:bg-[#8B9A71] hover:text-white hover:-translate-y-1 transition-all shadow-sm cursor-pointer">
       <Icon size={20} />
    </div>
  );
}

function InputLabel({ children }: { children: React.ReactNode }) {
  return (
     <label className="block text-[10px] font-black text-[#8B9A71] uppercase tracking-[0.2em] ml-2">
        {children}
     </label>
  );
}
