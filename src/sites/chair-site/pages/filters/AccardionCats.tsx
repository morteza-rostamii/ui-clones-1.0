'use client'

import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

import { TGroup, groups } from '../../data/DataChair'

const AccardionCats = () => {
  return (
    <div
    id='accardion--container'
    className='
    mb-10 #border-b-2
    '
    >
      <h2
      className='
      text-xl font-bold mb-6
      '
      >
        دسته بندی ها
      </h2>
      
      <div>
        {
          groups.map((el: TGroup) => (
            <AccorItem
            key={el.id}
            item={el}
            />
          ))
        }
      </div>

    </div>
  )
}

const AccorItem = ({
  item,
}: {
  item: TGroup,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(c => !c);

  return (
    <div
    className='
    flex flex-col gap-2 h-full py-2
    '
    >
      <Button
      onClick={toggleMenu}
      variant={'link'}
      width={'100%'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      >
        <span
        className='
        text-gray-800 text-base font-bold
        flex items-center gap-2
        '
        >
          <span>
          {item.name}
          </span>
          <span 
          style={{fontFamily: 'Lato'}}
          className='text-sm'>
            ({item.count})
          </span>
        </span>  

        {/* animated icon */}
        {
          item.subCats.length
          ?(
            <motion.span
            initial={{x: 0, rotate: 0}}
            animate={{
              rotate: menuOpen ? 180 : 0
            }}
            transition={{
              duration: .2
            }}
            >
              <HiChevronDown size={24}/>
            </motion.span>
          ): ''
        }
      </Button>
      
      {/* sub categories */}
      {
        item.subCats.length
        ?(
          <motion.ul
          className='
          flex flex-col gap-2 overflow-hidden pr-5
          '

          initial={{
            height: '0',
          }}
          animate={{
            height: menuOpen ? '100%' : '0',
          }}
          transition={{
            duration: .2,
          }}
          >
            {
            item.subCats.map((el: TGroup) => (
              <Button 
              variant={'link'}
              alignSelf={'start'}
              paddingRight={'10px'}
              display={'flex'}
              alignItems={'center'}
              gap={'6px'}
              >
                <span>
                {el.name}
                </span>
                <span 
                style={{fontFamily: 'Lato'}}
                className='text-sm'>
                  ({el.count})
                </span>
              </Button>
            ))
            }
          </motion.ul>
        ): ''
      }
      
    </div>
  )
}

export default AccardionCats