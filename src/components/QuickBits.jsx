import React from 'react';

const QuickBits = () => {
  const bits = [
    { label: "Current IDE", value: "IntelliJ IDEA" },
    { label: "Coffee Intake", value: "2 Cups / Day" },
    { label: "OS of Choice", value: "Windows / Linux" },
    { label: "Recent Learn", value: "System Design" },
    { label: "Logic Prep", value: "Daily LeetCode" },
    { label: "Music", value: "Lofi / Synthwave" }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-gray-800">
        {bits.map((bit, i) => (
          <div key={i} className="p-8 border-r last:border-r-0 border-gray-800 hover:bg-white hover:text-black transition-all duration-300 group">
            <p className="text-[9px] font-mono uppercase text-gray-500 mb-4 group-hover:text-gray-400">
              {bit.label}
            </p>
            <p className="text-sm font-black uppercase tracking-widest">
              {bit.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickBits;