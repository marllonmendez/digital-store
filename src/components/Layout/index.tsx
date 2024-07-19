import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { ILayout } from '@/interface'

import ProductProvider from '@/context/useProductContext'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Layout: React.FC<ILayout> = ({ children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    const scroll = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 10)
    return () => clearTimeout(scroll)
  }, [pathname])

  return (
    <ProductProvider>
      <div className="flex flex-col bg-white2">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </ProductProvider>
  )
}

export default Layout
