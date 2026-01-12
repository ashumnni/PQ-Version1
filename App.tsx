
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import PGCard from './components/PGCard';
import LifestyleMatch from './components/LifestyleMatch';
import TenantDashboard from './components/TenantDashboard';
import DigitalAgreement from './components/DigitalAgreement';
import Blog from './components/Blog';
import NexBot from './components/NexBot';
import { MOCK_PGS } from './constants';
import { PG, Booking, PGType } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'home' | 'dashboard' | 'match' | 'details' | 'blog'>('home');
  const [pgs, setPgs] = useState<PG[]>(MOCK_PGS);
  const [selectedPGId, setSelectedPGId] = useState<string | null>(null);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [activeTourUrl, setActiveTourUrl] = useState<string | null>(null);
  const [isTourLoading, setIsTourLoading] = useState(true);
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'info'} | null>(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<PGType | 'All'>('All');
  const [userBookings, setUserBookings] = useState<Booking[]>([]);

  const selectedPG = useMemo(() => pgs.find(p => p.id === selectedPGId) || null, [pgs, selectedPGId]);

  const filteredPGs = useMemo(() => {
    return pgs.filter(pg => {
      const matchesType = filterType === 'All' || pg.type === filterType;
      const matchesSearch = pg.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            pg.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [pgs, filterType, searchQuery]);

  const handlePGSelect = (pg: PG) => {
    setSelectedPGId(pg.id);
    setActiveView('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTour = (url: string) => {
    setActiveTourUrl(url);
    setIsTourOpen(true);
    setIsTourLoading(true);
  };

  const handleReserveBed = (roomId: string) => {
    if (!selectedPGId || !selectedPG) return;
    
    // Find the specific room in the current state
    const room = selectedPG.rooms.find(r => r.id === roomId);
    if (!room) return;

    if (room.availableBeds <= 0) {
      setNotification({ message: `Sorry, this suite is fully booked!`, type: 'info' });
      setTimeout(() => setNotification(null), 3000);
      return;
    }

    // Update Master PGs State to decrement bed count
    setPgs(currentPgs => currentPgs.map(pg => {
      if (pg.id === selectedPGId) {
        return {
          ...pg,
          rooms: pg.rooms.map(r => {
            if (r.id === roomId) {
              return { ...r, availableBeds: r.availableBeds - 1 };
            }
            return r;
          })
        };
      }
      return pg;
    }));

    const newBooking: Booking = {
      id: `booking-${Date.now()}`,
      pgName: selectedPG.name,
      roomType: room.sharingType,
      rent: room.rent,
      date: new Date().toLocaleDateString(),
      status: 'Confirmed'
    };
    
    setUserBookings(prev => [newBooking, ...prev]);
    setNotification({ message: `Successfully reserved a ${room.sharingType} bed at ${selectedPG.name}!`, type: 'success' });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleVisitRequest = () => {
    setNotification({ message: `Visit request sent to ${selectedPG?.ownerName}. They will contact you shortly!`, type: 'success' });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className={`min-h-screen pb-12 relative overflow-x-hidden ${isTourOpen ? 'h-screen overflow-hidden' : ''}`}>
      <Navbar onNavigate={setActiveView} activeView={activeView} />
      <NexBot />

      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: -50, x: '50%', scale: 0.8 }}
            animate={{ opacity: 1, y: 0, x: '50%', scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            className={`fixed top-24 right-1/2 z-[600] translate-x-1/2 px-8 py-4 rounded-3xl shadow-4xl border-2 glass-card flex items-center gap-4 font-black text-xs uppercase tracking-widest ${notification.type === 'success' ? 'border-indigo-500 text-indigo-600' : 'border-amber-500 text-amber-600'}`}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 360 VR MODAL */}
      <AnimatePresence>
        {isTourOpen && activeTourUrl && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[700] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-12"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="w-full h-full bg-black rounded-[3rem] overflow-hidden relative shadow-4xl border border-white/10"
            >
              <div className="absolute top-8 right-8 z-[710] flex items-center gap-4">
                 <button 
                   onClick={() => setIsTourOpen(false)}
                   className="w-14 h-14 bg-white/10 hover:bg-red-600 text-white rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all group"
                 >
                   <svg className="w-6 h-6 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                     <path d="M6 18L18 6M6 6l12 12" />
                   </svg>
                 </button>
              </div>

              {isTourLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 z-[705]">
                   <div className="relative w-24 h-24 mb-8">
                      <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-t-indigo-500 rounded-full animate-spin"></div>
                   </div>
                   <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.5em] animate-pulse">Initializing Virtual World...</p>
                </div>
              )}

              <iframe 
                src={activeTourUrl}
                className="w-full h-full border-none"
                allow="gyroscope; accelerometer; vr"
                onLoad={() => setIsTourLoading(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {activeView === 'home' && (
          <div className="max-w-7xl mx-auto p-4 sm:p-8">
            <header className="mb-24 pt-16 relative text-center flex flex-col items-center">
              <motion.div 
                animate={{ rotateY: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 bg-indigo-600 rounded-[2rem] flex items-center justify-center text-white text-6xl font-black shadow-4xl mb-12 preserve-3d"
              >
                N
              </motion.div>

              <div className="relative z-10 max-w-4xl">
                <motion.span className="bg-indigo-50 text-indigo-600 text-[10px] font-black px-5 py-2.5 rounded-full uppercase tracking-[0.4em] mb-10 inline-block border border-indigo-100 shadow-sm">
                  The Premium Co-Living Network
                </motion.span>
                <motion.h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-10">
                  Redefine Your <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500">Urban Era.</span>
                </motion.h1>
                <div className="w-full sm:w-[600px] relative group mx-auto mb-20">
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Bangalore, Mumbai, Delhi..."
                    className="w-full bg-white border-2 border-slate-100 rounded-[3rem] px-10 py-7 shadow-4xl focus:border-indigo-500 outline-none pr-20 transition-all font-bold text-slate-800 text-lg"
                  />
                </div>
              </div>
            </header>

            <div className="flex flex-col sm:flex-row items-center justify-between mb-16 p-4 rounded-[3rem] bg-white border border-slate-100 shadow-sm gap-4">
              <div className="flex items-center gap-3 overflow-x-auto no-scrollbar px-2">
                {(['All', 'Boys', 'Girls', 'Co-ed'] as const).map(type => (
                   <button 
                     key={type}
                     onClick={() => setFilterType(type)}
                     className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                       filterType === type ? 'bg-slate-900 text-white shadow-2xl' : 'bg-slate-50 text-slate-500'
                     }`}
                   >
                     {type}
                   </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
              {filteredPGs.map((pg, idx) => (
                <PGCard key={pg.id} pg={pg} onSelect={handlePGSelect} onOpenTour={handleOpenTour} />
              ))}
            </div>
          </div>
        )}

        {activeView === 'blog' && <Blog />}
        {activeView === 'match' && <LifestyleMatch />}
        {activeView === 'dashboard' && <TenantDashboard bookings={userBookings} />}

        {activeView === 'details' && selectedPG && (
          <div className="max-w-7xl mx-auto p-4 sm:p-8">
            <button onClick={() => setActiveView('home')} className="flex items-center gap-4 text-slate-400 font-black text-[10px] mb-12 uppercase tracking-[0.3em]">
              <div className="w-10 h-10 rounded-2xl bg-white border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-colors">←</div>
              Marketplace
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-12">
                <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-3xl border-8 border-white group">
                  <img src={selectedPG.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute bottom-10 left-10 flex flex-col sm:flex-row items-start sm:items-end justify-between w-[calc(100%-80px)]">
                     <div className="glass-card px-8 py-6 rounded-3xl border border-white/40 shadow-2xl">
                        <h1 className="text-4xl font-black text-white tracking-tighter mb-2">{selectedPG.name}</h1>
                        <p className="text-white/80 font-bold text-sm">{selectedPG.location}</p>
                     </div>
                  </div>
                </div>

                {/* ADVANCED: QUALITY INDEX SECTION */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                   {[
                     { label: 'Hygiene Score', value: `${selectedPG.hygieneScore}/10`, icon: '✨' },
                     { label: 'Noise Index', value: `${selectedPG.noiseLevel}/10`, icon: '🔇' },
                     { label: 'Safety Rating', value: 'Verified', icon: '🛡️' },
                     { label: 'Reviews', value: `${selectedPG.rating} Stars`, icon: '⭐' }
                   ].map(stat => (
                     <div key={stat.label} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm text-center">
                        <div className="text-2xl mb-2">{stat.icon}</div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-lg font-black text-slate-900">{stat.value}</p>
                     </div>
                   ))}
                </div>

                {/* NEIGHBORHOOD PULSE SECTION */}
                <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl overflow-hidden relative">
                   <h3 className="text-3xl font-black text-slate-800 tracking-tight mb-8">Neighborhood Pulse</h3>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {selectedPG.neighborhood.map((place, i) => (
                        <div key={i} className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-indigo-50 transition-colors cursor-default">
                           <div className="flex items-center justify-between mb-4">
                              <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{place.type}</span>
                              <span className="text-xl">{place.type === 'Library' ? '📚' : place.type === 'Tiffin' ? '🍱' : '🚇'}</span>
                           </div>
                           <h4 className="text-sm font-black text-slate-900 mb-2">{place.name}</h4>
                           <div className="flex items-center gap-3">
                              <span className="text-[10px] font-bold text-slate-400">{place.distance}</span>
                              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                              <span className="text-[10px] font-bold text-emerald-600">{place.walkTime} walk</span>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* DETAILED ROOM SECTION */}
                <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl overflow-hidden relative">
                   <h3 className="text-3xl font-black text-slate-800 tracking-tight mb-8">Available Suites</h3>
                   <div className="grid grid-cols-1 gap-8">
                      {selectedPG.rooms.map(room => (
                         <div key={room.id} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                               <div className="flex-1">
                                  <h4 className="text-2xl font-black text-slate-800 mb-4">{room.sharingType} Shared Suite</h4>
                                  <div className="flex gap-3 mb-8">
                                     {[...Array(room.totalBeds)].map((_, i) => (
                                        <div key={i} className={`w-14 h-8 rounded-xl ${i < room.availableBeds ? 'bg-emerald-500 shadow-xl' : 'bg-slate-200'}`} />
                                     ))}
                                  </div>
                                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                                    {room.availableBeds} beds available of {room.totalBeds} total
                                  </p>
                               </div>
                               <div className="lg:text-right">
                                  <span className="text-4xl font-black text-slate-900 tracking-tighter">₹{room.rent.toLocaleString()}</span>
                                  <span className="text-sm font-bold text-slate-400">/mo</span>
                                  <button 
                                    onClick={() => handleReserveBed(room.id)} 
                                    disabled={room.availableBeds === 0}
                                    className={`w-full lg:w-48 block mt-6 py-4 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl ${
                                      room.availableBeds > 0 
                                      ? 'bg-slate-900 text-white hover:bg-indigo-600' 
                                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                    }`}
                                  >
                                    {room.availableBeds > 0 ? 'Secure This Bed' : 'Fully Booked'}
                                  </button>
                               </div>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-12">
                 {/* Contact Actions */}
                 <div className="bg-indigo-950 p-10 rounded-[3rem] text-white shadow-3xl space-y-8">
                    <h4 className="text-xl font-black uppercase tracking-tight">Direct Connect</h4>
                    <div className="space-y-4">
                       <button onClick={handleVisitRequest} className="w-full py-5 bg-white text-indigo-950 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.3em] hover:bg-indigo-50 transition-all flex items-center justify-center gap-3">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          Request Visit
                       </button>
                       <div className="grid grid-cols-2 gap-4">
                          <a href="tel:+919876543210" className="py-5 bg-white/10 text-white border border-white/20 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                             Call
                          </a>
                          <a href="https://wa.me/919876543210" target="_blank" className="py-5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] hover:bg-emerald-500/30 transition-all flex items-center justify-center gap-2">
                             💬 WhatsApp
                          </a>
                       </div>
                    </div>
                    <p className="text-[10px] font-bold text-indigo-300 text-center uppercase tracking-widest opacity-60">Avg. response time: <span className="text-white">12 mins</span></p>
                 </div>

                 <DigitalAgreement />
                 
                 <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl">
                    <h4 className="text-xl font-black mb-6 uppercase tracking-tight">Owner Transparency</h4>
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-2xl">👨‍💼</div>
                       <div>
                          <p className="text-sm font-black text-slate-900">{selectedPG.ownerName}</p>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{selectedPG.yearsOperating} Years Operating</p>
                       </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                       <p className="text-[9px] font-black uppercase text-indigo-600 mb-1">Current Occupancy</p>
                       <p className="text-lg font-black text-slate-900">{selectedPG.occupancyRate}% Full</p>
                    </div>
                    
                    {/* House Rules functional list */}
                    <div className="mt-8 space-y-3">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">House Guidelines</p>
                       {selectedPG.rules.map((rule, idx) => (
                         <div key={idx} className="flex items-start gap-3 text-xs font-bold text-slate-600">
                            <span className="text-indigo-600">•</span>
                            <span>{rule}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
