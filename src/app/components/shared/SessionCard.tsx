import { Calendar, Clock, Video, MoreVertical, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

interface SessionCardProps {
  role: 'client' | 'coach' | 'admin';
  session: {
    id: string;
    date: string;
    time: string;
    participantName: string;
    type: string;
    status: 'upcoming' | 'completed' | 'cancelled';
    isAnonymous?: boolean;
  };
}

export function SessionCard({ role, session }: SessionCardProps) {
  const isUpcoming = session.status === 'upcoming';
  
  return (
    <div className="bg-white p-5 rounded-[24px] border border-[#3D5247]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-[#3D5247]/30 transition-all">
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center shrink-0 ${
          session.status === 'completed' ? 'bg-[#EDF2EE] text-[#3D5247]' : 'bg-[#3D5247] text-white'
        }`}>
          <span className="text-[10px] font-bold uppercase leading-none mb-1 opacity-70">Mar</span>
          <span className="text-xl font-bold leading-none font-serif">14</span>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-[#3D5247] text-sm">
              {role === 'client' ? `Coach ${session.participantName}` : session.participantName}
            </h4>
            {session.isAnonymous && (
              <span className="text-[9px] font-bold bg-[#EDF2EE] text-[#3D5247] px-1.5 py-0.5 rounded-md uppercase tracking-wider">Anon</span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#3D5247]/50 font-medium">
            <div className="flex items-center gap-1.5">
              <Clock size={12} />
              <span>{session.time} (60 min)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Video size={12} />
              <span>{session.type}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {isUpcoming ? (
          <>
            <Link 
              to={`/session/${session.id}`}
              className="px-5 py-2.5 bg-[#3D5247] text-white rounded-xl text-xs font-bold hover:bg-[#5A7265] transition-colors shadow-sm"
            >
              Join Room
            </Link>
            <button className="p-2.5 text-[#3D5247]/40 hover:text-[#3D5247] transition-colors">
              <MoreVertical size={18} />
            </button>
          </>
        ) : (
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-xl text-xs font-bold border border-green-100/50">
            <CheckCircle2 size={14} />
            <span>Completed</span>
          </div>
        )}
      </div>
    </div>
  );
}
