'use client'

import React, { useRef } from 'react'
import Logo from '../components/Logo'
import { Button } from 'antd'

import {HiOutlineHeart, HiOutlineShoppingBag, HiOutlineUser} from 'react-icons/hi'
import { HiBars3, HiOutlineMagnifyingGlass, HiOutlineMagnifyingGlassCircle, HiOutlineMagnifyingGlassMinus } from "react-icons/hi2";
import Link from 'next/link';
import SideMenu from './SideMenu'

const NavItems = [
  <HiOutlineMagnifyingGlass size={24}/>,
  <HiOutlineHeart size={24}/>,
  <HiOutlineShoppingBag size={24}/>,
  <HiOutlineUser size={24}/>,
]

const Header = () => {
  const openSideMenuRef = useRef(() => {});

  return (
    <header
    className='
    flex bg-white shadow-md
    '
    >
      <div
      className='
      flex items-center justify-between
      container mx-auto w-full pr-4
      '
      >
        <div
        className='
        flex gap-6 items-center
        '
        >
          <Link href={'/virgool'}>
            <Logo/>
          </Link>
          <span
          className='
          hidden
          md:flex
          text-amber-500 text-sm
          '
          >
          فروشگاه آنلاین لوازم تحریر و کتاب  
          </span>  
        </div>

        <div 
        className='
        flex gap-6 items-center
        '
        >
          <nav
          className='
          flex gap-2 items-center
          '
          >
            {
              NavItems.map((icon, i) => (
                <NavItem 
                key={i}
                icon={icon}
                />
              ))
            }
          </nav>

          <Button 
          icon={<HiBars3 
          size={24}/>}
          onClick={() => openSideMenuRef.current()}
          >
          </Button>
        </div>
      </div>
      
      <SideMenu
      ref={openSideMenuRef}
      />
    </header>
  )
}

const NavItem = ({
  icon,
}:any) => {
  return (
    <Button 
    type="default" 
    shape="circle"
    size='large'
    icon={icon}
    >
    </Button>
  )
}

export default Header