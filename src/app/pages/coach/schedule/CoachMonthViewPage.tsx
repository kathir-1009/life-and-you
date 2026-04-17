import { useState } from "react";
import { Calendar3, ChevronLeft, ChevronRight, PlusLg, ListTask, ClockHistory } from "react-bootstrap-icons";
import { Link } from "react-router";

export function CoachMonthViewPage() {
  const [currentMonth, setCurrentMonth] = useState("March 2026");

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700 px-4 md:px-0 portal-context pb-20">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl lg:text-4xl font-bold text-sage-dark font-serif mb-2 uppercase tracking-tight">Mentorship Schedule</h1>
           <p className="text-sage-dark/60 text-[11px] font-bold uppercase tracking-widest">Manage your availability and upcoming client breakthroughs.</p>
        </div>

        <div className="flex items-center gap-3">
           <Link 
             to="/coach/schedule/add"
             className="px-8 py-4 bg-sage-dark text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-all flex items-center gap-3"
           >
              <PlusLg /> Add Availability
           </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
         {/* Calendar Main View */}
         <div className="lg:col-span-8 bg-white rounded-[48px] border border-sage/10 shadow-sm p-10">
            <div className="flex items-center justify-between mb-12">
               <h3 className="text-2xl font-bold text-sage-dark font-serif uppercase tracking-tight">{currentMonth}</h3>
               <div className="flex items-center gap-4">
                  <div className="flex items-center bg-cream rounded-xl p-1 border border-sage/10">
                     <ViewButton active>Month</ViewButton>
                     <ViewButton>Week</ViewButton>
                     <ViewButton>Day</ViewButton>
                  </div>
                  <div className="flex gap-2">
                     <NavButton icon={ChevronLeft} />
                     <NavButton icon={ChevronRight} />
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-7 gap-px bg-sage/10 rounded-3xl overflow-hidden border border-sage/10">
               {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                 <div key={day} className="bg-cream p-4 text-center text-[10px] font-black text-sage-dark/40 uppercase tracking-widest border-b border-sage/10">
                    {day}
                 </div>
               ))}
               {[...Array(35)].map((_, i) => {
                 const day = i - 2; // Offset for month start
                 const isToday = day === 14;
                 const hasSession = [15, 18, 22].includes(day);
                 
                 return (
                   <div key={i} className={`min-h-[120px] bg-white p-4 border-r border-b border-sage/5 transition-all hover:bg-cream/30 group cursor-pointer`}>
                      <span className={`text-[11px] font-bold ${day > 0 && day <= 31 ? (isToday ? 'bg-sage text-white w-6 h-6 rounded-lg flex items-center justify-center' : 'text-sage-dark') : 'text-sage-dark/10'}`}>
                         {day > 0 && day <= 31 ? day : ''}
                      </span>
                      {hasSession && (
                        <div className="mt-4 space-y-1">
                           <div className="bg-sage-dark/10 border-l-2 border-sage-dark p-2 rounded-r-lg">
                              <p className="text-[8px] font-black text-sage-dark uppercase tracking-tighter truncate">10:00 AM • Sarah M.</p>
                           </div>
                        </div>
                      )}
                   </div>
                 );
               })}
            </div>
         </div>

         {/* Right: Sidebar Info */}
         <div className="lg:col-span-4 space-y-6">
            <div className="bg-sage-dark p-10 rounded-[48px] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px]" />
               <h4 className="text-xl font-bold font-serif mb-8 uppercase tracking-tight">March Statistics</h4>
               <div className="space-y-6">
                  <StatRow label="Completed Sessions" val="24" />
                  <StatRow label="Upcoming Bookings" val="12" />
                  <StatRow label="Hours Authored" val="36h" />
               </div>
            </div>

            <div className="bg-white p-8 rounded-[40px] border border-sage/10 shadow-sm">
               <div className="flex items-center justify-between mb-8">
                  <h4 className="text-[10px] font-black text-sage-dark uppercase tracking-widest">Today's Focus</h4>
                  <ListTask size={18} className="text-sage" />
               </div>
               <div className="space-y-4">
                  <AgendaItem time="10:00 AM" client="Sarah Mitchell" type="Anxiety Check" />
                  <AgendaItem time="02:00 PM" client="John Doe" type="Goals Review" />
               </div>
               <button className="w-full mt-8 py-4 text-[9px] font-black text-gold-dark uppercase tracking-[0.2em] border border-gold-dark/20 rounded-2xl hover:bg-gold-dark hover:text-white transition-all">
                  Full Day Agenda
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}

function ViewButton({ children, active }: { children: string, active?: boolean }) {
  return (
    <button className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${active ? 'bg-white text-sage-dark shadow-sm' : 'text-sage-dark/40 hover:text-sage-dark'}`}>
       {children}
    </button>
  );
}

function NavButton({ icon: Icon }: { icon: any }) {
  return (
    <button className="p-3 bg-white border border-sage/10 rounded-xl text-sage-dark hover:bg-cream transition-all shadow-sm">
       <Icon size={16} />
    </button>
  );
}

function StatRow({ label, val }: { label: string, val: string }) {
  return (
    <div className="flex justify-between items-end border-b border-white/10 pb-4">
       <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{label}</span>
       <span className="text-2xl font-bold font-serif">{val}</span>
    </div>
  );
}

function AgendaItem({ time, client, type }: { time: string, client: string, type: string }) {
  return (
    <div className="p-4 bg-cream rounded-2xl border border-sage/5 group hover:border-sage/20 transition-all cursor-pointer">
       <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] font-black text-gold-dark uppercase tracking-widest">{time}</span>
          <ClockHistory size={12} className="text-sage-dark/20" />
       </div>
       <p className="text-sm font-bold text-sage-dark tracking-tight mb-1">{client}</p>
       <p className="text-[9px] font-black text-sage-dark/40 uppercase tracking-widest">{type}</p>
    </div>
  );
}
