'use client'

import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const banners = [
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/4219319041cc0bbccddbaaaf48610cd78d484d18_1701698365.jpg?x-oss-process=image/quality,q_95/format,webp',
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/cc940dcfee2ebf78c0857a4a14bb77c3b61fb4c6_1701989326.jpg?x-oss-process=image/quality,q_95/format,webp',
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/68a466fc8b4e6ede25be9b79e083934f18f37027_1699336559.jpg?x-oss-process=image/quality,q_95/format,webp',
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/a210d0d70c138d819951b9482b1ebc29256110af_1701781786.jpg?x-oss-process=image/quality,q_95/format,webp',
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/a77141cd190e6e760288cd99856c0e266d3157b4_1696861753.jpg?x-oss-process=image/quality,q_95/format,webp',
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/b3cbfdf304548520a83b0c9e34c4f3ede933c998_1701702194.jpg?x-oss-process=image/quality,q_95/format,webp',
];

const HeroCarousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel 
    autoplay
    afterChange={onChange}>
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