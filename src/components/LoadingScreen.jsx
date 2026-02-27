import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center">
      <div className="w-48 h-[1px] bg-gray-800 mb-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-white animate-loading-bar"></div>
      </div>
      <div className="font-mono text-[9px] uppercase tracking-[0.6em] text-white">
        System.init(Rakshak_Salve) // 2026
      </div>
    </div>
  );
};

export default LoadingScreen;