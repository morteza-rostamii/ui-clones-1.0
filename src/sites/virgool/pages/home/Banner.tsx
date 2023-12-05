import Image from 'next/image'
import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton';

const Banner = ({
  banner,
  gridItemName,
}:any) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <a 
    className={`
    ${gridItemName} relative
    block rounded-md overflow-hidden
    `}
    href="#">
      <div
      className='
      relative w-full h-full
      '
      style={{
        aspectRatio: '1/1',
      }}
      >
        {
        !imageLoaded && (
          <Skeleton
          style={{
            height: '100%'
          }}
          />
        )
        }
        <Image
        src={banner.image}
        alt={'item-' + banner.id}
        //sizes='100vw'
        fill
        style={{
          display: imageLoaded ? 'block' : 'hidden',
          opacity: imageLoaded ? 1 : 0, 
          width: '100%',
          objectFit: 'cover',
        }}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(false)}
        />
      </div>
      
      <div
      className='
      absolute top-0 bottom-0 left-0 right-0
      flex flex-col justify-between cursor-pointer
      bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100
      '
      >  
      </div>
    </a>
  )
}

export default Banner