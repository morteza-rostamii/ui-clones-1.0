import { Button } from 'antd'
import React from 'react'
import { HiOutlineHeart } from 'react-icons/hi'

const CardWeekProduct = ({
  product,
}: any) => {
  return (
    <div
    className='
    relative
    flex rounded-md overflow-hidden
    bg-green-50
    '
    >
      <img 
      className='
      w-full
      '
      src={product.image} 
      alt="" />

      {/* overlay */}
      <div
      className='
      absolute top-0 bottom-0 left-0 right-0
      flex flex-col justify-between
      #bg-red-500 #opacity-10
      '
      >
        <div
        className='
        p-3
        '
        >
          <Button
          shape={'circle'}
          type='default'
          size='middle'
          icon={<HiOutlineHeart size={22}/>}
          style={{
            color: '#B2DED7'
          }}
          >
          </Button>
        </div>
        <div
        className='
        flex justify-between p-4 bg-teal-100
        '
        >
          <span>
            {product.price}
          </span>
          <span>
            {product.name}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardWeekProduct