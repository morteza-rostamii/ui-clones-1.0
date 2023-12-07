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
} from '@chakra-ui/react'
import Image from 'next/image'
import { faker } from '@faker-js/faker'

const MenuDropProfile = () => {
  return (
    <Menu>
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
      <MenuList>
        <MenuItem minH='48px'>
          {/* <Image
            //boxSize='2rem'
            //borderRadius='full'
            src='https://placekitten.com/100/100'
            alt='Fluffybuns the destroyer'
            mr='12px'
          /> */}
          <span>Fluffybuns the Destroyer</span>
        </MenuItem>
        <MenuItem minH='40px'>
          {/* <Image
            boxSize='2rem'
            borderRadius='full'
            src='https://placekitten.com/120/120'
            alt='Simon the pensive'
            mr='12px'
          /> */}
          <span>Simon the pensive</span>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MenuDropProfile