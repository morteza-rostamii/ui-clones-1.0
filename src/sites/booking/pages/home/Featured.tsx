'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'

import { catTabs, fetchFeaturedLocations } from '../../data/data'
import { HiArrowRight } from 'react-icons/hi2'
import CardFeatured from './CardFeatured'

import { motion } from 'framer-motion'

const Featured = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [featuredLocations, setFeaturedLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState(featuredLocations);

  useEffect(() => {
    async function fetchLocations() {
      const locations = await fetchFeaturedLocations();
      setFeaturedLocations(locations);
    }

    fetchLocations();
  }, [])

  useEffect(() => {

    if (!catTabs?.length && !featuredLocations?.length) return;

    const activeLocation: {
      id: number,
      name: string,
      term: string,
    } | undefined = catTabs?.filter((el:any, ) => el.id === activeTab)[0];

    // all: limit 8
    if (activeLocation?.term === 'all') {
      const shuffledArr: any = [...featuredLocations];
      shuffledArr.sort(() => Math.random() - 0.5);
      
      const randomEight: any = shuffledArr.slice(0, 8);
      console.log('--', randomEight)

      return setFilteredLocations(randomEight);
    }

    const filtered: any = featuredLocations?.filter((el:any, ) => {
      return el.city === activeLocation?.term;
    }); 

    setFilteredLocations(filtered);

    console.log(activeLocation?.term, filtered)
  }, [featuredLocations, activeTab]);

  if (!featuredLocations?.length) return <></>

  console.log('featured:: ', featuredLocations);
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
            filteredLocations && filteredLocations.length
            ?(
              filteredLocations.map((el:any, ) => (
                <motion.div
                key={el.id}
                layout
                >
                  <CardFeatured
                  item={el}
                  />
                </motion.div>
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
          display: grid !important;
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