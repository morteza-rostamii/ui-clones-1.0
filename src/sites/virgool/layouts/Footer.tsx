import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { TfiApple } from "react-icons/tfi";
import { IoLogoAndroid } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
    className='
    bg-orange-300
    '
    >
      <div
      className='
      grid grid-cols-2 gap-10 
      md:grid-cols-2
      lg:grid-cols-4
      lg:justify-items-center
      container mx-auto
      px-10 py-8

      '
      >
        <div dir='rtl'>
          <h2 
          className='
          mb-4 font-semibold 
          '
          >
            ارتباط با ما
          </h2>
          <div
          className='
          grid grid-cols-2 grid-rows-2 gap-4
          '
          >
            <FaInstagram size={24}/>
            <TfiApple size={24}/>
            <IoLogoAndroid size={24}/>
            <FaGooglePlay size={24}/>
          </div>
        </div>
        <div dir='rtl'>
          <h2
          className='
          mb-4 font-semibold
          '
          >
          درباره ما
          </h2>
          <p
          className='
          text-gray-700
          '
          >
          فروشگاه اینترنتی لوازم تحریر ویرگول آماده ارائه خدمات 24 ساعته به شما عزیزان است. این فروشگاه از سال 96 تاسیس شده و یکی از بهترین و کامل‌ترین مراکز فروش لوازم مورد نیاز شماست.
          </p>
        </div>
        <div dir='rtl'>
          <h2
          className='
          mb-4 font-semibold
          '
          >
          خدمات مشتریان
          </h2>
          <div
          className='
          text-gray-700 text-sm font-bold flex flex-col gap-2
          '
          >
            <a href="">
            چگونگی بازگشت کالا
            </a>
            <a href="">
            اطلاع رسانی
            </a>
            <a href="">
            پرسش‌های متداول
            </a>
          </div>
        </div>
        <div dir='rtl'>
          <h2
          className='
          mb-4 font-semibold 
          '
          >
          راهنما
          </h2>
          <div
          className='
          text-gray-700 text-sm font-bold flex flex-col gap-2
          '
          >
            <a href="">
            چگونگی ثبت سفارش
            </a>
            <a href="">
            چگونگی پرداخت
            </a>
            <a href="">
            چگونگی ارسال کالا
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer