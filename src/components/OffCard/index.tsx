import React from 'react'

import { IPopularCard } from '@/interface'
import Button from '@/components/Button'

const OffCard: React.FC<IPopularCard> = ({ label, discount, img }) => {
  return (
    <>
      <div className="group bg-productBlue p-4 rounded relative w-96 h-64 overflow-hidden">
        <img
          src={img.src}
          alt={img.alt}
          className="h-52 md:h-64 rounded-md z-0 absolute right-0 bottom-0 group-hover:rotate-6 group-hover:scale-125 transition-all"
        />
        <div className="mt-4 z-10 relative max-w-44">
          <span className="flex items-center justify-center bg-productOff text-darkGray2 font-bold rounded-full mb-4 w-24 h-8 ">
            {discount}
          </span>
          <h2 className="text-3xl text-darkGray font-bold mt-2">{label}</h2>
          <Button
            label="Comprar"
            className="bg-lightGray3 font-bold w-36 h-auto py-2 px-4 mt-4 rounded text-primary hover:text-tertiary ease-in transition-all duration-300"
          />
        </div>
      </div>
    </>
  )
}

export default OffCard
