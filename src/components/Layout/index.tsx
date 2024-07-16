import React from 'react'

import { ILayout } from '@/interface'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex flex-col bg-white2">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
