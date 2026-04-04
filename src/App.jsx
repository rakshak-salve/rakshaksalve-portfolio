import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickBits from './components/QuickBits';
import TechMarquee from './components/TechMarquee';
import Philosophy from './components/Philosophy';
import VerifiedAssets from './components/VerifiedAssets'; 
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import LogicSandbox from './components/LogicSandbox'; 
import CodingHeatmaps from './components/CodingHeatmaps'; 
import GithubStats from './components/GithubStats';
import Experience from './components/Experience';
import Tools from './components/Tools';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-white selection:text-black antialiased font-sans">
      <Navbar />
      <main className="relative">
        <Hero />
        <QuickBits />
        <TechMarquee />
        <Philosophy />
        <VerifiedAssets /> 
        <Projects />
        <CaseStudy />
        <LogicSandbox /> 
        <CodingHeatmaps />
        <GithubStats />
        <Experience />
        <Tools />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;