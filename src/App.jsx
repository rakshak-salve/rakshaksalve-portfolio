import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-white selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;