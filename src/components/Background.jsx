import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Large Decorative Technical Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 border border-white/[0.03] rounded-full"></div>
      <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] border border-[#ffa116]/[0.02] rounded-full"></div>
      
      {/* Floating Binary Bits (Static placement, very subtle) */}
      <div className="absolute top-[10%] left-[5%] text-[10px] font-mono text-white/5 rotate-90 uppercase tracking-widest">
        01100001 01101001 01011111 01110010 01110011
      </div>
      <div className="absolute bottom-[20%] right-[5%] text-[10px] font-mono text-white/5 -rotate-90 uppercase tracking-widest">
        SYSTEM_ACTIVE // STABLE // 2026
      </div>
      
      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default Background;