import Link from 'next/link'
import React from 'react'
import CarouselImg from './CarouselImg'
import { HiMiniStar, HiOutlineMapPin } from 'react-icons/hi2'
import {motion} from 'framer-motion'

const CardFeatured = ({
  item,
}: any) => {
  return (
    <div
    >
      
      {/* top img carousel */}
      <CarouselImg
      images={item?.images}
      />

      {/* footer */}
      <div
      className='
      block
      '
      //href={'/booking'}
      >
        <div
        className='
        flex flex-col gap-2 border-b-2 pb-1
        '
        >
          <p
          className='
          text-sm text-gray-500
          '
          >
            Entire cabin . {item.numOfBeds} beds
          </p>
          <p
          className='
          flex gap-2 items-center
          '
          >
            <span
            className='
            bg-green-200 rounded-full p-1 px-2 text-xs font-bold
            '
            >
              ADS
            </span>
            <span
            className='
            font-bold
            '
            >
              {item.name}
            </span>
          </p>
          <p
          className='
          flex items-center gap-2
          text-gray-500 text-sm
          '
          >
            <span>
            <HiOutlineMapPin size={16}/>
            </span>
            <span>
              {item.address}
            </span>
          </p>
        </div>

        {/* footer-bottom */}
        <div
        className='
        flex items-center justify-between py-2
        '
        >
          <div>
            <span
            className='
            font-bold
            '
            >
              {item.price}
            </span>
            <span
            className='
            text-gray-500
            '
            >
              /night
            </span>
          </div>
          <div
          className='
          flex items-center gap-1
          '
          >
            <span
            className='
            text-orange-400
            '
            >
              <HiMiniStar />
            </span>
            <span
            className='
            font-semibold text-sm           
            '
            >
              {item.score}
            </span>
            <span
            className='
            text-gray-500 text-sm
            '
            >
              ({item.numOfReviews})
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFeatured