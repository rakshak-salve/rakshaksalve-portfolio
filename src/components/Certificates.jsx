import React from 'react';
import { useNavigate } from 'react-router-dom';

const Certificates = () => {
  const navigate = useNavigate();

  return (
    <section id="certificates" className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Credentials</h2>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest mt-4 leading-relaxed">
            Verified proof of education, training, and active industrial offers. Full documents are stored in the digital vault.
          </p>
        </div>
        
        <button 
          onClick={() => navigate('/vault')}
          className="px-12 py-6 bg-white text-black font-black uppercase text-xs tracking-[0.4em] hover:bg-gray-200 transition-all"
        >
          Open Vault [↗]
        </button>
      </div>
    </section>
  );
};

export default Certificates;