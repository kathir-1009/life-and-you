import { Link } from "react-router";
import { ArrowLeft, ArrowRight, PersonBadgeFill } from "react-bootstrap-icons";

export function CoachProfileSetupPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-start md:justify-center p-6 pt-12 md:pt-6 pb-32 md:pb-12 text-center">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-[40px] md:rounded-[60px] border border-sage/10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
        <PersonBadgeFill size={48} className="text-sage mb-8 mx-auto" />
        <h1 className="text-2xl md:text-3xl font-bold text-sage-dark font-serif mb-4 uppercase tracking-tight">Basic Information</h1>
        <p className="text-[10px] text-sage-dark/60 font-black mb-12 uppercase tracking-[0.2em]">Step 1 of 5</p>
        
        <div className="space-y-8 text-left mb-12">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup label="Full Legal Name *" placeholder="As per Govt. ID" />
              <InputGroup label="Display Name" placeholder="e.g. Coach Sarah" />
              <InputGroup label="Email Address *" placeholder="email@address.com" type="email" />
              <InputGroup label="Phone Number" placeholder="+1 234 567 890" type="tel" />
              
              <div className="flex flex-col gap-2">
                 <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">Gender</label>
                 <select className="w-full bg-cream border border-transparent rounded-full px-8 py-5 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none appearance-none">
                    <option value="" disabled selected>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non-binary</option>
                    <option>Prefer not to say</option>
                 </select>
              </div>

              <InputGroup label="Date of Birth" type="date" />
              <InputGroup label="Country" placeholder="e.g. United Arab Emirates" />
              <InputGroup label="City / Location" placeholder="e.g. Dubai" />
           </div>

           <div className="flex flex-col gap-4">
              <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">Profile Photo</label>
              <div className="w-full h-32 border-2 border-dashed border-sage/20 rounded-[32px] bg-cream/50 flex flex-col items-center justify-center cursor-pointer hover:border-sage/40 transition-all group">
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-sage group-hover:scale-110 transition-transform mb-2">
                    <i className="fa-solid fa-camera" />
                 </div>
                 <span className="text-[10px] font-bold text-sage-dark/40 uppercase tracking-widest">Click to upload professional headshot</span>
              </div>
           </div>
        </div>
        
        <div className="flex items-center justify-between gap-6 pt-6 border-t border-sage/5">
          <Link to="/coach/onboarding/welcome" className="p-4 text-sage-dark/40 hover:text-sage-dark transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <Link 
            to="/coach/onboarding/credentials" 
            className="flex-1 py-5 bg-sage text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-[1.02] shadow-xl transition-all flex items-center justify-center gap-3"
          >
            Professional Details <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder, type = "text" }: { label: string, placeholder?: string, type?: string }) {
  return (
    <div className="flex flex-col gap-2">
       <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">{label}</label>
       <input 
         type={type} 
         placeholder={placeholder}
         className="w-full bg-cream border border-transparent rounded-full px-8 py-5 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none"
       />
    </div>
  );
}
