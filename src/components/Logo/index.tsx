import React from 'react'

import { ILogo } from '@/interface'

const Logo = ({ image, description, className }: ILogo) => {
  return (
    <>
      <div className="flex gap-2">
        <img src={image} alt={description} className={`${className}`} />
      </div>
    </>
  )
}

export default Logo
