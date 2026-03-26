import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CredentialVault = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const documents = [
    {
      title: "Pleach India Foundation",
      category: "OFFER LETTER",
      img: "https://placehold.co/600x800/111/fff?text=Offer+Letter+Preview", // Replace with your image path
      date: "MARCH 2026"
    },
    {
      title: "Java Full Stack Specialization",
      category: "CERTIFICATE",
      img: "https://placehold.co/800x600/111/fff?text=Java+Certificate", 
      date: "JULY 2025"
    },
    {
      title: "B.Tech AI Degree",
      category: "ACADEMIC",
      img: "https://placehold.co/800x600/111/fff?text=B.Tech+AI+Degree",
      date: "MAY 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 px-6 md:px-12 pb-24">
      <button 
        onClick={() => navigate('/')}
        className="mb-12 font-mono text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
      >
        ← Back to Portfolio
      </button>

      <header className="mb-20">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
          Document <br/> Vault.
        </h1>
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest mt-6">// Verified Professional Proofs</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {documents.map((doc, i) => (
          <div key={i} className="group border border-gray-900 bg-[#0d1117] p-4">
            <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden mb-6 bg-black flex items-center justify-center">
              <img 
                src={doc.img} 
                alt={doc.title} 
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[#ffa116] font-mono text-[10px] uppercase mb-2 tracking-widest italic">// {doc.category}</p>
                <h3 className="text-2xl font-bold text-white uppercase">{doc.title}</h3>
              </div>
              <p className="text-gray-600 font-mono text-[10px] uppercase">{doc.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CredentialVault;