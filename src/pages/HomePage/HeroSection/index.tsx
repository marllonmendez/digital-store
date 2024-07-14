import React from 'react'

import Ornament from '@/assets/ornament.png'
import whiteSneaker from '@/assets/white-sneaker.png'
import Button from '@/components/Button'

export const HeroSection = () => {
  return (
    <>
      <section className="flex items-center justify-center px-24 py-5">
        <img
          src={Ornament}
          alt="Imagem ornamento, particulas brilhantes"
          className="h-36 w-36 absolute right-10 top-80 -translate-y-1/2"
        />
        <div className="flex flex-col w-1/2">
          <h2 className="text-warning font-bold text-[1rem]">
            Melhores ofertas personalizadas
          </h2>
          <h1 className="text-6xl text-darkGray font-extrabold py-4">
            Queima de <br /> estoque Nike
            <span role="img" aria-label="fire">
              🔥
            </span>
          </h1>
          <p className="flex flex-wrap text-darkGray2 mb-8">
            Consequat culpa exercitation mollit nisi excepteur do do tempor
            laboris eiusmod irure consectetur.
          </p>
          <Button
            label="Ver Ofertas"
            className="bg-primary font-bold w-52 h-12 text-white hover:bg-tertiary ease-in transition-all duration-300"
          />
        </div>

        <div className="flex w-1/2">
          <img src={whiteSneaker} alt="Nike AIR" className="w-full h-auto" />
        </div>
      </section>
    </>
  )
}
