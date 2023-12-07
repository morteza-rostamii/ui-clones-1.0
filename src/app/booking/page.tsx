import Authors from '@/sites/booking/pages/home/Authors'
import CategoriesGrid from '@/sites/booking/pages/home/CategoriesGrid'
import Cities from '@/sites/booking/pages/home/Cities'
import Featured from '@/sites/booking/pages/home/Featured'
import Hero from '@/sites/booking/pages/home/Hero'
import Newsletter from '@/sites/booking/pages/home/Newsletter'
import React from 'react'

const PageTravelApp = () => {
  return (
    <div 
    className='
    '
    >
      <Hero/>
      <CategoriesGrid/>
      <Cities/>
      <Authors/>
      <Featured/>
      <Newsletter/>
    </div>
  )
}

export default PageTravelApp