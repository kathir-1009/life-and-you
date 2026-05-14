import { Link } from "react-router";

export function UpcomingSession() {
  return (
     <div className="bg-[#FFFFFF] rounded-[48px] p-10 text-[#2D3324] relative overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.15)] border border-[#8B9A71]/10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B9A71]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
           <div>
              <span className="inline-block px-4 py-1.5 bg-[#8B9A71]/10 text-[#8B9A71] rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-6">Confirmed Session</span>
              <h2 className="text-4xl lg:text-5xl font-serif mb-3 font-black tracking-tighter uppercase leading-none">Tomorrow at <span className="text-[#8B9A71]">10:00 AM</span></h2>
              <p className="text-[#2D3324]/50 font-black uppercase tracking-[0.2em] text-[11px]">Session with Coach Sharma · 60 Minutes</p>
           </div>
           <Link 
             to="/session/next" 
             className="px-10 py-5 bg-[#2D3324] text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] hover:scale-105 transition-all text-center shadow-2xl hover:bg-[#8B9A71]"
           >
             Join Room
           </Link>
        </div>
     </div>
  );
}
