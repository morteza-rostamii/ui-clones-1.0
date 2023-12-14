'use client'

import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiArrowSmallLeft } from 'react-icons/hi2'
import { getProducts } from '../../data/data'
import Digi from '../../svg/Digi'

const BannerSuperMarket = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts({
        numberOfProducts: 5,
        page: 2,
        term: 'products'
      })
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
        <div
        className='
        flex flex-col h-full gap-5
        items-center justify-between
        lg:flex-row
        bg-no-repeat bg-left bg-cover p-4
        bg-gray-200 rounded-lg cursor-pointer
        '
        style={{
          backgroundImage: "url('https://www.digikala.com/statics/img/svg/typography/freshPattern.svg')"
        }}
        >
          
          {/* right */}
          <div
          className='
          flex items-center gap-4
          #flex-1
          '
          >
            <div
            className='
            relative
            w-14 h-14
            '
            >
              <Image 
              className='
              object-cover w-full
              '
              src={'/digikala/fresh.webp'}
              alt='banner-img'
              fill
              />
            </div>

            <div
            className='
            relative
            w-60 h-10
            '
            >
              <Digi/>
              {/* <Image 
              className='
              object-contain w-full
              '
              src={'https://www.digikala.com/statics/img/svg/typography/fresh.svg'}
              alt='banner-img'
              fill
              /> */}
            </div>
          </div>

          <div
          className='
          flex items-center justify-between gap-3 w-full
          md:justify-end
          '
          >
            <div
            className='
            flex items-center gap-3
            '
            >
              {
                products && products.length
                ? (
                  products.map((el: any, i:number) => (
                    <span
                    className={`
                    ${i === products.length - 1 ? 'hidden md:flex' : ''}
                    ${i === products.length - 2 ? 'hidden md:flex' : ''}
                    ${i === products.length - 3 ? 'hidden md:flex' : ''}
                    `}
                    key={el.id}
                    >
                      <CardSuper
                      item={el}
                      />
                    </span>
                  ))
                ): ''
              }
            </div>
            <Button
            borderRadius={'9999px'}
            bgColor={'white'}
            rightIcon={<HiArrowSmallLeft size={20}/>}
            >
              بیش از ۱۰۰ کالا
            </Button>                                     
          </div>
        </div>
      </div> {/* wrapper */}
    </section>
  )
}

const CardSuper = ({
  item,
}: any) => {
  return (
    <div
    className='relative bg-transparent'
    >
      <div
      className='
      relative 
      w-16 h-16
      md:w-20 md:h-20
      rounded-[50%] overflow-hidden 
      '
      >
        <Image
        className='w-full object-cover'
        src={item.image}
        alt={item.name}
        fill
        />
      </div>

      <span
      className='
      absolute bottom-0 right-0 font-bold text-sm
      bg-red-500 p-1 px-2 text-white rounded-full
      '
      >
        {item.percent}
      </span>
    </div>
  )
}

export default BannerSuperMarket