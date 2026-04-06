import React from 'react';

const Experience = () => {
  const journey = [
    {
      year: "March 2026 — Present",
      badge: "2026",
      role: "Web/App Developer Intern",
      company: "Pleach India Foundation, Hyderabad",
      description: "Contributing to cultural preservation through 'Pleachify'. Building scalable platforms for heritage documentation and material culture archives.",
      type: "Internship"
    },
    {
      year: "Dec 2024 — Jul 2025",
      badge: "2025",
      role: "Java Full Stack Development",
      company: "VibrantMinds Technologies, Pune",
      description: "Intensive professional training in Java, Spring Boot, Hibernate, and REST API standards.",
      type: "Training"
    },
    {
      year: "2022 — 2025",
      badge: "2025",
      role: "B.Tech in Artificial Intelligence",
      company: "J.D. College of Engineering, Nagpur",
      description: "CGPA: 7.5 // Specialized in ML, OCR Toolkits, and Semantic Search algorithms.",
      type: "Education"
    },
    {
      year: "Dec 2023 — Mar 2024",
      badge: "2024",
      role: "Web Development Intern",
      company: "The Website Makers, Remote",
      description: "First professional internship focused on responsive UI/UX and client-side logic development.",
      type: "Internship"
    },
    {
      year: "2019 — 2022",
      badge: "2022",
      role: "Diploma in Computer Science",
      company: "Bajaj Chandrapur Polytechnic",
      description: "Score: 75% (First Class Distinction) // Foundational engineering, logic design, and data management systems.",
      type: "Education"
    },
    {
      year: "2019",
      badge: "2019",
      role: "Secondary School Certificate",
      company: "Lokmanya Tilak Vidyalaya, Wani",
      description: "Maharashtra State Board (MSBSHSE) // Strong foundation in science and mathematics.",
      type: "Education"
    }
  ];

  return (
    <section id="experience" className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="mb-24 flex justify-between items-end max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">The Journey</h2>
          <p className="text-gray-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mt-4">
            // Academic & Professional Pathway
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 border border-gray-800 px-4 py-2 bg-[#0d1117]">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
          <span className="text-[10px] font-mono text-white uppercase tracking-widest">Active @ Hyderabad</span>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Central Spine for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2"></div>
        {/* Left Spine for Mobile */}
        <div className="md:hidden absolute left-[21px] top-0 bottom-0 w-px bg-gray-800"></div>

        {journey.map((item, i) => {
          const isEven = i % 2 === 0;

          return (
            <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-[16px] md:left-1/2 w-3 h-3 bg-[#0a0a0a] border-2 border-[#ffa116] rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_10px_#ffa116]"></div>

              {/* Content Card */}
              <div className={`w-full pl-14 md:pl-0 md:w-[45%] ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                <div className="group border border-gray-800 bg-[#0d1117] p-8 md:p-10 hover:bg-[#111] hover:border-white transition-all duration-500 relative overflow-hidden">
                  
                  {/* Decorative Background Number */}
                  <div className={`absolute top-[-20px] ${isEven ? 'right-[-20px]' : 'left-[-20px]'} text-[6rem] font-black italic text-white/[0.03] pointer-events-none group-hover:text-white/[0.05] transition-colors`}>
                    {item.badge}
                  </div>

                  <div className="relative z-10">
                    <span className="inline-block text-[#ffa116] font-mono text-[9px] uppercase tracking-[0.3em] mb-4">
                      // {item.type}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-2 group-hover:text-[#ffa116] transition-colors leading-none tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-gray-500 font-mono text-[10px] uppercase mb-6 tracking-widest border-b border-gray-800 pb-4 inline-block">
                      {item.company} <br className="md:hidden" /> <span className="text-gray-400">// {item.year}</span>
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed italic opacity-80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Empty Spacer for Desktop Layout Balance */}
              <div className="hidden md:block md:w-[45%]">
                <div className={`flex flex-col justify-center h-full ${isEven ? 'items-end' : 'items-start'} opacity-10 select-none pointer-events-none`}>
                   <span className="text-8xl font-black italic tracking-tighter">{item.badge}</span>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;