import React from 'react'

import './index.css'
import Header from '@/sites/digikala/layouts/Header'

const layout = ({
  children
}: any) => {
  return (
    <main
    dir='rtl'
    >
      <Header/>
      {children}
      {/* <Footer/> */}
    </main>
  )
}

export default layout