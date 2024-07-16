import React from 'react'
import { IconType } from 'react-icons'

export interface ILayout {
  children?: React.ReactNode
}

export interface ILogo {
  image: any
  description: string
  className?: string
}

export interface INavigation {
  label: string
  page: string
  className?: string
  onClick?: () => void
}

export interface IButton {
  label: string
  onClick?: () => void
  className?: string
}

export interface IGalley {
  className?: string
  images?: string[]
}

export interface IItemsFooter {
  label: string
  items: string[]
  className?: string
}

export interface IPopularCard {
  label: string
  discount: string
  img: {
    src: string
    alt: string
  }
}

export interface ICategoryCard {
  label: string
  icon: IconType
}
