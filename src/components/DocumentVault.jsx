import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DocumentVault = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const archive = [
    {
      title: "Pleach India Foundation",
      type: "OFFER LETTER",
      img: "https://placehold.co/800x1100/111/fff?text=Pleach+India+Offer+Letter", 
      desc: "Web/App Developer Intern. Project: Scaling digital presence for Indian cultural heritage."
    },
    {
      title: "Java Full Stack Specialization",
      type: "CERTIFICATE",
      img: "https://placehold.co/1100x800/111/fff?text=VibrantMinds+Java+Cert",
      desc: "Verified training in Spring Boot, Hibernate, and REST API development."
    },
    {
      title: "B.Tech AI Degree",
      type: "ACADEMIC",
      img: "https://placehold.co/1100x800/111/fff?text=B.Tech+AI+Degree+Proof",
      desc: "Official degree from J.D. College of Engineering, Nagpur (2025)."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 px-6 md:px-12 pb-24 relative z-50">
      <button 
        onClick={() => navigate('/')}
        className="mb-12 font-mono text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-all border border-gray-800 px-4 py-2"
      >
        ← Return to Main System
      </button>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white mb-20 leading-none">Archive.</h1>
        
        <div className="space-y-40">
          {archive.map((doc, i) => (
            <div key={i} className="group border-t border-gray-900 pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-4">
                  <span className="text-[#ffa116] font-mono text-[10px] uppercase tracking-widest block mb-4">// {doc.type}</span>
                  <h3 className="text-4xl font-bold text-white uppercase mb-6">{doc.title}</h3>
                  <p className="text-gray-500 font-mono text-xs leading-loose italic">{doc.desc}</p>
                </div>
                <div className="lg:col-span-8 bg-[#0d1117] p-4 border border-gray-800">
                  <img src={doc.img} alt={doc.title} className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentVault;