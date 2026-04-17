import { Link } from "react-router";

export function UpcomingSession() {
  return (
    <div className="bg-[#99A88C] rounded-[32px] p-8 text-[#FFFFFF] relative overflow-hidden shadow-2xl">
       <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
       <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
             <span className="inline-block px-3 py-1 bg-[#FFFFFF]/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Confirmed Session</span>
             <h2 className="text-3xl font-serif mb-2">Tomorrow at 10:00 AM</h2>
             <p className="text-[#FFFFFF]/60 font-medium">Session with Coach Sharma · 60 Minutes</p>
          </div>
          <Link 
            to="/session/next" 
            className="px-8 py-4 bg-[#A68A45] text-[#5E6C54] rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-transform text-center shadow-lg shadow-black/20"
          >
            Join Room
          </Link>
       </div>
    </div>
  );
}
