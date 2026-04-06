import React from 'react';

const VaultTheme = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Subtle Side Data Labels */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 font-mono text-[7px] text-white/10 vertical-text hidden lg:block tracking-[1em] uppercase">
        RAKSHAK_SALVE // ARCHIVE_V3.0
      </div>

      {/* Floating Orange Particles (CSS Animation) */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#ffa116]/30 rounded-full animate-pulse blur-sm"></div>
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-[#ffa116]/10 rounded-full animate-bounce blur-md"></div>
      <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white/10 rounded-full animate-ping"></div>

      {/* Light Mask: Prevents the center from being too dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffa116]/[0.01] to-transparent"></div>
    </div>
  );
};

export default VaultTheme;