'use client'

import React, { useEffect, useState } from 'react'
import { TColor, colors } from '../../data/DataChair'
import { Tooltip } from '@chakra-ui/react'

import {motion} from 'framer-motion'

const ColorRadio = () => {
  const [value, setValue] = useState('red');

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <div
    className='
    mb-10 
    '
    >
      <h2 className='text-xl font-bold mb-6'>
        رنگها
      </h2>
      {/* colors */}
      <div
      className='
      flex items-center gap-2
      '
      >
        {
          colors.map((el: TColor) => (
            <div
            className='
            cursor-pointer
            '
            >
              <input 
              className='hidden'
              type="radio" 
              id={el.name} 
              name="fav_color" 
              value={el.name}
              checked={value === el.name}
              onChange={(e: any) => setValue(e.target.value)}
              />

              <Tooltip 
              hasArrow 
              label={el.persianName}
              bg='white'
              color={'black'}
              placement='top'
              >
                <label 
                className={`
                bg-white  
                block cursor-pointer
                w-8 h-8 rounded-full border-2 border-white overflow-hidden
                `}
                htmlFor={el.name}
                >
                  <motion.div
                  className={`
                  ${el.code}
                  w-full h-full rounded-full
                  `}
                  initial={{scale: 1}}
                  whileHover={{scale: .7}}
                  transition={{duration: .2}}
                  >
                  </motion.div>
                </label>
              </Tooltip>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ColorRadio