import CheatSheetsLink from '@/components/CheatSheetsLink'
import Hero from '@/components/Hero'
import React from 'react'

const HomePage = () => {
  return (
    <main>
      <section className="bg-[#171717]">
        <Hero/>
      </section>
      <section>
        <CheatSheetsLink/>
      </section>
    </main>
  )
}

export default HomePage