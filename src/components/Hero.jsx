import React from 'react';
import { useDecodeText } from '../hooks/useDecodeText'; // Correct path to hooks folder

const Hero = () => {
  const name = useDecodeText("RAKSHAK SALVE");
  const role = useDecodeText("SOFTWARE ENGINEER", 50);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] select-none leading-none pointer-events-none">
        JAVA / AI
      </div>

      <div className="relative z-10">
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] text-gray-500 mb-6 flex items-center gap-4">
          <span className="w-12 h-[1px] bg-gray-800"></span>
          2025 B.Tech Graduate in AI
        </p>

        <h1 className="text-[18vw] md:text-[12vw] font-black uppercase tracking-tighter leading-[0.85] text-white">
          {name}
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-4">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-white">
            {role}
          </h2>
          
          <div className="flex flex-col items-start md:items-end">
            <p className="font-mono text-[10px] uppercase text-gray-500 tracking-widest mb-2">Based in Pune, India</p>
            <div className="flex gap-4">
               <a href="#projects" className="px-6 py-2 border border-white text-white text-[10px] uppercase font-bold hover:bg-white hover:text-black transition-all">View Projects [03]</a>
               <a href="/resume.pdf" className="px-6 py-2 bg-white text-black text-[10px] uppercase font-bold hover:bg-gray-200 transition-all">Download CV ↓</a>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Indicator */}
      <div className="absolute left-6 md:left-12 bottom-12 flex items-center gap-4 origin-left -rotate-90">
        <span className="w-8 h-[1px] bg-white animate-pulse"></span>
        <p className="font-mono text-[10px] uppercase tracking-widest text-white">Scroll to Explore</p>
      </div>
    </section>
  );
};

export default Hero;