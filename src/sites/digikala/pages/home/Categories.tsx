import { Button } from '@chakra-ui/react'
import React from 'react'
//import {v4 as uuidv4} from 'uuid'
//import { fakerFA } from '@faker-js/faker';
import { catItems } from '../../data/data'
import Image from 'next/image'

const Categories = () => {
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
        flex items-center justify-between mb-6
        '
        >
          <h2
          className='
          text-lg font-bold
          '
          >
            خرید با دسته بندی
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

        {/* grid */}
        <div
        className='
        grid grid-cols-1 justify-items-center gap-4 bg-slate-50 rounded-lg
        sm:grid-cols-2
        md:grid-cols-2
        #lg:gap-0
        lg:grid-cols-4
        '
        >
          {
            catItems && catItems.length
            ?(
              catItems.map((el:any, ) => (
                <CardCat
                key={el.id}
                item={el}
                />
              ))
            ): ''
          }
        </div>
      </div>
    </section>
  )
}

const CardCat = ({
  item,
}: any) => {
  return (
    <div
    className='
    relative aspect-[1/1] w-40 h-40
    '
    >
      <Image
      className='
      w-full
      '
      src={item.image}
      alt='category'
      fill
      />

      <div
      className='
      absolute top-0 bottom-0 left-0 right-0 #m-auto
      flex items-center justify-center
      '
      /* style={{
        transform: 'translate(-50%, -50%)',
      }} */
      >
        <Button
        backgroundColor={'rgba(255, 255, 255, 0.7);'}
        color={'red.600'}
        >
        {item.name}
        </Button>
      </div>
    </div>
  )
}

export default Categories