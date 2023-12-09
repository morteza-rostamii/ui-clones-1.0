import Image from 'next/image';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import { fakerFA } from '@faker-js/faker';
import Link from 'next/link';
import { Button, IconButton } from '@chakra-ui/react';
import { HiDotsCircleHorizontal } from 'react-icons/hi';

const items = [
  {
    id: uuidv4(),
    icon: 'https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png',
    label: fakerFA.lorem.words(2),
  },
  {
    id: uuidv4(),
    icon: 'https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png',
    label: fakerFA.lorem.words(2),
  },
  {
    id: uuidv4(),
    icon: 'https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1664309850.png',
    label: fakerFA.lorem.words(2),
  },
  {
    id: uuidv4(),
    icon: 'https://dkstatics-public.digikala.com/digikala-bellatrix/425c8f55c9bb5ad8e860bdc9f82421ce4fcc18de_1699778276.png',
    label: fakerFA.lorem.words(2),
  },
  {
    id: uuidv4(),
    icon: 'https://dkstatics-public.digikala.com/digikala-bellatrix/e8c1c372a304dc7c6ed600a6d4eb017f2aaea8cd_1697297561.png',
    label: fakerFA.lorem.words(2),
  },
  {
    id: uuidv4(),
    icon: 'https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png',
    label: fakerFA.lorem.words(2),
  },
  {
    id: uuidv4(),
    icon: 'https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png',
    label: fakerFA.lorem.words(2),
  },
  {
    id: uuidv4(),
    icon: 'https://dkstatics-public.digikala.com/digikala-bellatrix/bfcafaf7f0afffbfd326adc48e29e3449dd69910_1688462197.png',
    label: fakerFA.lorem.words(2),
  },
]

const Features = () => {
  return (
    <section
    className='
    mb-20
    '
    >
      <div
      className='
      container mx-auto
      px-2
      '  
      >
        <ul
        className='
        grid grid-cols-2 gap-4
        md:grid-cols-4
        lg:grid-cols-9
        '
        >
          {
            items && items.length
            ? (
              items.map((el: any, ) => (
                <Link  
                className='
                flex flex-col items-center gap-2
                '
                href={'/digikala'}
                key={el.id}>
                  <div
                  className='
                  relative w-14 h-14
                  '
                  >
                    <Image
                    className='
                    object-contain w-full
                    '
                    src={el.icon}
                    alt=''
                    fill
                    />
                  </div>
                  <span
                  className='
                  text-sm text-gray-500 text-center
                  '
                  >
                    {el.label}
                  </span>
                </Link>
              ))
            ): ''
          }

          <div
          className='
          flex flex-col gap-2 items-center
          col-span-full pt-6
          lg:col-span-1
          '
          >
            <Button
            aria-label=''
            //borderRadius={'100%'}
            variant={'ghost'}
            colorScheme='red'
            size={'sm'}
            //icon={<HiDotsCircleHorizontal size={24}/>}
            >
              <span
              className='
              text-red-500
              '
              >
              بیشتر
              </span>
            </Button>
            {/* <span>
              بیشتر
            </span> */}
          </div>
        </ul>
      </div>
    </section>
  ) 
}

export default Features