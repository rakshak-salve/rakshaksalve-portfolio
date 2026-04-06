import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Legal Hub",
      tag: "AI & Search Engine",
      deploy: "Vercel CI/CD",
      impact: "Reduced research time by 80%",
      stack: "Next.js, Genkit AI, Tailwind",
      desc: "An AI-powered search engine for Indian legal records that understands intent rather than just keywords.",
      repo: "https://github.com/rakshak-salve" // Update this link if you have a specific repo
    },
    {
      title: "Crypto Predictor",
      tag: "Machine Learning",
      deploy: "Docker Container",
      impact: "92% Prediction Accuracy",
      stack: "Python, Scikit-Learn, Pandas",
      desc: "An end-to-end ML pipeline predicting BTC/ETH price trends based on historical market data.",
      repo: "https://github.com/rakshak-salve"
    },
    {
      title: "OCR Toolkit",
      tag: "Computer Vision",
      deploy: "Local / Streamlit",
      impact: "95% Text Extraction Rate",
      stack: "OpenCV, Tesseract, Streamlit",
      desc: "A tool designed for high-accuracy text extraction from unstructured documents with a live GUI.",
      repo: "https://github.com/rakshak-salve"
    }
  ];

  return (
    <section id="projects" className="w-full py-24 px-6 md:px-12 bg-transparent border-t border-gray-800">
      <div className="mb-20">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">Engineering</h2>
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest mt-4">// Proof of Concepts & Impact</p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((p, i) => (
          <div key={i} className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-gray-900 hover:bg-white/[0.02] transition-all duration-500 px-4">
            <div className="md:col-span-1 text-gray-700 font-mono text-xl">0{i+1}</div>
            
            <div className="md:col-span-5">
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">{p.title}</h3>
              <div className="flex gap-3 mb-6">
                 <span className="text-[#ffa116] font-mono text-[10px] uppercase tracking-widest">[{p.tag}]</span>
                 <span className="text-green-500 font-mono text-[10px] uppercase tracking-widest">[DEPLOY: {p.deploy}]</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.stack.split(', ').map(s => (
                  <span key={s} className="px-2 py-1 border border-gray-800 text-[10px] text-gray-500 uppercase">{s}</span>
                ))}
              </div>
            </div>

            <div className="md:col-span-6 flex flex-col justify-center">
              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">"{p.desc}"</p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="p-3 border border-white/10 bg-white/5 rounded-sm flex-1">
                  <p className="text-green-500 font-mono text-[10px] uppercase mb-1">Impact Metric:</p>
                  <p className="text-white font-bold text-lg uppercase tracking-tighter">{p.impact}</p>
                </div>
                
                <a 
                  href={p.repo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-4 border border-white text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all whitespace-nowrap"
                >
                  Inspect Code [↗]
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;