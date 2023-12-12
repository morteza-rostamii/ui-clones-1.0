import Image from 'next/image'
import React from 'react'
import { TNavItem, navItems } from '../data/DataChair'
import { HiChevronDown, HiOutlineHeart, HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi'
import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { HiBars3 } from 'react-icons/hi2'
import Link from 'next/link'
import { CartBtn } from '../components/CartBtn'

const Header = () => {
  return (
    <header
    className='
    flex items-center h-20 shadow-md z-20 sticky top-0 left-0 right-0
    bg-white
    '
    >
      <div
      className='
      container mx-auto
      hidden
      md:flex items-center justify-between
      '
      >
        {/* right */}
        <div
        className='
        flex gap-20 items-center
        '
        >
          <Link
          href={'/chair-site'}
          >
            <Image
            src={'/chair-site/logo.png'}
            alt='logo'
            width={72}
            height={40}
            />
          </Link>

          {/* nav */}
          <nav
          className='
          flex items-center gap-3
          '
          >
            {
              navItems.map((el: TNavItem, ) => (
                <NavItem
                key={el.id}
                item={el}
                />
              ))
            }
          </nav>
        </div> 

        {/* left */}
        <div
        className='
        flex items-center gap-3
        '
        >
          <form
          dir='rtl'
          className='
          self-start
          hidden
          lg:flex
          '
          >
            <InputGroup>
              <Input 
              borderRadius={'9999px'}
              type='email' 
              pr={'4.5rem'}
              focusBorderColor='red.200'
              placeholder='جستوجو محصول' />
              {/* <InputRightElement 

              //pointerEvents='none'
              >
                <IconButton
                aria-label=''
                size={'sm'}
                //colorScheme='purple'
                isRound={true}
                //icon={<HiArrowRight size={18}/>}
                >
                </IconButton>
              </InputRightElement> */}
            </InputGroup>
          </form>

          {/* action button */}
          <div
          className='
          flex items-center gap-2
          '
          >
            <IconButton
            aria-label=''
            variant={'outline'}
            //colorScheme='blackAlpha'
            isRound={true}
            icon={<HiOutlineUser size={24}/>}
            >
            </IconButton>
            <IconButton
            aria-label=''
            variant={'outline'}
            //colorScheme='blackAlpha'
            isRound={true}
            icon={<HiOutlineHeart size={24}/>}
            >
            </IconButton>

            <CartBtn/>
          </div>
        </div>
      </div> {/* section */}
      
      {/* mobile header */}
      <div
      className='
      container mx-auto px-2 md:px-0
      flex items-center justify-between
      md:hidden
      '
      >
        <div>
          <IconButton
          aria-label=''
          icon={<HiBars3 size={24}/>}
          >
          </IconButton>
        </div>
        <Link
        href={'/chair-site'}
        >
          <Image
          src={'/chair-site/logo.png'}
          alt='logo'
          width={72}
          height={40}
          />
        </Link>
        <div>
          <IconButton
          aria-label=''
          variant={'outline'}
          icon={<HiOutlineShoppingBag size={24}/>          }
          >
          </IconButton>
        </div>
      </div>
    </header>
  )
}

//**************************
const NavItem = ({
  item,
}: {
  item: TNavItem,
}) => {
  return (
    <button
    className='
    group
    relative
    flex items-center gap-1 text-gray-600
    '
    >
      {
        ['محصولات', 'شاپ',].map((el: string) => {
          if (item.label == el) {
            return <span>
              <HiChevronDown size={20}/>
            </span>
          }
        })
      }
      <span
      className='
      group-hover:text-red-400
      transition-all ease-in-out duration-200
      '
      >
      {item.label}
      </span>

      <span
      className='
      absolute bottom-0 bg-red-400
      h-[2px] w-0
      left-[0] transition-all ease-in-out duration-200
      group-hover:w-full
      '
      style={{
        //transform: 'translateX(-100%)'
      }}
      >
      </span>
    </button>
  )
}

export default Header