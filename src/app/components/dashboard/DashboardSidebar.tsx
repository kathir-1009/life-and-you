import { Link } from "react-router";
import { ArrowRight, JournalBookmark } from "react-bootstrap-icons";
import { ProgressBar } from "../../components/shared/ProgressBar";

export function DashboardSidebar() {
  return (
    <div className="space-y-8">
       {/* Progress Overview Card */}
       <div className="bg-white p-8 rounded-[32px] border border-sage/10 shadow-sm space-y-8">
          <div className="flex items-center justify-between">
             <h3 className="font-bold text-sage-dark uppercase tracking-widest text-xs">Growth Areas</h3>
             <Link to="/portal/progress" className="w-8 h-8 bg-cream rounded-xl flex items-center justify-center text-sage-dark"><ArrowRight size={14} /></Link>
          </div>
          
          <div className="space-y-6">
             <ProgressBar label="Self-Awareness" progress={72} />
             <ProgressBar label="Communication" progress={81} />
             <ProgressBar label="Resilience" progress={58} />
          </div>

          <div className="pt-6 border-t border-cream">
             <p className="text-[11px] text-sage-dark/40 font-bold uppercase tracking-widest leading-relaxed">
               Next Milestone:<br />
               <span className="text-sage-dark">10 Sessions Completed (2 to go)</span>
             </p>
          </div>
       </div>

       {/* Library Snippet */}
       <div className="bg-sage-light p-8 rounded-[32px] border border-sage/10 overflow-hidden relative group cursor-pointer">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sage/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-sage/10 transition-colors" />
          <h4 className="font-bold text-sage-dark uppercase tracking-widest text-[10px] mb-6">Recommended for you</h4>
          <div className="bg-white p-4 rounded-2xl shadow-sm mb-6 flex items-center gap-4">
             <div className="w-12 h-12 bg-[#FBF5E6] rounded-xl flex items-center justify-center text-gold shrink-0">
                <JournalBookmark size={20} />
             </div>
             <div>
                <h5 className="text-[13px] font-bold text-sage-dark leading-tight mb-1">Anxiety Management NLP</h5>
                <p className="text-[10px] text-sage-dark/60 font-bold uppercase tracking-tighter">Audio Guide · 12 Min</p>
             </div>
          </div>
          <Link to="/portal/library" className="text-[10px] font-bold text-sage-dark uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
            Access Library <ArrowRight size={14} />
          </Link>
       </div>
    </div>
  );
}
