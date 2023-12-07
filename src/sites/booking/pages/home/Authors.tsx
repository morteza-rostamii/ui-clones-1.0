'use client'

import React from 'react'
import CardAuthor from './CardAuthor'
import { authors } from '../../data/data'
import { Button } from '@chakra-ui/react'

const Authors = () => {
  console.log('authors', authors)
  return (
    <section
    className='
    mb-20 bg-slate-50
    '
    >
      <div
      className='
      container mx-auto p-4 py-8
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
            Top 10 author of the month
          </h2>
          <p
          className='
          text-gray-500
          md:text-lg
          '
          >
          Rating based on customer reviews
          </p>
        </div>

        {/* cards */}
        <div
        className='
        grid grid-cols-1 gap-4
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        '
        >
          {
            authors && authors.length
            ? (
              authors.map((el, ) => (
                <CardAuthor
                key={el.id}
                item={el}
                />
              ))
            ): ''
          }
        </div>

        {/* load more */}
        <div
        className='
        flex items-center justify-center pt-10 gap-4
        '
        >
          <Button
          borderRadius={'9999px'}
          colorScheme='whiteAlpha'
          bgColor={'white'}
          color={'black'}
          border={'solid 1px'}
          borderColor={'gray.200'}
          >
            show me more
          </Button>
          <Button
          borderRadius={'9999px'}
          colorScheme='purple'
          backgroundBlendMode={'purple.500'}
          >
            become a host
          </Button>
        </div>
      </div>
      
    </section>
  )
}

export default Authors