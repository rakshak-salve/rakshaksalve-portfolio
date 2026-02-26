import React from 'react';
import { useDecodeText } from '../hooks/useDecodeText';

const Hero = () => {
  // Apply our custom hook to your job title and skills
  const decodedTitle = useDecodeText("Software Engineer", 30);
  const decodedSub = useDecodeText("Backend • Java • Full-Stack", 40);

  return (
    <section className="h-screen w-full flex flex-col justify-center items-start px-6 md:px-12 relative">
      {/* Decorative Grid Lines (Brutalist style) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="w-full h-[1px] bg-gray-500 absolute top-1/3"></div>
        <div className="w-full h-[1px] bg-gray-500 absolute top-2/3"></div>
        <div className="h-full w-[1px] bg-gray-500 absolute left-1/3 md:left-1/4"></div>
      </div>

      <div className="z-10 mt-20 md:mt-0">
        <p className="text-gray-400 font-mono text-xs md:text-sm mb-4 tracking-widest uppercase">
          // 2025 B.Tech Graduate
        </p>
        
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4 text-white">
          Rakshak <br className="hidden md:block" /> Salve
        </h1>
        
        <h2 className="text-xl md:text-3xl font-bold text-gray-300 uppercase tracking-widest mb-2 font-mono min-h-[40px]">
          {decodedTitle}
        </h2>
        
        <p className="text-sm md:text-md text-gray-500 uppercase tracking-widest font-mono min-h-[24px]">
          {decodedSub}
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
        <div className="w-8 h-[1px] bg-gray-500"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;