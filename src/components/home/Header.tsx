// 'use client'
import React from 'react'

import Logo from '../shared/Logo'
import SearchBar from '../shared/SearchBar'
import { ThemeToggle } from '../ThemeToggle'

function Header() {
  return (
    <>
      <header className='container mx-auto py-2 lg:py-4'>
        {/* mobile */}
        <div className='flex flex-col justify-between p-6 sm:hidden'>
          <div className='flex items-center'>
            {/* logo */}
            <Logo />
            {/* sidebar trigger */}
            Sidebar Trigger
          </div>
          <SearchBar />
        </div>

        {/* desktop */}
        <div className='hidden items-center justify-between gap-2 p-6 sm:flex'>
          {/* logo */}
          <Logo />
          <ThemeToggle />
          <SearchBar />
        </div>
      </header>
    </>
  )
}

export default Header
