import React from 'react';

const Experience = () => {
  const journey = [
    {
      year: "March 2026 — Present",
      role: "Web/App Developer Intern",
      company: "Pleach India Foundation, Hyderabad",
      description: "Contributing to cultural preservation through 'Pleachify'. Building scalable platforms for heritage documentation and material culture archives.",
      type: "Internship"
    },
    {
      year: "Dec 2024 — Jul 2025",
      role: "Java Full Stack Development",
      company: "VibrantMinds Technologies",
      description: "Intensive training in Java, Spring Boot, Hibernate, and REST API standards.",
      type: "Training"
    },
    {
      year: "2022 — 2025",
      role: "B.Tech in Artificial Intelligence",
      company: "J.D. College of Engineering, Nagpur",
      description: "Specialized in ML, OCR Toolkits, and Semantic Search algorithms.",
      type: "Education"
    },
    {
      year: "2019 — 2022",
      role: "Diploma in Computer Science",
      company: "Bajaj Chandrapur Polytechnic",
      description: "Foundational engineering, logic design, and data management systems.",
      type: "Education"
    }
  ];

  return (
    <section id="experience" className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="mb-16 flex justify-between items-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">The Journey</h2>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Active @ Hyderabad</span>
        </div>
      </div>
      <div className="flex flex-col border-l border-gray-800 ml-2 md:ml-4">
        {journey.map((item, i) => (
          <div key={i} className="relative pl-10 py-12 border-b border-gray-900 last:border-none group hover:bg-white/[0.02] transition-colors">
            <div className="absolute left-[-5px] top-14 w-[9px] h-[9px] bg-gray-800 group-hover:bg-white transition-colors duration-500"></div>
            <h3 className="text-2xl font-bold uppercase text-white mb-2 group-hover:text-[#ffa116] transition-colors">{item.role}</h3>
            <p className="text-gray-500 font-mono text-[10px] uppercase mb-4 tracking-widest tracking-tighter">{item.company} // {item.year}</p>
            <p className="text-gray-400 text-sm max-w-2xl leading-relaxed italic opacity-70 group-hover:opacity-100 transition-opacity">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;