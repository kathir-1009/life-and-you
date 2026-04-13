import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { 
  Mic, 
  MicOff, 
  Video as VideoIcon, 
  VideoOff, 
  PhoneOff, 
  MessageCircle, 
  Settings, 
  Users, 
  Maximize2, 
  Shield, 
  MoreHorizontal,
  Hand,
  Clock
} from "lucide-react";
import { useUser } from "../context/UserContext";

export function VideoSessionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { role } = useUser();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTimeElapsed(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-screen bg-[#1A1D14] flex flex-col overflow-hidden relative text-white">
      {/* Cinematic Backdrop (Simulating Video Background) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/img/about/about-01.jpg')] bg-cover bg-center opacity-40 blur-sm scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D14] via-transparent to-[#1A1D14]/80" />
      </div>

      {/* Top Bar */}
      <div className="relative z-20 flex items-center justify-between p-6 md:p-10 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-3">
             <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
             <span className="text-xs font-black uppercase tracking-widest">{formatTime(timeElapsed)}</span>
          </div>
          <div className="bg-[#8B9A71]/20 backdrop-blur-xl border border-[#8B9A71]/30 px-4 py-2 rounded-2xl flex items-center gap-3">
             <Shield size={14} className="text-[#8B9A71]" />
             <span className="text-[10px] font-black uppercase tracking-widest text-[#CED2BA]">Encrypted Session</span>
          </div>
        </div>

        <div className="flex items-center gap-3 pointer-events-auto">
           <button className="w-12 h-12 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all border border-white/5">
              <Users size={20} />
           </button>
           <button className="w-12 h-12 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all border border-white/5">
              <Settings size={20} />
           </button>
        </div>
      </div>

      {/* Main Video Grid */}
      <div className="flex-1 relative z-10 p-6 md:p-10 flex flex-col md:flex-row gap-6">
        {/* Remote Participant (Main View) */}
        <div className="flex-1 relative rounded-[48px] overflow-hidden shadow-2xl border border-white/5 group">
           <img 
             src={role === 'coach' ? "/img/user/user8.jpg" : "/img/about/account-01.jpg"} 
             className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" 
             alt="Participant" 
           />
           <div className="absolute bottom-10 left-10">
              <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                 <h3 className="text-lg font-black">{role === 'coach' ? "Sarah Jenkins" : "Coach Sharma"}</h3>
                 <p className="text-xs font-bold text-white/60 tracking-wide">{role === 'coach' ? "Active Client" : "Lead Guide"}</p>
              </div>
           </div>
           
           <button className="absolute top-10 right-10 w-12 h-12 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 size={20} />
           </button>
        </div>

        {/* Local Participant (Self View) */}
        <div className="w-full md:w-80 h-48 md:h-64 relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-[#2D3324] self-end md:self-auto group">
           <div className={`absolute inset-0 bg-[#2D3324] flex items-center justify-center transition-all ${isVideoOff ? 'opacity-100' : 'opacity-0'}`}>
              <VideoOff size={48} className="text-[#8B9A71] opacity-20" />
           </div>
           {!isVideoOff && (
             <img src="/img/user/anonymous.png" className="w-full h-full object-cover grayscale" alt="Self" />
           )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
           <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-black uppercase tracking-widest">You (Anonymous)</span>
           </div>
        </div>
      </div>

      {/* Control Strip */}
      <div className="relative z-20 pb-12 px-6 flex justify-center">
         <div className="bg-[#2D3324]/80 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-5 flex items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${isMuted ? 'bg-red-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
               {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
            </button>
            <button 
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${isVideoOff ? 'bg-red-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
               {isVideoOff ? <VideoOff size={24} /> : <VideoIcon size={24} />}
            </button>
            
            <div className="w-[1px] h-10 bg-white/10" />
            
            <button className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all">
               <Hand size={24} />
            </button>
            <button 
              onClick={() => setShowChat(!showChat)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${showChat ? 'bg-[#8B9A71] text-[#2D3324]' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
               <MessageCircle size={24} />
            </button>
            
            <div className="w-[1px] h-10 bg-white/10" />

            <button 
              onClick={() => navigate('/app/dashboard')}
              className="w-20 h-14 bg-red-600 text-white rounded-[20px] flex items-center justify-center hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
            >
               <PhoneOff size={28} />
            </button>
         </div>
      </div>

      {/* Floating Side Info */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col gap-4">
          <div className="bg-black/20 backdrop-blur-xl p-6 rounded-[32px] border border-white/5 w-64">
             <div className="flex items-center gap-3 mb-6">
                <Clock size={16} className="text-[#8B9A71]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#CED2BA]">Session Info</span>
             </div>
             <p className="text-sm font-bold text-white/60 mb-1">Standard Intake</p>
             <p className="text-lg font-black text-white mb-4">45 Minutes Residual</p>
             <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#8B9A71] w-2/3" />
             </div>
          </div>
      </div>
    </div>
  );
}
