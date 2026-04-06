import React, { useMemo } from 'react';

const InteractiveBackground = () => {
  // Generate random star coordinates once when the component loads
  const starsSmall = useMemo(() => generateStars(700), []);
  const starsMedium = useMemo(() => generateStars(200), []);
  const starsLarge = useMemo(() => generateStars(50), []);

  function generateStars(count) {
    return [...Array(count)]
      .map(() => `${Math.floor(Math.random() * 100)}vw ${Math.floor(Math.random() * 100)}vh #ffffff`)
      .join(', ');
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
      {/* Deep dark background with a very faint gradient at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#050505] opacity-50"></div>
      
      {/* Star Layers */}
      <div className="absolute inset-0 w-full h-full">
        <div className="star-layer star-small" style={{ boxShadow: starsSmall }}></div>
        <div className="star-layer star-medium" style={{ boxShadow: starsMedium }}></div>
        <div className="star-layer star-large" style={{ boxShadow: starsLarge }}></div>
      </div>
    </div>
  );
};

export default InteractiveBackground;