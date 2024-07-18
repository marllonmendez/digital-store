import React from 'react'

import { IFilterGroup } from '@/interface'
import { ProductCategory, ProductGender, ProductSession, Sneaker } from '@/enum'

import FilterGroup from '@/components/FilterGroup'

const FilterCard: React.FC = () => {
  const sneakerOptions: IFilterGroup['options'] = [
    { label: Sneaker.ADIDAS, value: Sneaker.ADIDAS },
    { label: Sneaker.NIKE, value: Sneaker.NIKE },
  ]

  const productCategoryOptions: IFilterGroup['options'] = [
    { label: ProductCategory.SPORT, value: ProductCategory.SPORT },
    { label: ProductCategory.CASUAL, value: ProductCategory.CASUAL },
  ]

  const productGenderOptions: IFilterGroup['options'] = [
    { label: ProductGender.MALE, value: ProductGender.MALE },
    { label: ProductGender.FEMALE, value: ProductGender.FEMALE },
    { label: ProductGender.UNISEX, value: ProductGender.UNISEX },
  ]

  const productSessionOptions: IFilterGroup['options'] = [
    { label: ProductSession.ADULT, value: ProductSession.ADULT },
    { label: ProductSession.CHILD, value: ProductSession.CHILD },
  ]

  return (
    <div className="flex flex-col w-[308px] h-[530px] rounded bg-white">
      <div className="flex flex-col justify-center">
        <h1 className="text-darkGray2 font-bold text-[1rem] pt-8 pl-8">
          Filtrar por
        </h1>
        <div className="flex items-center justify-center ">
          <span className="border border-lightGray2 border-solid w-[248px] my-5"></span>
        </div>
        <div className="flex flex-col gap-5">
          <FilterGroup
            title="Marca"
            inputType="checkbox"
            options={sneakerOptions}
          />
          <FilterGroup
            title="Categoria"
            inputType="checkbox"
            options={productCategoryOptions}
          />
          <FilterGroup
            title="Gênero"
            inputType="checkbox"
            options={productGenderOptions}
          />
          <FilterGroup
            title="Sessão"
            inputType="radio"
            options={productSessionOptions}
          />
        </div>
      </div>
    </div>
  )
}

export default FilterCard
