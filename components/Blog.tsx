
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_BLOGS } from '../constants';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = new Set(MOCK_BLOGS.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return MOCK_BLOGS;
    return MOCK_BLOGS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const spotlights = filteredPosts.filter(p => p.isSpotlight);
  const regularPosts = filteredPosts.filter(p => !p.isSpotlight);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8">
      <header className="mb-24 text-center space-y-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block bg-indigo-50 text-indigo-600 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] border border-indigo-100 shadow-sm"
        >
          NEXJOURNAL 2.0
        </motion.div>
        <h1 className="text-6xl sm:text-8xl font-black text-slate-900 tracking-tighter leading-none pt-4">
          Urban Life <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500">Unfiltered.</span>
        </h1>
      </header>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
              activeCategory === cat 
                ? 'bg-slate-900 text-white shadow-xl' 
                : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {/* Spotlight Section */}
          {spotlights.length > 0 && (
            <section className="mb-32">
              <div className="flex items-center justify-between mb-12">
                 <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Featured Spotlight</h2>
                 <div className="h-px bg-slate-100 flex-1 ml-10"></div>
              </div>
              {spotlights.map(post => (
                <motion.div 
                  key={post.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-[4rem] p-12 border border-slate-100 shadow-xl group cursor-pointer hover:shadow-2xl transition-all duration-700"
                >
                  <div className="relative h-[400px] rounded-[3rem] overflow-hidden">
                    <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" alt={post.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                  </div>
                  <div className="flex flex-col justify-center">
                     <span className="text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-6 block">{post.category}</span>
                     <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-8 group-hover:text-indigo-600 transition-colors">
                       {post.title}
                     </h3>
                     <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 line-clamp-3">
                       {post.excerpt}
                     </p>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-xl font-black border border-slate-200">
                          {post.author[0]}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-800 tracking-tight">{post.author}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.date} • {post.readTime}</p>
                        </div>
                     </div>
                  </div>
                </motion.div>
              ))}
            </section>
          )}

          {/* Regular Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
            {regularPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-[3rem] overflow-hidden mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={post.title} />
                  <div className="absolute top-8 left-8">
                    <span className="bg-white/95 backdrop-blur-md px-5 py-2 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] text-slate-800 border border-white/50 shadow-xl">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="px-4">
                  <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">
                    <span>{post.date}</span>
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>{post.readTime} Read</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-tight mb-6 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 font-medium line-clamp-2 leading-relaxed mb-8">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                    <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center font-black text-[10px]">
                      {post.author[0]}
                    </div>
                    <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">{post.author}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Newsletter Section */}
      <div className="mt-24 p-20 bg-slate-950 rounded-[5rem] text-white text-center relative overflow-hidden border border-white/5">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h4 className="text-5xl font-black mb-8 tracking-tight">Stay Ahead <br/> <span className="text-indigo-500">of the Curve.</span></h4>
          <p className="text-slate-400 mb-12 text-lg font-medium leading-relaxed">Join 5,000+ residents getting weekly insights on city living, finance hacks, and student perks.</p>
          <div className="flex flex-col sm:flex-row gap-4">
             <input type="email" placeholder="Your nomadic email..." className="flex-1 bg-white/5 border border-white/10 rounded-[2rem] px-8 py-6 focus:bg-white/10 outline-none transition-all text-sm font-medium" />
             <button className="bg-indigo-600 px-12 py-6 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.3em] hover:bg-indigo-700 transition-all shadow-2xl">Initialize Subscription</button>
          </div>
        </div>
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};

export default Blog;
