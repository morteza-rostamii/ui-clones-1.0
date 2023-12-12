import React from 'react'

import './index.css'
import Header from '@/sites/chair-site/layouts/Header'
import Footer from '@/sites/chair-site/layouts/Footer'
import { ChakraProvider } from '@chakra-ui/react'

const layout = ({
  children
}: any) => {
  return (
    <main
    dir='rtl'
    >
      <Header/>
      {children}
      <Footer/>
    </main>
  )
}

export default layout