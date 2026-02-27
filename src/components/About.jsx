import React from 'react';
import profilePic from '../assets/my-image.jpg';

const About = () => {
  const skills = [
    { cat: "Backend", items: "Java, Spring Boot, Hibernate" },
    { cat: "Frontend", items: "React, Next.js, Tailwind" },
    { cat: "Database", items: "SQL, DBMS, Relational Logic" },
    { cat: "Tools", items: "Git, Postman, Linux, Docker" }
  ];

  return (
    <section id="about" className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Profile Image Section */}
        <div className="relative group">
          <div className="absolute -inset-4 border border-gray-800 group-hover:border-white transition-all duration-500 -z-10"></div>
          <img 
            src={profilePic} 
            alt="Rakshak Salve Professional" 
            className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
          />
          <div className="absolute bottom-8 left-8 bg-white text-black p-4 font-mono text-xs uppercase tracking-widest">
            Based in Pune, India
          </div>
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-8">
            The Engineer <br /> Behind the Code.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            I am a 2025 B.Tech graduate in AI, but my heart lies in the backend. I build robust systems using Java and Spring Boot. I don't just write code; I architect solutions that scale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((s, i) => (
              <div key={i} className="p-6 border border-gray-800 hover:bg-[#111] transition-colors">
                <p className="text-gray-500 font-mono text-[10px] uppercase mb-2">// {s.cat}</p>
                <p className="text-white font-bold uppercase tracking-tight text-sm">{s.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;