// src/app/components/Header.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import SearchBox from './SearchBox'; // Import the SearchBox component

const Header = () => {
  const [isSearchBoxOpen, setSearchBoxOpen] = useState(false);

  const toggleSearchBox = () => {
    setSearchBoxOpen(!isSearchBoxOpen);
  };

  return (
    <>
      <header className=" bg-[#171717] flex items-center justify-center xl:px-[100px] py-4 sm:px-4 px-2">
        <nav className="w-full flex items-center justify-between">
          <Link href={'/'} className="flex items-center">
            <Image
              src={'/assets/cheat-sheet-coder-bg-dark-logo.png'}
              width={60}
              height={60}
              alt='cheat-sheet-coder-logo'
              className="rounded-full"
            />
            <span className="sm:text-[22px] font-extrabold text-[18px] text-white ml-2">
              Cheat<span className="text-slate-300">sheet</span>Coder
            </span>
          </Link>
          <button
            type="button"
            onClick={toggleSearchBox}
            className="flex items-center gap-2 px-[10px] py-2 text-slate-300 border border-slate-300 rounded-lg bg-transparent hover:text-slate-400 hover:border-slate-400 transition duration-300"
          >
            <FaSearch className="text-[20px]" />
            <span className="hidden sm:inline text-[18px]">Search for cheatsheet</span>
          </button>
        </nav>
      </header>
      {isSearchBoxOpen && <SearchBox closeSearchBox={toggleSearchBox} />}
    </>
  );
};

export default Header;
