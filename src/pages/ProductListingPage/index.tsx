import React from 'react'

import { Products } from '@/mock'
import { IProductCard } from '@/interface'
import { useProductsContext } from '@/context/useProductContext'

import FilterCard from '@/components/FilterCard'
import ProductCard from '@/components/ProductCard'

export const ProductListingPage = () => {
  const { search } = useProductsContext()

  const filterProducts = Products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.type.toLowerCase().includes(search.toLowerCase()),
  )

  const isSearch = search.trim().length > 0

  return (
    <section className="flex items-center justify-center">
      <div className="px-24 gap-5 md:px-32">
        <div className="flex my-14 gap-1">
          {isSearch && (
            <h2 className="flex gap-1 text-darkGray2 text-[1rem]">
              <span className="font-bold">
                Resultados para &quot;{search}&quot; -
              </span>
              <span className="font-normal">
                {filterProducts.length}{' '}
                {filterProducts.length !== 1 ? 'produtos' : 'produto'}
              </span>
            </h2>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex gap-5">
            <div className="flex flex-col">
              <FilterCard />
            </div>
            <div className="grid grid-cols-3 gap-5">
              {filterProducts.map((product: IProductCard) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
