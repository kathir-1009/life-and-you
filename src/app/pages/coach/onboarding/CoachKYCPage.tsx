import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { ShieldCheck, Upload, CheckCircle } from "lucide-react";
import { useState } from "react";

export function CoachKYCPage() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<{id: string, name: string}[]>([]);

  const handleUpload = (type: string) => {
    setFiles([...files, { id: type, name: `${type}_proof.pdf` }]);
  };

  return (
    <div className="min-h-screen bg-[#2D3324] flex flex-col items-center justify-start md:justify-center p-6 pt-12 md:pt-6 pb-32 md:pb-12 text-center relative overflow-hidden">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B9A71] rounded-full blur-[80px] opacity-20 pointer-events-none will-change-transform" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4E5540] rounded-full blur-[100px] opacity-25 pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#2D3324_100%)] opacity-60 pointer-events-none will-change-transform" />

      <div className="max-w-3xl w-full bg-white p-8 md:p-14 pb-16 md:pb-24 rounded-[48px] md:rounded-[64px] shadow-[0_32px_64px_rgba(0,0,0,0.3)] animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10 border border-white/20">
        <div className="w-16 h-16 bg-[#2D3324] rounded-2xl flex items-center justify-center text-white mb-8 mx-auto shadow-xl">
           <ShieldCheck size={32} />
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#2D3324] font-serif mb-2 uppercase tracking-tight">Identity & Legal</h1>
        <p className="text-[10px] text-[#8B9A71] font-black mb-12 uppercase tracking-[0.4em]">Phase 4: Trust & Verification</p>
        
        <div className="space-y-12 text-left mb-16">
           {/* Section 6: Identity Verification */}
           <div className="space-y-8">
              <p className="text-[10px] font-black text-[#8B9A71] uppercase tracking-[0.4em]">6. Identity Verification</p>
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
           <div className="pt-12 border-t border-[#2D3324]/5 space-y-8">
              <p className="text-[10px] font-black text-[#8B9A71] uppercase tracking-[0.4em]">8. Banking Details (Optional)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
           <div className="pt-12 border-t border-[#2D3324]/5 space-y-8">
              <p className="text-[10px] font-black text-[#8B9A71] uppercase tracking-[0.4em]">7. Platform Agreement</p>
              <div className="space-y-4">
                  {[
                    { id: 'info', label: 'I confirm all provided information is correct' },
                    { id: 'policies', label: "I agree to the platform's Professional Policies" },
                    { id: 'confidentiality', label: 'I agree to strict Client Confidentiality rules' }
                  ].map(ag => (
                    <label key={ag.id} className="flex items-center gap-6 p-6 bg-[#F3F5F0] rounded-[32px] cursor-pointer transition-all hover:bg-white border border-[#8B9A71]/20 hover:border-[#8B9A71]/40 group">
                       <div className="relative w-6 h-6 shrink-0">
                          <input type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer z-10" />
                          <div className="absolute inset-0 bg-white border-2 border-[#8B9A71]/20 rounded-xl transition-all peer-checked:bg-[#2D3324] peer-checked:border-[#2D3324] flex items-center justify-center">
                             <svg className="w-4 h-4 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                             </svg>
                          </div>
                       </div>
                       <span className="text-[11px] font-black text-[#2D3324] uppercase tracking-wide opacity-70 group-hover:opacity-100">{ag.label} *</span>
                    </label>
                  ))}
              </div>
           </div>
        </div>
        
        <div className="flex items-center justify-between gap-6 pt-10 border-t border-[#2D3324]/5">
          <button onClick={() => navigate(-1)} className="w-14 h-14 bg-[#F3F5F0] rounded-2xl flex items-center justify-center text-[#2D3324]/40 hover:text-[#2D3324] hover:bg-white transition-all border border-[#8B9A71]/20">
            <ArrowLeft size={24} />
          </button>
          <Link 
            to="/coach/onboarding/complete" 
            className={`flex-1 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 ${
              files.length >= 2 
                ? 'bg-[#2D3324] text-white hover:scale-[1.02] hover:bg-[#1a1d14] shadow-2xl' 
                : 'bg-[#2D3324]/5 text-[#2D3324]/20 cursor-not-allowed border border-[#8B9A71]/20'
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
    <div className="flex flex-col gap-3 text-left">
       <label className="text-[10px] font-black text-[#2D3324]/40 uppercase tracking-[0.2em] ml-6">{label}</label>
       <input 
         type={type} 
         placeholder={placeholder}
         className="w-full bg-[#F3F5F0] border border-[#8B9A71]/20 rounded-2xl px-8 py-5 text-sm text-[#2D3324] focus:bg-white focus:border-[#8B9A71]/30 transition-all outline-none placeholder:text-[#2D3324]/20"
       />
    </div>
  );
}

function UploadBox({ title, description, isUploaded, onUpload }: { title: string, description: string, isUploaded: boolean, onUpload: () => void }) {
  return (
    <div className={`p-6 rounded-[32px] border-2 border-dashed transition-all flex items-center justify-between gap-4 ${
      isUploaded ? 'bg-[#8B9A71]/20 border-[#8B9A71]/40' : 'bg-[#F3F5F0] border-[#8B9A71]/20 hover:border-[#8B9A71]/40 cursor-pointer'
    }`} onClick={!isUploaded ? onUpload : undefined}>
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${isUploaded ? 'bg-[#2D3324] text-white' : 'bg-[#2D3324]/5 text-[#2D3324]/40 shadow-sm'}`}>
          {isUploaded ? <CheckCircle size={20} /> : <Upload size={24} />}
        </div>
        <div className="text-left">
          <h3 className="text-[10px] font-black text-[#2D3324] uppercase tracking-tight leading-tight mb-1 opacity-80">{title}</h3>
          <p className="text-[8px] text-[#2D3324]/40 font-bold uppercase tracking-widest leading-tight">{isUploaded ? 'File uploaded' : description}</p>
        </div>
      </div>
    </div>
  );
}
