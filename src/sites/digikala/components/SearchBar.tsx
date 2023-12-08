import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'

const SearchBar = () => {
  return (
    <form
    className='
    w-full
    '
    >
      <Button
      width={'100%'}
      display={'flex'}
      gap={'6px'}
      alignItems={'center'}
      justifyContent={'start'}
      >
        <span
        className='
        text-gray-600
        '
        >
          <HiOutlineMagnifyingGlass size={24}/>
        </span>
   
        <span
        className='
        block
        md:hidden
        '
        >
          <Image
          src={'https://www.digikala.com/statics/img/svg/digi.svg'}
          alt='logo'
          width={80}
          height={60}
          />
        </span>
        <span
        className='
        hidden text-gray-500 text-sm
        md:flex
        '
        >
        جستوجو
        </span>
      </Button>


    </form>
  )
}

export default SearchBar