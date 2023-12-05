import Image from 'next/image'
import React, { useState } from 'react'
//import headSlider from '@/assets/virgool/images/headSlider.png'
//import { Skeleton } from 'antd';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Hero = () => {
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);

  console.log(isBannerLoaded)
  return (
    <section
    className='
    '
    >
      <div
      className='
      relative
      container mx-auto
      '
      >
        <div
        className='
        relative
        '
        style={{
          aspectRatio: '3/1.1',
        }}
        >
          {
          !isBannerLoaded && (
            <Skeleton
            style={{
              height: '100%'
            }}
            />
          )
          }
          <Image
          className='
          transition-all ease-in-out
          '
          src={'/virgool/headSlider.png'}
          alt='hero-banner'
          //sizes='100vw'
          fill
          style={{
            display: isBannerLoaded ? 'block' : 'hidden',
            opacity: isBannerLoaded ? 1 : 0, 
            width: '100%',
            objectFit: 'cover',
          }}

          onLoad={() => setIsBannerLoaded(true)}
          onError={() => setIsBannerLoaded(false)}
          />
        </div>
        {/* overlay */}
        <div
        className='
        absolute top-0 bottom-0 left-0 right-0
        flex flex-col justify-between cursor-pointer
        bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100
        '
        >  
        </div>
      </div>
    </section>
  )
}

export default Hero