import React from 'react'

import './index.css'
import Header from '@/sites/digikala/layouts/Header'
import Footer from '@/sites/digikala/layouts/Footer'

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