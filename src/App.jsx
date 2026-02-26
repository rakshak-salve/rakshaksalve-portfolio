import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-white selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
    </div>
  );
}

export default App;