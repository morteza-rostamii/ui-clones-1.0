import React from 'react'
import CardBook from './CardBook'
import { v4 as uuidv4 } from 'uuid';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const books = [
  {
    id: 0,
    title: 'کوری',
    writer: 'José Saramago',
    translator: 'مینو مشیری',
    score: '۴.۵/۵',
    brief: 'رمانی از ژوزه ساراماگو که نخستین بار در سال ۱۹۹۵ منتشر شد. ساراماگو که در سال ۱۹۹۸ جایزهٔ نوبل ادبیات را به‌دست‌آورد در این رمان از کوریِ آدم‌ها سخن گفته‌است. در این رمان، هاله‌ای سفیدرنگ بعد از کور شدن افراد مقابل چشمانشان ظاهر می‌شود....', 
    image: '/virgool/books/Rectangle 22.png',
  },
  {
    id: 1,
    title: 'کوری',
    writer: 'José Saramago',
    translator: 'مینو مشیری',
    score: '۴.۵/۵',
    brief: 'رمانی از ژوزه ساراماگو که نخستین بار در سال ۱۹۹۵ منتشر شد. ساراماگو که در سال ۱۹۹۸ جایزهٔ نوبل ادبیات را به‌دست‌آورد در این رمان از کوریِ آدم‌ها سخن گفته‌است. در این رمان، هاله‌ای سفیدرنگ بعد از کور شدن افراد مقابل چشمانشان ظاهر می‌شود....', 
    image: '/virgool/books/Rectangle 90.png',
  },
  {
    id: 2,
    title: 'کوری',
    writer: 'José Saramago',
    translator: 'مینو مشیری',
    score: '۴.۵/۵',
    brief: 'رمانی از ژوزه ساراماگو که نخستین بار در سال ۱۹۹۵ منتشر شد. ساراماگو که در سال ۱۹۹۸ جایزهٔ نوبل ادبیات را به‌دست‌آورد در این رمان از کوریِ آدم‌ها سخن گفته‌است. در این رمان، هاله‌ای سفیدرنگ بعد از کور شدن افراد مقابل چشمانشان ظاهر می‌شود....', 
    image: '/virgool/books/Rectangle 22.png',
  },
  {
    id: 3,
    title: 'کوری',
    writer: 'José Saramago',
    translator: 'مینو مشیری',
    score: '۴.۵/۵',
    brief: 'رمانی از ژوزه ساراماگو که نخستین بار در سال ۱۹۹۵ منتشر شد. ساراماگو که در سال ۱۹۹۸ جایزهٔ نوبل ادبیات را به‌دست‌آورد در این رمان از کوریِ آدم‌ها سخن گفته‌است. در این رمان، هاله‌ای سفیدرنگ بعد از کور شدن افراد مقابل چشمانشان ظاهر می‌شود....', 
    image: '/virgool/books/Rectangle 90.png',
  },
]

const SectionBooks = () => {

  const onChange = (currentSlide:any) => {
    console.log(currentSlide);
  };

  return (
    <section>
      <div
      className='
      container mx-auto
      '
      >
        <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        >
          {
            books.map((el:any) => (
              <SwiperSlide>
                <CardBook
                book={el}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default SectionBooks