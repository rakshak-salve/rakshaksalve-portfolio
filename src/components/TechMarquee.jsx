import React from 'react';

const TechMarquee = () => {
  const tech = ["Java", "Spring Boot", "Hibernate", "REST API", "SQL", "Next.js", "Python", "React", "Docker", "Microservices"];

  return (
    <div className="w-full py-12 border-y border-gray-800 bg-[#0a0a0a] overflow-hidden whitespace-nowrap flex">
      <div className="animate-marquee flex items-center">
        {tech.concat(tech).map((item, index) => (
          <span key={index} className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-transparent stroke-text px-8 opacity-20 hover:opacity-100 hover:text-white transition-all duration-500 cursor-default">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;

