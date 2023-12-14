import React from 'react'
import { IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { HiArrowRight } from 'react-icons/hi'
import Image from 'next/image'

const Newsletter = () => {
  return (
    <section
    className='
    mb-20
    '
    >
      <div
      className='
      container mx-auto px-4
      flex flex-col gap-8
      md:flex-row md:items-center
      md:gap-0
      '
      >
        {/* left */}
        <div
        className='
        flex flex-col gap-6 flex-grow[4] basis-[40%]
        py-4 pr-6
        '
        >
          {/* join our newsletter */}
          <div>
            <h2
            className='
            text-2xl font-semibold mb-3
            md:text-3xl
            lg:text-5xl
            '
            >
              Join our newsletter <span className='text-2xl'>🎉</span>
            </h2> 
            <p
            className='
            text-gray-600 max-w-md
            lg:text-lg
            '
            >
            Read and share new perspectives on just about any topic. Everyone’s welcome.
            </p>
          </div>

          {/* pils */}
          <div
          className='
          flex flex-col gap-2
          '
          >
            <p
            className='
            flex items-center gap-2
            lg:text-lg
            '
            >
              <span
              className='
              bg-blue-300 p-1 px-2 rounded-full text-sm
              '
              >
                01
              </span>
              <span>
              Get more discount
              </span>
            </p>
            <p
            className='
            flex items-center gap-2 
            lg:text-lg
            '
            >
              <span
              className='
              bg-red-300 p-1 px-2 rounded-full text-sm
              '
              >
                02
              </span>
              <span>
              Get premium magazines
              </span>
            </p>
          </div>

          {/* input */}
          <form
          className='
          self-start
          '
          >
            <InputGroup>
              <Input 
              borderRadius={'9999px'}
              type='email' 
              pr={'4.5rem'}
              focusBorderColor='purple.400'
              placeholder='Enter your email' />
              <InputRightElement 

              //pointerEvents='none'
              >
                <IconButton
                aria-label=''
                size={'sm'}
                colorScheme='purple'
                isRound={true}
                icon={<HiArrowRight size={18}/>}
                >
                </IconButton>
              </InputRightElement>
            </InputGroup>
          </form>
        </div>

        {/* right: image */}
        <div
        className='
        relative #aspect-[1/1] 
        flex-grow[6] basis-[60%] w-full
        '
        >
          <Image
          className='
          object-contain w-full #max-h-96
          '
          src={'/booking/SVG-subcribe2.webp'}
          alt='newsletter'
          //fill
          width={800}
          height={800}
          />
        </div>
      </div>
    </section>
  )
}

export default Newsletter