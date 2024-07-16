import React from 'react'
import {
  PiTShirtThin,
  PiPantsThin,
  PiBaseballCapThin,
  PiHeadphonesThin,
  PiSneakerThin,
} from 'react-icons/pi'

import OffCard from '@/components/OffCard'
import CategoryCard from '@/components/CategoryCard'

import dropSupreme from '@/assets/drop-supreme.png'
import dropAdidas from '@/assets/drop-adidas.png'
import dropBass from '@/assets/drop-bass.png'

export const CollectionSection = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center px-24 py-10 md:px-32">
        <div>
          <h2 className="text-2xl text-darkGray2 font-bold mb-7">
            Coleções em destaque
          </h2>
          <div className="flex gap-4">
            <OffCard
              label="Novo drop Supreme"
              discount="30% OFF"
              img={{
                src: dropSupreme,
                alt: 'Drop Supreme',
              }}
            />
            <OffCard
              label="Coleção Adidas"
              discount="30% OFF"
              img={{
                src: dropAdidas,
                alt: 'Drop Adidas',
              }}
            />
            <OffCard
              label="Novo Beats Bass"
              discount="30% OFF"
              img={{
                src: dropBass,
                alt: 'Drop Bass',
              }}
            />
          </div>
        </div>
        <div>
          <h2 className="flex items-center justify-center text-2xl text-darkGray2 font-bold mt-28 mb-7">
            Coleções em destaque
          </h2>
          <div className="flex gap-4">
            <CategoryCard label="Camisetas" icon={PiTShirtThin} />
            <CategoryCard label="Calças" icon={PiPantsThin} />
            <CategoryCard label="Bonés" icon={PiBaseballCapThin} />
            <CategoryCard label="Headphones" icon={PiHeadphonesThin} />
            <CategoryCard label="Tênis" icon={PiSneakerThin} />
          </div>
        </div>
      </section>
    </>
  )
}
