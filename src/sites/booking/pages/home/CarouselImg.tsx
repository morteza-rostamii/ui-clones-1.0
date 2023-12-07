import React, { useRef } from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import { Button, IconButton } from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const CarouselImg: React.FC = ({
  images,
}:any) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const carouselRef = useRef(null);

  const goNext = () => {
    carouselRef.current.next();
  }

  const goBack = () => {
    carouselRef.current.prev();
  }

  return (
    <div className='relative group rounded-lg overflow-hidden mb-5'>
      <Carousel 
      ref={carouselRef}
      afterChange={onChange}>
        {
          images.map((el:any, i:number) => (
            <div
            key={i}
            className='
            relative
            w-full aspect-[1/1]
            '
            >
              <Image
              className='
              object-cover w-full
              '
              src={el}
              alt='card-image'
              fill
              />
            </div>
          ))
        }
      </Carousel>

      {/* overlay carousel buttons */}
      <div
      className='
      hidden
      absolute top-[50%] translate-y-[-50%] bg-white h-0 
      left-5 right-5
      group-hover:flex items-center justify-between
      '
      >
        <IconButton
        aria-label=''
        size={'sm'}
        isRound={true}
        icon={<HiChevronLeft />}
        onClick={() => goBack()}
        >
          back
        </IconButton>
        <IconButton
        aria-label=''
        size={'sm'}
        isRound={true}
        icon={<HiChevronRight />}
        onClick={() => goNext()}
        >
          next
        </IconButton>
      </div>
    </div>
  );
};

export default CarouselImg;