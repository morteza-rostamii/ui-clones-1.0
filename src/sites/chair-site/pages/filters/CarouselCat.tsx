'use client'

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
//import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { TCategory, fetchCategories } from '../../data/DataChair';
import Image from 'next/image';
import { IconButton } from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function CarouselCat() {
  const [categories, setCategories] = useState<TCategory[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: TCategory[] = await fetchCategories(); 
        setCategories(data);
      } catch(error: any) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [])

  return (
    <div
    className='
    relative
    '
    >

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        loop={true}
        //navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"

        navigation={{
          nextEl: '.custom--next',
          prevEl: '.custom--prev',
          disabledClass: ".swiper-button-disabled",
        }}
      >
        {
          categories && categories.length
          ?(
            categories.map((el: TCategory) => (
            <SwiperSlide 
            className=''
            key={el.id}>
              <CardCat 
              item={el}
              />
            </SwiperSlide>
            ))
          ): ''
        }
      </Swiper>

      {/* custom buttons */}
      <div 
      className='
      absolute top-[50%] left-0 right-0 z-[5]
      flex items-center justify-between h-0
      '
      >
        <IconButton
        className='
        custom--next swiper-button-disabled 
        '
        variant={'outline'}
        isRound={true}
        colorScheme='red'
        //bgColor={''}
        aria-label=''
        icon={<HiChevronRight size={24}/>}
        >
        </IconButton>
        <IconButton
        className='
        custom--prev swiper-button-disabled 
        '
        variant={'outline'}
        isRound={true}
        colorScheme='red'
        aria-label=''
        icon={<HiChevronLeft size={24}/>}
        >
        </IconButton>
      </div>
    </div>
  );
}

// ************
const CardCat = ({
  item,
}: {
  item: TCategory,
}) => {
  return (
    <div>
      <div
      className='
      relative #aspect-[1/1] rounded-full overflow-hidden
      w-24 h-24 mx-auto mb-4
      '
      >
        <Image
        className='
        w-full
        '
        src={item.image}
        alt={item.name}
        fill
        />
      </div>
      <div
      className='text-center w-full text-gray-600'
      >
        {item.name}
      </div>
    </div>
  )
}
