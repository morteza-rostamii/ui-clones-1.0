import { Button } from 'antd'
import React from 'react'

import CardWeekProduct from './CardWeekProduct';
import BtnMore from './BtnMore';

const Products = ({
  headTxt,
  products,
  color,
  discount,
}:any) => {
  return (
    <section>
      <div
      className='
      flex flex-col gap-6
      container mx-auto p-6
      '
      >
        <div
        className='
        flex items-center justify-between
        '
        >
          <BtnMore 
          bgColor={'#B2DED7'}
          text={'مشاهده بیشتر'}
          />
          <h2
          className='
          font-bold text-lg
          '
          >
            {headTxt}
          </h2>
        </div>

        <div
        className='
        grid gap-3
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        '
        >
          {
            products.map((el:any, i:any) => (
              <CardWeekProduct 
              key={i}
              product={el}
              color={color}
              discount={discount}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Products