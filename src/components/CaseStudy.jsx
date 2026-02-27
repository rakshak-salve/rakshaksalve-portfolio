import React from 'react';

const CaseStudy = () => {
  return (
    <section id="casestudy" className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4 text-gray-500">// Deep Dive</p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">
          Solving the <br /> Legal Hub.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans">
          <div>
            <h4 className="font-bold uppercase text-sm mb-4 border-b border-black pb-2 italic">The Challenge</h4>
            <p className="text-lg leading-relaxed">
              Indian legal records are massive and unindexed. Finding relevant case law usually takes hours of manual searching through unstructured PDFs.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase text-sm mb-4 border-b border-black pb-2 italic"> My Solution</h4>
            <p className="text-lg leading-relaxed">
              I built a semantic search engine using <strong>Next.js</strong> and <strong>Genkit AI</strong>. Instead of keyword matching, the system understands the "intent" of the legal query, reducing research time by 80%.
            </p>
          </div>
        </div>

        <div className="mt-16 p-8 border-2 border-black bg-black text-white">
          <h4 className="font-mono text-xs uppercase mb-4 text-gray-400">Key Engineering Achievement</h4>
          <p className="text-2xl font-bold tracking-tight">
            Implemented a vector-based indexing system that processes legal case summaries in real-time, enabling 95% accuracy in case retrieval.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;