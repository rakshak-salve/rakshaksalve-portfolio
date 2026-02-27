import React from 'react';
import profilePic from '../assets/my-image.jpg';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
      {/* Brand Logo Container */}
      <div 
        className="flex items-center gap-4 cursor-pointer group"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {/* Circular Image Logo */}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-700 overflow-hidden group-hover:border-white transition-all duration-500">
          <img 
            src={profilePic} 
            alt="Rakshak Salve Logo" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Text Branding */}
        <div className="flex flex-col">
          <span className="font-bold text-lg md:text-xl tracking-tighter uppercase leading-none">
            Rakshak Salve
          </span>
          <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-1 opacity-80">
            // Software Engineer
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
        <li>
          <a href="#projects" className="hover:text-gray-400 transition-colors">Projects</a>
        </li>
        <li>
          <a href="#experience" className="hover:text-gray-400 transition-colors">Journey</a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-400 transition-colors underline underline-offset-8 decoration-1">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu Placeholder */}
      <div className="md:hidden text-[10px] font-bold uppercase tracking-widest border border-white/20 px-3 py-1.5">
        Menu
      </div>
    </nav>
  );
};

export default Navbar;