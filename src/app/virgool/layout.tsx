import Header from '@/sites/virgool/layouts/Header'
import React from 'react'
import Footer from '../../sites/virgool/layouts/Footer'

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