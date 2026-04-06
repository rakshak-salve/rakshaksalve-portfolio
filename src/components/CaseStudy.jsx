import React from 'react';

const CaseStudy = () => {
  return (
    <section id="casestudy" className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4 text-gray-500">// Deep Dive</p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">
          Solving the <br /> Legal Hub.
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 font-sans mb-16">
          <div>
            <h4 className="font-bold uppercase text-sm mb-4 border-b border-black pb-2 italic">The Challenge</h4>
            <p className="text-lg leading-relaxed">
              Indian legal records are massive and unindexed. Finding relevant case law usually takes hours of manual searching through unstructured PDFs.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase text-sm mb-4 border-b border-black pb-2 italic"> My Solution</h4>
            <p className="text-lg leading-relaxed">
              I built a semantic search engine using Next.js and Genkit AI. Instead of keyword matching, the system understands the "intent" of the query, reducing research time by 80%.
            </p>
          </div>
        </div>

        {/* Brutalist ASCII Architecture Diagram */}
        <div className="p-6 md:p-10 border-2 border-black bg-black text-white overflow-x-auto">
          <p className="font-mono text-[10px] uppercase text-gray-500 tracking-widest mb-6">SYSTEM_ARCHITECTURE_MAP // VECTOR_SEARCH</p>
          <pre className="font-mono text-[10px] md:text-xs text-[#ffa116] leading-tight select-all">
{`[USER_QUERY]
      │
      ▼
[NEXT.JS API ROUTE] ──(Authentication)──> [MIDDLEWARE]
      │
      ├──────────────────────┐
      ▼                      ▼
[GENKIT AI]           [POSTGRESQL]
(Creates Embeddings)  (User Data/Logs)
      │
      ▼
[VECTOR DATABASE] ──(Cosine Similarity Search)──> [RANKED RESULTS]
      │
      └─────────────────────────────────────────> [CLIENT UI]`}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;