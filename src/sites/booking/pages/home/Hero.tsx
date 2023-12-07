import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section
    className='
    px-2 bg-white mb-20
    '
    >
      <div
      className='
      relative flex items-center justify-center
      container mx-auto rounded-lg overflow-hidden w-full h-full
      '
      >
        <div
        className='
        relative w-full
        aspect-[1/.8]
        sm:aspect-[1/.6]
        lg:aspect-[1/.4]
        '
        style={{
          //aspectRatio: '1/.4'
          width: '100%',
        }}
        >
          <Image
          className='

          '
          src={'https://chisfis-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftravelhero2.322c5981.png&w=1920&q=75'}
          alt='hero-banner'
          fill
          style={{
            objectFit: 'cover',
            width: '100%',
            objectPosition: 'center bottom'
          }}
          />   
        </div>

        {/* overlay */}
        <div
        className='
        absolute top-[10%] z-10
        flex flex-col gap-4
        text-center
        md:top-[20%]
        '
        >
          <h2
          className='
          text-sm font-bold
          md:text-lg
          '
          >
          Booking tax-free from Chis. platform
          </h2>
          <h1
          className='
          font-bold text-2xl
          md:text-5xl
          '
          >
            New generation of booking
          </h1>
          <button
          className='
          bg-purple-600 p-2 px-4 text-white font-bold
          rounded-md self-center 
          hover:bg-purple-700
          '
          >
            Keep calm & travel on
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero