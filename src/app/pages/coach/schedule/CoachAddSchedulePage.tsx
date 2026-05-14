import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Save, Clock, Calendar, CheckCircleFill, ChevronDown } from "react-bootstrap-icons";

export function CoachAddSchedulePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    startTime: "09:00",
    endTime: "10:00",
    type: "Mental Clarity",
    isRecurring: false,
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => navigate("/coach/schedule"), 1500);
  };

  const inputClass = "w-full bg-[#3D4A2E] border border-white/10 rounded-[18px] px-6 py-4 text-sm text-white placeholder-[#8B9A71]/60 focus:border-[#8B9A71]/50 focus:bg-[#4A5938] transition-all outline-none";
  const iconClass = "absolute left-5 top-1/2 -translate-y-1/2 text-[#8B9A71]";
  const labelClass = "text-[9px] font-black text-[#8B9A71] uppercase tracking-[0.3em] ml-2 block mb-2";

  return (
    <div className="min-h-screen bg-[#2D3324] animate-in fade-in duration-500 pb-32">
      <div className="max-w-2xl mx-auto px-4 pt-6">

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#8B9A71] hover:text-white transition-colors mb-8 text-[11px] font-black uppercase tracking-widest"
        >
          <ChevronLeft size={18} /> Back to Schedule
        </button>

        {/* Card */}
        <div className="bg-[#3A4530]/60 backdrop-blur-xl rounded-[32px] border border-white/10 shadow-2xl p-6 md:p-10">

          {/* Header */}
          <div className="mb-8 text-center">
            <div className="w-14 h-14 bg-[#8B9A71]/15 rounded-[18px] flex items-center justify-center mx-auto mb-4 border border-[#8B9A71]/20">
              <Calendar size={24} className="text-[#8B9A71]" />
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white font-serif uppercase italic tracking-tight mb-2">
              Add Session Slot
            </h1>
            <p className="text-[#8B9A71] text-[10px] font-black uppercase tracking-[0.25em]">
              Open a new mentorship window for your clients.
            </p>
          </div>

          {isSaved ? (
            <div className="py-20 text-center animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-[#8B9A71]/20 rounded-full flex items-center justify-center text-[#8B9A71] mx-auto mb-6 border border-[#8B9A71]/30">
                <CheckCircleFill size={36} />
              </div>
              <h2 className="text-xl font-black text-white font-serif uppercase italic">Slot Created!</h2>
              <p className="text-[#8B9A71] text-[10px] font-black uppercase tracking-widest mt-2">Redirecting to your schedule...</p>
            </div>
          ) : (
            <form onSubmit={handleSave} className="space-y-5">

              {/* Session Date */}
              <div>
                <label className={labelClass}>Session Date</label>
                <div className="relative">
                  <Calendar className={iconClass} size={16} />
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                    className={`${inputClass} pl-12`}
                  />
                </div>
              </div>

              {/* Session Type */}
              <div>
                <label className={labelClass}>Session Type</label>
                <div className="relative">
                  <select
                    value={formData.type}
                    onChange={e => setFormData({...formData, type: e.target.value})}
                    className={`${inputClass} pl-6 pr-12 appearance-none cursor-pointer`}
                  >
                    <option value="Mental Clarity" className="bg-[#2D3324] text-white">Mental Clarity</option>
                    <option value="NLP Deep Dive" className="bg-[#2D3324] text-white">NLP Deep Dive</option>
                    <option value="Executive Focus" className="bg-[#2D3324] text-white">Executive Focus</option>
                    <option value="Stress Management" className="bg-[#2D3324] text-white">Stress Management</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#8B9A71] pointer-events-none" size={16} />
                </div>
              </div>

              {/* Start & End Time Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Start Time</label>
                  <div className="relative">
                    <Clock className={iconClass} size={15} />
                    <input
                      type="time"
                      required
                      value={formData.startTime}
                      onChange={e => setFormData({...formData, startTime: e.target.value})}
                      className={`${inputClass} pl-12`}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>End Time</label>
                  <div className="relative">
                    <Clock className={iconClass} size={15} />
                    <input
                      type="time"
                      required
                      value={formData.endTime}
                      onChange={e => setFormData({...formData, endTime: e.target.value})}
                      className={`${inputClass} pl-12`}
                    />
                  </div>
                </div>
              </div>

              {/* Recurring Toggle */}
              <div
                className="flex items-center gap-4 p-5 bg-[#3D4A2E] rounded-[18px] border border-white/5 cursor-pointer hover:border-[#8B9A71]/30 transition-all"
                onClick={() => setFormData({...formData, isRecurring: !formData.isRecurring})}
              >
                {/* Custom toggle */}
                <div className={`w-12 h-7 rounded-full relative transition-all duration-300 flex-shrink-0 ${formData.isRecurring ? 'bg-[#8B9A71]' : 'bg-white/10'}`}>
                  <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-all duration-300 ${formData.isRecurring ? 'left-[calc(100%-1.75rem)]' : 'left-0.5'}`} />
                </div>
                <label className="text-[10px] font-black text-[#8B9A71] uppercase tracking-widest cursor-pointer select-none">
                  Repeat this slot weekly
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-5 bg-[#8B9A71] text-white rounded-[18px] font-black text-xs uppercase tracking-[0.25em] shadow-xl hover:bg-white hover:text-[#2D3324] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-2"
              >
                <Save size={18} /> Finalize Slot
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
