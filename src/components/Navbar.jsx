import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center mix-blend-difference">
      {/* Brand / Logo - Scrolls to top */}
      <div 
        className="text-white font-bold text-lg md:text-xl tracking-tighter uppercase cursor-pointer"
        onClick={() => window.scrollTo(0, 0)}
      >
        Rakshak Salve
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-xs font-semibold text-gray-300 uppercase tracking-widest">
        <li>
          <a href="#projects" className="hover:text-white cursor-pointer transition-colors duration-300">Projects</a>
        </li>
        <li>
          <a href="#about" className="hover:text-white cursor-pointer transition-colors duration-300">About</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-white cursor-pointer transition-colors duration-300">Contact</a>
        </li>
      </ul>

      {/* Mobile Contact Button */}
      <a 
        href="#contact" 
        className="md:hidden text-white text-xs font-semibold uppercase tracking-widest cursor-pointer hover:text-gray-300 transition-colors"
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;