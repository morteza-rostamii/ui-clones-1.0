'use client'

import Image from 'next/image'
import React from 'react'
import Banner from './Banner'

const banners = [
  {
    id: 1,
    image: '/virgool/banners/Rectangle 188.png',
  },
  {
    id: 2,
    image: '/virgool/banners/Rectangle 187.png',
  },
  {
    id: 3,
    image: '/virgool/banners/Rectangle 138.png',
  },
  {
    id: 4,
    image: '/virgool/banners/Rectangle 137.png',
  },
]

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

        {/* grid */}
        <div
        className='
        grid-banners
        '
        >
          
          {
            banners.map((el:any) => (
              <Banner
              key={el.id}
              banner={el}
              gridItemName={`item-${el.id}`}
              />
            ))
          }
          
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