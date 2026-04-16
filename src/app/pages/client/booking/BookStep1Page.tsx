import { Link } from "react-router";
import { ArrowLeft, CameraVideoFill, TelephoneFill, ChatDotsFill } from "react-bootstrap-icons";

export function BookSessionStep1Page() {
  return (
    <div className="min-h-screen bg-[#FCF8E8] pb-32 portal-context">
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <Link to="/portal" className="inline-flex items-center gap-2 text-[#5E6C54]/60 hover:text-[#5E6C54] transition-all mb-12">
           <ArrowLeft size={20} />
           <span className="font-bold text-xs uppercase tracking-widest">Back to Dashboard</span>
        </Link>
        
        <h1 className="text-4xl lg:text-5xl font-bold text-[#5E6C54] font-serif mb-4">Choose Your Path</h1>
        <p className="text-lg text-[#5E6C54]/60 font-medium mb-16 italic">How would you like to connect with your mentor today?</p>
        
        <div className="grid gap-6">
           <OptionCard 
              to="/portal/book/step-2" 
              icon={CameraVideoFill} 
              title="Identity-Shield Video" 
              desc="Encrypted face-to-face video session with optional digital masks." 
           />
           <OptionCard 
              to="/portal/book/step-2" 
              icon={TelephoneFill} 
              title="Voice Sanctuary" 
              desc="Pure audio connection. Perfect for deep listening and verbal sharing." 
           />
           <OptionCard 
              to="/portal/book/step-2" 
              icon={ChatDotsFill} 
              title="Deep Text Reflection" 
              desc="Asynchronous real-time messaging for meditative progress." 
           />
        </div>
      </div>
    </div>
  );
}

function OptionCard({ to, icon: Icon, title, desc }: { to: string, icon: any, title: string, desc: string }) {
  return (
    <Link to={to} className="group flex items-center gap-6 bg-white p-8 rounded-[40px] border border-[#99A88C]/10 hover:border-[#99A88C]/40 transition-all hover:shadow-xl">
       <div className="w-16 h-16 bg-[#FDF8E1] rounded-[24px] flex items-center justify-center text-[#99A88C] group-hover:bg-[#99A88C] group-hover:text-white transition-all duration-500 shadow-md">
          <Icon size={28} />
       </div>
       <div className="flex-1 text-left">
          <h4 className="text-xl font-bold text-[#5E6C54] font-serif uppercase tracking-tight mb-2">{title}</h4>
          <p className="text-sm text-[#5E6C54]/60 font-medium leading-relaxed">{desc}</p>
       </div>
       <div className="w-10 h-10 rounded-full border border-[#99A88C]/20 flex items-center justify-center text-[#99A88C] group-hover:bg-[#99A88C] group-hover:text-white transition-all">
          <ArrowLeft size={18} className="rotate-180" />
       </div>
    </Link>
  );
}
