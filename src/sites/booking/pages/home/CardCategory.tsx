'use client'

import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'

const CardCategory = ({
  category,
}:any) => {
  return (
    /* 
    ${category.gridItem}
    */
    <div
    className={`
    ${category.gridItem}
    relative rounded-md overflow-hidden
    aspect-[1/.6] cursor-pointer h-full w-full
    `}
    >
      <motion.div
      className='
      relative aspect-[1/.6] w-full h-full
      '
      whileHover={{
        scale: 1.1,
      }}
      >
        <Image
        src={category.image}
        alt={category.title}
        fill
        style={{
          objectFit: 'cover',
          width: '100%'
        }}
        />
      </motion.div>

      {/* overlay */}
      <div
      className='
      absolute bottom-0 left-0 right-0 p-2 px-4
      bg-black bg-opacity-50
      '
      >
        <h2
        className='
        text-white text-lg font-bold
        '
        >
          {category.title}
        </h2>
        <p
        className='
        flex gap-2 items-center
        text-gray-50
        '
        >
          <span>
          {category.count}
          </span>
          <span>
          properties
          </span>
        </p>
      </div>

      {/* style */}
      <style jsx>{`
        .${category.gridItem} {
          grid-area: ${category.gridItem};
        }
      `}</style>
    </div>
  )
}

export default CardCategory