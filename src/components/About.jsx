import React from 'react';
import profilePic from '../assets/my-image.jpg';

const About = () => {
  const principles = [
    { title: "AI Engineering", desc: "Specializing in Computer Vision (OCR) and Vector-based semantic search for large-scale legal datasets." },
    { title: "Indie Game Logic", desc: "Developing immersive player experiences through efficient pathfinding and modular C# logic." },
    { title: "Heritage Tech", desc: "Blending code with culture at Pleach India to document and disseminate ancient archaeological data." },
    { title: "Backend Scalability", desc: "Architecting Java/Spring Boot systems that prioritize type-safety and relational integrity." }
  ];

  return (
    <section id="about" className="w-full py-16 md:py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-24">
        
        {/* Profile Image Section */}
        <div className="relative group mx-4 md:mx-0">
          <div className="absolute -inset-2 md:-inset-4 border border-gray-800 group-hover:border-white transition-all duration-500 -z-10"></div>
          <img 
            src={profilePic} 
            alt="Rakshak Salve Professional" 
            className="w-full h-[350px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
          />
          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 bg-white text-black p-3 md:p-4 font-mono text-[10px] md:text-xs uppercase tracking-widest">
            Based in Pune, India
          </div>
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 md:mb-8 leading-tight">
            The Engineer <br /> Behind the Code.
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 md:mb-12">
            I am a 2025 B.Tech graduate in AI, but my heart lies in the backend. I build robust systems using Java and Spring Boot. I don't just write code; I architect solutions that scale.
          </p>

          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 border border-gray-800 hover:bg-[#111] transition-colors">
                <p className="text-gray-500 font-mono text-[9px] uppercase mb-2">// SPECIALIZATION</p>
                <p className="text-white font-bold uppercase tracking-tight text-xs md:text-sm">Java Full Stack</p>
             </div>
             <div className="p-4 border border-gray-800 hover:bg-[#111] transition-colors">
                <p className="text-gray-500 font-mono text-[9px] uppercase mb-2">// STATUS</p>
                <p className="text-white font-bold uppercase tracking-tight text-xs md:text-sm">Available</p>
             </div>
          </div>
        </div>
      </div>

      {/* Philosophy Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 pt-12 border-t border-gray-900">
        {principles.map((p, i) => (
          <div key={i} className="group border-l border-gray-900 pl-4 md:pl-6 hover:border-white transition-all duration-700">
            <h3 className="text-white font-black text-2xl md:text-3xl mb-2 md:mb-4 opacity-10 group-hover:opacity-100 transition-opacity tracking-tighter">0{i+1}</h3>
            <h4 className="text-white font-bold uppercase text-xs md:text-sm tracking-widest mb-2 italic underline decoration-gray-800 group-hover:decoration-white transition-all">{p.title}</h4>
            <p className="text-gray-500 text-[10px] uppercase leading-loose font-mono tracking-wider">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;