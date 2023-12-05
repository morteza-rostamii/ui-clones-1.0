import React from 'react'
//import headSlider from '@/assets/virgool/images/headSlider.png'

const Hero = () => {

  return (
    <section
    className='
    '
    >
      <div
      className='
      relative
      container mx-auto
      '
      >
        <img 
        className='
        w-full
        '
        src={'/virgool/headSlider.png'}
        alt="hero-banner" 
        />
        {/* overlay */}
        <div
        className='
        absolute top-0 bottom-0 left-0 right-0
        flex flex-col justify-between cursor-pointer
        bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100
        '
        >  
        </div>
      </div>
    </section>
  )
}

export default Hero