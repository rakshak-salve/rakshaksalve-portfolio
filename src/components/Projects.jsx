import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "Legal Hub",
      tech: "Next.js • Genkit AI • Tailwind",
      description: "A semantic search platform to digitize and index Indian legal records with context-aware queries.",
      link: "https://github.com/rakshak-salve"
    },
    {
      title: "Crypto Predictor",
      tech: "Python • Scikit-learn • Pandas",
      description: "Predictive machine learning pipeline for BTC/ETH trends using historical financial datasets.",
      link: "https://github.com/rakshak-salve"
    },
    {
      title: "OCR Toolkit",
      tech: "Python • OpenCV • Tesseract",
      description: "Optical character recognition tool with an interactive Streamlit GUI for real-time text extraction.",
      link: "https://github.com/rakshak-salve"
    }
  ];

  return (
    <section className="w-full min-h-screen px-6 md:px-12 py-24 border-t border-gray-800">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
          Selected Works
        </h2>
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
          // Production & Academic
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-800">
        {projectList.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 border-b md:border-b-0 md:border-r border-gray-800 last:border-none hover:bg-white transition-colors duration-300 cursor-pointer"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <p className="text-gray-500 font-mono text-xs mb-4 uppercase tracking-widest group-hover:text-gray-400 transition-colors duration-300">
                  0{index + 1}
                </p>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white group-hover:text-black mb-4 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-8 group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors duration-300">
                {project.tech}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;