import React from 'react'

import { IFilterGroup } from '@/interface'
import { ProductCategory, ProductGender, ProductSession, Sneaker } from '@/enum'

import FilterGroup from '@/components/FilterGroup'

const FilterCard: React.FC = () => {
  const tagOptions: IFilterGroup['options'] = [
    { label: Sneaker.ADIDAS, value: Sneaker.ADIDAS },
    { label: Sneaker.NIKE, value: Sneaker.NIKE },
    { label: Sneaker.PUMA, value: Sneaker.PUMA },
  ]

  const categoryOptions: IFilterGroup['options'] = [
    { label: ProductCategory.SPORT, value: ProductCategory.SPORT },
    { label: ProductCategory.CASUAL, value: ProductCategory.CASUAL },
    { label: ProductCategory.UTILITY, value: ProductCategory.UTILITY },
  ]

  const genderOptions: IFilterGroup['options'] = [
    { label: ProductGender.MALE, value: ProductGender.MALE },
    { label: ProductGender.FEMALE, value: ProductGender.FEMALE },
    { label: ProductGender.UNISEX, value: ProductGender.UNISEX },
  ]

  const sectionOptions: IFilterGroup['options'] = [
    { label: ProductSession.ADULT, value: ProductSession.ADULT },
    { label: ProductSession.CHILD, value: ProductSession.CHILD },
  ]

  return (
    <>
      <div className="flex flex-col w-[308px] h-[720px] rounded bg-white">
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
            options={tagOptions}
          />
          <FilterGroup
            title="Categoria"
            inputType="checkbox"
            options={categoryOptions}
          />
          <FilterGroup
            title="Gênero"
            inputType="checkbox"
            options={genderOptions}
          />
          <FilterGroup
            title="Sessão"
            inputType="radio"
            options={sectionOptions}
          />
        </div>
      </div>
    </>
  )
}

export default FilterCard
