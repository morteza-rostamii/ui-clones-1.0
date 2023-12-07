import Header from '@/sites/booking/layouts/Header'
import React from 'react'
import Footer from '@/sites/booking/layouts/Footer'

import './index.css'

const layout = ({
  children
}: any) => {
  return (
    <main>
      <Header/>
      {children}
      <Footer/>
    </main>
  )
}

export default layout