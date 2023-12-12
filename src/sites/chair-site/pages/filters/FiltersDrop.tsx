'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  Button, FormControl, FormLabel, Select,
} from '@chakra-ui/react'
import { HiChevronDown } from 'react-icons/hi'
import { AnimatePresence, motion } from 'framer-motion'

const values = ['پر بازدیدترین', 'پر فروش ترین', 'کم به زیاد', 'زیاد به کم'];

const FiltersDrop = () => {
  const [currentVal, setCurrentVal] = useState(values[0]);
  const [open, setOpen] = useState(false);
  const dropRef = useRef(null);

  const handToggleOpen = () => setOpen(c => !c);

  const closeList = () => setOpen(false); 

  function handItemChange(item: string) {
    handToggleOpen();
    setCurrentVal(item);
  }

  useEffect(() => {
    function handClickOutside(event: any) {
      // if: not the drop element
      if (event.target !== dropRef.current) {
        closeList();
      }
    }

    // if modal is open
    if (open) {
      document.addEventListener('click', handClickOutside);
    } else {
      document.removeEventListener('click', handClickOutside);
    }

    // clean up
    return () => document.removeEventListener('click', handClickOutside);
  }, [open]);

  return (
    <div
    className='
    relative z-10
    '
    ref={dropRef}
    >
      <Button
      variant={'outline'}
      colorScheme='gray'
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      gap={'2px'}
      minWidth={'150px'}
      onClick={handToggleOpen}
      >
        <span
        className='
        text-sm text-gray-700
        '
        >
        {currentVal}
        </span>
        <motion.span
        initial={{x: 0, rotate: 0}}
        animate={{
          rotate: open ? 180 : 0
        }}
        transition={{
          duration: .2
        }}
        >
          <HiChevronDown size={24}/>
        </motion.span>
      </Button>

      {/* list */}
      <AnimatePresence>
        {
          !!open && (
            <motion.ul
            className='
            absolute top-[100%] left-0 right-0
            bg-white shadow-md
            '

            initial={{opacity: 0}}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            >
              {
                values.map((el: string, i:number) => (
                  <li 
                  className='
                  p-2 text-sm text-gray-700
                  cursor-pointer
                  hover:bg-slate-50
                  '
                  key={i}
                  onClick={() => handItemChange(el)}
                  >
                    {el}
                  </li>
                ))
              }
            </motion.ul>
          )
        }
      </AnimatePresence>
    </div>
  )
}

export default FiltersDrop