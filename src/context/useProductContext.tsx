import React, { createContext, useContext, useState } from 'react'

import { IProductCard, IProductContext, IProductProvider } from '@/interface'

const ProductContext = createContext({} as IProductContext)

export default function ProductProvider({ children }: IProductProvider) {
  const [products, setProducts] = useState<IProductCard[]>([])
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState<IProductContext['filters']>({
    session: [],
    category: [],
    brand: [],
    gender: [],
  })

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        search,
        setSearch,
        filters,
        setFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductsContext = () => useContext(ProductContext)
