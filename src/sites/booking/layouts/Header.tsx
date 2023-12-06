import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import { HiOutlineSearch } from 'react-icons/hi'
import { LuSettings2 } from "react-icons/lu";

const Header = () => {
  return (
    <header>
      <div
      className='
      container mx-auto p-3
      '
      >

        {/* mobile search */}
        <div
        className='
        flex items-center justify-between gap-6
        rounded-full p-2 px-4
        bg-white shadow-md border-2
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
      </div>
    </header>
  )
}

export default Header