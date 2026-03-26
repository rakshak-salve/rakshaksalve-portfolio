import React from 'react';

const Experience = () => {
  const journey = [
    {
      year: "March 2026 — Present",
      role: "Web/App Developer Intern",
      company: "Pleach India Foundation, Hyderabad",
      description: "Contributing to the 'Pleachify' initiative. Building digital platforms to preserve and disseminate India's cultural heritage. Focus on scalable site architecture for heritage documentation and material culture archives.",
      type: "Internship"
    },
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
      description: "Graduated with a strong focus on advanced computing, AI algorithms (OCR & Vector Search), and software engineering principles.",
      type: "Education"
    },
    {
      year: "2023 — 2024",
      role: "Web Development Intern",
      company: "The Website Makers",
      description: "Developed client-facing websites using HTML, CSS, and JavaScript. Supported REST API integrations and implemented Git version control standards.",
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
      company: "Lokmanya Tilak Vidyalaya, Chandrapur",
      description: "Graduated with 60%. Established the academic foundation before transitioning into technical engineering studies.",
      type: "Education"
    }
  ];

  return (
    <section id="experience" className="w-full min-h-screen px-6 md:px-12 py-24 border-t border-gray-800">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
          The Journey
        </h2>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest italic">
            // Current Location: Hyderabad / Active Engagement
          </p>
        </div>
      </div>

      <div className="flex flex-col border-l border-gray-800 ml-2 md:ml-4">
        {journey.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-12 py-12 border-b border-gray-900 last:border-none group hover:bg-[#111]/50 transition-colors duration-300">
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-14 w-[9px] h-[9px] bg-gray-800 group-hover:bg-white transition-colors duration-300"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-2 block italic">
                  {item.type}
                </span>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-1 group-hover:text-[#ffa116] transition-colors">
                  {item.role}
                </h3>
                <p className="text-lg text-gray-400 font-mono uppercase tracking-wide">
                  {item.company}
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-xs font-mono uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                {item.year}
              </div>
            </div>
            <p className="text-gray-500 max-w-2xl leading-relaxed text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;