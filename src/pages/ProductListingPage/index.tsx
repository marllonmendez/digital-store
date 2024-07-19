import React, { useMemo } from 'react'
import { RiFileList3Fill } from 'react-icons/ri'

import { Products } from '@/mock'
import { IProductCard } from '@/interface'
import { useProductsContext } from '@/context/useProductContext'

import FilterCard from '@/components/FilterCard'
import ProductCard from '@/components/ProductCard'

export const ProductListingPage = () => {
  const { search, filters } = useProductsContext()

  const filterProducts = useMemo(() => {
    return Products.filter(
      (product: IProductCard) =>
        (filters.session.length === 0 ||
          filters.session.includes(product.session!)) &&
        (filters.category.length === 0 ||
          filters.category.includes(product.category!)) &&
        (filters.brand.length === 0 ||
          filters.brand.includes(product.brand!)) &&
        (filters.gender.length === 0 ||
          filters.gender.includes(product.gender!)) &&
        (product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.type.toLowerCase().includes(search.toLowerCase())),
    )
  }, [search, filters])

  const isSearch = search.trim().length > 0
  const isProduct = filterProducts.length > 0

  return (
    <section className="flex items-center justify-center">
      <div className="px-24 gap-5 md:px-32 w-full">
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
            <div
              className={`flex-grow ${isProduct ? 'grid grid-cols-3 gap-5' : 'flex items-center justify-center'}`}
            >
              {isProduct ? (
                filterProducts.map((product: IProductCard) => (
                  <ProductCard key={product.title} {...product} />
                ))
              ) : (
                <div className="text-darkGray2 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <RiFileList3Fill size={120} />
                    <h1 className="font-bold text-2xl">
                      Nenhum produto encontrado
                    </h1>
                    <p className="font-normal text-[1rem]">
                      Entre em contato com o suporte.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
