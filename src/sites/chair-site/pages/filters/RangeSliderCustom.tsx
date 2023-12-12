'use client'

import React, { useEffect, useState } from 'react'
import './RangeSliderCustom.css'

const RangeSliderCustom = ({
  min=0,
  max=1000000,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [pos, setPos] = useState({
    min: min,
    max: max,
  });
  const rangeGap = 1000;

  function handMinChange(event: any) {
    event.preventDefault();

    const newMin = parseInt(event.target.value);

    // min can't be greater than max
    if (newMin >= maxVal) return setMinVal(minVal);

    setMinVal(newMin);
    //console.log(event.target.min, event.target.max, event.target.value)
  }

  function handMaxChange(event: any) {
    event.preventDefault();
    const newMax = parseInt(event.target.value);

    if (newMax <= minVal) return setMaxVal(maxVal);

    setMaxVal(newMax);
    //console.log(event.target.min, event.target.max, event.target.value)
  }

  useEffect(() => {
    setPos({
      // (10 / 100 = 0.1) * 100 = 10%
      // so: from right = 10% push the progress-bar
      min: (minVal / max) * 100,
      // 100 - 70 = 30% =: distance from left
      max: 100 - (maxVal / max) * 100
    })
  }, [minVal, maxVal]);

  /* useEffect(() => {
    console.log('lvoerrrrrrrrrrr:: ', pos);
  }, [pos.min, pos.max]) */

  return (
    <div>
      {/* custom */}
      <div
      className='
      slider
      relative
      h-[5px]
      rounded-[5px]
      bg-gray-300
      '
      >
        <div 
        className={`
        absolute
        progress-bar
        h-[5px]
        #left-[25%]
        #right-[25%]
        rounded-[5px]
        bg-gray-700
        #z-10
        `}

        style={{
          right: pos.min + '%',
          left: pos.max + '%',
          //right: '20%',
          //left: '20%'
        }}
        >
        </div>
      </div>

      {/* actuall range input */}
      <div
      className='
      relative mb-8
      range-input'
      >
        <input
        className='
        input-min'
        type='range'
        min={min}
        max={max}
        value={minVal}
        onChange={(e:any) => handMinChange(e)}
        />
        <input
        className='input-max'
        type='range'
        min={min}
        max={max}
        value={maxVal}
        onChange={(e:any) => handMaxChange(e)}
        />
      </div>

      {/* show price range */}
      <div
      className='
      flex gap-4 items-center
      '
      >
        <p>
          {minVal}
        </p>
        <p>
          {maxVal}
        </p>
      </div>
    </div>
  )
}

export default RangeSliderCustom