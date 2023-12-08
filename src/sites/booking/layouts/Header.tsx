'use client'

import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import { HiChevronDown, HiGlobeAlt, HiOutlineSearch } from 'react-icons/hi'
import { LuSettings2 } from "react-icons/lu";
import { Button, IconButton } from '@chakra-ui/react'
import { HiBanknotes, HiBars3 } from 'react-icons/hi2';
import MenuDropProfile from '../components/MenuDropProfile'
import MenuDropNotif from '../components/MenuDropNotif'
import Logo from '../components/Logo'
import ModalSearch from '../components/ModalSearch'

const Header = () => {
  return (
    <header
    className='
    sticky top-0 right-0 left-0 h-320 z-20 bg-white bg-opacity-80
    '
    >
      <div
      className='
      flex items-center justify-between
      container mx-auto p-3 gap-10
      '
      >
        {/* left */}
        <div
        className='
        hidden
        md:flex
        '
        >
          <Link
          className='w-20'
          href={'/booking'}          
          >
            <Logo/>
          </Link>
          <span
          className='
          border-r-2 pr-8 mr-8
          hidden
          lg:block
          '
          ></span>
          <span
          className='
          hidden
          lg:flex
          '
          >
            <Button
            variant={'link'}
            display={'flex'}
            alignItems={'center'}
            gap={'2px'}
            >
              <span>
              Travelers
              </span>
              <HiChevronDown size={20}/>
            </Button>
          </span>
        </div>

        {/* mobile search */}
        <ModalSearch/>

        {/* right */}
        <div
        className='
        hidden
        md:flex items-center gap-3
        '
        >
          <nav
          className='
          flex items-center gap-3
          '
          >
            <span
            className='
            hidden
            lg:flex
            '
            >
              <Button
              variant={'link'}
              display={'flex'}
              gap={'2px'}
              alignItems={'center'}
              >
                <HiGlobeAlt />
                <span>/</span>
                <HiBanknotes />
                <HiChevronDown size={20}/>
              </Button>
            </span>
            <span
            className='
            hidden
            lg:flex
            '
            >
              <Button
              variant={'outline'}
              borderRadius={'9999px'}
              borderColor={'gray.300'}
              size={'sm'}
              bgColor={'white'}
              >
                List your property
              </Button>
            </span>
            <MenuDropNotif/>
            <MenuDropProfile/>
          </nav>

          <span
          className='
          block
          lg:hidden
          '
          >
            <IconButton
            isRound={true}
            variant={'outline'}
            aria-label='menu'
            colorScheme='teal'
            icon={<HiBars3 size={24}/>}
            >
            </IconButton>
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header