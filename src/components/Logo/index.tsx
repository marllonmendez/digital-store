import React from 'react'

import { ILogo } from '@/interface'

const Logo: React.FC<ILogo> = ({ image, description, className }) => {
  return (
    <>
      <div className="flex gap-2">
        <img src={image} alt={description} className={`${className}`} />
      </div>
    </>
  )
}

export default Logo
