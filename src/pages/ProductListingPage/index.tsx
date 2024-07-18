import React from 'react'

import { IProductCard } from '@/interface'
import { products } from '@/mock'

import FilterCard from '@/components/FilterCard'
import ProductCard from '@/components/ProductCard'

export const ProductListingPage = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="px-24 gap-5 md:px-32">
        <div className="flex flex-col">
          <span className="my-14">Resultados para "Tênis" - 255 produtos</span>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-5">
            <div className="flex flex-col">
              <FilterCard />
            </div>
            <div className="grid grid-cols-3 gap-5">
              {products.map((product: IProductCard) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
