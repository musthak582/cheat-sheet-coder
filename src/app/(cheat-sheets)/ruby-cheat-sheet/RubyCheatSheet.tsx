'use client';
import { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // Import PrismJS theme
import 'prismjs/components/prism-ruby'; // Import the Ruby language support
import { rubyCodeBlocks } from '../../../../public/data/ruby-code';
import { FaBars, FaTimes } from 'react-icons/fa';

const RubyCheatSheet = () => {
  // State to track the currently selected section
  const [selectedSection, setSelectedSection] = useState(rubyCodeBlocks[0].id);
  // for toggle sidebar
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    // Highlight the code block whenever the selected section changes
    const codeBlocks = document.querySelectorAll<HTMLElement>('pre code');
    codeBlocks.forEach((block) => {
      Prism.highlightElement(block); // Use PrismJS to highlight
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
        <h2 className='lg:text-3xl md:text-2xl text-[20px] text-center font-extrabold text-slate-900 '>Ruby Cheat Sheet</h2>
        <p className='max-w-4xl hidden lg:inline text-[20px] text-slate-700 text-center'>Access our free Ruby Cheat Sheet to master syntax, methods, and gems. This comprehensive guide includes practical examples for efficient Ruby programming. Perfect for quick reference!</p>
      </div>
      <div className='relative w-full flex lg:flex-row flex-col bg-white'>
        {/* side bar */}
        <div className={`sm:w-[400px] w-full h-[600px] ${isOpen ? 'block' : 'hidden'} lg:flex lg:static absolute top-0 left-0 flex-col overflow-auto bg-white`}>
          <nav className='flex flex-col'>
            {
              rubyCodeBlocks.map((section) => (
                <button
                  className={`block w-full border-l-2 text-left px-4 py-1 ${selectedSection === section.id ? ' font-semibold text-[#171717] border-[#171717] ' : ' text-slate-700 border-slate-300 hover:border-l-[#171717]'
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
          {rubyCodeBlocks.map((section) => (
            selectedSection === section.id && (
              <div key={section.id} className='h-full bg-[#1E1E1E] '>
                <pre>
                  <code className="language-ruby text-[18px]">
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

export default RubyCheatSheet;
