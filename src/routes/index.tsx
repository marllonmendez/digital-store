import { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'

import { HomePage } from '@/pages/HomePage'
import { ProductListingPage } from '@/pages/ProductListingPage'

import Layout from '@/components/Layout'

const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/produtos"
        element={
          <Layout>
            <ProductListingPage />
          </Layout>
        }
      />
    </Routes>
  )
}

export { AppRoutes }
