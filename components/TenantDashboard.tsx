
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WEEKLY_MENU, MOCK_PGS } from '../constants';
import EnergyTracker from './EnergyTracker';
import CommunityHub from './CommunityHub';
// Removed non-existent UtilityData import from types
import { Booking, ServiceRequest, MoveOutAssistant, Guardian } from '../types';

interface TenantDashboardProps {
  bookings: Booking[];
}

const TenantDashboard: React.FC<TenantDashboardProps> = ({ bookings }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'notices' | 'services' | 'community' | 'guardian' | 'exit' | 'perks'>('overview');
  const [notification, setNotification] = useState<string | null>(null);
  
  const [moveOutData] = useState<MoveOutAssistant>({
    noticeStarted: 'Oct 01, 2024',
    noticeEnds: 'Oct 31, 2024',
    progress: 75,
    checklist: [
      { task: 'Rent for Oct cleared', done: true },
      { task: 'Utility dues settled', done: true },
      { task: 'Room inspection scheduled', done: false },
      { task: 'Keys hand-over', done: false }
    ],
    refundStatus: 'Verifying',
    refundAmount: 25000
  });

  const [guardians] = useState<Guardian[]>([
    { name: 'Dr. Ramesh Kumar', relation: 'Father', phone: '+91 98XXX XXXX', isVerified: true, emergencyAlertsEnabled: true }
  ]);

  const [serviceBookings] = useState<ServiceRequest[]>([
    { id: 's1', type: 'Laundry', status: 'Completed', scheduledDate: 'Oct 20', timeSlot: '10 AM - 12 PM' },
    { id: 's2', type: 'Deep Cleaning', status: 'Pending', scheduledDate: 'Oct 26', timeSlot: '2 PM - 4 PM' }
  ]);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const Widget = ({ title, children, className = "", subtitle = "" }: { title: string, children: React.ReactNode, className?: string, subtitle?: string }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/30 transition-all duration-500 group ${className}`}
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{title}</h3>
          {subtitle && <p className="text-xs font-bold text-slate-800 mt-1">{subtitle}</p>}
        </div>
        <div className="w-2 h-2 rounded-full bg-slate-100 group-hover:bg-indigo-600 transition-colors"></div>
      </div>
      {children}
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-10 relative">
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-24 left-1/2 z-[500] bg-slate-900/90 backdrop-blur-xl text-white px-8 py-4 rounded-3xl text-[10px] font-black uppercase tracking-[0.3em] shadow-4xl border border-white/10"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      <header className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-8">
        <div>
          <h1 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tighter">
            Resident <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Portal.</span>
          </h1>
        </div>

        <div className="flex bg-slate-100/80 backdrop-blur-xl p-1.5 rounded-[2.5rem] border border-slate-200/50 overflow-x-auto no-scrollbar shadow-inner">
          {(['overview', 'notices', 'services', 'community', 'guardian', 'exit', 'perks'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3.5 rounded-[2rem] text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                activeTab === tab ? 'bg-white text-indigo-600 shadow-2xl shadow-indigo-100' : 'text-slate-500 hover:text-indigo-600'
              }`}
            >
              {tab === 'exit' ? 'Move-Out' : tab}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Widget title="NexScore™ Hub" subtitle="Your Resident Reputation">
                   <div className="flex items-center gap-8 py-4">
                      <div className="relative w-32 h-32 flex-shrink-0">
                         <svg className="w-full h-full transform -rotate-90">
                            <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-50" />
                            <motion.circle 
                               initial={{ strokeDashoffset: 365 }}
                               animate={{ strokeDashoffset: 365 - (365 * 88) / 100 }}
                               cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" 
                               className="text-indigo-600"
                               strokeDasharray={365}
                               strokeLinecap="round"
                            />
                         </svg>
                         <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-black text-slate-800 tracking-tighter">88</span>
                            <span className="text-[8px] font-black text-indigo-400 uppercase tracking-widest">/ 100</span>
                         </div>
                      </div>
                      <div className="flex-1">
                         <p className="text-xs font-bold text-slate-500 leading-relaxed mb-4">You are in the top 5% of residents. Exclusive cashback on rent unlocked!</p>
                         <button className="text-[9px] font-black uppercase text-indigo-600 hover:underline">View History →</button>
                      </div>
                   </div>
                </Widget>

                <Widget title="Active Subscriptions" subtitle="Pro Services Tracking">
                   <div className="space-y-4">
                      {serviceBookings.map(s => (
                         <div key={s.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <div>
                               <p className="text-[10px] font-black uppercase text-slate-800">{s.type}</p>
                               <p className="text-[9px] font-bold text-slate-400">{s.scheduledDate} • {s.timeSlot}</p>
                            </div>
                            <span className={`text-[8px] font-black px-3 py-1 rounded-full uppercase ${s.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
                               {s.status}
                            </span>
                         </div>
                      ))}
                   </div>
                </Widget>
              </div>

              {/* ADVANCED ENERGY TRACKER INTEGRATION */}
              <EnergyTracker />
            </div>
          )}

          {activeTab === 'services' && (
            <Widget title="Pro Services Booking" subtitle="Elevate Your Daily Living">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {[
                    { name: 'Laundry Pod', icon: '🧺', price: '₹99/load', time: '90 Min' },
                    { name: 'Deep Clean', icon: '✨', price: '₹499/room', time: '2 Hours' },
                    { name: 'Maintenance', icon: '🛠️', price: 'Free', time: 'Same Day' }
                  ].map(service => (
                    <div key={service.name} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all cursor-pointer group text-center">
                       <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                       <h4 className="text-lg font-black text-slate-900 mb-2">{service.name}</h4>
                       <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-6">{service.price}</p>
                       <button className="w-full py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-indigo-600">Schedule</button>
                    </div>
                  ))}
               </div>
            </Widget>
          )}

          {activeTab === 'guardian' && (
             <div className="space-y-8">
                <Widget title="Guardian Panel" subtitle="Security & Emergency Management">
                   <div className="grid grid-cols-1 gap-6">
                      {guardians.map(g => (
                         <div key={g.name} className="flex flex-col md:flex-row items-center justify-between p-10 bg-indigo-50/50 rounded-[3rem] border border-indigo-100 gap-8">
                            <div className="flex items-center gap-6">
                               <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-3xl shadow-sm">👨‍👩‍👧</div>
                               <div>
                                  <div className="flex items-center gap-3">
                                     <h4 className="text-xl font-black text-slate-900 tracking-tight">{g.name}</h4>
                                     {g.isVerified && <span className="bg-emerald-500 text-white p-1 rounded-full text-[8px]">✔</span>}
                                  </div>
                                  <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest">{g.relation}</p>
                                  <p className="text-xs font-medium text-slate-500 mt-1">{g.phone}</p>
                               </div>
                            </div>
                            <div className="flex items-center gap-4">
                               <div className="flex flex-col text-right mr-4">
                                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Alert Status</span>
                                  <span className="text-xs font-black text-emerald-600 uppercase">Active</span>
                                </div>
                               <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all">Update Access</button>
                            </div>
                         </div>
                      ))}
                   </div>
                </Widget>
             </div>
          )}

          {activeTab === 'exit' && (
            <div className="space-y-10">
               <Widget title="Move-Out Assistant" subtitle="Smooth Transition Management">
                  <div className="flex flex-col md:flex-row items-center gap-12 py-6">
                     <div className="relative w-48 h-48 flex-shrink-0">
                        <svg className="w-full h-full transform -rotate-90">
                           <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="16" fill="transparent" className="text-slate-50" />
                           <motion.circle 
                              initial={{ strokeDashoffset: 502 }}
                              animate={{ strokeDashoffset: 502 - (502 * moveOutData.progress) / 100 }}
                              cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="16" fill="transparent" 
                              className="text-indigo-600"
                              strokeDasharray={502}
                              strokeLinecap="round"
                           />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                           <span className="text-4xl font-black text-slate-800 tracking-tighter">{moveOutData.progress}%</span>
                           <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">Notice Time</span>
                        </div>
                     </div>
                     <div className="flex-1 space-y-6">
                        <div>
                           <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-2">Notice Ends: {moveOutData.noticeEnds}</h4>
                           <p className="text-sm font-medium text-slate-500">Your move-out is perfectly on track for next month.</p>
                        </div>
                     </div>
                  </div>
               </Widget>
            </div>
          )}

          {activeTab === 'community' && <CommunityHub />}

          {activeTab === 'perks' && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Widget title="NexScore Rewards" subtitle="Spend Your Points">
                   <div className="flex flex-col h-full justify-between">
                      <div className="mb-8">
                         <p className="text-5xl font-black text-indigo-600 tracking-tighter">1,250 ⭐</p>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Active NEXCHAKRA Tokens</p>
                      </div>
                      <div className="space-y-4">
                         {[
                           { name: 'Starbucks Vibe Pack', cost: '800 pts', icon: '☕' },
                           { name: 'Cult.fit Access (1mo)', cost: '1200 pts', icon: '🏋️' }
                         ].map(reward => (
                           <div key={reward.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all cursor-pointer">
                              <div className="flex items-center gap-3">
                                 <span className="text-xl">{reward.icon}</span>
                                 <div>
                                    <p className="text-[10px] font-black text-slate-800 uppercase tracking-tight">{reward.name}</p>
                                    <p className="text-[9px] font-bold text-indigo-600 uppercase">{reward.cost}</p>
                                 </div>
                              </div>
                              <button className="px-4 py-2 bg-indigo-600 text-white text-[8px] font-black uppercase rounded-lg">Redeem</button>
                           </div>
                         ))}
                      </div>
                   </div>
                </Widget>

                <Widget title="Referral Program" subtitle="Zero Rent Challenge">
                   <div className="bg-indigo-950 rounded-3xl p-8 text-white h-full relative overflow-hidden">
                      <div className="relative z-10">
                         <h4 className="text-2xl font-black mb-4 leading-tight">Bring a friend. <br/>Save ₹2,000.</h4>
                         <p className="text-indigo-300 text-xs font-medium leading-relaxed mb-8">For every verified resident you refer, you get a flat discount on next month's rent. No caps.</p>
                      </div>
                      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
                   </div>
                </Widget>
             </div>
          )}

        </div>

        {/* SIDEBAR WIDGETS */}
        <div className="lg:col-span-4 space-y-10">
           <Widget title="Quick Intelligence">
              <div className="grid grid-cols-2 gap-4">
                 <button onClick={() => setActiveTab('services')} className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-indigo-600 transition-all flex flex-col items-center gap-4 group">
                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">🧺</span>
                    <span className="text-[9px] font-black uppercase text-slate-500 tracking-tighter">Laundry</span>
                 </button>
                 <button onClick={() => setActiveTab('exit')} className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-indigo-600 transition-all flex flex-col items-center gap-4 group">
                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">📦</span>
                    <span className="text-[9px] font-black uppercase text-slate-500 tracking-tighter">Move-Out</span>
                 </button>
                 <button onClick={() => setActiveTab('perks')} className="p-6 bg-indigo-50 rounded-[2rem] border border-indigo-100 hover:bg-indigo-600 transition-all flex flex-col items-center gap-4 group">
                    <span className="text-3xl group-hover:invert transition-all">🎁</span>
                    <span className="text-[9px] font-black uppercase text-indigo-600 group-hover:text-white tracking-tighter">Perks</span>
                 </button>
                 <button onClick={() => setActiveTab('guardian')} className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-indigo-600 transition-all flex flex-col items-center gap-4 group">
                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">🛡️</span>
                    <span className="text-[9px] font-black uppercase text-slate-500 tracking-tighter">Guardian</span>
                 </button>
              </div>
           </Widget>

           <Widget title="Financial DNA" subtitle="Oct Billing Cycle">
              <div className="space-y-6">
                 <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Due</span>
                    <span className="text-2xl font-black text-slate-900 tracking-tighter">₹18,000</span>
                 </div>
                 <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} className="h-full bg-indigo-600 rounded-full"></motion.div>
                 </div>
              </div>
           </Widget>
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;
