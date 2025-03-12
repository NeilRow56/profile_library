'use client'

import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import AddCategoryDialog from './AddCategoryDialog'

function AddCategoryButton() {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex flex-col'>
      <Button className='self-end' onClick={() => setOpen(true)}>
        <PlusIcon />
        Add category
      </Button>
      <AddCategoryDialog open={open} setOpen={setOpen} />
    </div>
  )
}

export default AddCategoryButton
