import React from 'react';

const Stats = () => {
  return (
    <section id="stats" className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
          Logic & Proof
        </h2>
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">// Quantitative Data</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LeetCode Card */}
        <div className="p-8 border border-gray-800 hover:border-white transition-all duration-500 group bg-[#111]">
          <h3 className="text-xl font-bold uppercase text-white mb-12">LeetCode</h3>
          <div className="flex items-end gap-2">
            <span className="text-6xl font-black text-white group-hover:text-orange-500 transition-colors">150+</span>
            <span className="text-[10px] text-gray-500 uppercase font-mono mb-3">Problems</span>
          </div>
          <p className="text-xs text-gray-500 mt-4 font-mono">FOCUS: ARRAYS, STRINGS, DP</p>
        </div>

        {/* HackerRank Card */}
        <div className="p-8 border border-gray-800 hover:border-white transition-all duration-500 group bg-[#111]">
          <h3 className="text-xl font-bold uppercase text-white mb-12">HackerRank</h3>
          <div className="flex items-end gap-2">
            <span className="text-6xl font-black text-white group-hover:text-green-500 transition-colors">5★</span>
            <span className="text-[10px] text-gray-500 uppercase font-mono mb-3">Problem Solving</span>
          </div>
          <p className="text-xs text-gray-500 mt-4 font-mono">BADGE: GOLD PROFICIENCY</p>
        </div>

        {/* GitHub Card */}
        <div className="p-8 border border-gray-800 hover:border-white transition-all duration-500 group bg-[#111]">
          <h3 className="text-xl font-bold uppercase text-white mb-12">GitHub</h3>
          <div className="flex items-end gap-2">
            <span className="text-6xl font-black text-white group-hover:text-blue-500 transition-colors">20+</span>
            <span className="text-[10px] text-gray-500 uppercase font-mono mb-3">Repositories</span>
          </div>
          <p className="text-xs text-gray-500 mt-4 font-mono">CONTRIBUTIONS: ACTIVE</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;