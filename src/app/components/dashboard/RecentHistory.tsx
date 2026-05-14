import { Link } from "react-router";
import { SessionCard } from "../../components/shared/SessionCard";

export function RecentHistory() {
  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between px-2">
          <h3 className="text-xl font-black text-[#2D3324] font-serif uppercase tracking-tight italic">Recent Sessions</h3>
          <Link to="/portal/sessions" className="text-[10px] font-black text-[#8B9A71] uppercase tracking-[0.3em] hover:text-[#2D3324] transition-colors">View All</Link>
       </div>
       <div className="grid gap-4">
          <SessionCard 
            role="client" 
            session={{
              id: "1",
              date: "Mar 11",
              time: "02:00 PM",
              participantName: "Sharma",
              type: "Individual Coaching",
              status: "completed"
            }} 
          />
          <SessionCard 
            role="client" 
            session={{
              id: "2",
              date: "Mar 04",
              time: "10:00 AM",
              participantName: "Sharma",
              type: "Discovery Call",
              status: "completed"
            }} 
          />
       </div>
    </div>
  );
}
