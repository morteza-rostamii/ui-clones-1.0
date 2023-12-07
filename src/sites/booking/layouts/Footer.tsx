import React from 'react'
import Logo from '../components/Logo'
import { AiOutlineFacebook } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
    className='
    border-t-2
    '
    >
      <div
      className='
      container mx-auto px-4 py-20 w-full
      grid grid-cols-2 gap-6
      md:grid-cols-4
      lg:grid-cols-5
      lg:gap-16
      ' 
      >
        <div
        className='
        grid grid-cols-2
        col-span-2
        md:col-span-4
        lg:col-span-1
        lg:grid-cols-1
        lg:gap-3
        '
        >
          <div
          className='
          w-20
          '
          >
            <Logo />
          </div>
          <div
          className='
          flex items-center justify-start 
          lg:flex-col
          lg:gap-4
          '
          >
            <Link
            className='
            flex gap-2 items-center
            lg:items-start w-full
            '
            href={'/booking'}
            >
              <AiOutlineFacebook size={24}/>
              <span
              className='
              hidden
              lg:block
              '
              >
                Facebook
              </span>
            </Link>
            <Link
            className='
            flex gap-2 items-center
            lg:items-start w-full
            '
            href={'/booking'}
            >
              <CiInstagram size={24}/>
              <span
              className='
              hidden
              lg:block
              '
              >
                Instagram
              </span>
            </Link>
            <Link
            className='
            flex gap-2 items-center
            lg:items-start w-full
            '
            href={'/booking'}
            >
              <PiYoutubeLogoLight size={24}/>
              <span
              className='
              hidden
              lg:block
              '
              >
                Youtube
              </span>
            </Link>
            <Link
            className='
            flex gap-2 items-center
            lg:items-start w-full
            '
            href={'/booking'}
            >
              <RiTwitterXFill size={24}/>
              <span
              className='
              hidden
              lg:block
              '
              >
                Tiwtter
              </span>
            </Link>
          </div>
        </div>

        <div>
          <h2
          className='
          mb-2 font-bold
          '
          >
            Getting started
          </h2>
          <ul
          className='
          text-gray-500
          '
          >
            {
              ['installation', 'Release Notes', 'Upgrade Guide', 'Browser Support', "Editor Support"].map((el:any, ) => (
                <li>
                  <Link
                  href={'/booking'}
                  >
                    {el}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div>
          <h2
          className='
          mb-2 font-bold
          '
          >
            Explore
          </h2>
          <ul
          className='
          text-gray-500
          '
          >
            {
              ['installation', 'Release Notes', 'Upgrade Guide', 'Browser Support', "Editor Support"].map((el:any, ) => (
                <li>
                  <Link
                  href={'/booking'}
                  >
                    {el}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div>
          <h2
          className='
          mb-2 font-bold
          '
          >
            Resources
          </h2>
          <ul
          className='
          text-gray-500
          '
          >
            {
              ['installation', 'Release Notes', 'Upgrade Guide', 'Browser Support', "Editor Support"].map((el:any, ) => (
                <li>
                  <Link
                  href={'/booking'}
                  >
                    {el}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div>
          <h2
          className='
          mb-2 font-bold
          '
          >
            Community
          </h2>
          <ul
          className='
          text-gray-500
          '
          >
            {
              ['installation', 'Release Notes', 'Upgrade Guide', 'Browser Support', "Editor Support"].map((el:any, ) => (
                <li>
                  <Link
                  href={'/booking'}
                  >
                    {el}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer