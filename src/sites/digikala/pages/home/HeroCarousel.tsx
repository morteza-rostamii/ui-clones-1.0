'use client'

import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const banners = [
  '/digikala/hero/16b98592c28b78718abd8d6554cffc5fa265c8eb_1701418129.webp',
  '/digikala/hero/650d085ebaaee5ab7be25133d2d0147cfdb06b65_1702384730.webp',
  '/digikala/hero/16b98592c28b78718abd8d6554cffc5fa265c8eb_1701418129.webp',
  '/digikala/hero/c42f23237eb09ddcb9bb20c6bf7cebfc177f4d78_1675544136.webp',
  '/digikala/hero/e0e6abfc044a0f6e5a5b3148cca39dc98e266a4f_1702368852.webp',
  '/digikala/hero/e8a20c5ef93963f3afcbbb773dd00e508c1df624_1702204057.webp',
];

const HeroCarousel: React.FC = () => {
  /* const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  }; */

  return (
    <Carousel 
    autoplay
    //afterChange={onChange}
    >
      {
        banners.map((el: any, i) => (
          <div 
          className='
          relative 
          aspect-[1/.4]
          md:aspect-[1/.3]
          '
          key={i}>
            <Image
            className='
            object-cover w-full 
            object-[70%]
            lg:object-center
            '
            /* style={{
              objectPosition: '70%'
            }} */
            src={el}
            alt='hero-banner'
            fill
            />
          </div>
        ))
      }  
    </Carousel>
  );
};

export default HeroCarousel;