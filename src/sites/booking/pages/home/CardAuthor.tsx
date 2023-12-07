import { Avatar, Button } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi2'

const CardAuthor = ({
  item,
}:any) => {
  return (
    <div
    className='
    rounded-xl overflow-hidden
    hover:shadow-md cursor-pointer
    '
    >
      <div
      className='
      relative aspect-[1/.4]
      '
      >
        <Image
        className='
        object-cover w-full
        '
        src={item.image}
        alt={'item.name'}
        fill
        
        />

        {/* overlay */}
        <div
        className='
        absolute top-3 left-3
        '
        >
          <Button
          className='rounded-full'
          variant={'solid'}
          colorScheme='whiteAlpha'
          color={'black'}
          borderRadius={'9999px'}
          size={'sm'}
          rightIcon={<HiArrowRight size={18}/>}
          >
            {item.count}
          </Button>
        </div>
      </div>

      {/* card footer */}
      <div
      className='
      flex flex-col justify-center items-center
      text-center
      bg-white
      '
      >
        <div
        className='
        self-center bg-white -mt-8 p-2 z-10 rounded-full 
        '
        >
          <Avatar
          className='
          object-cover overflow-hidden text-center
          '
          src={item.avatar}
          />
        </div>
        <div
        className='
        pb-6
        '
        >
          <h2
          className='
          font-bold
          '
          >
            {item.name}
          </h2>
          <p
          className='
          text-gray-500
          '
          >
            {item.subTxt}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardAuthor