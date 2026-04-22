import { useState } from "react";
import { Plus, Dash, Search, ChatDotsFill, HeartFill, QuestionCircleFill } from "react-bootstrap-icons";

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I know if Life & You is right for me?",
      answer: "If you are seeking personal growth, emotional resilience, or career clarity, our sanctuary is designed for you. We recommend starting with our Discovery Quiz to see which of our protocols and guides align with your current needs."
    },
    {
      question: "What is 'Sanctuary Grade' encryption?",
      answer: "Security and privacy are core to our philosophy. All sessions and journal entries are end-to-end encrypted, ensuring that your journey remains entirely private between you and your guide."
    },
    {
      question: "Can I switch coaches if I don't feel a connection?",
      answer: "Absolutely. We believe connection is vital for transformation. You can switch guides at any time through your portal, and our support team is available to help you find a better match if needed."
    },
    {
      question: "Do you offer group coaching or just 1-on-1?",
      answer: "We primarily focus on 1-on-1 sanctuary sessions to ensure deep, personalized breakthroughs. However, we do offer 'Collective Circles' (group workshops) for specific programs like Stress Management and Focus Mastery."
    },
    {
      question: "How long does a typical transformation journey last?",
      answer: "While every individual is unique, most of our sanctuary seekers find that 3-6 months of consistent sessions lead to sustainable, long-term shifts in their mental and emotional wellbeing."
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 pb-20">
      {/* Header */}
      <div className="bg-sage-dark pt-24 pb-32 px-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none" />
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-[24px] flex items-center justify-center mx-auto mb-8 text-gold">
               <QuestionCircleFill size={32} />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight font-serif mb-6">
               Clarifying Your Path
            </h1>
            <p className="max-w-2xl mx-auto text-white/40 text-sm md:text-base font-medium leading-relaxed mb-12 uppercase tracking-widest">
               Common inquiries regarding the sanctuary protocol
            </p>
            
            <div className="max-w-2xl mx-auto relative">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={18} />
               <input 
                  type="text" 
                  placeholder="Search for answers..." 
                  className="w-full bg-white/10 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white text-[11px] font-bold uppercase tracking-widest outline-none focus:bg-white/20 transition-all shadow-inner"
               />
            </div>
         </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 -mt-12 relative z-20">
         <div className="bg-white rounded-[48px] p-8 lg:p-12 shadow-premium border border-sage/5">
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                  <div 
                     key={i} 
                     className={`rounded-[32px] overflow-hidden transition-all duration-500 ${openIndex === i ? 'bg-cream/50 shadow-sm' : 'bg-white'}`}
                  >
                     <button 
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full px-8 py-8 flex items-center justify-between text-left group"
                     >
                        <span className={`text-lg font-bold font-serif transition-colors ${openIndex === i ? 'text-sage-dark' : 'text-sage-dark/70 group-hover:text-sage'}`}>
                           {faq.question}
                        </span>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${openIndex === i ? 'bg-sage-dark text-white rotate-180' : 'bg-cream text-sage-dark/40 group-hover:bg-sage/10 group-hover:text-sage'}`}>
                           {openIndex === i ? <Dash size={20} /> : <Plus size={20} />}
                        </div>
                     </button>
                     
                     <div className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 pb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-sm font-medium text-sage-dark/60 leading-relaxed max-w-2xl">
                           {faq.answer}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Contact CTA */}
         <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-10 p-10 bg-white rounded-[40px] border border-sage/5 shadow-premium">
            <div className="flex items-center gap-6">
               <div className="w-14 h-14 bg-sage rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <ChatDotsFill size={24} />
               </div>
               <div>
                  <h4 className="text-xl font-bold text-sage-dark font-serif uppercase tracking-tight">Still seeking clarity?</h4>
                  <p className="text-[10px] font-black text-sage-dark/30 uppercase tracking-widest mt-1">Our support sanctuary is here for you</p>
               </div>
            </div>
            <button className="w-full md:w-auto bg-sage-dark text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-sage transition-all">
               Connect with Support
            </button>
         </div>

         <div className="mt-20 text-center">
            <HeartFill size={32} className="text-sage mx-auto mb-6 opacity-20" />
            <p className="text-[9px] font-black text-sage-dark/20 uppercase tracking-[0.4em]">Your Peace is our Priority</p>
         </div>
      </div>
    </div>
  );
}
