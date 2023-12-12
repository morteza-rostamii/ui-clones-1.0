'use client'

import React from 'react'
import { categories } from '../../data/data'
import CardCategory from './CardCategory'

const CategoriesGrid = () => {

  if (categories === null) return <></>
  
  return (
    <section
    className='
    mb-20
    '
    >
      <div
      className='
      categories-grid
      container mx-auto px-4
      grid gap-4
      
      '
      >
        {
          categories.length
          ? (
            categories.map((el:any, ) => (
              <CardCategory
              key={el.id}
              category={el}
              />
            ))
          ) : ''
        }
      </div>

      <style jsx>{`
        .categories-grid {
          grid-template-columns: repeat(1, 1fr);
          grid-template-rows: auto;
          grid-template-areas: 
            "item-1"
            "item-2"
            "item-3"
            "item-4";
        }

        @media (min-width: 768px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas: 
              "item-1 item-2"
              "item-3 item-4";
          }
        }

        @media (min-width: 1024px) {
          .categories-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas: 
              "item-1 item-2 item-4"
              "item-1 item-3 item-4";
          }
        }
      `}</style>
    </section>
  )
}

export default CategoriesGrid