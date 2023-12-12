'use client'

import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import useChairStore from '../data/ChairStore';

export const CartBtn = () => {
  const {items, addItem, itemExist} = useChairStore();

  return (
    <div className='relative'>
      <IconButton
      aria-label=''
      variant={'outline'}
      colorScheme={items.length ? 'red' : 'gray'}
      isRound={true}
      icon={<HiOutlineShoppingBag size={24}/>}
      >
      </IconButton>

      <div
      className='
      absolute top-0 -right-1
      flex items-center justify-center
      bg-red-400 w-5 h-5 rounded-full text-white font-bold text-center
      '
      style={{fontFamily: 'Lato'}}
      >
        <span className='-mr-[1px] -mt-[1.2px]'>
        {items.length}
        </span>
      </div>
    </div>
  )
}
