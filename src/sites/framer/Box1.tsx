'use client'

import React from 'react'
import { motion, useAnimation } from 'framer-motion'

const Box1 = () => {

  const parentVariant = {
    init: {
      x: -100,
    },
    anime: {
      x: 10,

      transition: {
        delay: 1,
        // run this then children
        when: 'beforeChildren',
        // for staggerChildren to work =: do not set delay on children
        staggerChildren: 0.5,
      }
    }
  }

  const childVariant = {
    init: {
      x: -10,
      opacity: 0,
    },
    anime: {
      x: 200,
      opacity: 1,
      
      transition: {
        //delay: 1,
      }
    }
  }

  const control = useAnimation();

  return (
    <div
    className='
    flex flex-col gap-10
    bg-orange-50
    '
    >
      <motion.div
      className='
      flex w-20 h-20 items-center justify-center
      bg-red-100
      '

      // styles on the initial animation
      initial={{
        // 0 to 1
        opacity: 0.1,
      }}

      // animation on page load
      animate={{
        x: 400,
        opacity: 1,
        // 1.2 bigger
        // -1.2 filips it over
        scale: 1.2,
        // degree
        rotate: 360,
      }}

      transition={{
        duration: .6,
        type: 'spring',
        // the more the value: the harder the physics effect
        stiffness: 100,
        // the higher: more slows down
        damping: 10,
      }}
      >
        box-1
      </motion.div>

      <motion.div
      className='
      flex w-20 h-20 items-center justify-center
      bg-red-100 rounded-full
      '
      // event
      whileHover={{
        //background: 'blue',
        scale: 1.2,
        // smaller
        //scale: .4,
      }}
      drag
      dragConstraints={{
        right: 20,
        left: -20,
        top: 20,
        bottom: 20,
      }}
      >
        box-2
      </motion.div>
      
      {/* variants */}
      <motion.div
      className='
      flex rounded-md
      bg-orange-300 w-20 h-20 items-center justify-center
      '
      variants={parentVariant}
      initial='init'
      animate='anime'
      >
        <motion.div
        className='
        bg-yellow-300

        '
        variants={childVariant}
        // initial and animate auto are on children with the same name
        //initial='init'
        //animate='anime'
        >
          box-3-child-1
        </motion.div>

        <motion.div
        className='
        bg-yellow-300

        '
        variants={childVariant}
        //initial='init'
        //animate='anime'
        >
          box-3-child-2
        </motion.div>
      </motion.div>

      {/* keyframes */}
      <motion.div
      className='
      bg-red-500 w-20 h-20
      '

      animate={{
        // in each frame we get one of these sizes
        scale: [1, 1.4, 1.4, 1, 1],
        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        rotate: [0, 0, 270, 270, 0]
      }}
      transition={{
        // do the animation in 2 seconds
        duration: 2,
      }}
      >
        box-4
      </motion.div>

      {/* useAnimation hook */}
      <div>
        <button
        className='
        bg-orange-200 p-2
        '
        onClick={() => {
          control.start({
            x: 200,
          })
        }}
        >
          move right
        </button>
        <button
        className='
        bg-orange-200 p-2
        '
        onClick={() => {
          control.start({
            x: 0,
          })
        }}
        >
          move left
        </button>
        <motion.div
        className='
        p-4 bg-red-700 text-white w-20 h-20
        '
        animate={control}
        >
          box-5
        </motion.div>
      </div>
    </div>
  )
}

export default Box1