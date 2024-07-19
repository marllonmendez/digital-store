import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import { IconType } from 'react-icons'

import { ProductCategory, ProductGender, ProductSession, Sneaker } from '@/enum'

export interface ILayout {
  children?: ReactNode
}

export interface ILogo {
  image: any
  description: string
  className?: string
}

export interface ISection {
  title: string
  titleAlign: 'text-center' | 'text-left'
  className?: string
  children?: ReactNode
  button?: boolean
}

export interface INavigation {
  title: string
  page: string
  className?: string
  onClick?: () => void
}

export interface IButton {
  label: string
  onClick?: () => void
  className?: string
  icon?: IconType
}

export interface IGalley {
  className?: string
  images?: string[]
}

export interface IItemsFooter {
  title: string
  items: string[]
  className?: string
}

export interface IDiscount {
  discountOffer?: number
  className?: string
}

export interface IPopularCard {
  title: string
  discount: number
  image: {
    src: string
    alt: string
  }
}

export interface ICategoryCard {
  title: string
  icon: IconType
}

export interface IOfferCard {
  title: {
    label: string
    style: string
  }
  subtitle: {
    label: string
    style: string
  }
  button: {
    label: string
    style: string
  }
  description: {
    label: string
    style: string
  }
  className?: string
}

export interface IFilterGroup {
  title: string
  inputType: 'checkbox' | 'radio'
  options: {
    label: string
    value: string
  }[]
  onChange: (value: string | string[]) => void
}

export interface IProductCard {
  type: string
  session?: ProductSession
  category?: ProductCategory
  brand?: Sneaker
  gender?: ProductGender
  title: string
  price: number
  discount?: number
  image: {
    src: string
    style?: string
  }
}

export interface IProductContext {
  products: IProductCard[]
  setProducts: Dispatch<SetStateAction<IProductCard[]>>
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  quantityTotal?: number
  setQuantityTotal?: Dispatch<SetStateAction<number>>
  filters: {
    session: ProductSession[]
    category: ProductCategory[]
    brand: Sneaker[]
    gender: ProductGender[]
  }
  setFilters: Dispatch<SetStateAction<IProductContext['filters']>>
}

export interface IProductProvider {
  children: React.ReactNode
}
