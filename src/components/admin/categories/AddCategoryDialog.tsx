import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

type CategoryDialogProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function AddCategoryDialog({ setOpen, open }: CategoryDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Example Dialog Title</DialogTitle>
          <DialogDescription>Example Dialog Title</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default AddCategoryDialog
