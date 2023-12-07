'use client'

import React, { useState } from 'react'
import Filters from './Filters'
import { Button } from '@chakra-ui/react'

import { catTabs, featuredLocations } from '../../data/data'
import { HiArrowRight } from 'react-icons/hi2'
import CardFeatured from './CardFeatured'

const Featured = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
    className='
    mb-20
    '
    >
      <div
      className='
      container mx-auto px-4
      '
      >

        <div
        className='
        text-left mb-8
        '
        >
          <h2
          className='
          text-xl font-bold
          md:text-xl
          '
          >
            Featured places to stay
          </h2>
          <p
          className='
          text-gray-500
          md:text-lg
          '
          >
          Popular places to stay that Chisfis recommends for you
          </p>
        </div>

        {/* filters */}
        <div
        className='
        flex items-center justify-between mb-8
        '
        >

          {/* tabs */}
          <div>
            {
              catTabs && catTabs.length
              ? (
                catTabs.map((el:any,) => (
                  <Tab
                  id={el.id}
                  key={el.id}
                  label={el.name}
                  active={activeTab}
                  setActiveTab={setActiveTab}
                  />
                ))
              ): ''
            }
          </div>

          <Button
          variant={'outline'}
          border={'solid 1px'}
          borderColor={'gray.200'}
          borderRadius={'9999px'}
          rightIcon={<HiArrowRight size={18}/>}
          >
            View all
          </Button>
        </div>

        {/* card grid */}
        <div
        className='
        grid-featured
        '
        >
          {
            featuredLocations && featuredLocations.length
            ?(
              featuredLocations.map((el:any, ) => (
                <CardFeatured
                key={el.id}
                item={el}
                />
              ))
            ): ''
          }
        </div>

        {/* show more */}
        {/* load more */}
        <div
        className='
        flex items-center justify-center pt-10 gap-4
        '
        >
          <Button
          borderRadius={'9999px'}
          colorScheme='purple'
          backgroundBlendMode={'purple.500'}
          >
            Show me more
          </Button>
        </div>
      </div>
      
      <style jsx>
        {`
        .grid-featured {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
        
        `}
      </style>
    </section>
  )
}

const Tab = ({
  id=0,
  label,
  active=0,
  setActiveTab,
}: {
  id: number,
  label: string,
  active: number,
  setActiveTab: any,
}) => {
  return (
    <Button
    colorScheme={id === active ? 'blackAlpha' : 'gray'}
    color={id === active ? 'white' : 'black'}
    variant={id === active ? 'solid' : 'ghost'}
    onClick={() => setActiveTab(id)}
    >
      {label}
    </Button>
  )
}

export default Featured