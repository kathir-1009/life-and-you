import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Lock, ShieldCheck, Fingerprint, Key, Eye, EyeOff, AlertTriangle, CheckCircle, ChevronRight, Phone } from "lucide-react";

export function SecurityVaultPage() {
  const navigate = useNavigate();
  const [twoFactor, setTwoFactor] = useState(true);
  const [biometric, setBiometric] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const handlePasswordChange = () => {
    setPasswordChanged(true);
    setTimeout(() => setPasswordChanged(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] pb-32 portal-context animate-in fade-in duration-700">

      {/* ── Header ── */}
      <div className="relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-5 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/10 active:scale-95 transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="bg-[#2D3324] pt-20 pb-24 px-6 rounded-b-[64px] relative overflow-hidden text-center border-t border-white/5 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8B9A71]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-[22px] flex items-center justify-center mb-5 border border-white/10 backdrop-blur-md">
              <Lock size={26} className="text-[#8B9A71]" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight font-serif italic mb-2">Security Vault</h1>
            <p className="text-[#8B9A71] text-[10px] font-black uppercase tracking-[0.35em]">Protect your journey & privacy</p>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-5 -mt-10 relative z-10 space-y-5">

        {/* ── Security Status Banner ── */}
        <div className="bg-white rounded-[28px] p-5 border border-[#8B9A71]/10 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-[#8B9A71]/10 rounded-[16px] flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={24} className="text-[#8B9A71]" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-black text-[#2D3324]">Account Secured</p>
            <p className="text-[9px] text-[#8B9A71] font-black uppercase tracking-widest mt-0.5">Last security scan: 2 hours ago</p>
          </div>
          <div className="w-2.5 h-2.5 bg-[#8B9A71] rounded-full animate-pulse" />
        </div>

        {/* ── Access Key ── */}
        <div className="bg-white rounded-[28px] p-6 border border-[#8B9A71]/10 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2D3324]/8 rounded-[12px] flex items-center justify-center">
              <Key size={18} className="text-[#2D3324]" />
            </div>
            <div>
              <p className="text-[10px] font-black text-[#2D3324] uppercase tracking-widest">Change Access Key</p>
              <p className="text-[9px] text-[#8B9A71] font-black uppercase tracking-widest">Update your login password</p>
            </div>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New password..."
              className="w-full bg-[#F4F7FA] border border-[#8B9A71]/10 rounded-[14px] px-4 py-3.5 text-sm text-[#2D3324] pr-12 outline-none focus:border-[#8B9A71]/30 transition-all font-medium"
            />
            <button onClick={() => setShowPassword(v => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B9A71]">
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <button
            onClick={handlePasswordChange}
            className={`w-full py-3.5 rounded-[14px] text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2
              ${passwordChanged ? "bg-[#8B9A71] text-white" : "bg-[#2D3324] text-white hover:bg-[#8B9A71]"}`}
          >
            {passwordChanged ? <><CheckCircle size={14} /> Password Updated!</> : "Update Access Key"}
          </button>
        </div>

        {/* ── Toggles Card ── */}
        <div className="bg-white rounded-[28px] overflow-hidden border border-[#8B9A71]/10 shadow-sm divide-y divide-[#F4F7FA]">

          {/* Two-Factor */}
          <div className="p-5 flex items-center gap-4">
            <div className={`w-11 h-11 rounded-[13px] flex items-center justify-center transition-all ${twoFactor ? "bg-[#2D3324]" : "bg-[#F4F7FA]"}`}>
              <Phone size={18} className={twoFactor ? "text-[#8B9A71]" : "text-[#8B9A71]/40"} />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-black text-[#2D3324] uppercase tracking-widest">Two-Factor Vault</p>
              <p className="text-[9px] text-[#8B9A71] font-black uppercase tracking-widest mt-0.5">Add an extra auth layer</p>
            </div>
            <button
              onClick={() => setTwoFactor(v => !v)}
              className={`w-12 h-7 rounded-full relative transition-all duration-300 flex-shrink-0 ${twoFactor ? "bg-[#2D3324]" : "bg-[#8B9A71]/20"}`}
            >
              <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-all duration-300 ${twoFactor ? "left-[calc(100%-1.75rem)]" : "left-0.5"}`} />
            </button>
          </div>

          {/* Biometric */}
          <div className="p-5 flex items-center gap-4">
            <div className={`w-11 h-11 rounded-[13px] flex items-center justify-center transition-all ${biometric ? "bg-[#2D3324]" : "bg-[#F4F7FA]"}`}>
              <Fingerprint size={18} className={biometric ? "text-[#8B9A71]" : "text-[#8B9A71]/40"} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-[11px] font-black text-[#2D3324] uppercase tracking-widest">Bio-Metric Lock</p>
                <span className="bg-[#A68A45] text-white text-[7px] px-2 py-0.5 rounded-full font-black">PRO</span>
              </div>
              <p className="text-[9px] text-[#8B9A71] font-black uppercase tracking-widest mt-0.5">Fingerprint or Face ID</p>
            </div>
            <button
              onClick={() => setBiometric(v => !v)}
              className={`w-12 h-7 rounded-full relative transition-all duration-300 flex-shrink-0 ${biometric ? "bg-[#2D3324]" : "bg-[#8B9A71]/20"}`}
            >
              <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-all duration-300 ${biometric ? "left-[calc(100%-1.75rem)]" : "left-0.5"}`} />
            </button>
          </div>

          {/* Active Sessions */}
          <button className="w-full p-5 flex items-center gap-4 hover:bg-[#F4F7FA] transition-all text-left">
            <div className="w-11 h-11 rounded-[13px] flex items-center justify-center bg-[#F4F7FA]">
              <Eye size={18} className="text-[#8B9A71]" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-black text-[#2D3324] uppercase tracking-widest">Active Sessions</p>
              <p className="text-[9px] text-[#8B9A71] font-black uppercase tracking-widest mt-0.5">2 devices currently logged in</p>
            </div>
            <ChevronRight size={16} className="text-[#8B9A71]" />
          </button>
        </div>

        {/* ── Danger Zone ── */}
        <div className="bg-red-50 rounded-[24px] p-5 border border-red-100">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle size={16} className="text-red-400 flex-shrink-0" />
            <p className="text-[9px] font-black text-red-400 uppercase tracking-widest">Danger Zone</p>
          </div>
          <button className="w-full py-3.5 text-[10px] font-black text-red-500 uppercase tracking-widest border border-red-200 rounded-[14px] hover:bg-red-500 hover:text-white transition-all">
            Deactivate Account
          </button>
        </div>

      </div>
    </div>
  );
}
