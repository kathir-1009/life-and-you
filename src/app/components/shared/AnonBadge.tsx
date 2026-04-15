import { ShieldCheck } from "lucide-react";

export function AnonBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#3D5247] text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-[#3D5247]/20 border border-white/10 animate-in fade-in zoom-in duration-500">
      <ShieldCheck size={12} className="text-[#C4A35A]" />
      <span>Anonymous Mode Active</span>
    </div>
  );
}
