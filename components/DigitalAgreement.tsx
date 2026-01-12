
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DigitalAgreement: React.FC = () => {
  const [agreementFile, setAgreementFile] = useState<string | null>(null);
  const [status, setStatus] = useState<'not_signed' | 'pending' | 'verified'>('not_signed');

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAgreementFile(e.target.files[0].name);
      setStatus('pending');
      // Simulated upload delay
      setTimeout(() => {
        alert("Agreement uploaded successfully! Our team will verify it shortly.");
      }, 500);
    }
  };

  const downloadTemplate = () => {
    // Simulated template download logic
    alert("Preparing your Nexchakra Smart Rental Agreement template...");
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '#'; // In a real app, this would be a link to a static asset
      link.download = 'Nexchakra_Standard_Rental_Agreement.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden relative group"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h4 className="text-xl font-black text-slate-900 tracking-tight uppercase leading-none">Agreement Hub</h4>
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mt-1">Digital Paperwork</p>
        </div>
        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl shadow-inner group-hover:rotate-12 transition-transform">
          📄
        </div>
      </div>

      <div className="space-y-6">
        <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 transition-all group-hover:bg-indigo-50/30">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Current Status</span>
            <motion.span 
              key={status}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                status === 'not_signed' ? 'bg-amber-100 text-amber-600' :
                status === 'pending' ? 'bg-blue-100 text-blue-600' :
                'bg-green-100 text-green-600'
              }`}
            >
              {status === 'not_signed' ? 'Pending Signature' : 
               status === 'pending' ? 'Verification In-Progress' : 
               'Legally Verified'}
            </motion.span>
          </div>
          
          <AnimatePresence mode="wait">
            {!agreementFile ? (
              <motion.div 
                key="no-file"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs text-slate-500 font-medium leading-relaxed"
              >
                Ensure your stay is secured. Download our template, sign it, and re-upload here to complete your move-in process.
              </motion.div>
            ) : (
              <motion.div 
                key="has-file"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-between gap-3 text-indigo-600 font-bold text-sm bg-white p-3 rounded-xl border border-indigo-100"
              >
                <div className="flex items-center gap-2 truncate">
                   <span className="text-lg">📁</span>
                   <span className="truncate">{agreementFile}</span>
                </div>
                <button 
                  onClick={() => alert('Launching Secure PDF Viewer...')}
                  className="px-3 py-1 bg-indigo-600 text-white text-[9px] uppercase font-black rounded-lg hover:bg-indigo-700 transition-colors shrink-0"
                >
                  View
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <button 
            onClick={downloadTemplate}
            className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-black rounded-2xl text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 border border-slate-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Agreement Template
          </button>
          
          <label className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 cursor-pointer shadow-[0_10px_20px_-5px_rgba(79,70,229,0.3)]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            Upload Signed Copy
            <input type="file" className="hidden" onChange={handleUpload} accept=".pdf,.doc,.docx" />
          </label>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-center gap-2 opacity-50">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Encrypted e-Sign Channel</span>
      </div>
    </motion.div>
  );
};

export default DigitalAgreement;
