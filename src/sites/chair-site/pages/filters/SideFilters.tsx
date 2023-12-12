import React from 'react'
import { groups } from '../../data/DataChair'
import AccardionCats from './AccardionCats'
import PriceRange from './PriceRange'
import ColorRadio from './ColorRadio'

const SideFilters = () => {
  return (
    <aside
    className='
    hidden
    lg:block
    flex-[18%]
    #bg-slate-50
    '
    >
      {/* categories */}
      <AccardionCats/>

      {/* price range */}
      <PriceRange/>

      {/* color picker */}
      <ColorRadio/>

      {/* brands */}

      {/* featured products */}
      
    </aside>
  )
}

export default SideFilters