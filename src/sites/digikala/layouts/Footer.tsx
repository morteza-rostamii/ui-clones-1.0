import Image from 'next/image'
import React from 'react'
import { fakerFA } from '@faker-js/faker'

const items = [
  {
    id: 0,
    icon: 'https://www.digikala.com/statics/img/svg/footer/express-delivery.svg',
    label: fakerFA.lorem.words(2),
  },
  {
    id: 1,
    icon: 'https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg',
    label: fakerFA.lorem.words(2),
  },
  {
    id: 2,
    icon: 'https://www.digikala.com/statics/img/svg/footer/support.svg',
    label: fakerFA.lorem.words(2),
  },
  {
    id: 3,
    icon: 'https://www.digikala.com/statics/img/svg/footer/days-return.svg',
    label: fakerFA.lorem.words(2),
  },
  {
    id: 4,
    icon: 'https://www.digikala.com/statics/img/svg/footer/original-products.svg',
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
            src={'https://www.digikala.com/statics/img/svg/digi.svg'}
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
                  <Image
                  src={el.icon}
                  alt='icon'
                  width={60}
                  height={60}
                  />
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