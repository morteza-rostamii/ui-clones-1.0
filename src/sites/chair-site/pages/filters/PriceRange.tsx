'use client'

import React, { useState } from 'react'
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'
import RangeSliderCustom from './RangeSliderCustom';
import { Slider } from 'antd';

const PriceRange = () => {
  const max = 10000000;
  const min = 0;
  const [range, setRange] = useState([min, max]);
  
  function handRangeChange(values: number[]) {
    console.log(values[0], values[1])
    setRange(values);
  }

  return (
    <div
    className='
    mb-10
    '
    >
      <h2
      className='
      text-xl font-bold mb-6
      '
      >
        قیمت
      </h2>

      {/* slider */}
      <div
      className='mb-10'
      >
        {/* <RangeSliderCustom 
        //value={range} 
        //onChange={setRange}
        /> */}
        <Slider
        min={min}
        max={max}
        reverse={true}
        range
        //defaultValue={[min, 3000]}
        value={range}
        onChange={(e) => handRangeChange(e)}
        />
      </div>

      {/* price range */}
      <div
      className='
      flex flex-col gap-3 items-center
      '
      >
        <div
        className='
        flex items-center gap-4
        bg-slate-50 p-2 px-6 rounded-lg w-[90%] justify-center
        '
        >
          <span>از</span>
          <span 
          className='text-red-400 font-bold text-xl'
          style={{fontFamily: 'Lato'}}
          >
          {range[0]}
          </span>
          <span>
            تومان
          </span>
        </div>
        
        <div
        className='
        flex items-center gap-4
        bg-slate-50 p-2 px-6 rounded-lg w-[90%] justify-center
        '
        
        >
          <span>تا</span>
          <span 
          style={{fontFamily: 'Lato'}}
          className='text-red-400 font-bold text-xl'>
            {range[1]}
          </span>
          <span>
            تومان
          </span>
        </div>
      </div>
    </div>
  )
}

export default PriceRange