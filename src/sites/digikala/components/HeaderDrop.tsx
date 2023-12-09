'use client'

import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { Button } from '@chakra-ui/react';
import { HiBars3, HiBuildingStorefront, HiOutlineMapPin } from 'react-icons/hi2';
import {v4 as uuidv4} from 'uuid'

const navItems = [
  {
    id: 0, 
    icon: <HiBuildingStorefront size={20}/>, 
    label: 'شگفت انگیزها'
  },
  {
    id: 1, 
    icon: <HiBuildingStorefront size={20}/>, 
    label: 'سوپرمارکت',
  },
  {
    id: 2, 
    icon: <HiBuildingStorefront size={20}/>, 
    label: 'کارت هدیه',
  },
  {
    id: 3, 
    icon: <HiBuildingStorefront size={20}/>, 
    label: 'پرفروش ترینها',
  },
  {
    id: 4, 
    icon: <HiBuildingStorefront size={20}/>, 
    label: 'تخفیفها و پیشنهادها',
  },
]

const HeaderDrop = () => {
  let prevScroll: any = null;
  const [isScrolledUp, setIsScrolledUp] = useState(false);

  useEffect(() => {
    prevScroll = window.scrollY;

    // if page just loaded
    if (prevScroll === 0) setIsScrolledUp(true);

    function handScroll() {
      const currScroll = window.scrollY;
      // if: current scroll greater than prev scroll : we scrolled up
      const isScrolled = prevScroll > currScroll;
      setIsScrolledUp(isScrolled);
      prevScroll = currScroll;
    }

    // setup scroll event
    window.addEventListener('scroll', handScroll);

    return () => window.removeEventListener('scroll', handScroll);
  }, []); 

  return (
    <motion.div
    className={`
    absolute bottom-0 left-0 right-0
    #bg-opacity-70 
    hidden items-center p-4 -z-50 bg-white
    h-10 
    ${isScrolledUp ? 'flex z-10' : 'hidden'}
    md:flex
    `}
    animate={{
      y: isScrolledUp ? '40px' : 0
    }}
    >
      <div
      className='
      container mx-auto
      flex items-center justify-between
      '
      >
        {/* right */}
        <div
        className='
        flex items-center justify-between #bg-red-50 gap-4
        '
        >
          <Button
          leftIcon={<HiBars3 size={20}/>}
          variant={'link'}
          >
            <span
            className='
            text-sm
            '
            >
              دسته بندی
            </span>
          </Button>

          <span
          className='border-r-2 self-stretch'
          >
          </span>

          <nav
          className='
          flex items-center justify-between gap-6
          '
          >
            {
              navItems.map((el: any, ) => (
                <span
                key={el.id}
                className={`
                flex items-center
                ${el.id === 4 ? 'hidden lg:flex' : ''}
                ${el.id === 3 ? 'hidden lg:flex' : ''}
                `}
                >
                  <Button
                  variant={'link'}
                  leftIcon={el.icon}
                  >
                    <span
                    className='
                    text-sm
                    '
                    >
                      {el.label}
                    </span>
                  </Button>
                </span>
              ))
            }
          </nav>
          
          <span
          className='border-r-2 self-stretch hidden lg:flex'
          >
          </span>

          <div
          className='
          hidden
          xl:flex items-center gap-4
          '
          >
            <Button
            variant={'link'}
            >
              <span
              className='
              text-sm
              '
              >
                سوالی دارید؟
              </span>
            </Button>
            <Button
            variant={'link'}
            >
              <span
              className='
              text-sm
              '
              >
                در دیجی کالا بفروشید؟
              </span>
            </Button>
          </div>
        </div>

        {/* left */}
        <div
        className='
        hidden
        lg:flex items-center
        '
        >
          <Button
          variant={'link'}
          leftIcon={<HiOutlineMapPin size={20}/>}
          >
            <span
            className='
            text-sm
            '
            >
              شهر خود را انتخاب کنید
            </span>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default HeaderDrop