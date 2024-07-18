import { IProductCard } from '@/interface'
import { ProductSession } from '@/enum'

export const products: IProductCard[] = [
  {
    type: 'xuxu',
    session: ProductSession.ADULT,
    title: "Air Jordan 11 Retro Low 'Pink Snakeskin'",
    price: 1499.99,
    discount: 30,
    image: {
      src: 'https://image.goat.com/attachments/product_template_pictures/images/021/357/907/original/478963_00.png.png',
      style: 'w-52 rotate-[-30deg]',
    },
  },
  {
    type: 'Tênis',
    session: ProductSession.ADULT,
    title: 'Air Jordan 11 Retro "Space Jam"',
    price: 2199.99,
    discount: 20,
    image: {
      src: 'https://image.goat.com/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png',
      style: 'w-52 rotate-[-30deg]',
    },
  },
  {
    type: 'Tênis',
    session: ProductSession.ADULT,
    title: "OFF-WHITE x Air Jordan 1 Retro High OG 'UNC'",
    price: 5490.99,
    discount: 30,
    image: {
      src: 'https://image.goat.com/attachments/product_template_pictures/images/012/219/518/original/335047_00.png.png',
      style: 'w-52 rotate-[-30deg]',
    },
  },
  {
    type: 'Tênis',
    session: ProductSession.ADULT,
    title: 'Picanha',
    price: 1499.99,
    discount: 30,
    image: {
      src: 'https://image.goat.com/attachments/product_template_pictures/images/021/357/907/original/478963_00.png.png',
      style: 'w-52 rotate-[-30deg]',
    },
  },
  {
    type: 'Tênis',
    session: ProductSession.ADULT,
    title: 'Pimenta',
    price: 2199.99,
    discount: 20,
    image: {
      src: 'https://image.goat.com/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png',
      style: 'w-52 rotate-[-30deg]',
    },
  },
  {
    type: 'Tênis',
    session: ProductSession.ADULT,
    title: 'Xuxu',
    price: 5490.99,
    discount: 30,
    image: {
      src: 'https://image.goat.com/attachments/product_template_pictures/images/012/219/518/original/335047_00.png.png',
      style: 'w-52 rotate-[-30deg]',
    },
  },
]
