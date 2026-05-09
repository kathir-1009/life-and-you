import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Save, Clock, Calendar, CheckCircleFill } from "react-bootstrap-icons";

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
    setTimeout(() => {
      navigate("/coach/schedule");
    }, 1500);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 px-4 md:px-0 portal-context pb-32">
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sage-dark hover:text-sage transition-colors mb-6 md:mb-8 text-[11px] md:text-xs font-black uppercase tracking-widest"
        >
          <ChevronLeft className="stroke-[3px]" /> Back to Schedule
        </button>

        <div className="bg-white rounded-[32px] md:rounded-[48px] border border-sage/10 shadow-xl p-6 md:p-12">
          <div className="mb-6 md:mb-10 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-sage-dark font-serif mb-2 uppercase tracking-tight">Add Session Slot</h1>
            <p className="text-sage-dark/60 text-[10px] md:text-[11px] font-bold uppercase tracking-widest leading-relaxed">Open a new mentorship window for your clients.</p>
          </div>

          {isSaved ? (
            <div className="py-20 text-center animate-in zoom-in duration-500">
               <div className="w-16 h-16 md:w-20 md:h-20 bg-sage rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-sage/20">
                  <CheckCircleFill size={32} />
               </div>
               <h2 className="text-xl md:text-2xl font-bold text-sage-dark font-serif uppercase">Slot Created!</h2>
               <p className="text-sage-dark/60 text-[10px] md:text-[11px] font-bold uppercase tracking-widest mt-2">Redirecting to your schedule...</p>
            </div>
          ) : (
            <form onSubmit={handleSave} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black text-sage-dark uppercase tracking-[0.2em] ml-4">Session Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-sage" size={16} />
                    <input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-cream border border-transparent rounded-[20px] md:rounded-[24px] pl-14 pr-6 py-4 md:py-5 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black text-sage-dark uppercase tracking-[0.2em] ml-4">Session Type</label>
                  <select 
                    value={formData.type}
                    onChange={e => setFormData({...formData, type: e.target.value})}
                    className="w-full bg-cream border border-transparent rounded-[20px] md:rounded-[24px] px-6 md:px-8 py-4 md:py-5 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none appearance-none"
                  >
                    <option>Mental Clarity</option>
                    <option>NLP Deep Dive</option>
                    <option>Executive Focus</option>
                    <option>Stress Management</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black text-sage-dark uppercase tracking-[0.2em] ml-4">Start Time</label>
                  <div className="relative">
                    <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-sage" size={16} />
                    <input 
                      type="time" 
                      required
                      value={formData.startTime}
                      onChange={e => setFormData({...formData, startTime: e.target.value})}
                      className="w-full bg-cream border border-transparent rounded-[20px] md:rounded-[24px] pl-14 pr-6 py-4 md:py-5 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black text-sage-dark uppercase tracking-[0.2em] ml-4">End Time</label>
                  <div className="relative">
                    <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-sage" size={16} />
                    <input 
                      type="time" 
                      required
                      value={formData.endTime}
                      onChange={e => setFormData({...formData, endTime: e.target.value})}
                      className="w-full bg-cream border border-transparent rounded-[20px] md:rounded-[24px] pl-14 pr-6 py-4 md:py-5 text-sm text-sage-dark focus:bg-white focus:border-sage/30 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 md:p-6 bg-cream rounded-[20px] md:rounded-[24px] border border-sage/5">
                <input 
                  type="checkbox" 
                  id="recurring"
                  checked={formData.isRecurring}
                  onChange={e => setFormData({...formData, isRecurring: e.target.checked})}
                  className="w-4 h-4 md:w-5 md:h-5 rounded border-sage/20 text-sage focus:ring-sage"
                />
                <label htmlFor="recurring" className="text-[10px] md:text-[11px] font-bold text-sage-dark uppercase tracking-widest cursor-pointer">
                  Repeat this slot weekly
                </label>
              </div>

              <button 
                type="submit"
                className="w-full py-5 md:py-6 bg-sage-dark text-white rounded-[20px] md:rounded-[24px] font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-xl shadow-sage-dark/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4"
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
