import { Button } from 'antd'
import React, { useState } from 'react'
import { HiOutlineHeart } from 'react-icons/hi'

import {motion} from 'framer-motion'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'

const CardWeekProduct = ({
  product,
  color='bg-teal-100',
  discount=false,
}: {
  product: any,
  color: string,
  discount: boolean,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div
    className='
    relative
    flex rounded-md overflow-hidden
    #bg-green-50
    '

    // animation
    whileHover={{
      scale: 1.05,
    }}
    >
      <div
      className='
      #aspect-square w-full h-full
      '
      style={{
        aspectRatio: '1/1',
      }}
      >
        {
        !imgLoaded && (
          <Skeleton
          style={{
            height: '100%'
          }}
          />
        )
        }
        <Image
        src={product.image}
        alt={product.name}
        //sizes='100vw'
        fill
        style={{
          display: imgLoaded ? 'block' : 'hidden',
          opacity: imgLoaded ? 1 : 0, 
          width: '100%',
          objectFit: 'cover',
        }}
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgLoaded(false)}
        />
      </div>

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