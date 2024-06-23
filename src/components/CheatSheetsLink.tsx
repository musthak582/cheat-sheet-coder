import Link from 'next/link'
import React from 'react'
import {cheatSheetsLinks} from '../../public/data/cheat-sheets-links'
const CheatSheetsLink = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 max-w-5xl mx-auto">
      {
        cheatSheetsLinks.map((item)=>(
          <Link key={item.label} href={item.path} className={`flex items-center gap-2 border border-slate-300 py-4 px-2 rounded-lg hover:bg-gray-100`}>
            <div className="h-[30px] w-[30px]">{item.icon}</div>
            {/* <span className="text-[30px]">{item.icon}</span> */}
            <span className="text-[20px]">{item.label}</span>
          </Link>
        ))
      }
    </div>
  )
}

export default CheatSheetsLink