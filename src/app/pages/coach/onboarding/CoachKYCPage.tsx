import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, ShieldLockFill, CloudArrowUpFill, CheckCircleFill } from "react-bootstrap-icons";
import { useState } from "react";

export function CoachKYCPage() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<{id: string, name: string}[]>([]);

  const handleUpload = (type: string) => {
    setFiles([...files, { id: type, name: `${type}_proof.pdf` }]);
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-start md:justify-center p-6 pt-12 md:pt-6 pb-32 md:pb-12 text-center">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-[40px] md:rounded-[60px] border border-sage/10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
        <ShieldLockFill size={48} className="text-sage mb-8 mx-auto" />
        <h1 className="text-2xl md:text-3xl font-bold text-sage-dark font-serif mb-2 uppercase tracking-tight">Identity & Legal</h1>
        <p className="text-[10px] text-sage-dark/60 font-black mb-10 uppercase tracking-[0.2em]">Step 4 of 5</p>
        
        <div className="space-y-10 text-left mb-12">
           {/* Section 6: Identity Verification */}
           <div className="space-y-6">
              <p className="text-[10px] font-black text-sage uppercase tracking-[0.3em]">6. Identity Verification</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <UploadBox 
                   title="Govt ID Upload" 
                   description="Aadhar, Passport or Driving License" 
                   isUploaded={files.some(f => f.id === 'id')}
                   onUpload={() => handleUpload('id')}
                 />
                 <UploadBox 
                   title="Selfie with ID" 
                   description="Clear photo holding your Govt ID" 
                   isUploaded={files.some(f => f.id === 'selfie')}
                   onUpload={() => handleUpload('selfie')}
                 />
                 <UploadBox 
                   title="Address Proof" 
                   description="Utility bill or bank statement" 
                   isUploaded={files.some(f => f.id === 'address')}
                   onUpload={() => handleUpload('address')}
                 />
              </div>
           </div>

           {/* Section 8: Banking Details (Optional) */}
           <div className="pt-10 border-t border-sage/5 space-y-6">
              <p className="text-[10px] font-black text-sage uppercase tracking-[0.3em]">8. Banking Details (Optional)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <InputGroup label="Account Holder Name" placeholder="Same as bank records" />
                 <InputGroup label="Bank Name" placeholder="e.g. HDFC, Barclays" />
                 <InputGroup label="Account Number" placeholder="Enter number" />
                 <InputGroup label="IFSC / SWIFT Code" placeholder="e.g. HDFC0001234" />
                 <div className="md:col-span-2">
                    <InputGroup label="UPI ID (Optional)" placeholder="e.g. name@upi" />
                 </div>
              </div>
           </div>

           {/* Section 7: Platform Agreement */}
           <div className="pt-10 border-t border-sage/5 space-y-6">
              <p className="text-[10px] font-black text-sage uppercase tracking-[0.3em]">7. Platform Agreement</p>
              <div className="space-y-4">
                  {[
                    { id: 'info', label: 'I confirm all provided information is correct' },
                    { id: 'policies', label: "I agree to the platform's Professional Policies" },
                    { id: 'confidentiality', label: 'I agree to strict Client Confidentiality rules' }
                  ].map(ag => (
                    <label key={ag.id} className="flex items-center gap-5 p-5 bg-cream/50 rounded-[24px] cursor-pointer transition-all hover:bg-white border border-transparent hover:border-sage/20 group">
                       <div className="relative w-6 h-6 shrink-0">
                          <input type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer z-10" />
                          <div className="absolute inset-0 bg-white border-2 border-sage/20 rounded-lg transition-all peer-checked:bg-sage peer-checked:border-sage flex items-center justify-center">
                             <svg className="w-3.5 h-3.5 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                             </svg>
                          </div>
                       </div>
                       <span className="text-[11px] font-bold text-sage-dark uppercase tracking-wide leading-tight">{ag.label} *</span>
                    </label>
                  ))}
              </div>
           </div>
        </div>
        
        <div className="flex items-center justify-between gap-6 pt-6 border-t border-sage/5">
          <button onClick={() => navigate(-1)} className="p-4 text-sage-dark/40 hover:text-sage-dark transition-colors">
            <ArrowLeft size={24} />
          </button>
          <Link 
            to="/coach/onboarding/complete" 
            className={`flex-1 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 ${
              files.length >= 2 
                ? 'bg-sage-dark text-white hover:scale-[1.02] shadow-xl' 
                : 'bg-sage/10 text-sage-dark/30 cursor-not-allowed border border-sage/5'
            }`}
          >
            Submit Application <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder, type = "text" }: { label: string, placeholder?: string, type?: string }) {
  return (
    <div className="flex flex-col gap-2 text-left">
       <label className="text-[10px] font-black text-sage-dark uppercase tracking-widest ml-4">{label}</label>
       <input 
         type={type} 
         placeholder={placeholder}
         className="w-full bg-cream border border-transparent rounded-full px-8 py-4 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none"
       />
    </div>
  );
}

function UploadBox({ title, description, isUploaded, onUpload }: { title: string, description: string, isUploaded: boolean, onUpload: () => void }) {
  return (
    <div className={`p-6 rounded-[32px] border-2 border-dashed transition-all flex items-center justify-between gap-4 ${
      isUploaded ? 'bg-sage/5 border-sage/30' : 'bg-cream/50 border-sage/10 hover:border-sage/30 cursor-pointer'
    }`} onClick={!isUploaded ? onUpload : undefined}>
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${isUploaded ? 'bg-sage text-white' : 'bg-white text-sage/40 shadow-sm'}`}>
          {isUploaded ? <CheckCircleFill size={20} /> : <CloudArrowUpFill size={24} />}
        </div>
        <div className="text-left">
          <h3 className="text-[10px] font-black text-sage-dark uppercase tracking-tight leading-tight mb-1">{title}</h3>
          <p className="text-[8px] text-sage-dark/50 font-bold uppercase tracking-widest leading-tight">{isUploaded ? 'File uploaded' : description}</p>
        </div>
      </div>
    </div>
  );
}
