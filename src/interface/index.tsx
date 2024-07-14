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

export interface IButton {
  label: string
  onClick?: () => void
  className?: string
}
