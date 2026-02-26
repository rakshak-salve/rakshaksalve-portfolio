import React from 'react';

const Contact = () => {
  const profiles = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rakshaksalve/' },
    { name: 'GitHub', url: 'https://github.com/rakshak-salve' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/RakshakSalve/' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/rakshaksalve0' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/rakshaksalve' }
  ];

  return (
    <section id="contact" className="w-full min-h-screen px-6 md:px-12 py-24 bg-[#ededed] text-[#0a0a0a] flex flex-col justify-between selection:bg-black selection:text-white">
      {/* Top Header */}
      <div className="flex justify-between items-start border-b border-black pb-8">
        <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter">
          Ready to Scale?
        </h2>
        <p className="text-xs font-mono uppercase tracking-widest text-gray-500 text-right">
          // Available for Opportunities
        </p>
      </div>

      {/* Massive Call to Action */}
      <div className="flex flex-col items-center justify-center my-24 group">
        <a href="mailto:rakshaksalve0@gmail.com" className="text-5xl md:text-9xl font-black uppercase tracking-tighter hover:text-gray-500 transition-colors duration-300 text-center leading-none">
          Let's <br /> Talk.
        </a>
      </div>

      {/* Footer Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black pt-8">
        
        {/* Contact Info */}
        <div className="flex flex-col gap-2 font-mono text-sm uppercase tracking-widest">
          <p className="font-bold text-black mb-2">// Contact</p>
          <a href="mailto:rakshaksalve0@gmail.com" className="hover:text-gray-500 transition-colors">rakshaksalve0@gmail.com</a>
          <a href="tel:+918767378330" className="hover:text-gray-500 transition-colors">+91 8767378330</a>
          <p className="text-gray-500 mt-2">Pune, India</p>
        </div>

        {/* Coding Profiles */}
        <div className="flex flex-col gap-2 font-mono text-sm uppercase tracking-widest">
          <p className="font-bold text-black mb-2">// Profiles</p>
          {profiles.map((profile, index) => (
            <a 
              key={index} 
              href={profile.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              {profile.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-2 font-mono text-sm uppercase tracking-widest md:text-right justify-end">
          <p>© 2025 Rakshak Salve</p>
          <p className="text-gray-500">Built with React & Tailwind</p>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;