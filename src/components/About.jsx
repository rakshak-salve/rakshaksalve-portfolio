import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen px-6 md:px-12 py-24 border-t border-gray-800 flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
        
        {/* Left Column: Bio */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-8">
            The Engineer
          </h2>
          <div className="text-gray-400 text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              I am a Software Engineer specializing in <span className="text-white font-bold">Java Backend Development</span> and scalable architecture. 
              Currently completing my B.Tech in Artificial Intelligence at J.D. College of Engineering, graduating in 2025.
            </p>
            <p>
              My core focus is on building clean, maintainable systems. I thrive on solving complex algorithmic challenges, heavily practicing Data Structures & Algorithms with over 150+ LeetCode problems solved.
            </p>
            <p>
              When I am not writing APIs or querying databases, I am exploring modern web frameworks to ensure I can bridge the gap between robust backend logic and seamless user experiences.
            </p>
          </div>
        </div>

        {/* Right Column: Skills & Education */}
        <div className="flex flex-col gap-12 pt-2 md:pt-4 border-t md:border-t-0 md:border-l border-gray-800 md:pl-12">
          
          {/* Skills Grid */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-6">
              // Technical Arsenal
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Java", "Spring Boot", "SQL", "Python", "REST APIs", "Next.js", "Tailwind", "Git"].map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 border border-gray-800 text-xs font-mono uppercase tracking-widest text-gray-300 hover:bg-white hover:text-black transition-colors duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education & Metrics */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-6">
              // Metrics & Education
            </h3>
            <ul className="space-y-4 text-gray-400 font-mono text-xs uppercase tracking-widest">
              <li className="flex justify-between border-b border-gray-800 pb-2 hover:text-white transition-colors duration-300 cursor-default">
                <span>B.Tech Artificial Intelligence</span>
                <span className="text-white">2022 - 2025</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2 hover:text-white transition-colors duration-300 cursor-default">
                <span>LeetCode</span>
                <span className="text-white">150+ Solved</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2 hover:text-white transition-colors duration-300 cursor-default">
                <span>HackerRank</span>
                <span className="text-white">5-Star (Problem Solving)</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;