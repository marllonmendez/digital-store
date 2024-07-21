import React from 'react'

import { useProductsContext } from '@/context/useProductContext'
import {
  ProductCategory,
  ProductGender,
  ProductSession,
  SneakerBrand,
} from '@/enum'

import FilterGroup from '@/components/FilterGroup'

const FilterCard: React.FC = () => {
  const { setFilters } = useProductsContext()

  const handleFilterChange = (
    filterType: string,
    values: string | string[],
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: values,
    }))
  }

  const sneakerOptions = [
    { label: SneakerBrand.ADIDAS, value: SneakerBrand.ADIDAS },
    { label: SneakerBrand.NIKE, value: SneakerBrand.NIKE },
  ]

  const productCategoryOptions = [
    { label: ProductCategory.SPORT, value: ProductCategory.SPORT },
    { label: ProductCategory.CASUAL, value: ProductCategory.CASUAL },
  ]

  const productGenderOptions = [
    { label: ProductGender.MALE, value: ProductGender.MALE },
    { label: ProductGender.FEMALE, value: ProductGender.FEMALE },
    { label: ProductGender.UNISEX, value: ProductGender.UNISEX },
  ]

  const productSessionOptions = [
    { label: ProductSession.ADULT, value: ProductSession.ADULT },
    { label: ProductSession.CHILD, value: ProductSession.CHILD },
  ]

  return (
    <div className="flex flex-col w-[308px] h-[530px] rounded bg-white">
      <div className="flex flex-col justify-center">
        <h1 className="text-darkGray2 font-bold text-[1rem] pt-8 pl-8">
          Filtrar por
        </h1>
        <div className="flex items-center justify-center">
          <span className="border border-lightGray2 border-solid w-[248px] my-5"></span>
        </div>
        <div className="flex flex-col gap-5">
          <FilterGroup
            title="Marca"
            inputType="checkbox"
            options={sneakerOptions}
            onChange={(values) => handleFilterChange('brand', values)}
          />
          <FilterGroup
            title="Categoria"
            inputType="checkbox"
            options={productCategoryOptions}
            onChange={(values) => handleFilterChange('category', values)}
          />
          <FilterGroup
            title="Gênero"
            inputType="checkbox"
            options={productGenderOptions}
            onChange={(values) => handleFilterChange('gender', values)}
          />
          <FilterGroup
            title="Sessão"
            inputType="radio"
            options={productSessionOptions}
            onChange={(value) => handleFilterChange('session', value)}
          />
        </div>
      </div>
    </div>
  )
}

export default FilterCard
