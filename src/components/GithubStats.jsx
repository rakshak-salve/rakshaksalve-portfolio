import React from 'react';

const GithubStats = () => {
  // Using a dark gray hex for a subtle, blended look
  const dimGray = "333333"; 
  const username = "rakshak-salve";

  return (
    <section id="github" className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
          Code Pulse
        </h2>
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">// GitHub Contribution Activity</p>
      </div>

      <div className="flex justify-center items-center p-10 border border-gray-800 bg-[#0d1117]/50 rounded-sm overflow-hidden group">
        {/* Grayscale chart that feels like part of the UI */}
        <img 
          src={`https://ghchart.rshah.org/${dimGray}/${username}`} 
          alt="Github Activity" 
          className="w-full max-w-4xl opacity-40 group-hover:opacity-100 group-hover:invert transition-all duration-700"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-12 border border-gray-800">
        <div className="p-10 border-r border-gray-800 hover:bg-white hover:text-black transition-all duration-500 group">
          <p className="text-5xl font-black mb-2">20+</p>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">Repositories</p>
        </div>
        <div className="p-10 border-r border-gray-800 hover:bg-white hover:text-black transition-all duration-500 group">
          <p className="text-5xl font-black mb-2">500+</p>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">Annual Commits</p>
        </div>
        <div className="p-10 hover:bg-white hover:text-black transition-all duration-500 group">
          <p className="text-5xl font-black mb-2">12+</p>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">Open Source</p>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;