'use client'

import React, { useEffect, useState } from 'react'
import FiltersDrop from './FiltersDrop'
import { Button } from '@chakra-ui/react'
import { HiListBullet, HiMiniSquares2X2 } from 'react-icons/hi2'
import CardItem from './CardItem'
import { TProduct, fetchProducts } from '../../data/DataChair'

const GridItems = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  
  useEffect(() => {
    async function fetchData() {
      const data: TProduct[] = await fetchProducts({count: 8});
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <main
    className='
    #bg-gray-50
    flex-[82%]
    '
    >
      {/* top section */}
      <div
      className='
      flex items-center justify-between
      mb-8
      '
      >
        {/* filters dropdown */}
        <FiltersDrop/>
        <div
        className='
        flex gap-2
        '
        >
          <Button
          variant={'outline'}
          colorScheme='gray'
          >
            <HiMiniSquares2X2 size={24}/>
          </Button>
          <Button
          variant={'outline'}
          colorScheme='gray'
          //aspectRatio={'1/1'}
          >
            <HiListBullet size={24}/>
          </Button>
        </div>
      </div>

      {/* grid */}
      <div
      className='grid--products'
      >
        {
          products && products.length
          ?(
            products.map((el: TProduct) => (
              <CardItem
              key={el.id}
              item={el}
              />
            ))
          ): ''
        }
      </div>

      <style jsx>
        {`
        .grid--products {
          display: grid !important;
          gap: 16px;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
        
        `}
      </style>
    </main>
  )
}

export default GridItems