import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Legal Hub",
      tag: "AI & Search Engine",
      impact: "Reduced research time by 80%",
      stack: "Next.js, Genkit AI, Tailwind",
      desc: "An AI-powered search engine for Indian legal records that understands intent rather than just keywords."
    },
    {
      title: "Crypto Predictor",
      tag: "Machine Learning",
      impact: "92% Prediction Accuracy",
      stack: "Python, Scikit-Learn, Pandas",
      desc: "An end-to-end ML pipeline predicting BTC/ETH price trends based on historical market data."
    },
    {
      title: "OCR Toolkit",
      tag: "Computer Vision",
      impact: "95% Text Extraction Rate",
      stack: "OpenCV, Tesseract, Streamlit",
      desc: "A tool designed for high-accuracy text extraction from unstructured documents with a live GUI."
    }
  ];

  return (
    <section id="projects" className="w-full py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-gray-800">
      <div className="mb-20">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">Engineering</h2>
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest mt-4">// Proof of Concepts & Impact</p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((p, i) => (
          <div key={i} className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-gray-900 hover:bg-[#111] transition-all duration-500 px-4">
            <div className="md:col-span-1 text-gray-700 font-mono text-xl">0{i+1}</div>
            
            <div className="md:col-span-5">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">{p.title}</h3>
              <p className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-6">{p.tag}</p>
              <div className="flex gap-2">
                {p.stack.split(', ').map(s => (
                  <span key={s} className="px-2 py-1 border border-gray-800 text-[10px] text-gray-500 uppercase">{s}</span>
                ))}
              </div>
            </div>

            <div className="md:col-span-6 flex flex-col justify-center">
              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">"{p.desc}"</p>
              <div className="p-4 border border-white/10 bg-white/5 rounded-sm">
                <p className="text-green-500 font-mono text-xs uppercase mb-1">Impact Metric:</p>
                <p className="text-white font-bold text-xl uppercase tracking-tighter">{p.impact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;