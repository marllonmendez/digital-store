import React from 'react'
import { IconType } from 'react-icons'

import { Session } from '@/enum'

export interface ILayout {
  children?: React.ReactNode
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
  children?: React.ReactNode
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

export interface IProductCard {
  type: string
  session: Session
  title: string
  price: number
  discount?: number
  image: {
    src: string
    style?: string
  }
}
