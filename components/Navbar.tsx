
import React from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'dashboard' | 'match' | 'details' | 'blog') => void;
  activeView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">
            N
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            NEX<span className="text-indigo-600 font-extrabold tracking-widest uppercase">CHAKRA</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button 
            onClick={() => onNavigate('home')}
            className={`hover:text-indigo-600 transition-colors uppercase tracking-widest text-[11px] font-bold ${activeView === 'home' ? 'text-indigo-600' : ''}`}
          >
            Find PG
          </button>
          <button 
            onClick={() => onNavigate('match')}
            className={`hover:text-indigo-600 transition-colors uppercase tracking-widest text-[11px] font-bold ${activeView === 'match' ? 'text-indigo-600' : ''}`}
          >
            Lifestyle Match
          </button>
          <button 
            onClick={() => onNavigate('blog')}
            className={`hover:text-indigo-600 transition-colors uppercase tracking-widest text-[11px] font-bold ${activeView === 'blog' ? 'text-indigo-600' : ''}`}
          >
            NexJournal
          </button>
          <button 
            onClick={() => onNavigate('dashboard')}
            className={`px-6 py-2 bg-slate-800 text-white rounded-full hover:bg-indigo-600 transition-all uppercase tracking-widest text-[11px] font-bold shadow-lg shadow-indigo-100 ${activeView === 'dashboard' ? 'bg-indigo-600' : ''}`}
          >
            My Dashboard
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
           <button onClick={() => onNavigate('match')} className={`p-2 ${activeView === 'match' ? 'text-indigo-600' : 'text-slate-600'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
           </button>
           <button onClick={() => onNavigate('blog')} className={`p-2 ${activeView === 'blog' ? 'text-indigo-600' : 'text-slate-600'}`}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2v4a2 2 0 002 2h4" /></svg>
           </button>
           <button onClick={() => onNavigate('dashboard')} className={`p-2 ${activeView === 'dashboard' ? 'text-indigo-600' : 'text-slate-600'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
           </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
