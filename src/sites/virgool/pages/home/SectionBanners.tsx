'use client'

import Image from 'next/image'
import React from 'react'

const SectionBanners = () => {
  return (
    <section>
      <div
      className='
      container mx-auto
      p-6 
      '
      >
        {/* header */}
        <div
        className='
        flex justify-end items-center py-3
        '
        >
          <h2
          className='
          font-bold text-lg
          '
          >
            لوازم هنری و معماری
          </h2>
        </div>
        <div
        className='
        grid-banners
        '
        >
          <a 
          className='
          item-1 relative
          block rounded-md overflow-hidden
          '
          href="#">
            <div
            className='
            relative w-full h-full
            '
            style={{
              aspectRatio: '1/1',
            }}
            >
              <Image
              src={'/virgool/banners/Rectangle 188.png'}
              alt='hero-banner'
              //sizes='100vw'
              fill
              style={{
                width: '100%',
                objectFit: 'cover',
              }}
              />
            </div>
            
            <div
            className='
            absolute top-0 bottom-0 left-0 right-0
            flex flex-col justify-between cursor-pointer
            bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100
            '
            >  
            </div>
          </a>

          <a 
          className='
          item-2 block rounded-md overflow-hidden relative
          '
          href="#">
            <div
            className='
            relative w-full h-full
            '
            style={{
              aspectRatio: '1/1',
            }}
            >
              <Image
              src={'/virgool/banners/Rectangle 187.png'}
              alt='hero-banner'
              //sizes='100vw'
              fill
              style={{
                width: '100%',
                objectFit: 'cover',
              }}
              />
            </div>
            <div
            className='
            absolute top-0 bottom-0 left-0 right-0
            flex flex-col justify-between cursor-pointer
            bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100
            '
            >  
            </div>
          </a>

          <a 
          className='
          item-3 block rounded-md overflow-hidden relative
          '
          href="#">
            <div
            className='
            relative w-full h-full
            '
            style={{
              aspectRatio: '1/1',
            }}
            >
              <Image
              src={'/virgool/banners/Rectangle 138.png'}
              alt='hero-banner'
              //sizes='100vw'
              fill
              style={{
                width: '100%',
                objectFit: 'cover',
              }}
              />
            </div>
            <div
            className='
            absolute top-0 bottom-0 left-0 right-0
            flex flex-col justify-between cursor-pointer
            bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100
            '
            >  
            </div>
          </a>
          <a 
          className='
          item-4 block rounded-md overflow-hidden relative
          '
          href="#">
            <div
            className='
            relative w-full h-full
            '
            style={{
              aspectRatio: '1/1',
            }}
            >
              <Image
              src={'/virgool/banners/Rectangle 137.png'}
              alt='hero-banner'
              //sizes='100vw'
              fill
              style={{
                width: '100%',
                objectFit: 'cover',
              }}
              />
            </div>
            <div
            className='
            absolute top-0 bottom-0 left-0 right-0
            flex flex-col justify-between cursor-pointer
            bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100
            '
            >  
            </div>
          </a>
        </div>
      </div>

      <style jsx>{css}</style>
    </section>
  )
}

// style
const css = `
.grid-banners {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 10px;

  grid-template-areas: 
    "item-1"
    "item-2"
    "item-3"
    "item-4"
}

.item-1 {
  grid-area: item-1;
}
.item-2 {
  grid-area: item-2;
}
.item-3 {
  grid-area: item-3;
}
.item-4 {
  grid-area: item-4;
}

@media (min-width: 1024px) {
  .grid-banners {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 200px 200px;

    grid-template-areas: 
      "item-1 item-1 item-2 item-4 item-4"
      "item-3 item-3 item-3 item-4 item-4"
  }
}
`

export default SectionBanners