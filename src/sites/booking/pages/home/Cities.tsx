'use client'

import React from 'react'
import { cities } from '../../data/data'
import CardCity from './CardCity'

const Cities = () => {

  console.log('--', cities)
  return (
    <section
    className='
    mb-20
    '
    >
      <div
      className='
      container mx-auto px-4
      '
      >
        <div
        className='
        text-center mb-8
        '
        >
          <h2
          className='
          text-xl font-bold
          md:text-xl
          '
          >
            Explore nearby
          </h2>
          <p
          className='
          text-gray-500
          md:text-lg
          '
          >
            Discover great places near where your live
          </p>
        </div>

        {/* cities cards */}
        <div
        className='
        grid grid-cols-1 gap-4
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        '
        >
          {
            cities && cities.length
            ? (
              cities.map((el:any,) => (
                <CardCity
                key={el.id}
                item={el}
                />
              ) )
            ): ''
          }
        </div>
      </div>
    </section>
  )
}

export default Cities