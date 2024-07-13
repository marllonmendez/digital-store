import React from 'react'

// import Ornament from '@/assets/Ornament.png'
import whiteSneaker from '@/assets/white-sneaker.png'

export const ShowroomOffers = () => {
  return (
    <>
      <section className="flex items-center justify-center p-5">
        {/*<img*/}
        {/*  src={Ornament}*/}
        {/*  alt="Imagem ornamento, particulas brilhantes"*/}
        {/*  className="h-36 w-36 absolute right-0 transform translate-x-1/2"*/}
        {/*/>*/}
        <div className="md:w-1/2">
          <span className="text-warning font-bold mb-2 text-[1rem]">
            Melhores ofertas personalizadas
          </span>
          <h1 className="text-4xl font-bold mb-4">
            Queima de estoque Nike{' '}
            <span role="img" aria-label="fire">
              🔥
            </span>
          </h1>
          <p className="text-gray-600 mb-8">
            Consequat culpa exercitation mollit nisi excepteur do do tempor
            laboris eiusmod irure consectetur.
          </p>
          <button className="text-white px-8 py-3 w-full">Ver Ofertas</button>
        </div>

        <div className="md:w-1/2">
          <img src={whiteSneaker} alt="Nike AIR" className="w-full h-auto" />
        </div>
      </section>
    </>
  )
}
