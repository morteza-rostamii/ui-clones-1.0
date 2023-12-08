import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { HiOutlineSearch } from 'react-icons/hi'
import { LuSettings2 } from 'react-icons/lu'
import Link from 'next/link'
import AccorSearch from './AccorSearch'
import { HiMagnifyingGlass } from 'react-icons/hi2'

const ModalSearch = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  

  return (
    <>
      <button
      className='
      flex items-center justify-between gap-6 flex-1
      rounded-full p-2 px-4
      bg-white shadow-md border-2
      lg:hidden
      '
      onClick={onOpen}
      >
        <span
        className='
        text-gray-600 p-2 border-2 rounded-full
        '
        >
        <HiOutlineSearch 
        size={24}
        />
        </span>
        <div
        className='
        flex-1
        '
        >
          <h2
          className='
          font-bold
          '
          >
            where to?
          </h2>
          <p
          className='
          text-gray-500 text-sm
          '
          >
            Anywhere . Any week . Add guests
          </p>
        </div>
        <span
        className='
        border-2 rounded-full p-2
        '
        >
        <LuSettings2 
        size={24}
        />
        </span>
      </button>

      <Modal 
      motionPreset='slideInBottom'
      onClose={onClose} 
      size={'full'} 
      isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
          className='
          flex flex-col gap-2
          bg-slate-50
          '
          >
            <div
            className='
            flex items-center justify-start w-full #bg-red-100
            '
            >
            <ModalCloseButton />
            </div>
            <nav
            className='
            flex gap-6 items-center justify-center py-3
            '
            >
              {
                ['stay', 'Expriences', 'Cars', 'Flights'].map((el: any, i:number) => (
                  <Link
                  className={`
                  ${i === 0 ? 'font-bold underline text-gray-900' : ''}
                  text-gray-600 text-base
                  `}
                  key={i}
                  href='/booking'
                  >
                  {el}
                  </Link>
                ))

              }
            </nav>
          </ModalHeader>
          
          <ModalBody
          className='
          bg-slate-50
          '
          >
            <AccorSearch/>
          </ModalBody>
          <ModalFooter
          className='
          flex items-center justify-between w-full
          bg-white
          border-t-[1px]
          '
          display={'flex'}
          justifyContent={'space-between'}
          >
            <Button
            variant={'link'}
            >
              Clear all
            </Button>
            <Button 
            colorScheme='purple'
            color='white'
            leftIcon={<HiMagnifyingGlass/>}
            onClick={onClose}>
              Search
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalSearch