import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center mix-blend-difference">
      {/* Brand / Logo */}
      <div className="text-white font-bold text-lg md:text-xl tracking-tighter uppercase cursor-pointer">
        Rakshak Salve
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-xs font-semibold text-gray-300 uppercase tracking-widest">
        <li className="hover:text-white cursor-pointer transition-colors duration-300">Projects</li>
        <li className="hover:text-white cursor-pointer transition-colors duration-300">About</li>
        <li className="hover:text-white cursor-pointer transition-colors duration-300">Contact</li>
      </ul>

      {/* Mobile Menu Button (We will animate this later) */}
      <div className="md:hidden text-white text-xs font-semibold uppercase tracking-widest cursor-pointer">
        Menu
      </div>
    </nav>
  );
};

export default Navbar;