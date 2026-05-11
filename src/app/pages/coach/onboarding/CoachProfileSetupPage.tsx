import { Link } from "react-router";
import { ArrowLeft, ArrowRight, PersonBadgeFill } from "react-bootstrap-icons";

export function CoachProfileSetupPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-start md:justify-center p-6 pt-12 md:pt-6 pb-32 md:pb-12 text-center">
      <div className="max-w-2xl w-full bg-white p-12 rounded-[60px] border border-sage/10 shadow-sm">
        <PersonBadgeFill size={48} className="text-sage mb-8 mx-auto" />
        <h1 className="text-3xl font-bold text-sage-dark font-serif mb-4 uppercase">Professional Identity</h1>
        <p className="text-sm text-sage-dark/60 font-medium mb-12 uppercase tracking-widest">Step 2 of 4</p>
        
        <div className="space-y-8 text-left mb-12">
           <InputGroup label="Full Legal Name" placeholder="For verification purpose" />
           
           <div className="space-y-4">
              <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">Areas of Expertise</label>
              <div className="grid grid-cols-2 gap-3">
                 {['Anxiety Control', 'Grief Healing', 'Peak Performance', 'Relationships', 'Executive Coaching', 'Self-Confidence'].map(area => (
                   <label key={area} className="flex items-center gap-3 p-4 bg-cream/50 rounded-[20px] border border-transparent hover:border-sage/20 cursor-pointer transition-all has-[:checked]:bg-sage/10 has-[:checked]:border-sage/30">
                      <input type="checkbox" className="w-4 h-4 accent-sage" />
                      <span className="text-[10px] font-bold text-sage-dark uppercase tracking-tight">{area}</span>
                   </label>
                 ))}
              </div>
           </div>

           <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">Short Bio (Public)</label>
              <textarea 
                className="w-full bg-cream border border-transparent rounded-[32px] p-8 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none min-h-[160px]"
                placeholder="Share your coaching philosophy..."
              />
           </div>
        </div>
        
        <div className="flex items-center justify-between gap-6">
          <Link to="/coach/onboarding/welcome" className="p-4 text-sage-dark/40 hover:text-sage-dark transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <Link 
            to="/coach/onboarding/credentials" 
            className="flex-1 py-5 bg-sage text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-[1.02] shadow-xl transition-all flex items-center justify-center gap-3"
          >
            Save & Continue <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="flex flex-col gap-2">
       <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">{label}</label>
       <input 
         type="text" 
         placeholder={placeholder}
         className="w-full bg-cream border border-transparent rounded-full px-8 py-5 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none"
       />
    </div>
  );
}
