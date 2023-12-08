import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react'
import { HiArrowRight } from 'react-icons/hi'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { HiOutlineMapPin } from 'react-icons/hi2'

const AccorSearch = () => {
  return (
    <Accordion
    defaultIndex={[0]}
    >
      <AccordionItem 
      bgColor={'white'}
      >
        <h2>
          <AccordionButton>
            <Box 
            className='font-bold'
            as="span" flex='1' textAlign='left'>
              Where to?
            </Box>
            <span>
              Location
            </span>
            {/* <AccordionIcon /> */}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <form
          className='
          self-start mb-3
          '
          >
            <InputGroup>
              <Input 
              //borderRadius={'9999px'}
              type='email' 
              pr={'4.5rem'}
              focusBorderColor='purple.400'
              placeholder='Search for location' />
              <InputRightElement 

              //pointerEvents='none'
              >
                <IconButton
                aria-label=''
                size={'sm'}
                colorScheme='purple'
                isRound={true}
                icon={<HiMagnifyingGlass size={18}/>}
                >
                </IconButton>
              </InputRightElement>
            </InputGroup>
          </form>

          {/* location list */}
          <div>
            <h2
            className='
            mb-2 font-bold
            '
            >
              Locations
            </h2>
            <ul
            className='
            flex flex-col gap-2
            '
            >
              {
                ['Iran', "America", 'Canada', 'Germany', 'Armenia'].map((el:any, i) => {
                  return (
                    <div
                    className='
                    flex items-center gap-2
                    text-gray-600 text-base
                    '
                    >
                      <HiOutlineMapPin/>
                      <span>
                        {el}
                      </span>
                    </div>
                  )
                })
              }
            </ul>
          </div>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem
      bgColor={'white'}
      >
        <h2>
          <AccordionButton>
            <Box 
            className='font-bold'
            as="span" flex='1' textAlign='left'>
              When
            </Box>
            {/* <AccordionIcon /> */}
            <span>
            Feb 06 - Feb 23
            </span>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AccorSearch