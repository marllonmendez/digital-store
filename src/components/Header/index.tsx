import React from 'react'
import { LuSearch, LuShoppingCart } from 'react-icons/lu'

import Logo from '@/components/Logo'
import Navigation from '@/components/Navigation'
import Button from '@/components/Button'

import logoHeader from '@/assets/logo-header.svg'

const Header: React.FC = () => {
  return (
    <>
      <header className="flex bg-white shadow-2xl px-24 py-10 gap-8 justify-around">
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
                  <LuSearch size={20} className="text-darkGray3" />
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
            <Button
              label="Cadastre-se"
              className="bg-none font-normal w-28 h-10 text-darkGray2 hover:text-primary ease-in transition-all duration-300"
            />
            <Button
              label="Entrar"
              className="bg-primary font-bold w-28 h-10 text-white hover:bg-tertiary ease-in transition-all duration-300"
            />
            <LuShoppingCart size={20} />
          </div>
        </section>
      </header>
    </>
  )
}

export default Header
