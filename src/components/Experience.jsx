import React from 'react';

const Experience = () => {
  const journey = [
    {
      year: "Dec 2024 — Jul 2025",
      role: "Java Full Stack Development Training",
      company: "VibrantMinds Technologies",
      description: "Completed intensive training on Core Java, Advanced Java, Spring Boot, Hibernate, and built full-stack mini-projects demonstrating REST APIs and MVC architecture.",
      type: "Training"
    },
    {
      year: "2022 — 2025",
      role: "B.Tech in Artificial Intelligence",
      company: "J.D. College of Engineering, Nagpur",
      description: "Graduated with a strong focus on advanced computing, AI algorithms, and software engineering principles.",
      type: "Education"
    },
    {
      year: "2023 — 2024",
      role: "Web Development Intern",
      company: "The Website Makers",
      description: "Developed client-facing websites using HTML, CSS, and JavaScript. Supported REST API integrations, executed functional testing, and implemented Git version control standards.",
      type: "Experience"
    },
    {
      year: "2019 — 2022",
      role: "Diploma in Computer Science",
      company: "Bajaj Chandrapur Polytechnic",
      description: "Graduated with 75%. Built a strong technical foundation in programming, database management, and computer networks.",
      type: "Education"
    },
    {
      year: "Passed 2019",
      role: "10th Grade (SSC)",
      company: "Lokmanya Tilak Vidyalaya and Junior College, Chandrapur",
      description: "Graduated with 60%. Established a strong academic foundation before transitioning into technical computer science studies.",
      type: "Education"
    }
  ];

  return (
    <section id="experience" className="w-full min-h-screen px-6 md:px-12 py-24 border-t border-gray-800">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
          The Journey
        </h2>
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
          // Experience & Education
        </p>
      </div>

      <div className="flex flex-col border-l border-gray-800 ml-2 md:ml-4">
        {journey.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-12 py-8 border-b border-gray-800 last:border-none group hover:bg-[#111] transition-colors duration-300">
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-10 w-[9px] h-[9px] bg-gray-800 group-hover:bg-white transition-colors duration-300"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2 block">
                  {item.type}
                </span>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-1">
                  {item.role}
                </h3>
                <p className="text-lg text-gray-400 font-mono uppercase tracking-wide">
                  {item.company}
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-sm font-mono uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                {item.year}
              </div>
            </div>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;