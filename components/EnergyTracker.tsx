
import React from 'react';
import { motion } from 'framer-motion';

const EnergyTracker: React.FC = () => {
  const usageData = [2, 4, 3.5, 5, 4.5, 6, 4];
  const maxUsage = Math.max(...usageData);

  return (
    <div className="bg-slate-950 rounded-[2.5rem] p-10 text-white relative overflow-hidden border border-white/10 shadow-2xl">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-2">NexEnergy™ AI</h4>
            <p className="text-2xl font-black tracking-tight">Consumption Map</p>
          </div>
          <div className="text-right">
             <span className="text-3xl font-black text-emerald-400">₹935</span>
             <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Oct Est. Cost</p>
          </div>
        </div>

        {/* Chart Visualization */}
        <div className="flex items-end justify-between h-48 gap-3 mb-10">
          {usageData.map((usage, i) => (
            <div key={i} className="flex-1 flex flex-col items-center group">
               <motion.div 
                 initial={{ height: 0 }}
                 animate={{ height: `${(usage / maxUsage) * 100}%` }}
                 transition={{ delay: i * 0.1, duration: 1 }}
                 className="w-full rounded-t-xl bg-gradient-to-t from-indigo-600 to-indigo-400 relative"
               >
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-black bg-white text-slate-950 px-2 py-1 rounded-md">
                   {usage}kW
                 </div>
               </motion.div>
               <span className="text-[8px] font-bold text-slate-500 mt-4 uppercase tracking-widest">Day {i + 1}</span>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-xl">💡</div>
              <div>
                 <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-1">AI Recommendation</p>
                 <p className="text-xs font-medium text-slate-300 leading-relaxed">Turn off your heavy appliances between 6 PM - 9 PM to save an estimated ₹320 this month.</p>
              </div>
           </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[120px] opacity-10"></div>
    </div>
  );
};

export default EnergyTracker;
