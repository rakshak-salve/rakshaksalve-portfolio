import React, { useMemo } from 'react';

// Moved OUTSIDE the component so it doesn't recreate on renders.
// Using a fixed 3000px grid prevents mobile browsers from recalculating vh/vw when scrolling.
const generateStars = (count) => {
  let stars = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 3000);
    const y = Math.floor(Math.random() * 3000);
    stars.push(`${x}px ${y}px #ffffff`);
  }
  return stars.join(', ');
};

const InteractiveBackground = () => {
  // Generate coordinates exactly once on load
  const starsSmall = useMemo(() => generateStars(700), []);
  const starsMedium = useMemo(() => generateStars(200), []);
  const starsLarge = useMemo(() => generateStars(50), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
      {/* Deep dark background with a very faint gradient at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#050505] opacity-50"></div>
      
      {/* Star Layers */}
      <div className="absolute inset-0 w-full h-full">
        <div className="star-layer star-small w-[1px] h-[1px] rounded-full bg-transparent" style={{ boxShadow: starsSmall }}></div>
        <div className="star-layer star-medium w-[2px] h-[2px] rounded-full bg-transparent" style={{ boxShadow: starsMedium }}></div>
        <div className="star-layer star-large w-[3px] h-[3px] rounded-full bg-transparent" style={{ boxShadow: starsLarge }}></div>
      </div>
    </div>
  );
};

export default InteractiveBackground;