import { ShieldCheck } from "lucide-react";

export function AnonBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#99A88C] text-[#FFFFFF] rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-[#99A88C]/20 border border-[#FFFFFF]/10 animate-in fade-in zoom-in duration-500">
      <ShieldCheck size={12} className="text-[#A68A45]" />
      <span>Anonymous Mode Active</span>
    </div>
  );
}
