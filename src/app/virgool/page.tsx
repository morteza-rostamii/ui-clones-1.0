"use client"

import Hero from '@/sites/virgool/pages/home/Hero'
import SectionBooks from '@/sites/virgool/pages/home/SectionBooks'
import SectionOnSell from '@/sites/virgool/pages/home/SectionOnSell'
import Products from '@/sites/virgool/pages/home/Products'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { HiOutlineHeart } from 'react-icons/hi';
import SectionBanners from '@/sites/virgool/pages/home/SectionBanners'
import SectionServices from '@/sites/virgool/pages/home/SectionServices'

const weeklyProducts = [
  {
    id: uuidv4(),
    name: 'مداد',
    price: '124,000 ت',
    image: '/virgool/weeks/Rectangle 102 (1).png',
    likeIcon: <HiOutlineHeart/>
  },
  {
    id: uuidv4(),
    name: 'کیف',
    price: '124,000 ت',
    image: '/virgool/weeks/Rectangle 102 (2).png',
    likeIcon: <HiOutlineHeart/>
  },
  {
    id: uuidv4(),
    name: 'ماژیک',
    price: '124,000 ت',
    image: '/virgool/weeks/Rectangle 102.png',
    likeIcon: <HiOutlineHeart/>
  },
  {
    id: uuidv4(),
    name: 'تراش',
    price: '124,000 ت',
    image: '/virgool/weeks/Rectangle 102.png',
    likeIcon: <HiOutlineHeart/>
  },
]

const onSellProducts = [
  {
    id: uuidv4(),
    name: 'دفتر',
    price: '124,000 ت',
    image: '/virgool/tops/Rectangle 112 (1).png',
    likeIcon: <HiOutlineHeart/>
  },
  {
    id: uuidv4(),
    name: 'ماژیک',
    price: '124,000 ت',
    image: '/virgool/tops/Rectangle 112 (2).png',
    likeIcon: <HiOutlineHeart/>
  },
  {
    id: uuidv4(),
    name: 'کاغذ',
    price: '124,000 ت',
    image: '/virgool/tops/Rectangle 112 (3).png',
    likeIcon: <HiOutlineHeart/>
  },
  {
    id: uuidv4(),
    name: 'جامدادی',
    price: '124,000 ت',
    image: '/virgool/tops/Rectangle 112.png',
    likeIcon: <HiOutlineHeart/>
  },
]

const PageVirgool = () => {
  return (
    <div
    id='page-virgool'
    className='
    
    '
    >
      <div
      className='
      w-full
      '
      >
        <Hero/>      
        <Products
        headTxt={'جدیدترین محصولات هفته'}
        products={weeklyProducts}
        />
        <SectionBooks/>
        <Products
        headTxt={'پیشنهادهای ویژه'}
        products={onSellProducts}
        color={'bg-orange-300'}
        />
        <SectionBanners/>
        <SectionServices/>
      </div>
    </div>
  )
}

export default PageVirgool

/* 
<style jsx>
      {`
        #page-virgool {
          background: red;
        }
      `}
      </style>
*/