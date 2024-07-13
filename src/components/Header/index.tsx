import React from 'react'
import { Search, ShoppingCart } from 'lucide-react'

import Logo from '@/components/Logo'
import Navigation from '@/components/Navigation'

import logoHeader from '@/assets/logo-header.svg'

const Header = () => {
  return (
    <>
      <header className="flex w-auto h-[192px] items-center justify-center bg-white shadow-2xl">
        <div className="flex py-10 gap-8">
          <section>
            <div className="flex items-center justify-center gap-8">
              <Logo
                image={logoHeader}
                description="Logo"
                className="h-[44px] w-[253px]"
              />
              <form className="relative">
                <div className="flex items-center justify-center">
                  <input
                    type="text"
                    placeholder="Pesquisar produto..."
                    className="font-normal text-[1rem] p-2 pl-5 w-[780px] h-[60px] rounded-[8px] text-darkGray2 bg-lightGray3"
                  />
                  <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2">
                    <Search className="text-darkGray3" />
                  </button>
                </div>
              </form>
            </div>
            <div className="flex items-center">
              <Navigation label="Home" page="/" className="mr-4" />
              <Navigation label="Produtos" page="/Home" className="mx-4" />
              <Navigation label="Categorias" page="/Home" className="mx-4" />
              <Navigation label="Meus Pedidos" page="/Home" className="ml-4" />
            </div>
          </section>
          <section>
            <div className="flex items-center justify-center gap-8 p-2 w-auto h-[60px]">
              <button className="bg-none px-2 font-normal w-28 h-10 rounded-[8px] text-darkGray2 hover:text-primary ease-in transition-all duration-300">
                Cadastre-se
              </button>
              <button className="bg-primary px-2 font-bold w-28 h-10 rounded-[8px] text-white text-[1rem] hover:bg-tertiary">
                Entrar
              </button>
              <ShoppingCart />
            </div>
          </section>
        </div>
      </header>
    </>
  )
}

export default Header
