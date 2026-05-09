import { Link } from "react-router";

export function UpcomingSession() {
  return (
    <div className="bg-[#2D3324] rounded-[36px] p-8 text-white relative overflow-hidden shadow-2xl border border-[#8B9A71]/20">
       <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B9A71]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
       <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
             <span className="inline-block px-3 py-1 bg-[#8B9A71]/20 text-[#8B9A71] rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Confirmed Session</span>
             <h2 className="text-3xl font-serif mb-2 font-black">Tomorrow at 10:00 AM</h2>
             <p className="text-white/60 font-medium">Session with Coach Sharma · 60 Minutes</p>
          </div>
          <Link 
            to="/session/next" 
            className="px-8 py-4 bg-[#8B9A71] text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-transform text-center shadow-xl shadow-black/20"
          >
            Join Room
          </Link>
       </div>
    </div>
  );
}
