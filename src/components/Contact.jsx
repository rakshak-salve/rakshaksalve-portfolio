import React from 'react';

const Contact = () => {
  const profiles = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rakshaksalve/' },
    { name: 'GitHub', url: 'https://github.com/rakshak-salve' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/RakshakSalve/' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/rakshaksalve' }
  ];

  return (
    <section id="contact" className="w-full min-h-[80vh] px-6 md:px-12 py-16 md:py-24 bg-[#ededed] text-[#0a0a0a] flex flex-col justify-between selection:bg-black selection:text-white">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-black pb-6 md:pb-8 gap-4">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
          Ready to Scale?
        </h2>
        <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500">
          // Available for Opportunities
        </p>
      </div>

      {/* Massive Call to Action */}
      <div className="flex flex-col items-center justify-center my-16 md:my-24 group">
        <a href="mailto:rakshaksalve0@gmail.com" className="text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter hover:text-gray-500 transition-colors duration-300 text-center leading-[0.85]">
          Let's <br /> Talk.
        </a>
      </div>

      {/* Footer Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-t border-black pt-8">
        
        {/* Contact Info */}
        <div className="flex flex-col gap-2 font-mono text-xs md:text-sm uppercase tracking-widest">
          <p className="font-bold text-black mb-2">// Contact</p>
          {/* break-all prevents the email from causing horizontal scroll on tiny screens */}
          <a href="mailto:rakshaksalve0@gmail.com" className="hover:text-gray-500 transition-colors break-all">rakshaksalve0@gmail.com</a>
          <a href="tel:+918767378330" className="hover:text-gray-500 transition-colors">+91 8767378330</a>
          <p className="text-gray-500 mt-2">Pune, India</p>
        </div>

        {/* Coding Profiles */}
        <div className="flex flex-col gap-2 font-mono text-xs md:text-sm uppercase tracking-widest">
          <p className="font-bold text-black mb-2">// Profiles</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:flex-col md:gap-2">
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
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-2 font-mono text-[10px] md:text-sm uppercase tracking-widest md:text-right justify-end mt-4 md:mt-0">
          <p>© 2026 Rakshak Salve</p>
          <p className="text-gray-500 font-bold">Built with React & Tailwind</p>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;