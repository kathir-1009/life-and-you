import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, AwardFill, PlusCircle } from "react-bootstrap-icons";
import { useState } from "react";

export function CoachCredentialsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-start md:justify-center p-6 pt-12 md:pt-6 pb-32 md:pb-12 text-center">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-[40px] md:rounded-[60px] border border-sage/10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
        <AwardFill size={48} className="text-sage mb-8 mx-auto" />
        <h1 className="text-2xl md:text-3xl font-bold text-sage-dark font-serif mb-2 uppercase tracking-tight">Professional Expertise</h1>
        <p className="text-[10px] text-sage-dark/60 font-black mb-10 uppercase tracking-[0.2em]">Step 2 of 5</p>
        
        <div className="space-y-10 text-left mb-12">
           {/* Section 2: Professional Info */}
           <div className="space-y-6">
              <div className="flex flex-col gap-4">
                 <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">Coaching Categories *</label>
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {['Life Coaching', 'Mental Wellness', 'Relationships', 'Career Pivot', 'NLP Coaching', 'Mindfulness'].map(cat => (
                      <label key={cat} className="flex items-center gap-2 p-3 bg-cream/50 rounded-xl border border-transparent cursor-pointer transition-all has-[:checked]:bg-sage/10 has-[:checked]:border-sage/20">
                         <input type="checkbox" className="w-3.5 h-3.5 accent-sage" />
                         <span className="text-[9px] font-bold text-sage-dark uppercase tracking-tight">{cat}</span>
                      </label>
                    ))}
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <InputGroup label="Years of Experience" type="number" placeholder="0" />
                 <InputGroup label="Languages Spoken" placeholder="e.g. English, Arabic" />
              </div>

              <div className="flex flex-col gap-2">
                 <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">Short Bio (Professional Pitch)</label>
                 <textarea 
                   className="w-full bg-cream border border-transparent rounded-[32px] p-6 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none min-h-[120px]"
                   placeholder="Highlight your expertise and how you help clients..."
                 />
              </div>

              <div className="flex flex-col gap-4">
                 <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">Coaching Styles</label>
                 <div className="flex flex-wrap gap-3">
                    {['1-to-1 Coaching', 'Group Coaching', 'Online Workshops'].map(style => (
                      <label key={style} className="flex items-center gap-2 p-3 bg-cream/50 rounded-xl border border-transparent cursor-pointer transition-all has-[:checked]:bg-sage/10 has-[:checked]:border-sage/20">
                         <input type="checkbox" className="w-3.5 h-3.5 accent-sage" />
                         <span className="text-[9px] font-bold text-sage-dark uppercase tracking-tight">{style}</span>
                      </label>
                    ))}
                 </div>
              </div>
           </div>

           {/* Section 3: Education */}
           <div className="pt-10 border-t border-sage/5 space-y-6">
              <h3 className="text-[10px] font-black text-sage uppercase tracking-[0.3em] mb-4">Certifications & Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <InputGroup label="Highest Qualification" placeholder="e.g. Master's in Psychology" />
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">Are you NLP Certified?</label>
                    <div className="flex gap-4 p-1 bg-cream/50 rounded-full w-fit">
                       <button className="px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest bg-white text-sage shadow-sm">Yes</button>
                       <button className="px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-sage-dark/30">No</button>
                    </div>
                 </div>
                 <InputGroup label="Institution / Organization" placeholder="e.g. ICF, NLP Academy" />
                 <InputGroup label="Key Certifications" placeholder="List your key certifications" />
              </div>

              <div className="flex flex-col gap-4">
                 <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">Upload Certificates</label>
                 <div className="w-full h-24 border-2 border-dashed border-sage/20 rounded-[24px] bg-cream/50 flex items-center justify-center gap-3 cursor-pointer hover:border-sage/40 transition-all text-sage-dark/40">
                    <i className="fa-solid fa-file-pdf text-xl text-sage" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Click to upload accreditation files (PDF/Image)</span>
                 </div>
              </div>
           </div>
        </div>
        
        <div className="flex items-center justify-between gap-6 pt-4 border-t border-sage/5">
          <button onClick={() => navigate(-1)} className="p-4 text-sage-dark/40 hover:text-sage-dark transition-colors">
            <ArrowLeft size={24} />
          </button>
          <Link 
            to="/coach/onboarding/sessions" 
            className="flex-1 py-5 bg-sage text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-[1.02] shadow-xl transition-all flex items-center justify-center gap-3"
          >
            Session Details <ArrowRight size={18} />
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
         className="w-full bg-cream border border-transparent rounded-full px-8 py-4 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none"
       />
    </div>
  );
}
