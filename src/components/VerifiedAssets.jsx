import React, { useState } from 'react';

const VerifiedAssets = () => {
  const [activeDoc, setActiveDoc] = useState(null);

  const assets = [
    { 
      id: "offers", 
      label: "OFFER LETTERS", 
      count: "5+", 
      docs: [
        { title: "Pleach India Foundation", img: "https://placehold.co/800x1100/111/fff?text=Pleach+India+Offer" },
        { title: "The Website Makers", img: "https://placehold.co/800x1100/111/fff?text=TWM+Intern+Offer" }
      ]
    },
    { 
      id: "certs", 
      label: "CERTIFICATIONS", 
      count: "10+", 
      docs: [
        { title: "Java Full Stack Specialist", img: "https://placehold.co/1100x800/111/fff?text=VibrantMinds+Java+Cert" },
        { title: "B.Tech AI Degree", img: "https://placehold.co/1100x800/111/fff?text=B.Tech+AI+Degree" }
      ]
    }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a] relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-800">
        {assets.map((asset) => (
          <div 
            key={asset.id}
            onClick={() => setActiveDoc(asset)}
            className="p-12 border-r last:border-r-0 border-gray-800 hover:bg-white hover:text-black transition-all duration-500 cursor-pointer group"
          >
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] mb-12 opacity-50 group-hover:opacity-100 italic">
              // Verified Proof
            </p>
            <h3 className="text-8xl font-black tracking-tighter mb-4">{asset.count}</h3>
            <p className="text-xl font-bold uppercase tracking-widest">{asset.label} [↗]</p>
          </div>
        ))}
      </div>

      {/* DOCUMENT OVERLAY (MODAL) */}
      {activeDoc && (
        <div className="fixed inset-0 z-[100] bg-black/fb backdrop-blur-xl flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-6xl h-[85vh] bg-[#0d1117] border border-white/20 relative flex flex-col">
            <button 
              onClick={() => setActiveDoc(null)}
              className="absolute top-6 right-6 z-10 bg-white text-black px-4 py-2 font-black uppercase text-xs tracking-widest"
            >
              CLOSE [X]
            </button>
            
            <div className="p-12 overflow-y-auto custom-scrollbar">
              <h4 className="text-4xl font-black uppercase text-white mb-12 border-b border-gray-800 pb-6">
                {activeDoc.label} <span className="text-gray-600">// ARCHIVE</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {activeDoc.docs.map((doc, i) => (
                  <div key={i} className="space-y-4">
                    <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest italic">{doc.title}</p>
                    <div className="border border-gray-800 p-2 bg-black">
                      <img src={doc.img} alt={doc.title} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VerifiedAssets;