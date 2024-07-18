import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import { IGalley } from '@/interface'

const Gallery: React.FC<IGalley> = ({ className, images }) => {
  return (
    <div className={`${className}`}>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <img className="w-full h-full" src={image} alt="Slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Gallery
