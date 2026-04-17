interface ProgressBarProps {
  label: string;
  progress: number; // 0 to 100
  showValue?: boolean;
}

export function ProgressBar({ label, progress, showValue = true }: ProgressBarProps) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-black text-sage-dark/70 uppercase tracking-widest">{label}</span>
        {showValue && <span className="text-xs font-bold text-sage-dark">{progress}%</span>}
      </div>
      <div className="h-2 w-full bg-sage-light rounded-full overflow-hidden border border-sage/5">
        <div 
          className="h-full bg-gradient-to-r from-sage to-[#5A7265] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
