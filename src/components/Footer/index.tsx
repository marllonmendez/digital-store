import React from 'react'
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'

import Logo from '@/components/Logo'

import logoFooter from '@/assets/logo-footer.svg'

const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex flex-col bg-darkGray px-24 pt-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-5 w-[400px]">
            <Logo image={logoFooter} description="Logo" />
            <p className="font-normal text-white text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex gap-5 text-white">
              <a
                href="https://www.facebook.com/digitalcollegebr"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/digitalcollegebr/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://x.com/eaicollegers"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
          <div className="flex justify-between gap-28">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-white text[18px] mb-7">
                Informações
              </h2>
              <span className="font-normal text-white text-[1rem]">
                Sobre Drip Store
              </span>
              <span className="font-normal text-white text-[1rem]">
                Segurança
              </span>
              <span className="font-normal text-white text-[1rem]">
                Wishlist
              </span>
              <span className="font-normal text-white text-[1rem]">Blog</span>
              <span className="font-normal text-white text-[1rem]">
                Trabalhe conosco
              </span>
              <span className="font-normal text-white text-[1rem]">
                Meus Pedidos
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-white text[18px] mb-7">
                Categorias
              </h2>
              <span className="font-normal text-white text-[1rem]">
                Camisetas
              </span>
              <span className="font-normal text-white text-[1rem]">Calças</span>
              <span className="font-normal text-white text-[1rem]">Bonés</span>
              <span className="font-normal text-white text-[1rem]">
                Headphones
              </span>
              <span className="font-normal text-white text-[1rem]">Tênis</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-white text[18px] mb-7">
                Contato
              </h2>
              <span className="font-normal text-white text-[1rem] w-[230px] h-[78px]">
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </span>
              <span className="font-normal text-white text-[1rem]">
                (85) 3051-3411
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 pt-10 pb-5">
          <span className="border border-darkGray3 border-solid w-full bottom-[128px]"></span>
          <p className="font-normal text-[13px] text-white">
            &copy; 2024 Digital College
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
