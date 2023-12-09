'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import CardSpecial from './CardSpecial';

function CarouselSpecial({
  products,
}: any) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 50,
          }
        }}
      >
        {
          products && products.length
          ?(
            products.map((el: any, ) => (
            <SwiperSlide 
            key={el.id}
            >
              <CardSpecial 
              key={el.id}
              item={el}
              />
            </SwiperSlide>
            ))
          ): ''
        }
      </Swiper>
    </>
  );
}

export default CarouselSpecial