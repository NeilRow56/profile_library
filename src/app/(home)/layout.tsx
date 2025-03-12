import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import Navbar from '@/components/home/Navbar'

import React from 'react'

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container mx-auto'>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default HomeLayout
