'use client'

import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import CardSpecial from './CardSpecial';
import { getProducts } from '../../data/data';
import CarouselSpecial from './CarouselSpecial';

const Specials = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts({numberOfProducts: 12});
      setProducts(data);
    }
    fetchData();
  }, []);

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
        {/* heading */}
        <div
        className='
        flex items-center justify-between
        pb-6
        '
        >
          <h2
          className='
          text-lg font-bold
          '
          >
            پیشنهاد شگفت انگیز
          </h2>  
          <Button
          variant={'ghost'}
          size={'sm'}
          colorScheme='red'
          >
            <span>
              بیشتر
            </span>
          </Button>
        </div>

        {/* cards */}
        <div
        className='
        #bg-green-50
        '
        >
          <CarouselSpecial products={products}/>
        </div>
      </div>
    </section>
  )
}

export default Specials