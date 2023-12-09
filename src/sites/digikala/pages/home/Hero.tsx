import React from 'react'
import HeroCarousel from './HeroCarousel'

const Hero = () => {
  return (
    <section
    className='
    mb-20
    #h-[1000px]
    '
    >
      <div
      className='
      container mx-auto #p-4 #bg-red-500
      '
      >
      <HeroCarousel/>
      </div>
    </section>
  )
}

export default Hero