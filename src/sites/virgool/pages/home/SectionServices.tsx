import React from 'react'
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { HiArrowPathRoundedSquare, HiOutlineClock, HiOutlineTruck } from 'react-icons/hi2';
import { v4 as uuidv4 } from 'uuid';

const items = [
  {
    id: uuidv4(),
    icon: <HiOutlineCurrencyDollar size={58}/>,
    text: 'امکان مقایسه قیمت',
  },
  {
    id: uuidv4(),
    icon: <HiArrowPathRoundedSquare size={58}/>,
    text: 'امکان مقایسه قیمت',
  },
  {
    id: uuidv4(),
    icon: <HiOutlineTruck size={58}/>,
    text: 'امکان مقایسه قیمت',
  },
  {
    id: uuidv4(),
    icon: <HiOutlineClock size={58}/>,
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
      flex flex-wrap gap-6 text-gray-800 p-6 py-8
      items-center justify-between 
      container mx-auto
      '
      >
        {
          items.map((el) => (
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
      {icon}
      <span>{text}</span>
    </div>
  )
}

export default SectionServices