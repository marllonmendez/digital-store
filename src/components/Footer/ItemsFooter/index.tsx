import React from 'react'

import { IItemsFooter } from '@/interface'

const ItemsFooter: React.FC<IItemsFooter> = ({ title, items, className }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-white text[18px] mb-7">{title}</h2>
        {items.map((item, index) => (
          <span
            key={index}
            className={`font-normal text-white text-[1rem] ${className}`}
          >
            {item}
          </span>
        ))}
      </div>
    </>
  )
}

export default ItemsFooter
