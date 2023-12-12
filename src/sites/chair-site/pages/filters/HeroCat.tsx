import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiChevronRight } from 'react-icons/hi'
import CarouselCat from './CarouselCat'

const HeroCat = () => {
  return (
    <section
    className='
    mb-16
    '
    >
      <div
      className='
      relative
      container mx-auto #px-4 bg-green-50
      aspect-[1/.4]
      md:aspect-[1/.3]
      lg:aspect-[1/.25]  h-96
      '
      style={{
        backgroundImage: 'url("/chair-site/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
        {/* center div */}
        <div
        className='
        mb-10
        max-w-[60%]
        '

        // solved carousel probelem inside flex or absolute positioned parent.
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateY(-50%) translateX(-50%)',
          //width: '100%',
        }}
        >
          <div
          className='
          flex  flex-col items-center justify-center
          text-center mb-10
          '
          >
            <h1
            className='
            text-3xl text-gray-700 font-bold
            mb-4
            '
            >
              شاپ
            </h1>
            <div
            className='
            flex gap-2 items-center
            text-gray-600 font-light
            '
            >
              <Button
              variant={'link'}
              
              >
                شاپ
              </Button>
              <span>
              <HiChevronRight size={20}/>
              </span>
              <Button
              variant={'link'}
              >
                خانه
              </Button>
            </div>
          </div>

          {/* categories carousel */}
          <CarouselCat/>
        </div>
      </div>
    </section>
  )
}

export default HeroCat

{/* <div
        className='
        relative 
        #aspect-[1/.4]
        #aspect-[1/.21] h-60
        '
        >
          <Image
          className='block w-full h-60 object-contain #h-full object-center'
          src={'/chair-site/hero.jpg'}
          alt='categories-hero'
          fill
          />
        </div> */}