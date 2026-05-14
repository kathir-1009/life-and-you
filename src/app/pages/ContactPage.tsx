import { useEffect } from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Send, ShieldCheck, ChevronRight } from "lucide-react";

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | Life & You - Talk to a Specialist";
  }, []);
  return (
    <div className="bg-[#F4F7FA] min-h-screen portal-context relative overflow-hidden animate-in fade-in duration-700">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4E5540]/5 rounded-full blur-[80px] pointer-events-none" />

      {/* High-End Contact Header */}
      <section className="bg-[#F4F7FA] py-32 px-6 text-center relative overflow-hidden border-b border-[#8B9A71]/10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8B9A71]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 bg-[#FFFFFF] border border-[#8B9A71]/20 rounded-full px-6 py-2.5 mb-10 shadow-sm">
             <ShieldCheck size={18} className="text-[#8B9A71]" />
             <span className="text-[10px] text-[#2D3324] font-black uppercase tracking-[0.4em]">Privacy-First Resonance</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#2D3324] mb-8 tracking-tighter leading-none italic uppercase font-serif">
            Connect <span className="text-[#8B9A71]">Silently.</span>
          </h1>
          <p className="text-[11px] text-[#8B9A71] max-w-2xl mx-auto font-black uppercase tracking-[0.5em] opacity-80 leading-relaxed">
            Whether for certification verification or personalized queries, our lines are secure and absolute. 
          </p>
        </div>
      </section>

      <section className="py-32 px-6 relative z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
          {/* Info Side */}
          <div className="space-y-16">
            <div>
               <h2 className="text-3xl md:text-5xl font-black text-[#2D3324] font-serif uppercase tracking-tighter italic mb-8 leading-tight">Secure <br/><span className="text-[#8B9A71]">Outlets.</span></h2>
               <p className="text-[#8B9A71] font-black uppercase tracking-[0.2em] text-[11px] leading-relaxed opacity-60 mb-12">
                 We operate globally with a core hub in Dubai. Reach us across any of these verified resonance channels.
               </p>
            </div>

            <div className="space-y-8">
               <ContactItem 
                 icon={Mail} 
                 label="Cryptic Dispatch" 
                 val="concierge@lifeandyou.com" 
                 desc="Encrypted response within 12 resonance cycles."
               />
               <ContactItem 
                 icon={Phone} 
                 label="Direct Bridge" 
                 val="+971 50 123 4567" 
                 desc="Whisper enabled for voice & text."
               />
               <ContactItem 
                 icon={MapPin} 
                 label="Sanctuary Node" 
                 val="Dubai, UAE" 
                 desc="International timezone support."
               />
            </div>

            <div className="pt-12 border-t border-[#8B9A71]/10 flex items-center gap-10">
               <span className="text-[10px] font-black text-[#8B9A71] uppercase tracking-[0.4em]">Resonance</span>
               <div className="flex gap-6">
                  <SocialPill icon={Instagram} />
                  <SocialPill icon={Linkedin} />
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#FFFFFF] rounded-[64px] p-12 lg:p-16 shadow-premium border border-[#8B9A71]/10 relative overflow-hidden group">
             {/* Subtle background glow */}
             <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F4F7FA] rounded-full translate-y-1/2 translate-x-1/2 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
             
             <h3 className="text-3xl font-black text-[#2D3324] font-serif uppercase tracking-tighter italic mb-12 leading-none">Inquiry <span className="text-[#8B9A71]">Dispatch.</span></h3>
             <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-10">
                   <div className="space-y-4">
                      <InputLabel>Identity Pseudonym</InputLabel>
                      <input type="text" className="w-full bg-[#F4F7FA] border border-[#8B9A71]/10 rounded-[28px] px-8 py-6 text-sm font-black text-[#2D3324] outline-none focus:border-[#8B9A71] focus:bg-white transition-all shadow-inner uppercase tracking-tight" placeholder="Sarah M." />
                   </div>
                   <div className="space-y-4">
                      <InputLabel>Secure Address</InputLabel>
                      <input type="email" className="w-full bg-[#F4F7FA] border border-[#8B9A71]/10 rounded-[28px] px-8 py-6 text-sm font-black text-[#2D3324] outline-none focus:border-[#8B9A71] focus:bg-white transition-all shadow-inner uppercase tracking-tight" placeholder="s.mitchell@email.com" />
                   </div>
                </div>

                <div className="space-y-4">
                   <InputLabel>Frequency Topic</InputLabel>
                   <div className="relative">
                      <select className="w-full bg-[#F4F7FA] border border-[#8B9A71]/10 rounded-[28px] px-8 py-6 text-sm font-black text-[#2D3324] outline-none focus:border-[#8B9A71] focus:bg-white appearance-none transition-all shadow-inner uppercase tracking-tight">
                        <option>General Growth Inquiry</option>
                        <option>Booking/Portal Access</option>
                        <option>Certification Verification</option>
                        <option>Corporate Sanctuary</option>
                      </select>
                      <ChevronRight size={20} className="absolute right-8 top-1/2 -translate-y-1/2 rotate-90 text-[#8B9A71] pointer-events-none" />
                   </div>
                </div>

                <div className="space-y-4">
                   <InputLabel>Detailed Resonance</InputLabel>
                   <textarea rows={5} className="w-full bg-[#F4F7FA] border border-[#8B9A71]/10 rounded-[28px] px-8 py-6 text-sm font-black text-[#2D3324] outline-none focus:border-[#8B9A71] focus:bg-white transition-all shadow-inner resize-none uppercase tracking-tight" placeholder="What is on your mind?"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#2D3324] text-white py-8 rounded-[40px] text-[12px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 shadow-3xl hover:bg-[#8B9A71] hover:text-[#2D3324] transition-all group active:scale-[0.98]">
                   Transmit Message 
                   <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform">
                      <Send size={20} />
                   </div>
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
    <div className="flex gap-8 items-center p-8 bg-[#FFFFFF] rounded-[44px] border border-[#8B9A71]/10 shadow-premium hover:translate-x-3 transition-transform cursor-default relative overflow-hidden group">
       <div className="absolute top-0 right-0 w-24 h-24 bg-[#F4F7FA] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
       <div className="w-16 h-16 bg-[#2D3324] rounded-[24px] flex items-center justify-center text-[#8B9A71] shadow-lg relative z-10">
          <Icon size={28} />
       </div>
       <div className="relative z-10">
          <p className="text-[10px] font-black text-[#8B9A71] uppercase tracking-[0.3em] mb-1.5 opacity-80">{label}</p>
          <h4 className="text-xl font-black text-[#2D3324] mb-1 uppercase tracking-tight italic font-serif">{val}</h4>
          <p className="text-[11px] font-black text-[#8B9A71]/60 uppercase tracking-widest">{desc}</p>
       </div>
    </div>
  );
}

function SocialPill({ icon: Icon }: { icon: any }) {
  return (
    <div className="w-14 h-14 bg-[#FFFFFF] border border-[#8B9A71]/20 rounded-[20px] flex items-center justify-center text-[#2D3324] hover:bg-[#2D3324] hover:text-white hover:-translate-y-2 transition-all shadow-premium cursor-pointer group">
       <Icon size={24} className="group-hover:scale-110 transition-transform" />
    </div>
  );
}

function InputLabel({ children }: { children: React.ReactNode }) {
  return (
     <label className="block text-[10px] font-black text-[#8B9A71] uppercase tracking-[0.4em] ml-4">
        {children}
     </label>
  );
}
