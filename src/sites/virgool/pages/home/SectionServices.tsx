import React from 'react'
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { HiArrowPathRoundedSquare, HiOutlineClock, HiOutlineTruck } from 'react-icons/hi2';
import { v4 as uuidv4 } from 'uuid';

const items = [
  {
    id: uuidv4(),
    icon: <HiOutlineCurrencyDollar />,
    text: 'امکان مقایسه قیمت',
  },
  {
    id: uuidv4(),
    icon: <HiArrowPathRoundedSquare />,
    text: 'امکان مقایسه قیمت',
  },
  {
    id: uuidv4(),
    icon: <HiOutlineTruck />,
    text: 'امکان مقایسه قیمت',
  },
  {
    id: uuidv4(),
    icon: <HiOutlineClock />,
    text: 'امکان مقایسه قیمت',
  },
]

const SectionServices = () => {
  return (
    <section
    className='
    bg-slate-50
    '
    >
      <div
      className='
      grid grid-cols-2 gap-6
      lg:grid-cols-4
      text-gray-800 p-6 py-8
      container mx-auto
      '
      >
        {
          items.map((el:any) => (
            <Item
            icon={el.icon}
            text={el.text}
            />
          ))
        }
      </div>
    </section>
  )
}

const Item = ({
  icon,
  text,
}:any) => {
  return (
    <div
    className='
    flex flex-col items-center gap-4
    '
    >
      <span
      className='
      text-4xl text-gray-500 
      lg:text-6xl
      '
      >  
      {icon}
      </span>
      <span>{text}</span>
    </div>
  )
}

export default SectionServices