import BannerSuperMarket from '@/sites/digikala/pages/home/BannerSuperMarket'
import BannersAd1 from '@/sites/digikala/pages/home/BannersAd1'
import Categories from '@/sites/digikala/pages/home/Categories'
import Discount from '@/sites/digikala/pages/home/Discount'
import Features from '@/sites/digikala/pages/home/Features'
import Hero from '@/sites/digikala/pages/home/Hero'
import Specials from '@/sites/digikala/pages/home/Specials'
import React from 'react'

const PageHome = () => {
  return (
    <section
    className='
    #h-[1000px]
    '
    >
      <Hero/>
      <Features/>
      <Specials/>
      <BannerSuperMarket/>
      <BannersAd1/>
      <Categories/>
      <Discount/>
    </section>
  )
}

export default PageHome