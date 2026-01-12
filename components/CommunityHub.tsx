
import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_COMMUNITY } from '../constants';

const CommunityHub: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5">
      <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg">N</div>
           <div>
              <h3 className="text-xl font-black text-slate-800 tracking-tight">NexConnect™</h3>
              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Resident-Only Network</p>
           </div>
        </div>
        
        <div className="relative">
          <textarea 
            placeholder="Share an update, find a gym buddy, or sell an item..."
            className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2rem] p-6 focus:border-indigo-500 outline-none transition-all h-32 font-medium text-slate-700"
          ></textarea>
          <div className="absolute bottom-4 right-4 flex gap-3">
             <button className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:bg-indigo-50 transition-all">📷</button>
             <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all">Post</button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {MOCK_COMMUNITY.map((post, idx) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden ${post.type === 'Announcement' ? 'border-l-8 border-l-indigo-600' : ''}`}
          >
            <div className="flex items-center justify-between mb-6">
               <div className="flex items-center gap-4">
                  <img src={post.avatar} className="w-10 h-10 rounded-xl shadow-md" alt={post.user} />
                  <div>
                    <h4 className="font-black text-slate-800">{post.user}</h4>
                    <p className="text-[10px] font-bold text-slate-400">{post.timestamp}</p>
                  </div>
               </div>
               <span className={`px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                 post.type === 'Announcement' ? 'bg-indigo-100 text-indigo-600' : 
                 post.type === 'Marketplace' ? 'bg-emerald-100 text-emerald-600' : 
                 'bg-slate-100 text-slate-500'
               }`}>
                 {post.type}
               </span>
            </div>
            <p className="text-slate-700 font-medium leading-relaxed mb-6">
              {post.content}
            </p>
            <div className="flex items-center gap-6">
               <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase hover:text-pink-500 transition-colors">
                 <span>❤️</span> {post.likes}
               </button>
               <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase hover:text-indigo-600 transition-colors">
                 <span>💬</span> Reply
               </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommunityHub;
