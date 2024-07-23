import React, { useMemo } from 'react'
import { RiFileList3Fill } from 'react-icons/ri'
import { motion } from 'framer-motion'

import { Products } from '@/mock'
import { ProductOrder } from '@/enum'
import { IProductCard } from '@/interface'
import { DiscountPrice } from '@/utils/Price/DiscountPrice'
import { useProductsContext } from '@/context/useProductContext'

import FilterCard from '@/components/FilterCard'
import OrderCard from '@/components/OrderCard'
import ProductListing from '@/components/ProductListing'

export const ProductListingPage = () => {
  const { search, filters, order } = useProductsContext()

  const products = useMemo(() => {
    // Filtragem
    const filterProducts = Products.filter(
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

    // Ordenação
    switch (order[0]?.value) {
      case ProductOrder.LOWPRICE:
        filterProducts.sort((a, b) => {
          const lowPriceA = DiscountPrice(a.price, a.discount!)
          const lowPriceB = DiscountPrice(b.price, b.discount!)
          return lowPriceA - lowPriceB
        })
        break
      case ProductOrder.HIGHPRICE:
        filterProducts.sort((a, b) => {
          const lowPriceA = DiscountPrice(a.price, a.discount!)
          const lowPriceB = DiscountPrice(b.price, b.discount!)
          return lowPriceB - lowPriceA
        })
        break
    }

    return filterProducts
  }, [search, filters, order])

  const isSearch = search.trim().length > 0
  const isProduct = products.length > 0

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
              {products.length} {products.length !== 1 ? 'produtos' : 'produto'}
            </span>
          </h2>
        )}
        <div className="flex justify-end w-full">
          {isProduct && <OrderCard />}
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex w-full h-full justify-between">
          <div className="flex justify-center">
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
                <ProductListing products={products} />
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
