import React from 'react';

const Philosophy = () => {
  const principles = [
    { title: "AI Engineering", desc: "Specializing in Computer Vision (OCR) and Vector-based semantic search for large-scale legal datasets." },
    { title: "Indie Game Logic", desc: "Developing immersive player experiences through efficient pathfinding and modular C# logic." },
    { title: "Heritage Tech", desc: "Blending code with culture at Pleach India to document and disseminate ancient archaeological data." },
    { title: "Backend Scalability", desc: "Architecting Java/Spring Boot systems that prioritize type-safety and relational integrity." }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {principles.map((p, i) => (
          <div key={i} className="group border-l border-gray-900 pl-6 hover:border-white transition-all duration-700">
            <h3 className="text-white font-black text-3xl mb-4 opacity-10 group-hover:opacity-100 transition-opacity tracking-tighter">0{i+1}</h3>
            <h4 className="text-white font-bold uppercase text-sm tracking-widest mb-2 italic underline decoration-gray-800 group-hover:decoration-white transition-all">{p.title}</h4>
            <p className="text-gray-500 text-[10px] uppercase leading-loose font-mono tracking-wider">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;