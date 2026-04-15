interface ProgressBarProps {
  label: string;
  progress: number; // 0 to 100
  showValue?: boolean;
}

export function ProgressBar({ label, progress, showValue = true }: ProgressBarProps) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-black text-[#1C2320]/70 uppercase tracking-widest">{label}</span>
        {showValue && <span className="text-xs font-bold text-[#3D5247]">{progress}%</span>}
      </div>
      <div className="h-2 w-full bg-[#EDF2EE] rounded-full overflow-hidden border border-[#3D5247]/5">
        <div 
          className="h-full bg-gradient-to-r from-[#3D5247] to-[#5A7265] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
