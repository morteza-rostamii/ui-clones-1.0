import Authors from '@/sites/booking/pages/home/Authors'
import CategoriesGrid from '@/sites/booking/pages/home/CategoriesGrid'
import Cities from '@/sites/booking/pages/home/Cities'
import Featured from '@/sites/booking/pages/home/Featured'
import Hero from '@/sites/booking/pages/home/Hero'
import Newsletter from '@/sites/booking/pages/home/Newsletter'
import React from 'react'
import { HiOutlineHeart, HiOutlineUser } from 'react-icons/hi'
import { HiBars3, HiMagnifyingGlass } from 'react-icons/hi2'
import { v4 as uuidv4 } from 'uuid';

const PageTravelApp = () => {
  return (
    <div 
    className='
    '
    >
      <Hero/>
      <CategoriesGrid/>
      <Cities/>
      <Authors/>
      <Featured/>
      <Newsletter/>

      {/* mobile nav footer */}
      <div
      className='
      flex fixed bottom-0 left-0 right-0 items-center justify-center gap-12 z-50
      bg-white border-t-[1px] p-2
      md:hidden
      '
      >
        {
          [
            {id: uuidv4(), icon: <HiMagnifyingGlass size={20}/>, text: 'Explore'},
            {id: uuidv4(), icon: <HiOutlineHeart size={20}/>, text: 'Wishlists'},
            {id: uuidv4(), icon: <HiOutlineUser size={20}/>, text: 'Login'},
            {id: uuidv4(), icon: <HiBars3 size={20}/>, text: 'Menu'},
          ].map((el: any, ) => (
            <button
            className='
            flex flex-col gap-1 items-center
            #hover:bg-gray-200 #transition-all #ease-out cursor-pointer
            '
            >
              <span>
                {el.icon}
              </span>
              <span
              className='
              text-sm text-gray-500
              '
              >
                {el.text}
              </span>
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default PageTravelApp