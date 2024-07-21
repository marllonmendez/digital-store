import React, { useMemo } from 'react'
import { RiFileList3Fill } from 'react-icons/ri'
import { motion } from 'framer-motion'

import { Products } from '@/mock'
import { ProductOrder } from '@/enum'
import { IProductCard } from '@/interface'
import { useProductsContext } from '@/context/useProductContext'

import FilterCard from '@/components/FilterCard'
import ProductCard from '@/components/ProductCard'
import OrderCard from '@/components/OrderCard'

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

  const orderOptions = useMemo(() => {
    return Object.entries(ProductOrder).map(([key, value]) => ({
      label: value,
      value: key,
      rating: 'Ordenar Por:',
    }))
  }, [])

  const isSearch = search.trim().length > 0
  const isProduct = filterProducts.length > 0

  return (
    <section className="flex flex-col items-center justify-center px-24 md:px-32">
      <div className="flex items-center justify-center w-full h-full my-10">
        {isSearch && (
          <h2 className="text-darkGray2 text-[1rem] w-full">
            <span className="font-bold">
              Resultados para &quot;{search}&quot; -
            </span>
            <span className="font-normal">
              {' '}
              {filterProducts.length}{' '}
              {filterProducts.length !== 1 ? 'produtos' : 'produto'}
            </span>
          </h2>
        )}
        <div className="flex justify-end w-full">
          {isProduct && <OrderCard options={orderOptions} />}
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex w-full h-full justify-between">
          <div className="flex w-auto h-auto">
            <FilterCard />
          </div>
          <div className="flex flex-col w-full">
            <div
              className={`${
                isProduct
                  ? 'flex flex-wrap items-center justify-end gap-5 w-full'
                  : 'flex flex-grow items-center justify-center w-full h-full'
              }`}
            >
              {isProduct ? (
                filterProducts.map((product: IProductCard) => (
                  <ProductCard key={product.id} {...product} />
                ))
              ) : (
                <motion.div
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="flex items-center justify-center text-darkGray2 text-center w-full h-full"
                >
                  <div className="flex flex-col items-center justify-center">
                    <RiFileList3Fill size={120} />
                    <h1 className="font-bold text-2xl">
                      Nenhum produto encontrado
                    </h1>
                    <p className="font-normal text-[1rem]">
                      Entre em contato com o suporte.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductListingPage
