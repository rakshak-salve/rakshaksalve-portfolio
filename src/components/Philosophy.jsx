import React from 'react';

const Philosophy = () => {
  const principles = [
    { title: "Clean Code", desc: "Writing code for humans first, machines second." },
    { title: "Scalable Logic", desc: "Building systems that handle growth without breaking." },
    { title: "AI Integration", desc: "Leveraging LLMs to enhance traditional backend workflows." },
    { title: "Continuous Learning", desc: "150+ DSA solves is just the beginning of the journey." }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {principles.map((p, i) => (
          <div key={i} className="group">
            <h3 className="text-white font-black text-3xl mb-4 group-hover:text-gray-500 transition-colors">0{i+1}</h3>
            <h4 className="text-white font-bold uppercase text-sm tracking-widest mb-2">{p.title}</h4>
            <p className="text-gray-500 text-xs uppercase leading-loose font-mono">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;