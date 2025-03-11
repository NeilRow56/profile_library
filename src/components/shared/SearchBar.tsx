import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'

import { Input } from '../ui/input'
import { Button } from '../ui/button'

function SearchBar() {
  return (
    <form>
      <div className='flex w-full flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2 lg:max-w-lg'>
        <p className='min-w-[70px] text-sm text-slate-500'>Search by</p>
        <Select name='search_by'>
          <SelectTrigger className='w-full lg:w-[480px]'>
            <SelectValue placeholder='Keyword' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='title'>Title</SelectItem>
            <SelectItem value='category'>Category</SelectItem>
          </SelectContent>
        </Select>
        <Input type='search' placeholder='Search...' name='search' />
        <Button type='submit'>Search</Button>
      </div>
    </form>
  )
}

export default SearchBar
