import React from 'react'

import { ILayout } from '@/interface'

import Header from '@/components/Header'

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <main className="flex flex-col bg-lightGra3">
        <Header />
        {children}
        {/*  Footer */}
      </main>
    </>
  )
}

export default Layout
