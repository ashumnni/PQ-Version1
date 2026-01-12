
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chatWithNexBot } from '../services/geminiService';

const NexBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: 'Namaste! I am NexBot. How can I assist your urban living journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const botResponse = await chatWithNexBot(userMsg, messages);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse || '...' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[500]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="mb-6 w-[350px] h-[500px] bg-white rounded-[2.5rem] shadow-4xl border border-slate-100 flex flex-col overflow-hidden"
          >
            <div className="bg-indigo-600 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white font-black">N</div>
                 <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-widest">NexBot AI</h4>
                    <p className="text-indigo-200 text-[9px] font-bold uppercase">Online & Ready</p>
                 </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth={3} /></svg>
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4 no-scrollbar">
               {messages.map((m, i) => (
                 <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl text-xs font-medium leading-relaxed ${
                      m.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-800'
                    }`}>
                       {m.text}
                    </div>
                 </div>
               ))}
               {isLoading && (
                 <div className="flex justify-start">
                   <div className="bg-slate-50 p-4 rounded-2xl flex gap-1">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-200"></div>
                   </div>
                 </div>
               )}
            </div>

            <div className="p-4 bg-slate-50 flex gap-2">
               <input 
                 value={input}
                 onChange={e => setInput(e.target.value)}
                 onKeyDown={e => e.key === 'Enter' && handleSend()}
                 placeholder="Type your question..."
                 className="flex-1 bg-white rounded-xl px-4 text-xs font-medium outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-200"
               />
               <button onClick={handleSend} className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth={3} /></svg>
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-3xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        <div className="relative z-10">
           {isOpen ? '💬' : '🤖'}
        </div>
      </motion.button>
    </div>
  );
};

export default NexBot;
