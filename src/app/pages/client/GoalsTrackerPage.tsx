import { useState } from "react";
import { CheckCircleFill, Plus, Trash, TrophyFill, LightningFill, MoonFill, HeartFill } from "react-bootstrap-icons";

export function GoalsTrackerPage() {
  const [goals, setGoals] = useState([
    { id: 1, title: "Daily Meditation (15m)", category: "Mindfulness", progress: 70, color: "text-sage" },
    { id: 2, title: "Complete Sleep Protocol", category: "Wellness", progress: 40, color: "text-gold" },
    { id: 3, title: "Work-Life Boundaries", category: "Career", progress: 90, color: "text-sage-dark" },
  ]);

  return (
    <div className="animate-in fade-in duration-700 portal-context pb-20 space-y-10">
      {/* Header */}
      <div className="bg-sage pt-16 pb-32 px-6 rounded-b-[60px] lg:rounded-b-[80px] relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
         <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight font-serif mb-4">Milestones</h1>
            <p className="text-white/60 text-xs font-bold uppercase tracking-[0.4em]">Your Journey to Transformation</p>
         </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-20 space-y-8">
         {/* Overall Progress */}
         <div className="bg-white rounded-[40px] p-8 lg:p-10 shadow-premium border border-sage/5 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-center gap-6">
               <div className="w-20 h-20 bg-cream rounded-[32px] flex items-center justify-center text-gold shadow-sm">
                  <TrophyFill size={36} />
               </div>
               <div>
                  <h2 className="text-2xl font-bold text-sage-dark font-serif uppercase tracking-tight">Active Momentum</h2>
                  <p className="text-[10px] font-black text-sage-dark/30 uppercase tracking-widest mt-1">67% Average Completion Rate</p>
               </div>
            </div>
            <button className="bg-sage-dark text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 shadow-xl hover:scale-105 transition-all">
               <Plus size={18} /> New Milestone
            </button>
         </div>

         {/* Goals Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal) => (
               <div key={goal.id} className="bg-white p-8 rounded-[40px] shadow-premium border border-sage/5 group hover:border-sage transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                     <button className="text-red-400 hover:text-red-600"><Trash size={16} /></button>
                  </div>
                  
                  <div className={`w-10 h-10 bg-cream ${goal.color} rounded-xl flex items-center justify-center mb-6`}>
                     {goal.category === 'Mindfulness' ? <LightningFill size={18} /> : goal.category === 'Wellness' ? <MoonFill size={18} /> : <HeartFill size={18} />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-sage-dark font-serif uppercase tracking-tight mb-2">{goal.title}</h3>
                  <p className="text-[10px] font-black text-sage-dark/30 uppercase tracking-[0.2em] mb-8">{goal.category}</p>
                  
                  <div className="space-y-4">
                     <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                        <span className="text-sage-dark/40">Progress</span>
                        <span className="text-sage-dark">{goal.progress}%</span>
                     </div>
                     <div className="h-2 bg-cream rounded-full overflow-hidden">
                        <div className="h-full bg-sage rounded-full" style={{ width: `${goal.progress}%` }} />
                     </div>
                  </div>
               </div>
            ))}
            
            {/* Quick Add Placeholder */}
            <div className="border-2 border-dashed border-sage/20 rounded-[40px] p-8 flex flex-col items-center justify-center text-center gap-4 hover:bg-white hover:border-sage transition-all min-h-[280px]">
               <div className="w-14 h-14 bg-cream rounded-full flex items-center justify-center text-sage-dark/20">
                  <Plus size={32} />
               </div>
               <p className="text-[10px] font-black text-sage-dark/40 uppercase tracking-widest">Define your next breakthrough</p>
            </div>
         </div>
      </div>
    </div>
  );
}
