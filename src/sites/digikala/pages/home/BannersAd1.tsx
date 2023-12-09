'use client'

import Image from 'next/image'
import React from 'react'

const bannerUrls = [
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/0759efe648d224a9e15891f242ee5b3fd77bae8f_1702103348.jpg?x-oss-process=image/quality,q_95/format,webp',
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/bc2a2ab35baf18247b0769cc08e1c4bde4fb3534_1702100787.jpg?x-oss-process=image/quality,q_95/format,webp',
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/cbde2f4d9424b696a1987cc9d7f33675634568da_1701864906.jpg?x-oss-process=image/quality,q_95/format,webp',
  'https://dkstatics-public.digikala.com/digikala-adservice-banners/98595c5c87356705ff388ae9e785114670a35055_1701863725.jpg?x-oss-process=image/quality,q_95/format,webp',
]

const BannersAd1 = () => {
  return (
    <section
    className='
    mb-20
    '
    >
      <div
      className='
      grid-banners
      container mx-auto px-4      
      cursor-pointer
      '
      >
        {
          bannerUrls.map((el: any, i: number) => (
            <div
            className='
            relative aspect-[1/.7] rounded-lg overflow-hidden #bg-red-50
            '
            >
              <Image
              className='
              #object-contain w-full rounded-lg 
              '
              src={el}
              alt='banner-ad'
              fill
              />

              {/* overlay */}
              <div
              className='
              absolute top-0 bottom-0 left-0 right-0
              bg-gray-800 bg-opacity-0 
              hover:bg-opacity-5
              '
              >
              </div>
            </div>
          ))
        }
      </div>

      {/* style */}
      <style jsx>
        {`
        .grid-banners {
          display: grid !important;
          gap: 10px;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
        
        `}
      </style>
    </section>
  )
}

export default BannersAd1