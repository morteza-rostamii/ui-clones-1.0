import React from 'react'
import SideFilters from './SideFilters'
import GridItems from './GridItems'

const MainFilters = () => {
  return (
    <section
    className='
    mb-16
    '
    >
      <div
      className='
      container mx-auto px-4
      #md:px-0
      flex #bg-yellow-50 gap-10
      '
      >
        <SideFilters/>
        <GridItems/>
      </div>
    </section>
  )
}

export default MainFilters