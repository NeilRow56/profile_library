import React from 'react'

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

function Footer() {
  return (
    <footer className='bg-primary/60 space-y-2 rounded-t-md p-8'>
      <div className='flex space-x-4 text-sm text-white md:text-base'>
        <Link href='#'>Contact us</Link>
        <Link href='#'>Privacy and terms</Link>
        <Link href='#'>Accessibility</Link>
      </div>

      <Separator />
      <div className='flex space-x-4 text-sm text-white md:text-base'>
        <Link href='#'>Privacy statement</Link>
        <Link href='#'>Terms of use</Link>
        <Link href='#'>Accessibility statements</Link>
      </div>
    </footer>
  )
}

export default Footer
