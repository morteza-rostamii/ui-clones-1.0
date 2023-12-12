'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {motion, useAnimation} from 'framer-motion'
import { Button, IconButton } from '@chakra-ui/react'
import { HiOutlineHeart } from 'react-icons/hi'
import { HiOutlineViewfinderCircle } from 'react-icons/hi2'
import Link from 'next/link'
import { TProduct } from '../../data/DataChair'
import useChairStore from '../../data/ChairStore'

// custom animation hook
function useAnimateAddBtn() {
  const controls = useAnimation();

  const onHoverStart = () => controls.start({
    y: -100,
  });

  const onHoverEnd = () => controls.start({
    y: 0,
  });

  return {
    controls, 
    onHoverStart,
    onHoverEnd,
  }
}

function useAnimateSideBtns() {
  const controlsSideBtns = useAnimation();

  const onHoverStartSideBtns = () => controlsSideBtns.start({
    x: -60,
  });

  const onHoverEndSideBtns = () => controlsSideBtns.start({
    x: 0,
  });

  return {
    controlsSideBtns, 
    onHoverStartSideBtns,
    onHoverEndSideBtns,
  }
}

const CardItem = ({
  item,
}: {item: TProduct}) => {
  const [cardHover, setCardHover] = useState(false);
  const {controls, onHoverEnd, onHoverStart} = useAnimateAddBtn();
  const {controlsSideBtns, onHoverStartSideBtns, onHoverEndSideBtns} = useAnimateSideBtns();
  
  const {items, addItem, itemExist} = useChairStore();
  const [itemIsIn, setItemIsIn] = useState(itemExist(item));

  function handCardHoverStart() {
    onHoverStart();
    onHoverStartSideBtns();
    setCardHover(true);
  }

  function handCardHoverEnd() {
    onHoverEnd();
    onHoverEndSideBtns();
    setCardHover(false);
  }

  useEffect(() => {
    console.log(items, itemExist(item));
    setItemIsIn(itemExist(item));
  }, [items])

  return (
    <div
    id='card--item'
    className='
    relativebg-white shadow-lg
    '

    onMouseEnter={handCardHoverStart}
    onMouseLeave={handCardHoverEnd}
    >
      {/* image and overlay */}
      <div
      className='
      relative aspect-[1/1.2] 
      cursor-pointer w-full overflow-hidden
      mb-4
      '
      >

        {/* discount tag */}
        <span
        style={{fontFamily: 'Lato'}}
        className='
        absolute top-4 left-4 z-10
        bg-red-200 text-black p-1 px-4 rounded-md
        '
        >
          30%
        </span>

        {/* fixed image */}
        <Image
        className='w-full'
        src={item.images[0]}
        alt='item'
        fill
        />

        {/* image on over */}
        <motion.div
        className='
        absolute top-0 bottom-0 left-0 right-0

        '

        // animation
        initial={{opacity: 0}}
        //whileHover={{opacity: 1}}
        animate={{opacity: cardHover ? 1 : 0}}
        transition={{duration: .3}}
        >
          <Image
          className='
          w-full
          '
          src={item.images[1]}
          alt='item-hover'
          fill
          />
        </motion.div>

        {/* add to cart */}
        <motion.div
        className='
        absolute top-[110%] left-[50%] right-[50%]
        text-black w-[80%] 
        '
        
        style={{
          transform: 'translateX(50%)',
        }}

        initial={{
          y: 0,
          x: '50%',
        }}
        animate={controls}
        >
          <Button
          colorScheme='red'
          width={'100%'}
          isDisabled={itemIsIn}

          onClick={() => addItem(item)}
          >
            اضافه به سبد
          </Button>
        </motion.div>

        {/* side btns */}
        <motion.div
        className='
        absolute top-4 left-[100%]
        flex flex-col gap-2
        '

        //initial={{}}
        animate={controlsSideBtns}
        >
          <IconButton
          aria-label=''
          variant={'outline'}
          isRound={true}
          colorScheme='gray'
          icon={<HiOutlineHeart size={24}/>}
          >
          </IconButton>
          <IconButton
          aria-label=''
          variant={'outline'}
          isRound={true}
          colorScheme='gray'
          icon={<HiOutlineViewfinderCircle size={24}/>}
          >
          </IconButton>
        </motion.div>
      </div>

      {/* footer */}
      <div
      className='
      flex flex-col gap-2 px-2
      '
      >
        <Link
        className='
        text-lg font-bold
        hover:text-red-400
        '
        href={'/chair-site'}
        >
        {item.name}
        </Link>
        <div
        className='
        flex gap-2 items-center
        '
        >
          <span
          className='
          text-gray-500 line-through
          '
          style={{fontFamily: 'Lato'}}
          >
            {item.discount}
          </span>
          <div
          className='flex items-center gap-2 '
          >
            <span
            className='
            font-bold
            '
            style={{fontFamily: 'Lato'}}
            >
            {item.price}
            </span>
            <span className='text-sm text-gray-500'>
              تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardItem