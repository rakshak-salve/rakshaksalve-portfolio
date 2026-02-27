import React from 'react';

// Core Layout & Intro
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickBits from './components/QuickBits';
import TechMarquee from './components/TechMarquee';

// Engineering Narrative
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import LogicSandbox from './components/LogicSandbox'; 

// Performance Metrics & Proof
import CodingHeatmaps from './components/CodingHeatmaps'; 
import GithubStats from './components/GithubStats';

// Experience & Credentials
import Experience from './components/Experience';
import Certificates from './components/Certificates'; 
import Tools from './components/Tools';

// Personal & Connection
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-white selection:text-black antialiased">
      {/* Note: Background Grid and Grain textures are 
          applied globally via body::before and body::after in index.css 
      */}
      <Navbar />
      
      <main className="relative">
        {/* SECTION 1: Identity Hook */}
        <Hero />
        <QuickBits />
        <TechMarquee />

        {/* SECTION 2: Technical Depth */}
        <Philosophy />
        <Projects />
        <CaseStudy />
        <LogicSandbox /> 
        
        {/* SECTION 3: The Wall of Proof (150+ DSA Solves) */}
        <CodingHeatmaps />
        <GithubStats />
        
        {/* SECTION 4: Professional Journey */}
        <Experience />
        <Certificates /> 
        <Tools />
        
        {/* SECTION 5: Final Call to Action */}
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;