import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'
import { Suspense } from 'react'
import { Toaster } from 'sonner'
import Loading from './loading'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: `%s | Library App`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION
  //metadataBase: new URL(SERVER_URL)  - FOR PRODUCTION ONLY
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='flex h-screen flex-col'>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
