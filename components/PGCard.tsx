
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { PG } from '../types';

interface PGCardProps {
  pg: PG;
  onSelect: (pg: PG) => void;
  onOpenTour?: (url: string) => void;
}

const PGCard: React.FC<PGCardProps> = ({ pg, onSelect, onOpenTour }) => {
  const lowestRent = Math.min(...pg.rooms.map(r => r.rent));
  const availableRoomsCount = pg.rooms.filter(r => r.available).length;
  
  // Enhanced 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [20, -20]);
  const rotateY = useTransform(x, [-100, 100], [-20, 20]);

  function handleMouse(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const handleTourClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (pg.virtualTourUrl && onOpenTour) {
      onOpenTour(pg.virtualTourUrl);
    }
  };

  return (
    <motion.div 
      style={{ rotateX, rotateY, perspective: 1500 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(79,70,229,0.3)] transition-all duration-700 cursor-pointer relative group flex flex-col h-full preserve-3d"
      onClick={() => onSelect(pg)}
    >
      {/* Dynamic Shine Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
      </div>

      <div className="relative h-72 overflow-hidden">
        <img 
          src={pg.images[0]} 
          alt={pg.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        
        {/* Floating Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2 z-10 translate-z-30">
          <motion.span 
            className={`px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl backdrop-blur-xl border border-white/30 ${
              pg.type === 'Boys' ? 'bg-indigo-600/80 text-white' : 
              pg.type === 'Girls' ? 'bg-pink-600/80 text-white' : 
              'bg-slate-900/80 text-white'
            }`}
          >
            {pg.type}
          </motion.span>
        </div>

        {/* Enhanced Rating Badge */}
        <div className="absolute top-6 right-6 glass-card bg-white/95 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-2xl z-10 border border-white/60 translate-z-40 group-hover:scale-110 transition-transform">
           <motion.svg 
             animate={{ scale: [1, 1.2, 1] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="w-4 h-4 text-amber-500 fill-current" 
             viewBox="0 0 20 20"
           >
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
           </motion.svg>
           <span className="text-sm font-black text-slate-900 tracking-tight">{pg.rating}</span>
        </div>

        {/* Enhanced 360 Badge - Pulsing and Animated */}
        {pg.virtualTourUrl && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] z-40 translate-z-50"
            onClick={handleTourClick}
          >
             <div className="relative group/badge">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative bg-slate-900 text-white py-3 px-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.25em] flex items-center justify-center gap-4 shadow-3xl border border-white/10 overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"></div>
                   
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                     className="w-6 h-6 flex items-center justify-center bg-indigo-600 rounded-lg shadow-lg"
                   >
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                       <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                       <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                     </svg>
                   </motion.div>
                   <span className="relative z-10 group-hover:tracking-[0.3em] transition-all">Experience in 360° VR</span>
                </div>
             </div>
          </motion.div>
        )}
      </div>

      <div className="p-10 flex-1 flex flex-col justify-between transform translate-z-30">
        <div>
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-2xl font-black text-slate-900 tracking-tighter leading-none group-hover:text-indigo-600 transition-colors">{pg.name}</h3>
            <div className="bg-emerald-50 text-emerald-600 p-1.5 rounded-lg">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-100">
              {availableRoomsCount} Available Units
            </span>
          </div>

          {/* Room Availability Section */}
          <div className="mb-8 p-5 bg-slate-50/50 rounded-[2rem] border border-slate-100/80 group-hover:bg-white group-hover:border-indigo-100 transition-all">
             <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Room Availability</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
             </div>
             <div className="space-y-3">
                {pg.rooms.slice(0, 2).map((room) => (
                  <div key={room.id} className="flex items-center justify-between">
                     <span className="text-[10px] font-bold text-slate-600">{room.sharingType}</span>
                     <div className="flex gap-1">
                        {[...Array(room.totalBeds)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-4 h-1.5 rounded-full transition-all duration-500 ${
                              i < room.availableBeds ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]' : 'bg-slate-200'
                            }`}
                          />
                        ))}
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <p className="text-xs text-slate-400 font-bold flex items-center gap-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {pg.location}
          </p>

          <div className="flex flex-wrap gap-2.5 mb-8">
            {['Gourmet Mess', '5G Nodes', 'Laundry Pods'].map(tag => (
              <span key={tag} className="text-[9px] font-black text-slate-500 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl uppercase tracking-widest group-hover:bg-white group-hover:border-indigo-200 transition-all">{tag}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-slate-100/80">
          <div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-1 opacity-60">Base Rent</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-4xl font-black text-slate-950 group-hover:text-indigo-600 transition-colors tracking-tighter">₹{lowestRent.toLocaleString()}</span>
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">/mo</span>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.1, x: 5 }}
            className="bg-slate-900 text-white p-5 rounded-2xl shadow-2xl shadow-indigo-200 group-hover:bg-indigo-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PGCard;
