import React, { useState } from 'react';

const VerifiedAssets = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // UPDATED OFFERS: EXACT MATCH FOR YOUR NEW FILENAMES
  const offers = [
    { id: 1, title: "Vibrant Internship", file: "Rakshak Vijay Salve Vibrant.pdf" },
    { id: 2, title: "Offer Letter", file: "Offer-Letter.pdf" },
    { id: 3, title: "Skyhighs Technologies", file: "skyhighs technologies.pdf" },
    { id: 4, title: "Teachnook Offer", file: "Teachnook Offer Letter - Rakshak Salve.pdf" },
    { id: 5, title: "SaiKet Systems", file: "SaiKet Systems.pdf" },
    { id: 6, title: "Mr. Rakshak Offer", file: "Mr. Rakshak Offer Letter.docx.pdf" } 
  ].map(item => ({
    ...item,
    path: `/docs/offers/${item.file}`,
    type: 'PDF'
  }));

  // MAPPING 25 CERTIFICATES
  const certs = Array.from({ length: 25 }, (_, i) => {
    const id = i + 1;
    let extension = '.pdf';
    let type = 'PDF';

    if (id === 19 || id === 20) { extension = '.jpg'; type = 'IMAGE'; }
    else if (id >= 21 && id <= 24) { extension = '.png'; type = 'IMAGE'; }

    return {
      id: id,
      title: `Rakshak Vijay Salve (${id})`,
      path: `/docs/certs/Rakshak Vijay Salve (${id})${extension}`,
      type: type
    };
  });

  const categories = [
    { id: "offers", label: "OFFER LETTERS", count: "06", items: offers },
    { id: "certs", label: "CERTIFICATIONS", count: "25", items: certs }
  ];

  return (
    <section id="assets" className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-800">
        {categories.map((cat) => (
          <div 
            key={cat.id}
            onClick={() => setActiveCategory(cat)}
            className="p-12 border-r last:border-r-0 border-gray-800 hover:bg-white hover:text-black transition-all duration-700 cursor-pointer group relative overflow-hidden"
          >
            <div className="relative z-10">
              <p className="text-[10px] font-mono uppercase tracking-[0.4em] mb-12 opacity-50 group-hover:opacity-100 italic transition-opacity tracking-tighter">
                // SYSTEM_DATA_RESERVE
              </p>
              <h3 className="text-8xl font-black tracking-tighter mb-4 leading-none group-hover:scale-105 transition-transform duration-500">
                {cat.count}
              </h3>
              <p className="text-xl font-bold uppercase tracking-widest">{cat.label} [EXPLORE]</p>
            </div>
            <div className="absolute -right-8 -bottom-8 text-[12rem] font-black text-white/[0.02] group-hover:text-black/[0.05] transition-colors select-none italic leading-none">
              {cat.id === 'offers' ? 'OFF' : 'CRT'}
            </div>
          </div>
        ))}
      </div>

      {activeCategory && (
        <div className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-[95vw] h-[90vh] bg-[#0d1117] border border-white/10 relative flex flex-col shadow-2xl">
            
            <button 
              onClick={() => setActiveCategory(null)} 
              className="absolute top-4 right-4 z-[110] bg-white text-black px-6 py-3 font-black uppercase text-[10px] tracking-widest hover:invert transition-all"
            >
              CLOSE_ARCHIVE [X]
            </button>
            
            <div className="p-6 md:p-12 overflow-y-auto custom-scrollbar flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {activeCategory.items.map((item) => (
                  <div key={item.id} className="bg-black border border-gray-900 flex flex-col group overflow-hidden">
                    <div className="aspect-square w-full bg-[#050505] relative flex items-center justify-center p-2">
                      {item.type === "PDF" ? (
                        <object 
                          data={item.path} 
                          type="application/pdf"
                          className="w-full h-full grayscale group-hover:grayscale-0 transition-all pointer-events-none"
                        >
                          <div className="text-center p-4">
                            <p className="text-red-500 font-mono text-[8px] uppercase mb-2 underline tracking-widest italic">404: File Not Found</p>
                            <p className="text-gray-600 font-mono text-[7px] break-all uppercase leading-tight">
                              Expected: {item.file}
                            </p>
                          </div>
                        </object>
                      ) : (
                        <img 
                          src={item.path} 
                          alt={item.title}
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      )}
                      
                      <a 
                        href={item.path} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2"
                      >
                        <span className="bg-white text-black px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-xl">
                          Full View [↗]
                        </span>
                      </a>
                    </div>

                    <div className="p-4 flex justify-between items-center border-t border-gray-900 bg-[#0d1117]">
                       <div className="overflow-hidden">
                         <p className="text-[9px] text-white font-bold tracking-tighter truncate">
                            {item.title}
                         </p>
                         <p className="text-[7px] font-mono text-gray-500 uppercase tracking-widest">
                            {item.type} // VERIFIED_DOC
                         </p>
                       </div>
                       <span className="text-white/10 font-black text-xl italic tracking-tighter select-none">
                         {item.id < 10 ? `0${item.id}` : item.id}
                       </span>
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