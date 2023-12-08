'use client'

import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  IconButton,
  Avatar,
} from '@chakra-ui/react'
import Image from 'next/image'
import { faker } from '@faker-js/faker'
import { HiOutlineClipboard, HiOutlineHeart, HiOutlineUser } from 'react-icons/hi'

const MenuDropProfile = () => {
  return (
    <Menu
    >
      <MenuButton 
      as={IconButton} 
      variant={'ghost'}
      isRound={true} 
      icon={<Image className='rounded-full' 
      src={faker.image.avatar()} 
      alt='avatar' 
      width={34} 
      height={32}/>}>
      </MenuButton>
      <MenuList
      padding={'20px'}
      >
        <div
        className='
        flex items-center gap-3
        pb-3 border-b-2
        '
        >
          <div>
            <Avatar
            //size={''}
            src={faker.image.avatar()}
            />
          </div>
          <div>
            <h2
            className='
            font-bold 
            '
            >
            Eden Smith
            </h2>
            <p
            className='
            text-gray-600 text-sm
            '
            >
            Los Angeles, CA
            </p>
          </div>
        </div>
        <MenuItem 
        display={'flex'}
        alignItems={'center'}
        gap={'5px'}
        //minH='40px'
        >
          <span>
            <HiOutlineUser size={24}/>
          </span>
          <span>
            My Account
          </span>
        </MenuItem>
        <MenuItem 
        display={'flex'}
        alignItems={'center'}
        gap={'5px'}
        //minH='40px'
        >
          <span>
            <HiOutlineClipboard size={24}/>
          </span>
          <span>
            My Bookings
          </span>
        </MenuItem>
        <MenuItem 
        display={'flex'}
        alignItems={'center'}
        gap={'5px'}
        //minH='40px'
        >
          <span>
            <HiOutlineHeart size={24}/>
          </span>
          <span>
            Wishlist
          </span>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MenuDropProfile