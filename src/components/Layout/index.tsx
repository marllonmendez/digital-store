import React from 'react'

import { ILayout } from '@/interface'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <main className="flex flex-col bg-lightGra3">
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Layout
