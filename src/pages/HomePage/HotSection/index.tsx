import React from 'react'

import Section from '@/components/Section'
import ProductCard from '@/components/ProductCard'
import { Session } from '@/enum'

export const HotSection = () => {
  return (
    <>
      <div className="flex items-center justify-center px-24 py-10 md:px-32">
        <Section
          title="Produtos em alta"
          titleAlign="text-left"
          className="grid grid-cols-4 gap-5"
          button={true}
        >
          <ProductCard
            type="Tênis"
            session={Session.Adulto}
            title="Air Jordan 1 Retro High OG 'Shadow'"
            price={699.99}
            discount={30}
            image={{
              src: 'https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png',
              style: 'w-52 rotate-[-30deg]',
            }}
          />
          <ProductCard
            type="Tênis"
            session={Session.Adulto}
            title="Air Jordan 11 Retro 'Space Jam'"
            price={2199.99}
            discount={20}
            image={{
              src: 'https://image.goat.com/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png',
              style: 'w-52 rotate-[-30deg]',
            }}
          />
          <ProductCard
            type="Tênis"
            session={Session.Adulto}
            title="OFF-WHITE x Air Jordan 1 Retro High OG 'UNC'"
            price={5490.99}
            discount={30}
            image={{
              src: 'https://image.goat.com/attachments/product_template_pictures/images/012/219/518/original/335047_00.png.png',
              style: 'w-52 rotate-[-30deg]',
            }}
          />
          <ProductCard
            type="Tênis"
            session={Session.Adulto}
            title="Travis Scott x Air Jordan 4 Retro 'Cactus Jack'"
            price={9999.99}
            discount={30}
            image={{
              src: 'https://image.goat.com/attachments/product_template_pictures/images/012/478/518/original/365514_00.png.png',
              style: 'w-52 rotate-[-30deg]',
            }}
          />
          <ProductCard
            type="Tênis"
            session={Session.Adulto}
            title="Air Jordan 1 Retro High OG 'Turbo Green'"
            price={999.99}
            image={{
              src: 'https://image.goat.com/attachments/product_template_pictures/images/018/552/901/original/404758_00.png.png',
              style: 'w-52 rotate-[-30deg]',
            }}
          />
          <ProductCard
            type="Tênis"
            session={Session.Adulto}
            title="Air Jordan 1 Retro High OG 'Crimson Tint'"
            price={999.99}
            image={{
              src: 'https://image.goat.com/attachments/product_template_pictures/images/020/249/059/original/485842_00.png.png',
              style: 'w-52 rotate-[-30deg]',
            }}
          />
          <ProductCard
            type="Tênis"
            session={Session.Adulto}
            title="Air Jordan 1 Retro High SB 'Lakers'"
            price={999.99}
            image={{
              src: 'https://image.goat.com/attachments/product_template_pictures/images/020/270/533/original/CD6578_507.png.png',
              style: 'w-52 rotate-[-30deg]',
            }}
          />
          <ProductCard
            type="Tênis"
            session={Session.Adulto}
            title="Air Jordan 1 Retro High OG 'Origin Story'"
            price={999.99}
            image={{
              src: 'https://image.goat.com/attachments/product_template_pictures/images/016/867/969/original/478648_00.png.png',
              style: 'w-52 rotate-[-30deg]',
            }}
          />
        </Section>
      </div>
    </>
  )
}
