import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { categorySchema } from '@/app/schemas/category'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SubmitButton } from '@/components/shared/SubmitButton'
import { z } from 'zod'

type CategoryDialogProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  category?: string
}

function AddCategoryDialog({ setOpen, open, category }: CategoryDialogProps) {
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: { name: '' }
  })

  const onSubmit = async (values: z.infer<typeof categorySchema>) => {
    console.log(values)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add category</DialogTitle>
          <DialogDescription></DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-1'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='name'>Category</FormLabel>
                    <FormControl>
                      <Input placeholder='category name' id='name' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className='w-[100px] py-2'>
                <SubmitButton text='Create' />
              </div>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default AddCategoryDialog
