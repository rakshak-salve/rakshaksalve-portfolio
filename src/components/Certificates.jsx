import React from 'react';

const Certificates = () => {
  const certs = [
    {
      title: "Java Full Stack Development",
      issuer: "VibrantMinds Technologies",
      date: "2024 - 2025",
      desc: "Comprehensive training in Core Java, Spring Boot, Hibernate, and RESTful API development."
    },
    {
      title: "Diploma in Computer Engineering",
      issuer: "Bajaj Chandrapur Polytechnic",
      date: "2019 - 2022",
      desc: "Foundational engineering principles, data structures, and computing fundamentals."
    },
    {
      title: "HackerRank Gold Badge",
      issuer: "Problem Solving",
      date: "Active",
      desc: "5-Star proficiency in Java and advanced algorithmic logic."
    }
  ];

  return (
    <section id="certificates" className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Credentials</h2>
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest mt-4">// Verified Training & Education</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <div key={i} className="p-8 border border-gray-900 bg-[#0d1117]/30 hover:border-white transition-all duration-500 group relative overflow-hidden">
            <span className="absolute -right-4 -bottom-8 text-9xl font-black text-white/5 group-hover:text-white/10 transition-colors uppercase select-none">
              0{i+1}
            </span>
            
            <p className="text-[10px] font-mono text-gray-500 uppercase mb-8 tracking-[0.3em] italic">
              // {c.issuer}
            </p>
            <h3 className="text-xl font-bold text-white uppercase mb-4 leading-tight">
              {c.title}
            </h3>
            <p className="text-gray-400 text-xs font-mono leading-relaxed mb-8 relative z-10">
              {c.desc}
            </p>
            <p className="text-white font-mono text-[10px] uppercase border-b border-white w-fit">
              {c.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;