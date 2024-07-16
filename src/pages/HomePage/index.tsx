import React from 'react'

import { HeroSection } from '@/pages/HomePage/HeroSection'
import { CollectionSection } from '@/pages/HomePage/CollectionSection'

export const HomePage = () => {
  return (
    <>
      <main>
        <HeroSection />
        <CollectionSection />
      </main>
    </>
  )
}
