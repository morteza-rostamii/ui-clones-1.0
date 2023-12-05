import React from 'react'
import BtnMore from './BtnMore'
import Image from 'next/image'

const CardBook = ({
  book,
}:any) => {
  return (
    <div
    dir={book.id % 2 !== 0 ? 'rtl' : 'ltr'}
    className='
    flex bg-amber-200 px-8 py-4 gap-8 justify-between
    rounded-md
    '
    >
       <div>
       </div>
       <div
       className='
       relative
       flex flex-col
       '
       >
        <div
        className='
        relative w-full h-full flex-1
        '
        style={{
          aspectRatio: '1/1.5',
        }}
        >
          <Image
          src={book.image}
          alt={book.title}
          //sizes='100vw'
          fill
          style={{
            width: '100%',
            objectFit: 'cover',
          }}
          />
        </div>
        <BtnMore 
        bgColor=''
        text={'مشاهده بیشتر'}
        />
       </div>

       <div
       className='
       text-right
       '
       >
        <h2
        dir='rtl'
        className='
        text-center font-bold text-lg
        '
        >
          کتاب: {book.title}
        </h2>
        <div
        className='
        text-sm text-gray-700 mb-3
        '
        >
          <p dir='rtl'>
          نویسنده: {book.writer}
          </p>
          <p dir='rtl'>
          ترجمه: {book.translator}
          </p>
          <p dir='rtl'>
          امتیازات: {book.score}
          </p>
        </div>
        <p
        dir='rtl'
        className='
        text-sm text-gray-800
        '
        >
        رمانی از ژوزه ساراماگو که نخستین بار در سال ۱۹۹۵ منتشر شد. ساراماگو که در سال ۱۹۹۸ جایزهٔ نوبل ادبیات را به‌دست‌آورد در این رمان از کوریِ آدم‌ها سخن گفته‌است. در این رمان، هاله‌ای سفیدرنگ بعد از کور شدن ...
        </p>
       </div>
    </div>
  )
}

export default CardBook