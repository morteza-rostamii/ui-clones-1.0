import Image from 'next/image'
import React from 'react'
import { fakerFA } from '@faker-js/faker'
import Svg from '../svg/Svg'
import Svg1 from '../svg/Svg1'
import Svg2 from '../svg/Svg2'
import Svg3 from '../svg/Svg3'
import Svg4 from '../svg/Svg4'

const items = [
  {
    id: 0,
    icon: <Svg/>,
    label: fakerFA.lorem.words(2),
  },
  {
    id: 1,
    icon: <Svg1/>,
    label: fakerFA.lorem.words(2),
  },
  {
    id: 2,
    icon: <Svg2/>,
    label: fakerFA.lorem.words(2),
  },
  {
    id: 3,
    icon: <Svg3/>,
    label: fakerFA.lorem.words(2),
  },
  {
    id: 4,
    icon: <Svg4/>,
    label: fakerFA.lorem.words(2),
  },
]

const Footer = () => {
  return (
    <footer
    className='
    border-t-[1px]
    '
    >
      <div
      className='
      container mx-auto px-4 py-10
      flex flex-col gap-10
      '
      >
        <div
        className='
        
        '
        >
          <div>
            <Image
            src={'/digikala/logo.svg'}
            alt='logo'
            width={100}
            height={40}
            />
          </div>
        </div>

        <div
        className='
        grid justify-items-center gap-4
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        '
        >
          {
            items.map((el: any, ) => (
              <div
              className='
              flex flex-col items-center text-center
              '
              >
                <div>
                  {el.icon}
                  {/* <Image
                  src={el.icon}
                  alt='icon'
                  width={60}
                  height={60}
                  /> */}
                </div>
                <span
                className='
                text-sm text-gray-600
                '
                >
                  {el.label}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer