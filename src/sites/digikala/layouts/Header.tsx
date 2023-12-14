import Image from 'next/image'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import { Button, IconButton } from '@chakra-ui/react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { HiArrowLeftOnRectangle } from 'react-icons/hi2'
import HeaderDrop from '../components/HeaderDrop'

const Header = () => {

  return (
    <header
    className='
    sticky top-0 left-0 right-0
    flex items-center
    bg-white #bg-opacity-70 z-10 shadow-md
    md:shadow-none
    md:mb-10 md:h-20
    '
    >
      <div
      className='
      relative bg-white z-10
      container mx-auto px-2 py-2 #bg-slate-50
      flex items-center justify-between
      
      md:py-4 md:px-0
      '
      >
        {/* right */}
        <div
        className='
        flex items-center gap-4
        flex-1
        #md:flex-none
        '
        >
          <Image
          className='
          hidden
          md:flex
          '
          src={'/digikala/logo.svg'}
          alt='logo'
          width={100}
          height={60}
          />

          <SearchBar/>
        </div>

        {/* left */}
        <div
        className='
        hidden flex-1 justify-end #bg-red-100
        gap-4 items-center
        md:flex
        '
        >
          <Button
          leftIcon={<HiArrowLeftOnRectangle size={24}/>}
          colorScheme='red'
          variant={'outline'}
          >
            <span
            className='
            text-gray-500 text-sm
            '
            >
              ورود | ثبت نام
            </span>
          </Button>
          <span
          className='
          border-r-2 self-stretch
          '
          >
          </span>
          <IconButton
          aria-label=''
          icon={<HiOutlineShoppingCart size={24}/>}
          >
          </IconButton>
        </div>

      </div>
      {/* header drop down */}
      <HeaderDrop/>
    </header>
  )
}

export default Header