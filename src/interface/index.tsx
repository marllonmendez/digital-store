import React from 'react'

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
