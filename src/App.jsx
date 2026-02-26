import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-white selection:text-black">
      <Navbar />
      
      {/* Main Content Wrapper */}
      <main className="pt-32 px-6 md:px-12">
        <h1 className="text-sm tracking-widest text-gray-500 uppercase">
          System Status: Shell Initialized
        </h1>
      </main>
    </div>
  );
}

export default App;