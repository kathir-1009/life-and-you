import { Link } from "react-router";
import { ArrowLeft, ArrowRight, PersonBadgeFill } from "react-bootstrap-icons";

export function CoachProfileSetupPage() {
  return (
    <div className="min-h-screen bg-[#FCF8E8] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl w-full bg-white p-12 rounded-[60px] border border-[#99A88C]/10 shadow-sm">
        <PersonBadgeFill size={48} className="text-[#99A88C] mb-8 mx-auto" />
        <h1 className="text-3xl font-bold text-[#5E6C54] font-serif mb-4 uppercase">Professional Identity</h1>
        <p className="text-sm text-[#5E6C54]/60 font-medium mb-12 uppercase tracking-widest">Step 2 of 4</p>
        
        <div className="space-y-6 text-left mb-12">
           <InputGroup label="Full Legal Name" placeholder="For verification purpose" />
           <InputGroup label="Specialization" placeholder="e.g. NLP, Executive Coaching" />
           <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black text-[#5E6C54] uppercase tracking-widest ml-4">Short Bio (Public)</label>
              <textarea 
                className="w-full bg-[#FCF8E8] border border-transparent rounded-[24px] p-6 text-sm text-[#5E6C54] focus:bg-white focus:border-[#99A88C]/30 transition-all outline-none min-h-[120px]"
                placeholder="Share your coaching philosophy..."
              />
           </div>
        </div>
        
        <div className="flex items-center justify-between gap-6">
          <Link to="/coach/onboarding/welcome" className="p-4 text-[#5E6C54]/40 hover:text-[#5E6C54] transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <Link 
            to="/coach/onboarding/availability" 
            className="flex-1 py-5 bg-[#99A88C] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-[1.02] shadow-xl transition-all flex items-center justify-center gap-3"
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
       <label className="text-[10px] font-black text-[#5E6C54] uppercase tracking-widest ml-4">{label}</label>
       <input 
         type="text" 
         placeholder={placeholder}
         className="w-full bg-[#FCF8E8] border border-transparent rounded-full px-8 py-5 text-sm text-[#5E6C54] focus:bg-white focus:border-[#99A88C]/30 transition-all outline-none"
       />
    </div>
  );
}
