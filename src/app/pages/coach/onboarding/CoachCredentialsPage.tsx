import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, AwardFill, PlusCircle } from "react-bootstrap-icons";
import { useState } from "react";

export function CoachCredentialsPage() {
  const navigate = useNavigate();
  const [certs, setCerts] = useState([{ id: 1, name: "", issuer: "" }]);

  const addCert = () => {
    setCerts([...certs, { id: Date.now(), name: "", issuer: "" }]);
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-start md:justify-center p-6 pt-12 md:pt-6 pb-32 md:pb-12 text-center">
      <div className="max-w-2xl w-full bg-white p-8 md:p-12 rounded-[40px] md:rounded-[60px] border border-sage/10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
        <AwardFill size={48} className="text-sage mb-8 mx-auto" />
        <h1 className="text-2xl md:text-3xl font-bold text-sage-dark font-serif mb-2 uppercase tracking-tight">Professional Credentials</h1>
        <p className="text-[10px] text-sage-dark/60 font-black mb-10 uppercase tracking-[0.2em]">Step 3 of 4</p>
        
        <div className="space-y-8 text-left mb-12">
           <div className="space-y-4">
              <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">Total Years of Experience</label>
              <select className="w-full bg-cream border border-transparent rounded-full px-8 py-5 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none appearance-none">
                <option>1-3 Years</option>
                <option>3-5 Years</option>
                <option>5-10 Years</option>
                <option>10+ Years</option>
              </select>
           </div>

           <div className="space-y-6">
              <div className="flex items-center justify-between px-4">
                <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest">Certifications</label>
                <button onClick={addCert} className="text-sage hover:text-sage-dark transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                  <PlusCircle /> Add More
                </button>
              </div>

              {certs.map((cert, index) => (
                <div key={cert.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-left-2 duration-300">
                  <input 
                    type="text" 
                    placeholder="Certification Name"
                    className="w-full bg-cream border border-transparent rounded-full px-8 py-4 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none"
                  />
                  <input 
                    type="text" 
                    placeholder="Issuing Body (e.g. ICF)"
                    className="w-full bg-cream border border-transparent rounded-full px-8 py-4 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none"
                  />
                </div>
              ))}
           </div>
        </div>
        
        <div className="flex items-center justify-between gap-6 pt-4 border-t border-sage/5">
          <button onClick={() => navigate(-1)} className="p-4 text-sage-dark/40 hover:text-sage-dark transition-colors">
            <ArrowLeft size={24} />
          </button>
          <Link 
            to="/coach/onboarding/kyc" 
            className="flex-1 py-5 bg-sage text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-[1.02] shadow-xl transition-all flex items-center justify-center gap-3"
          >
            Verify Identity <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
