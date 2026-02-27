import React from 'react';

const CodingHeatmaps = () => {
  const leetcodeUser = "RakshakSalve"; 
  const codechefUser = "rakshaksalve"; 

  return (
    <section id="coding-activity" className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
          Logic Heatmaps
        </h2>
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">// Problem Solving Activity</p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        
        {/* LeetCode Heatmap Container */}
        <div className="group border border-gray-800 bg-[#0d1117]/50 p-8 rounded-sm">
          <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
            <h3 className="text-xl font-bold uppercase text-white group-hover:text-[#ffa116] transition-colors duration-500">
              LeetCode Activity
            </h3>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest italic">Global Rank: Top 15%</span>
          </div>
          <div className="flex justify-center overflow-hidden">
            {/* Using a high-stability dynamic SVG card for LeetCode */}
            <img 
              src={`https://leetcard.jacoblin.cool/${leetcodeUser}?theme=dark&font=Inter&ext=activity`} 
              alt="LeetCode Activity" 
              className="w-full max-w-4xl opacity-60 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0"
            />
          </div>
        </div>

        {/* CodeChef Activity Container */}
        <div className="group border border-gray-800 bg-[#0d1117]/50 p-8 rounded-sm">
          <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
            <h3 className="text-xl font-bold uppercase text-white group-hover:text-[#5b4638] transition-colors duration-500">
              CodeChef Activity
            </h3>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest italic">Competitive Progress</span>
          </div>
          <div className="flex justify-center overflow-hidden">
            {/* Using a stable API for CodeChef Stats */}
            <img 
              src={`https://codechef-api.vercel.app/handle/${codechefUser}`} 
              alt="CodeChef Stats" 
              className="w-full max-w-2xl opacity-60 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 py-6"
              onError={(e) => {
                e.target.src = "https://placehold.co/600x200/0d1117/333?text=CodeChef+Activity+Syncing...";
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CodingHeatmaps;