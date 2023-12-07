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
import { HiOutlineBell } from 'react-icons/hi2'

const MenuDropNotif = () => {
  return (
    <Menu>
      <span
      className='
      relative
      '
      >
        <MenuButton 
        as={IconButton} 
        isRound={true}
        variant={'ghost'}
        icon={<HiOutlineBell size={24}/>}
        >
        </MenuButton>
        <span
        className='
        absolute top-1 right-1
        bg-blue-400 rounded-full w-2 h-2 z-10
        '
        >
        </span>
      </span>
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

export default MenuDropNotif