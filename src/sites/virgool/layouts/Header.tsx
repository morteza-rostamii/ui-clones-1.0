import React from 'react'
import Logo from '../components/Logo'
import { Button } from 'antd'

import {HiOutlineHeart, HiOutlineShoppingBag, HiOutlineUser} from 'react-icons/hi'
import { HiBars3, HiOutlineMagnifyingGlass, HiOutlineMagnifyingGlassCircle, HiOutlineMagnifyingGlassMinus } from "react-icons/hi2";
import Link from 'next/link';

const NavItems = [
  <HiOutlineMagnifyingGlass size={24}/>,
  <HiOutlineHeart size={24}/>,
  <HiOutlineShoppingBag size={24}/>,
  <HiOutlineUser size={24}/>,
]

const Header = () => {
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
        flex gap-6
        '
        >
          <nav
          className='
          flex gap-2
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

          <NavItem icon={<HiBars3 size={24}/>}/>
        </div>
      </div>
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