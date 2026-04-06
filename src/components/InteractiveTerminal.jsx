import React, { useState, useRef, useEffect } from 'react';

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'RakshakOS v3.0.1 (System Runtime)' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  const commands = {
    help: 'Available commands: whoami, skills, experience, clear, curl api/status',
    whoami: 'Rakshak Salve // Backend & AI Engineer // Based in Pune, India',
    skills: JSON.stringify({ backend: ["Java", "Spring Boot", "Hibernate"], data: ["SQL", "Vector DBs"], ai: ["Genkit", "OpenCV"] }, null, 2),
    experience: 'March 2026: Web/App Developer Intern @ Pleach India Foundation',
    'curl api/status': '{ "status": 200, "message": "System Operational", "uptime": "99.99%" }'
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = '';

      if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      } else if (commands[cmd]) {
        response = commands[cmd];
      } else if (cmd === '') {
        response = '';
      } else {
        response = `Command not found: ${cmd}`;
      }

      setHistory(prev => [
        ...prev, 
        { type: 'user', text: `root@rakshaksalve.in:~$ ${input}` },
        ...(response ? [{ type: 'output', text: response }] : [])
      ]);
      setInput('');
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <section className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-white">API Interface</h2>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-800"></div>
            <div className="w-3 h-3 rounded-full bg-gray-800"></div>
            <div className="w-3 h-3 rounded-full bg-gray-800"></div>
          </div>
        </div>
        
        <div className="bg-[#0a0a0a] border border-gray-800 p-6 h-80 overflow-y-auto custom-scrollbar font-mono text-xs md:text-sm">
          {history.map((line, i) => (
            <div key={i} className={`mb-2 ${line.type === 'output' ? 'text-[#ffa116] whitespace-pre-wrap' : line.type === 'system' ? 'text-gray-500' : 'text-white'}`}>
              {line.text}
            </div>
          ))}
          <div className="flex items-center text-white mt-2">
            <span className="text-green-500 mr-2">root@rakshaksalve.in:~$</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none flex-1 text-white caret-white"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;