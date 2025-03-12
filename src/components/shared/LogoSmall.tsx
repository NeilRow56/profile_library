import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function LogoSmall() {
  return (
    <div className='flex w-full flex-col items-center space-x-4 sm:flex'>
      <div>
        <Link href='/'>
          <Image
            className='flex'
            src='/logo.png'
            width={45}
            height={30}
            style={{ width: '100%', height: 'auto' }}
            alt='library logo'
          />
        </Link>
        <div>
          <Link href='/'>
            <h3 className='text-primary mt-2 text-xs font-bold'>Library</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LogoSmall
