import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, ShieldLockFill, CloudArrowUpFill, CheckCircleFill } from "react-bootstrap-icons";
import { useState } from "react";

export function CoachKYCPage() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<{id: string, name: string}[]>([]);

  const handleUpload = (type: string) => {
    // Mock upload
    setFiles([...files, { id: type, name: `${type}_proof.pdf` }]);
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-start md:justify-center p-6 pt-12 md:pt-6 pb-32 md:pb-12 text-center">
      <div className="max-w-2xl w-full bg-white p-8 md:p-12 rounded-[40px] md:rounded-[60px] border border-sage/10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
        <ShieldLockFill size={48} className="text-sage mb-8 mx-auto" />
        <h1 className="text-2xl md:text-3xl font-bold text-sage-dark font-serif mb-2 uppercase tracking-tight">Identity Verification</h1>
        <p className="text-[10px] text-sage-dark/60 font-black mb-10 uppercase tracking-[0.2em]">Step 4 of 4</p>
        
        <div className="space-y-6 text-left mb-12">
           <p className="text-xs text-sage-dark/60 font-medium mb-6">
             To maintain the integrity of our sanctuary, we require official documentation for all mentors.
           </p>

           <div className="grid grid-cols-1 gap-4">
              <UploadBox 
                title="Passport or National ID" 
                description="Upload a clear scan of your official ID" 
                isUploaded={files.some(f => f.id === 'id')}
                onUpload={() => handleUpload('id')}
              />
              <UploadBox 
                title="Professional License" 
                description="Upload your ICF or relevant coaching license" 
                isUploaded={files.some(f => f.id === 'license')}
                onUpload={() => handleUpload('license')}
              />
              <UploadBox 
                title="Background Check (Optional)" 
                description="Recent clearance certificate if available" 
                isUploaded={files.some(f => f.id === 'bg')}
                onUpload={() => handleUpload('bg')}
              />
           <div className="pt-8 border-t border-sage/10 space-y-4">
              <label className="flex items-start gap-4 p-5 bg-cream/50 rounded-[24px] cursor-pointer transition-all hover:bg-white group">
                 <input type="checkbox" className="mt-1 w-4 h-4 accent-sage shrink-0" />
                 <div className="text-left">
                    <p className="text-[10px] font-black text-sage-dark uppercase tracking-widest leading-tight">I agree to the Terms of Service & Privacy Policy</p>
                    <p className="text-[8px] font-bold text-sage-dark/40 uppercase mt-1">Read the mentor agreement and platform standards</p>
                 </div>
              </label>
              
              <label className="flex items-start gap-4 p-5 bg-cream/50 rounded-[24px] cursor-pointer transition-all hover:bg-white group">
                 <input type="checkbox" className="mt-1 w-4 h-4 accent-sage shrink-0" />
                 <div className="text-left">
                    <p className="text-[10px] font-black text-sage-dark uppercase tracking-widest leading-tight">Professional Code of Conduct</p>
                    <p className="text-[8px] font-bold text-sage-dark/40 uppercase mt-1">I certify that all provided documentation is authentic</p>
                 </div>
              </label>
           </div>
        </div>
        
        <div className="flex items-center justify-between gap-6 pt-4 border-t border-sage/5">
          <button onClick={() => navigate(-1)} className="p-4 text-sage-dark/40 hover:text-sage-dark transition-colors">
            <ArrowLeft size={24} />
          </button>
          <Link 
            to="/coach/onboarding/complete" 
            className={`flex-1 py-5 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
              files.length >= 2 
                ? 'bg-sage-dark text-white hover:scale-[1.02] shadow-xl' 
                : 'bg-sage-dark/20 text-white cursor-not-allowed'
            }`}
          >
            Submit Application <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function UploadBox({ title, description, isUploaded, onUpload }: { title: string, description: string, isUploaded: boolean, onUpload: () => void }) {
  return (
    <div className={`p-6 rounded-[32px] border-2 border-dashed transition-all flex items-center justify-between gap-4 ${
      isUploaded ? 'bg-sage/5 border-sage/30' : 'bg-cream/50 border-sage/10 hover:border-sage/30 cursor-pointer'
    }`} onClick={!isUploaded ? onUpload : undefined}>
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isUploaded ? 'bg-sage text-white' : 'bg-white text-sage/40 shadow-sm'}`}>
          {isUploaded ? <CheckCircleFill size={20} /> : <CloudArrowUpFill size={24} />}
        </div>
        <div className="text-left">
          <h3 className="text-xs font-black text-sage-dark uppercase tracking-tight">{title}</h3>
          <p className="text-[10px] text-sage-dark/50 font-bold uppercase tracking-widest">{isUploaded ? 'File uploaded successfully' : description}</p>
        </div>
      </div>
      {!isUploaded && (
        <button className="text-[10px] font-black text-sage uppercase tracking-widest px-4 py-2 bg-white rounded-xl shadow-sm border border-sage/10">
          Upload
        </button>
      )}
    </div>
  );
}
