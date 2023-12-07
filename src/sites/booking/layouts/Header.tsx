'use client'

import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import { HiOutlineSearch } from 'react-icons/hi'
import { LuSettings2 } from "react-icons/lu";
import { Button, IconButton } from '@chakra-ui/react'
import { HiBars3 } from 'react-icons/hi2';
import MenuDropProfile from '../components/MenuDropProfile'
import MenuDropNotif from '../components/MenuDropNotif'
import Logo from '../components/Logo'

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
        </div>

        {/* mobile search */}
        <div
        className='
        flex items-center justify-between gap-6 flex-1
        rounded-full p-2 px-4
        bg-white shadow-md border-2
        lg:hidden
        '
        >
          <button
          className='
          text-gray-600 p-2 border-2 rounded-full
          '
          >
          <HiOutlineSearch 
          size={24}
          />
          </button>
          <div
          className='
          flex-1
          '
          >
            <h2
            className='
            font-bold
            '
            >
              where to?
            </h2>
            <p
            className='
            text-gray-500 text-sm
            '
            >
              Anywhere . Any week . Add guests
            </p>
          </div>
          <button
          className='
          border-2 rounded-full p-2
          '
          >
          <LuSettings2 
          size={24}
          />
          </button>
        </div>

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
            <MenuDropNotif/>
            <MenuDropProfile/>
          </nav>

          <IconButton
          isRound={true}
          variant={'outline'}
          aria-label='menu'
          colorScheme='teal'
          icon={<HiBars3 size={24}/>}
          >
          </IconButton>
        </div>
      </div>
    </header>
  )
}

export default Header