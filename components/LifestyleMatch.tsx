
import React, { useState } from 'react';
import { getLifestyleMatch } from '../services/geminiService';

const LifestyleMatch: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [form, setForm] = useState({
    sleepTime: '11 PM - 12 AM',
    foodPref: 'Veg',
    workRoutine: '9-5 Office Job',
    cleanliness: 'Extremely Clean'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const match = await getLifestyleMatch(form);
    setResult(match);
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-8">
      <div className="bg-indigo-950 rounded-[3rem] p-12 sm:p-20 text-white relative overflow-hidden mb-12 shadow-2xl border-b-[8px] border-indigo-900">
        <div className="relative z-10">
          <span className="text-[10px] font-black bg-white/10 px-4 py-2 rounded-full uppercase tracking-[0.3em] mb-8 inline-block backdrop-blur-md">AI Intelligence</span>
          <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight leading-[0.9]">Find your <br/><span className="text-indigo-400 italic">Vibe Match™</span></h1>
          <p className="text-indigo-200 max-w-xl text-lg mb-12 font-medium leading-relaxed">
            Living with the wrong people is hard. Our Gemini-powered engine analyzes your personal routine to suggest the perfect environment.
          </p>
          
          {!result && !loading && (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4">
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest opacity-60">Your typical sleep cycle?</label>
                <select 
                  className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 focus:border-indigo-400 outline-none font-bold text-sm transition-all appearance-none"
                  value={form.sleepTime}
                  onChange={(e) => setForm({...form, sleepTime: e.target.value})}
                >
                  <option className="bg-indigo-950">Early Bird (Before 10 PM)</option>
                  <option className="bg-indigo-950">11 PM - 12 AM</option>
                  <option className="bg-indigo-950">Night Owl (After 1 AM)</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest opacity-60">Meal Preferences</label>
                <select 
                  className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 focus:border-indigo-400 outline-none font-bold text-sm transition-all appearance-none"
                  value={form.foodPref}
                  onChange={(e) => setForm({...form, foodPref: e.target.value})}
                >
                  <option className="bg-indigo-950">Strict Veg</option>
                  <option className="bg-indigo-950">Veg + Eggs</option>
                  <option className="bg-indigo-950">Non-Veg (All)</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest opacity-60">Daily Engagement</label>
                <select 
                  className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 focus:border-indigo-400 outline-none font-bold text-sm transition-all appearance-none"
                  value={form.workRoutine}
                  onChange={(e) => setForm({...form, workRoutine: e.target.value})}
                >
                  <option className="bg-indigo-950">9-5 Professional</option>
                  <option className="bg-indigo-950">College / Student</option>
                  <option className="bg-indigo-950">Remote Work (WFH)</option>
                  <option className="bg-indigo-950">Mixed Shifts</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest opacity-60">Environment Hygiene</label>
                <select 
                  className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 focus:border-indigo-400 outline-none font-bold text-sm transition-all appearance-none"
                  value={form.cleanliness}
                  onChange={(e) => setForm({...form, cleanliness: e.target.value})}
                >
                  <option className="bg-indigo-950">Zero Mess Policy</option>
                  <option className="bg-indigo-950">Organized / Manageable</option>
                  <option className="bg-indigo-950">Relaxed Attitude</option>
                </select>
              </div>

              <div className="md:col-span-2 pt-8">
                <button 
                  type="submit"
                  className="w-full bg-white text-indigo-950 font-black py-6 rounded-[2rem] hover:bg-indigo-50 transition-all shadow-2xl shadow-black/40 uppercase tracking-[0.3em] text-xs"
                >
                  Consult AI Engine
                </button>
              </div>
            </form>
          )}

          {loading && (
            <div className="py-24 flex flex-col items-center justify-center space-y-8 animate-in fade-in">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-indigo-400/20 border-t-indigo-400 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-8 h-8 bg-indigo-400 rounded-lg animate-pulse"></div>
                </div>
              </div>
              <p className="text-indigo-200 font-black uppercase tracking-[0.4em] text-[10px] animate-pulse">Analyzing Routine DNA...</p>
            </div>
          )}

          {result && !loading && (
            <div className="bg-white rounded-[3rem] p-10 sm:p-16 text-slate-800 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                <div className="relative w-40 h-40 flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="80" cy="80" r="74" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
                    <circle 
                      cx="80" cy="80" r="74" stroke="currentColor" strokeWidth="12" fill="transparent" 
                      className="text-indigo-600"
                      strokeDasharray={465}
                      strokeDashoffset={465 - (465 * result.score) / 100}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-4xl font-black text-indigo-600 tracking-tighter">{result.score}%</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Synergy</span>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Your Optimal Fit: <span className="text-indigo-600 underline underline-offset-8">{result.sharingSuggestion} Suite</span></h2>
                  <p className="text-slate-500 font-medium leading-relaxed text-lg">{result.summary}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {result.tips.map((tip: string, idx: number) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex gap-4 hover:shadow-lg transition-all group">
                    <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black shrink-0 shadow-lg group-hover:scale-110 transition-transform">{idx + 1}</div>
                    <p className="text-sm text-slate-700 font-bold leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setResult(null)}
                className="mt-12 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 hover:text-indigo-600 transition-all mx-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Reset Parameters
              </button>
            </div>
          )}
        </div>
        
        {/* Advanced Geometric Backgrounds */}
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-pink-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default LifestyleMatch;
