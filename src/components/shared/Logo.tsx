import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/logo.png'

function Logo() {
  return (
    <div className='flex w-full items-center space-x-4'>
      <div>
        <Link href='/'>
          <Image
            className='hidden lg:flex'
            src={logo}
            style={{
              width: '120px',
              height: 'auto'
            }}
            alt='library logo'
            priority
          />
          <Image
            className='flex lg:hidden'
            src={logo}
            style={{
              width: '80px',
              height: 'auto'
            }}
            alt='library logo'
            priority
          />
        </Link>
      </div>

      <div>
        <Link href='/'>
          <h3 className='text-primary text-4xl font-bold'>Library</h3>
        </Link>
      </div>
    </div>
  )
}

export default Logo
