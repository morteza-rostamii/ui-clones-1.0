import { Button } from 'antd'
import React from 'react'
import { HiOutlineHeart } from 'react-icons/hi'

import {motion} from 'framer-motion'

const CardWeekProduct = ({
  product,
  color='bg-teal-100',
  discount=false,
}: {
  product: any,
  color: string,
  discount: boolean,
}) => {
  return (
    <motion.div
    className='
    relative
    flex rounded-md overflow-hidden
    bg-green-50
    '

    // animation
    whileHover={{
      scale: 1.05,
    }}
    >
      <img 
      className='
      w-full
      '
      src={product.image} 
      alt="" />

      <div
      className='
      absolute top-0 left-0 right-0
      p-3 z-10
      '
      >
        <Button
        shape={'circle'}
        type='default'
        size='middle'
        icon={<HiOutlineHeart size={22}/>}
        style={{
          color: color === 'bg-orange-300' ? '#f3a865' : ''
        }}
        >
        </Button>
      </div>

      {/* footer */}
      <div
      className={`
      ${color}
      absolute bottom-0 left-0 right-0
      flex justify-between p-4 z-10
      `}
      >
        <span
        dir='rtl'
        >
          {product.price}
        </span>
        <span
        dir='rtl'
        >
          {product.name}
        </span>
      </div>

      {/* overlay */}
      <div
      className='
      absolute top-0 bottom-0 left-0 right-0
      flex flex-col justify-between
      #bg-red-500 #opacity-10
      bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100
      '
      >  
      </div>
    </motion.div>
  )
}

export default CardWeekProduct