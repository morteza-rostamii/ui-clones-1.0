import { Button } from 'antd'
import React from 'react'

import CardWeekProduct from './CardWeekProduct';
import BtnMore from './BtnMore';

const Products = ({
  headTxt,
  products,
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
          <h2>
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
            products.map((el, i) => (
              <CardWeekProduct 
              key={i}
              product={el}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Products