import { TrendingUp, TrendingDown } from "lucide-react";

interface StatTileProps {
  label: string;
  value: string | number;
  delta?: {
    value: string;
    isPositive: boolean;
  };
  icon?: any;
}

export function StatTile({ label, value, delta, icon: Icon }: StatTileProps) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-[24px] border border-[#3D5247]/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      {/* Decorative background element */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#3D5247]/5 rounded-full blur-2xl group-hover:bg-[#3D5247]/10 transition-colors" />
      
      <div className="flex items-start justify-between relative z-10 mb-4">
        <span className="text-[10px] font-black text-[#1C2320]/70 uppercase tracking-[0.2em]">{label}</span>
        {Icon && (
          <div className="p-2 bg-[#F5EFE6] rounded-xl text-[#3D5247]">
            <Icon size={18} />
          </div>
        )}
      </div>
      
      <div className="flex items-end gap-3 relative z-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#3D5247] leading-none">{value}</h3>
        {delta && (
          <div className={`flex items-center gap-0.5 px-2 py-0.5 rounded-lg text-[10px] font-bold ${
            delta.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {delta.isPositive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
            {delta.value}
          </div>
        )}
      </div>
    </div>
  );
}
