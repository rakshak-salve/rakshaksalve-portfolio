import React, { useState, useEffect } from 'react';

const VerifiedAssets = () => {
  const [viewType, setViewType] = useState(null);

  // Block background scroll for total focus
  useEffect(() => {
    if (viewType) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [viewType]);

  const offers = [
    { title: "Internship Letter", file: "Rakshak Vijay Salve Vibrant.pdf" },
    { title: "Offer Letter", file: "Offer-Letter.pdf" },
    { title: "Skyhighs Technologies", file: "skyhighs technologies.pdf" },
    { title: "Teachnook Offer", file: "Teachnook Offer Letter - Rakshak Salve.pdf" },
    { title: "SaiKet Systems", file: "SaiKet Systems.pdf" },
    { title: "Mr. Rakshak Offer", file: "Mr. Rakshak Offer Letter.docx.pdf" } 
  ].map((item, i) => ({ ...item, id: i + 1, path: `/docs/offers/${item.file}`, type: 'PDF' }));

  const certs = Array.from({ length: 25 }, (_, i) => {
    const id = i + 1;
    let ext = '.pdf';
    let type = 'PDF';
    if (id === 19 || id === 20) { ext = '.jpg'; type = 'IMG'; }
    else if (id >= 21 && id <= 24) { ext = '.png'; type = 'IMG'; }
    return {
      id,
      title: `Credential ${id}`,
      path: `/docs/certs/Rakshak Vijay Salve (${id})${ext}`,
      type
    };
  });

  const activeItems = viewType === 'offers' ? offers : certs;

  return (
    <section id="verified-arsenal" className="w-full py-20 px-6 md:px-12 bg-transparent border-t border-white/10">
      
      {/* TWO PRIMARY INTERFACE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 max-w-7xl mx-auto">
        <button 
          onClick={() => setViewType('offers')}
          className="group relative p-12 md:p-20 bg-[#0a0a0a] hover:bg-white transition-all duration-700 text-left overflow-hidden"
        >
          <span className="block font-mono text-[10px] tracking-[0.4em] text-white/40 group-hover:text-black/40 mb-6 uppercase">
            // Employment_Verification
          </span>
          <h3 className="text-6xl md:text-8xl font-black tracking-tighter group-hover:text-black transition-colors leading-none">06</h3>
          <p className="text-xl font-bold uppercase tracking-widest mt-4 group-hover:text-black">OFFER LETTERS</p>
          <div className="absolute -right-4 -bottom-10 text-[12rem] font-black italic text-white/[0.02] group-hover:text-black/[0.05] pointer-events-none transition-colors">OFF</div>
        </button>

        <button 
          onClick={() => setViewType('certs')}
          className="group relative p-12 md:p-20 bg-[#0a0a0a] hover:bg-white transition-all duration-700 text-left overflow-hidden"
        >
          <span className="block font-mono text-[10px] tracking-[0.4em] text-white/40 group-hover:text-black/40 mb-6 uppercase">
            // Skill_Certification
          </span>
          <h3 className="text-6xl md:text-8xl font-black tracking-tighter group-hover:text-black transition-colors leading-none">25</h3>
          <p className="text-xl font-bold uppercase tracking-widest mt-4 group-hover:text-black">CERTIFICATES</p>
          <div className="absolute -right-4 -bottom-10 text-[12rem] font-black italic text-white/[0.02] group-hover:text-black/[0.05] pointer-events-none transition-colors">CRT</div>
        </button>
      </div>

      {/* FULLSCREEN POPUP ENGINE */}
      {viewType && (
        <div className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col">
          
          {/* SECURE HEADER BAR */}
          <div className="w-full h-20 md:h-28 bg-[#0a0a0a] border-b border-white/10 flex items-center justify-between px-6 md:px-12 flex-shrink-0 relative z-20 shadow-2xl">
            <div>
              <h4 className="text-xl md:text-4xl font-black uppercase tracking-tighter italic">
                {viewType === 'offers' ? 'CAREER_RECORDS' : 'SKILL_ARCHIVE'}
              </h4>
              <p className="text-[#ffa116] font-mono text-[8px] md:text-[10px] tracking-widest uppercase mt-1">
                Rakshak Salve // Verified Documentation
              </p>
            </div>
            
            <button 
              onClick={() => setViewType(null)}
              className="bg-white text-black px-6 py-3 md:px-12 md:py-5 font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-[#ffa116] transition-all active:scale-95"
            >
              EXIT [X]
            </button>
          </div>

          {/* THE DOCUMENT GRID - Added min-h-0 to fix mobile flex scrolling bug */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12 min-h-0 relative z-10">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12">
              {activeItems.map((item) => (
                <div key={item.id} className="flex flex-col bg-[#0d1117] border border-white/5 group overflow-hidden relative">
                  
                  {/* PREVIEW WINDOW */}
                  <div className="aspect-[4/5] w-full bg-black relative flex items-center justify-center p-2 overflow-hidden">
                    
                    {item.type === 'PDF' ? (
                      <>
                        {/* Desktop PDF Embed */}
                        <embed 
                          src={`${item.path}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                          type="application/pdf"
                          className="hidden md:block w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                        />
                        {/* Mobile Brutalist PDF Placeholder */}
                        <div className="md:hidden w-full h-full border border-gray-800 bg-[#0a0a0a] flex flex-col items-center justify-center p-6">
                          <div className="w-16 h-20 border-2 border-gray-700 mb-4 flex items-center justify-center relative">
                            <span className="absolute top-2 left-2 text-[8px] font-black uppercase">PDF</span>
                            <span className="text-2xl opacity-20">📄</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <img 
                        src={item.path} 
                        alt={item.title}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    )}
                    
                    {/* INTERACTION OVERLAY - Force visible on mobile, hover on desktop */}
                    <a 
                      href={item.path} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="absolute inset-0 bg-black/60 md:bg-black/80 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4 z-10"
                    >
                      <span className="bg-white text-black px-6 py-4 font-black text-[10px] uppercase tracking-widest active:scale-95 transition-transform hover:bg-[#ffa116]">
                        {item.type === 'PDF' ? 'Open Native PDF [↗]' : 'View Image [↗]'}
                      </span>
                    </a>

                  </div>

                  {/* INFO PANEL */}
                  <div className="p-4 md:p-6 border-t border-white/5 flex justify-between items-center bg-[#050505]">
                    <div className="overflow-hidden mr-4">
                      <p className="text-[10px] md:text-xs font-bold tracking-tighter truncate uppercase">{item.title}</p>
                      <p className="text-[8px] font-mono text-white/30 uppercase mt-1 tracking-widest">STATUS: VERIFIED</p>
                    </div>
                    <span className="text-white/10 font-black text-2xl md:text-3xl italic tracking-tighter select-none">
                      {item.id < 10 ? `0${item.id}` : item.id}
                    </span>
                  </div>

                </div>
              ))}
            </div>
            
            {/* FOOTER PADDING FOR MOBILE BOTTOMS */}
            <div className="h-32 w-full"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VerifiedAssets;