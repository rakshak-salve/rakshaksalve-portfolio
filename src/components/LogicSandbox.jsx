import React, { useState } from 'react';

const LogicSandbox = () => {
  const [activeTab, setActiveTab] = useState(0);

  const snippets = [
    {
      title: "Binary Search",
      logic: "Recursive Efficiency",
      code: `public int search(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while(left <= right) {
        int mid = left + (right - left) / 2;
        if(nums[mid] == target) return mid;
        if(nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`
    },
    {
      title: "Spring Controller",
      logic: "REST API Design",
      code: `@GetMapping("/{id}")
public ResponseEntity<User> getUser(@PathVariable Long id) {
    return userRepository.findById(id)
        .map(user -> ResponseEntity.ok().body(user))
        .orElse(ResponseEntity.notFound().build());
}`
    }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">Logic <br/> Engine.</h2>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest leading-loose">
            Direct insight into my coding standards. Focused on time complexity, clean injection, and maintainable architecture.
          </p>
        </div>
        
        <div className="lg:w-2/3 border border-gray-800 bg-[#0d1117]">
          <div className="flex border-b border-gray-800">
            {snippets.map((s, i) => (
              <button 
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-4 font-mono text-[10px] uppercase tracking-widest transition-all ${activeTab === i ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
              >
                {s.title}
              </button>
            ))}
          </div>
          <div className="p-8">
            <p className="text-[#ffa116] font-mono text-[10px] uppercase mb-4">// {snippets[activeTab].logic}</p>
            <pre className="text-gray-300 font-mono text-xs md:text-sm overflow-x-auto leading-relaxed">
              <code>{snippets[activeTab].code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogicSandbox;