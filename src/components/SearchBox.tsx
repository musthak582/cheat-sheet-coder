// src/app/components/SearchBox.tsx
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { cheatSheetsLinks } from '../../public/data/cheat-sheets-links';

// Define the type for the props
interface SearchBoxProps {
  closeSearchBox: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ closeSearchBox }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLinks = cheatSheetsLinks.filter(link =>
    link.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg border border-gray-300 mt-20 w-full max-w-4xl p-6">
        <div className="flex items-center gap-2 border-b pb-4 mb-4">
          <span className="text-2xl text-gray-600"><FaSearch /></span>
          <input
            className="w-full p-2 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            placeholder='Search for cheatsheet'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="text-xl text-gray-600" onClick={closeSearchBox}>
            Cancel
          </button>
        </div>
        <div className="flex flex-col gap-4 overflow-auto max-h-80">
          {filteredLinks.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="flex items-center gap-3 border border-gray-200 p-3 rounded-lg hover:bg-gray-100 transition duration-200"
              onClick={closeSearchBox} // Close the search box on link click
            >
              <div className="h-[30px] w-[30px]">{item.icon}</div>
              <span className="text-lg text-gray-700">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
