import React from 'react';

const Tools = () => {
  const categories = [
    { 
      name: "Core Tech", 
      skills: ["Java (Expert)", "Spring Boot (Advanced)", "Hibernate", "Microservices"] 
    },
    { 
      name: "Data Layer", 
      skills: ["MySQL", "PostgreSQL", "JDBC", "Redis (Learning)"] 
    },
    { 
      name: "Cloud & Dev", 
      skills: ["Git", "Docker", "Postman", "AWS (Basics)"] 
    }
  ];

  return (
    <section id="tools" className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
            The <br /> Arsenal.
          </h2>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest leading-loose">
            My development environment is built for efficiency and modularity. I prefer strictly typed backends and flexible, responsive frontends.
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-white font-bold uppercase text-xs tracking-[0.3em] border-b border-gray-800 pb-2 italic">
                {cat.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-[#111] border border-gray-800 text-[10px] font-mono text-gray-400 uppercase tracking-widest hover:border-white hover:text-white transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;