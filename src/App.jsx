import React from 'react';
import InteractiveBackground from './components/InteractiveBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickBits from './components/QuickBits';
import TechMarquee from './components/TechMarquee';
import VerifiedAssets from './components/VerifiedAssets'; 
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import LogicSandbox from './components/LogicSandbox'; 
import CodingHeatmaps from './components/CodingHeatmaps'; 
import GithubStats from './components/GithubStats';
import Tools from './components/Tools';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-white selection:text-black antialiased font-sans">
      
      <InteractiveBackground />
      <Navbar />
      
      {/* FIX: Removed 'z-10' so the full-screen popups can successfully cover the Navbar */}
      <main className="relative">
        <Hero />
        <QuickBits />
        <TechMarquee />
        <VerifiedAssets /> 
        <About />
        <Experience />
        <Projects />
        <CaseStudy />
        <LogicSandbox /> 
        <CodingHeatmaps />
        <GithubStats />
        <Tools />
        <Contact />
      </main>
    </div>
  );
}

export default App;