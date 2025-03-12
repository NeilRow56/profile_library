'use client'
import { Moon, Sun } from 'lucide-react'

import { useTheme } from './ThemeProvider'
import { Button } from './ui/button'

export default function ThemeModeToggle() {
  const { setTheme, theme } = useTheme()
  return (
    <Button
      variant='outline'
      size='icon'
      className='titlebar-button h-full border-0 bg-transparent transition-all duration-500 ease-in-out hover:border-0 hover:bg-transparent hover:shadow-none hover:brightness-150 focus-visible:ring-0'
      onClick={() => {
        const colors = [
          'zinc',
          'rose',
          'blue',
          'green',
          'orange',
          'red',
          'yellow',
          'violet'
        ]
        const randomColor = colors[
          Math.floor(Math.random() * colors.length)
        ] as ThemeColors
        setTheme({
          mode: theme.mode === 'light' ? 'dark' : 'light',
          color: randomColor
        })
      }}
    >
      <Sun className='text-primary h-[1.6rem] w-[1.6rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
      <Moon className='text-primary absolute h-[1.6rem] w-[1.6rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
