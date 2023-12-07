import Image from 'next/image'
import React from 'react'

const CardCity = ({
  item,
}:any) => {
  return (
    <div
    className='
    flex p-2 gap-3 items-center
    border-2 rounded-2xl cursor-pointer
    hover:bg-slate-50
    hover:shadow-md
    '
    >
      <div
      className='
      relative aspect-square rounded-full overflow-hidden
      h-24 w-24
      '
      >
        <Image
        className='
        h-full w-full object-cover
        '
        src={item.image}
        alt={item.name}
        width={100}
        height={100}
        />
      </div>

      <div
      className='
      h-full flex-1 self-start
      '
      >
        <div
        className='
        text-right w-full
        '
        >
          <span
          className='
          bg-slate-100 rounded-full p-1
          '
          >
          {item.numOfLocations}
          </span>
        </div>
        <h2
        className='
        font-bold
        '
        >
          {item.name}
        </h2>
        <p
        className='
        text-gray-500
        '
        >
          {item.distance}
        </p>
      </div>
    </div>
  )
}

export default CardCity