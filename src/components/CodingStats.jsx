import React from 'react';

const CodingStats = () => {
  const stats = [
    {
      platform: "LeetCode",
      count: "150+",
      label: "Problems Solved",
      sub: "Top 15% / Daily Solve Streak",
      color: "group-hover:text-[#ffa116]"
    },
    {
      platform: "HackerRank",
      count: "5★",
      label: "Gold Badge",
      sub: "Problem Solving Proficiency",
      color: "group-hover:text-[#2ec866]"
    },
    {
      platform: "CodeChef",
      count: "Active",
      label: "Competitive",
      sub: "Java / DSA Focused",
      color: "group-hover:text-[#5b4638]"
    }
  ];

  return (
    <section id="stats" className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
          Logic Metrics
        </h2>
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">// Quantitative Skill Proof</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-800">
        {stats.map((item, i) => (
          <div key={i} className="group p-10 border-r last:border-r-0 border-gray-800 hover:bg-[#111] transition-all duration-500 relative overflow-hidden">
            {/* Hover Accent */}
            <div className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-500 ${item.color.replace('text', 'bg')}`}></div>
            
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500 mb-10 italic">
              // {item.platform}
            </p>
            
            <div className="flex items-baseline gap-2 mb-2">
              <h3 className={`text-6xl font-black uppercase tracking-tighter text-white transition-colors duration-500 ${item.color}`}>
                {item.count}
              </h3>
            </div>
            
            <p className="text-lg font-bold uppercase tracking-tight text-gray-300 mb-6">
              {item.label}
            </p>
            
            <div className="pt-6 border-t border-gray-900 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white animate-pulse"></div>
              <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingStats;