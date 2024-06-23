'use client'
import { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css'; // Import the Highlight.js theme
import { cppCodeBlocks } from '../../../../public/data/cpp-code'
import { FaBars, FaTimes } from 'react-icons/fa';
const CppCheatSheet = () => {
  // State to track the currently selected section
  const [selectedSection, setSelectedSection] = useState(cppCodeBlocks[0].id);
  // for toggle sidebar
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    // Highlight the code block whenever the selected section changes
    const codeBlocks = document.querySelectorAll<HTMLElement>('pre code');
    codeBlocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [selectedSection]);

  return (
    <div className="w-full flex flex-col bg-white xl:px-[100px] sm:px-4 px-2">
      <div className={`w-full bg-zinc-100 flex lg:flex-col lg:items-center lg:justify-center lg:gap-4 gap-2 sm:py-4 py-2`}>
        <button
          className="lg:hidden lg:text-3xl md:text-2xl text-[20px] font-extrabold"
          onClick={() => setOpen(!isOpen)}
        >
          {
            isOpen ? <FaTimes /> : <FaBars />
          }
        </button>
        <h2 className='lg:text-3xl md:text-2xl text-[20px] text-center font-extrabold text-slate-900 '>C++ Cheat Sheet</h2>
        <p className='max-w-4xl hidden lg:inline text-[20px] text-slate-700 text-center'>Master C++ essentials with our free C++ Cheat Sheet. Perfect for beginners and developers. Get quick references for syntax, data structures, and object-oriented programming concepts to write efficient and powerful C++ code effortlessly.</p>
      </div>
      <div className='relative w-full flex lg:flex-row flex-col bg-white'>
        {/* side bar */}
        <div className={`sm:w-[400px] w-full h-[600px] ${isOpen ? 'block' : 'hidden'} lg:flex lg:static absolute top-0 left-0 flex-col overflow-auto bg-white`}>
          <nav className='flex flex-col'>
            {
              cppCodeBlocks.map((section) => (
                <button
                  className={`block w-full border-l-2   text-left px-4 py-1 ${selectedSection === section.id ? ' font-semibold text-[#171717] border-[#171717] ' : ' text-slate-700 border-slate-300 hover:border-l-[#171717]'
                    }`}
                  onClick={() => {
                  setSelectedSection(section.id)
                  setOpen(!isOpen)
                  }}
                  key={section.id}
                >
                  {section.label}
                </button>
              ))
            }
          </nav>
        </div>
        {/* code block */}
        <div className="flex w-full h-[600px] flex-col overflow-auto">
          {cppCodeBlocks.map((section) => (
            selectedSection === section.id && (
              <div key={section.id} className='h-full bg-[#1E1E1E] '>
                <pre>
                  <code className="language-cpp text-[18px]">
                    {section.content}
                  </code>
                </pre>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default CppCheatSheet;
