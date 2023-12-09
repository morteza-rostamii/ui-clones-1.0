import Image from 'next/image'
import React from 'react'
import Toman from '../../components/Toman'

const CardSpecial = ({
  item,
}: any) => {
  return (
    <div
    className='
    relative
    bg-slate-50 rounded-lg overflow-hidden
    '
    >
      <div
      className='
      relative aspect-[1/1]
      '
      >
        <Image
        className='
        object-cover w-full
        '
        src={item.image}
        alt={item.name}
        fill
        />

        {/* image overlay */}
        <div
        className=' 
        absolute top-0 bottom-0 left-0 right-0
        bg-black bg-opacity-0 cursor-pointer
        hover:bg-opacity-5
        '
        >
          <span
          className='
          absolute top-4 right-4 bg-red-500 text-white
          flex items-center justify-center
          rounded-full pt-1 px-2 font-bold
          '
          >
            {item.percent}
          </span>
        </div>
      </div>

      {/* footer */}
      <div
      className='
      flex items-center justify-between p-4
      '
      >
        <span
        className='
        text-gray-600 font-semibold line-through
        '
        >
          {item.discount}
        </span>
        <div
        className='
        flex items-center gap-2
        '
        >
          <span
          className='
          font-bold text-lg
          '
          >
          {item.price}
          </span>
          <span
          className='
          text-sm
          '
          >
            تومان
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardSpecial