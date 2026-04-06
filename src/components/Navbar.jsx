import React, { useState } from 'react';
import profilePic from '../assets/my-image.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
        {/* Brand Logo Container */}
        <div 
          className="flex items-center gap-3 md:gap-4 cursor-pointer group relative z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-gray-700 overflow-hidden group-hover:border-white transition-all duration-500 shrink-0">
            <img 
              src={profilePic} 
              alt="Rakshak Salve Logo" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base md:text-xl tracking-tighter uppercase leading-none">
              Rakshak Salve
            </span>
            <span className="text-[8px] md:text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-1 opacity-80">
              // Software Engineer
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-gray-400 transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-50 text-[10px] font-bold uppercase tracking-widest border border-white/20 px-3 py-1.5 active:bg-white active:text-black transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'CLOSE [X]' : 'MENU [=]'}
        </button>
      </nav>

      {/* Mobile Dropdown Overlay */}
      <div className={`fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col justify-center items-center transition-transform duration-500 md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="flex flex-col gap-8 text-center text-2xl font-black uppercase tracking-tighter">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="hover:text-[#ffa116] transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;